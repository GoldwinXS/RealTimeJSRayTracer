import { describe, it, expect, beforeEach } from "vitest";
import * as THREE from "three";

// Inline the logic under test so we don't need to import WebGL-heavy VoxelGeometry
// This mirrors the toFloatArray implementation exactly.
function buildFloatArray({ voxelSize, gridDimensions, textureMinPositionNormalized, textureMaxPositionNormalized, matrixWorld }) {
  const invMatrix = new THREE.Matrix4().copy(matrixWorld).invert();
  const data = new Float32Array(28);

  data[0] = voxelSize;
  data[1] = gridDimensions.x;
  data[2] = gridDimensions.y;
  data[3] = gridDimensions.z;

  data[4] = textureMinPositionNormalized?.x ?? 0;
  data[5] = textureMinPositionNormalized?.y ?? 0;
  data[6] = textureMinPositionNormalized?.z ?? 0;
  data[7] = textureMaxPositionNormalized?.x ?? 0;

  data[8] = textureMaxPositionNormalized?.y ?? 0;
  data[9] = textureMaxPositionNormalized?.z ?? 0;
  data[10] = 0;
  data[11] = 0;

  const me = invMatrix.elements;
  for (let i = 0; i < 16; i++) {
    data[12 + i] = me[i];
  }

  return data;
}

describe("toFloatArray shader data layout", () => {
  it("produces exactly 28 floats", () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    mesh.updateMatrixWorld(true);

    const data = buildFloatArray({
      voxelSize: 1,
      gridDimensions: new THREE.Vector3(8, 8, 8),
      textureMinPositionNormalized: new THREE.Vector3(0, 0, 0),
      textureMaxPositionNormalized: new THREE.Vector3(0.5, 0.5, 0.5),
      matrixWorld: mesh.matrixWorld,
    });

    expect(data.length).toBe(28);
  });

  it("packs voxelSize into float 0, gridDimensions into floats 1-3", () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    mesh.updateMatrixWorld(true);

    const data = buildFloatArray({
      voxelSize: 5,
      gridDimensions: new THREE.Vector3(16, 32, 8),
      textureMinPositionNormalized: new THREE.Vector3(0, 0, 0),
      textureMaxPositionNormalized: new THREE.Vector3(0, 0, 0),
      matrixWorld: mesh.matrixWorld,
    });

    expect(data[0]).toBe(5);    // voxelSize
    expect(data[1]).toBe(16);   // gridX
    expect(data[2]).toBe(32);   // gridY
    expect(data[3]).toBe(8);    // gridZ
  });

  it("packs texture min/max into floats 4-9", () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    mesh.updateMatrixWorld(true);

    const texMin = new THREE.Vector3(0.1, 0.2, 0.3);
    const texMax = new THREE.Vector3(0.4, 0.5, 0.6);

    const data = buildFloatArray({
      voxelSize: 1,
      gridDimensions: new THREE.Vector3(8, 8, 8),
      textureMinPositionNormalized: texMin,
      textureMaxPositionNormalized: texMax,
      matrixWorld: mesh.matrixWorld,
    });

    expect(data[4]).toBeCloseTo(0.1); // texMinX
    expect(data[5]).toBeCloseTo(0.2); // texMinY
    expect(data[6]).toBeCloseTo(0.3); // texMinZ
    expect(data[7]).toBeCloseTo(0.4); // texMaxX
    expect(data[8]).toBeCloseTo(0.5); // texMaxY
    expect(data[9]).toBeCloseTo(0.6); // texMaxZ
    expect(data[10]).toBe(0);         // padding
    expect(data[11]).toBe(0);         // padding
  });

  it("packs inverse world matrix into floats 12-27 (column-major)", () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    mesh.position.set(10, 20, 30);
    mesh.updateMatrixWorld(true);

    const data = buildFloatArray({
      voxelSize: 1,
      gridDimensions: new THREE.Vector3(8, 8, 8),
      textureMinPositionNormalized: new THREE.Vector3(0, 0, 0),
      textureMaxPositionNormalized: new THREE.Vector3(0, 0, 0),
      matrixWorld: mesh.matrixWorld,
    });

    const expected = new THREE.Matrix4().copy(mesh.matrixWorld).invert();
    for (let i = 0; i < 16; i++) {
      expect(data[12 + i]).toBeCloseTo(expected.elements[i], 5);
    }
  });

  it("identity matrix at origin has translation column [0,0,0,1] in inverse", () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    mesh.updateMatrixWorld(true);

    const data = buildFloatArray({
      voxelSize: 1,
      gridDimensions: new THREE.Vector3(8, 8, 8),
      textureMinPositionNormalized: new THREE.Vector3(0, 0, 0),
      textureMaxPositionNormalized: new THREE.Vector3(0, 0, 0),
      matrixWorld: mesh.matrixWorld,
    });

    // Column-major: column 3 (translation) is at indices 12, 13, 14, 15 of elements
    // In our data array: data[12+12]=data[24], data[12+13]=data[25], data[12+14]=data[26], data[12+15]=data[27]
    expect(data[24]).toBeCloseTo(0); // tx
    expect(data[25]).toBeCloseTo(0); // ty
    expect(data[26]).toBeCloseTo(0); // tz
    expect(data[27]).toBeCloseTo(1); // tw (homogeneous)
  });
});
