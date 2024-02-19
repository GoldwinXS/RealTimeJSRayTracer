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
    // this.#setupOrbitingLights();
  }

  setupPlayerControls() {
    this.playerControls = new PlayerControls(
      this.worldCamera,
      this.playerGeometry
    );
  }

  async spawnBullet() {
    const blaster = this.playerControls.getBlasterIndex();
    const blasterOffset = new Vector3(51, 2, 38);
    const { forwardVector } = this.playerControls.getShipVectors();
    const bulletId = await this.voxelManager.addGeometry(
      this.sunFile,
      new Vector3(
        this.playerGeometry.mesh.position.x + blasterOffset.x,
        this.playerGeometry.mesh.position.y + blasterOffset.y,
        this.playerGeometry.mesh.position.z + blasterOffset.z
      ),
      5
    );

    let moveCounter = 0;
    const bulletPosition = this.voxelManager.voxelGeometries[bulletId].position;
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
      this.sunFile,
      new Vector3(0, 100000, 0),
      50000
    );

    await this.voxelManager.addGeometry(
      this.tieFile,
      new Vector3(0, 0, 100),
      1
    );

    // await this.voxelManager.addGeometry(this.tealSunFile, this.distanceUp, 100);

    return this.voxelManager.voxelGeometries[this.playerId];
  }
}
