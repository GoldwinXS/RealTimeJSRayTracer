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
      name: "Level 1 — Hall of Mirrors",
      objective: "Carry the red light [E] to the receptor pad. Watch it reflect off the chrome pillars!",
    },
    {
      name: "Level 2 — Through the Glass",
      objective: "Place both lights on their pads. See light bend through glass — a path tracer exclusive.",
    },
    {
      name: "Level 3 — Color Cascade",
      objective: "Activate the chamber. The colored lights bleed onto the walls — global illumination you can't fake.",
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
    // Enclosed room — light has nowhere to escape, so bounces accumulate
    await this.#buildRoom();

    // Soft white ceiling light for ambient fill
    await this.addGeom(this.sunFile, new Vector3(0, 340, -300), 6);

    // Two chrome pillars — specular (mirror) reflections.
    // The red pickup light will visibly reflect off them.
    await this.addGeom(this.metalCubeFile, new Vector3(-180, 100, -280), 22);
    await this.addGeom(this.metalCubeFile, new Vector3(180, 100, -280), 22);

    // Receptor pad: small glowing red marker near the back wall
    await this.addGeom(this.redLightFile, new Vector3(0, 20, -480), 5);
    this.targets.push({ position: new Vector3(0, 20, -480), radius: 140 });

    // One pickupable red light near the entrance
    const redId = await this.addGeom(this.redLightFile, new Vector3(0, 60, -100), 14);
    this.pickupables.add(redId);
  }

  async #setupLevel2() {
    await this.#buildRoom();

    // Dimmer overhead light — lets the colored lights stand out more
    await this.addGeom(this.sunFile, new Vector3(0, 340, -300), 4);

    // Chrome pillars on each side
    await this.addGeom(this.metalCubeFile, new Vector3(-200, 80, -200), 20);
    await this.addGeom(this.metalCubeFile, new Vector3(200, 80, -200), 20);

    // Three glass blocks across the middle of the room.
    // Light bends through them (refraction) in ways rasterizers cannot handle.
    await this.addGeom(this.transparentCubeFile, new Vector3(-120, 56, -320), 14);
    await this.addGeom(this.transparentCubeFile, new Vector3(0, 56, -340), 14);
    await this.addGeom(this.transparentCubeFile, new Vector3(120, 56, -320), 14);

    // Two receptor pads near the back
    await this.addGeom(this.redLightFile, new Vector3(-140, 20, -500), 5);
    await this.addGeom(this.tealLightFile, new Vector3(140, 20, -500), 5);
    this.targets.push({ position: new Vector3(-140, 20, -500), radius: 140 });
    this.targets.push({ position: new Vector3(140, 20, -500), radius: 140 });

    // Two pickupable lights near the entrance
    const redId = await this.addGeom(this.redLightFile, new Vector3(-140, 60, -80), 14);
    const tealId = await this.addGeom(this.tealLightFile, new Vector3(140, 60, -80), 14);
    this.pickupables.add(redId);
    this.pickupables.add(tealId);
  }

  async #setupLevel3() {
    await this.#buildRoom();

    // A static red light fixed near the left wall.
    // It bleeds red onto the floor, ceiling, and adjacent surfaces — global illumination.
    // This is color bleeding: the wall itself becomes a secondary emitter of colored light.
    await this.addGeom(this.redLightFile, new Vector3(-300, 180, -260), 12);

    // Two large mirror panels facing each other — reflections bounce between them
    await this.addGeom(this.metalCubeFile, new Vector3(-200, 120, -380), 30);
    await this.addGeom(this.metalCubeFile, new Vector3(200, 120, -380), 30);

    // Glass block in the center — the teal pickup will refract through it
    await this.addGeom(this.transparentCubeFile, new Vector3(0, 70, -310), 18);

    // Two receptor pads near the back:
    // Left pad sits in the red light's color bleed zone.
    // Right pad sits opposite — placing teal there creates a red/teal contrast across the room.
    await this.addGeom(this.redLightFile, new Vector3(-120, 20, -520), 5);
    await this.addGeom(this.tealLightFile, new Vector3(120, 20, -520), 5);
    this.targets.push({ position: new Vector3(-120, 20, -520), radius: 140 });
    this.targets.push({ position: new Vector3(120, 20, -520), radius: 140 });

    // Two pickupable lights near the entrance.
    // When placed, the red+teal combo floods the room with mixed GI color bleeding.
    const redId = await this.addGeom(this.redLightFile, new Vector3(-120, 60, -80), 14);
    const tealId = await this.addGeom(this.tealLightFile, new Vector3(120, 60, -80), 14);
    this.pickupables.add(redId);
    this.pickupables.add(tealId);
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
