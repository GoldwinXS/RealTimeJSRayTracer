import * as THREE from "three";
import readVox from 'vox-reader';

// Function to calculate linear index from 3D coordinates
function calculateIndex(x, y, z, size) {
    return 4 * (z * size * size + y * size + x); // 4 for RGBA
}

export function processVoxData(voxData) {
    const size = voxData.size;
    const voxelData = new Uint8Array(size * size * size * 4); // 4 for RGBA

    for (let i = 0; i < voxData.xyzi.numVoxels; i += 4) {
        voxelData[i + 3] = 0; // Alpha channel
    }

    voxData.xyzi.values.forEach(voxel => {
        const { x, y, z, i } = voxel
        const { r, b, g, a } = voxData.rgba.values[i]
        const index = calculateIndex(x, y, z, size.x);
        voxelData[index + 0] = r; // Red
        voxelData[index + 1] = g; // Green
        voxelData[index + 2] = b; // Blue
        voxelData[index + 3] = a; // Alpha (opaque)
    })
    return voxelData
}

export async function loadVoxFile(filePath) {
    try {
        const response = await fetch(filePath);
        const buffer = await response.arrayBuffer();
        const voxData = readVox(new Uint8Array(buffer));
        console.log('VOX Data:', voxData);
        // Process VOX data here
        const size = voxData.size;
        return { voxData, size };
    } catch (error) {
        console.error('Error fetching VOX data:', error);
    }
}


export function createVoxelTextureAndMesh(voxelData, size) {
    // Create the 3D voxelTexture
    const voxelTexture = new THREE.Data3DTexture(voxelData, size.x, size.y, size.z);
    voxelTexture.format = THREE.RGBAFormat;
    voxelTexture.type = THREE.UnsignedByteType;
    // Use nearest-neighbor filtering to avoid interpolation
    voxelTexture.minFilter = THREE.NearestFilter;
    voxelTexture.magFilter = THREE.NearestFilter;
    voxelTexture.unpackAlignment = 1;
    voxelTexture.needsUpdate = true;

    // Create a box geometry that encompasses the voxel space
    const boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);

    // Modify the voxelMaterial to use the voxelTexture
    const voxelMaterial = new THREE.MeshPhysicalMaterial({
        map: voxelTexture, // Use the 3D texture as a map
        transparent: true, // Needed to respect alpha values in the texture
        side: THREE.DoubleSide // Render both sides of each face
    });

    const voxelMesh = new THREE.Mesh(boxGeometry, voxelMaterial);
    return { voxelMesh, voxelTexture, voxelMaterial }
}

export default { loadVoxFile, createVoxelTextureAndMesh };

