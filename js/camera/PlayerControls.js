import { FirstPersonCameraControls } from "./FirstPersonCameraControls";
import { Vector3 } from "three";

export class PlayerControls extends FirstPersonCameraControls {
  constructor(camera, ship) {
    super(camera);
    this.ship = ship; // Assuming the ship is a THREE.Object3D or similar
  }
}
