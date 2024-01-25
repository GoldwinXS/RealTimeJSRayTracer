import * as THREE from "three";
import readVox from "vox-reader";

/**
 * Calculates the linear index in a 1D array for a given 3D coordinate (x, y, z)
 * in a 3D grid. This is used to map a point in 3D space to its corresponding position
 * in a 1D array, considering RGBA channels for each voxel.
 *
 * @param {number} x - The x-coordinate in the 3D grid.
 * @param {number} y - The y-coordinate in the 3D grid.
 * @param {number} z - The z-coordinate in the 3D grid.
 * @param {number} width - The width (number of columns) of the 3D grid.
 * @param {number} height - The height (number of rows) of the 3D grid.
 * @returns {number} The linear index in the 1D array that corresponds to the (x, y, z) coordinate.
 */
export function calculateIndex(x, y, z, width, height) {
  return 4 * (z * width * height + y * width + x); // 4 for RGBA
}

/**
 * Represents a voxel geometry with its position, size, and texture coordinates in a 3D space.
 * This class is used to manage and process the data associated with a single voxel geometry,
 * including loading voxel data from files and converting its properties to a format suitable for shaders.
 *
 * @class
 * @param {THREE.Vector3} position - The world position of the voxel geometry.
 * @param {string} filepath - The filepath where the related .vox file can be found. Defaults to the origin.
 * @param {number} [voxelSize=1] - The size of each individual voxel. Defaults to 1.
 *
 * @property {THREE.Vector3} gridDimensions - The dimensions of the voxel grid.
 * @property {THREE.Vector3} textureMinPosition - The minimum position of the voxel in the texture atlas.
 * @property {THREE.Vector3} textureMaxPosition - The maximum position of the voxel in the texture atlas.
 *
 * @see {@link VoxelLoader}
 */
export class VoxelGeometry {
  gridDimensions;
  textureMinPosition;
  textureMaxPosition;
  data;
  mesh;
  texture;
  material;
  constructor(filepath, position = new THREE.Vector3(0, 0, 0), voxelSize = 1) {
    this.position = position;
    this.filePath = filepath;
    this.voxelSize = voxelSize;
  }

  /**
   * A public class method to create an instance of VoxelGeometry. See class docstring for more details.
   * @param {string} filepath - The filepath for the voxel file.
   * @param {THREE.Vector3} position - The world position of the voxel geometry.
   * @param {number} voxelSize - The size of each individual voxel.
   * @returns {VoxelGeometry}
   */
  static async create(
    filepath,
    position = new THREE.Vector3(0, 0, 0),
    voxelSize = 1
  ) {
    const geometry = new VoxelGeometry(filepath, position, voxelSize);
    try {
      const { voxelData, size } = await geometry.#loadVoxelData(filepath);
      geometry.gridDimensions = size;
      geometry.voxelData = voxelData;

      // Initialize mesh, material, and texture here
      const { voxelMesh, voxelTexture, voxelMaterial } =
        geometry.#createVoxelTextureAndMesh(voxelData, size, position);
      geometry.mesh = voxelMesh;
      geometry.material = voxelMaterial;
      geometry.texture = voxelTexture;

      return geometry;
    } catch (error) {
      console.error("Error creating VoxelGeometry:", error);
      throw error; // Rethrow so it can be caught in loadFilesAndStart
    }
  }

  /**
   * Returns the current state as datafor the shader
   * @returns {Float32Array} - Data needed for shader structs.
   */
  toFloatArray() {
    // Convert position and paletteID to a Float32Array
    return new Float32Array([
      this.position.x,
      this.position.y,
      this.position.z,
      this.voxelSize,
      this.gridDimensions.x,
      this.gridDimensions.y,
      this.gridDimensions.z,
      this.textureMinPosition.x,
      this.textureMinPosition.y,
      this.textureMinPosition.z,
      this.textureMaxPosition.x,
      this.textureMaxPosition.y,
      this.textureMaxPosition.z,
    ]);
  }

  /**
   * Creates the needed THREE.js data for rendering.
   * @param {Uint8Array} voxelData - Data for use in returned THREE.Data3DTexture.
   * @param {Object} size - An object containing x,y,z properties for size.
   * @returns {Object} - An object containing:
   *                    - voxelMesh: {THREE.Mesh}
   *                    - voxelTexture: {THREE.Data3DTexture}
   *                    - voxelMaterial: {THREE.MeshPhysicalMaterial}
   */
  #createVoxelTextureAndMesh(voxelData, size, position) {
    // Create the 3D voxelTexture
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

    // Create a box geometry that encompasses the voxel space
    const boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);

    // Modify the voxelMaterial to use the voxelTexture
    const voxelMaterial = new THREE.MeshPhysicalMaterial({
      map: voxelTexture, // Use the 3D texture as a map
      transparent: true, // Needed to respect alpha values in the texture
      side: THREE.DoubleSide, // Render both sides of each face
    });

    let voxelMesh = new THREE.Mesh(boxGeometry, voxelMaterial);
    voxelMesh.visible = false; // Not needed for ray tracing.
    voxelMesh.position.set(position.x, position.y, position.z);
    return { voxelMesh, voxelTexture, voxelMaterial };
  }

  /**
   * Asynchronously loads voxel data from a file and returns the processed data.
   * @param {string} filePath - The local filepath to the voxel model.
   * @returns {Promise<{voxelData: Uint8Array, size: THREE.Vector3}>} Processed voxel data and its size.
   */
  async #loadVoxelData(filePath) {
    try {
      const response = await fetch(filePath);
      const buffer = await response.arrayBuffer();
      const voxData = readVox(new Uint8Array(buffer));

      return this.#processVoxData(voxData);
    } catch (error) {
      console.error("Error loading voxel data:", error);
      throw error;
    }
  }

  /**
   *
   * @param {Object} voxData - The raw voxel data from a .vox file. This typically includes
   *                           the voxel grid size, color information, and the positions of
   *                           individual voxels. The structure might look like:
   *                           {
   *                             size: { x: number, y: number, z: number },
   *                             xyzi: { values: Array<{ x, y, z, i }> },
   *                             rgba: { values: Array<{ r, g, b, a }> }
   *                           }
   * @returns {Object} An object containing:
   *                    - voxelData: {Uint8Array} The processed voxel data as a flat array.
   *                    - size: {THREE.Vector3} The dimensions of the voxel grid.
   */
  #processVoxData(voxData) {
    const size = voxData.size;
    const voxelData = new Uint8Array(size.x * size.y * size.z * 4); // 4 for RGBA

    // Initialize alpha channel for each voxel
    for (let i = 0; i < size.x * size.y * size.z; i++) {
      voxelData[i * 4 + 3] = 0; // Set alpha to opaque
    }

    // Process each voxel
    voxData.xyzi.values.forEach((voxel) => {
      const { x, y, z, i } = voxel;
      // Adjust color index (i) as VOX color palette starts from index 1
      const colorIndex = i - 1;
      const { r, g, b, a } = voxData.rgba.values[colorIndex];
      const index = calculateIndex(x, y, z, size.x, size.y);
      voxelData[index + 0] = r; // Red
      voxelData[index + 1] = g; // Green
      voxelData[index + 2] = b; // Blue
      voxelData[index + 3] = a; // Alpha
    });

    return { voxelData, size };
  }
}
