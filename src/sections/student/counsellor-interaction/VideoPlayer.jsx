// src/VideoPlayer.js

import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mui/material';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <Box>
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </Box>
  );
};

export default VideoPlayer;
