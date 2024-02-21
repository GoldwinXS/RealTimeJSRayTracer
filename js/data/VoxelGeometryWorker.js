import { calculateIndex } from "./VoxelGeometry";
import * as THREE from "three";

let totalLights = 0;
let lights = {};

// VoxelGeometryWorker.js
self.onmessage = function (e) {
  const { action, data } = e.data;
  let returnData;
  switch (action) {
    case "update":
      returnData = compileTextureAtlas(data);
      returnData.lights = lights;
      console.log("Worker sending back data");
      self.postMessage({ action: "updated", data: returnData });
      break;
  }
};

const getColorKey = function (color) {
  return `${color.red},${color.green},${color.blue}`;
};

const handleLight = function (localPosition, color, geometry, lights) {
  // Use the transformed position for the light
  lights[getPositionKey(localPosition)] = {
    red: color.red,
    green: color.green,
    blue: color.blue,
    voxelSize: geometry.voxelSize,
  };
  totalLights++;
};

const getPositionKey = function (position) {
  return `${position.x},${position.y},${position.z}`;
};

/**
 * Prepares a single 3D texture to pass to the fragment shader.
 * @param {VoxelGeometry[]} packedGeometries - An array of packed geometries.
 * @returns {Uint8Array} - Data needed to create the 3D texture.
 */
const compileTextureAtlas = function (data) {
  const maxTextureDimensions = data.maxTextureDimensions;
  const packedGeometries = data.geometriesData;
  const specialColors = data.specialColors;
  totalLights = 0;
  const geometriesArray = Object.values(packedGeometries);

  const totalSize =
    maxTextureDimensions.x * maxTextureDimensions.y * maxTextureDimensions.z;
  const atlasData = new Uint8Array(totalSize * 4); // 4 for RGBA

  geometriesArray.forEach((geometry, _) => {
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
            maxTextureDimensions.x,
            maxTextureDimensions.y
          );

          const red = geometry.voxelData[localIndex + 0];
          const green = geometry.voxelData[localIndex + 1];
          const blue = geometry.voxelData[localIndex + 2];
          const alpha = geometry.voxelData[localIndex + 3];

          atlasData[atlasIndex + 0] = red;
          atlasData[atlasIndex + 1] = green;
          atlasData[atlasIndex + 2] = blue;
          atlasData[atlasIndex + 3] = alpha > 0 ? 1 : 0;
          const color = { red, green, blue };

          const colorKey = getColorKey(color);
          if (specialColors && specialColors[colorKey] && alpha != 0) {
            // Encode the special color int othe alpha channel.
            atlasData[atlasIndex + 3] = specialColors[colorKey];

            // If we encounter a light, add it to lights to keep track of them for importance sampling.
            if (specialColors[colorKey] == 20) {
              // Calculate the local position of the light relative to the model.
              const localPosition = new THREE.Vector3(
                geometry.position.x - x,
                geometry.position.y - y,
                geometry.position.z - z
              );

              handleLight(localPosition, color, geometry, lights);
            }
          }
        }
      }
    }
  });

  return { atlasData, totalLights, geometriesArray };
};
