import { Vector3 } from "three";
import { PlayerControls } from "../camera/PlayerControls";

export class GameManager {
  starshipFile = "../../models/xwingColor.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  tealSunFile = "../../models/tealLight.vox";
  redSunFile = "../../models/redLight.vox";
  tieFile = "../../models/tie.vox";
  playerGeometry;
  playerControls;
  originPosition = new Vector3(0, 0, 0);
  largeDistance = new Vector3(3000, 0, 0);
  distanceUp = new Vector3(0, 100, 0);
  shortDistance = new Vector3(170, 0, 0);
  veryShortDistance = new Vector3(150, 0, 0);
  currentRotation = 0;
  bullets = {};
  orbitingLights = [];
  orbitRadius = 400;
  orbitSpeed = 0.02;
  bulletSpeed = 1.1;

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
    this.playerGeometry = await this.#setupGeometry();
    // this.playerGeometry = await this.#setupTestGeometry();
    this.#setupOrbitingLights();
  }

  setupPlayerControls() {
    this.playerControls = new PlayerControls(
      this.worldCamera,
      this.playerGeometry
    );
  }

  spawnBullet() {
    const blaster = this.playerControls.getBlasterIndex();
    const blasterOffset = new Vector3(51, 2, 38);
    const { forwardVector } = this.playerControls.getShipVectors();
    this.voxelManager.addGeometry(
      this.sunFile,
      new Vector3(
        this.playerGeometry.mesh.position.x + blasterOffset.x,
        this.playerGeometry.mesh.position.y + blasterOffset.y,
        this.playerGeometry.mesh.position.z + blasterOffset.z
      ),
      5
    );

    // Create a new Vector3 instance for the bullet's position
    const bulletPosition = new Vector3(
      this.playerGeometry.mesh.position.x,
      this.playerGeometry.mesh.position.y,
      this.playerGeometry.mesh.position.z
    );

    const bulletId = this.voxelManager.totalVoxelGeometries - 1;
    let moveCounter = 0;
    this.bullets[bulletId] = {
      forwardVector,
      bulletPosition,
      moveCounter,
    };
    this.playerControls.firing = false;
  }

  moveBullet() {
    Object.entries(this.bullets).forEach(([bulletId, bullet]) => {
      bullet.bulletPosition.x += bullet.forwardVector.x;
      bullet.bulletPosition.y += bullet.forwardVector.y;
      bullet.bulletPosition.z += bullet.forwardVector.z;
      if (bulletId in this.voxelManager.voxelGeometries) {
        this.voxelManager.setGeomPosition(bulletId, bullet.bulletPosition);
      }
      bullet.moveCounter++;
      if (bullet.moveCounter > 1000) {
        this.voxelManager.removeGeometry(bulletId);
        delete this.bullets[bulletId];
      }
    });
  }

  handleAnimationFrame() {
    if (!this.voxelManager || !this.playerControls) {
      return;
    }
    if (!this.voxelManager.voxelGeometries[0]) {
      return;
    }
    if (
      this.playerControls.shotsFired > this.playerControls.shotsSpawned &&
      this.playerControls.firing
    ) {
      this.spawnBullet();
      this.playerControls.firing = false;
      this.playerControls.shotsSpawned++;
    }
    this.moveBullet();
    // Call for an update.
    this.voxelManager.updateShaderTextureData();
  }
  async #setupOrbitingLights() {
    const lightPositions = [
      // { file: this.sunFile, distance: this.orbitRadius, color: "yellow" },
      // { file: this.sunFile, distance: this.orbitRadius, color: "yellow" },
      { file: this.sunFile, distance: this.orbitRadius, color: "red" },
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

  async #setupTestGeometry() {
    await this.voxelManager.addGeometry(
      "../../models/singleVoxelLight.vox",
      new Vector3(0, 0, 1),
      1
    );
    await this.voxelManager.addGeometry(
      "../../models/redLight.vox",
      new Vector3(0, 0, 2),
      1
    );
    await this.voxelManager.addGeometry(
      "../../models/tealLight.vox",
      new Vector3(0, 0, 3),
      1
    );
    await this.voxelManager.addGeometry(
      "../../models/singleVoxelLight.vox",
      new Vector3(0, 0, 4),
      1
    );
    await this.voxelManager.addGeometry(
      "../../models/redLight.vox",
      new Vector3(0, 0, 5),
      1
    );
    await this.voxelManager.addGeometry(
      "../../models/tealLight.vox",
      new Vector3(0, 0, 6),
      1
    );
  }

  async #setupGeometry() {
    // Add the player.
    await this.voxelManager.addGeometry(
      this.starshipFile,
      this.veryShortDistance.multiplyScalar(-1),
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

    await this.voxelManager.addGeometry(
      this.redSunFile,
      this.distanceUp.multiplyScalar(-4),
      200
    );

    await this.voxelManager.addGeometry(
      this.redSunFile,
      this.shortDistance.multiplyScalar(-7),
      200
    );

    await this.voxelManager.addGeometry(
      this.tieFile,
      new Vector3(0, 0, 100),
      1
    );

    await this.voxelManager.addGeometry(
      this.tieFile,
      new Vector3(100, 200, 300),
      1
    );

    await this.voxelManager.addGeometry(
      this.tieFile,
      new Vector3(100, 300, 300),
      1
    );

    await this.voxelManager.addGeometry(
      "../../models/enterprise.vox",
      new Vector3(100, 500, 300),
      1
    );

    await this.voxelManager.addGeometry(this.tealSunFile, this.distanceUp, 100);
    this.voxelManager.setGeomRotation(1, "z", 45);
    this.voxelManager.setGeomRotation(2, "y", 45);
    return this.voxelManager.voxelGeometries[this.playerId];
  }
}
