import * as THREE from 'three'

export const sceneSettings = {
    // Box Objects
    tallBox: {
        geometry: null,
        material: null,
        mesh: null
    },
    shortBox: {
        geometry: null,
        material: null,
        mesh: null
    },
    voxels: {
        geometry: null,
        material: null,
        mesh: null,
        texture: null,
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
        defines: {}
    },

    // Screen Copy Elements
    screenCopy: {
        geometry: new THREE.PlaneGeometry(2, 2),
        material: null,
        mesh: null,
        uniforms: null,
        fragmentShader: null,
        scene: new THREE.Scene(),
        renderTarget: null
    },

    // Screen Output Elements
    screenOutput: {
        geometry: new THREE.PlaneGeometry(2, 2),
        material: null,
        mesh: null,
        uniforms: null,
        vertexShader: null,
        fragmentShader: null,
        scene: new THREE.Scene()
    },

    // General Settings and Utilities
    oldYawRotation: null,
    oldPitchRotation: null,
    isPaused: true,
    ableToEngagePointerLock: true,
    cameraInfoElement: document.getElementById('cameraInfo'),
    blueNoiseTexture: null,
    container: null,
    stats: new window.Stats(),
    quadCamera: new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
    sceneIsDynamic: true,
    apertureSize: 0.0,
    focusDistance: 132.0,
    fileLoader: new THREE.FileLoader(),
    pixelRatio: 1.0,
    EPS_intersect: 0.01,
    canvas: document.getElementById('canvas'),
    renderer: null,
    context: null,
    demoFragmentShaderFileName: 'Water_Rendering_Fragment.glsl',
    worldCamera: new THREE.PerspectiveCamera(60, document.body.clientWidth / document.body.clientHeight, 1, 1000),
    cameraRotationSpeed: 1,
    cameraFlightSpeed: 300,
    PI_2: Math.PI / 2,
    controls: null,
    cameraControls: {
        object: null,
        yawObject: null,
        pitchObject: null
    },
    camera: {
        directionVector: new THREE.Vector3(),
        rightVector: new THREE.Vector3(),
        upVector: new THREE.Vector3(),
        worldQuaternion: new THREE.Quaternion(),
    },
    textureLoader: new THREE.TextureLoader(),
    pixelEdgeSharpness: 1.0,
    edgeSharpenSpeed: 0.05,
    filterDecaySpeed: 0.0002,
    useToneMapping: true,
    cameraIsMoving: false,
    frameTime: null,
    elapsedTime: null,
    needChangePixelResolution: false,
    windowIsBeingResized: false,

    sampleCounter: 0.0,
    frameCounter: 1.0,

    // Debugging Elements
    debug: {
        scene: new THREE.Scene(),
        geometry: new THREE.BoxGeometry(1, 1, 1),
        material: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
        mesh: new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
    },
    clock: new THREE.Clock()

};

// Give names to things for easier identification
sceneSettings.screenCopy.scene.name = "screenCopy.scene"
sceneSettings.screenOutput.scene.name = "screenOutput.scene"
sceneSettings.pathTracing.scene.name = "pathTracing.scene"

sceneSettings.screenCopy.geometry.name = "screenCopy.geometry"
sceneSettings.screenOutput.geometry.name = "screenOutput.geometry"
sceneSettings.pathTracing.geometry.name = "pathTracing.geometry"

export default sceneSettings 