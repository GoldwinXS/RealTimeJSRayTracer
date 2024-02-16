import { FirstPersonCameraControls } from "./FirstPersonCameraControls";
import * as THREE from "three";

export class PlayerControls extends FirstPersonCameraControls {
  constructor(worldCamera, ship) {
    super(worldCamera);
    // this.disable(); // Disable old event handlers.
    this.ship = ship; // The ship object the camera should always look at
    this.distance = new THREE.Vector3()
      .subVectors(this.worldCamera.position, this.ship.position)
      .length(); // Distance from ship to maintain
    this.boundOnMouseMove = this.onMouseMove.bind(this);
  }

  update() {
    // Make the camera follow the ship's position and rotation
    const offset = new THREE.Vector3(0, 5, -10); // Adjust this vector to change the camera's relative position
    const shipOrientation = new THREE.Quaternion().copy(
      this.ship.mesh.quaternion
    );
    const cameraOffset = offset.applyQuaternion(shipOrientation);
    this.worldCamera.position.copy(this.ship.position).add(cameraOffset);

    // Look at the ship
    this.worldCamera.lookAt(this.ship.position);

    // Optionally adjust the camera's position to maintain a fixed distance from the ship
    const direction = new THREE.Vector3()
      .subVectors(this.worldCamera.position, this.ship.position)
      .normalize();
    this.worldCamera.position
      .copy(this.ship.position)
      .add(direction.multiplyScalar(this.distance));
  }

  onMouseMove(event) {}

  handleInput(cameraIsMoving, cameraFlightSpeed, frameTime) {
    this.updateCameraVectors();
    // Directly modify the ship's position based on keyboard input
    let movement = new THREE.Vector3();

    if (this.keyPressed("KeyW")) {
      movement.z -= cameraFlightSpeed * frameTime;
    }
    if (this.keyPressed("KeyS")) {
      movement.z += cameraFlightSpeed * frameTime;
    }
    if (this.keyPressed("KeyA")) {
      movement.x -= cameraFlightSpeed * frameTime;
    }
    if (this.keyPressed("KeyD")) {
      movement.x += cameraFlightSpeed * frameTime;
    }
    if (this.keyPressed("KeyQ")) {
      movement.y += cameraFlightSpeed * frameTime;
    }
    if (this.keyPressed("KeyZ")) {
      movement.y -= cameraFlightSpeed * frameTime;
    }

    // Apply movement
    this.ship.mesh.position.add(movement);

    return movement.lengthSq() > 0;
  }
}
