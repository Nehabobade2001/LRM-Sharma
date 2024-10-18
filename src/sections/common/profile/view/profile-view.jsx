
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { 
    Box, 
    Button, 
    Grid, 
    TextField, 
    Typography, 
    Input, 
    InputLabel, 
    FormControl,
    CircularProgress ,
    Select ,
    MenuItem
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProfilePage = () => {
    const user = useSelector((state) => state.user.user);
    const [formData, setFormData] = useState({
        farmerName: '',
        farmerEmail: '',
        farmerMobile: '',
        buyerName:'',
        khasraNumber: '',
        villageName: '',
        plotNumber: '',
        userId:user.id, 
    });
    const [loading, setLoading] = useState(false);
    const [registryPaper, setRegistryPaper] = useState(null); // To store registry_papers file
    const [otherDocs, setOtherDocs] = useState(null); // To store other_docs file
    const toast = useToast();
    const navigate = useNavigate();

    // Form validation
    const validate = () => {
        if (!formData.farmerName) return 'Farmer Name is required';
        if (!formData.farmerMobile || formData.farmerMobile.length !== 10) return 'Valid Farmer Mobile Number is required';
        if (!formData.khasraNumber) return 'Khasra Number is required';
        if (!formData.villageName) return 'Village Name is required';
        return null;
    };

    // Handle text input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle file uploads
    const handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        if (type === 'registry_papers') setRegistryPaper(file);
        if (type === 'other_docs') setOtherDocs(file);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMessage = validate();
        if (errorMessage) {
            toast({
                title: "Validation Error",
                description: errorMessage,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right"
            });
            return;
        }

        setLoading(true);

        try {
            const formDataWithFiles = new FormData();
            formDataWithFiles.append('userId', formData.userId);
            formDataWithFiles.append('farmerName', formData.farmerName);
            formDataWithFiles.append('farmerEmail', formData.farmerEmail);
            formDataWithFiles.append('farmerMobile', formData.farmerMobile);
            formDataWithFiles.append('buyerName', formData.buyerName);
            formDataWithFiles.append('khasraNumber', formData.khasraNumber);
            formDataWithFiles.append('villageName', formData.villageName);
            formDataWithFiles.append('plotNumber', formData.plotNumber);
            if (registryPaper) formDataWithFiles.append('registry_papers', registryPaper);
            if (otherDocs) formDataWithFiles.append('other_docs', otherDocs);

            const response = await axios.post('http://localhost:8000/api/v1/add-record', formDataWithFiles, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            toast({
                title: "Success",
                description: "Files uploaded successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right"
            });
            navigate('/admin/doc-management');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Submission Error",
                description: error.response?.data?.message || 'An error occurred',
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box 
            sx={{ 
                maxWidth: '800px', 
                margin: 'auto', 
                padding: '30px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)', 
                borderRadius: '10px',
                backgroundColor: '#fff' 
            }}
        >
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Add New Record
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Farmer Name *"
                            name="farmerName"
                            fullWidth
                            value={formData.farmerName}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Khasra Number *"
                            name="khasraNumber"
                            fullWidth
                            value={formData.khasraNumber}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Farmer Email"
                            name="farmerEmail"
                            fullWidth
                            value={formData.farmerEmail}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Farmer Mobile Number *"
                            name="farmerMobile"
                            fullWidth
                            value={formData.farmerMobile}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Village Name *"
                            name="villageName"
                            fullWidth
                            value={formData.villageName}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Plot Number"
                            name="plotNumber"
                            fullWidth
                            value={formData.plotNumber}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Buyer Name *</InputLabel>
                            <Select
                                label="Buyer Name *"
                                name="buyerName"
                                value={formData.buyerName}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="Buyer 1">Buyer 1</MenuItem>
                                <MenuItem value="Buyer 2">Buyer 2</MenuItem>
                                <MenuItem value="Buyer 3">Buyer 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* File Upload Section for registry_papers */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            fullWidth
                        >
                            Upload Registry Papers
                            <Input
                                type="file"
                                onChange={(e) => handleFileUpload(e, 'registry_papers')}
                                sx={{ display: 'none' }}
                            />
                        </Button>
                        {registryPaper && (
                            <Typography variant="body2" sx={{ marginTop: 2 }}>
                                {registryPaper.name}
                            </Typography>
                        )}
                    </Grid>

                    {/* File Upload Section for other_docs */}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            fullWidth
                        >
                            Upload Other Documents
                            <Input
                                type="file"
                                onChange={(e) => handleFileUpload(e, 'other_docs')}
                                sx={{ display: 'none' }}
                            />
                        </Button>
                        {otherDocs && (
                            <Typography variant="body2" sx={{ marginTop: 2 }}>
                                {otherDocs.name}
                            </Typography>
                        )}
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button 
                            type="submit" 
                            fullWidth 
                            variant="contained" 
                            color="primary"
                            disabled={loading}
                            sx={{ padding: '10px', fontSize: '16px' }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Save'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ProfilePage;
