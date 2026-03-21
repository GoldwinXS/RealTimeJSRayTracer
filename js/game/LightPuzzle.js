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
  sunFile          = "models/singleVoxelLight.vox"; // 1×1×1 voxel, white emissive
  redLightFile     = "models/redLight.vox";
  tealLightFile    = "models/tealLight.vox";
  metalCubeFile    = "models/metalCube.vox";        // 8×8×8 voxels, SPEC (mirror)
  transparentCubeFile = "models/transparentCube.vox"; // 8×8×8 voxels, REFR (glass)
  deathStarChunkFile  = "models/deathStarChunk.vox";  // 40×40×40 voxels, DIFF (grey)

  // Carry mechanic
  pickupables  = new Set();
  carriedId    = null;
  carryDistance = 220;
  pickupRadius  = 200;

  // Level state
  currentLevel         = 0;
  levelComplete        = false;
  currentLevelGeomIds  = [];
  doorIds              = [];
  targets              = [];
  controls             = null;

  levelDefs = [
    {
      name: "Level 1 — Light Through the Gap",
      objective: "Carry the chrome slab [E] to the receptor pad in front of the gap.",
    },
    {
      name: "Level 2 — Red Room",
      objective: "Place the mirror on the pad. Red light bleeds onto every surface.",
    },
    {
      name: "Level 3 — Teal Cascade",
      objective: "Position both mirrors on their pads to complete the cascade.",
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
    this.carriedId    = null;
    this.doorIds      = [];
    this.targets      = [];
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
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, -10, -300), v, 2, 0.05, 1.5);
    // Ceiling — bottom at y=400
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 410, -300), v, 2, 0.05, 1.5);
    // Left wall — right face at x=-400
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(-410, 200, -300), v, 0.05, 1, 1.5);
    // Right wall — left face at x=400
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(410, 200, -300), v, 0.05, 1, 1.5);
    // Back wall — front face at z=-600
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(0, 200, -610), v, 2, 1, 0.05);
  }

  // ─── Level loading ─────────────────────────────────────────────────────────

  async loadLevel(index) {
    await this.clearLevel();
    this.currentLevel = index;
    this.levelComplete = false;
    document.getElementById("hud-complete").style.display = "none";
    this.updateHUD();

    if (index === 0)      await this.#setupLevel1();
    else if (index === 1) await this.#setupLevel2();
    else if (index === 2) await this.#setupLevel3();
  }

  // ── Level 1: Light Through the Gap ─────────────────────────────────────────
  //
  // A partial wall divides the room. A large white light panel sits behind it.
  // From the entrance the player sees light beaming through the 200-unit gap.
  // They carry the chrome mirror slab to the receptor pad in front of the gap.
  // The path tracer shows the beam reflecting off the mirror — impossible to
  // fake with rasterization.
  //
  // ONE light source. All geometry is diffuse or specular — no other emitters.
  async #setupLevel1() {
    await this.#buildRoom();

    // Dividing wall: two deathStarChunk panels leaving a 200-unit gap at center.
    // Each panel: 300 wide × 400 tall × 20 deep.  sx=0.75, sy=1, sz=0.05.
    // Left panel spans x:[-400, -100], right spans x:[100, 400].
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3(-250, 200, -290), 10, 0.75, 1, 0.05);
    await this.addGeomScaled(this.deathStarChunkFile, new Vector3( 250, 200, -290), 10, 0.75, 1, 0.05);

    // ONE light source: large warm-white panel on the back wall (behind divider).
    // sunFile = 1 voxel; at voxelSize=25, scale(6,6,1): 150×150×25 area light.
    // The path tracer treats this as a soft area light — beautiful soft shadows.
    await this.addGeomScaled(this.sunFile, new Vector3(0, 200, -598), 25, 6, 6, 1);

    // Receptor pad: flat chrome square directly in front of the gap.
    // SPEC material means it mirrors the environment — it glints under the
    // light beam, making it easy to spot without being a light source.
    // metalCube 8 voxels × voxelSize=10, scale(2.5, 0.15, 2.5) → 200×12×200.
    await this.addGeomScaled(this.metalCubeFile, new Vector3(0, 6, -200), 10, 2.5, 0.15, 2.5);
    this.targets.push({ position: new Vector3(0, 6, -200), radius: 200 });

    // Mirror slab: tall upright chrome panel the player carries.
    // scale(1.5, 2.5, 0.2) → 120×200×16.  Starts near the entrance.
    const mirrorId = await this.addGeomScaled(
      this.metalCubeFile, new Vector3(0, 100, -80), 10, 1.5, 2.5, 0.2
    );
    this.pickupables.add(mirrorId);
  }

  // ── Level 2: Red Room ───────────────────────────────────────────────────────
  //
  // A large red panel covers the left wall. The red light bleeds onto every
  // surface — floor, ceiling, right wall. Two tall glass columns bend the
  // light visibly as it passes through (refraction). The player carries the
  // mirror to the receptor pad and watches new reflections appear.
  //
  // ONE light source (the red panel).
  async #setupLevel2() {
    await this.#buildRoom();

    // Large red light panel flush with left wall.
    // redLightFile: 8×8×8 voxels, voxelSize=12, scale(1, 4, 0.15) → 96×384×14.
    // Almost full wall height — fills the room with red GI.
    await this.addGeomScaled(this.redLightFile, new Vector3(-393, 200, -300), 12, 1, 4, 0.15);

    // Two tall glass columns spanning the room width.
    // transparentCubeFile: 8×8×8 voxels, voxelSize=10, scale(1,3,1) → 80×240×80.
    // The red light bends visibly as rays pass through — a path-tracer exclusive.
    await this.addGeomScaled(this.transparentCubeFile, new Vector3(-130, 120, -320), 10, 1, 3, 1);
    await this.addGeomScaled(this.transparentCubeFile, new Vector3( 130, 120, -320), 10, 1, 3, 1);

    // Receptor pad on the right side — in the "shadow" of the glass columns.
    await this.addGeomScaled(this.metalCubeFile, new Vector3(280, 6, -450), 10, 2.5, 0.15, 2.5);
    this.targets.push({ position: new Vector3(280, 6, -450), radius: 200 });

    // Mirror slab — starts on the left (in the red light), carry it right.
    const mirrorId = await this.addGeomScaled(
      this.metalCubeFile, new Vector3(-200, 100, -120), 10, 1.5, 2.5, 0.2
    );
    this.pickupables.add(mirrorId);
  }

  // ── Level 3: Teal Cascade ───────────────────────────────────────────────────
  //
  // A large teal panel on the back-right wall floods the room with teal GI.
  // Three glass columns refract the teal light. Two mirrors, two receptor pads.
  // Placing both mirrors creates a cascade of teal reflections across the room,
  // with GI color bleeding clearly visible on all diffuse surfaces.
  //
  // ONE light source (the teal panel).
  async #setupLevel3() {
    await this.#buildRoom();

    // Large teal panel on the back wall, offset to the right.
    // tealLightFile: 8×8×8 voxels, voxelSize=12, scale(1.5, 4, 0.15) → 144×384×14.
    await this.addGeomScaled(this.tealLightFile, new Vector3(200, 200, -598), 12, 1.5, 4, 0.15);

    // Three glass columns — refraction of teal light visible from the entrance.
    await this.addGeomScaled(this.transparentCubeFile, new Vector3(-200, 100, -280), 10, 1, 2.5, 1);
    await this.addGeomScaled(this.transparentCubeFile, new Vector3(   0, 100, -360), 10, 1, 2.5, 1);
    await this.addGeomScaled(this.transparentCubeFile, new Vector3( 200, 100, -280), 10, 1, 2.5, 1);

    // Two receptor pads — left side, away from the teal source.
    await this.addGeomScaled(this.metalCubeFile, new Vector3(-280, 6, -200), 10, 2.5, 0.15, 2.5);
    await this.addGeomScaled(this.metalCubeFile, new Vector3(-280, 6, -450), 10, 2.5, 0.15, 2.5);
    this.targets.push({ position: new Vector3(-280, 6, -200), radius: 200 });
    this.targets.push({ position: new Vector3(-280, 6, -450), radius: 200 });

    // Two mirror slabs — start on the right (near the teal source).
    const m1 = await this.addGeomScaled(
      this.metalCubeFile, new Vector3(150, 100, -120), 10, 1.5, 2.5, 0.2
    );
    const m2 = await this.addGeomScaled(
      this.metalCubeFile, new Vector3(250, 100, -120), 10, 1.5, 2.5, 0.2
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
      const dist = camPos.distanceTo(this.voxelManager.voxelGeometries[id].position);
      if (dist < nearestDist) { nearest = id; nearestDist = dist; }
    }
    if (nearest !== null) this.carriedId = nearest;
  }

  // ─── Per-frame update ──────────────────────────────────────────────────────

  handleAnimationFrame(controls) {
    if (controls) this.controls = controls;

    if (this.carriedId !== null && this.voxelManager.voxelGeometries[this.carriedId]) {
      const pos = this.getCamPos().addScaledVector(this.getCamForward(), this.carryDistance);
      this.voxelManager.setGeomPosition(this.carriedId, pos);
    }

    this.#updatePromptHint();
    if (!this.levelComplete) this.#checkWin();
    this.voxelManager.updateVoxelShaderData();
  }

  #updatePromptHint() {
    if (this.carriedId !== null) { this.setPrompt("[E]  Drop"); return; }
    const camPos = this.getCamPos();
    for (const id of this.pickupables) {
      if (!(id in this.voxelManager.voxelGeometries)) continue;
      if (camPos.distanceTo(this.voxelManager.voxelGeometries[id].position) < this.pickupRadius) {
        this.setPrompt("[E]  Pick up");
        return;
      }
    }
    this.setPrompt("");
  }

  #checkWin() {
    const used = new Set();
    let satisfied = 0;
    for (const target of this.targets) {
      for (const id of this.pickupables) {
        if (used.has(id)) continue;
        if (!(id in this.voxelManager.voxelGeometries)) continue;
        const dist = this.voxelManager.voxelGeometries[id].position.distanceTo(target.position);
        if (dist < target.radius) { used.add(id); satisfied++; break; }
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
    if (el("hud-level"))     el("hud-level").textContent = def.name;
    if (el("hud-objective")) el("hud-objective").textContent = def.objective;
  }

  setPrompt(text) {
    const el = document.getElementById("hud-prompt");
    if (el) el.textContent = text;
  }
}
