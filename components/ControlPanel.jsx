// src/components/ControlPanel.jsx

import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronLeft";
import SliderControl from "./SliderControl";
import SettingsIcon from "@mui/icons-material/Settings";
import { TextField, Button } from "@mui/material";

const ControlPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [filePath, setFilePath] = useState("models/MicroRecon.vox");
  const [position, setPosition] = useState({ x: 0, y: 10, z: 0 });
  const [size, setSize] = useState(1);
  const [spawnObjectManager, setSpawnObjectManager] = useState();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setIsPaused(!isPaused);
    setSpawnObjectManager(window.spawnObjectManager);
    window.isUIActive = !isOpen;
  };

  return (
    <div className="control-panel">
      <IconButton onClick={toggleDrawer}>
        <SettingsIcon />
      </IconButton>
      <Drawer variant="persistent" anchor="right" open={isOpen}>
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
        <SliderControl
          label="Pixel Ratio"
          sceneSettingsProperty="pixelRatio"
          min={0.1}
          max={3}
          step={0.1}
        />

        <SliderControl
          label="Blur Ratio"
          sceneSettingsProperty="blurRatio"
          min={0.1}
          max={1}
          step={0.6}
        />

        <div>
          <TextField
            label="File Path"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
          />
          <TextField
            label="Position X"
            type="number"
            value={position.x}
            onChange={(e) =>
              setPosition({ ...position, x: parseFloat(e.target.value) })
            }
          />
          <TextField
            label="Position Y"
            type="number"
            value={position.y}
            onChange={(e) =>
              setPosition({ ...position, y: parseFloat(e.target.value) })
            }
          />
          <TextField
            label="Position Z"
            type="number"
            value={position.z}
            onChange={(e) =>
              setPosition({ ...position, z: parseFloat(e.target.value) })
            }
          />
          <TextField
            label="Voxel Size"
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <Button
            onClick={() => {
              spawnObjectManager.sendCommand({
                filePath: filePath,
                position: position,
                size: size,
              });
            }}
          >
            Spawn Object
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default ControlPanel;
