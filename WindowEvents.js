import sceneSettings from "./settings";

// The following list of keys is not exhaustive, but it should be more than enough to build interactive demos and games
let KeyboardState = {
    KeyA: false, KeyB: false, KeyC: false, KeyD: false, KeyE: false, KeyF: false, KeyG: false, KeyH: false, KeyI: false, KeyJ: false, KeyK: false, KeyL: false, KeyM: false,
    KeyN: false, KeyO: false, KeyP: false, KeyQ: false, KeyR: false, KeyS: false, KeyT: false, KeyU: false, KeyV: false, KeyW: false, KeyX: false, KeyY: false, KeyZ: false,
    ArrowLeft: false, ArrowUp: false, ArrowRight: false, ArrowDown: false, Space: false, Enter: false, PageUp: false, PageDown: false, Tab: false,
    Minus: false, Equal: false, BracketLeft: false, BracketRight: false, Semicolon: false, Quote: false, Backquote: false,
    Comma: false, Period: false, ShiftLeft: false, ShiftRight: false, Slash: false, Backslash: false, Backspace: false,
    Digit1: false, Digit2: false, Digit3: false, Digit4: false, Digit5: false, Digit6: false, Digit7: false, Digit8: false, Digit9: false, Digit0: false
}


export function onKeyDown(event) {
    event.preventDefault();
    KeyboardState[event.code] = true;
}

export function onKeyUp(event) {
    event.preventDefault();
    KeyboardState[event.code] = false;
}

// eslint-disable-next-line no-unused-vars
export function onWindowResize(event) {

    sceneSettings.windowIsBeingResized = true;

    // the following change to document.body.clientWidth and Height works better for mobile, especially iOS
    // suggestion from Github user q750831855  - Thank you!
    const SCREEN_WIDTH = document.body.clientWidth; //sceneSettings.innerWidth; 
    const SCREEN_HEIGHT = document.body.clientHeight; //sceneSettings.innerHeight;

    sceneSettings.renderer.setPixelRatio(sceneSettings.pixelRatio);
    sceneSettings.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    sceneSettings.fontAspect = (SCREEN_WIDTH / 175) * (SCREEN_HEIGHT / 200);
    if (sceneSettings.fontAspect > 25) sceneSettings.fontAspect = 25;
    if (sceneSettings.fontAspect < 4) sceneSettings.fontAspect = 4;
    sceneSettings.fontAspect *= 2;

    sceneSettings.pathTracing.uniforms.uResolution.value.x = sceneSettings.context.drawingBufferWidth;
    sceneSettings.pathTracing.uniforms.uResolution.value.y = sceneSettings.context.drawingBufferHeight;

    sceneSettings.pathTracing.renderTarget.setSize(sceneSettings.context.drawingBufferWidth, sceneSettings.context.drawingBufferHeight);
    sceneSettings.screenCopy.renderTarget.setSize(sceneSettings.context.drawingBufferWidth, sceneSettings.context.drawingBufferHeight);

    sceneSettings.worldCamera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    // the following is normally used with traditional rasterized rendering, but it is not needed for our fragment shader raytraced rendering 
    ///worldCamera.updateProjectionMatrix();

    // the following scales all scene objects by the worldCamera's field of view,
    // taking into account the screen aspect ratio and multiplying the uniform uULen,
    // the x-coordinate, by this ratio
    sceneSettings.fovScale = sceneSettings.worldCamera.fov * 0.5 * (Math.PI / 180.0);
    sceneSettings.pathTracing.uniforms.uVLen.value = Math.tan(sceneSettings.fovScale);
    sceneSettings.pathTracing.uniforms.uULen.value = sceneSettings.pathTracing.uniforms.uVLen.value * sceneSettings.worldCamera.aspect;

    if (!sceneSettings.mouseControl && sceneSettings.mobileShowButtons) {
        sceneSettings.button1Element.style.display = "";
        sceneSettings.button2Element.style.display = "";
        sceneSettings.button3Element.style.display = "";
        sceneSettings.button4Element.style.display = "";
        sceneSettings.button5Element.style.display = "";
        sceneSettings.button6Element.style.display = "";
        // check if mobile device is in portrait or landscape mode and position buttons accordingly
        if (SCREEN_WIDTH < SCREEN_HEIGHT) {
            sceneSettings.button1Element.style.right = 36 + "%";
            sceneSettings.button2Element.style.right = 2 + "%";
            sceneSettings.button3Element.style.right = 16 + "%";
            sceneSettings.button4Element.style.right = 16 + "%";
            sceneSettings.button5Element.style.right = 3 + "%";
            sceneSettings.button6Element.style.right = 3 + "%";

            sceneSettings.button1Element.style.bottom = 5 + "%";
            sceneSettings.button2Element.style.bottom = 5 + "%";
            sceneSettings.button3Element.style.bottom = 13 + "%";
            sceneSettings.button4Element.style.bottom = 2 + "%";
            sceneSettings.button5Element.style.bottom = 25 + "%";
            sceneSettings.button6Element.style.bottom = 18 + "%";
        }
        else {
            sceneSettings.button1Element.style.right = 22 + "%";
            sceneSettings.button2Element.style.right = 3 + "%";
            sceneSettings.button3Element.style.right = 11 + "%";
            sceneSettings.button4Element.style.right = 11 + "%";
            sceneSettings.button5Element.style.right = 3 + "%";
            sceneSettings.button6Element.style.right = 3 + "%";

            sceneSettings.button1Element.style.bottom = 10 + "%";
            sceneSettings.button2Element.style.bottom = 10 + "%";
            sceneSettings.button3Element.style.bottom = 26 + "%";
            sceneSettings.button4Element.style.bottom = 4 + "%";
            sceneSettings.button5Element.style.bottom = 48 + "%";
            sceneSettings.button6Element.style.bottom = 34 + "%";
        }
    }
}

