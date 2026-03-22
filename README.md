# RealTimeJSRayTracer

A real-time voxel path tracer running in the browser via WebGL2, presented as a three-room interactive art gallery.

**[Play it here](https://goldwinxs.github.io/RealTimeJSRayTracer/)**

## What makes this different

Traditional game engines (Unity, Unreal, WebGL rasterisers) fake lighting with tricks — shadow maps, ambient occlusion, screen-space reflections. This renderer simulates actual light physics:

- **Global illumination** — light bounces between surfaces; an orange wall bleeds orange onto the floor and ceiling
- **Specular reflections** — chrome surfaces reflect the full environment, including other reflections
- **Refraction** — glass bends light correctly based on its index of refraction
- **Colour bleeding** — coloured emitters and coloured diffuse panels tint nearby surfaces through indirect illumination

The trade-off is noise. Each frame adds one more sample. Standing still lets the image converge; moving resets accumulation. This is the nature of Monte Carlo path tracing.

## Controls

| Key / Input | Action |
|-------------|--------|
| **Click**   | Lock mouse to start |
| **W A S D** | Move |
| **Q**       | Move up |
| **Z**       | Move down |
| **Mouse**   | Look around |
| **Esc**     | Release mouse |

## The galleries

Each room is an isolated loading zone. Walk through the chrome archway at the back wall to advance.

**Gallery I — Indirect Illumination**
An orange diffuse panel on the left wall and a purple panel on the right illuminate the room through bounced light. Watch the floor pick up orange near the left and purple near the right — with a gradient in the centre. Three grey cubes show this most clearly: the same grey material looks different depending on which wall is nearby.

**Gallery II — Specular Reflections & Refraction**
Chrome wall panels on both sides create infinite mirror depth — each panel reflects the other reflecting the other. Three tall chrome pillars add more layers. A glass column refracts the scene behind it. Standing still reveals an extraordinary level of recursive detail.

**Gallery III — The Grand Hall**
Two ceiling lights (warm white, teal) split the room into two colour zones. Orange and purple diffuse panels add further GI colour. The teapot on its chrome pedestal shows warm light on its left face and teal on its right — from a single unlit material, lit entirely by indirect illumination. The X-Wing floating overhead picks up both colours simultaneously.

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
| 1  | Diffuse |
| 2  | Refractive (glass) |
| 3  | Specular (metal / mirror) |
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
