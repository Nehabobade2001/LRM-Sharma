import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Paper, Box, Fab } from '@mui/material';
import { GaugeContainer, GaugeValueArc, GaugeReferenceArc, useGaugeState } from '@mui/x-charts/Gauge';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

// Gauge Pointer Component
function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

// Animated Score Circle Component
const ScoreCircle = ({ score }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: `conic-gradient(#3f51b5 ${score * 3.6}deg, #ddd 0deg)`,
        animation: 'rotate 3s linear infinite',
        boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {score}
        </Typography>
      </Box>
    </Box>
  );
};

// Main PredictionModal Component
const PredictionModal = ({ open, onClose, predictionData }) => {
  const { rank, colleges } = predictionData;
  const [confettiVisible, setConfettiVisible] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (open) {
      setConfettiVisible(true);
      setTimeout(() => setConfettiVisible(false), 3000);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      {confettiVisible && <Confetti width={width} height={height} />}
      <DialogTitle sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>Predicted NEET Rank & College Suggestions
      <Fab size='small' onClick={onClose} color="error" variant="contained">
          X
        </Fab>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <ScoreCircle score={rank} />
        </Box>

        {/* Possible Colleges and Admission Chances using Gauges */}
        <Typography variant="h6" gutterBottom>
          Possible Colleges & Admission Chances:
        </Typography>

        <Grid container spacing={2}>
          {colleges.map((college, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {college.name}
                </Typography>
                <Typography>Location: {college.location}</Typography>
                <Typography>Type: {college.type}</Typography>

                {/* Gauge Chart for Admission Chances */}
                <GaugeContainer
                  width={200}
                  height={200}
                  startAngle={-110}
                  endAngle={110}
                  value={college.chances}
                  min={0}
                  max={100}
                >
                  <GaugeReferenceArc />
                  <GaugeValueArc />
                  <GaugePointer />
                </GaugeContainer>

                <Typography align="center">{college.chances}% Chances</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions >
       
      </DialogActions>
    </Dialog>
  );
};

export default PredictionModal;
