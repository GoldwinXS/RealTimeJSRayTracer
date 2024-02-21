import { defineConfig } from "vite";
import path from "path";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [glsl({})],
  resolve: {
    alias: {
      "THREE.js-PathTracing-Renderer": path.resolve(
        __dirname,
        "node_modules/THREE.js-PathTracing-Renderer"
      ),
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  server: {
    host: true, // Listen on all local IPs
  },
});
