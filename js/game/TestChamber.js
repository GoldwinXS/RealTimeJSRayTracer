import { Vector3 } from "three";

export class TestChamber {
  roomSize = 2000;
  scale = 40;
  roomOffset = 40;

  wallThickness = 10;
  deathStarChunk = "../../models/deathStarChunk.vox";
  sunFile = "../../models/singleVoxelLight.vox";
  tealLightFile = "../../models/tealLight.vox";
  starshipFile = "../../models/xwingColor.vox";

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
    this.voxelManager.addGeometry(
      this.tealLightFile,
      new Vector3(0, 0, 100),
      50
    );

    // // // Floor and Ceiling
    // await this.voxelManager.addGeometry(
    //   this.deathStarChunk,
    //   new Vector3(this.roomOffset, -this.roomSize / 2, 0),
    //   this.scale
    // );
    // await this.voxelManager.addGeometry(
    //   this.deathStarChunk,
    //   new Vector3(this.roomOffset, this.roomSize / 2, 0),
    //   this.scale
    // );
    // // Walls: Front, Back, Left, Right
    // await this.voxelManager.addGeometry(
    //   this.deathStarChunk,
    //   new Vector3(this.roomOffset, 0, -this.roomSize / 2),
    //   this.scale
    // );
    // await this.voxelManager.addGeometry(
    //   this.deathStarChunk,
    //   new Vector3(this.roomOffset, 0, this.roomSize / 2),
    //   this.scale
    // );
    // await this.voxelManager.addGeometry(
    //   this.deathStarChunk,
    //   new Vector3(-this.roomSize / 2 + this.roomOffset, 0, 0),
    //   this.scale
    // );
    // this.voxelManager.addGeometry(
    //   this.deathStarChunk,
    //   new Vector3(this.roomSize / 2 + this.roomOffset, 0, 0),
    //   this.scale
    // );
    this.voxelManager.addGeometry(this.sunFile, new Vector3(0, 100, 0), 50);
  }
}
