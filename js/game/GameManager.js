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
  enterpriseFile = "../../models/enterprise.vox";
  deathStarChunk = "../../models/deathStarChunk.vox";
  BlasterBoltFile = "../../models/blasterBolt.vox";
  transparentCubeFile = "../../models/transparentCube.vox";
  metalCubeFile = "../../models/metalCube.vox";
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
  trenchEndZ = 8000; // End of the trench (along the Z-axis) - adjust based on your game's scale

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

    // this.playerControls.firing = false;
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
      if (bullet.moveCounter > 100) {
        this.voxelManager.removeGeometry(bulletId);
        console.log(`Removing bullet with id ${bulletId} from tracking.`);
        delete this.bullets[bulletId];

        // delete this.bullets[bulletId];
      }
    });
  }

  handleAnimationFrame() {
    if (!this.voxelManager) {
      return;
    }
    if (!this.voxelManager.voxelGeometries[0]) {
      return;
    }
    // if (this.playerControls.firing) {
    //   this.playerControls.firing = false;
    //   this.spawnBullet();
    // }
    // if (this.playerControls.spawnShip) {
    //   this.spawnTieFighter();
    //   this.playerControls.spawnShip = false; // Reset the flag
    // }

    // Move existing TIE fighters
    this.moveTieFighters();
    this.moveBullet();
    // Call for an update.
    this.voxelManager.updateVoxelShaderData();
  }

  async setupTrench() {
    const trenchLength = 2; // Define the length of the trench
    const trenchScale = 4; // Scaling factor for each chunk
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
    this.playerId = await this.voxelManager.addGeometry(
      this.starshipFile,
      // this.starDestroyerFile,
      // this.sunFile,
      // new Vector3(0, 1, 0),
      this.distanceUp.multiplyScalar(1),
      1
    );
    this.voxelManager.setGeomRotation(this.playerId, "z", 90);
    this.voxelManager.setGeomRotation(this.playerId, "x", -90);
    this.playerGeometry = this.voxelManager.voxelGeometries[this.playerId];

    // [
    //   100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
    // ].forEach(async (posX) => {
    //   await this.voxelManager.addGeometry(
    //     this.starDestroyerFile,
    //     new Vector3(posX - 300, Math.random() * 1000, Math.random() * 1000),
    //     1
    //   );
    // });

    // Add a lights
    this.voxelManager.addGeometry(
      this.sunFile,
      new Vector3(0, 1000000, 0),
      500000
    );

    // this.setupTrench();

    this.voxelManager.addGeometry(this.starshipFile, new Vector3(0, 0, 200), 1);
    this.voxelManager.addGeometry(
      this.starshipFile,
      new Vector3(0, 200, 400),
      1
    );
    this.voxelManager.addGeometry(this.starshipFile, new Vector3(0, 0, 600), 1);
    this.voxelManager.addGeometry(this.starshipFile, new Vector3(0, 0, 800), 1);
    // this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(200, 200, 200),
    //   1
    // );
    // this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(400, 400, 400),
    //   1
    // );
    // this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(600, 600, 600),
    //   1
    // );
    // this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(800, 800, 800),
    //   1
    // );
    // await this.voxelManager.addGeometry(
    //   this.tealSunFile,
    //   new Vector3(0, 0, -100),
    //   50
    // );

    // await this.voxelManager.addGeometry(
    //   this.redSunFile,
    //   new Vector3(0, -100, 100),
    //   50
    // );
    // await this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(150, 2, 5),
    //   1
    // );
    // for (let i = 0; i < 10; i++) {
    //   this.voxelManager.addGeometry(
    //     this.starshipFile,
    //     new Vector3(150 * i, 2, 5),
    //     1
    //   );
    //   this.voxelManager.addGeometry(
    //     this.starshipFile,
    //     new Vector3(150 * i, 2, 150),
    //     1
    //   );
    // }
    // await this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(5, 200, 5),
    //   1
    // );

    // await this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(150, 2, 5),
    //   1
    // );

    // await this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(300, 2, 5),
    //   1
    // );

    // await this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(450, 2, 5),
    //   1
    // );
    // await this.voxelManager.addGeometry(
    //   this.starshipFile,
    //   new Vector3(600, 2, 5),
    //   1
    // );
    // [100, 200, 300, 400, 500, 600].forEach(async (posX) => {
    //   await this.voxelManager.addGeometry(
    //     [this.redSunFile, this.tealSunFile, this.sunFile][
    //       Math.round(Math.random() * 2)
    //     ],
    //     new Vector3(Math.random() * 100, Math.random() * 100, posX * 2),
    //     100
    //   );
    // });

    // [100].forEach(async (posX) => {
    //   this.voxelManager.addGeometry(
    //     this.starDestroyerFile,
    //     new Vector3(posX * 3, Math.random() * 2000, Math.random() * 2000),
    //     4
    //   );
    // });
    // [100, 200, 300, 400, 500].forEach(async (posX) => {
    //   this.voxelManager.addGeometry(
    //     this.starDestroyerFile,
    //     new Vector3(posX * 3, Math.random() * 2000, Math.random() * 2000),
    //     4
    //   );
    // });
    // let numbers = [];
    // for (let i = 1; i <= 4; i++) {
    //   numbers.push(i * 100);
    // }

    // numbers.forEach(async (posX) => {
    //   await this.voxelManager.addGeometry(
    //     this.enterpriseFile,
    //     new Vector3(posX - 600, Math.random() * 1000, Math.random() * 1000),
    //     1
    //   );
    // });

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

    // await this.voxelManager.update();
    return this.playerGeometry;
  }
}
