// Timer.js
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Timer = ({ initialMinutes = 30, onTimesUp }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        onTimesUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <Typography variant="h6" color={minutes <= 5 ? "error" : "primary"}>
      {`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
    </Typography>
  );
};

export default Timer;
