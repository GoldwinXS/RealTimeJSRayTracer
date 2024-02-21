import { FirstPersonCameraControls } from "./FirstPersonCameraControls";
import * as THREE from "three";

export class PlayerControls extends FirstPersonCameraControls {
  spawnShip = false;
  constructor(worldCamera, ship) {
    super(worldCamera);
    this.ship = ship; // The ship object the camera should always look at
    this.distance = new THREE.Vector3()
      .subVectors(this.worldCamera.position, this.ship.position)
      .length();
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.firing = false;
    this.shotsFired = 0;
    this.shotsSpawned = 0;
    this.blasterIndex = 0;
  }

  getBlasterIndex() {
    this.blasterIndex = this.shotsFired % 4;
    this.firing = false;
    return this.blasterIndex;
  }

  onMouseMove(event) {
    if (window?.isPaused || window?.isUIActive) return;

    this.movementX = event.movementX || event.mozMovementX || 0;
    this.movementY = event.movementY || event.mozMovementY || 0;

    // Convert mouse movements into rotation angles
    let xRotationAngle = this.movementX * 0.0012 * this.cameraRotationSpeed;
    let yRotationAngle = this.movementY * 0.001 * this.cameraRotationSpeed;

    // Create rotation axes (assuming Y is up/down and X is left/right)
    let xAxis = new THREE.Vector3(1, 0, 0); // Local X axis for pitch
    let yAxis = new THREE.Vector3(0, 1, 0); // Local Y axis for yaw

    // Apply the rotation relative to the ship's current orientation
    this.ship.mesh.rotateOnAxis(xAxis, -xRotationAngle); // For pitch
    this.ship.mesh.rotateOnAxis(yAxis, -yRotationAngle); // For yaw
  }

  getShipVectors() {
    // Calculate the ship's forward and right (lateral) vectors
    let forwardVector = new THREE.Vector3(1, 0, 0);
    forwardVector.applyQuaternion(this.ship.mesh.quaternion);
    forwardVector.negate(); // Only if necessary, depending on orientation
    let rightVector = new THREE.Vector3();
    rightVector.crossVectors(this.ship.mesh.up, forwardVector).normalize(); // Recalculate right vector
    let upVector = new THREE.Vector3();
    upVector.crossVectors(rightVector, forwardVector).normalize();
    return { forwardVector, rightVector, upVector };
  }

  handleInput(cameraIsMoving, cameraFlightSpeed, frameTime) {
    const { forwardVector, rightVector, upVector } = this.getShipVectors();
    const movementDirections = {
      KeyW: { vector: forwardVector, multiplier: 1 },
      KeyS: { vector: forwardVector, multiplier: -1 },
      KeyA: { vector: rightVector, multiplier: -1 },
      KeyD: { vector: upVector, multiplier: -1 },
      ShiftLeft: { vector: rightVector, multiplier: 1 },
      ControlLeft: { vector: upVector, multiplier: 1 },
    };

    // Move.
    Object.entries(movementDirections).forEach(
      ([key, { vector, multiplier }]) => {
        if (this.keyPressed(key)) {
          // Apply movement
          const movement = vector
            .clone()
            .multiplyScalar(multiplier * cameraFlightSpeed * frameTime);
          this.ship.mesh.position.add(movement);
          cameraIsMoving = true;
        }
      }
    );

    if (this.keyPressed("Space")) {
      this.shotsFired++;
      this.firing = true;
    }
    if (this.keyPressed("KeyT")) {
      this.spawnShip = true;
    }
    let xAxis = new THREE.Vector3(1, 0, 0); // Local X axis for pitch
    // Roll
    let rollSpeed = 3;
    if (this.keyPressed("KeyQ")) {
      this.ship.mesh.rotateOnAxis(xAxis, rollSpeed * frameTime);
      // this.ship.mesh.rotation.x += rollSpeed * frameTime;
      cameraIsMoving = true;
    } else if (this.keyPressed("KeyE")) {
      this.ship.mesh.rotateOnAxis(xAxis, -(rollSpeed * frameTime));
      // this.ship.mesh.rotation.x -= rollSpeed * frameTime;
      cameraIsMoving = true;
    }

    // Position camera.
    let offset = new THREE.Vector3(this.distance, 0, 30); // Start with the offset directly behind the ship
    offset.applyQuaternion(this.ship.mesh.quaternion); // Apply the ship's rotation to the offset
    let cameraPosition = new THREE.Vector3().addVectors(
      this.ship.mesh.position,
      offset
    );
    this.worldCamera.position.copy(cameraPosition);
    // this.worldCamera.rotation.z = this.ship.mesh.rotation.z;
    this.worldCamera.quaternion.copy(this.ship.mesh.quaternion.clone());
    this.worldCamera.lookAt(this.ship.mesh.position);
    return cameraIsMoving;
  }
}
