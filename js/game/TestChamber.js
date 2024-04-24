import { Vector3 } from "three";

export class TestChamber {
  roomSize = 2000;
  scale = 40;
  roomOffset = 40;

  wallThickness = 10;
  deathStarChunk = "../../models/deathStarChunk.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  redLightFile = "../../models/redLight.vox";
  tealLightFile = "../../models/tealLight.vox";
  starshipFile = "../../models/xwingColor.vox";
  destroyer = "../../models/destroyer.vox";
  tie = "../../models/tie.vox";

  constructor(voxelManager) {
    this.voxelManager = voxelManager;
  }

  async startGame(camera) {
    this.setupScene();
    this.setupCamera(camera);
  }

  setupCamera(camera) {
    // Position the camera inside the room, slightly elevated and centered
    // camera.position.set(this.roomOffset, -this.roomSize / 4, 0);
    // camera.lookAt(new Vector3(0, -this.roomSize / 4, -1)); // Looking forward
  }

  handleAnimationFrame() {
    this.voxelManager.updateVoxelShaderData();
  }

  setupScene() {
    // Setup a light source
    // Setup the room
    this.setupRoom();
  }

  async setupRoom() {
    const sunId = await this.voxelManager.addGeometry(
      this.sunFile,
      new Vector3(0, 100000, 100),
      50000
    );

    this.voxelManager.setGeomRotation(sunId, "y", 30);
    const starshipID = await this.voxelManager.addGeometry(
      this.starshipFile,
      new Vector3(0, 0, -200),
      1
    );

    for (let i = 0; i < 3; i++) {
      const tieId = await this.voxelManager.addGeometry(
        this.tie,
        new Vector3(-430 + i * 90, 18 + i * 30, -650),
        1
      );
      this.voxelManager.setGeomRotation(tieId, "x", 80 + i * 3);
      this.voxelManager.setGeomRotation(tieId, "z", 70 + i * 3);
    }

    this.voxelManager.setGeomRotation(starshipID, "x", -40);
    this.voxelManager.setGeomRotation(starshipID, "z", 40);

    // const DestroyerID = await this.voxelManager.addGeometry(
    //   this.destroyer,
    //   new Vector3(750, -71, -1200),
    //   4
    // );
    // this.voxelManager.setGeomRotation(DestroyerID, "x", -40);
    // this.voxelManager.setGeomRotation(DestroyerID, "z", -40);
    // for (let i = 0; i < ; i++) {
    //   const DestroyerID = await this.voxelManager.addGeometry(
    //     this.destroyer,
    //     new Vector3(750 + i * 90, -71 + i * 30, -1200)
    //   );

    // }

    this.voxelManager.addGeometry(
      this.tealLightFile,
      new Vector3(-471, 130, -300),
      100
    );

    this.voxelManager.addGeometry(
      this.redLightFile,
      new Vector3(150, 100, -600),
      100
    );
    // this.voxelManager.addGeometry(this.sunFile, new Vector3(0, 100, 0), 50);
  }
}
