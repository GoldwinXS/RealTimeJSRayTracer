import * as THREE from "three";
import { VoxelGeometry } from "./VoxelGeometry";
import { BVHManager } from "./BVHManager";
import { TextureAtlasBuilder } from "./TextureAtlasBuilder";
import { ShaderDataBuilder } from "./ShaderDataManager";
import { SpecialColorManager } from "./SpecialColorManager";

/**
 * VoxelGeometryManager handles the creation, management, and rendering preparation of multiple voxel geometries.
 * It provides functionality to add or remove voxel geometries, update their states, compile them into a texture atlas
 * for efficient rendering, and prepare data for use in shader programs.
 *
 * This class utilizes the VoxelGeometry class for individual geometries and manages their collective state. It's
 * responsible for packing geometries into a texture atlas, ensuring that geometries are correctly positioned and
 * normalized for rendering in WebGL shaders.
 *
 * The manager also takes care of asynchronous loading of voxel data, ensuring all geometries are properly loaded
 * before any rendering data is compiled. It offers methods to add or remove geometries dynamically and to compile
 * the final texture atlas and shader data required for rendering.
 *
 * @class
 *
 * @property {THREE.Vector3} maxTextureDimensions - The maximum dimensions of the texture atlas.
 * @property {Object} voxelGeometries - An object storing VoxelGeometry instances.
 * @property {Array} voxelData - An array to store compiled voxel data.
 * @property {THREE.Data3DTexture} voxelTexture - The compiled 3D texture for all voxel geometries.
 * @property {number} currentVoxelIndex - A count of the total voxel geometries managed.
 *
 * @method addGeometry - Asynchronously adds and loads a voxel geometry.
 * @method removeGeometry - Removes a voxel geometry based on its ID.
 * @method update - Updates the data required for rendering the voxel geometries.
 * @method #createVoxelTexture - Internally creates a 3D texture for the fragment shader.
 */
export class VoxelGeometryManager {
  // TODO: Calculate max size from user device.
  maxTextureDimensions = new THREE.Vector3(258, 258, 258);
  voxelGeometries = {};
  cachedGeometries = {};
  voxelData = [];
  lights = {};
  totalLights = 0;
  needsUpdate = false;
  voxelTexture;
  lightTexture;
  lightTextureSize;
  currentVoxelIndex = 0;
  totalVoxelGeometries = 0;
  textureWidth;
  bvh = new BVHManager();

  constructor() {
    this.worker = new Worker(
      new URL("./VoxelGeometryWorker.js", import.meta.url),
      { type: "module" }
    );
    this.textureAtlasBuilder = new TextureAtlasBuilder(
      this.maxTextureDimensions
    );
    this.shaderDataBuilder = new ShaderDataBuilder();
    this.specialColorManager = new SpecialColorManager();
    this.setupWorkerListener();
  }

  setupWorkerListener() {
    this.worker.onmessage = (e) => {
      const { action, data } = e.data;

      switch (action) {
        case "updated":
          this.handleWorkerUpdateResponse(data);
          break;
      }
    };
  }

  handleWorkerUpdateResponse(data) {
    console.log("handeling update");
    this.voxelTexture = this.textureAtlasBuilder.createVoxelTexture(
      data.atlasData
    );

    // Assuming `this.geometries` is a Map or an object where keys are `id`s of geometries
    data.geometriesArray.forEach((serializedGeom) => {
      let geom = this.voxelGeometries[serializedGeom.id];
      if (geom) {
        if (typeof geom.deserialize === "function") {
          geom.deserialize(serializedGeom);
          // this.updateVoxelShaderData();
        }
      } else {
        console.warn(`Geometry with id ${serializedGeom.id} not found.`);
      }
    });

    this.totalLights = data.totalLights;
    this.lights = data.lights;
  }

  /**
   * Adds and loads a voxel geometry asynchronously.
   * @param {string} filename - The file path of the .vox file for the geometry.
   * @param {THREE.Vector3} position - The world position of the voxel geometry.
   * @param {number} voxelSize - The size of each voxel.
   * @returns {Promise} - A promise that resolves once the geometry is added and loaded.
   */
  async addGeometry(filename, position, voxelSize) {
    try {
      const currentId = this.currentVoxelIndex++;
      this.totalVoxelGeometries++;
      let geom;

      // Used a cached version of the geometry if available.
      if (this.cachedGeometries[filename]) {
        geom = VoxelGeometry.cloneFromInstance(
          position,
          this.cachedGeometries[filename],
          voxelSize
        );
      } else {
        // Create a new geometery
        geom = await VoxelGeometry.create(filename, position, voxelSize);
        this.needsUpdate = true;

        // Cache the geometry
        if (!this.cachedGeometries[filename]) {
          this.cachedGeometries[filename] = geom;
        }
      }

      geom.id = currentId;
      this.voxelGeometries[currentId] = geom;
      // this.bvh.addGeometry(geom);
      return currentId;
    } catch (error) {
      console.error(`Could not add geometry: ${error}`);
    }
  }

  /**
   * Removes a voxel geometry.
   * @param {number} id
   */
  async removeGeometry(id) {
    const geom = this.voxelGeometries[id];
    if (geom) {
      delete this.voxelGeometries[id];
      this.totalVoxelGeometries--;
    } else {
      console.warn(`Geometry ${id} not found.`);
    }
  }

  setGeomPosition(id, position) {
    this.voxelGeometries[id].setPosition(position);
  }

  setGeomRotation(id, input, degrees) {
    this.voxelGeometries[id].setRotation(input, degrees);
  }

  /**
   * Updates the data needed to render the voxel geometries.
   */
  async update() {
    this.textureAtlasBuilder.packVoxelGeometries(this.voxelGeometries);
    const geometriesData = Object.values(this.voxelGeometries).map((geometry) =>
      geometry.serialize()
    );

    const data = {
      maxTextureDimensions: {
        x: this.maxTextureDimensions.x,
        y: this.maxTextureDimensions.y,
        z: this.maxTextureDimensions.z,
      },
      specialColors: this.specialColorManager.specialColors,
      geometriesData: geometriesData,
    };

    // Return a new promise that resolves when the worker sends back an 'updated' message
    return new Promise((resolve, reject) => {
      // Listen for a message from the worker indicating the update is complete
      this.worker.onmessage = (e) => {
        const { action, data } = e.data;

        if (action === "updated") {
          // Call a method to handle the update (e.g., refresh textures, shader data)
          this.handleWorkerUpdateResponse(data);
          resolve(); // Resolve the promise indicating the update is complete
        }
      };

      // If there's an error, you can use the reject function of the promise
      this.worker.onerror = (error) => {
        console.error("Worker error:", error);
        reject(error); // Reject the promise on error
      };

      // Send the data to the worker to initiate the update process
      this.worker.postMessage({ action: "update", data: data });
    });
  }

  #createBVH() {
    const node = this.bvh.constructBVH(Object.values(this.voxelGeometries), 0);
    this.uBVHTexture = this.bvh.nodeToTexture(node);
    this.uBVHTextureSize = this.uBVHTexture.source.data.width;
  }

  async updateVoxelShaderData() {
    if (this.needsUpdate && !this.isUpdating) {
      this.needsUpdate = false;
      this.isUpdating = true;
      await this.update();
      this.isUpdating = false;
      this.#createBVH();
    }
    if (this.isUpdating) {
      return;
    }
    const { dataTexture, textureWidth } =
      this.shaderDataBuilder.prepareShaderData(this.voxelGeometries);
    this.shaderData = dataTexture;
    this.textureWidth = textureWidth;
    const { lightTexture, lightTextureSize } =
      this.shaderDataBuilder.encodeLightsIntoDataTexture(this.lights);
    this.lightTexture = lightTexture;
    this.lightTextureSize = lightTextureSize;
  }
}
