import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  IconButton,
  Avatar,
  Input,
  TextField,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import Logo from '../../../../../public/assets/rudraksh-logo-1.png';

const DetailPageView = () => {
  const [comment, setComment] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
  const [formData, setFormData] = useState(null); // State for form data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get(`http://localhost:8000/api/records/detail?recordId=${id}`) // Replace with your actual API endpoint and record ID
      .then((response) => {
        setFormData(response.data.filePaths[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  const handleBack = () => {
    navigate('/admin/doc-management');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // Optionally send the updated data back to the server
    axios
      .put(`http://localhost:8000/api/records/detail?recordId=${formData.id}`, formData)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  
  // const handleDownload = () => {
  //   const doc = new jsPDF();
  //   let y = 70; // Starting position for text after the logo
  //   const lineHeight = 10;
  //   const pageHeight = doc.internal.pageSize.height;
  //   const pageWidth = doc.internal.pageSize.width;
  //   const margin = 10;
  //   const maxWidth = pageWidth - 2 * margin;
  
  //   // Add the logo
  //   doc.addImage(Logo, 'jpg', 20, 10, 30, 30);
  
  //   // Add header
  //   doc.setFont('helvetica', 'bold');
  //   doc.setFontSize(22);
  //   doc.text('Land Records Management', pageWidth - 40, 20, { align: 'right' });
  
  //   doc.setDrawColor(0, 0, 255);
  //   doc.line(margin, 50, pageWidth - margin, 50);
  
  //   // Add the title
  //   doc.setFontSize(16);
  //   doc.setTextColor('black');
  //   doc.text('User Details', pageWidth / 2, 60, { align: 'center' });
  
  //   const details = [
  //     `Farmer Name - ${formData.farmerName}`,
  //     `Khasra Number - ${formData.khasraNumber}`,
  //     `Farmer Number - ${formData.farmerMobile}`,
  //     `Plot Number - ${formData.plotNumber}`,
  //     `Farmer Email - ${formData.farmerEmail}`,
  //     `Village Name - ${formData.villageName}`,
  //     `Date of Upload - ${formData.uploadDate}`,
  //   ];
  
  //   details.forEach((detail) => {
  //     if (y + lineHeight > pageHeight - 30) {
  //       doc.addPage();
  //       y = 20; // Reset y position on a new page
  //     }
  //     doc.text(detail, margin, y);
  //     y += lineHeight;
  //   });
  
  //   // Save the PDF
  //   doc.save('RecordDetails.pdf');
  // };
  

  const handleDownload = () => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 15;
    let y = 70; // Starting position for text after the header
  
    // Add the logo
    doc.addImage(Logo, 'jpg', margin, 10, 30, 30); // Adjust the position of the logo
  
    // Add header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('Land Records Management', pageWidth - margin, 20, { align: 'right' });
  
    // Add a dividing line under the header
    doc.setDrawColor(0, 0, 255); // Blue color
    doc.setLineWidth(1.5);
    doc.line(margin, 50, pageWidth - margin, 50); // Draw the line under the header
  
    // Add the title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black color
    doc.text('User Details', pageWidth / 2, 60, { align: 'center' });
  
    // Create a formatted table layout for the details
    const details = [
      { label: 'Farmer Name', value: formData.farmerName },
      { label: 'Khasra Number', value: formData.khasraNumber },
      { label: 'Farmer Number', value: formData.farmerMobile },
      { label: 'Plot Number', value: formData.plotNumber },
      { label: 'Farmer Email', value: formData.farmerEmail },
      { label: 'Village Name', value: formData.villageName },
      { label: 'Date of Upload', value: formData.uploadDate },
    ];
  
    const tableStartY = y + 10;
    let currentY = tableStartY;
    const labelX = margin;
    const valueX = 80; // Align values starting at 80px
  
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
  
    details.forEach((detail, index) => {
      if (currentY + lineHeight > pageHeight - 20) {
        doc.addPage(); // Add a new page if we reach the bottom of the current page
        currentY = 20; // Reset Y position on new page
      }
  
      // Draw label and value as part of a table row
      doc.text(detail.label + ':', labelX, currentY);
      doc.text(detail.value || 'N/A', valueX, currentY);
  
      // Add horizontal lines between rows for a table-like appearance
      doc.setDrawColor(200, 200, 200); // Light gray line
      doc.line(labelX, currentY + 2, pageWidth - margin, currentY + 2); // Line under each detail row
  
      currentY += lineHeight; // Move to the next row position
    });
  
    // Add footer with page number
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }
  
    // Save the PDF
    doc.save('RecordDetails.pdf');
  };
  
   
  console.log(formData, 'tum kya jaano');

  return (
    <Paper
      elevation={5}
      sx={{
        padding: 3,
        borderRadius: 2,
        margin: 'auto',
        backgroundColor: '#fff',
        maxWidth: 900,
      }}
    >
      {/* Back and Refresh Buttons */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <IconButton onClick={handleBack} sx={{ color: '#1976d2' }}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleRefresh} sx={{ color: '#1976d2' }}>
          <RefreshIcon />
        </IconButton>
      </Box>

      {/* Main Section */}
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: '#ffcccb', marginRight: 2 }}>
            {formData?.recordId && formData.recordId.charAt(0)}
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {formData?.recordId || 'Farmer Name'}
          </Typography>
        </Box>
        <Box>
          {isEditMode ? (
            <Button
              variant="contained"
              color="success"
              onClick={handleSave}
              startIcon={<CheckIcon />}
            >
              Save
            </Button>
          ) : (
            <IconButton sx={{ bgcolor: '#e3f2fd', marginRight: 1 }} onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton sx={{ bgcolor: '#ffebee', marginRight: 1 }}>
            <DeleteIcon color="error" />
          </IconButton>
          {/* <Button sx={{ marginLeft: 1 }} variant="outlined" color="secondary">
            View Activity
          </Button> */}

          <Button
            onClick={handleDownload}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Download PDF
          </Button>
        </Box>
      </Box>

      {/* General Information */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        General Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Farmer Name"
              name="farmerName"
              value={formData.farmerName}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Farmer Name:</b> {formData.farmerName}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Khasra Number"
              name="khasraNumber"
              value={formData.khasraNumber}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Khasra Number:</b> {formData.khasraNumber}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Farmer Number"
              name="farmerMobile"
              value={formData.farmerMobile}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Farmer Number:</b> {formData.farmerMobile}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Plot Number"
              name="plotNumber"
              value={formData.plotNumber}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Plot Number:</b> {formData.plotNumber}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Farmer Email"
              name="farmerEmail"
              value={formData.farmerEmail}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Farmer Email:</b> {formData.farmerEmail}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Buyer Name"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b> Buyer Name:</b> {formData.buyerName}
            </Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Village Name"
              name="villageName"
              value={formData.villageName}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Village Name:</b> {formData.villageName}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mt: 5, mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Date of Upload"
              name="uploadDate"
              value={formData.uploadDate}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Date of Upload:</b> {formData.uploadDate}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Date of Upload"
              name="uploadDate"
              value={formData.uploadDate}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Uploaded By:</b> {formData.uploadDate}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Date of Upload"
              name="uploadDate"
              value={formData.uploadDate}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Updated At:</b> {formData.uploadDate}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          {isEditMode ? (
            <TextField
              label="Date of Upload"
              name="uploadDate"
              value={formData.uploadDate}
              onChange={handleChange}
              fullWidth
            />
          ) : (
            <Typography>
              <b>Updated By:</b> {formData.uploadDate}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Box mt={4}>
        <Button
          variant="contained"
          fullWidth
          sx={{ mb: 2 }}
          startIcon={<VisibilityIcon />}
          onClick={() => navigate(`/admin/view-records/${formData.recordId}`)}
        >
          View Documents
        </Button>
        {/* <Grid item xs={12}>
            <Button variant="contained" component="label" fullWidth startIcon={<CloudUploadIcon />}>
              Upload Documents
              <Input type="file" multiple onChange={handleFileUpload} sx={{ display: 'none' }} />
            </Button>
            {uploadedFiles.length > 0 && (
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                {uploadedFiles.length} file(s) selected
              </Typography>
            )}
          </Grid> */}
      </Box>
    </Paper>
  );
  }

export default DetailPageView;
