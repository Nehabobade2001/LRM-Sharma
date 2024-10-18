// ProgressGauge.js
import React from "react";
import GaugeChart from 'react-gauge-chart';
import { Box } from "@mui/material";

const ProgressGauge = ({ percentage }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" m={2}>
      <GaugeChart
        id="progress-gauge"
        nrOfLevels={10}
        percent={percentage}
        colors={["#FF0000", "#00FF00"]}
        arcWidth={0.3}
      />
    </Box>
  );
};

export default ProgressGauge;
