import { FirstPersonCameraControls } from "./FirstPersonCameraControls";

export function setupControls({ worldCamera, controls, cameraControls }) {
  controls = new FirstPersonCameraControls(worldCamera);
  // Initialize Controls
  controls.name = "controls";
  controls.isPaused = true;

  // Set up Camera Controls
  cameraControls.object = controls.getObject();
  cameraControls.yawObject = controls.getYawObject();
  cameraControls.pitchObject = controls.getPitchObject();
  cameraControls.object.name = "cameraControls.object";
  cameraControls.yawObject.name = "cameraControls.yawObject";
  cameraControls.pitchObject.name = "cameraControls.pitchObject";
  cameraControls.object.position.set(96, 397, 278);
  cameraControls.yawObject.rotation.y = -0.3;
  cameraControls.pitchObject.rotation.x = -0.45;
  return controls;
}

export function updateCameraVectors({ controls, camera }) {
  // this gives us a vector in the direction that the camera is pointing,
  // which will be useful for moving the camera 'forward' and shooting projectiles in that direction
  controls.getDirection(camera.directionVector);
  camera.directionVector.normalize();
  controls.getUpVector(camera.upVector);
  camera.upVector.normalize();
  controls.getRightVector(camera.rightVector);
  camera.rightVector.normalize();
}

export function setCameraInfoElementStyle(cameraInfoElement) {
  cameraInfoElement.style.cursor = "default";
  cameraInfoElement.style.userSelect = "none";
  cameraInfoElement.style.MozUserSelect = "none";
}

export default {
  setupControls,
  updateCameraVectors,
  setCameraInfoElementStyle,
};
