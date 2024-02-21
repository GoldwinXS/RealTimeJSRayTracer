import { Vector3 } from "three";
import { PlayerControls } from "../camera/PlayerControls";

export class GameManager {
  starshipFile = "../../models/xwingColor.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  tealSunFile = "../../models/tealLight.vox";
  redSunFile = "../../models/redLight.vox";
  tieFile = "../../models/tie.vox";
  starDestroyerFile = "../../models/destroyer.vox";
  falconFile = "../../models/falcon.vox";
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

  tieFighters = {}; // Tracks all TIE fighters
  trenchStartZ = 0; // Start of the trench (along the Z-axis)
  trenchEndZ = 4000; // End of the trench (along the Z-axis) - adjust based on your game's scale

  async spawnTieFighter() {
    const startPosition = new Vector3(
      Math.random() * 300,
      Math.random() * 600,
      this.trenchStartZ
    ); // Starting position at the beginning of the trench
    const tieFighterId = await this.voxelManager.addGeometry(
      this.tieFile,
      startPosition,
      1
    );
    this.voxelManager.setGeomRotation(tieFighterId, "z", 90);
    this.tieFighters[tieFighterId] = {
      position: startPosition,
      speed: 5,
    };
  }

  moveTieFighters() {
    Object.entries(this.tieFighters).forEach(([id, tieFighter]) => {
      // Move the TIE fighter down the trench
      tieFighter.position.z += tieFighter.speed;
      // Check if the TIE fighter has reached the end of the trench
      if (tieFighter.position.z > this.trenchEndZ) {
        // Reset its position to the start of the trench
        tieFighter.position.z = this.trenchStartZ;
      }
      // Update the TIE fighter's position in the voxel manager
      this.voxelManager.setGeomPosition(id, tieFighter.position);
    });
  }

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

  spawnBullet() {
    const { forwardVector } = this.playerControls.getShipVectors();
    const bulletPosition = new Vector3().copy(
      this.playerGeometry.mesh.position
    );

    // Reset firing status immediately to prevent multiple firings before the bullet is spawned
    this.playerControls.firing = false;

    // Return a new promise
    return new Promise((resolve, reject) => {
      // Perform the asynchronous operation without 'async' keyword in the executor function
      this.voxelManager
        .addGeometry(this.BlasterBoltFile, bulletPosition, 1)
        .then((bulletId) => {
          // Upon successful geometry addition, set up the bullet
          this.bullets[bulletId] = {
            forwardVector,
            bulletPosition,
            moveCounter: 0,
          };
          resolve(bulletId); // Resolve the promise with the bulletId
        })
        .catch(reject); // Reject the promise if there's an error
    });
  }

  moveBullet() {
    Object.entries(this.bullets).forEach(([bulletId, bullet]) => {
      const bulletMovement = new Vector3().copy(
        bullet.forwardVector.multiplyScalar(1.2)
      );
      bullet.bulletPosition.x += bulletMovement.x;
      bullet.bulletPosition.y += bulletMovement.y;
      bullet.bulletPosition.z += bulletMovement.z;
      if (bulletId in this.voxelManager.voxelGeometries) {
        this.voxelManager.setGeomPosition(bulletId, bullet.bulletPosition);
      }
      bullet.moveCounter++;
      if (bullet.moveCounter > 50) {
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
    // Inside your animation or game loop
    // Example usage within your animation or game loop
    if (
      this.playerControls.firing &&
      this.playerControls.shotsFired > this.playerControls.shotsSpawned
    ) {
      this.spawnBullet()
        .then((bulletId) => {
          // Bullet has been successfully spawned
          console.log(`Bullet ${bulletId} spawned`);
          this.playerControls.shotsSpawned++;
        })
        .catch((error) => {
          // Handle any spawning errors
          console.error("Error spawning bullet:", error);
        });

      // It's important to reset firing status after initiating spawnBullet to ensure correct game logic
    }
    if (this.playerControls.spawnShip) {
      this.spawnTieFighter();
      this.playerControls.spawnShip = false; // Reset the flag
    }

    // Move existing TIE fighters
    this.moveTieFighters();
    this.moveBullet();
    // Call for an update.
    this.voxelManager.updateVoxelShaderData();
  }

  async setupTrench() {
    const trenchLength = 1; // Define the length of the trench
    const trenchScale = 150; // Scaling factor for each chunk
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
    this.voxelManager.setGeomRotation(this.playerId, "z", 90);
    this.voxelManager.setGeomRotation(this.playerId, "x", -90);

    // Add a lights
    await this.voxelManager.addGeometry(
      this.sunFile,
      new Vector3(0, 1000000, 0),
      500000
    );

    // const destroyerID = await this.voxelManager.addGeometry(
    //   this.starDestroyerFile,
    //   new Vector3(400, 3000, -40),
    //   20
    // );
    // this.voxelManager.setGeomRotation(destroyerID, "x", -90);

    // const destroyerID2 = await this.voxelManager.addGeometry(
    //   this.starDestroyerFile,
    //   new Vector3(-200, 2400, 3000),
    //   20
    // );
    // this.voxelManager.setGeomRotation(destroyerID2, "x", -90);

    // const falconID = await this.voxelManager.addGeometry(
    //   this.falconFile,
    //   new Vector3(-200, 400, 2000),
    //   1
    // );
    // this.voxelManager.setGeomRotation(falconID, "x", -90);

    // await this.voxelManager.addGeometry(this.tealSunFile, this.distanceUp, 100);
    await this.setupTrench();

    return this.voxelManager.voxelGeometries[this.playerId];
  }
}
