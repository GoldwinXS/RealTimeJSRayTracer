import { FirstPersonCameraControls } from "./FirstPersonCameraControls";
import * as THREE from "three";

export class PlayerControls extends FirstPersonCameraControls {
  constructor(worldCamera, ship) {
    super(worldCamera);
    this.ship = ship; // The ship object the camera should always look at
    this.distance = new THREE.Vector3()
      .subVectors(this.worldCamera.position, this.ship.position)
      .length(); // Distance from ship to maintain
    this.boundOnMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(event) {
    if (window?.isPaused || window?.isUIActive) return;

    this.movementX = event.movementX || event.mozMovementX || 0;
    this.movementY = event.movementY || event.mozMovementY || 0;

    // Update camera rotation based on mouse movement
    this.yawObject.rotation.y -=
      this.movementX * 0.0012 * this.cameraRotationSpeed;
    this.pitchObject.rotation.x -=
      this.movementY * 0.001 * this.cameraRotationSpeed;
    this.pitchObject.rotation.x = Math.max(
      -this.PI_2,
      Math.min(this.PI_2, this.pitchObject.rotation.x)
    );

    // Calculate the new camera position to maintain a constant distance from the ship
    const sphericalCoords = new THREE.Spherical(
      this.distance,
      this.pitchObject.rotation.x,
      this.yawObject.rotation.y
    );
    const newPosition = new THREE.Vector3()
      .setFromSpherical(sphericalCoords)
      .add(this.ship.mesh.position);

    // Update the camera's position
    this.worldCamera.position.copy(newPosition);

    // Ensure the camera looks at the ship
    this.worldCamera.lookAt(this.ship.mesh.position);

    // Match the ship's rotation to the camera's rotation
    // This approach directly uses the yaw (Y) and pitch (X) without a roll (Z) component.
    // It assumes the ship's up vector aligns with the world's Y-axis.
    const shipRotation = new THREE.Euler(
      this.pitchObject.rotation.x,
      this.yawObject.rotation.y,
      0,
      "YXZ"
    );
    this.ship.mesh.rotation.copy(shipRotation);
  }

  updateCameraPosition(movementDirections, cameraFlightSpeed, frameTime) {
    let cameraIsMoving = false;
    let movement = new THREE.Vector3();
    // Iterate over each movement direction and apply it if its corresponding key is pressed
    Object.entries(movementDirections).forEach(
      ([key, { vector, multiplier }]) => {
        if (this.keyPressed(key)) {
          // Calculate movement vector for the current direction and add it to the total movement
          const directionMovement = vector
            .clone()
            .multiplyScalar(cameraFlightSpeed * frameTime * multiplier);
          movement.add(directionMovement); // Add the movement from this direction to the total movement
          cameraIsMoving = true;
        }
      }
    );

    // After the loop, apply the total movement to the camera's position
    if (cameraIsMoving) {
      this.currentControls.object.position.add(movement);
      this.ship.mesh.position.add(movement);
    }

    // Return the result outside the loop
    return cameraIsMoving;
  }

  handleInput(cameraIsMoving, cameraFlightSpeed, frameTime) {
    this.updateCameraVectors();
    // Directly modify the ship's position based on keyboard input
    const movementDirections = {
      KeyW: { vector: this.cameraVectors.rightVector, multiplier: -1 },
      KeyS: { vector: this.cameraVectors.rightVector, multiplier: 1 },
      KeyA: { vector: this.cameraVectors.upVector, multiplier: -1 },
      KeyD: { vector: this.cameraVectors.upVector, multiplier: 1 },
      KeyQ: { vector: this.cameraVectors.directionVector, multiplier: -1 },
      KeyZ: { vector: this.cameraVectors.directionVector, multiplier: 1 },
    };

    // Iterate over each movement direction and apply it if its corresponding key is pressed
    cameraIsMoving = this.updateCameraPosition(
      movementDirections,
      cameraFlightSpeed,
      frameTime
    );

    return cameraIsMoving;
  }
}
