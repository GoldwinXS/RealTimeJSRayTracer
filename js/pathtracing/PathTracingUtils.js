import * as THREE from "three";

export function setupUniforms({
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
  useToneMapping,
  blueNoiseTexture,
}) {
  // setup screen-size quad geometry and shaders....
  // this full-screen quad mesh performs the path tracing operations and produces a screen-sized image
  pathTracing.uniforms.tPreviousTexture = {
    type: "t",
    value: screenCopy.renderTarget.texture,
  };
  pathTracing.uniforms.tBlueNoiseTexture = {
    type: "t",
    value: blueNoiseTexture,
  };
  pathTracing.uniforms.uCameraMatrix = {
    type: "m4",
    value: new THREE.Matrix4(),
  };
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
  pathTracing.uniforms.uBlurRatio = { type: "f", value: false };

  screenOutput.uniforms = {
    tPathTracedImageTexture: {
      type: "t",
      value: pathTracing.renderTarget.texture,
    },
    uSampleCounter: { type: "f", value: 0.0 },
    uOneOverSampleCounter: { type: "f", value: 0.0 },
    uPixelEdgeSharpness: { type: "f", value: pixelEdgeSharpness },
    uEdgeSharpenSpeed: { type: "f", value: edgeSharpenSpeed },
    uFilterDecaySpeed: { type: "f", value: filterDecaySpeed },
    uSceneIsDynamic: { type: "b1", value: sceneIsDynamic },
    uUseToneMapping: { type: "b1", value: useToneMapping },
  };

  screenCopy.uniforms = {
    tPathTracedImageTexture: {
      type: "t",
      value: pathTracing.renderTarget.texture,
    },
  };
}

export function setupRenderTargets(context) {
  // setup render targets...
  let renderTarget = new THREE.WebGLRenderTarget(
    context.drawingBufferWidth,
    context.drawingBufferHeight,
    {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: false,
      stencilBuffer: false,
    }
  );
  renderTarget.texture.generateMipmaps = false;
  return renderTarget;
}

export function handleSceneDynamism({
  cameraIsMoving,
  sceneIsDynamic,
  sampleCounter,
  frameCounter,
  cameraRecentlyMoving,
  pathTracingUniforms,
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

  return { sampleCounter, frameCounter };
}

export function updateAnimatedPathtracingUniforms({
  pathTracing,
  elapsedTime,
  cameraIsMoving,
  sampleCounter,
  frameCounter,
  blurRatio,
}) {
  pathTracing.uniforms.uTime.value = elapsedTime;
  pathTracing.uniforms.uCameraIsMoving.value = cameraIsMoving;
  pathTracing.uniforms.uSampleCounter.value = sampleCounter;
  pathTracing.uniforms.uFrameCounter.value = frameCounter;
  pathTracing.uniforms.uRandomVec2.value.set(Math.random(), Math.random());
  pathTracing.uniforms.uBlurRatio.value = blurRatio;
}

export function loadShaderAndCreateMesh(sceneSettings, shaderConfig) {
  sceneSettings.fileLoader.load(
    shaderConfig.vertexShaderPath,
    function (vertexShaderText) {
      sceneSettings.fileLoader.load(
        shaderConfig.fragmentShaderPath,
        function (fragmentShaderText) {
          const material = new THREE.ShaderMaterial({
            uniforms: shaderConfig.uniforms,
            uniformsGroups: shaderConfig.uniformsGroups || [],
            defines: shaderConfig.defines || {},
            vertexShader: vertexShaderText,
            fragmentShader: fragmentShaderText,
            depthTest: false,
            depthWrite: false,
          });

          const mesh = new THREE.Mesh(shaderConfig.geometry, material);
          shaderConfig.scene.add(mesh);

          // Special handling if needed (e.g., adding to camera)
          if (shaderConfig.specialHandling) {
            shaderConfig.specialHandling(mesh);
          }
        }
      );
    }
  );
}

export default {
  setupUniforms,
  setupRenderTargets,
  handleSceneDynamism,
  updateAnimatedPathtracingUniforms,
  loadShaderAndCreateMesh,
};
