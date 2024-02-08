import * as THREE from "three";
import readVox from "vox-reader";

// Function to calculate linear index from 3D coordinates
function calculateIndex(x, y, z, width, height) {
  return 4 * (z * width * height + y * width + x); // 4 for RGBA
}

export function processVoxData(voxData) {
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

  return voxelData;
}

// Function to create test voxel data
export function createTestVoxelData(size) {
  const voxelData = new Uint8Array(size.x * size.y * size.z * 4); // 4 for RGBA

  for (let z = 0; z < size.z; z++) {
    for (let y = 0; y < size.y; y++) {
      for (let x = 0; x < size.x; x++) {
        const index = calculateIndex(x, y, z, size.x, size.y);
        voxelData[index + 0] = x * 85; // Red (gradually increasing)
        voxelData[index + 1] = y * 85; // Green (gradually increasing)
        voxelData[index + 2] = z * 85; // Blue (gradually increasing)
        voxelData[index + 3] = 255; // Alpha (opaque)
      }
    }
  }

  return voxelData;
}

export async function loadVoxFile(filePath) {
  try {
    const response = await fetch(filePath);
    const buffer = await response.arrayBuffer();
    const voxData = readVox(new Uint8Array(buffer));
    const size = voxData.size;
    return { voxData, size };
  } catch (error) {
    console.error("Error fetching VOX data:", error);
  }
}

export function createVoxelTextureAndMesh(voxelData, size) {
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

  const voxelMesh = new THREE.Mesh(boxGeometry, voxelMaterial);
  return { voxelMesh, voxelTexture, voxelMaterial };
}

export default { loadVoxFile, createVoxelTextureAndMesh, createTestVoxelData };
