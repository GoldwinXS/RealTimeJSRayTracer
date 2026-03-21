import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [glsl()],
  base: "/RealTimeJSRayTracer/",
});
