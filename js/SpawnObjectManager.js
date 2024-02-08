import * as THREE from "three";

export class SpawnObjectManager {
  commands = {};
  commandID = 0;

  sendCommand(command) {
    this.commands[this.commandID] = command;
    command++;
  }

  executeCommands(voxelManager) {
    if (!voxelManager) {
      return;
    }
    Object.values(this.commands).forEach(async (element) => {
      await voxelManager.addGeometry(
        element.filePath,
        new THREE.Vector3(
          element.position.x,
          element.position.y,
          element.position.z
        ),
        5
      );
      // For now we're just going to "cheat" and set the rotation so that most models will look right side up
      voxelManager.setGeomRotation(
        Object.values(voxelManager.voxelGeometries).length - 1,
        "x",
        -90
      );
    });
    this.commands = {};
  }
}