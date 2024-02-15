/**
 * originally from https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/PointerLockControls.js
 * @author mrdoob / http://mrdoob.com/
 *
 * edited by Erich Loftis (erichlof on GitHub)
 * https://github.com/erichlof
 * Btw, this is the most consice and elegant way to implement first person camera rotation/movement that I've ever seen -
 * look at how short it is, without spaces/braces it would be around 30 lines!  Way to go, mrdoob!
 */

import * as THREE from "three";

export let cameraRotationSpeed = 1;
export let PI_2 = Math.PI / 2;

let KeyboardState = {
  KeyA: false,
  KeyB: false,
  KeyC: false,
  KeyD: false,
  KeyE: false,
  KeyF: false,
  KeyG: false,
  KeyH: false,
  KeyI: false,
  KeyJ: false,
  KeyK: false,
  KeyL: false,
  KeyM: false,
  KeyN: false,
  KeyO: false,
  KeyP: false,
  KeyQ: false,
  KeyR: false,
  KeyS: false,
  KeyT: false,
  KeyU: false,
  KeyV: false,
  KeyW: false,
  KeyX: false,
  KeyY: false,
  KeyZ: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
  Space: false,
  Enter: false,
  PageUp: false,
  PageDown: false,
  Tab: false,
  Minus: false,
  Equal: false,
  BracketLeft: false,
  BracketRight: false,
  Semicolon: false,
  Quote: false,
  Backquote: false,
  Comma: false,
  Period: false,
  ShiftLeft: false,
  ShiftRight: false,
  Slash: false,
  Backslash: false,
  Backspace: false,
  Digit1: false,
  Digit2: false,
  Digit3: false,
  Digit4: false,
  Digit5: false,
  Digit6: false,
  Digit7: false,
  Digit8: false,
  Digit9: false,
  Digit0: false,
};

export class FirstPersonCameraControls {
  constructor(camera) {
    this.camera = camera;
    this.camera.rotation.set(0, 0, 0);

    this.movementObject = new THREE.Object3D();
    this.movementObject.add(camera);

    this.pitchObject = new THREE.Object3D();
    this.pitchObject.add(camera);

    this.yawObject = new THREE.Object3D();
    this.yawObject.add(this.pitchObject);

    document.addEventListener("mousemove", this.#onMouseMove.bind(this), false);
  }

  #onMouseMove(event) {
    if (window?.isPaused || window?.isUIActive) return;
    this.movementX = event.movementX || event.mozMovementX || 0;
    this.movementY = event.movementY || event.mozMovementY || 0;

    this.yawObject.rotation.y -= this.movementX * 0.0012 * cameraRotationSpeed;
    this.pitchObject.rotation.x -= this.movementY * 0.001 * cameraRotationSpeed;
    // clamp the camera's vertical movement (around the x-axis) to the scene's 'ceiling' and 'floor'
    this.pitchObject.rotation.x = Math.max(
      -PI_2,
      Math.min(PI_2, this.pitchObject.rotation.x)
    );
  }

  getYawObject() {
    return this.yawObject;
  }

  getPitchObject() {
    return this.pitchObject;
  }

  getDirection(v) {
    const te = this.pitchObject.matrixWorld.elements;
    v.set(te[8], te[9], te[10]).negate();
    return v;
  }

  getUpVector(v) {
    const te = this.pitchObject.matrixWorld.elements;
    v.set(te[4], te[5], te[6]);
    return v;
  }

  getRightVector(v) {
    const te = this.pitchObject.matrixWorld.elements;
    v.set(te[0], te[1], te[2]);
    return v;
  }

  updateCameraVectors(camera) {
    this.getDirection(camera.directionVector);

    this.getUpVector(camera.upVector);
    this.getRightVector(camera.rightVector);
    camera.directionVector.normalize();
    camera.upVector.normalize();
    camera.rightVector.normalize();
  }

  keyPressed(keyName) {
    return KeyboardState[keyName];
  }
  onKeyDown(event) {
    if (window.isUIActive) {
      return;
    }
    event.preventDefault();
    KeyboardState[event.code] = true;
  }

  onKeyUp(event) {
    if (window.isUIActive) {
      return;
    }
    event.preventDefault();
    KeyboardState[event.code] = false;
  }

  handleInput({
    cameraControls,
    camera,
    cameraIsMoving,
    cameraFlightSpeed,
    frameTime,
  }) {
    let cameraControlsObject = cameraControls.object;
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

  detectMovement = function ({
    mouseControl,
    oldYawRotation,
    oldPitchRotation,
    cameraIsMoving,
  }) {
    // check user controls
    if (mouseControl) {
      // movement detected
      if (
        oldYawRotation != this.yawObject.rotation.y ||
        oldPitchRotation != this.pitchObject.rotation.x
      ) {
        cameraIsMoving = true;
      }

      // save state for next frame
      oldYawRotation = this.yawObject.rotation.y;
      oldPitchRotation = this.pitchObject.rotation.x;
    }
    return { oldYawRotation, oldPitchRotation, cameraIsMoving };
  };

  pointerlockChange() {
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

  addEventListeners() {
    document.addEventListener("keydown", this.onKeyDown.bind(this), false);
    document.addEventListener("keyup", this.onKeyUp.bind(this), false);
    document.addEventListener("mousemove", this.#onMouseMove.bind(this), false);

    // Attach the pointerlockchange event listener
    document.addEventListener(
      "pointerlockchange",
      this.pointerlockChange.bind(this),
      false
    );
    document.addEventListener(
      "mozpointerlockchange",
      this.pointerlockChange.bind(this),
      false
    );
    document.addEventListener(
      "webkitpointerlockchange",
      this.pointerlockChange.bind(this),
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
}
