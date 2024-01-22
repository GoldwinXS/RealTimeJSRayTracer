import * as THREE from 'three'
import LoadVoxels from './js/LoadVoxels';
import { onWindowResize } from './WindowEvents';
import { sceneSettings } from './settings';
import { FirstPersonCameraControls } from './js/FirstPersonCameraControls';

function setupControls({ worldCamera, controls, cameraControls }) {
    controls = new FirstPersonCameraControls(worldCamera);
    // Initialize Controls
    controls.name = "controls"
    controls.isPaused = false
    controls.addEventListeners()
    // Set up Camera Controls
    cameraControls.object = controls.getObject();
    cameraControls.yawObject = controls.getYawObject();
    cameraControls.pitchObject = controls.getPitchObject();
    cameraControls.object.name = "cameraControls.object"
    cameraControls.yawObject.name = "cameraControls.yawObject"
    cameraControls.pitchObject.name = "cameraControls.pitchObject"
    cameraControls.object.position.set(96, 397, 278);
    cameraControls.yawObject.rotation.y = -0.3;
    cameraControls.pitchObject.rotation.x = -0.45;
    return controls
}

function updateCameraVectors({ controls, camera }) {
    // this gives us a vector in the direction that the camera is pointing,
    // which will be useful for moving the camera 'forward' and shooting projectiles in that direction
    controls.getDirection(camera.directionVector);
    camera.directionVector.normalize();
    controls.getUpVector(camera.upVector);
    camera.upVector.normalize();
    controls.getRightVector(camera.rightVector);
    camera.rightVector.normalize();
}

function loadShaderAndCreateMesh(sceneSettings, shaderConfig) {
    sceneSettings.fileLoader.load(shaderConfig.vertexShaderPath, function (vertexShaderText) {
        sceneSettings.fileLoader.load(shaderConfig.fragmentShaderPath, function (fragmentShaderText) {
            const material = new THREE.ShaderMaterial({
                uniforms: shaderConfig.uniforms,
                uniformsGroups: shaderConfig.uniformsGroups || [],
                defines: shaderConfig.defines || {},
                vertexShader: vertexShaderText,
                fragmentShader: fragmentShaderText,
                depthTest: shaderConfig.depthTest,
                depthWrite: shaderConfig.depthWrite
            });

            const mesh = new THREE.Mesh(shaderConfig.geometry, material);
            shaderConfig.scene.add(mesh);

            // Special handling if needed (e.g., adding to camera)
            if (shaderConfig.specialHandling) {
                shaderConfig.specialHandling(mesh);
            }
        });
    });
}

function setupUniforms({
    pathTracing,
    screenOutput,
    screenCopy,
    EPS_intersect,
    apertureSize,
    focusDistance,
    pixelEdgeSharpness,
    edgeSharpenSpeed,
    filterDecaySpeed,
    sceneIsDynamic,
    useToneMapping
}) {
    // setup screen-size quad geometry and shaders....
    // this full-screen quad mesh performs the path tracing operations and produces a screen-sized image
    pathTracing.uniforms.tPreviousTexture = { type: "t", value: screenCopy.renderTarget.texture };
    pathTracing.uniforms.tBlueNoiseTexture = { type: "t", value: sceneSettings.blueNoiseTexture };
    pathTracing.uniforms.uCameraMatrix = { type: "m4", value: new THREE.Matrix4() };
    pathTracing.uniforms.uResolution = { type: "v2", value: new THREE.Vector2() };
    pathTracing.uniforms.uRandomVec2 = { type: "v2", value: new THREE.Vector2() };
    pathTracing.uniforms.uEPS_intersect = { type: "f", value: EPS_intersect };
    pathTracing.uniforms.uTime = { type: "f", value: 0.0 };
    pathTracing.uniforms.uSampleCounter = { type: "f", value: 0.0 }; //0.0
    pathTracing.uniforms.uPreviousSampleCount = { type: "f", value: 1.0 };
    pathTracing.uniforms.uFrameCounter = { type: "f", value: 1.0 }; //1.0
    pathTracing.uniforms.uULen = { type: "f", value: 1.0 };
    pathTracing.uniforms.uVLen = { type: "f", value: 1.0 };
    pathTracing.uniforms.uApertureSize = { type: "f", value: apertureSize };
    pathTracing.uniforms.uFocusDistance = { type: "f", value: focusDistance };
    pathTracing.uniforms.uCameraIsMoving = { type: "b1", value: false };
    pathTracing.uniforms.uUseOrthographicCamera = { type: "b1", value: false };

    screenOutput.uniforms = {
        tPathTracedImageTexture: { type: "t", value: pathTracing.renderTarget.texture },
        uSampleCounter: { type: "f", value: 0.0 },
        uOneOverSampleCounter: { type: "f", value: 0.0 },
        uPixelEdgeSharpness: { type: "f", value: pixelEdgeSharpness },
        uEdgeSharpenSpeed: { type: "f", value: edgeSharpenSpeed },
        uFilterDecaySpeed: { type: "f", value: filterDecaySpeed },
        uSceneIsDynamic: { type: "b1", value: sceneIsDynamic },
        uUseToneMapping: { type: "b1", value: useToneMapping }
    };

    screenCopy.uniforms = {
        tPathTracedImageTexture: { type: "t", value: pathTracing.renderTarget.texture }
    };

}

function initSceneData(sceneSettings) {
    // Initialize Renderer and Context
    sceneSettings.renderer = new THREE.WebGLRenderer({ canvas: sceneSettings.canvas, context: sceneSettings.canvas.getContext('webgl2') });
    sceneSettings.context = sceneSettings.renderer.getContext();
    sceneSettings.context.getExtension('EXT_color_buffer_float');

    // Append Stats and Renderer to Container
    let container = document.getElementById('container');
    container.appendChild(sceneSettings.stats.domElement);
    container.appendChild(sceneSettings.renderer.domElement);

    // Initialize Debug Mesh
    sceneSettings.debug.mesh = new THREE.Mesh(sceneSettings.debug.geometry, sceneSettings.debug.material);


    // Add worldCamera to pathTracing.scene
    sceneSettings.pathTracing.scene.add(sceneSettings.worldCamera);

    sceneSettings.debug.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color

    // Set or change any needed scene data
    sceneSettings.sceneIsDynamic = true;
    sceneSettings.pixelRatio = window.mouseControl ? 1.0 : 0.8;
    sceneSettings.EPS_intersect = 0.01;

    // Create and place meshes.
    sceneSettings.tallBox.geometry = new THREE.BoxGeometry(1, 1, 1);
    sceneSettings.tallBox.material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0.95, 0.95, 0.95), //RGB, ranging from 0.0 - 1.0
        roughness: 1.0 // ideal Diffuse material	
    });
    sceneSettings.tallBox.mesh = new THREE.Mesh(sceneSettings.tallBox.geometry, sceneSettings.tallBox.material);

    sceneSettings.tallBox.mesh.visible = false; // disable normal Three.js rendering updates of this object: 
    sceneSettings.tallBox.mesh.rotation.set(0, Math.PI * 0.1, 0);
    sceneSettings.tallBox.mesh.position.set(180, 170, -350);
    sceneSettings.tallBox.mesh.updateMatrixWorld(true); // 'true' forces immediate matrix update
    sceneSettings.shortBox.geometry = new THREE.BoxGeometry(1, 1, 1);
    sceneSettings.shortBox.material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0.55, 0.95, 0.55), //RGB, ranging from 0.0 - 1.0
        roughness: 1.0 // ideal Diffuse material	
    });
    sceneSettings.shortBox.mesh = new THREE.Mesh(sceneSettings.shortBox.geometry, sceneSettings.shortBox.material);
    sceneSettings.shortBox.mesh.visible = false;
    sceneSettings.shortBox.mesh.rotation.set(0, -Math.PI * 0.09, 0);
    sceneSettings.shortBox.mesh.position.set(800, 85, -570);
    sceneSettings.shortBox.mesh.updateMatrixWorld(true); // 'true' forces immediate matrix update

    // const { loadedVoxels, size } = await LoadVoxels.processVoxelFile('./castle.vox')
    // const voxelMesh = LoadVoxels.createVoxelMesh(loadedVoxels, size)
    // voxelMesh.visible = false;
    // voxelMesh.rotation.set(0, -Math.PI * 0.09, 0);
    // voxelMesh.position.set(200, 120, -200);
    // voxelMesh.updateMatrixWorld(true); // 'true' forces immediate matrix update

    // Add meshes.
    sceneSettings.pathTracing.scene.add(sceneSettings.shortBox.mesh);
    // pathTracing.scene.add(voxelMesh)
    sceneSettings.pathTracing.scene.add(sceneSettings.tallBox.mesh);

    sceneSettings.controls = setupControls(sceneSettings)
    // scene/demo-specific uniforms go here
    sceneSettings.pathTracing.uniforms.uShortBoxInvMatrix = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.uTallBoxInvMatrix = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.uTallBoxInvMatrix2 = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.uVoxelMeshInvMatrix = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.voxelTexture = { value: LoadVoxels.voxelTexture }
    // pathTracing.uniforms.uVoxelMeshInvMatrix.value.copy(voxelMesh.matrixWorld).invert();
}

function setupRenderTargets(context) {
    // setup render targets...
    let renderTarget = new THREE.WebGLRenderTarget(context.drawingBufferWidth, context.drawingBufferHeight, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthBuffer: false,
        stencilBuffer: false
    });
    renderTarget.texture.generateMipmaps = false;
    return renderTarget
}

function setupPathTracing(sceneSettings) {
    // setup scene/demo-specific objects, variables, GUI elements, and data
    // REDMINDER: set to false for production
    sceneSettings.renderer.debug.checkShaderErrors = true;
    sceneSettings.renderer.autoClear = false;
    sceneSettings.renderer.toneMapping = THREE.ReinhardToneMapping;

    //required by WebGL 2.0 for rendering to FLOAT textures
    sceneSettings.context = sceneSettings.renderer.getContext();
    sceneSettings.context.getExtension('EXT_color_buffer_float');

    // quadCamera is simply the camera to help render the full screen quad (2 triangles),
    // hence the name.  It is an Orthographic camera that sits facing the view plane, which serves as
    // the window into our 3d world. This camera will not move or rotate for the duration of the app.
    sceneSettings.quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    sceneSettings.screenCopy.scene.add(sceneSettings.quadCamera);
    sceneSettings.screenOutput.scene.add(sceneSettings.quadCamera);
    sceneSettings.pathTracing.scene.add(sceneSettings.cameraControls.object);

    // Setup render targets.
    sceneSettings.pathTracing.renderTarget = setupRenderTargets(sceneSettings.context)
    sceneSettings.screenCopy.renderTarget = setupRenderTargets(sceneSettings.context)

    // Setup unchanging uniforms for the path tracing shader.
    setupUniforms(sceneSettings)

    // Path Tracing Shader
    loadShaderAndCreateMesh(sceneSettings, {
        vertexShaderPath: 'shaders/common_PathTracing_Vertex.glsl',
        fragmentShaderPath: 'shaders/' + sceneSettings.demoFragmentShaderFileName,
        uniforms: sceneSettings.pathTracing.uniforms,
        geometry: sceneSettings.pathTracing.geometry,
        scene: sceneSettings.pathTracing.scene,
        depthTest: false,
        depthWrite: false,
        specialHandling: (mesh) => sceneSettings.worldCamera.add(mesh)
    });

    // Screen Copy Shader
    loadShaderAndCreateMesh(sceneSettings, {
        vertexShaderPath: 'shaders/common_PathTracing_Vertex.glsl',
        fragmentShaderPath: 'shaders/ScreenCopy_Fragment.glsl',
        uniforms: sceneSettings.screenCopy.uniforms,
        geometry: new THREE.PlaneGeometry(2, 2),
        scene: sceneSettings.screenCopy.scene,
        depthTest: false,
        depthWrite: false
    });

    // Screen Output Shader
    loadShaderAndCreateMesh(sceneSettings, {
        vertexShaderPath: 'shaders/common_PathTracing_Vertex.glsl',
        fragmentShaderPath: 'shaders/ScreenOutput_Fragment.glsl',
        uniforms: sceneSettings.screenOutput.uniforms,
        geometry: new THREE.PlaneGeometry(2, 2),
        scene: sceneSettings.screenOutput.scene,
        depthTest: false,
        depthWrite: false
    });
    setCameraInfoElementStyle(sceneSettings.cameraInfoElement)

    // this 'jumpstarts' the initial dimensions and parameters for the window and renderer
    onWindowResize();

    // everything is set up, now we can start animating
    animate();
}

function setCameraInfoElementStyle(cameraInfoElement) {
    cameraInfoElement.style.cursor = "default";
    cameraInfoElement.style.userSelect = "none";
    cameraInfoElement.style.MozUserSelect = "none";
}

function handleSceneDynamism({
    cameraIsMoving,
    sceneIsDynamic,
    sampleCounter,
    frameCounter,
    cameraRecentlyMoving,
    pathTracingUniforms
}) {
    if (!cameraIsMoving) {
        if (sceneIsDynamic)
            sampleCounter = 1.0; // reset for continuous updating of image
        else sampleCounter += 1.0; // for progressive refinement of image

        frameCounter += 1.0;
        cameraRecentlyMoving = false;
    }

    if (cameraIsMoving) {
        frameCounter += 1.0;
        if (!cameraRecentlyMoving) {
            // record current sampleCounter before it gets set to 1.0 below
            pathTracingUniforms.uPreviousSampleCount.value = sampleCounter;
            frameCounter = 1.0;
            cameraRecentlyMoving = true;
        }
        sampleCounter = 1.0;
    }

    return { sampleCounter, frameCounter }
}

function updateAnimatedPathtracingUniforms({ pathTracing, elapsedTime, cameraIsMoving, sampleCounter, frameCounter }) {
    pathTracing.uniforms.uTime.value = elapsedTime;
    pathTracing.uniforms.uCameraIsMoving.value = cameraIsMoving;
    pathTracing.uniforms.uSampleCounter.value = sampleCounter;
    pathTracing.uniforms.uFrameCounter.value = frameCounter;
    pathTracing.uniforms.uRandomVec2.value.set(Math.random(), Math.random());

}

function animate() {
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
    const { oldYawRotation, oldPitchRotation, cameraIsMoving } = sceneSettings.controls.detectMovement(sceneSettings)
    sceneSettings.oldYawRotation = oldYawRotation
    sceneSettings.oldPitchRotation = oldPitchRotation
    sceneSettings.cameraIsMoving = cameraIsMoving

    updateCameraVectors(sceneSettings)
    sceneSettings.isPaused = sceneSettings.controls.handleInput(sceneSettings)

    // the following gives us a rotation quaternion (4D vector), which will be useful for 
    // rotating scene objects to match the camera's rotation
    sceneSettings.worldCamera.getWorldQuaternion(sceneSettings.camera.worldQuaternion);


    // Update scene specific uniforms
    sceneSettings.pathTracing.uniforms.uTallBoxInvMatrix.value.copy(sceneSettings.tallBox.mesh.matrixWorld).invert();
    sceneSettings.pathTracing.uniforms.uShortBoxInvMatrix.value.copy(sceneSettings.shortBox.mesh.matrixWorld).invert();

    // INFO
    sceneSettings.cameraInfoElement.innerHTML = "FOV: " + sceneSettings.worldCamera.fov + " / Aperture: " + sceneSettings.apertureSize.toFixed(2) + " / FocusDistance: " + sceneSettings.focusDistance + "<br>" + "Samples: " + sceneSettings.sampleCounter;

    // Decide whether or not to reset sample and frame count basaed on whether or not the scene is dynamic.
    const { sampleCounter, frameCounter } = handleSceneDynamism(sceneSettings);
    sceneSettings.sampleCounter = sampleCounter
    sceneSettings.frameCounter = frameCounter

    // Update pathtracing uniforms that must change on every frame. 
    updateAnimatedPathtracingUniforms(sceneSettings);

    if (sceneSettings.windowIsBeingResized) {
        sceneSettings.cameraIsMoving = true;
        sceneSettings.windowIsBeingResized = false;
    }


    // CAMERA
    sceneSettings.cameraControls.object.updateMatrixWorld(true);
    sceneSettings.cameraControls.yawObject.updateMatrixWorld(true);
    sceneSettings.pathTracing.uniforms.uCameraMatrix.value.copy(sceneSettings.worldCamera.matrixWorld);

    sceneSettings.screenOutput.uniforms.uSampleCounter.value = sceneSettings.sampleCounter;
    // PROGRESSIVE SAMPLE WEIGHT (reduces intensity of each successive animation frame's image)
    sceneSettings.screenOutput.uniforms.uOneOverSampleCounter.value = 1.0 / sceneSettings.sampleCounter;

    // RENDERING in 3 steps

    // STEP 1
    // Perform PathTracing and Render(save) into pathTracingRenderTarget, a full-screen texture.
    // Read previous screenCopyRenderTarget(via texelFetch inside fragment shader) to use as a new starting point to blend with
    sceneSettings.renderer.setRenderTarget(sceneSettings.pathTracing.renderTarget);
    sceneSettings.renderer.render(sceneSettings.pathTracing.scene, sceneSettings.worldCamera);

    // STEP 2
    // Render(copy) the pathTracing.scene output(pathTracingRenderTarget above) into screenCopyRenderTarget.
    // This will be used as a new starting point for Step 1 above (essentially creating ping-pong buffers)
    sceneSettings.renderer.setRenderTarget(sceneSettings.screenCopy.renderTarget);
    sceneSettings.renderer.render(sceneSettings.screenCopy.scene, sceneSettings.quadCamera);

    // STEP 3
    // Render full screen quad with generated pathTracingRenderTarget in STEP 1 above.
    // After applying tonemapping and gamma-correction to the image, it will be shown on the screen as the final accumulated output
    sceneSettings.renderer.setRenderTarget(null);
    sceneSettings.renderer.render(sceneSettings.screenOutput.scene, sceneSettings.quadCamera);

    sceneSettings.stats.update();
    requestAnimationFrame(animate);
}

function startApp() {

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('orientationchange', onWindowResize, false);

    // load a resource
    sceneSettings.blueNoiseTexture = sceneSettings.textureLoader.load(
        // resource URL
        'textures/BlueNoise_RGBA256.png',

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

initSceneData(sceneSettings);

startApp()
