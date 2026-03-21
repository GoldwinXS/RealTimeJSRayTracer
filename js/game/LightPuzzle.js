import { Vector3 } from "three";

/**
 * LightPuzzle - A 3-level light placement puzzle game.
 * Player picks up colored lights (E key) and places them on glowing receptor pads.
 * The path tracer handles all the real light physics: color mixing, reflections, refraction.
 */
export class LightPuzzle {
  // Model paths (served from public/)
  sunFile = "models/singleVoxelLight.vox";
  redLightFile = "models/redLight.vox";
  tealLightFile = "models/tealLight.vox";
  metalCubeFile = "models/metalCube.vox";
  transparentCubeFile = "models/transparentCube.vox";
  deathStarChunkFile = "models/deathStarChunk.vox";
  xwingFile = "models/xwingColor.vox";
  tieFile = "models/tie.vox";

  // Pickup state
  pickupables = new Set(); // IDs of objects the player can carry
  carriedId = null;
  carryDistance = 130; // world units in front of camera
  pickupRadius = 180;  // how close you need to be to pick up

  // Level state
  currentLevel = 0;
  levelComplete = false;
  currentLevelGeomIds = []; // all geometry IDs spawned this level (for cleanup)
  doorIds = [];              // subset to remove on win
  targets = [];              // {position: Vector3, radius: number}

  controls = null;

  levelDefs = [
    {
      name: "Level 1 — Into the Light",
      objective: "Pick up both lights [E] and place them on the glowing markers.",
    },
    {
      name: "Level 2 — Spectrum",
      objective: "Place all three lights on their receptor pads.",
    },
    {
      name: "Level 3 — Grand Chamber",
      objective: "Place all four light sources to complete the chamber.",
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
    // Start camera at a good vantage point
    controls.yawObject.position.set(0, 20, 350);
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
    // Distant sun — ambient sky glow
    await this.addGeom(this.sunFile, new Vector3(0, 80000, 0), 15000);

    // Decorative xwing hovering in scene
    const xwingId = await this.addGeom(this.xwingFile, new Vector3(300, 80, -400), 1);
    this.voxelManager.setGeomRotation(xwingId, "x", -30);
    this.voxelManager.setGeomRotation(xwingId, "z", 40);

    // A dim overhead fill light (not tracked, just ambient)
    await this.addGeom(this.sunFile, new Vector3(0, 400, -100), 8);

    // === Receptor pads (small glowing markers showing where to place lights) ===
    // Left pad: red tint
    await this.addGeom(this.redLightFile, new Vector3(-120, -30, -260), 4);
    // Right pad: teal tint
    await this.addGeom(this.tealLightFile, new Vector3(120, -30, -260), 4);

    // Target zones (must match pad positions, generous radius)
    this.targets.push({ position: new Vector3(-120, -30, -260), radius: 130 });
    this.targets.push({ position: new Vector3(120, -30, -260), radius: 130 });

    // === Door blocking the way forward ===
    const doorId = await this.addGeom(this.metalCubeFile, new Vector3(0, 0, -420), 11);
    this.doorIds.push(doorId);

    // === Pickupable lights ===
    const redId = await this.addGeom(this.redLightFile, new Vector3(-180, 20, 100), 18);
    const tealId = await this.addGeom(this.tealLightFile, new Vector3(180, 20, 100), 18);
    this.pickupables.add(redId);
    this.pickupables.add(tealId);
  }

  async #setupLevel2() {
    await this.addGeom(this.sunFile, new Vector3(0, 80000, 0), 15000);

    // Decorative ships
    const tieId = await this.addGeom(this.tieFile, new Vector3(-380, 60, -500), 1);
    this.voxelManager.setGeomRotation(tieId, "x", 80);
    this.voxelManager.setGeomRotation(tieId, "z", 70);

    const xwingId = await this.addGeom(this.xwingFile, new Vector3(350, -20, -600), 1);
    this.voxelManager.setGeomRotation(xwingId, "x", -30);
    this.voxelManager.setGeomRotation(xwingId, "z", -50);

    // Decorative mirror cubes (not pickupable — they look great reflecting the lights)
    await this.addGeom(this.metalCubeFile, new Vector3(-250, 30, -200), 5);
    await this.addGeom(this.metalCubeFile, new Vector3(250, 30, -200), 5);

    // Overhead fill
    await this.addGeom(this.sunFile, new Vector3(0, 400, -150), 8);

    // === Three receptor pads ===
    await this.addGeom(this.redLightFile, new Vector3(-180, -30, -380), 4);
    await this.addGeom(this.tealLightFile, new Vector3(0, -30, -420), 4);
    await this.addGeom(this.sunFile, new Vector3(180, -30, -380), 4);

    this.targets.push({ position: new Vector3(-180, -30, -380), radius: 130 });
    this.targets.push({ position: new Vector3(0, -30, -420), radius: 130 });
    this.targets.push({ position: new Vector3(180, -30, -380), radius: 130 });

    // Door
    const doorId = await this.addGeom(this.metalCubeFile, new Vector3(0, 0, -570), 13);
    this.doorIds.push(doorId);

    // === Pickupable lights ===
    const redId = await this.addGeom(this.redLightFile, new Vector3(-200, 20, 50), 18);
    const tealId = await this.addGeom(this.tealLightFile, new Vector3(0, 20, 150), 18);
    const whiteId = await this.addGeom(this.sunFile, new Vector3(200, 20, 50), 18);
    this.pickupables.add(redId);
    this.pickupables.add(tealId);
    this.pickupables.add(whiteId);
  }

  async #setupLevel3() {
    await this.addGeom(this.sunFile, new Vector3(0, 80000, 0), 15000);

    // More decorative ships for the grand finale
    for (let i = 0; i < 3; i++) {
      const tieId = await this.addGeom(
        this.tieFile,
        new Vector3(-430 + i * 180, 30 + i * 40, -700),
        1
      );
      this.voxelManager.setGeomRotation(tieId, "x", 80 + i * 5);
      this.voxelManager.setGeomRotation(tieId, "z", 70 + i * 5);
    }

    const xwingId = await this.addGeom(this.xwingFile, new Vector3(0, 120, -900), 1);
    this.voxelManager.setGeomRotation(xwingId, "x", -40);
    this.voxelManager.setGeomRotation(xwingId, "z", 40);

    // Decorative: mirrors AND glass blocks (beautiful caustics/reflections)
    await this.addGeom(this.metalCubeFile, new Vector3(-300, 40, -300), 6);
    await this.addGeom(this.metalCubeFile, new Vector3(300, 40, -300), 6);
    await this.addGeom(this.transparentCubeFile, new Vector3(-150, 50, -500), 5);
    await this.addGeom(this.transparentCubeFile, new Vector3(150, 50, -500), 5);

    await this.addGeom(this.sunFile, new Vector3(0, 400, -250), 8);

    // === Four receptor pads ===
    await this.addGeom(this.redLightFile, new Vector3(-240, -30, -500), 4);
    await this.addGeom(this.tealLightFile, new Vector3(-80, -30, -560), 4);
    await this.addGeom(this.sunFile, new Vector3(80, -30, -560), 4);
    await this.addGeom(this.tealLightFile, new Vector3(240, -30, -500), 4);

    this.targets.push({ position: new Vector3(-240, -30, -500), radius: 130 });
    this.targets.push({ position: new Vector3(-80, -30, -560), radius: 130 });
    this.targets.push({ position: new Vector3(80, -30, -560), radius: 130 });
    this.targets.push({ position: new Vector3(240, -30, -500), radius: 130 });

    // No door — this is the finale. Win shows "You Win!"

    // === Pickupable lights ===
    const redId = await this.addGeom(this.redLightFile, new Vector3(-280, 20, 0), 18);
    const teal1Id = await this.addGeom(this.tealLightFile, new Vector3(-90, 20, 120), 18);
    const whiteId = await this.addGeom(this.sunFile, new Vector3(90, 20, 120), 18);
    const teal2Id = await this.addGeom(this.tealLightFile, new Vector3(280, 20, 0), 18);
    this.pickupables.add(redId);
    this.pickupables.add(teal1Id);
    this.pickupables.add(whiteId);
    this.pickupables.add(teal2Id);
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
      ? "You Win!  All lights placed."
      : "Level complete!  Walk through the door...";
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
    return this.controls?.yawObject.position.clone() ?? new Vector3();
  }

  getCamForward() {
    return (
      this.controls?.cameraVectors.directionVector.clone().normalize() ??
      new Vector3(0, 0, -1)
    );
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
