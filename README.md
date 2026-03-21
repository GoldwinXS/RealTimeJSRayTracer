# RealTimeJSRayTracer

A real-time voxel path tracer running in the browser via WebGL2, built as a light-puzzle game to demonstrate rendering effects that rasterizers cannot reproduce.

**[Play it here](https://goldwinxs.github.io/RealTimeJSRayTracer/)**

## What makes this different

Traditional game engines (Unity, Unreal, WebGL rasterizers) fake lighting with tricks — shadow maps, ambient occlusion, screen-space reflections. This renderer simulates actual light physics:

- **Global illumination** — light bounces between surfaces; a red wall bleeds red onto the floor and ceiling
- **Specular reflections** — chrome surfaces reflect the full environment, including other reflections
- **Refraction** — glass bends light correctly based on its index of refraction
- **Color bleeding** — colored emitters tint nearby diffuse surfaces through indirect illumination

The tradeoff is noise. Each frame adds one more sample. Standing still lets the image converge; moving resets accumulation. This is the nature of Monte Carlo path tracing.

## Controls

| Key / Input | Action |
|-------------|--------|
| **Click** | Lock mouse to start |
| **W A S D** | Move |
| **Q** | Move up |
| **Z** | Move down |
| **Mouse** | Look around |
| **E** | Pick up / drop nearest mirror |
| **Esc** | Release mouse |

## The puzzle

Each level contains:
- A **white ceiling light** — ambient fill so you can navigate
- A **fixed colored light source** — the puzzle element, permanently placed in the scene
- One or more **chrome mirror cubes** — pick these up with **E** and carry them to the glowing markers

Placing a mirror on a marker redirects the colored light and reveals the path tracer's reflection and GI capabilities. Stand still after placing to let the image converge and appreciate the effect.

## Tech

- **Renderer**: Custom voxel path tracer in GLSL (WebGL2), 6-bounce radiance sampling
- **Ray traversal**: DDA (Digital Differential Analyzer) through a packed 3D texture atlas
- **Voxel format**: MagicaVoxel `.vox` via vox-reader
- **Atlas compilation**: Web Worker (off main thread)
- **Build**: Vite + vite-plugin-glsl
- **Deploy**: GitHub Actions → GitHub Pages

### Rendering pipeline (3 passes per frame)

1. **Path tracing** (`Voxel_Rendering_Fragment.glsl`) — traces rays, blends with previous frame
2. **Screen copy** — ping-pong buffer for temporal accumulation
3. **Screen output** — tone mapping and gamma correction

### Material types (encoded in voxel alpha channel)

| ID | Material |
|----|----------|
| 1 | Diffuse |
| 2 | Refractive (glass) |
| 3 | Specular (metal / mirror) |
| 19 | Emissive, untracked |
| 20 | Emissive, tracked for direct sampling |

## Running locally

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm test          # unit tests (Vitest)
npm run build     # production build → dist/
```

Click the canvas to lock the mouse, then use WASD + mouse to move.
