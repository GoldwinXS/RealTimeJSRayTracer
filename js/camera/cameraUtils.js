export function setCameraInfoElementStyle(cameraInfoElement) {
  cameraInfoElement.style.cursor = "default";
  cameraInfoElement.style.userSelect = "none";
  cameraInfoElement.style.MozUserSelect = "none";
}

export default {
  setCameraInfoElementStyle,
};
