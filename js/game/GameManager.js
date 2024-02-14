import { Vector3 } from "three";

export class GameManager {
  starshipFile = "../../models/spaceShip.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  playerGeometry;
  camera;
  originPosition = new Vector3(0, 0, 0);
  largeDistance = new Vector3(3000, 0, 0);
  distanceUp = new Vector3(0, 100, 0);
  shortDistance = new Vector3(100, 0, 0);
  veryShortDistance = new Vector3(30, 0, 0);
  constructor(voxelManager, camera) {
    this.voxelManager = voxelManager;
    this.camera = camera;
  }

  startGame() {
    this.#setupGame();
    this.#addPlayerControls();
  }

  async #setupGame() {
    this.playerGeometry = await this.#setupGeometry();
    this.#cameraSetAndLookAt(this.playerGeometry.position);
  }

  async #setupGeometry() {
    // Add the player.
    await this.voxelManager.addGeometry(
      this.starshipFile,
      this.originPosition,
      10
    );
    const playerId =
      Object.values(this.voxelManager.voxelGeometries).length - 1;
    this.voxelManager.setGeomRotation(playerId, "x", 90);

    // Add another ship.
    await this.voxelManager.addGeometry(
      this.starshipFile,
      this.originPosition.add(this.shortDistance).multiplyScalar(4),
      10
    );
    this.voxelManager.setGeomRotation(1, "x", 90);

    // Add a lights
    await this.voxelManager.addGeometry(this.sunFile, this.shortDistance, 100);
    await this.voxelManager.addGeometry(
      this.sunFile,
      this.shortDistance.multiplyScalar(-1),
      100
    );
    await this.voxelManager.addGeometry(
      this.sunFile,
      this.distanceUp.multiplyScalar(20),
      10
    );
    await this.voxelManager.addGeometry(
      this.sunFile,
      this.distanceUp.multiplyScalar(-20),
      10
    );

    return this.voxelManager.voxelGeometries[0];
  }

  #cameraSetAndLookAt(position) {
    const offset = new Vector3(10, 10, 10); // Example offset
    this.camera.position.copy(position).add(offset);
    this.camera.lookAt(position);
  }

  #addPlayerControls() {
    document.addEventListener(
      "keydown",
      (event) => this.#handlePlayerInput(event),
      false
    );
  }

  #handlePlayerInput(event) {
    if (event.code === "Space") {
      const moveDistance = 10; // Units to move the player geometry
      const direction = new Vector3(1, 0, 0); // Assuming your player geometry has a method to get its forward direction
      this.playerGeometry.position.add(direction.multiplyScalar(moveDistance));
      this.voxelManager.setGeomPosition(0, this.playerGeometry.position);
    }
    // Implement other controls as needed
  }
}
