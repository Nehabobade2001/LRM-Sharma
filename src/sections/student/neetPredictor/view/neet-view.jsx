import { Box, Card, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputFields from '../InputFields';
import PredictionModal from '../PredictionModal';

const NeetPredictorPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [predictionData, setPredictionData] = useState(null);

  // Handle modal open/close
  const handleModalClose = () => setOpenModal(false);
  const handleFormSubmit = (data) => {
    // Simulate prediction calculation
    const predictedRank = Math.floor(1000 + Math.random() * 9000); // Example logic for prediction
    const colleges = [
      { name: 'ABC Medical College', location: 'Delhi', type: 'Government', chances: 85 },
      { name: 'XYZ Medical College', location: 'Mumbai', type: 'Private', chances: 65 },
      { name: 'LMN Medical College', location: 'Chennai', type: 'Deemed', chances: 45 },
    ];

    setPredictionData({ rank: predictedRank, colleges });
    setOpenModal(true);
  };

  return (
    <Container>
    <Card sx={{ marginTop: 4 , p:3}}>
      {/* <Typography variant="h4" align="center" gutterBottom>
        NEET Rank Predictor Tool
      </Typography> */}
      <InputFields onFormSubmit={handleFormSubmit} />
      {predictionData && (
          <PredictionModal
            open={openModal}
            onClose={handleModalClose}
            predictionData={predictionData}
          />
        )}
    </Card>
  </Container>
  );
};

export default NeetPredictorPage;
