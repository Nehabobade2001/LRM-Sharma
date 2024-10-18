// src/Roadmap.js

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Roadmap = () => {
  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>
        Follow Our Counselling Roadmap
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {/* Replace this with a custom graphic or an image for the roadmap */}
          <img src="/assets/mbbs-logo-nav.webp" alt="NEET Roadmap" style={{ width: '30%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Roadmap;
