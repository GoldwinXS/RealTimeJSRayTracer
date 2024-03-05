import * as THREE from "three";
import { onWindowResize } from "./js/WindowEvents";
import { sceneSettings } from "./settings";
import {
  setupUniforms,
  setupRenderTargets,
  handleSceneDynamism,
  updateAnimatedPathtracingUniforms,
  loadShaderAndCreateMesh,
} from "./js/pathtracing/PathTracingUtils";
import { setCameraInfoElementStyle } from "./js/camera/cameraUtils";
import { VoxelGeometryManager } from "./js/data/MultiVoxelLoader";
import {
  importFromWindow,
  exportToWindow,
  uiStatePropertyNames,
} from "./js/uiState";
import { RGBELoader } from "./js/RGBELoader";
import { GameManager } from "./js/game/GameManager";
import { FirstPersonCameraControls } from "./js/camera/FirstPersonCameraControls";
import { materialTypes } from "./js/data/SpecialColorManager";

function initSceneData(sceneSettings) {
  // Initialize Renderer and Context
  sceneSettings.renderer = new THREE.WebGLRenderer({
    canvas: sceneSettings.canvas,
    context: sceneSettings.canvas.getContext("webgl2"),
  });
  sceneSettings.context = sceneSettings.renderer.getContext();
  sceneSettings.context.getExtension("EXT_color_buffer_float");

  // Append Stats and Renderer to Container
  let container = document.getElementById("container");
  container.appendChild(sceneSettings.stats.domElement);
  container.appendChild(sceneSettings.renderer.domElement);

  // Initialize Debug Mesh
  sceneSettings.debug.mesh = new THREE.Mesh(
    sceneSettings.debug.geometry,
    sceneSettings.debug.material
  );

  // Add worldCamera to pathTracing.scene
  sceneSettings.pathTracing.scene.add(sceneSettings.worldCamera);
  sceneSettings.debug.material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  }); // Green color

  // Set or change any needed scene data
  // sceneSettings.sceneIsDynamic = true;
  sceneSettings.pixelRatio = 2;
  sceneSettings.EPS_intersect = 0.01;

  // Add meshes.
  let hdrLoader = new RGBELoader();
  hdrLoader.type = THREE.FloatType; // override THREE's default of HalfFloatType

  sceneSettings.controls = new FirstPersonCameraControls(
    sceneSettings.worldCamera
  );

  // sceneSettings.gameManager.attachCamera(sceneSettings.worldCamera);
  // sceneSettings.gameManager.setupPlayerControls();
  // sceneSettings.controls = sceneSettings.gameManager.playerControls;

  // scene/demo-specific uniforms go here
  let pathTracingUniforms = sceneSettings.pathTracing.uniforms;
  pathTracingUniforms.uVoxelMeshInvMatrix = { value: new THREE.Matrix4() };
  pathTracingUniforms.voxelTexture = {
    value: sceneSettings.voxels.voxelManager.voxelTexture,
  };
  pathTracingUniforms.uVoxelDataTexture = {
    value: sceneSettings.voxels.voxelManager.shaderData,
  };
  pathTracingUniforms.uNumberOfVoxelGeometries = {
    value: sceneSettings.voxels.voxelManager.totalVoxelGeometries,
  };
  pathTracingUniforms.uVoxelDataTextureWidth = {
    value: sceneSettings.voxels.voxelManager.textureWidth,
  };

  pathTracingUniforms.uVoxelLightTexture = {
    value: sceneSettings.voxels.voxelManager.lightTexture,
  };
  pathTracingUniforms.uNumberOfVoxelLights = {
    value: sceneSettings.voxels.voxelManager.totalLights,
  };
  pathTracingUniforms.uVoxelLightTextureSize = {
    value: sceneSettings.voxels.voxelManager.lightTextureSize,
  };
}

function setupPathTracing(sceneSettings) {
  // setup scene/demo-specific objects, variables, GUI elements, and data
  // REDMINDER: set to false for production
  sceneSettings.renderer.debug.checkShaderErrors = true;
  sceneSettings.renderer.autoClear = false;
  sceneSettings.renderer.toneMapping = THREE.ReinhardToneMapping;

  //required by WebGL 2.0 for rendering to FLOAT textures
  sceneSettings.context = sceneSettings.renderer.getContext();
  sceneSettings.context.getExtension("EXT_color_buffer_float");

  // quadCamera is simply the camera to help render the full screen quad (2 triangles),
  // hence the name.  It is an Orthographic camera that sits facing the view plane, which serves as
  // the window into our 3d world. This camera will not move or rotate for the duration of the app.
  sceneSettings.quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  sceneSettings.screenCopy.scene.add(sceneSettings.quadCamera);
  sceneSettings.screenOutput.scene.add(sceneSettings.quadCamera);

  sceneSettings.pathTracing.scene.add(
    sceneSettings.controls.currentControls.object
  );

  // Setup render targets.
  sceneSettings.pathTracing.renderTarget = setupRenderTargets(
    sceneSettings.context
  );
  sceneSettings.screenCopy.renderTarget = setupRenderTargets(
    sceneSettings.context
  );

  // Setup unchanging uniforms for the path tracing shader.
  setupUniforms(sceneSettings);

  // Path Tracing Shader
  loadShaderAndCreateMesh(sceneSettings, {
    vertexShaderPath: "shaders/common_PathTracing_Vertex.glsl",
    fragmentShaderPath: "shaders/" + sceneSettings.demoFragmentShaderFileName,
    uniforms: sceneSettings.pathTracing.uniforms,
    geometry: sceneSettings.pathTracing.geometry,
    scene: sceneSettings.pathTracing.scene,
    specialHandling: (mesh) => sceneSettings.worldCamera.add(mesh),
  });
  // Screen Copy Shader
  loadShaderAndCreateMesh(sceneSettings, {
    vertexShaderPath: "shaders/common_PathTracing_Vertex.glsl",
    fragmentShaderPath: "shaders/ScreenCopy_Fragment.glsl",
    uniforms: sceneSettings.screenCopy.uniforms,
    geometry: new THREE.PlaneGeometry(2, 2),
    scene: sceneSettings.screenCopy.scene,
  });
  // Screen Output Shader
  loadShaderAndCreateMesh(sceneSettings, {
    vertexShaderPath: "shaders/common_PathTracing_Vertex.glsl",
    fragmentShaderPath: "shaders/ScreenOutput_Fragment.glsl",
    uniforms: sceneSettings.screenOutput.uniforms,
    geometry: new THREE.PlaneGeometry(2, 2),
    scene: sceneSettings.screenOutput.scene,
  });

  setCameraInfoElementStyle(sceneSettings.cameraInfoElement);

  // this 'jumpstarts' the initial dimensions and parameters for the window and renderer
  onWindowResize();

  // everything is set up, now we can start animating
  animate();
}

function animate() {
  // Extract any changes from the UI
  importFromWindow(sceneSettings, uiStatePropertyNames);
  sceneSettings.spawnObjectManager.executeCommands(
    sceneSettings.voxels.voxelManager
  );
  // reset flags
  sceneSettings.cameraIsMoving = false;
  sceneSettings.frameTime = sceneSettings.clock.getDelta();
  sceneSettings.elapsedTime = sceneSettings.clock.getElapsedTime() % 1000;

  // if GUI has been used, update window size.
  if (sceneSettings.needChangePixelResolution) {
    onWindowResize();
  }

  sceneSettings.isPaused = sceneSettings.controls.handleInput(
    sceneSettings.cameraIsMoving,
    sceneSettings.cameraFlightSpeed,
    sceneSettings.frameTime
  );

  // the following gives us a rotation quaternion (4D vector), which will be useful for
  // rotating scene objects to match the camera's rotation
  sceneSettings.worldCamera.getWorldQuaternion(
    sceneSettings.controls.cameraVectors.worldQuaternion
  );

  // Update scene specific uniforms
  let pathTracingUniforms = sceneSettings.pathTracing.uniforms;

  pathTracingUniforms.uBVHTexture = {
    value: sceneSettings.voxels.voxelManager.uBVHTexture,
  };

  pathTracingUniforms.uBVHTextureSize = {
    value: sceneSettings.voxels.voxelManager.uBVHTextureSize,
  };

  pathTracingUniforms.voxelTexture = {
    value: sceneSettings.voxels.voxelManager.voxelTexture,
  };
  pathTracingUniforms.uVoxelDataTexture = {
    value: sceneSettings.voxels.voxelManager.shaderData,
  };
  pathTracingUniforms.uNumberOfVoxelGeometries = {
    value: sceneSettings.voxels.voxelManager.totalVoxelGeometries,
  };
  pathTracingUniforms.uVoxelDataTextureWidth = {
    value: sceneSettings.voxels.voxelManager.textureWidth,
  };

  pathTracingUniforms.uVoxelLightTexture = {
    value: sceneSettings.voxels.voxelManager.lightTexture,
  };
  pathTracingUniforms.uNumberOfVoxelLights = {
    value: sceneSettings.voxels.voxelManager.totalLights,
  };
  pathTracingUniforms.uVoxelLightTextureSize = {
    value: sceneSettings.voxels.voxelManager.lightTextureSize,
  };
  // sceneSettings.voxels.voxelManager.updateShaderData();

  // INFO
  const camPosition = sceneSettings.controls.yawObject.position;
  const numberOfRays = Math.round(
    sceneSettings.context?.drawingBufferHeight *
      sceneSettings.context?.drawingBufferWidth *
      sceneSettings?.pixelRatio
  );
  sceneSettings.cameraInfoElement.innerHTML =
    "FOV: " +
    sceneSettings.worldCamera.fov +
    " / Aperture: " +
    sceneSettings.apertureSize.toFixed(2) +
    " / FocusDistance: " +
    sceneSettings.focusDistance +
    "<br>" +
    "Samples: " +
    sceneSettings.sampleCounter +
    "<br>" +
    "Camera Position: " +
    `x:${Math.round(camPosition.x)}, y:${Math.round(
      camPosition.y
    )}, z:${Math.round(camPosition.z)} ` +
    "<br>" +
    `Approx. Number of Rays: ${numberOfRays}`;

  // Decide whether or not to reset sample and frame count basaed on whether or not the scene is dynamic.
  const { sampleCounter, frameCounter } = handleSceneDynamism(sceneSettings);
  sceneSettings.sampleCounter = sampleCounter;
  sceneSettings.frameCounter = frameCounter;

  // Update pathtracing uniforms that must change on every frame.
  updateAnimatedPathtracingUniforms(sceneSettings);

  if (sceneSettings.windowIsBeingResized) {
    sceneSettings.cameraIsMoving = true;
    sceneSettings.windowIsBeingResized = false;
  }

  // CAMERA
  sceneSettings.controls.yawObject.updateMatrixWorld(true);
  sceneSettings.pathTracing.uniforms.uCameraMatrix.value.copy(
    sceneSettings.worldCamera.matrixWorld
  );

  sceneSettings.screenOutput.uniforms.uSampleCounter.value =
    sceneSettings.sampleCounter;
  // PROGRESSIVE SAMPLE WEIGHT (reduces intensity of each successive animation frame's image)
  sceneSettings.screenOutput.uniforms.uOneOverSampleCounter.value =
    1.0 / sceneSettings.sampleCounter;

  // RENDERING in 3 steps

  // STEP 1
  // Perform PathTracing and Render(save) into pathTracingRenderTarget, a full-screen texture.
  // Read previous screenCopyRenderTarget(via texelFetch inside fragment shader) to use as a new starting point to blend with
  sceneSettings.renderer.setRenderTarget(
    sceneSettings.pathTracing.renderTarget
  );
  sceneSettings.renderer.render(
    sceneSettings.pathTracing.scene,
    sceneSettings.worldCamera
  );

  // STEP 2
  // Render(copy) the pathTracing.scene output(pathTracingRenderTarget above) into screenCopyRenderTarget.
  // This will be used as a new starting point for Step 1 above (essentially creating ping-pong buffers)
  sceneSettings.renderer.setRenderTarget(sceneSettings.screenCopy.renderTarget);
  sceneSettings.renderer.render(
    sceneSettings.screenCopy.scene,
    sceneSettings.quadCamera
  );

  // STEP 3
  // Render full screen quad with generated pathTracingRenderTarget in STEP 1 above.
  // After applying tonemapping and gamma-correction to the image, it will be shown on the screen as the final accumulated output
  sceneSettings.renderer.setRenderTarget(null);
  sceneSettings.renderer.render(
    sceneSettings.screenOutput.scene,
    sceneSettings.quadCamera
  );

  sceneSettings.stats.update();
  sceneSettings.gameManager.handleAnimationFrame();
  requestAnimationFrame(animate);
}

function startApp() {
  window.addEventListener("resize", onWindowResize, false);
  window.addEventListener("orientationchange", onWindowResize, false);

  // load a resource
  sceneSettings.blueNoiseTexture = sceneSettings.textureLoader.load(
    // resource URL
    "textures/BlueNoise_RGBA256.png",

    // onLoad callback
    function (texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.flipY = false;
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      setupPathTracing(sceneSettings);
    }
  );
}

function defineSpecialColors(voxelManager) {
  // #define DIFF 1
  // #define REFR 2
  // #define SPEC 3
  // #define COAT 4
  // #define CARCOAT 5
  // #define TRANSLUCENT 6
  // #define SPECSUB 7
  // #define CHECK 8
  // #define WATER 9
  // #define PBR_MATERIAL 10
  // #define WOOD 11
  // #define SEAFLOOR 12
  // #define TERRAIN 13
  // #define CLOTH 14
  // #define LIGHTWOOD 15
  // #define DARKWOOD 16
  // #define PAINTING 17
  // #define METALCOAT 18

  // Tracked Lights
  let colorManager = voxelManager.specialColorManager;
  colorManager.addColors(materialTypes.LIGHT, [
    { red: 208, green: 206, blue: 129 },
    { red: 255, green: 33, blue: 0 },
    { red: 0, green: 255, blue: 203 },
  ]);

  colorManager.addColors(materialTypes.UNTRACKEDLIGHT, [
    { red: 208, green: 204, blue: 115 },
    { red: 255, green: 0, blue: 51 },
    { red: 225, green: 101, blue: 101 },
    { red: 148, green: 207, blue: 210 },
    { red: 228, green: 92, blue: 92 },
  ]);

  colorManager.addColors(materialTypes.METAL, [
    { red: 109, green: 109, blue: 109 },
    { red: 102, green: 102, blue: 102 },
  ]);

  colorManager.addColors(materialTypes.GLASS, [
    { red: 41, green: 75, blue: 55 },
    { red: 41, green: 75, blue: 55 },
    { red: 72, green: 132, blue: 122 },
    { red: 0, green: 0, blue: 221 },
  ]);
}

async function loadFilesAndStart(sceneSettings) {
  // Handle loading of any files ayncronously.
  // Instantiate the manager
  const voxelManager = new VoxelGeometryManager();

  defineSpecialColors(voxelManager);

  // Set up scene settings with the first geometry
  sceneSettings.gameManager = new GameManager(voxelManager);
  await sceneSettings.gameManager.startGame();

  sceneSettings.voxels.voxelGeometry = voxelManager.voxelGeometries[0];
  sceneSettings.voxels.voxelManager = voxelManager;
  sceneSettings.isPaused = true;
  // Update the state for the UI
  exportToWindow(sceneSettings, uiStatePropertyNames);
  initSceneData(sceneSettings);
  startApp();
}

loadFilesAndStart(sceneSettings);
