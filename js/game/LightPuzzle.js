import { Vector3 } from "three";

/**
 * LightPuzzle - A 3-level light placement puzzle game.
 * Player picks up colored lights (E key) and places them on glowing receptor pads.
 * The path tracer handles all the real light physics: color mixing, reflections, refraction,
 * and global illumination (color bleeding) that rasterizers cannot reproduce.
 */
export class LightPuzzle {
  // Model paths (served from public/)
  sunFile = "models/singleVoxelLight.vox";
  redLightFile = "models/redLight.vox";
  tealLightFile = "models/tealLight.vox";
  metalCubeFile = "models/metalCube.vox";
  transparentCubeFile = "models/transparentCube.vox";
  deathStarChunkFile = "models/deathStarChunk.vox";

  // Room geometry constants.
  // deathStarChunk is 40×40×40 voxels. At ROOM_SCALE=18, each chunk = 720 world units.
  // Interior: x:[-360, 360], y:[0, 400], z:[-600, 0]. Camera starts near z=0.
  ROOM_SCALE = 18;
  ROOM_HALF = 360; // (40 * ROOM_SCALE) / 2

  // Pickup state
  pickupables = new Set(); // IDs of objects the player can carry
  carriedId = null;
  carryDistance = 220; // world units in front of camera
  pickupRadius = 200;  // how close you need to be to pick up

  // Level state
  currentLevel = 0;
  levelComplete = false;
  currentLevelGeomIds = []; // all geometry IDs spawned this level (for cleanup)
  doorIds = [];              // subset to remove on win
  targets = [];              // {position: Vector3, radius: number}

  controls = null;

  levelDefs = [
    {
      name: "Level 1 — First Reflection",
      objective: "Carry the chrome mirror [E] to the glowing marker. The red light will reflect off it.",
    },
    {
      name: "Level 2 — Through the Glass",
      objective: "Place the mirror on the marker behind the glass. Watch the teal light bend as you move through.",
    },
    {
      name: "Level 3 — Color Cascade",
      objective: "Position both mirrors to complete the cascade. Red light bleeds across every surface.",
    },
  ];

  constructor(voxelManager) {
    this.voxelManager = voxelManager;
    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyE") this.onPickup();
    });
  }

  // Called by main.js after game loads
  async startGame(camera) {
    this.camera = camera;
    await this.loadLevel(0);
  }

  // Called by main.js after controls are initialized
  setupControls(controls) {
    this.controls = controls;
    // Place camera inside the room, near the entrance, looking toward the back wall
    controls.yawObject.position.set(0, 80, -50);
  }

  // No-ops to match GameManager interface
  setupPlayerControls() {}
  rotatePlayerModel() {}

  // ─── Geometry helpers ──────────────────────────────────────────────────────

  async addGeom(file, pos, scale) {
    const id = await this.voxelManager.addGeometry(file, pos, scale);
    this.currentLevelGeomIds.push(id);
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

  // ─── Room builder ─────────────────────────────────────────────────────────

  // Builds a 5-sided enclosed room: floor, ceiling, left wall, right wall, back wall.
  // Room interior: x:[-360, 360], y:[0, 400], z:[-600, 0].
  // Camera starts near z=-50 (just inside the entrance), facing negative z.
  async #buildRoom() {
    const S = this.ROOM_SCALE;  // 18 → each chunk = 720 world units
    const H = this.ROOM_HALF;   // 360

    // Floor: top surface at y=0 → chunk center at y=-H
    await this.addGeom(this.deathStarChunkFile, new Vector3(0, -H, -H), S);
    // Ceiling: bottom surface at y=400 → chunk center at y=400+H
    await this.addGeom(this.deathStarChunkFile, new Vector3(0, 400 + H, -H), S);
    // Left wall: right face at x=-360 → chunk center at x=-(H+H)
    await this.addGeom(this.deathStarChunkFile, new Vector3(-(H + H), 200, -H), S);
    // Right wall: left face at x=360 → chunk center at x=H+H
    await this.addGeom(this.deathStarChunkFile, new Vector3(H + H, 200, -H), S);
    // Back wall: front face at z=-600 → chunk center at z=-(600+H)
    await this.addGeom(this.deathStarChunkFile, new Vector3(0, 200, -(600 + H)), S);
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

  async #setupLevel1() {
    await this.#buildRoom();

    // One soft white ceiling light — ambient only, lets you see the room
    await this.addGeom(this.sunFile, new Vector3(0, 340, -300), 6);

    // Fixed red light source on the left side (not pickupable).
    // It illuminates the left wall with red — the path tracer bounces that
    // red light onto the floor and ceiling (color bleeding).
    await this.addGeom(this.redLightFile, new Vector3(-280, 180, -350), 8);

    // Two static chrome pillars — the player will see the red light reflect
    // in them once the carried mirror redirects light their way
    await this.addGeom(this.metalCubeFile, new Vector3(-160, 80, -260), 20);
    await this.addGeom(this.metalCubeFile, new Vector3(160, 80, -260), 20);

    // Receptor marker: small teal glow marks where to place the mirror
    await this.addGeom(this.tealLightFile, new Vector3(160, 20, -420), 4);
    this.targets.push({ position: new Vector3(160, 20, -420), radius: 150 });

    // One pickupable mirror (chrome cube) near the entrance
    const mirrorId = await this.addGeom(this.metalCubeFile, new Vector3(0, 60, -100), 10);
    this.pickupables.add(mirrorId);
  }

  async #setupLevel2() {
    await this.#buildRoom();

    // Slightly dimmer ceiling light — lets the teal source dominate the mood
    await this.addGeom(this.sunFile, new Vector3(0, 340, -300), 4);

    // Fixed teal light source at the back, high up.
    // The glass blocks below it visibly refract it — you can see the caustics.
    await this.addGeom(this.tealLightFile, new Vector3(0, 300, -520), 9);

    // Three glass blocks form a barrier across the middle.
    // The teal light bends through them — impossible in a rasterizer.
    await this.addGeom(this.transparentCubeFile, new Vector3(-130, 56, -300), 14);
    await this.addGeom(this.transparentCubeFile, new Vector3(0, 56, -320), 14);
    await this.addGeom(this.transparentCubeFile, new Vector3(130, 56, -300), 14);

    // Receptor marker behind the glass, on the right side
    await this.addGeom(this.redLightFile, new Vector3(220, 20, -460), 4);
    this.targets.push({ position: new Vector3(220, 20, -460), radius: 150 });

    // One pickupable mirror near the entrance
    const mirrorId = await this.addGeom(this.metalCubeFile, new Vector3(-100, 60, -80), 10);
    this.pickupables.add(mirrorId);
  }

  async #setupLevel3() {
    await this.#buildRoom();

    // Very dim ceiling light — the colored light sources own the mood here
    await this.addGeom(this.sunFile, new Vector3(0, 340, -300), 3);

    // Bright fixed red light near the left wall.
    // Strong enough that the left wall becomes visibly red, and that red
    // bleeds onto the floor and ceiling — global illumination in action.
    await this.addGeom(this.redLightFile, new Vector3(-290, 200, -280), 11);

    // Two glass blocks near the back — refraction adds color mixing
    await this.addGeom(this.transparentCubeFile, new Vector3(-80, 60, -380), 16);
    await this.addGeom(this.transparentCubeFile, new Vector3(80, 60, -380), 16);

    // Two receptor markers: both on the right side, away from the red light.
    // Placing mirrors there creates a dramatic red-to-right reflection chain.
    await this.addGeom(this.tealLightFile, new Vector3(180, 20, -280), 4);
    await this.addGeom(this.tealLightFile, new Vector3(260, 20, -460), 4);
    this.targets.push({ position: new Vector3(180, 20, -280), radius: 150 });
    this.targets.push({ position: new Vector3(260, 20, -460), radius: 150 });

    // Two pickupable mirrors — player must place both to complete the cascade
    const mirror1Id = await this.addGeom(this.metalCubeFile, new Vector3(-80, 60, -80), 10);
    const mirror2Id = await this.addGeom(this.metalCubeFile, new Vector3(80, 60, -80), 10);
    this.pickupables.add(mirror1Id);
    this.pickupables.add(mirror2Id);
  }

  // ─── Interaction ───────────────────────────────────────────────────────────

  onPickup() {
    if (this.carriedId !== null) {
      // Drop whatever we're holding
      this.carriedId = null;
      return;
    }

    // Find nearest pickupable within range
    const camPos = this.getCamPos();
    let nearest = null;
    let nearestDist = this.pickupRadius;

    for (const id of this.pickupables) {
      if (!(id in this.voxelManager.voxelGeometries)) continue;
      const dist = camPos.distanceTo(this.voxelManager.voxelGeometries[id].position);
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

    // Float carried object in front of camera
    if (this.carriedId !== null && this.voxelManager.voxelGeometries[this.carriedId]) {
      const pos = this.getCamPos().addScaledVector(this.getCamForward(), this.carryDistance);
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
      if (camPos.distanceTo(this.voxelManager.voxelGeometries[id].position) < this.pickupRadius) {
        this.setPrompt("[E]  Pick up");
        return;
      }
    }
    this.setPrompt("");
  }

  #checkWin() {
    // Each target zone must have at least one distinct pickupable in it.
    const used = new Set();
    let satisfied = 0;

    for (const target of this.targets) {
      for (const id of this.pickupables) {
        if (used.has(id)) continue;
        if (!(id in this.voxelManager.voxelGeometries)) continue;
        const dist = this.voxelManager.voxelGeometries[id].position.distanceTo(target.position);
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
      ? "You Win!  The Color Cascade is complete."
      : "Level complete!  Advancing to the next chamber...";
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
