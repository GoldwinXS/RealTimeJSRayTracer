import { Vector3 } from "three";

/**
 * GalleryShowcase — a 3-room path-tracing museum.
 *
 * Each gallery is a self-contained loading zone. The player walks through a
 * chrome-framed archway at the back to advance to the next room. Performance
 * is managed by keeping each gallery small and using walls to prevent the
 * renderer from tracing complex geometry in adjacent rooms.
 *
 * Gallery 1 — Indirect Illumination
 *   Demonstrates GI colour bleeding: coloured diffuse panels tint adjacent
 *   grey surfaces through bounced light — a rasterizer cannot do this.
 *
 * Gallery 2 — Specular Reflections & Refraction
 *   Chrome wall panels create infinite mirror depth. Glass columns bend
 *   light via refraction. Chrome pillars reflect the full environment.
 *
 * Gallery 3 — The Grand Hall
 *   All effects combined: warm + teal GI, specular chrome, refractive glass,
 *   and two centrepiece models (teapot and X-Wing) lit by realistic GI.
 *
 * Room interior (all galleries): x:[-400,400]  y:[0,400]  z:[-600,0]
 * Camera starts at (0, 80, -50) facing -z.
 */
export class LightPuzzle {
  // ── Model paths ────────────────────────────────────────────────────────────
  sunFile          = "models/singleVoxelLight.vox"; // 1×1×1, warm-white LIGHT
  tealLightFile    = "models/tealLight.vox";         // 1×1×1, teal LIGHT
  metalCubeFile    = "models/metalCube.vox";         // 1×1×1, SPEC (mirror)
  transparentCubeFile = "models/transparentCube.vox"; // 1×1×1, REFR (glass)
  deathStarChunkFile  = "models/deathStarChunk.vox";  // 40×40×40, DIFF (grey)
  orangeBlockFile  = "models/orangeBlock.vox";       // 1×1×1, DIFF orange
  purpleBlockFile  = "models/purpleBlock.vox";       // 1×1×1, DIFF purple
  teapotFile       = "models/teapot.vox";            // 126×80×61, DIFF white
  xwingFile        = "models/xwing.vox";             // 128×115×42, DIFF white

  // ── State ──────────────────────────────────────────────────────────────────
  currentLevel = 0;
  currentLevelGeomIds = [];
  controls = null;
  transitioning = false;

  galleryDefs = [
    {
      name: "Gallery I — Colour Bleeding",
      description:
        "Two lights wash the coloured walls with white light. The walls " +
        "absorb most wavelengths and bounce the rest as colour — orange left, " +
        "purple right. The grey cubes pick up that colour just by being nearby. " +
        "Stand still to let the image converge.",
      forwardTriggerZ: -560,
      forwardPromptZ:  -430,
      backCameraZ:     -550, // unused (first gallery)
    },
    {
      name: "Gallery II — Specular Reflections",
      description:
        "Chrome pillars reflect the full environment — each pillar shows " +
        "the other pillars in its surface, and those reflections contain " +
        "further reflections. The teapot shows curved specular highlights " +
        "across its surface. Stand still and let the image converge.",
      forwardTriggerZ: -560,
      forwardPromptZ:  -430,
      backCameraZ:     -550,
    },
    {
      name: "Gallery III — The Grand Hall",
      description:
        "All effects combined: GI colour bleeding, specular chrome, refractive " +
        "glass, and two coloured light sources painting every surface a " +
        "different hue depending on which light reaches it first.",
      forwardTriggerZ: -560, // unused (last gallery)
      forwardPromptZ:  -430,
      backCameraZ:     -550,
    },
  ];

  constructor(voxelManager) {
    this.voxelManager = voxelManager;
  }

  async startGame(camera) {
    this.camera = camera;
    await this.loadLevel(0);
  }

  setupControls(controls) {
    this.controls = controls;
    controls.yawObject.position.set(0, 80, -50);
  }

  setupPlayerControls() {}
  rotatePlayerModel() {}

  // ─── Geometry helpers ──────────────────────────────────────────────────────

  async addGeom(file, pos, voxelSize) {
    const id = await this.voxelManager.addGeometry(file, pos, voxelSize);
    this.currentLevelGeomIds.push(id);
    return id;
  }

  async addGeomScaled(file, pos, voxelSize, sx, sy, sz) {
    const id = await this.addGeom(file, pos, voxelSize);
    this.voxelManager.setGeomScale(id, sx, sy, sz);
    return id;
  }

  async addGeomScaledRotated(file, pos, voxelSize, sx, sy, sz, rotAxis, rotDeg) {
    const id = await this.addGeomScaled(file, pos, voxelSize, sx, sy, sz);
    this.voxelManager.setGeomRotation(id, rotAxis, rotDeg);
    return id;
  }

  async clearLevel() {
    for (const id of this.currentLevelGeomIds) {
      this.voxelManager.removeGeometry(id);
    }
    this.currentLevelGeomIds = [];
  }

  // ─── Room builders ─────────────────────────────────────────────────────────
  //
  // All wall panels use deathStarChunk (40×40×40) at voxelSize=10.
  // World size formula: gridDim × voxelSize × scale.
  //
  // Interior: x:[-400,400]  y:[0,400]  z:[-600,0]
  //
  // #buildRoom(withBackArchway, frontWall):
  //   withBackArchway=true  — back wall has a 200×280 chrome archway.
  //   withBackArchway=false — solid back wall (final gallery).
  //   frontWall='solid'     — closes the entrance (first gallery).
  //   frontWall='archway'   — entrance archway so player can walk back out.
  //   frontWall='none'      — open (original behaviour, leaves a void).

  async #buildRoom(withBackArchway = true, frontWall = 'solid') {
    const v = 10; // base voxelSize for wall panels
    // Floor  — 800×20×600,  top at y=0
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, -10, -300),  v, 2, 0.05, 1.5);
    // Ceiling — 800×20×600,  bottom at y=400
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 410, -300),  v, 2, 0.05, 1.5);
    // Left wall  — 20×400×600
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(-410, 200, -300), v, 0.05, 1, 1.5);
    // Right wall — 20×400×600
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(410, 200, -300),  v, 0.05, 1, 1.5);

    // ── Back wall ──────────────────────────────────────────────────────────
    if (!withBackArchway) {
      // Solid back wall — 800×400×20
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 200, -610), v, 2, 1, 0.05);
    } else {
      // Back wall with archway gap (x:[-100,100], y:[0,280])
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3(-250, 200, -610), v, 0.75, 1, 0.05);
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3( 250, 200, -610), v, 0.75, 1, 0.05);
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 340, -610), v, 0.5, 0.3, 0.05);
      // Chrome door frame
      await this.addGeomScaled(this.metalCubeFile, new Vector3(-100, 140, -608), 100, 0.1, 2.8, 0.1);
      await this.addGeomScaled(this.metalCubeFile, new Vector3( 100, 140, -608), 100, 0.1, 2.8, 0.1);
      await this.addGeomScaled(this.metalCubeFile, new Vector3(0, 280, -608), 100, 2.2, 0.1, 0.1);
      await this.addGeomScaled(this.metalCubeFile, new Vector3(0, 2, -585), 100, 2, 0.02, 0.4);
    }

    // ── Front wall ─────────────────────────────────────────────────────────
    // Centred at z=30 (spanning z=20–40) so the camera's default origin
    // at (0,0,0) is never inside the wall geometry on the first frame.
    if (frontWall === 'solid') {
      // Full front wall — 800×400×20. Blocks the void for the first gallery.
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 200, 30), v, 2, 1, 0.05);
    } else if (frontWall === 'archway') {
      // Front wall with archway gap so the player can walk back out.
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3(-250, 200, 30), v, 0.75, 1, 0.05);
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3( 250, 200, 30), v, 0.75, 1, 0.05);
      await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 340, 30), v, 0.5, 0.3, 0.05);
      // Chrome door frame (mirrored, faces inside the room)
      await this.addGeomScaled(this.metalCubeFile, new Vector3(-100, 140,  28), 100, 0.1, 2.8, 0.1);
      await this.addGeomScaled(this.metalCubeFile, new Vector3( 100, 140,  28), 100, 0.1, 2.8, 0.1);
      await this.addGeomScaled(this.metalCubeFile, new Vector3(0,   280,   28), 100, 2.2, 0.1, 0.1);
      // Chrome threshold strip 25 units inside the room from the wall face (z=20)
      await this.addGeomScaled(this.metalCubeFile, new Vector3(0,     2,  -5), 100, 2, 0.02, 0.4);
    }
  }

  // ─── Level loading ─────────────────────────────────────────────────────────

  async loadLevel(index) {
    await this.clearLevel();
    this.currentLevel = index;
    if (this.controls) {
      this.controls.yawObject.position.set(0, 80, -50);
    }
    document.getElementById("hud-complete").style.display = "none";
    this.setPrompt("");
    this.updateHUD();

    if (index === 0) await this.#setupGallery1();
    else if (index === 1) await this.#setupGallery2();
    else if (index === 2) await this.#setupGallery3();
  }

  // ── Gallery 1: Indirect Illumination ────────────────────────────────────────
  //
  // The ceiling light only reaches x:±200 — the coloured wall panels at x:±390
  // barely receive any direct light and therefore bounce almost nothing. To make
  // GI bleeding obvious, two "wall-wash" lights are mounted near the ceiling
  // above each coloured wall. Each wash light floods its wall with direct white
  // light; the wall absorbs most wavelengths and reflects the rest (orange or
  // purple), casting a strong coloured glow across the floor and the nearby grey
  // cube. The centre cube receives a blend of both colours. This is the same
  // role a photographer's coloured gel spotlight plays when pointed at a backdrop.
  async #setupGallery1() {
    await this.#buildRoom(true, 'solid');

    // ── Wall-wash lights ──────────────────────────────────────────────────
    // Warm-white emitters positioned above each coloured wall. They flood the
    // panel with direct white light so the panel has enough incoming energy to
    // bounce strong coloured GI into the room. No centre fill — the room stays
    // dark so shadows and colour gradients are clearly visible.
    await this.addGeomScaled(this.sunFile, new Vector3(-350, 368, -300), 100, 0.3, 1.0, 1);
    await this.addGeomScaled(this.sunFile, new Vector3( 350, 368, -300), 100, 0.3, 1.0, 1);

    // ── Coloured diffuse panels ───────────────────────────────────────────
    // DIFF material — they reflect white light as coloured GI, not emit it.
    // Orange panel on left wall: 10×300×500
    await this.addGeomScaled(this.orangeBlockFile, new Vector3(-390, 200, -300), 100, 0.1, 3, 5);
    // Purple panel on right wall: 10×300×500
    await this.addGeomScaled(this.purpleBlockFile, new Vector3( 390, 200, -300), 100, 0.1, 3, 5);

    // ── Diffuse sculpture cubes ───────────────────────────────────────────
    // Moved close to the coloured walls (only ~15 units gap) so inverse-
    // square law gives them a very strong GI dose. The left cube face
    // nearest the orange wall will visibly pick up the orange tint; the right
    // cube picks up purple. The centre cube shows both weakly, for comparison.
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(-310, 40, -380), 2, 1, 1, 1);
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(   0, 40, -380), 2, 1, 1, 1);
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3( 310, 40, -380), 2, 1, 1, 1);

  }

  // ── Gallery 2: Specular Reflections ──────────────────────────────────────
  //
  // Standard room with chrome pillars that reflect each other and the teapot.
  // Each pillar surface contains a reflection of the other pillars, which
  // contain reflections of the first — recursive specular depth with 6 bounces.
  async #setupGallery2() {
    await this.#buildRoom(true, 'archway');

    // Ceiling light strip — runs the length of the room
    await this.addGeomScaled(this.sunFile, new Vector3(0, 368, -300), 100, 1.0, 1.0, 5);

    // Chrome floor inlay — narrow central path
    await this.addGeomScaled(this.metalCubeFile, new Vector3(0, 1, -300), 100, 0.6, 0.01, 6);

    // Two pairs of chrome pillars (40×400×40)
    await this.addGeomScaled(this.metalCubeFile, new Vector3(-200, 200, -200), 10, 4, 40, 4);
    await this.addGeomScaled(this.metalCubeFile, new Vector3( 200, 200, -200), 10, 4, 40, 4);
    await this.addGeomScaled(this.metalCubeFile, new Vector3(-200, 200, -520), 10, 4, 40, 4);
    await this.addGeomScaled(this.metalCubeFile, new Vector3( 200, 200, -520), 10, 4, 40, 4);

    // Teapot on chrome pedestal, centred between the pillar pairs
    await this.addGeomScaled(this.metalCubeFile, new Vector3(0, 15, -360), 10, 12, 3, 12);
    await this.addGeomScaledRotated(this.teapotFile, new Vector3(0, 75, -360), 1.5, 1, 1, 1, 'x', -90);
  }

  // ── Gallery 3: The Grand Hall ─────────────────────────────────────────────
  //
  // Two ceiling lights — warm white on the left, teal on the right — split the
  // room into two colour zones. The orange left panel and purple right panel
  // add further GI colour via diffuse bouncing. The teapot on its chrome
  // pedestal sits in the centre, showing GI from all four colour sources
  // simultaneously on different faces. The X-Wing floats above. Chrome pillars
  // reflect the multi-coloured environment; glass columns refract it.
  // This is the final room — no archway, a solid back wall.
  async #setupGallery3() {
    await this.#buildRoom(false, 'archway');

    // ── Two ceiling lights ────────────────────────────────────────────────
    // scale_y=1.0 hides sampling cube on both lights.
    // Warm-white, left side: 300×100×300
    await this.addGeomScaled(this.sunFile,       new Vector3(-150, 368, -300), 100, 3, 1.0, 3);
    // Teal, right side: 300×100×300
    await this.addGeomScaled(this.tealLightFile, new Vector3( 150, 368, -300), 100, 3, 1.0, 3);

    // ── Coloured diffuse wall panels ──────────────────────────────────────
    // Orange left: 10×300×500
    await this.addGeomScaled(this.orangeBlockFile, new Vector3(-390, 200, -300), 100, 0.1, 3, 5);
    // Purple right: 10×300×500
    await this.addGeomScaled(this.purpleBlockFile, new Vector3( 390, 200, -300), 100, 0.1, 3, 5);

    // ── X-Wing floating overhead ──────────────────────────────────────────
    // 128×115×42 at voxelSize=2. White voxels show teal on the right side,
    // warm-white on the left — GI from two sources on a single object.
    // MagicaVoxel Z-up → rotate -90° around X to stand upright.
    await this.addGeomScaledRotated(this.xwingFile, new Vector3(0, 240, -300), 2, 1, 1, 1, 'x', -90);

    // ── Chrome pillars (40×280×40) ────────────────────────────────────────
    await this.addGeomScaled(this.metalCubeFile, new Vector3(-280, 140, -480), 10, 4, 28, 4);
    await this.addGeomScaled(this.metalCubeFile, new Vector3( 280, 140, -480), 10, 4, 28, 4);
  }

  // ─── Per-frame update ──────────────────────────────────────────────────────

  handleAnimationFrame(controls) {
    if (controls) this.controls = controls;
    this.#checkZoneTrigger();
    this.voxelManager.updateVoxelShaderData();
  }

  // Show a prompt when the player is near the archway; transition when close.
  #checkZoneTrigger() {
    if (this.transitioning) return;
    const isLast = this.currentLevel >= this.galleryDefs.length - 1;
    const isFirst = this.currentLevel === 0;
    const z = this.getCamPos().z;
    const def = this.galleryDefs[this.currentLevel];

    // ── Forward trigger (walk through back archway) ──────────────────────
    if (!isLast) {
      if (z < def.forwardPromptZ) {
        this.setPrompt("→  Walk through the archway to continue");
      } else if (z > -150 && !isFirst) {
        this.setPrompt("←  Walk back through the entrance to return");
      } else {
        this.setPrompt("");
      }

      if (z < def.forwardTriggerZ) {
        this.#transition("Loading next gallery…", this.currentLevel + 1, false);
        return;
      }
    } else {
      // Final gallery — only show back prompt
      if (z > -150) {
        this.setPrompt("←  Walk back through the entrance to return");
      } else {
        this.setPrompt("");
      }
    }

    // ── Backward trigger (walk out through front entrance) ───────────────
    if (!isFirst && z > 50) {
      this.#transition("Loading previous gallery…", this.currentLevel - 1, true);
    }
  }

  #transition(message, targetLevel, goingBack) {
    this.transitioning = true;
    this.setPrompt("");
    const el = document.getElementById("hud-complete");
    el.textContent = message;
    el.style.display = "block";
    setTimeout(() => {
      el.style.display = "none";
      if (goingBack && this.controls) {
        // Override camera position AFTER loadLevel resets it to (0,80,-50),
        // so the player arrives near the back archway they just came through.
        const backZ = this.galleryDefs[targetLevel].backCameraZ ?? -550;
        this.loadLevel(targetLevel).then(() => {
          this.controls.yawObject.position.set(0, 80, backZ);
          this.transitioning = false;
        });
      } else {
        this.loadLevel(targetLevel).then(() => {
          this.transitioning = false;
        });
      }
    }, 800);
  }

  // ─── Camera helpers ────────────────────────────────────────────────────────

  getCamPos() {
    const pos = new Vector3();
    this.controls?.worldCamera.getWorldPosition(pos);
    return pos;
  }

  // ─── HUD helpers ───────────────────────────────────────────────────────────

  updateHUD() {
    const def = this.galleryDefs[this.currentLevel];
    const el = (id) => document.getElementById(id);
    if (el("hud-level"))     el("hud-level").textContent     = def.name;
    if (el("hud-objective")) el("hud-objective").textContent = def.description;
  }

  setPrompt(text) {
    const el = document.getElementById("hud-prompt");
    if (el) el.textContent = text;
  }
}
