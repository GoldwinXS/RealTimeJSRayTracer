import * as THREE from "three";
import { VoxelGeometry } from "./VoxelGeometry";

class BVHNode {
  constructor() {
    this.boundingBox = null; // The bounding box covering all geometries in this node
    this.left = null; // Left child BVHNode
    this.right = null; // Right child BVHNode
    this.geometries = []; // Geometries contained in this node (for leaf nodes)
  }
}

class BVHManager {
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

  encodeBVHToTexture(boundingBoxes, childrenIndices) {
    // Assuming each node requires two pixels: one for bounding box, one for children indices.
    const nodeCount = boundingBoxes.length / 6; // 6 values per node for bounding boxes
    const textureSize = Math.ceil(Math.sqrt(nodeCount * 2)); // *2 because we need more space for children indices
    const data = new Float32Array(textureSize * textureSize * 4); // 4 channels per pixel

    for (let i = 0; i < nodeCount; i++) {
      const baseIndex = i * 8; // 8 values per node now (2 pixels)
      // Encode bounding box min and max into RGBA of the first and second pixel
      data[baseIndex + 0] = boundingBoxes[i * 6 + 0]; // minX
      data[baseIndex + 1] = boundingBoxes[i * 6 + 1]; // minY
      data[baseIndex + 2] = boundingBoxes[i * 6 + 2]; // minZ
      data[baseIndex + 3] = 1.0; // Padding or additional data

      data[baseIndex + 4] = boundingBoxes[i * 6 + 3]; // maxX
      data[baseIndex + 5] = boundingBoxes[i * 6 + 4]; // maxY
      data[baseIndex + 6] = boundingBoxes[i * 6 + 5]; // maxZ
      data[baseIndex + 7] = 1.0; // Padding or index data, if needed

      // Assuming childrenIndices is a flat array [leftChild0, rightChild0, leftChild1, rightChild1, ...]
      // Encode children indices into the next pixel
      const childIndexBase = i * 2; // 2 children indices per node
      const childrenBaseIndex = i * 8 + textureSize * 4; // Offset by textureSize * 4 to start at the next row of pixels
      data[childrenBaseIndex + 0] = childrenIndices[childIndexBase + 0]; // Left child index
      data[childrenBaseIndex + 1] = childrenIndices[childIndexBase + 1]; // Right child index
      data[childrenBaseIndex + 2] = 0.0; // Unused
      data[childrenBaseIndex + 3] = 0.0; // Unused
    }

    const texture = new THREE.DataTexture(
      data,
      textureSize,
      textureSize,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    texture.needsUpdate = true;

    return texture;
  }

  constructBVH(geometries, depth) {
    let geometriesArray = Object.values(geometries);

    if (!geometries) {
      return;
    }
    if (geometries.length === 0) return null;
    if (geometries.length === 1) {
      const leafNode = new BVHNode();
      leafNode.geometries = geometries;
      leafNode.boundingBox = this.computeBoundingBox(geometriesArray);
      return leafNode;
    }

    // Compute the bounding box for the current node
    const node = new BVHNode();
    node.boundingBox = this.computeBoundingBox(geometriesArray);

    // Find the longest axis of the bounding box
    const axis = this.determineLongestAxis(node.boundingBox);

    // Sort geometries by their center along the chosen axis
    geometriesArray.sort((a, b) => {
      const centerA = a.mesh.position.clone();
      const centerB = b.mesh.position.clone();
      return centerA[axis] - centerB[axis];
    });

    // Split geometries into two groups
    const midIndex = Math.floor(geometries.length / 2);
    const leftGeometries = geometriesArray.slice(0, midIndex);
    const rightGeometries = geometriesArray.slice(midIndex);

    // Recursively construct child nodes
    node.left = this.constructBVH(leftGeometries, depth + 1);
    node.right = this.constructBVH(rightGeometries, depth + 1);

    return node;
  }

  computeBoundingBox(geometriesArray) {
    const worldBox = new THREE.Box3();

    geometriesArray.forEach((geometry) => {
      // Assuming geometry.mesh is a THREE.Mesh
      const mesh = geometry.mesh;
      const box = new THREE.Box3().setFromObject(mesh);

      worldBox.union(box); // Expand the worldBox to include this box
    });

    return worldBox;
  }

  flattenBVHForShader(rootNode) {
    const boundingBoxes = []; // [minX, minY, minZ, maxX, maxY, maxZ, ...]
    const childrenIndices = []; // [leftChildIndex, rightChildIndex, ...]

    const stack = [{ node: rootNode, index: 0 }];
    while (stack.length > 0) {
      const { node, index } = stack.pop();

      if (!node) {
        continue;
      }

      // Calculate node's index in the flattened structure
      const currentIndex = boundingBoxes.length / 6;
      childrenIndices[index] = currentIndex;

      // Add bounding box data
      boundingBoxes.push(
        node.boundingBox.min.x,
        node.boundingBox.min.y,
        node.boundingBox.min.z,
        node.boundingBox.max.x,
        node.boundingBox.max.y,
        node.boundingBox.max.z
      );

      // Prepare children for processing
      stack.push({ node: node.left, index: currentIndex * 2 + 1 }); // 2n + 1 for left child
      stack.push({ node: node.right, index: currentIndex * 2 + 2 }); // 2n + 2 for right child
    }

    // Now `boundingBoxes` and `childrenIndices` are ready to be passed to the shader
    return { boundingBoxes, childrenIndices };
  }
}

export { BVHManager };
