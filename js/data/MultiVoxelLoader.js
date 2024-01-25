import * as THREE from "three";
import { VoxelGeometry, calculateIndex } from "./VoxelGeometry";

class VoxelLoader {
  maxTextureDimensions = new THREE.Vector3(1024, 1024, 1024); // Example size
  voxelGeometries = [];
  voxelData = [];
  voxelTexture;

  addGeometry(filepath, position, voxelSize) {
    const geom = VoxelGeometry.create(filepath, position, voxelSize);
    this.voxelGeometries.push(geom);
  }

  compileTextureAtlas() {
    const totalSize =
      this.maxTextureDimensions.x *
      this.maxTextureDimensions.y *
      this.maxTextureDimensions.z;
    const atlasData = new Uint8Array(totalSize * 4); // 4 for RGBA

    this.voxelGeometries.forEach((geometry) => {
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
}

export default VoxelLoader;
