// Used to gradually refactor from sctip based to module based code

// import { someFunction } from './newModule.js';



let globalBridge = {
    initSceneData: null,  // Placeholder for the function
    updateVariablesAndUniforms: null,  // Placeholder for the function
    // Add other variables or functions that need to be globally accessible
};
window.globalBridge = globalBridge

export default globalBridge;
