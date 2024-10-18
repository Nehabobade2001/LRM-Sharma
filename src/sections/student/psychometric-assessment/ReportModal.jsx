import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ResultChart from './ResultChart';
import { useWindowSize } from 'react-use';

const ReportModal = ({ answers }) => {
    const { width, height } = useWindowSize();
  return (
    <Box p={4}>
         <Confetti width={width} height={height} />
      <Typography variant="h5" align="center" gutterBottom>
        Your Psychometric Assessment Results
      </Typography>
      <Divider />
      <Box my={4}>
        <Typography variant="h6">Predicted Career Preferences:</Typography>
        <ResultChart />
        <Typography variant="body1">
          Based on your answers, you are best suited for specialties such as Surgery and Pediatrics.
        </Typography>
      </Box>
    </Box>
  );
};

export default ReportModal;
