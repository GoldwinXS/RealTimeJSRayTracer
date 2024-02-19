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
 * VoxelGeometry represents a single voxel geometry with its position, size, and texture coordinates in 3D space.
 * This class is responsible for managing and processing data associated with voxel geometry. It includes functionality
 * for loading voxel data from .vox files, creating 3D textures and meshes for rendering, and preparing data in a format
 * suitable for shader programs.
 *
 * The class provides a static `create` method for convenient instantiation and asynchronous loading of voxel data.
 * It also encapsulates the internal logic for processing voxel data and creating associated THREE.js objects,
 * keeping these details abstracted from the user.
 *
 * @class
 * @param {string} filepath - The filepath where the related .vox file can be found.
 * @param {THREE.Vector3} [position=new THREE.Vector3(0, 0, 0)] - The world position of the voxel geometry.
 * @param {number} [voxelSize=1] - The size of each individual voxel. Defaults to 1.
 *
 * @property {THREE.Vector3} gridDimensions - The dimensions of the voxel grid, set after loading voxel data.
 * @property {THREE.Vector3} textureMinPosition - The minimum position of the voxel in the texture atlas.
 * @property {THREE.Vector3} textureMaxPosition - The maximum position of the voxel in the texture atlas.
 * @property {THREE.Vector3} textureMinPositionNormalized - The minimum position of the voxel in the texture atlas, normalized to [0,1].
 * @property {THREE.Vector3} textureMaxPositionNormalized - The maximum position of the voxel in the texture atlas, normalized to [0,1].
 * @property {Uint8Array} data - The processed voxel data as a flat array.
 * @property {THREE.Mesh} mesh - The THREE.js mesh created from the voxel data.
 * @property {THREE.Data3DTexture} texture - The THREE.js 3D texture representing the voxel data.
 * @property {THREE.MeshPhysicalMaterial} material - The THREE.js material applied to the voxel mesh.
 *
 * @see {@link VoxelLoader} - For handling multiple voxel geometries and compiling them into a texture atlas.
 */
export class VoxelGeometry {
  gridDimensions;
  textureMinPosition;
  textureMaxPosition;
  textureMinPositionNormalized;
  textureMaxPositionNormalized;
  data;
  mesh;
  texture;
  material;
  shaderData;
  id;

  constructor(filepath, position = new THREE.Vector3(0, 0, 0), voxelSize = 1) {
    this.filepath = filepath;
    this.position = position;
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

    // Not needed for ray tracing, since we will be interpreting a 3D texture to render.
    voxelMesh.visible = false;
    const { x, y, z } = position;
    voxelMesh.position.set(x, y, z);
    voxelMesh.updateMatrixWorld(true);

    return { voxelMesh, voxelTexture, voxelMaterial };
  }

  /**
   * Asynchronously loads voxel data from a file and returns the processed data.
   * @param {string} filepath - The local filepath to the voxel model.
   * @returns {Promise<{voxelData: Uint8Array, size: THREE.Vector3}>} Processed voxel data and its size.
   */
  async #loadVoxelData(filepath) {
    try {
      const response = await fetch(filepath);
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

  setPosition(position) {
    this.mesh.position.set(position.x, position.y, position.z);
    this.mesh.updateMatrixWorld(true);
  }

  setRotation(input, degrees) {
    if (typeof input === "string" && typeof degrees === "number") {
      // Assuming input is an axis ('x', 'y', or 'z') and degrees is the rotation amount
      const radians = degrees * (Math.PI / 180);
      this.mesh.rotation[input] = radians;
    } else if (input instanceof THREE.Euler) {
      // Assuming input is a THREE.Vector3 object representing rotation in radians
      this.mesh.rotation.set(input.x, input.y, input.z);
    } else {
      console.error("Invalid input for setRotation");
    }
    this.mesh.updateMatrixWorld(true);
  }

  /**
   * Returns the current state as datafor the shader
   * @returns {Float32Array} - Data needed for shader structs.
   */
  toFloatArray() {
    // Ensure we update the mesh coordinates.
    this.mesh.updateMatrixWorld(true);

    // Invert the world matrix to get the inverse matrix for the shader.
    const invMatrix = new THREE.Matrix4().copy(this.mesh.matrixWorld).invert();
    const matrixElements = invMatrix.elements;

    // Validate that all necessary properties are present and correct
    // You could add more validation as needed
    if (
      !this.voxelSize ||
      !this.gridDimensions ||
      !this.textureMinPositionNormalized ||
      !this.textureMaxPositionNormalized
    ) {
      console.error(
        "VoxelGeometry.toFloatArray: Missing or invalid properties."
      );
      return null; // Or handle this case as appropriate for your application
    }

    // Ensure the array length matches the shader's expectation, including the matrix
    // 10 initial values + 2 padding + 16 for the matrix = 28 floats total
    return new Float32Array([
      // 0-4
      this.voxelSize,
      this.gridDimensions.x,
      this.gridDimensions.y,
      this.gridDimensions.z,
      // 4-8
      this.textureMinPositionNormalized.x,
      this.textureMinPositionNormalized.y,
      this.textureMinPositionNormalized.z,
      this.textureMaxPositionNormalized.x,
      // 8-12
      this.textureMaxPositionNormalized.y,
      this.textureMaxPositionNormalized.z,
      // Padding for easier parsing in the shader
      0.0,
      0.0,
      //
      // Explicitly set matrix elements to ensure correct order and count
      matrixElements[0],
      matrixElements[1],
      matrixElements[2],
      matrixElements[3],
      matrixElements[4],
      matrixElements[5],
      matrixElements[6],
      matrixElements[7],
      matrixElements[8],
      matrixElements[9],
      matrixElements[10],
      matrixElements[11],
      matrixElements[12],
      matrixElements[13],
      matrixElements[14],
      matrixElements[15],
    ]);
  }
}
