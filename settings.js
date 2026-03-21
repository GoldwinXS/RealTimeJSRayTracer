import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module.js';

export const sceneSettings = {
  voxels: {
    voxelGeometry: null,
    voxelManager: null,
  },
  // Path Tracing Elements
  pathTracing: {
    vertexShader: null,
    fragmentShader: null,
    material: null,
    mesh: null,
    uniforms: {},
    uniformsGroups: [],
    geometry: new THREE.PlaneGeometry(2, 2),
    scene: new THREE.Scene(),
    renderTarget: null,
    defines: {},
  },

  // Screen Copy Elements
  screenCopy: {
    geometry: new THREE.PlaneGeometry(2, 2),
    material: null,
    mesh: null,
    uniforms: null,
    fragmentShader: null,
    scene: new THREE.Scene(),
    renderTarget: null,
  },

  // Screen Output Elements
  screenOutput: {
    geometry: new THREE.PlaneGeometry(2, 2),
    material: null,
    mesh: null,
    uniforms: null,
    vertexShader: null,
    fragmentShader: null,
    scene: new THREE.Scene(),
  },

  // General Settings and Utilities
  oldYawRotation: null,
  oldPitchRotation: null,
  isPaused: false,
  ableToEngagePointerLock: true,
  cameraInfoElement: document.getElementById("cameraInfo"),
  blueNoiseTexture: null,
  container: null,
  stats: new Stats(),
  quadCamera: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
  sceneIsDynamic: true,
  apertureSize: 0.0,
  focusDistance: 132.0,
  fileLoader: new THREE.FileLoader(),
  pixelRatio: 1,
  blurRatio: 0.6,
  EPS_intersect: 0.01,
  canvas: document.getElementById("canvas"),
  renderer: null,
  context: null,
  demoFragmentShaderFileName: "Voxel_Rendering_Fragment.glsl",
  worldCamera: new THREE.PerspectiveCamera(
    60,
    document.body.clientWidth / document.body.clientHeight,
    1,
    1000
  ),
  isUIActive: false,
  cameraRotationSpeed: 1,
  cameraFlightSpeed: 300,
  PI_2: Math.PI / 2,
  controls: null,
  textureLoader: new THREE.TextureLoader(),
  pixelEdgeSharpness: 1.0,
  edgeSharpenSpeed: 0.05,
  filterDecaySpeed: 0.0002,
  useToneMapping: true,
  cameraIsMoving: false,
  frameTime: null,
  elapsedTime: null,
  needChangePixelResolution: true,
  windowIsBeingResized: false,

  sampleCounter: 0.0,
  frameCounter: 1.0,

  clock: new THREE.Clock(),
};

// Give names to things for easier identification
sceneSettings.screenCopy.scene.name = "screenCopy.scene";
sceneSettings.screenOutput.scene.name = "screenOutput.scene";
sceneSettings.pathTracing.scene.name = "pathTracing.scene";

sceneSettings.screenCopy.geometry.name = "screenCopy.geometry";
sceneSettings.screenOutput.geometry.name = "screenOutput.geometry";
sceneSettings.pathTracing.geometry.name = "pathTracing.geometry";

export default sceneSettings;
