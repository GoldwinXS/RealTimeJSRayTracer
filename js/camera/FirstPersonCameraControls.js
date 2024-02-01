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

export var FirstPersonCameraControls = function (camera) {
  camera.rotation.set(0, 0, 0);

  var pitchObject = new THREE.Object3D();
  pitchObject.add(camera);
  var yawObject = new THREE.Object3D();
  yawObject.add(pitchObject);

  var movementX = 0;
  var movementY = 0;

  var onMouseMove = function (event) {
    if (this.isPaused || window?.isUIActive) return;
    movementX = event.movementX || event.mozMovementX || 0;
    movementY = event.movementY || event.mozMovementY || 0;

    yawObject.rotation.y -= movementX * 0.0012 * cameraRotationSpeed;
    pitchObject.rotation.x -= movementY * 0.001 * cameraRotationSpeed;
    // clamp the camera's vertical movement (around the x-axis) to the scene's 'ceiling' and 'floor'
    pitchObject.rotation.x = Math.max(
      -PI_2,
      Math.min(PI_2, pitchObject.rotation.x)
    );
  };

  document.addEventListener("mousemove", onMouseMove, false);

  this.getObject = function () {
    return yawObject;
  };

  this.getYawObject = function () {
    return yawObject;
  };

  this.getPitchObject = function () {
    return pitchObject;
  };

  this.getDirection = (function () {
    var te = pitchObject.matrixWorld.elements;
    return function (v) {
      v.set(te[8], te[9], te[10]).negate();

      return v;
    };
  })();

  this.getUpVector = (function () {
    var te = pitchObject.matrixWorld.elements;

    return function (v) {
      v.set(te[4], te[5], te[6]);

      return v;
    };
  })();

  this.getRightVector = (function () {
    var te = pitchObject.matrixWorld.elements;

    return function (v) {
      v.set(te[0], te[1], te[2]);

      return v;
    };
  })();

  function keyPressed(keyName) {
    return KeyboardState[keyName];
  }
  this.onKeyDown = function (event) {
    if (window.isUIActive) {
      return;
    }
    event.preventDefault();
    KeyboardState[event.code] = true;
  };

  this.onKeyUp = function (event) {
    if (window.isUIActive) {
      return;
    }
    event.preventDefault();
    KeyboardState[event.code] = false;
  };

  this.handleInput = function ({
    cameraControls,
    camera,
    cameraIsMoving,
    cameraFlightSpeed,
    frameTime,
  }) {
    let cameraControlsObject = cameraControls.object;
    if (keyPressed("KeyW")) {
      cameraControlsObject.position.add(
        camera.directionVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (keyPressed("KeyS") && !keyPressed("KeyW")) {
      cameraControlsObject.position.sub(
        camera.directionVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (keyPressed("KeyA") && !keyPressed("KeyD")) {
      cameraControlsObject.position.sub(
        camera.rightVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (keyPressed("KeyD") && !keyPressed("KeyA")) {
      cameraControlsObject.position.add(
        camera.rightVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (keyPressed("KeyQ") && !keyPressed("KeyZ")) {
      cameraControlsObject.position.add(
        camera.upVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    if (keyPressed("KeyZ") && !keyPressed("KeyQ")) {
      cameraControlsObject.position.sub(
        camera.upVector.multiplyScalar(cameraFlightSpeed * frameTime)
      );
      cameraIsMoving = true;
    }
    return cameraIsMoving;
  };

  this.detectMovement = function ({
    mouseControl,
    cameraControls,
    oldYawRotation,
    oldPitchRotation,
    cameraIsMoving,
  }) {
    // check user controls
    if (mouseControl) {
      // movement detected
      if (
        oldYawRotation != cameraControls.yawObject.rotation.y ||
        oldPitchRotation != cameraControls.pitchObject.rotation.x
      ) {
        cameraIsMoving = true;
      }

      // save state for next frame
      oldYawRotation = cameraControls.yawObject.rotation.y;
      oldPitchRotation = cameraControls.pitchObject.rotation.x;
    }
    return { oldYawRotation, oldPitchRotation, cameraIsMoving };
  };

  this.addEventListeners = function (sceneSettings) {
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("keyup", this.onKeyUp, false);

    // window.addEventListener(
    //   "mouseenter",
    //   function (event) {
    //     sceneSettings.ableToEngagePointerLock = false;
    //   },
    //   false
    // );
    // window.addEventListener(
    //   "mouseleave",
    //   function (event) {
    //     sceneSettings.ableToEngagePointerLock = true;
    //   },
    //   false
    // );

    // document.addEventListener("wheel", function (event) {
    //   handleChangeFOV(event, FOVSettings);
    // });

    window.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
      },
      false
    );
    window.addEventListener(
      "dblclick",
      function (event) {
        event.preventDefault();
      },
      false
    );

    document.body.addEventListener(
      "click",
      // eslint-disable-next-line no-unused-vars
      function (_) {
        if (!sceneSettings.ableToEngagePointerLock || sceneSettings.isUIActive)
          return;
        this.requestPointerLock =
          this.requestPointerLock || this.mozRequestPointerLock;
        this.requestPointerLock();
      },
      false
    );

    // eslint-disable-next-line no-unused-vars
    let pointerlockChange = function (event) {
      if (
        document.pointerLockElement === document.body ||
        document.mozPointerLockElement === document.body ||
        document.webkitPointerLockElement === document.body
      ) {
        document.addEventListener("keydown", this.onKeyDown, false);
        document.addEventListener("keyup", this.onKeyUp, false);
        sceneSettings.isPaused = false;
      } else {
        document.removeEventListener("keydown", this.onKeyDown, false);
        document.removeEventListener("keyup", this.onKeyUp, false);
        sceneSettings.isPaused = true;
      }
    };

    // Hook pointer lock state change events
    document.addEventListener("pointerlockchange", pointerlockChange, false);
    document.addEventListener("mozpointerlockchange", pointerlockChange, false);
    document.addEventListener(
      "webkitpointerlockchange",
      pointerlockChange,
      false
    );
  };
};
