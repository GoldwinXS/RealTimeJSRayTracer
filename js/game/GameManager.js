import { Vector3 } from "three";
import { PlayerControls } from "../camera/PlayerControls";

export class GameManager {
  starshipFile = "../../models/xwingColor.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  tealSunFile = "../../models/tealLight.vox";
  redSunFile = "../../models/redLight.vox";
  tieFile = "../../models/tie.vox";
  deathStarChunk = "../../models/deathStarChunk.vox";
  BlasterBoltFile = "../../models/blasterBolt.vox";
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
    const { forwardVector } = this.playerControls.getShipVectors();
    this.playerControls.firing = false;

    const bulletId = await this.voxelManager.addGeometry(
      this.BlasterBoltFile,
      new Vector3().copy(this.playerGeometry.mesh.position),
      1
    );

    let moveCounter = 0;
    const bulletPosition = this.voxelManager.voxelGeometries[bulletId].position;
    this.bullets[bulletId] = {
      forwardVector,
      bulletPosition,
      moveCounter,
    };
  }

  moveBullet() {
    Object.entries(this.bullets).forEach(([bulletId, bullet]) => {
      const bulletMovement = new Vector3().copy(
        bullet.forwardVector.multiplyScalar(2)
      );
      bullet.bulletPosition.x += bulletMovement.x;
      bullet.bulletPosition.y += bulletMovement.y;
      bullet.bulletPosition.z += bulletMovement.z;
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

  async setupTrench() {
    const trenchLength = 1; // Define the length of the trench
    const trenchScale = 100; // Scaling factor for each chunk
    const scaledSize = 40 * trenchScale; // Calculate the scaled size of each chunk

    // Define the width of the open space in the trench for flying
    const openSpaceWidth = 20 * trenchScale;

    // Calculate positions for the left and right walls
    const wallLeftX = -openSpaceWidth / 2 - scaledSize / 2;
    const wallRightX = openSpaceWidth / 2 + scaledSize / 2;

    // Loop to arrange the geometries along the length of the trench
    for (let i = 0; i < trenchLength; i++) {
      let positionZ = i * scaledSize; // Position for each chunk along the Z-axis

      // Add geometry for the left wall
      await this.voxelManager.addGeometry(
        this.deathStarChunk,
        new Vector3(wallLeftX, -100, positionZ),
        trenchScale
      );

      // Add geometry for the right wall
      await this.voxelManager.addGeometry(
        this.deathStarChunk,
        new Vector3(wallRightX, -100, positionZ),
        trenchScale
      );

      // Add floor segments across the width of the trench
      const floorY = -scaledSize / 2 - 100; // Assuming you want the floor at the base level of the walls
      // Correct calculation for the number of floor segments needed to cover the open space width
      const numFloorSegments = Math.ceil(openSpaceWidth / scaledSize);
      for (let j = 0; j < numFloorSegments; j++) {
        // Correctly calculate floorX to start from the edge of the left wall
        let floorX = wallLeftX + j * scaledSize + scaledSize / 2; // Start placing floor segments right after the left wall
        await this.voxelManager.addGeometry(
          this.deathStarChunk,
          new Vector3(floorX, floorY, positionZ),
          trenchScale
        );
      }
    }
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
    await this.setupTrench();

    return this.voxelManager.voxelGeometries[this.playerId];
  }
}
