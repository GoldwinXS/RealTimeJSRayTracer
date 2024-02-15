import { Vector3 } from "three";
import { PlayerControls } from "../camera/PlayerControls";

export class GameManager {
  starshipFile = "../../models/xwingColor.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  tealSunFile = "../../models/tealLight.vox";
  redSunFile = "../../models/redLight.vox";
  playerGeometry;
  camera;
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

  bullets = [];
  bulletSpeed = 0.2;

  constructor(voxelManager, camera) {
    this.voxelManager = voxelManager;
    this.camera = camera;
  }

  startGame() {
    this.#setupGame();
    this.#addShootingMechanism();
  }

  #addShootingMechanism() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.#shootBullet();
      }
    });
  }

  async #shootBullet() {
    const bulletSize = 10;
    const bulletPosition = this.playerGeometry.position
      .clone()
      .add(new Vector3(0, 0, -10));

    await this.voxelManager.addGeometry(
      this.sunFile,
      bulletPosition,
      bulletSize
    );
    // Store IDs for movement tracking.
    let bulletGeomID =
      Object.values(this.voxelManager.voxelGeometries).length - 1;
    this.bullets.push(bulletGeomID);
  }

  handleAnimationFrame() {
    if (!this.voxelManager) {
      return;
    }
    if (!this.voxelManager.voxelGeometries[0]) {
      return;
    }

    this.#updateOrbitingLights();
    this.voxelManager.setGeomRotation(0, "x", this.currentRotation);
    this.voxelManager.setGeomRotation(0, "y", this.currentRotation / 2);
    this.currentRotation += 0.1;
  }

  async #setupGame() {
    this.playerGeometry = await this.#setupGeometry();
    this.#cameraSetAndLookAt(this.playerGeometry.position);
    this.#setupOrbitingLights();
  }

  #setupOrbitingLights() {
    const lightPositions = [
      { file: this.sunFile, distance: this.orbitRadius, color: "yellow" },
      {
        file: this.tealSunFile,
        distance: this.orbitRadius * 0.75,
        color: "teal",
      },
      { file: this.redSunFile, distance: this.orbitRadius * 0.5, color: "red" },
    ];

    lightPositions.forEach(async (light, index) => {
      const position = new Vector3().setFromSphericalCoords(
        light.distance,
        Math.PI / 2,
        index * ((2 * Math.PI) / lightPositions.length)
      );
      await this.voxelManager.addGeometry(light.file, position, 100);
      this.orbitingLights.push({
        geom: this.voxelManager.voxelGeometries[
          this.voxelManager.totalVoxelGeometries - 1
        ],
        color: light.color,
        radius: light.distance,
        angle: index * ((2 * Math.PI) / lightPositions.length),
      });
    });
  }

  #updateOrbitingLights() {
    this.orbitingLights.forEach((light) => {
      light.angle += this.orbitSpeed;
      const position = new Vector3().setFromSphericalCoords(
        light.radius,
        Math.PI / 2,
        light.angle
      );
      light.geom.position.copy(position);
    });
  }

  async #setupGeometry() {
    // Add the player.
    await this.voxelManager.addGeometry(
      this.starshipFile,
      this.originPosition,
      1
    );
    const playerId =
      Object.values(this.voxelManager.voxelGeometries).length - 1;
    this.voxelManager.setGeomRotation(playerId, "x", 90);

    // Add a lights

    await this.voxelManager.addGeometry(
      this.tealSunFile,
      this.distanceUp.multiplyScalar(-2),
      200
    );

    await this.voxelManager.addGeometry(this.tealSunFile, this.distanceUp, 100);

    return this.voxelManager.voxelGeometries[0];
  }

  #cameraSetAndLookAt(position) {
    // const offset = new Vector3(40, 10, 10); // Example offset
    // this.camera.position.copy(position).add(offset);
    this.camera.lookAt(position);
  }

  addPlayerControls(controls) {
    // this.playerControls = new PlayerControls(controls);
    // this.playerControls.addEventListeners();
  }
}
