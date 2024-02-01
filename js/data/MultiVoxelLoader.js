import * as THREE from "three";
import { VoxelGeometry, calculateIndex } from "./VoxelGeometry";

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
  maxTextureDimensions = new THREE.Vector3(512, 512, 512); // Example size
  voxelGeometries = {};
  voxelData = [];
  voxelTexture;
  currentVoxelIndex = 0;
  totalVoxelGeometries = 0;
  textureWidth;

  /**
   * Adds and loads a voxel geometry asynchronously.
   * @param {string} filepath - The file path of the .vox file for the geometry.
   * @param {THREE.Vector3} position - The world position of the voxel geometry.
   * @param {number} voxelSize - The size of each voxel.
   * @returns {Promise} - A promise that resolves once the geometry is added and loaded.
   */
  async addGeometry(filepath, position, voxelSize) {
    const geom = await VoxelGeometry.create(filepath, position, voxelSize);
    this.voxelGeometries[this.currentVoxelIndex] = geom;
    this.currentVoxelIndex++;
    this.totalVoxelGeometries++;
    await this.#update();
  }

  /**
   * Removes a voxel geometry.
   * @param {number} id
   */
  removeGeometry(id) {
    delete this.voxelGeometries[id];
    this.totalVoxelGeometries--;
    this.#update();
  }

  setGeomPosition(id, position) {
    this.voxelGeometries[id].setPosition(...position);
    this.updateShaderData();
  }

  setGeomRotation(id, axis, degrees) {
    this.voxelGeometries[id].setRotation(axis, degrees);
    this.updateShaderData();
  }

  updateShaderData() {
    this.updateShaderTextureData();
  }

  /**
   * Updates the data needed to render the voxel geometries.
   */
  async #update() {
    await Promise.all(
      Object.values(this.voxelGeometries).map((geom) => geom.loaded)
    );
    this.#packVoxelGeometries(this.voxelGeometries, this.maxTextureDimensions);
    const atlasData = this.#compileTextureAtlas(this.voxelGeometries);
    this.voxelTexture = this.#createVoxelTexture(
      atlasData,
      this.maxTextureDimensions
    );
    this.updateShaderData();
  }

  updateShaderTextureData() {
    const { dataTexture, textureWidth } = this.#prepareShaderData(
      this.voxelGeometries
    );
    this.shaderData = dataTexture;
    this.textureWidth = textureWidth;
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

    // Sort the voxel geometries in descending order of their volume
    geometriesArray.sort((a, b) => {
      const volumeA =
        a.gridDimensions.x * a.gridDimensions.y * a.gridDimensions.z;
      const volumeB =
        b.gridDimensions.x * b.gridDimensions.y * b.gridDimensions.z;
      return volumeB - volumeA; // Descending order
    });

    geometriesArray.forEach((geometry) => {
      // Calculate and assign absolute positions
      if (currentSize.x + geometry.gridDimensions.x > maxTextureDimensions.x) {
        currentSize.x = 0;
        currentSize.y += rowHeight;
        rowHeight = 0;
      }

      if (currentSize.y + geometry.gridDimensions.y > maxTextureDimensions.y) {
        currentSize.y = 0;
        currentSize.z += layerDepth;
        layerDepth = 0;
      }

      geometry.textureMinPosition = new THREE.Vector3(
        currentSize.x,
        currentSize.y,
        currentSize.z
      );
      geometry.textureMaxPosition = new THREE.Vector3(
        currentSize.x + geometry.gridDimensions.x,
        currentSize.y + geometry.gridDimensions.y,
        currentSize.z + geometry.gridDimensions.z
      );

      // Update current positions and row/layer sizes
      currentSize.x += geometry.gridDimensions.x;
      rowHeight = Math.max(rowHeight, geometry.gridDimensions.y);
      layerDepth = Math.max(layerDepth, geometry.gridDimensions.z);

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
    });
  }

  /**
   * Prepares a single 3D texture to pass to the fragment shader.
   * @param {VoxelGeometry[]} packedGeometries - An array of packed geometries.
   * @returns {Uint8Array} - Data needed to create the 3D texture.
   */
  #compileTextureAtlas(packedGeometries) {
    const geometriesArray = Object.values(packedGeometries);
    const totalSize =
      this.maxTextureDimensions.x *
      this.maxTextureDimensions.y *
      this.maxTextureDimensions.z;
    const atlasData = new Uint8Array(totalSize * 4); // 4 for RGBA

    geometriesArray.forEach((geometry) => {
      // Assume geometry.voxelData is already loaded and processed
      const size = geometry.gridDimensions;

      for (let z = 0; z < size.z; z++) {
        for (let y = 0; y < size.y; y++) {
          for (let x = 0; x < size.x; x++) {
            const localIndex = calculateIndex(x, y, z, size.x, size.y);
            const atlasX = x + geometry.textureMinPosition.x;
            const atlasY = y + geometry.textureMinPosition.y;
            const atlasZ = z + geometry.textureMinPosition.z;
            const atlasIndex = calculateIndex(
              atlasX,
              atlasY,
              atlasZ,
              this.maxTextureDimensions.x,
              this.maxTextureDimensions.y
            );

            for (let i = 0; i < 4; i++) {
              // Copy RGBA
              atlasData[atlasIndex + i] = geometry.voxelData[localIndex + i];
            }
          }
        }
      }
    });

    return atlasData;
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

    Object.values(voxelGeometries).forEach((geom, index) => {
      const voxelFloats = geom.toFloatArray();
      console.log(`Geometry ${index}:`, voxelFloats);
      for (let i = 0; i < voxelFloats.length; i++) {
        data[dataIndex++] = voxelFloats[i];
        if (i % 4 === 3) {
          // Log after every 4th float to represent an RGBA pixel
          console.log(
            `Pixel ${dataIndex / 4 - 1}:`,
            data.slice(dataIndex - 4, dataIndex)
          );
        }
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

    console.log(`Final data array:`, data);
    return { dataTexture, textureWidth };
  }
}
