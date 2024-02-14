// exportToWindow.js

export const uiStatePropertyNames = [
  "isUIActive",
  "pixelRatio",
  "spawnObjectManager",
  "blurRatio",
  "isPaused",
];

export function exportToWindow(sourceObject, propertyNames) {
  propertyNames.forEach((propName) => {
    if (Object.prototype.hasOwnProperty.call(sourceObject, propName)) {
      window[propName] = sourceObject[propName];
    }
  });
}

export function importFromWindow(targetObject, propertyNames) {
  propertyNames.forEach((propName) => {
    if (Object.prototype.hasOwnProperty.call(window, propName)) {
      targetObject[propName] = window[propName];
    }
  });
}

export default { uiStatePropertyNames, importFromWindow, exportToWindow };
