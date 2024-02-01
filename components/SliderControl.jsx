// src/components/SliderControl.jsx

import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types"; // Import PropTypes

const SliderControl = ({ label, sceneSettingsProperty, min, max, step }) => {
  const [propertyValue, setPropertyValue] = useState(
    window[sceneSettingsProperty]
  );

  const handleSliderChange = (event, newValue) => {
    setPropertyValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window && propertyValue && sceneSettingsProperty) {
        window[sceneSettingsProperty] = propertyValue;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [propertyValue, sceneSettingsProperty]);

  return (
    <div>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        value={propertyValue || "1"}
        onChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

// Define PropTypes for SliderControl
SliderControl.propTypes = {
  label: PropTypes.string.isRequired,
  sceneSettingsProperty: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default SliderControl;
