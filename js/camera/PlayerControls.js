import { FirstPersonCameraControls } from "./FirstPersonCameraControls";
import * as THREE from "three";

export class PlayerControls extends FirstPersonCameraControls {
  spawnShip = false;
  constructor(worldCamera, ship) {
    super(worldCamera);
    this.ship = ship; // The ship object the camera should always look at
    this.distance = new THREE.Vector3()
      .subVectors(this.worldCamera.position, this.ship.mesh.position)
      .length();
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.lastFiringTime = Date.now();
    this.firing = false;
    this.firingDelay = 500;
    this.shotsFired = 0;
    this.shotsSpawned = 0;
    this.speed = 3;
    this.blasterIndex = 0;
    this.mass = 1;
    this.velocity = new THREE.Vector3();
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
      KeyD: { vector: rightVector, multiplier: 1 },
      ShiftLeft: { vector: upVector, multiplier: -1 },
      ControlLeft: { vector: upVector, multiplier: 1 },
    };

    // Assume a basic force for user input for simplicity
    let force = new THREE.Vector3();
    Object.entries(movementDirections).forEach(
      ([key, { vector, multiplier }]) => {
        if (this.keyPressed(key)) {
          // Accumulate force based on input
          force.addScaledVector(
            vector,
            multiplier * cameraFlightSpeed * this.speed
          );
        }
      }
    );

    // Calculate acceleration (F = ma => a = F / m)
    let acceleration = force.clone().divideScalar(this.mass);

    // Update velocity (v = v0 + at)
    this.velocity.addScaledVector(acceleration, frameTime);

    // Update position (s = s0 + vt)
    this.ship.mesh.position.addScaledVector(this.velocity, frameTime);

    // Optionally, apply some damping to the velocity to simulate friction/resistance

    let dampingFactor = 0.99; // Adjust as necessary
    this.velocity.multiplyScalar(dampingFactor);
    if (this.velocity.length() < 0.5) {
      this.velocity = new THREE.Vector3();
    }
    if (this.keyPressed("Space")) {
      if (Date.now() - this.lastFiringTime > this.firingDelay) {
        this.shotsFired++;
        this.firing = true;
        this.lastFiringTime = Date.now();
      }
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
