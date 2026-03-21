import { Vector3 } from "three";
import { PlayerControls } from "../camera/PlayerControls";

export class GameManager {
  starshipFile = "models/xwingColor.vox";
  sunFile = "models/singleVoxelLight.vox";
  tealSunFile = "models/tealLight.vox";
  redSunFile = "models/redLight.vox";
  tieFile = "models/tie.vox";
  starDestroyerFile = "models/destroyer.vox";
  falconFile = "models/falcon.vox";
  deathStarChunk = "models/deathStarChunk.vox";
  BlasterBoltFile = "models/blasterBolt.vox";
  transparentCubeFile = "models/transparentCube.vox";
  metalCubeFile = "models/metalCube.vox";
  playerGeometry;
  playerControls;
  originPosition = new Vector3(0, 0, 0);
  largeDistance = new Vector3(3000, 0, 0);
  distanceUp = new Vector3(0, 100, 0);
  shortDistance = new Vector3(170, 0, 0);
  veryShortDistance = new Vector3(150, 0, 0);
  currentRotation = 0;
  bullets = {};
  tieFighters = {};
  orbitingLights = [];
  orbitRadius = 400;
  orbitSpeed = 0.02;
  bulletSpeed = 1.1;

  trenchStartZ = 0; // Start of the trench (along the Z-axis)
  trenchEndZ = 4000; // End of the trench (along the Z-axis) - adjust based on your game's scale

  async spawnTieFighter() {
    const startPosition = new Vector3(
      Math.random() * 300,
      Math.random() * 600,
      Math.random() * 100
    );
    const newTieId = await this.voxelManager.addGeometry(
      this.tieFile,
      startPosition,
      1
    );
    this.voxelManager.setGeomRotation(newTieId, "z", 90);
    this.voxelManager.setGeomRotation(newTieId, "x", -90);
    this.tieFighters[newTieId] = this.voxelManager.voxelGeometries[newTieId];
    this.tieFighters[newTieId].speed = Math.random() * 10;
  }

  moveTieFighters() {
    Object.entries(this.tieFighters).forEach(([id, tieFighter]) => {
      tieFighter.position.z += tieFighter.speed;
      if (tieFighter.position.z > this.trenchEndZ) {
        tieFighter.position.z = this.trenchStartZ;
      }
      this.voxelManager.setGeomPosition(id, tieFighter.position);
    });
  }

  rotatePlayerModel() {
    if (!this.playerGeometry) return;

    // Increment rotation (around Y axis for a spin)
    this.currentRotation += 1; // radians per frame
    this.voxelManager.setGeomRotation(this.playerId, "y", this.currentRotation);
  }

  constructor(voxelManager) {
    this.voxelManager = voxelManager;
  }

  async attachCamera(worldCamera) {
    this.worldCamera = worldCamera;

    // Move camera back and up so it can see the X-Wing and room
    this.worldCamera.position.set(0, 200, 100); // Y = up, Z = back
    this.worldCamera.lookAt(0, 0, 0); // Look at room center
  }

  async startGame() {
    await this.#setupGame();
  }

  async #setupGame() {
    this.playerGeometry = await this.#setupGeometry();
    // this.playerGeometry = await this.#setupTestGeometry();
    // this.#setupOrbitingLights();
  }

  async setupPlayerControls() {
    this.playerControls = new PlayerControls(
      this.worldCamera,
      this.playerGeometry
    );
  }

  async spawnBullet() {
    const { forwardVector } = this.playerControls.getShipVectors();
    const bulletPosition = new Vector3().copy(
      this.playerGeometry.mesh.position
    );

    this.playerControls.firing = false;
    this.playerControls.shotsSpawned++;

    const bulletId = await this.voxelManager.addGeometry(
      this.BlasterBoltFile,
      bulletPosition,
      1
    );

    this.bullets[bulletId] = {
      forwardVector,
      bulletPosition,
      moveCounter: 0,
    };
  }

  moveBullet() {
    Object.entries(this.bullets).forEach(async ([bulletId, bullet]) => {
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
        console.log(`Removing bullet with id ${bulletId} from tracking.`);
        delete this.bullets[bulletId];

        // delete this.bullets[bulletId];
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
    if (this.playerControls.firing) {
      this.playerControls.firing = false;
      this.spawnBullet();
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
    const trenchScale = 100; // Scaling factor for each chunk
    const scaledSize = 40 * trenchScale; // Calculate the scaled size of each chunk

    // Define the width of the open space in the trench for flying
    const openSpaceWidth = 10 * trenchScale;

    // Calculate positions for the left and right walls
    const wallLeftX = -openSpaceWidth / 2 - scaledSize / 2;
    const wallRightX = openSpaceWidth / 2 + scaledSize / 2;

    // Loop to arrange the geometries along the length of the trench
    for (let i = 0; i < trenchLength; i++) {
      let positionZ = i * scaledSize; // Position for each chunk along the Z-axis

      // Add geometry for the left wall
      this.voxelManager.addGeometry(
        this.deathStarChunk,
        new Vector3(wallLeftX, -100, positionZ),
        trenchScale
      );

      // Add geometry for the right wall
      this.voxelManager.addGeometry(
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
        this.voxelManager.addGeometry(
          this.deathStarChunk,
          new Vector3(floorX, floorY, positionZ),
          trenchScale
        );
      }
    }
  }

  async setupRoom() {
    const roomWidth = 5000;
    const roomHeight = 4000;
    const roomDepth = 5000;

    // Half-dimensions for positioning
    const hw = roomWidth / 2;
    const hh = roomHeight / 2;
    const hd = roomDepth / 2;

    const scale = 60; // uniform scale of your deathStarChunk

    // Floor (Y = -hh)
    this.voxelManager.addGeometry(
      this.deathStarChunk,
      new Vector3(0, -hh, 0),
      scale
    );

    // Ceiling (Y = +hh)
    this.voxelManager.addGeometry(
      this.deathStarChunk,
      new Vector3(0, hh, 0),
      scale
    );

    // Left wall (X = -hw)
    this.voxelManager.addGeometry(
      this.deathStarChunk,
      new Vector3(-hw, 0, 0),
      scale
    );

    // Right wall (X = +hw)
    this.voxelManager.addGeometry(
      this.deathStarChunk,
      new Vector3(hw, 0, 0),
      scale
    );

    // Back wall (Z = -hd)
    this.voxelManager.addGeometry(
      this.deathStarChunk,
      new Vector3(0, 0, -hd),
      scale
    );

    // Front wall (Z = +hd)
    this.voxelManager.addGeometry(
      this.deathStarChunk,
      new Vector3(0, 0, hd),
      scale
    );
  }

  async #setupGeometry() {
    // Add the player.
    this.playerId = await this.voxelManager.addGeometry(
      this.starshipFile,
      new Vector3(0, 0, -310),
      1
    );
    this.voxelManager.setGeomRotation(this.playerId, "z", 90);
    this.voxelManager.setGeomRotation(this.playerId, "x", -90);
    this.playerGeometry = this.voxelManager.voxelGeometries[this.playerId];

    // Add the room and lights
    await this.setupRoom();
    this.voxelManager.addGeometry(this.sunFile, new Vector3(400, 0, 0), 50);
    // this.voxelManager.addGeometry(
    //   this.redSunFile,
    //   new Vector3(-400, 100, -20),
    //   50
    // );

    // Add some metallic and transparent blocks for lighting tests
    const blockPositions = [
      new Vector3(-200, -100, 100),
      new Vector3(150, -50, -150),
      new Vector3(0, 50, 200),
      new Vector3(100, 100, 0),
      new Vector3(-150, 0, -100),
    ];

    for (let pos of blockPositions) {
      // Alternate metallic and transparent
      const file =
        Math.random() > 0.5 ? this.metalCubeFile : this.transparentCubeFile;
      await this.voxelManager.addGeometry(file, pos, 50);
    }

    return this.voxelManager.voxelGeometries[this.playerId];
  }
}
