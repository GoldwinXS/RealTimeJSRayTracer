# Real-Time JavaScript Ray Tracer

A real-time path tracing engine built in JavaScript using WebGL2 and THREE.js, themed around a Star Wars space scene. Voxel models (.vox format from MagicaVoxel) are rendered with physically-based lighting including reflections, refractions, and global illumination.

## Live Demo

Deployed to GitHub Pages at: `https://<username>.github.io/RealTimeJSRayTracer/`

## Features

- **Real-time path tracing** via WebGL2 fragment shader
- **Voxel rendering** using a DDA (Digital Differential Analyzer) grid traversal algorithm
- **Progressive refinement** — image quality improves the longer the camera is still
- **Physical materials** — diffuse, specular (metal), refractive (glass), emissive (lights)
- **Multiple voxel geometries** packed into a single 3D texture atlas for efficient GPU access
- **Dynamic scene** — spawn TIE fighters, fire blaster bolts
- **FPS camera controls** — WASD + mouse look
- **Web Worker** for off-main-thread texture atlas compilation
- **Depth of field** and motion blur accumulation

## Controls

| Input | Action |
|-------|--------|
| `W A S D` | Move camera |
| Mouse drag | Look around |
| Click canvas | Lock pointer (enables mouse look) |
| `Escape` | Release pointer lock |
| `T` | Spawn a TIE fighter |
| `Space` | Fire blaster bolt |

## Architecture

### Rendering Pipeline

Each animation frame runs three render passes:

1. **Path Tracing pass** (`Voxel_Rendering_Fragment.glsl`) — traces rays through the scene, blends with the previous frame for progressive refinement
2. **Screen Copy pass** (`ScreenCopy_Fragment.glsl`) — ping-pong buffer copy for temporal accumulation
3. **Screen Output pass** (`ScreenOutput_Fragment.glsl`) — post-processing: blur, edge sharpening, tone mapping, gamma correction

### Ray-Scene Intersection

Rays are transformed into each voxel geometry's local coordinate space. The DDA algorithm then traverses the 3D voxel grid cell-by-cell to find the first solid voxel hit. Voxel color and material type are stored in a packed 3D texture atlas (RGBA, where alpha encodes the material ID).

### Material System

Material types are encoded in the alpha channel of the voxel texture. Special colors defined in `main.js` map specific RGB values to material overrides:

| Type ID | Material |
|---------|----------|
| 1 | Diffuse |
| 2 | Refractive (glass) |
| 3 | Specular (metal) |
| 19 | Emissive light (untracked) |
| 20 | Emissive light (tracked for sampling) |

### Key Files

```
main.js                          — App entry point, render loop, scene setup
settings.js                      — Global scene state and THREE.js objects
shaders/
  Voxel_Rendering_Fragment.glsl  — Main path tracing shader (DDA traversal, materials, lighting)
  ScreenOutput_Fragment.glsl     — Post-processing (blur, tone mapping)
  ScreenCopy_Fragment.glsl       — Ping-pong buffer copy
  common_PathTracing_Vertex.glsl — Passthrough vertex shader
js/
  pathtracing/
    PathTracingCommon.js         — GLSL shader chunks registered into THREE.ShaderChunk
    PathTracingUtils.js          — Render target setup, uniform helpers, shader loader
  data/
    VoxelGeometry.js             — Loads .vox files, manages mesh/texture per geometry
    MultiVoxelLoader.js          — Manages multiple geometries, packs texture atlas
    VoxelGeometryWorker.js       — Web Worker: compiles atlas and identifies light voxels
  camera/
    FirstPersonCameraControls.js — FPS-style yaw/pitch camera
    PlayerControls.js            — Ship control integration
  game/
    GameManager.js               — Scene setup, TIE fighters, bullets, player ship
public/
  models/                        — MagicaVoxel .vox model files
  textures/                      — Blue noise and other textures used by shaders
```

## Development

```bash
npm install
npm run dev      # Start local dev server at http://localhost:5173
```

## Building & Deployment

```bash
npm run build    # Build to dist/
npm run preview  # Preview the production build locally
npm run deploy   # Build and push to gh-pages branch (requires gh-pages package)
```

The `base` in `vite.config.js` is set to `/RealTimeJSRayTracer/` to match the GitHub Pages repository path. Change this if your repo has a different name.

### GitHub Pages Setup

1. In your GitHub repo, go to **Settings → Pages**
2. Set source to the `gh-pages` branch
3. Run `npm run deploy` to publish

## Performance Notes

- The path tracer accumulates samples over time — stay still for a cleaner image
- `pixelRatio` in settings controls render resolution (default 2 = half resolution)
- Large voxel models (e.g. `falcon.vox`) increase DDA traversal time per ray
- The 3D texture atlas is capped at 258×258×258 — adding many large models may overflow it

## Origin

Started from [erichlof/THREE.js-PathTracing-Renderer](https://github.com/erichlof/THREE.js-PathTracing-Renderer) as a base, then extended with:
- Custom voxel geometry system with .vox file loading
- Multi-geometry texture atlas packing
- Web Worker atlas compilation
- FPS camera and basic game mechanics
