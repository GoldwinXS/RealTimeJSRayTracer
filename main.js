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
import {
  setupControls,
  updateCameraVectors,
  setCameraInfoElementStyle,
} from "./js/camera/cameraUtils";
import { VoxelGeometryManager } from "./js/data/MultiVoxelLoader";
import {
  importFromWindow,
  exportToWindow,
  uiStatePropertyNames,
} from "./js/uiState";
import { RGBELoader } from "./js/RGBELoader";

function createConfiguredMesh(
  settings,
  geometryParams,
  materialParams,
  transformationParams
) {
  const geometry = new THREE.BoxGeometry(...geometryParams);
  const material = new THREE.MeshPhysicalMaterial(materialParams);
  const mesh = new THREE.Mesh(geometry, material);

  mesh.visible = transformationParams.visible;
  mesh.rotation.set(...transformationParams.rotation);
  mesh.position.set(...transformationParams.position);
  mesh.updateMatrixWorld(transformationParams.updateMatrixWorld);

  settings.mesh = mesh;
}

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
  sceneSettings.sceneIsDynamic = true;
  sceneSettings.pixelRatio = 2;
  sceneSettings.EPS_intersect = 0.01;

  createConfiguredMesh(
    sceneSettings.tallBox,
    [1, 1, 1],
    {
      color: new THREE.Color(0.95, 0.95, 0.95),
      roughness: 1.0,
    },
    {
      visible: false,
      rotation: [0, Math.PI * 0.1, 0],
      position: [385, 170, -800],
      updateMatrixWorld: true,
    }
  );

  createConfiguredMesh(
    sceneSettings.shortBox,
    [1, 1, 1],
    {
      color: new THREE.Color(0.55, 0.95, 0.55),
      roughness: 1.0,
    },
    {
      visible: false,
      rotation: [0, -Math.PI * 0.09, 0],
      position: [800, 85, -570],
      updateMatrixWorld: true,
    }
  );

  // Add meshes.
  sceneSettings.pathTracing.scene.add(sceneSettings.shortBox.mesh);
  sceneSettings.pathTracing.scene.add(sceneSettings.tallBox.mesh);
  let hdrLoader = new RGBELoader();
  hdrLoader.type = THREE.FloatType; // override THREE's default of HalfFloatType

  let hdrTexture = hdrLoader.load("textures/daytime.hdr", function (texture) {
    return texture;
  });
  sceneSettings.controls = setupControls(sceneSettings);
  sceneSettings.controls.addEventListeners(sceneSettings);
  // scene/demo-specific uniforms go here
  let pathTracingUniforms = sceneSettings.pathTracing.uniforms;
  pathTracingUniforms.tHDRTexture = { value: hdrTexture };

  pathTracingUniforms.uShortBoxInvMatrix = { value: new THREE.Matrix4() };
  pathTracingUniforms.uTallBoxInvMatrix = { value: new THREE.Matrix4() };
  pathTracingUniforms.uTallBoxInvMatrix2 = { value: new THREE.Matrix4() };
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
  sceneSettings.pathTracing.scene.add(sceneSettings.cameraControls.object);

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
    depthTest: false,
    depthWrite: false,
    specialHandling: (mesh) => sceneSettings.worldCamera.add(mesh),
  });
  // Screen Copy Shader
  loadShaderAndCreateMesh(sceneSettings, {
    vertexShaderPath: "shaders/common_PathTracing_Vertex.glsl",
    fragmentShaderPath: "shaders/ScreenCopy_Fragment.glsl",
    uniforms: sceneSettings.screenCopy.uniforms,
    geometry: new THREE.PlaneGeometry(2, 2),
    scene: sceneSettings.screenCopy.scene,
    depthTest: false,
    depthWrite: false,
  });
  // Screen Output Shader
  loadShaderAndCreateMesh(sceneSettings, {
    vertexShaderPath: "shaders/common_PathTracing_Vertex.glsl",
    fragmentShaderPath: "shaders/ScreenOutput_Fragment.glsl",
    uniforms: sceneSettings.screenOutput.uniforms,
    geometry: new THREE.PlaneGeometry(2, 2),
    scene: sceneSettings.screenOutput.scene,
    depthTest: false,
    depthWrite: false,
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
  // Update variables
  sceneSettings.frameTime = sceneSettings.clock.getDelta();
  sceneSettings.elapsedTime = sceneSettings.clock.getElapsedTime() % 1000;

  // if GUI has been used, update window size.
  if (sceneSettings.needChangePixelResolution) {
    onWindowResize();
  }

  // Handle user input.
  const { oldYawRotation, oldPitchRotation, cameraIsMoving } =
    sceneSettings.controls.detectMovement(sceneSettings);
  sceneSettings.oldYawRotation = oldYawRotation;
  sceneSettings.oldPitchRotation = oldPitchRotation;
  sceneSettings.cameraIsMoving = cameraIsMoving;

  updateCameraVectors(sceneSettings);

  if (!sceneSettings.isUIActive) {
    sceneSettings.isPaused = sceneSettings.controls.handleInput(sceneSettings);
  }

  // the following gives us a rotation quaternion (4D vector), which will be useful for
  // rotating scene objects to match the camera's rotation
  sceneSettings.worldCamera.getWorldQuaternion(
    sceneSettings.camera.worldQuaternion
  );

  // Update scene specific uniforms
  sceneSettings.pathTracing.uniforms.uTallBoxInvMatrix.value
    .copy(sceneSettings.tallBox.mesh.matrixWorld)
    .invert();

  let pathTracingUniforms = sceneSettings.pathTracing.uniforms;

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
  // sceneSettings.voxels.voxelManager.updateShaderData();

  // INFO
  const camPosition = sceneSettings.cameraControls.object.position;
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
  sceneSettings.cameraControls.object.updateMatrixWorld(true);
  sceneSettings.cameraControls.yawObject.updateMatrixWorld(true);
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

async function loadFilesAndStart(sceneSettings) {
  // Handle loading of any files ayncronously.
  // Instantiate the manager
  const voxelManager = new VoxelGeometryManager();
  voxelManager.addSpecialColor({ red: 169, green: 31, blue: 31 }, 20);
  voxelManager.addSpecialColor({ red: 140, green: 202, blue: 215 }, 20);
  voxelManager.addSpecialColor({ red: 36, green: 153, blue: 29 }, 20);
  voxelManager.addSpecialColor({ red: 208, green: 206, blue: 129 }, 20);
  voxelManager.addSpecialColor({ red: 136, green: 152, blue: 141 }, 4);
  voxelManager.addSpecialColor({ red: 255, green: 91, blue: 94 }, 20);
  voxelManager.addSpecialColor({ red: 152, green: 210, blue: 94 }, 20);
  voxelManager.addSpecialColor({ red: 255, green: 73, blue: 40 }, 20);

  // await voxelManager.addGeometry(
  //   "./models/teapot.vox",
  //   new THREE.Vector3(300, 10, -320),
  //   5
  // );

  // voxelManager.setGeomRotation(0, "x", -90);
  // // voxelManager.setGeomRotation(0, "y", -90);
  // voxelManager.setGeomPosition(0, [300, 200, -300]);
  // Set up scene settings with the first geometry
  sceneSettings.voxels.voxelGeometry = voxelManager.voxelGeometries[0];
  sceneSettings.voxels.voxelManager = voxelManager;

  // Update the state for the UI
  exportToWindow(sceneSettings, uiStatePropertyNames);
  initSceneData(sceneSettings);
  startApp();
}

loadFilesAndStart(sceneSettings);
