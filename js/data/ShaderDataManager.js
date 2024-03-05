import * as THREE from "three";

export class ShaderDataBuilder {
  prepareShaderData(voxelGeometries) {
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
        geom.dataIndex = dataIndex;
        data[dataIndex] = voxelFloats[i];
        dataIndex++;
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

  encodeLightsIntoDataTexture(lights) {
    const totalLights = Object.values(lights).length;
    const lightTextureSize = Math.ceil(Math.sqrt(totalLights)); // Ensure the texture can hold all lights
    const lightData = new Float32Array(lightTextureSize * lightTextureSize * 4); // 4 for RGBA

    let i = 0;
    for (const key in lights) {
      const position = key.split(",").map(Number);
      lightData[i++] = position[0];
      lightData[i++] = position[1];
      lightData[i++] = position[2];
      lightData[i++] = Number(lights[key].voxelSize);
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
}
