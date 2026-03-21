import { Vector3 } from "three";

/**
 * LightPuzzle - A 3-level showcase/puzzle.
 *
 * Design goals:
 *  - Zero mechanical skill required: just walk and press E to carry/drop.
 *  - Beautiful to watch even without touching anything — the path tracer
 *    converges and shows GI, reflections, and refraction automatically.
 *  - One light source per level to keep noise low.
 *
 * Puzzle mechanic: each level has a fixed light source and one or more
 * chrome mirror slabs. Carry the mirror to the reflective receptor pad.
 * The path tracer shows the real visual consequence of each placement.
 *
 * Room interior (all levels): x:[-400,400], y:[0,400], z:[-600,0].
 * Camera starts at (0, 80, -50) facing -z (toward the back wall).
 */
export class LightPuzzle {
  // Model paths
  sunFile = "models/singleVoxelLight.vox"; // 1×1×1 voxel, white emissive
  redLightFile = "models/redLight.vox";
  tealLightFile = "models/tealLight.vox";
  metalCubeFile = "models/metalCube.vox"; // 8×8×8 voxels, SPEC (mirror)
  transparentCubeFile = "models/transparentCube.vox"; // 8×8×8 voxels, REFR (glass)
  deathStarChunkFile = "models/deathStarChunk.vox"; // 40×40×40 voxels, DIFF (grey)

  // Carry mechanic
  pickupables = new Set();
  carriedId = null;
  carryDistance = 220;
  pickupRadius = 200;

  // Level state
  currentLevel = 0;
  levelComplete = false;
  currentLevelGeomIds = [];
  doorIds = [];
  targets = [];
  controls = null;

  levelDefs = [
    {
      name: "Level 1 — The Gallery",
      objective:
        "Walk through the gap [E to pick up], carry the chrome slab to the receptor pad.",
    },
    {
      name: "Level 2 — The Red Chamber",
      objective:
        "Pick up the mirror and carry it to the right-side pad. Watch red GI flood everything.",
    },
    {
      name: "Level 3 — Teal Cascade",
      objective:
        "Carry both mirrors to the left-side pads to redirect the teal light.",
    },
  ];

  constructor(voxelManager) {
    this.voxelManager = voxelManager;
    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyE") this.onPickup();
    });
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

  // addGeomScaled: adds a geometry and stretches its mesh non-uniformly.
  // World-space extent = (gridDimensions × voxelSize) × (sx, sy, sz).
  // The shader handles non-uniform scale correctly via the inverse matrix.
  async addGeomScaled(file, pos, voxelSize, sx, sy, sz) {
    const id = await this.addGeom(file, pos, voxelSize);
    this.voxelManager.setGeomScale(id, sx, sy, sz);
    return id;
  }

  async clearLevel() {
    for (const id of this.currentLevelGeomIds) {
      this.voxelManager.removeGeometry(id);
    }
    this.currentLevelGeomIds = [];
    this.pickupables.clear();
    this.carriedId = null;
    this.doorIds = [];
    this.targets = [];
  }

  // ─── Room builder ──────────────────────────────────────────────────────────
  //
  // Thin flat panels from deathStarChunk (40×40×40 voxels, diffuse grey).
  // Base at voxelSize=10: 400×400×400 units.  Scale makes them flat slabs.
  //
  // Interior: x:[-400,400]  y:[0,400]  z:[-600,0]
  async #buildRoom() {
    const v = 10;
    // Floor  — 800 wide × 20 tall × 600 deep, top at y=0
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(0, -10, -300),
      v,
      2,
      0.05,
      1.5,
    );
    // Ceiling — bottom at y=400
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(0, 410, -300),
      v,
      2,
      0.05,
      1.5,
    );
    // Left wall — right face at x=-400
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(-410, 200, -300),
      v,
      0.05,
      1,
      1.5,
    );
    // Right wall — left face at x=400
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(410, 200, -300),
      v,
      0.05,
      1,
      1.5,
    );
    // Back wall — front face at z=-600
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(0, 200, -610),
      v,
      2,
      1,
      0.05,
    );
  }

  // ─── Level loading ─────────────────────────────────────────────────────────

  async loadLevel(index) {
    await this.clearLevel();
    this.currentLevel = index;
    this.levelComplete = false;
    document.getElementById("hud-complete").style.display = "none";
    this.updateHUD();

    if (index === 0) await this.#setupLevel1();
    else if (index === 1) await this.#setupLevel2();
    else if (index === 2) await this.#setupLevel3();
  }

  // ── Level 1: The Gallery ────────────────────────────────────────────────────
  //
  // Warm white GI from the back + a teal accent light in the upper-right corner.
  // Two tall glass pillars between the entrance and the dividing wall show
  // refraction. Chrome mirror panels on both side walls create deep reflections.
  // The puzzle mirror waits in the light zone — player fetches it and carries
  // it to the receptor pad.
  async #setupLevel1() {
    await this.#buildRoom();

    // Dividing wall: 200-unit gap at center.
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(-250, 200, -290),
      10,
      0.75,
      1,
      0.05,
    );
    await this.addGeomScaled(
      this.deathStarChunkFile,
      new Vector3(250, 200, -290),
      10,
      0.75,
      1,
      0.05,
    );

    // Main warm-white area light: 150×150×25, upper-center of back wall.
    // voxelSize=100 gives sampling sphere radius=80 → efficient direct sampling.
    await this.addGeomScaled(
      this.sunFile,
      new Vector3(0, 320, -400),
      100,
      1.5,
      1.5,
      0.25,
    );

    // Teal accent light: upper-right of back wall, adds cool teal GI to right half.
    // Two tracked lights together are still low-noise with radius=48 sampling.
    await this.addGeomScaled(
      this.tealLightFile,
      new Vector3(280, 280, -400),
      60,
      1.2,
      1.2,
      0.15,
    );

    // Tall glass pillars flanking the path (between entrance and dividing wall).
    // Warm+teal GI refracts through them — path-tracer exclusive caustics.
    // 40×200×40, sitting on the floor (center at y=100).
    await this.addGeomScaled(
      this.transparentCubeFile,
      new Vector3(-150, 100, -180),
      10,
      4,
      20,
      4,
    );
    await this.addGeomScaled(
      this.transparentCubeFile,
      new Vector3(150, 100, -180),
      10,
      4,
      20,
      4,
    );

    // Chrome mirror panels flush with both side walls (decorative).
    // 10×300×400 — player sees reflected copies of the glass pillars and lights.
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(-394, 200, -300),
      100,
      0.1,
      3,
      4,
    );
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(394, 200, -300),
      100,
      0.1,
      3,
      4,
    );

    // Receptor pad: flat chrome square in front of the gap.
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(0, 6, -200),
      10,
      2.5,
      0.15,
      2.5,
    );
    this.targets.push({ position: new Vector3(0, 6, -200), radius: 200 });

    // Puzzle mirror: behind the dividing wall in the warm light zone.
    // Player walks through the gap to retrieve it, then carries it to the pad.
    const mirrorId = await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(0, 100, -430),
      10,
      1.5,
      2.5,
      0.2,
    );
    this.pickupables.add(mirrorId);
  }

  // ── Level 2: The Red Chamber ────────────────────────────────────────────────
  //
  // A 15×350×500 red panel fills almost the entire left wall — the whole room
  // turns red via GI color bleeding. Two tall chrome pillars in the center
  // reflect the red environment in perfect specular chrome. One glass column
  // on the right lets the player see red light bending through it.
  // Carry the mirror from the left (red zone) to the right-side receptor pad.
  async #setupLevel2() {
    await this.#buildRoom();

    // Red area light: nearly fills the left wall.
    // voxelSize=100, sx=0.15→15 thick, sy=3.5→350 tall, sz=5.0→500 deep.
    // Sphere radius=80 for good direct sampling across the 800-unit-wide room.
    await this.addGeomScaled(
      this.redLightFile,
      new Vector3(-394, 200, -300),
      100,
      0.15,
      3.5,
      5.0,
    );

    // Two tall chrome pillars in the room center — 50×200×50.
    // Perfect specular chrome reflects the red GI in all directions.
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(-80, 100, -350),
      10,
      5,
      20,
      5,
    );
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(80, 100, -350),
      10,
      5,
      20,
      5,
    );

    // Glass column on the right — 50×200×50.
    // Red light visibly bends through the glass — a path-tracer exclusive.
    await this.addGeomScaled(
      this.transparentCubeFile,
      new Vector3(280, 100, -400),
      10,
      5,
      20,
      5,
    );

    // Receptor pad: right side of room (far from the red source).
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(280, 6, -200),
      10,
      2.5,
      0.15,
      2.5,
    );
    this.targets.push({ position: new Vector3(280, 6, -200), radius: 200 });

    // Puzzle mirror: starts near the entrance on the left side (bathed in red).
    // Carry it across the room to the right-side pad.
    const mirrorId = await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(-200, 100, -120),
      10,
      1.5,
      2.5,
      0.2,
    );
    this.pickupables.add(mirrorId);
  }

  // ── Level 3: Teal Cascade ───────────────────────────────────────────────────
  //
  // A 300×350×15 teal panel covers the right half of the back wall — strong
  // teal GI floods the right side of the room. A large chrome block sits in
  // the teal zone, bouncing teal light in every direction. Two glass columns
  // refract the teal beam. Two mirrors to place on the left-side pads.
  async #setupLevel3() {
    await this.#buildRoom();

    // Teal area light: right half of back wall, 300×350×15.
    // voxelSize=100 → sphere radius=80.
    await this.addGeomScaled(
      this.tealLightFile,
      new Vector3(200, 200, -595),
      100,
      3.0,
      3.5,
      0.15,
    );

    // Large chrome block in the teal zone: 100×120×100.
    // Acts as a reflective "mirror ball" — scatters teal light across the room.
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(250, 60, -500),
      10,
      10,
      12,
      10,
    );

    // Two glass columns in the center — show teal refraction.
    await this.addGeomScaled(
      this.transparentCubeFile,
      new Vector3(60, 100, -320),
      10,
      4,
      20,
      4,
    );
    await this.addGeomScaled(
      this.transparentCubeFile,
      new Vector3(-60, 100, -320),
      10,
      4,
      20,
      4,
    );

    // Two receptor pads on the left side, away from the teal source.
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(-280, 6, -200),
      10,
      2.5,
      0.15,
      2.5,
    );
    await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(-280, 6, -450),
      10,
      2.5,
      0.15,
      2.5,
    );
    this.targets.push({ position: new Vector3(-280, 6, -200), radius: 200 });
    this.targets.push({ position: new Vector3(-280, 6, -450), radius: 200 });

    // Two puzzle mirrors: start on the right (in the teal light zone).
    const m1 = await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(150, 100, -120),
      10,
      1.5,
      2.5,
      0.2,
    );
    const m2 = await this.addGeomScaled(
      this.metalCubeFile,
      new Vector3(250, 100, -120),
      10,
      1.5,
      2.5,
      0.2,
    );
    this.pickupables.add(m1);
    this.pickupables.add(m2);
  }

  // ─── Interaction ───────────────────────────────────────────────────────────

  onPickup() {
    if (this.carriedId !== null) {
      this.carriedId = null;
      return;
    }
    const camPos = this.getCamPos();
    let nearest = null;
    let nearestDist = this.pickupRadius;
    for (const id of this.pickupables) {
      if (!(id in this.voxelManager.voxelGeometries)) continue;
      const dist = camPos.distanceTo(
        this.voxelManager.voxelGeometries[id].position,
      );
      if (dist < nearestDist) {
        nearest = id;
        nearestDist = dist;
      }
    }
    if (nearest !== null) this.carriedId = nearest;
  }

  // ─── Per-frame update ──────────────────────────────────────────────────────

  handleAnimationFrame(controls) {
    if (controls) this.controls = controls;

    if (
      this.carriedId !== null &&
      this.voxelManager.voxelGeometries[this.carriedId]
    ) {
      const pos = this.getCamPos().addScaledVector(
        this.getCamForward(),
        this.carryDistance,
      );
      this.voxelManager.setGeomPosition(this.carriedId, pos);
    }

    this.#updatePromptHint();
    if (!this.levelComplete) this.#checkWin();
    this.voxelManager.updateVoxelShaderData();
  }

  #updatePromptHint() {
    if (this.carriedId !== null) {
      this.setPrompt("[E]  Drop");
      return;
    }
    const camPos = this.getCamPos();
    for (const id of this.pickupables) {
      if (!(id in this.voxelManager.voxelGeometries)) continue;
      if (
        camPos.distanceTo(this.voxelManager.voxelGeometries[id].position) <
        this.pickupRadius
      ) {
        this.setPrompt("[E]  Pick up");
        return;
      }
    }
    this.setPrompt("");
  }

  #checkWin() {
    if (this.targets.length === 0) return; // level still loading, no targets registered yet
    const used = new Set();
    let satisfied = 0;
    for (const target of this.targets) {
      for (const id of this.pickupables) {
        if (used.has(id)) continue;
        if (id === this.carriedId) continue; // must be placed, not held
        if (!(id in this.voxelManager.voxelGeometries)) continue;
        const dist = this.voxelManager.voxelGeometries[id].position.distanceTo(
          target.position,
        );
        if (dist < target.radius) {
          used.add(id);
          satisfied++;
          break;
        }
      }
    }
    if (satisfied >= this.targets.length) {
      this.levelComplete = true;
      for (const id of this.doorIds) this.voxelManager.removeGeometry(id);
      this.#onLevelComplete();
    }
  }

  #onLevelComplete() {
    const isLast = this.currentLevel >= this.levelDefs.length - 1;
    const el = document.getElementById("hud-complete");
    el.textContent = isLast
      ? "You Win!  The cascade is complete."
      : "Level complete!  Next chamber loading...";
    el.style.display = "block";
    if (!isLast) {
      setTimeout(() => {
        el.style.display = "none";
        this.loadLevel(this.currentLevel + 1);
      }, 4000);
    }
  }

  // ─── Camera helpers ────────────────────────────────────────────────────────

  getCamPos() {
    const pos = new Vector3();
    this.controls?.worldCamera.getWorldPosition(pos);
    return pos;
  }

  getCamForward() {
    const dir = new Vector3(0, 0, -1);
    this.controls?.worldCamera.getWorldDirection(dir);
    return dir;
  }

  // ─── HUD helpers ───────────────────────────────────────────────────────────

  updateHUD() {
    const def = this.levelDefs[this.currentLevel];
    const el = (id) => document.getElementById(id);
    if (el("hud-level")) el("hud-level").textContent = def.name;
    if (el("hud-objective")) el("hud-objective").textContent = def.objective;
  }

  setPrompt(text) {
    const el = document.getElementById("hud-prompt");
    if (el) el.textContent = text;
  }
}
