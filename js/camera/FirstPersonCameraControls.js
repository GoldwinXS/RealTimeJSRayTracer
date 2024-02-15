import * as THREE from "three";
import { KeyboardState } from "./cameraUtils";

export class FirstPersonCameraControls {
  currentControls;
  cameraRotationSpeed = 1;
  PI_2 = Math.PI / 2;
  keyboardState = structuredClone(KeyboardState);

  constructor(camera) {
    this.camera = camera;
    this.pitchObject = new THREE.Object3D();
    this.pitchObject.add(camera);

    this.yawObject = new THREE.Object3D();
    this.yawObject.add(this.pitchObject);
    this.isPaused = true;

    this.boundOnMouseMove = this.#onMouseMove.bind(this);
    this.boundOnKeyDown = this.onKeyDown.bind(this);
    this.boundOnKeyUp = this.onKeyUp.bind(this);

    this.#setCurrentControls();
    this.#addPointerLockEventListeners();
    this.enable();
  }

  handleInput(camera, cameraIsMoving, cameraFlightSpeed, frameTime) {
    this.#updateCameraVectors(camera);
    let cameraControlsObject = this.currentControls.object;
    if (this.keyPressed("KeyW")) {
      cameraControlsObject.position.add(
        camera.directionVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (this.keyPressed("KeyS") && !this.keyPressed("KeyW")) {
      cameraControlsObject.position.sub(
        camera.directionVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (this.keyPressed("KeyA") && !this.keyPressed("KeyD")) {
      cameraControlsObject.position.sub(
        camera.rightVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (this.keyPressed("KeyD") && !this.keyPressed("KeyA")) {
      cameraControlsObject.position.add(
        camera.rightVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (this.keyPressed("KeyQ") && !this.keyPressed("KeyZ")) {
      cameraControlsObject.position.add(
        camera.upVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (this.keyPressed("KeyZ") && !this.keyPressed("KeyQ")) {
      cameraControlsObject.position.sub(
        camera.upVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    return cameraIsMoving;
  }

  enable() {
    document.addEventListener("mousemove", this.boundOnMouseMove, false);
    document.addEventListener("keydown", this.boundOnKeyDown, false);
    document.addEventListener("keyup", this.boundOnKeyUp, false);
  }

  disable() {
    document.removeEventListener("mousemove", this.boundOnMouseMove, false);
    document.removeEventListener("keydown", this.boundOnKeyDown, false);
    document.removeEventListener("keyup", this.boundOnKeyUp, false);
  }

  #addPointerLockEventListeners() {
    // Attach the pointerlockchange event listener
    document.addEventListener(
      "pointerlockchange",
      this.#pointerlockChange.bind(this),
      false
    );
    document.addEventListener(
      "mozpointerlockchange",
      this.#pointerlockChange.bind(this),
      false
    );
    document.addEventListener(
      "webkitpointerlockchange",
      this.#pointerlockChange.bind(this),
      false
    );

    var enablePointerLock = function () {
      document.body.requestPointerLock =
        document.body.requestPointerLock ||
        document.mozRequestPointerLock ||
        document.webkitRequestPointerLock;
      document.body.requestPointerLock();
    };

    // Set up click event to request pointer lock
    document.body.addEventListener(
      "click",
      enablePointerLock.bind(this),
      false
    );
  }

  #onMouseMove(event) {
    if (window?.isPaused || window?.isUIActive) return;
    this.movementX = event.movementX || event.mozMovementX || 0;
    this.movementY = event.movementY || event.mozMovementY || 0;

    this.yawObject.rotation.y -=
      this.movementX * 0.0012 * this.cameraRotationSpeed;
    this.pitchObject.rotation.x -=
      this.movementY * 0.001 * this.cameraRotationSpeed;
    // clamp the camera's vertical movement (around the x-axis) to the scene's 'ceiling' and 'floor'
    this.pitchObject.rotation.x = Math.max(
      -this.PI_2,
      Math.min(this.PI_2, this.pitchObject.rotation.x)
    );
  }

  #setCurrentControls() {
    this.currentControls = {
      object: this.#getYawObject(),
      yawObject: this.#getYawObject(),
      pitchObject: this.#getPitchObject(),
    };
  }

  #getYawObject() {
    return this.yawObject;
  }

  #getPitchObject() {
    return this.pitchObject;
  }

  #getDirection(v) {
    const te = this.pitchObject.matrixWorld.elements;
    v.set(te[8], te[9], te[10]).negate();
    return v;
  }

  #getUpVector(v) {
    const te = this.pitchObject.matrixWorld.elements;
    v.set(te[4], te[5], te[6]);
    return v;
  }

  #getRightVector(v) {
    const te = this.pitchObject.matrixWorld.elements;
    v.set(te[0], te[1], te[2]);
    return v;
  }

  #updateCameraVectors(camera) {
    this.#getDirection(camera.directionVector);

    this.#getUpVector(camera.upVector);
    this.#getRightVector(camera.rightVector);
    camera.directionVector.normalize();
    camera.upVector.normalize();
    camera.rightVector.normalize();
  }

  keyPressed(keyName) {
    return this.keyboardState[keyName];
  }

  onKeyDown(event) {
    if (window.isUIActive) {
      return;
    }
    event.preventDefault();
    this.keyboardState[event.code] = true;
  }

  onKeyUp(event) {
    if (window.isUIActive) {
      return;
    }
    event.preventDefault();
    this.keyboardState[event.code] = false;
  }

  #pointerlockChange() {
    if (
      document.pointerLockElement === document.body ||
      document.mozPointerLockElement === document.body ||
      document.webkitPointerLockElement === document.body
    ) {
      window.isPaused = false;
      document.addEventListener(
        "mousemove",
        this.#onMouseMove.bind(this),
        false
      );
    } else {
      window.isPaused = true;
      document.removeEventListener(
        "mousemove",
        this.#onMouseMove.bind(this),
        false
      );
    }
  }
}
