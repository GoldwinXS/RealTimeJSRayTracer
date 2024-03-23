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
      const geomID = await voxelManager.addGeometry(
        element.filePath,
        new THREE.Vector3(
          element.position.x,
          element.position.y,
          element.position.z
        ),
        element.size
      );
      // For now we're just going to "cheat" and set the rotation so that most models will look right side up
      voxelManager.setGeomRotation(geomID, "x", -90);
    });
    this.commands = {};
  }
}
