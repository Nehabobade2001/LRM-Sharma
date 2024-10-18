// import React, { useState } from 'react';
// import { Box, Grid, Typography, Paper, Button, IconButton, Avatar, Input } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon
// import RefreshIcon from '@mui/icons-material/Refresh'; // Refresh icon
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckIcon from '@mui/icons-material/Check';
// import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CommentIcon from '@mui/icons-material/Comment';
// import { Link } from 'react-router-dom';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const DetailUserView = () => {
//   const [comment, setComment] = useState('');
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files); // Convert file list to an arra
//     setUploadedFiles(files); // Store the selected files
//   };

//   const handleBack = () => {
//     console.log("Go back");
//     // Add your back navigation logic here
//   };

//   const handleRefresh = () => {
//     console.log("Refresh page");
//     // Add your refresh logic here
//     window.location.reload(); // Example: reload the page
//   };

//   const handleUpdate = () => {
//     // Logic for updating the report
//     alert("Update functionality is not implemented yet.");
//   };

//   return (
//     <Paper
//       elevation={5}
//       sx={{
//         padding: 3,
//         borderRadius: 2,
//         margin: 'auto',
//         backgroundColor: '#fff',
//         maxWidth: 900,
//       }}
//     >
//       {/* Back and Refresh Buttons */}
//       <Box display="flex" justifyContent="space-between" mb={2}>
//         <IconButton onClick={handleBack} sx={{ color: '#1976d2' }}>
//           <ArrowBackIcon />
//         </IconButton>
//         <IconButton onClick={handleRefresh} sx={{ color: '#1976d2' }}>
//           <RefreshIcon />
//         </IconButton>
//       </Box>

//       {/* Main Section */}
//       <Box display="flex" justifyContent="space-between">
//         <Box display="flex" alignItems="center">
//           <Avatar sx={{ bgcolor: '#ffcccb', marginRight: 2 }}>RV</Avatar>
//           <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//             Farmer Name
//           </Typography>
//         </Box>
//         <Box>
//           <IconButton sx={{ bgcolor: '#e3f2fd', marginRight: 1 }}>
//             <EditIcon />
//           </IconButton>
//           <IconButton sx={{ bgcolor: '#ffebee', marginRight: 1 }}>
//             <DeleteIcon color="error" />
//           </IconButton>
//           <IconButton sx={{ bgcolor: '#e8f5e9' }}>
//             <CheckIcon color="success" />
//           </IconButton>
//         </Box>
//       </Box>

//       <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
//         General Information
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <Typography><b>ID:</b> CL002189</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>User Name:</b> <a href="#">CMSND004630</a></Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>Full Name:</b> Ravi Verma</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>Email:</b> 8878739691</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>City:</b> Gwalior</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>State:</b> Madhya Pradesh</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>Role:</b>User</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>Delete Permision:</b> NA</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography><b>Update Permision:</b> NA</Typography>
//         </Grid>
//       </Grid>


//       {/* <Box mt={4}>
//         <Button variant="contained" fullWidth sx={{ mb: 2 }} startIcon={<VisibilityIcon />}>
//           <Link style={{ textDecoration: "none", color: "white" }} to="/admin/assessment-tool-setting">
//             View Documents
//           </Link>
//         </Button>
//         <Button variant="outlined" fullWidth sx={{ mb: 2 }} startIcon={<DriveFolderUploadIcon />}>
//           Upload Lokpal Documents
//         </Button>
//         <Grid item xs={12}>
//             <Button
//             sx={{ mb: 2 }}
//               variant="contained"
//               component="label"
//               startIcon={<CloudUploadIcon />}

//               fullWidth
//             >
//               Upload Documents
//               <Input type="file" multiple onChange={handleFileUpload} sx={{ display: 'none' }} />
//             </Button>
//             <Button
//             sx={{ mb: 2 }}
//               variant="contained"
//               component="label"
//               startIcon={<CloudUploadIcon />}

//               fullWidth
//             >
//               Other Documents
//               <Input type="file" multiple onChange={handleFileUpload} sx={{ display: 'none' }} />
//             </Button>
//             {uploadedFiles.length > 0 && (
//               <Typography variant="body2" sx={{ marginTop: 2 }}>
//                 {uploadedFiles.length} file(s) selected
//               </Typography>
//             )}
//           </Grid>
//         <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={handleUpdate}>
//           Update
//         </Button>
//       </Box> */}
//     </Paper>
//   );
// };

// export default DetailUserView;

import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, Button, IconButton, Avatar, Input } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon
import RefreshIcon from '@mui/icons-material/Refresh'; // Refresh icon
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useParams } from 'react-router-dom'; 
import axios from 'axios'
import {Link} from 'react-router-dom'

const DetailUserView = () => {
    const { id } = useParams(); // Get the ID from URL parameters
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`https://lrm-backend.onrender.com/api/v1/admin/user-details?id=${id}`);
                const data = await response.json();
                setUserDetails(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user details:", error);
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [id]);

    const handleBack = () => {
      navigate('/admin/user-management')
        // Add your back navigation logic here
    };

    const handleRefresh = () => {
        window.location.reload(); // Reload the page to refresh
    };

    if (loading) {
        return <Typography>Loading...</Typography>; // Loading state
    }

    if (!userDetails) {
        return <Typography>No user details found</Typography>; // Error or no data state
    }


    const toggleDeletePermission = async() => {
        try {
            const response = await axios.post(`http://localhost:8000/api/admin/update-permision?id=${userDetails.id}`,);
            if (response.data.success === true) {
                setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    canDelete: !prevDetails.canDelete,
                }));
            } else {
                alert('Failed to update delete permission.');
            }
        } catch (error) {
            console.error('Error updating permission:', error);

        }
    };

    const toggleEditPermission = async() => {
        
        try {
            const response = await axios.post(`https://lrm-backend.onrender.com/api/admin/update-permision2?id=${userDetails.id}`,);
            if (response.data.success === true) {
                setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    canUpdate: !prevDetails.canUpdate,
                }));
            } else {
                alert('Failed to update delete permission.');
            }
        } catch (error) {
            console.error('Error updating permission:', error);

        }
    };

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
                <IconButton  sx={{ color: '#1976d2' }}>
                    <Link to="/admin/user-management">
                    <ArrowBackIcon />
                    </Link>
                </IconButton>
                <IconButton onClick={handleRefresh} sx={{ color: '#1976d2' }}>
                    <RefreshIcon />
                </IconButton>
            </Box>

            {/* Main Section */}
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                    <Avatar sx={{ bgcolor: '#ffcccb', marginRight: 2 }}>{userDetails.firstname[0]}{userDetails.lastname[0]}</Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {userDetails.firstname} {userDetails.lastname}
                    </Typography>
                </Box>
                <Box>
                    <IconButton sx={{ bgcolor: '#e3f2fd', marginRight: 1 }} disabled={!userDetails.canUpdate}>
                        <EditIcon />
                    </IconButton>
                    <IconButton sx={{ bgcolor: '#ffebee', marginRight: 1 }} disabled={!userDetails.canDelete}>
                        <DeleteIcon color="error" />
                    </IconButton>
                    <Button
                        sx={{ marginLeft: 1 }}
                        variant="outlined"
                        color={userDetails.canDelete ? "error" : "primary"}
                        onClick={toggleDeletePermission}
                    >
                        {userDetails.canDelete ? "Remove Delete Permission" : "Give Delete Permission"}
                    </Button>
                    <Button
                        sx={{ marginLeft: 1 }}
                        variant="outlined"
                        color={userDetails.canUpdate ? "error" : "primary"}
                        onClick={toggleEditPermission}
                    >
                        {userDetails.canUpdate ? "Remove Edit Permission" : "Give Edit Permission"}
                    </Button>

                    <Button sx={{ marginLeft: 1 }} variant="outlined" color="secondary">
                        View Activity
                    </Button>

                </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                General Information
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography><b>ID:</b> {userDetails.id}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>User Name:</b> {userDetails.username}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>Full Name:</b> {userDetails.firstname} {userDetails.lastname}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>Email:</b> {userDetails.email}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>City:</b> {userDetails.city}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>State:</b> {userDetails.state}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>Role:</b> {userDetails.role}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>Delete Permission:</b> {userDetails.canDelete ? "Yes" : "No"}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography><b>Update Permission:</b> {userDetails.canUpdate ? "Yes" : "No"}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default DetailUserView;
