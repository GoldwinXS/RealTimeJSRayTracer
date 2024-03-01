import * as THREE from "three";

class BVHNode {
  left = null;
  right = null;
  constructor(type, input, index) {
    this.type = type;
    if (type == "node") {
      this.index = index;
      this.boundingBox = input; // input is a bounding box for nodes
    } else if (type == "leaf") {
      if (!input.dataIndex && input.dataIndex != 0) {
        console.warn(`No dataIndex for BVH node! Input provided: ${input}`);
      }
      this.dataIndex = input.dataIndex;
      this.boundingBox = input.boundingBox; // Ensure leaf nodes also store bounding box
    } else {
      console.warn(`Incorrect type provided: ${type}`);
    }
    this.transformMatrix = input.transformMatrix;
  }
}

class BVHManager {
  currentNodeIndex = 0;
  constructor() {
    this.voxelGeometries = {}; // Store VoxelGeometry instances by their ID
    this.bvhRoot = null; // The root node of the BVH
    this.dirtyNodes = new Set(); // Nodes that need updating
  }

  addGeometry(geometry) {
    // Assume geometry has a unique ID
    this.voxelGeometries[geometry.id] = geometry;
    this.dirtyNodes.add(geometry.id);
    this.rebuildBVH(); // Consider efficient partial updates in a real implementation
  }

  removeGeometry(geometryId) {
    delete this.voxelGeometries[geometryId];
    this.dirtyNodes.add(geometryId);
    this.rebuildBVH(); // Consider efficient partial updates in a real implementation
  }

  updateGeometry(geometry) {
    // This method is called when a geometry moves or changes
    this.dirtyNodes.add(geometry.id);
    this.rebuildBVH(); // Consider efficient partial updates in a real implementation
  }

  rebuildBVH() {
    let geometries = Object.values(this.voxelGeometries);
    this.bvhRoot = this.constructBVH(geometries, 0);
    this.dirtyNodes.clear();
  }

  determineLongestAxis(bbox) {
    const size = new THREE.Vector3();
    bbox.getSize(size); // Populates 'size' with the dimensions of the bounding box

    if (size.x > size.y && size.x > size.z) {
      return 0; // x-axis is the longest
    } else if (size.y > size.z) {
      return 1; // y-axis is the longest
    } else {
      return 2; // z-axis is the longest
    }
  }

  createParentNodeTransformMatrix(boundingBox) {
    let translation = new THREE.Vector3();
    // Calculate the centroid of the bounding box
    boundingBox.getCenter(translation);

    // Create a translation matrix with no scaling or rotation
    let transformMatrix = new THREE.Matrix4();
    transformMatrix.makeTranslation(
      translation.x,
      translation.y,
      translation.z
    );

    return transformMatrix;
  }

  constructBVH(geometries, depth) {
    if (geometries.length === 0) return null;

    // Base case: if there's only one geometry, create a leaf node.
    if (geometries.length === 1) {
      const geometry = geometries[0];
      if (!geometry.float32Data.data) {
        geometry.toFloatArray();
      }
      // geometry.mesh.scale.multiplyScalar(geometry.voxelSize);
      const mesh = geometry.mesh.clone();
      mesh.scale.multiplyScalar(geometry.voxelSize);
      const bbox = new THREE.Box3().setFromObject(mesh);
      const invMatrix = geometry.float32Data.data.slice(12);

      return new BVHNode(
        "leaf",
        {
          dataIndex: geometry.id,
          boundingBox: bbox,
          transformMatrix: invMatrix,
        },
        this.currentNodeIndex++
      );
    }

    // Compute the bounding box for the current set of geometries, considering transformations
    const boundingBox = this.computeBoundingBox(geometries);

    // Determine the longest axis to split along
    const axis = this.determineLongestAxis(boundingBox);
    geometries.sort(
      (a, b) =>
        a.mesh.position.getComponent(axis) - b.mesh.position.getComponent(axis)
    );

    // Split the array into two halves
    const midIndex = Math.floor(geometries.length / 2);
    const leftGeometries = geometries.slice(0, midIndex);
    const rightGeometries = geometries.slice(midIndex);

    // Recursively construct the left and right children
    const left = this.constructBVH(leftGeometries, depth + 1);
    const right = this.constructBVH(rightGeometries, depth + 1);

    // Create a parent node that encompasses both children
    const parentMatrix = this.createParentNodeTransformMatrix(boundingBox);
    const parentMatrixArray = new Float32Array(parentMatrix.elements);

    const node = new BVHNode(
      "node",
      {
        boundingBox: boundingBox,
        dataIndex: this.currentNodeIndex,
        transformMatrix: parentMatrixArray,
      },
      this.currentNodeIndex++
    );
    node.left = left;
    node.right = right;

    // Adjust the parent's bounding box to be the union of both children's bounding boxes, if applicable
    if (left && right) {
      const combinedBox = new THREE.Box3()
        .copy(left.boundingBox)
        .union(right.boundingBox);
      node.boundingBox = combinedBox;
    }
    return node;
  }

  computeBoundingBox(geometriesArray) {
    const worldBox = new THREE.Box3();

    geometriesArray.forEach((geometry) => {
      const box = new THREE.Box3().setFromObject(geometry.mesh);

      worldBox.union(box); // Expand the worldBox to include this box
    });

    return worldBox;
  }

  addData(data, node, baseIndex) {
    data[baseIndex + 2] = node.boundingBox.min.x;
    data[baseIndex + 3] = node.boundingBox.min.y;
    data[baseIndex + 4] = node.boundingBox.min.z;
    data[baseIndex + 5] = node.boundingBox.max.x;
    data[baseIndex + 6] = node.boundingBox.max.y;
    data[baseIndex + 7] = node.boundingBox.max.z;
    data[baseIndex + 8] = node.transformMatrix[0];
    data[baseIndex + 9] = node.transformMatrix[1];
    data[baseIndex + 10] = node.transformMatrix[2];
    data[baseIndex + 11] = node.transformMatrix[3];
    data[baseIndex + 12] = node.transformMatrix[4];
    data[baseIndex + 13] = node.transformMatrix[5];
    data[baseIndex + 14] = node.transformMatrix[6];
    data[baseIndex + 15] = node.transformMatrix[7];
    data[baseIndex + 16] = node.transformMatrix[8];
    data[baseIndex + 17] = node.transformMatrix[9];
    data[baseIndex + 18] = node.transformMatrix[10];
    data[baseIndex + 19] = node.transformMatrix[11];
    data[baseIndex + 20] = node.transformMatrix[12];
    data[baseIndex + 21] = node.transformMatrix[13];
    data[baseIndex + 22] = node.transformMatrix[14];
    data[baseIndex + 23] = node.transformMatrix[15];
  }

  nodeToTexture(rootNode) {
    const nodes = [];
    this.flattenBVH(rootNode, nodes);

    const totalSlotsNeeded = nodes.length * 6;

    // Start with a candidate texture size (the smallest possible)
    let textureSize = Math.ceil(Math.sqrt(totalSlotsNeeded));

    // Ensure the texture size is a multiple of 6
    // Increase textureSize until it meets our requirements
    while (
      (textureSize * textureSize) % 6 !== 0 ||
      textureSize * textureSize < totalSlotsNeeded
    ) {
      textureSize++;
    }

    const data = new Float32Array(textureSize * textureSize * 4);

    nodes.forEach((node, index) => {
      const baseIndex = index * 6 * 4; // 8 floats per node (two RGBA slots)
      if (node.type === "node") {
        // Internal node: [L,R,x,y,z,X,Y,Z]
        data[baseIndex + 0] = node.leftIndex ?? -1; // Left child index
        data[baseIndex + 1] = node.rightIndex ?? -1; // Right child index
        this.addData(data, node, baseIndex);
      } else if (node.type === "leaf") {
        data[baseIndex + 0] = node.leftIndex ?? -1; // Left child index
        data[baseIndex + 1] = node.dataIndex;
        this.addData(data, node, baseIndex);
      }
    });
    this.debugPrintTextureData(data, textureSize);
    const texture = new THREE.DataTexture(
      data,
      textureSize,
      textureSize,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    console.log("done adding data");
    texture.needsUpdate = true;
    return texture;
  }

  debugPrintTextureData(data, textureSize) {
    // Assuming data is a Float32Array with your encoded BVH texture data
    // and textureSize is the dimension of the texture (width/height assuming a square texture)
    let result = "";
    for (let y = 0; y < textureSize; y++) {
      for (let x = 0; x < textureSize; x++) {
        const idx = (y * textureSize + x) * 4; // 4 channels per pixel
        if (idx < data.length) {
          const r = data[idx].toFixed(2);
          const g = data[idx + 1].toFixed(2);
          const b = data[idx + 2].toFixed(2);
          const a = data[idx + 3].toFixed(2);
          result += `[${r}, ${g}, ${b}, ${a}] `;
        }
      }
      result += "\n"; // New line for each row of the texture
    }

    console.log("Encoded Texture Data (as seen in shader):");
    console.log(result);
  }

  flattenBVH(node, nodes) {
    if (!node) return -1;

    const currentIndex = nodes.length;
    nodes.push(node); // Add the current node

    if (node.type === "node") {
      node.leftIndex = this.flattenBVH(node.left, nodes);
      node.rightIndex = this.flattenBVH(node.right, nodes);
    }

    return currentIndex;
  }
}

export { BVHManager };
