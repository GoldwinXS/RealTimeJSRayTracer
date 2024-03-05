import * as THREE from "three";

export class TextureAtlasBuilder {
  fileTextureMapping = {};

  constructor(textureAtlasSize) {
    this.textureAtlasSize = textureAtlasSize;
  }

  packVoxelGeometries(voxelGeometries) {
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
      if (this.fileTextureMapping[geometry.filename]) {
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
        this.textureAtlasSize.x
      ) {
        currentSize.x = 0;
        currentSize.y += rowHeight + marginSize; // Add marginSize when moving to a new row
        rowHeight = 0;
      }

      if (
        currentSize.y + geometry.gridDimensions.y + marginSize * 2 >
        this.textureAtlasSize.y
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
        geometry.textureMinPosition.x / this.textureAtlasSize.x,
        geometry.textureMinPosition.y / this.textureAtlasSize.y,
        geometry.textureMinPosition.z / this.textureAtlasSize.z
      );

      geometry.textureMaxPositionNormalized = new THREE.Vector3(
        geometry.textureMaxPosition.x / this.textureAtlasSize.x,
        geometry.textureMaxPosition.y / this.textureAtlasSize.y,
        geometry.textureMaxPosition.z / this.textureAtlasSize.z
      );

      this.fileTextureMapping[geometry.filename] = {
        textureMinPosition: geometry.textureMinPosition,
        textureMaxPosition: geometry.textureMaxPosition,
        textureMinPositionNormalized: geometry.textureMinPositionNormalized,
        textureMaxPositionNormalized: geometry.textureMaxPositionNormalized,
      };
    });
  }

  createVoxelTexture(voxelData) {
    const voxelTexture = new THREE.Data3DTexture(
      voxelData,
      this.textureAtlasSize.x,
      this.textureAtlasSize.y,
      this.textureAtlasSize.z
    );
    voxelTexture.format = THREE.RGBAFormat;
    voxelTexture.type = THREE.UnsignedByteType;

    // Use nearest-neighbor filtering to avoid interpolation
    voxelTexture.minFilter = THREE.NearestFilter;
    voxelTexture.magFilter = THREE.NearestFilter;
    voxelTexture.unpackAlignment = 1;
    voxelTexture.needsUpdate = true;
    voxelTexture.generateMipmaps = true;
    return voxelTexture;
  }
}
