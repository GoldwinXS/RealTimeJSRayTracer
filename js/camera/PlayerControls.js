import { FirstPersonCameraControls } from "./FirstPersonCameraControls";
import { Vector3 } from "three";

export class PlayerControls extends FirstPersonCameraControls {
  constructor(worldCamera, ship) {
    super(worldCamera);
    this.ship = ship;
  }
}
