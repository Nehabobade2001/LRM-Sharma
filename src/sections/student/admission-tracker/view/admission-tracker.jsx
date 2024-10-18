import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton } from '@mui/material';
import { CloudUpload, Edit } from '@mui/icons-material';

const AdmissionTrackerPage = () => {
  // Sample data for tracking the admission process
  const [colleges, setColleges] = useState([
    { id: 1, name: 'Harvard Medical School', status: 'In Progress', deadline: '2024-11-30', documents: ['Transcript', 'Recommendation Letter'] },
    { id: 2, name: 'Stanford Medical School', status: 'Submitted', deadline: '2024-10-15', documents: ['Essay', 'Resume'] },
    { id: 3, name: 'Johns Hopkins University', status: 'Accepted', deadline: '2024-09-25', documents: ['Application Form', 'Fee Payment'] }
  ]);

  // Handle document upload
  const handleUpload = (collegeId) => {
    console.log(`Upload document for college with ID: ${collegeId}`);
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Admission Tracker
      </Typography>

      {/* Admission Tracking Table */}
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table aria-label="admission tracker table">
          <TableHead>
            <TableRow>
              <TableCell>College Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Deadline</TableCell>
              <TableCell align="center">Documents</TableCell>
              <TableCell align="center">Upload Document</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colleges.map((college) => (
              <TableRow key={college.id}>
                <TableCell>{college.name}</TableCell>
                <TableCell align="center">{college.status}</TableCell>
                <TableCell align="center">{college.deadline}</TableCell>
                <TableCell align="center">
                  {college.documents.map((doc, index) => (
                    <Typography key={index}>{doc}</Typography>
                  ))}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleUpload(college.id)} color="primary">
                    <CloudUpload />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px', mx: 'auto' }}
      >
        <TextField label="Upload New Document" type="file" InputLabelProps={{ shrink: true }} />
        <Button variant="contained" color="primary" startIcon={<CloudUpload />} fullWidth>
          Upload Document
        </Button>
      </Box>
    </Box>
  );
};

export default AdmissionTrackerPage;
