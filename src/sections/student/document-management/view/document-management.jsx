

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   IconButton,
//   Snackbar,
// } from '@mui/material';
// import { Add, Edit, Delete, Search } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';

// const DocumentManagementView = () => {
//   // State management
//   const [records, setRecords] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//  const navigate = useNavigate()
//   // Fetch records from API when component mounts
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/v1/records');
//         setRecords(response.data.record);
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       }
//     };

//     fetchRecords();
//   }, []);

//   const handleClickOpen = (user = null) => {
//     setCurrentUser(user || { farmerName: '', khasraNumber: '', villageName: '', plotNumber: '' });
//     setOpenDialog(true);
//   };

//   const  handleClick = (user)=>{
//       navigate(`/admin/detail-page/${user.id}`)
//   } 

//   const handleClose = () => {
//     setOpenDialog(false);
//     setCurrentUser(null);
//   };

//   const handleSave = () => {
//     if (currentUser.id) {
//       // Edit existing user
//       setRecords((prev) => prev.map((user) => (user.id === currentUser.id ? currentUser : user)));
//     } else {
//       // Add new user
//       const newUser = { ...currentUser, id: Date.now() };
//       setRecords((prev) => [...prev, newUser]);
//     }
//     handleClose();
//     setSnackbarOpen(true);
//   };

//   const handleDelete = (id) => {
//     setRecords((prev) => prev.filter((user) => user.id !== id));
//     setSnackbarOpen(true);
//   };

//   // Search functionality
//   const filteredRecords = records.filter(
//     (user) =>
//       user.farmerName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.khasraNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.villageName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.plotNumber?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   console.log(records,"Records")
//   return (
//     <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
//         Document Management
//       </Typography>
      
//       {/* Buttons row for Add User and Search */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//         <Box sx={{ display: 'flex' }}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<Add />}
//             // onClick={() => handleClickOpen()}
//             sx={{ mr: 1 }}
//           >
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/admin/upload-record">
//               Add New Record
//             </Link>
//           </Button>

//           {/* Search Input */}
//           <TextField
//             label="Search"
//             variant="outlined"
//             size="small"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             sx={{ mr: 1 }}
//           />

//           {/* Search Button */}
//           <Button
//             variant="contained"
//             color="secondary"
//             startIcon={<Search />}
//             size="small"
//           >
//             Search
//           </Button>
//         </Box>
//       </Box>

//       <TableContainer component={Paper}>
//         <Table aria-label="document management table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Farmer Name</TableCell>
//               <TableCell>Khasra Number</TableCell>
//               <TableCell>Village Name</TableCell>
//               <TableCell>Plot Number</TableCell>
//               <TableCell>View Doc</TableCell>
//               <TableCell align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRecords.length > 0 ? (
//               filteredRecords.map((user) => (
//                 <TableRow key={user.id} >
//                   <TableCell>{user.farmerName}</TableCell>
//                   <TableCell>{user.khasraNumber}</TableCell>
//                   <TableCell>{user.villageName}</TableCell>
//                   <TableCell>{user.plotNumber}</TableCell>

//                   {/* View Button */}
//                   <TableCell>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       size="small"
//                       onClick={() => handleClick(user)}
//                       sx={{ textTransform: 'none' }}
//                     >
                      
//                         View
                      
//                     </Button>
//                   </TableCell>

//                   <TableCell align="center">
//                     <IconButton onClick={() => handleClickOpen(user)} color="primary">
//                       <Edit />
//                     </IconButton>
//                     <IconButton onClick={() => handleDelete(user.id)} color="secondary">
//                       <Delete />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={6} align="center">
//                   No records found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Dialog for Adding/Editing Record */}
//       <Dialog open={openDialog} onClose={handleClose}>
//         <DialogTitle>{currentUser?.id ? 'Edit Record' : 'Add Record'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Farmer Name"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.farmerName || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, farmerName: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Khasra Number"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.khasraNumber || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, khasraNumber: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Village Name"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.villageName || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, villageName: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Plot Number"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.plotNumber || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, plotNumber: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSave} color="primary">
//             {currentUser?.id ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for Notifications */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={() => setSnackbarOpen(false)}
//         message={currentUser?.id ? 'Record updated successfully!' : 'Record added successfully!'}
//       />
//     </Box>
//   );
// };

// export default DocumentManagementView;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Snackbar,
  TablePagination,
} from '@mui/material';
import { Add, Edit, Delete, Search } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const DocumentManagementView = () => {
  // State management
  const [records, setRecords] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);  // Pagination state for current page
  const [rowsPerPage, setRowsPerPage] = useState(5);  // Pagination state for rows per page
  const navigate = useNavigate();

  // Fetch records from API when component mounts
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('https://lrm-backend.onrender.com/api/v1/records');
        setRecords(response.data.record);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };
    fetchRecords();
  }, []);

  // Open dialog for add/edit
  const handleClickOpen = (user = null) => {
    setCurrentUser(user || { farmerName: '', khasraNumber: '', villageName: '', plotNumber: '' });
    setOpenDialog(true);
  };

  // Navigate to the detail page on row click
  const handleClick = (user) => {
    navigate(`/admin/detail-page/${user.id}`);
  };

  // Close dialog
  const handleClose = () => {
    setOpenDialog(false);
    setCurrentUser(null);
  };

  // Save record (either add new or edit existing)
  const handleSave = () => {
    if (currentUser.id) {
      setRecords((prev) => prev.map((user) => (user.id === currentUser.id ? currentUser : user)));
    } else {
      const newUser = { ...currentUser, id: Date.now() };
      setRecords((prev) => [...prev, newUser]);
    }
    handleClose();
    setSnackbarOpen(true);
  };

  // Delete a record
  const handleDelete = (id) => {
    setRecords((prev) => prev.filter((user) => user.id !== id));
    setSnackbarOpen(true);
  };

  // Filter records based on search query
  const filteredRecords = records.filter(
    (user) =>
      user.farmerName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.khasraNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.villageName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.plotNumber?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle page change for pagination
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change for pagination
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate the filtered records based on page and rows per page
  const paginatedRecords = filteredRecords.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Document Management
      </Typography>

      {/* Buttons row for Add Record and Search */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
          position: 'sticky',
          top: 0,
          backgroundColor: '#f9fafb',
          zIndex: 1,
          pb: 2, // Add some padding to create space between search bar and table
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Button variant="contained" color="primary" startIcon={<Add />} sx={{ mr: 1 }}>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/admin/upload-record">
              Add New Record
            </Link>
          </Button>

          {/* Search Input */}
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mr: 1 }}
          />
          <Button variant="contained" color="secondary" startIcon={<Search />} size="small">
            Search
          </Button>
        </Box>
      </Box>

      {/* Table with paginated data */}
      <TableContainer component={Paper}>
        <Table aria-label="document management table">
          <TableHead>
            <TableRow>
              <TableCell>Farmer Name</TableCell>
              <TableCell>Khasra Number</TableCell>
              <TableCell>Village Name</TableCell>
              <TableCell>Plot Number</TableCell>
              <TableCell>View Doc</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRecords.length > 0 ? (
              paginatedRecords.map((user) => (
                <TableRow key={user.id} hover onClick={() => handleClick(user)}>
                  <TableCell>{user.farmerName}</TableCell>
                  <TableCell>{user.khasraNumber}</TableCell>
                  <TableCell>{user.villageName}</TableCell>
                  <TableCell>{user.plotNumber}</TableCell>

                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(user);
                      }}
                      sx={{ textTransform: 'none' }}
                    >
                      View
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClickOpen(user);
                      }}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(user.id);
                      }}
                      color="secondary"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination Component */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRecords.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>

      {/* Dialog for Adding/Editing Record */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{currentUser?.id ? 'Edit Record' : 'Add Record'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Farmer Name"
            fullWidth
            variant="outlined"
            value={currentUser?.farmerName || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, farmerName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Khasra Number"
            fullWidth
            variant="outlined"
            value={currentUser?.khasraNumber || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, khasraNumber: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Village Name"
            fullWidth
            variant="outlined"
            value={currentUser?.villageName || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, villageName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Plot Number"
            fullWidth
            variant="outlined"
            value={currentUser?.plotNumber || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, plotNumber: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {currentUser?.id ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={currentUser?.id ? 'Record updated successfully!' : 'Record added successfully!'}
      />
    </Box>
  );
};

export default DocumentManagementView;
