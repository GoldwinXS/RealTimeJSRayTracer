import * as THREE from "three";
import { VoxelGeometry } from "./VoxelGeometry";

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
 * @method #packVoxelGeometries - Internally assigns positions to voxel geometry textures.
 * @method #compileTextureAtlas - Internally compiles a single 3D texture from the geometries.
 * @method #createVoxelTexture - Internally creates a 3D texture for the fragment shader.
 * @method #prepareShaderData - Gathers data from each VoxelGeometry for shader use.
 */
export class VoxelGeometryManager {
  // TODO: Calculate max size from user device.
  maxTextureDimensions = new THREE.Vector3(258, 258, 258);
  voxelGeometries = {};
  voxelData = [];
  lights = {};
  totalLights = 0;
  specialColors = {};
  fileTextureMapping = {};

  voxelTexture;
  lightTexture;
  lightTextureSize;
  currentVoxelIndex = 0;
  totalVoxelGeometries = 0;
  textureWidth;

  constructor() {
    this.worker = new Worker(
      new URL("./VoxelGeometryWorker.js", import.meta.url),
      { type: "module" }
    );

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
    this.voxelTexture = this.#createVoxelTexture(
      data.atlasData,
      this.maxTextureDimensions
    );

    // Assuming `this.geometries` is a Map or an object where keys are `id`s of geometries
    data.geometriesArray.forEach((serializedGeom) => {
      let geom = this.voxelGeometries[serializedGeom.id];
      // const geom = this.geometries[serializedGeom.id]; // If it's an object
      if (geom) {
        // If the geometry has a deserialize method, use it
        if (typeof geom.deserialize === "function") {
          geom.deserialize(serializedGeom);
        }
      } else {
        console.warn(`Geometry with id ${serializedGeom.id} not found.`);
      }
    });

    this.totalLights = data.totalLights;
    this.lights = data.lights;
    this.updateVoxelShaderData();
  }

  /**
   * Adds and loads a voxel geometry asynchronously.
   * @param {string} filepath - The file path of the .vox file for the geometry.
   * @param {THREE.Vector3} position - The world position of the voxel geometry.
   * @param {number} voxelSize - The size of each voxel.
   * @returns {Promise} - A promise that resolves once the geometry is added and loaded.
   */
  async addGeometry(filepath, position, voxelSize) {
    const geom = await VoxelGeometry.create(filepath, position, voxelSize);
    const currentId = this.currentVoxelIndex;
    this.voxelGeometries[currentId] = geom;
    geom.id = this.currentVoxelIndex;
    this.currentVoxelIndex++;
    console.log(
      `Currently have ${this.totalVoxelGeometries + 1} voxel geometries`
    );
    this.totalVoxelGeometries++;
    await this.#update();
    console.log(`Added geom ${currentId}`);
    return currentId;
  }

  /**
   * Removes a voxel geometry.
   * @param {number} id
   */
  removeGeometry(id) {
    delete this.voxelGeometries[id];
    this.totalVoxelGeometries--;
    console.log(`Removed geom ${id}`);
    this.#update();
  }

  setGeomPosition(id, position) {
    this.voxelGeometries[id].setPosition(position);
    this.updateVoxelShaderData();
  }

  setGeomRotation(id, input, degrees) {
    this.voxelGeometries[id].setRotation(input, degrees);
    this.updateVoxelShaderData();
  }

  /**
   * Updates the data needed to render the voxel geometries.
   */
  async #update() {
    await Promise.all(
      Object.values(this.voxelGeometries).map((geom) => geom.loaded)
    );
    this.#packVoxelGeometries(this.voxelGeometries, this.maxTextureDimensions);
    // Send the data to the worker rather than process it in this thread.
    const geometriesData = Object.values(this.voxelGeometries).map((geometry) =>
      geometry.serialize()
    );

    const data = {
      maxTextureDimensions: {
        x: this.maxTextureDimensions.x,
        y: this.maxTextureDimensions.y,
        z: this.maxTextureDimensions.z,
      },
      specialColors: this.specialColors,
      geometriesData: geometriesData,
    };

    // Now send this data to the worker
    this.worker.postMessage({ action: "update", data: data });
    // const atlasData = this.#compileTextureAtlas(this.voxelGeometries);
    // this.voxelTexture = this.#createVoxelTexture(
    //   atlasData,
    //   this.maxTextureDimensions
    // );
    // this.updateVoxelShaderData();
  }

  updateVoxelShaderData() {
    const { dataTexture, textureWidth } = this.#prepareShaderData(
      this.voxelGeometries
    );
    this.shaderData = dataTexture;
    this.textureWidth = textureWidth;
    const { lightTexture, lightTextureSize } =
      this.#encodeLightsIntoDataTexture();
    this.lightTexture = lightTexture;
    this.lightTextureSize = lightTextureSize;
  }

  /**
   * Assigns positions to voxel geometry textures.
   * @param {*} voxelGeometries
   * @param {*} maxTextureDimensions
   */
  #packVoxelGeometries(voxelGeometries, maxTextureDimensions) {
    const geometriesArray = Object.values(voxelGeometries);
    let currentSize = { x: 0, y: 0, z: 0 };
    let rowHeight = 0,
      layerDepth = 0;
    const marginSize = 1;

    // Sort the voxel geometries in descending order of their volume
    geometriesArray.sort((a, b) => {
      const volumeA =
        a.gridDimensions.x * a.gridDimensions.y * a.gridDimensions.z;
      const volumeB =
        b.gridDimensions.x * b.gridDimensions.y * b.gridDimensions.z;
      return volumeB - volumeA; // Descending order
    });

    geometriesArray.forEach((geometry) => {
      if (this.fileTextureMapping[geometry.filepath]) {
        // Assign existing atlas coordinates to this geometry instance
        geometry.textureMinPosition =
          this.fileTextureMapping[geometry.filename].textureMinPosition;
        geometry.textureMaxPosition =
          this.fileTextureMapping[geometry.filename].textureMaxPosition;
        geometry.textureMinPositionNormalized =
          this.fileTextureMapping[
            geometry.filename
          ].textureMinPositionNormalized;
        geometry.textureMaxPositionNormalized =
          this.fileTextureMapping[
            geometry.filename
          ].textureMaxPositionNormalized;
        return;
      }

      // Calculate and assign absolute positions with margins
      if (
        currentSize.x + geometry.gridDimensions.x + marginSize * 2 >
        maxTextureDimensions.x
      ) {
        currentSize.x = 0;
        currentSize.y += rowHeight + marginSize; // Add marginSize when moving to a new row
        rowHeight = 0;
      }

      if (
        currentSize.y + geometry.gridDimensions.y + marginSize * 2 >
        maxTextureDimensions.y
      ) {
        currentSize.y = 0;
        currentSize.z += layerDepth + marginSize; // Add marginSize when moving to a new layer
        layerDepth = 0;
      }

      geometry.textureMinPosition = new THREE.Vector3(
        currentSize.x + marginSize, // Add marginSize to the start position
        currentSize.y + marginSize,
        currentSize.z
      );
      geometry.textureMaxPosition = new THREE.Vector3(
        currentSize.x + geometry.gridDimensions.x + marginSize, // Account for marginSize at the end
        currentSize.y + geometry.gridDimensions.y + marginSize,
        currentSize.z + geometry.gridDimensions.z
      );

      // Update current positions and row/layer sizes

      // Update current positions and row/layer sizes, accounting for margins
      currentSize.x += geometry.gridDimensions.x + marginSize * 2; // Move currentSize.x by the geometry's width plus both left and right margins
      rowHeight = Math.max(
        rowHeight,
        geometry.gridDimensions.y + marginSize * 2
      ); // Adjust rowHeight considering the geometry's height plus top and bottom margins
      layerDepth = Math.max(layerDepth, geometry.gridDimensions.z); // Layer depth doesn't need margin since z is not tiled in 2D atlas

      // Calculate and assign normalized positions
      geometry.textureMinPositionNormalized = new THREE.Vector3(
        geometry.textureMinPosition.x / maxTextureDimensions.x,
        geometry.textureMinPosition.y / maxTextureDimensions.y,
        geometry.textureMinPosition.z / maxTextureDimensions.z
      );

      geometry.textureMaxPositionNormalized = new THREE.Vector3(
        geometry.textureMaxPosition.x / maxTextureDimensions.x,
        geometry.textureMaxPosition.y / maxTextureDimensions.y,
        geometry.textureMaxPosition.z / maxTextureDimensions.z
      );

      this.fileTextureMapping[geometry.filename] = {
        textureMinPosition: geometry.textureMinPosition,
        textureMaxPosition: geometry.textureMaxPosition,
        textureMinPositionNormalized: geometry.textureMinPositionNormalized,
        textureMaxPositionNormalized: geometry.textureMaxPositionNormalized,
      };
    });
  }

  /**
   * Creates a 3D texture from the given voxel data.
   * @param {Uint8Array} voxelData - The voxel data to be used in the texture.
   * @param {THREE.Vector3} size - The dimensions of the texture.
   * @returns {THREE.Data3DTexture} - The created 3D texture.
   */
  #createVoxelTexture(voxelData, size) {
    const voxelTexture = new THREE.Data3DTexture(
      voxelData,
      size.x,
      size.y,
      size.z
    );
    voxelTexture.format = THREE.RGBAFormat;
    voxelTexture.type = THREE.UnsignedByteType;

    // Use nearest-neighbor filtering to avoid interpolation
    voxelTexture.minFilter = THREE.NearestFilter;
    voxelTexture.magFilter = THREE.NearestFilter;
    voxelTexture.unpackAlignment = 1;
    voxelTexture.needsUpdate = true;
    voxelTexture.generateMipmaps = false;
    return voxelTexture;
  }

  /**
   * Gathers data from each VoxelGeometry to create an array suitable for the shader.
   * @param {Object} voxelGeometries - The voxel geometries to process.
   * @returns {Float32Array} - An array of data for the shader.
   */
  #prepareShaderData(voxelGeometries) {
    const floatsPerVoxel = 28; // Assuming each voxel has 28 float values
    const totalFloats = Object.keys(voxelGeometries).length * floatsPerVoxel;
    const textureWidth = Math.ceil(totalFloats / 4); // 4 floats per RGBA pixel
    const textureHeight = 1;

    const data = new Float32Array(textureWidth * 4 * textureHeight);
    let dataIndex = 0;

    // eslint-disable-next-line no-unused-vars
    Object.values(voxelGeometries).forEach((geom, _) => {
      const voxelFloats = geom.toFloatArray();
      for (let i = 0; i < voxelFloats.length; i++) {
        data[dataIndex++] = voxelFloats[i];
      }
    });

    const dataTexture = new THREE.DataTexture(
      data,
      textureWidth,
      textureHeight,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;

    return { dataTexture, textureWidth };
  }

  #encodeLightsIntoDataTexture() {
    const lightTextureSize = Math.ceil(Math.sqrt(this.totalLights)); // Ensure the texture can hold all lights
    const lightData = new Float32Array(lightTextureSize * lightTextureSize * 4); // 4 for RGBA

    let i = 0;
    for (const key in this.lights) {
      const position = key.split(",").map(Number);
      lightData[i++] = position[0];
      lightData[i++] = position[1];
      lightData[i++] = position[2];
      lightData[i++] = Number(this.lights[key].voxelSize);
    }

    // Create the data texture
    const lightTexture = new THREE.DataTexture(
      lightData,
      lightTextureSize,
      lightTextureSize,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    lightTexture.needsUpdate = true;

    // Return the light texture
    return { lightTexture, lightTextureSize };
  }

  #getColorKey(color) {
    return `${color.red},${color.green},${color.blue}`;
  }

  addSpecialColor(color, hitType) {
    this.specialColors[this.#getColorKey(color)] = hitType;
  }
}
