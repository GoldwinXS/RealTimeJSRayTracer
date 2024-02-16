import { Vector3 } from "three";
import { PlayerControls } from "../camera/PlayerControls";
import { FirstPersonCameraControls } from "../camera/FirstPersonCameraControls";

export class GameManager {
  starshipFile = "../../models/xwingColor.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  tealSunFile = "../../models/tealLight.vox";
  redSunFile = "../../models/redLight.vox";
  playerGeometry;
  playerControls;
  originPosition = new Vector3(0, 0, 0);
  largeDistance = new Vector3(3000, 0, 0);
  distanceUp = new Vector3(0, 100, 0);
  shortDistance = new Vector3(400, 0, 0);
  veryShortDistance = new Vector3(30, 0, 0);
  currentRotation = 0;

  orbitingLights = [];
  orbitRadius = 400;
  orbitSpeed = 0.02;

  constructor(voxelManager) {
    this.voxelManager = voxelManager;
  }

  attachCamera(worldCamera) {
    this.worldCamera = worldCamera;
  }

  async startGame() {
    await this.#setupGame();
  }

  async #setupGame() {
    // Await setup of player geometry and orbiting lights together
    this.playerGeometry = await this.#setupGeometry(); // Already returns a Promise
    this.#setupOrbitingLights(); // Modify to return a Promise
  }

  setupPlayerControls() {
    this.playerControls = new PlayerControls(
      this.worldCamera,
      this.playerGeometry
    );
  }

  handleAnimationFrame() {
    if (!this.voxelManager) {
      return;
    }
    if (!this.voxelManager.voxelGeometries[0]) {
      return;
    }
    this.playerControls.update();
    this.voxelManager.setGeomPosition(
      this.playerId,
      this.playerGeometry.mesh.position
    );
  }
  async #setupOrbitingLights() {
    const lightPositions = [
      { file: this.sunFile, distance: this.orbitRadius, color: "yellow" },
      // Other lights...
    ];

    // Collect all light setup promises
    const lightPromises = lightPositions.map(async (light, index) => {
      const position = new Vector3().setFromSphericalCoords(
        light.distance,
        Math.PI / 2,
        index * ((2 * Math.PI) / lightPositions.length)
      );
      return this.voxelManager.addGeometry(light.file, position, 100);
    });

    // Await all light setup operations to complete
    await Promise.all(lightPromises);

    // After all lights are added, setup orbitingLights array
    this.orbitingLights = lightPositions.map((light, index) => ({
      geom: this.voxelManager.voxelGeometries[
        this.voxelManager.totalVoxelGeometries - 1 - index
      ], // Adjust index if necessary
      color: light.color,
      radius: light.distance,
      angle: index * ((2 * Math.PI) / lightPositions.length),
    }));
  }

  async #setupGeometry() {
    // Add the player.
    await this.voxelManager.addGeometry(
      this.starshipFile,
      this.shortDistance,
      1
    );
    this.playerId = Object.values(this.voxelManager.voxelGeometries).length - 1;
    this.voxelManager.setGeomRotation(this.playerId, "x", 90);

    // Add a lights
    await this.voxelManager.addGeometry(
      this.tealSunFile,
      this.distanceUp.multiplyScalar(-2),
      200
    );

    await this.voxelManager.addGeometry(this.tealSunFile, this.distanceUp, 100);

    return this.voxelManager.voxelGeometries[this.playerId];
  }
}
