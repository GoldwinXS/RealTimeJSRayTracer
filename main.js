import * as THREE from 'three'
import LoadVoxels from './LoadVoxels';
import { onWindowResize } from './WindowEvents';
import { sceneSettings } from './settings';
import { FirstPersonCameraControls } from './FirstPersonCameraControls';

// scene/demo-specific variables go here

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

    // Initialize Controls
    sceneSettings.controls = new FirstPersonCameraControls(sceneSettings.worldCamera);
    sceneSettings.controls.isPaused = false
    sceneSettings.controls.addEventListeners()
    // Set up Camera Controls
    sceneSettings.cameraControls.object = sceneSettings.controls.getObject();
    sceneSettings.cameraControls.yawObject = sceneSettings.controls.getYawObject();
    sceneSettings.cameraControls.pitchObject = sceneSettings.controls.getPitchObject();

    sceneSettings.pathTracing.scene = new THREE.Scene();
    sceneSettings.screenCopy.scene = new THREE.Scene();
    sceneSettings.screenOutput.scene = new THREE.Scene();

    // Add worldCamera to pathTracing.scene
    sceneSettings.pathTracing.scene.add(sceneSettings.worldCamera);

    // Debugging: Simple Scene Setup
    sceneSettings.debug.scene = new THREE.Scene();
    sceneSettings.debug.geometry = new THREE.BoxGeometry(1, 1, 1); // Simple box geometry
    sceneSettings.debug.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color for visibility
    sceneSettings.debug.mesh = new THREE.Mesh(sceneSettings.debug.geometry, sceneSettings.debug.material);


    sceneSettings.debug.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color
    sceneSettings.pathTracing.scene.add(sceneSettings.debug.mesh); // Add the debug mesh to the scene

    sceneSettings.debug.scene.add(sceneSettings.debug.mesh);

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

    // controls: null,
    // cameraControls: {
    //     object: null,
    //     yawObject: null,
    //     pitchObject: null
    // },
    // position and orient camera
    sceneSettings.cameraControls.object.position.set(96, 397, 278);
    sceneSettings.cameraControls.yawObject.rotation.y = -0.3;
    sceneSettings.cameraControls.pitchObject.rotation.x = -0.45;

    // scene/demo-specific uniforms go here
    sceneSettings.pathTracing.uniforms.uShortBoxInvMatrix = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.uTallBoxInvMatrix = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.uTallBoxInvMatrix2 = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.uVoxelMeshInvMatrix = { value: new THREE.Matrix4() };
    sceneSettings.pathTracing.uniforms.voxelTexture = { value: LoadVoxels.voxelTexture }
    // pathTracing.uniforms.uVoxelMeshInvMatrix.value.copy(voxelMesh.matrixWorld).invert();

    // return { voxelMesh }
}

function setupPathTracing(sceneSettings) {
    // setup scene/demo-specific objects, variables, GUI elements, and data
    initSceneData(sceneSettings);
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

    // setup render targets...
    sceneSettings.pathTracing.renderTarget = new THREE.WebGLRenderTarget(sceneSettings.context.drawingBufferWidth, sceneSettings.context.drawingBufferHeight, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthBuffer: false,
        stencilBuffer: false
    });
    sceneSettings.pathTracing.renderTarget.texture.generateMipmaps = false;

    sceneSettings.screenCopy.renderTarget = new THREE.WebGLRenderTarget(sceneSettings.context.drawingBufferWidth, sceneSettings.context.drawingBufferHeight, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthBuffer: false,
        stencilBuffer: false
    });
    sceneSettings.screenCopy.renderTarget.texture.generateMipmaps = false;




    // setup screen-size quad geometry and shaders....
    // this full-screen quad mesh performs the path tracing operations and produces a screen-sized image
    sceneSettings.pathTracing.uniforms.tPreviousTexture = { type: "t", value: sceneSettings.screenCopy.renderTarget.texture };
    sceneSettings.pathTracing.uniforms.tBlueNoiseTexture = { type: "t", value: sceneSettings.blueNoiseTexture };

    sceneSettings.pathTracing.uniforms.uCameraMatrix = { type: "m4", value: new THREE.Matrix4() };

    sceneSettings.pathTracing.uniforms.uResolution = { type: "v2", value: new THREE.Vector2() };
    sceneSettings.pathTracing.uniforms.uRandomVec2 = { type: "v2", value: new THREE.Vector2() };

    sceneSettings.pathTracing.uniforms.uEPS_intersect = { type: "f", value: sceneSettings.EPS_intersect };
    sceneSettings.pathTracing.uniforms.uTime = { type: "f", value: 0.0 };
    sceneSettings.pathTracing.uniforms.uSampleCounter = { type: "f", value: 0.0 }; //0.0
    sceneSettings.pathTracing.uniforms.uPreviousSampleCount = { type: "f", value: 1.0 };
    sceneSettings.pathTracing.uniforms.uFrameCounter = { type: "f", value: 1.0 }; //1.0
    sceneSettings.pathTracing.uniforms.uULen = { type: "f", value: 1.0 };
    sceneSettings.pathTracing.uniforms.uVLen = { type: "f", value: 1.0 };
    sceneSettings.pathTracing.uniforms.uApertureSize = { type: "f", value: sceneSettings.apertureSize };
    sceneSettings.pathTracing.uniforms.uFocusDistance = { type: "f", value: sceneSettings.focusDistance };

    sceneSettings.pathTracing.uniforms.uCameraIsMoving = { type: "b1", value: false };
    sceneSettings.pathTracing.uniforms.uUseOrthographicCamera = { type: "b1", value: false };

    // load vertex and fragment shader files that are used in the pathTracing material, mesh and scene
    sceneSettings.fileLoader.load('shaders/common_PathTracing_Vertex.glsl', function (vertexShaderText) {
        sceneSettings.pathTracing.vertexShader = vertexShaderText;
        sceneSettings.fileLoader.load('shaders/' + sceneSettings.demoFragmentShaderFileName, function (fragmentShaderText) {

            sceneSettings.pathTracing.fragmentShader = fragmentShaderText;

            sceneSettings.pathTracing.material = new THREE.ShaderMaterial({
                uniforms: sceneSettings.pathTracing.uniforms,
                uniformsGroups: sceneSettings.pathTracing.uniformsGroups,
                defines: sceneSettings.pathTracing.defines,
                vertexShader: sceneSettings.pathTracing.vertexShader,
                fragmentShader: sceneSettings.pathTracing.fragmentShader,
                depthTest: false,
                depthWrite: false
            });

            sceneSettings.pathTracing.mesh = new THREE.Mesh(sceneSettings.pathTracing.geometry, sceneSettings.pathTracing.material);
            sceneSettings.pathTracing.scene.add(sceneSettings.pathTracing.mesh);

            // the following keeps the large scene ShaderMaterial quad right in front 
            //   of the camera at all times. This is necessary because without it, the scene 
            //   quad will fall out of view and get clipped when the camera rotates past 180 degrees.
            sceneSettings.worldCamera.add(sceneSettings.pathTracing.mesh);

        });
    });

    // this full-screen quad mesh copies the image output of the pathtracing shader and feeds it back in to that shader as a 'previousTexture'
    sceneSettings.screenCopy.geometry = new THREE.PlaneGeometry(2, 2);

    sceneSettings.screenCopy.uniforms = {
        tPathTracedImageTexture: { type: "t", value: sceneSettings.pathTracing.renderTarget.texture }
    };

    sceneSettings.fileLoader.load('shaders/ScreenCopy_Fragment.glsl', function (shaderText) {

        sceneSettings.screenCopy.fragmentShader = shaderText;

        sceneSettings.screenCopy.material = new THREE.ShaderMaterial({
            uniforms: sceneSettings.screenCopy.uniforms,
            vertexShader: sceneSettings.pathTracing.vertexShader,
            fragmentShader: sceneSettings.screenCopy.fragmentShader,
            depthWrite: false,
            depthTest: false
        });

        sceneSettings.screenCopy.mesh = new THREE.Mesh(sceneSettings.screenCopy.geometry, sceneSettings.screenCopy.material);
        sceneSettings.screenCopy.scene.add(sceneSettings.screenCopy.mesh);
    });

    // this full-screen quad mesh takes the image output of the path tracing shader (which is a continuous blend of the previous frame and current frame),
    // and applies gamma correction (which brightens the entire image), and then displays the final accumulated rendering to the screen
    sceneSettings.screenOutputGeometry = new THREE.PlaneGeometry(2, 2);

    sceneSettings.screenOutput.uniforms = {
        tPathTracedImageTexture: { type: "t", value: sceneSettings.pathTracing.renderTarget.texture },
        uSampleCounter: { type: "f", value: 0.0 },
        uOneOverSampleCounter: { type: "f", value: 0.0 },
        uPixelEdgeSharpness: { type: "f", value: sceneSettings.pixelEdgeSharpness },
        uEdgeSharpenSpeed: { type: "f", value: sceneSettings.edgeSharpenSpeed },
        uFilterDecaySpeed: { type: "f", value: sceneSettings.filterDecaySpeed },
        uSceneIsDynamic: { type: "b1", value: sceneSettings.sceneIsDynamic },
        uUseToneMapping: { type: "b1", value: sceneSettings.useToneMapping }
    };

    sceneSettings.fileLoader.load('shaders/ScreenOutput_Fragment.glsl', function (shaderText) {

        sceneSettings.screenOutput.fragmentShader = shaderText;

        sceneSettings.screenOutput.material = new THREE.ShaderMaterial({
            uniforms: sceneSettings.screenOutput.uniforms,
            vertexShader: sceneSettings.pathTracing.vertexShader,
            fragmentShader: sceneSettings.screenOutput.fragmentShader,
            depthWrite: false,
            depthTest: false
        });

        sceneSettings.screenOutput.mesh = new THREE.Mesh(sceneSettings.screenOutput.geometry, sceneSettings.screenOutput.material);
        sceneSettings.screenOutput.scene.add(sceneSettings.screenOutput.mesh);
    });

    // this 'jumpstarts' the initial dimensions and parameters for the window and renderer
    onWindowResize();

    // everything is set up, now we can start animating
    animate();

}


function animate() {
    sceneSettings.frameTime = sceneSettings.clock.getDelta();

    sceneSettings.elapsedTime = sceneSettings.clock.getElapsedTime() % 1000;
    // console.log(sceneSettings.worldCamera.position)

    // reset flags
    sceneSettings.cameraIsMoving = false;
    sceneSettings.controls.handleInput(
        sceneSettings.cameraIsMoving,
        sceneSettings.frameTime,
        sceneSettings.cameraFlightSpeed,
        sceneSettings.cameraDirectionVector,
        sceneSettings.cameraRightVector,
        sceneSettings.cameraUpVector
    )
    // if GUI has been used, update
    if (sceneSettings.needChangePixelResolution) {
        onWindowResize();
    }

    if (sceneSettings.windowIsBeingResized) {
        sceneSettings.cameraIsMoving = true;
        sceneSettings.windowIsBeingResized = false;
    }

    // this gives us a vector in the direction that the camera is pointing,
    // which will be useful for moving the camera 'forward' and shooting projectiles in that direction
    sceneSettings.controls.getDirection(sceneSettings.cameraDirectionVector);
    sceneSettings.cameraDirectionVector.normalize();
    sceneSettings.controls.getUpVector(sceneSettings.cameraUpVector);
    sceneSettings.cameraUpVector.normalize();
    sceneSettings.controls.getRightVector(sceneSettings.cameraRightVector);
    sceneSettings.cameraRightVector.normalize();

    // the following gives us a rotation quaternion (4D vector), which will be useful for 
    // rotating scene objects to match the camera's rotation
    sceneSettings.worldCamera.getWorldQuaternion(sceneSettings.cameraWorldQuaternion);

    sceneSettings.pathTracing.uniforms.uTime.value = sceneSettings.elapsedTime;
    sceneSettings.pathTracing.uniforms.uCameraIsMoving.value = sceneSettings.cameraIsMoving;
    sceneSettings.pathTracing.uniforms.uSampleCounter.value = sceneSettings.sampleCounter;
    sceneSettings.pathTracing.uniforms.uFrameCounter.value = sceneSettings.frameCounter;
    sceneSettings.pathTracing.uniforms.uRandomVec2.value.set(Math.random(), Math.random());

    // CAMERA
    sceneSettings.cameraControls.object.updateMatrixWorld(true);
    sceneSettings.cameraControls.yawObject.updateMatrixWorld(true);
    sceneSettings.pathTracing.uniforms.uCameraMatrix.value.copy(sceneSettings.worldCamera.matrixWorld);

    sceneSettings.screenOutput.uniforms.uSampleCounter.value = sceneSettings.sampleCounter;
    // PROGRESSIVE SAMPLE WEIGHT (reduces intensity of each successive animation frame's image)
    sceneSettings.screenOutput.uniforms.uOneOverSampleCounter.value = 1.0 / sceneSettings.sampleCounter;

    // Debugging: Render the simple debug scene instead of the actual scene
    // Position the camera so that it's looking at the debug mesh
    // sceneSettings.worldCamera.position.set(0, 10, 15);
    // sceneSettings.worldCamera.lookAt(sceneSettings.debug.mesh.position);
    // sceneSettings.renderer.clear()
    // sceneSettings.renderer.render(sceneSettings.debug.scene, sceneSettings.worldCamera)

    sceneSettings.renderer.setRenderTarget(null); // Render to the screen
    sceneSettings.renderer.clear(); // Clear previous frame
    sceneSettings.renderer.render(sceneSettings.screenOutput.scene, sceneSettings.quadCamera);

    // // RENDERING in 3 steps

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
            setupPathTracing(sceneSettings); // boilerplate: init necessary three.js items and scene/demo-specific objects
        }
    );
}

startApp()
