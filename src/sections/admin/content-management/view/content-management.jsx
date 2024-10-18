
import React, { useState } from 'react';
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
} from '@mui/material';
import { Add, Edit, Delete, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ContentManagementView = () => {
  // State management
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', khasraNumber: '123456', villageName: 'Village A', plotNumber: 'P1' },
    {
      id: 2,
      name: 'Jane Smith',
      khasraNumber: '654321',
      villageName: 'Village B',
      plotNumber: 'P2',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      khasraNumber: '789012',
      villageName: 'Village C',
      plotNumber: 'P3',
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClickOpen = (user = null) => {
    setCurrentUser(user || { name: '', khasraNumber: '', villageName: '', plotNumber: '' });
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setCurrentUser(null);
  };

  const handleSave = () => {
    if (currentUser.id) {
      // Edit existing user
      setUsers((prev) => prev.map((user) => (user.id === currentUser.id ? currentUser : user)));
    } else {
      // Add new user
      const newUser = { ...currentUser, id: Date.now() };
      setUsers((prev) => [...prev, newUser]);
    }
    handleClose();
    setSnackbarOpen(true);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setSnackbarOpen(true);
  };

  // Search functionality
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.khasraNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.villageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.plotNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        User Management
      </Typography>
      
      {/* Buttons row for Add User and Search */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => handleClickOpen()}
            sx={{ mr: 1 }}
          >
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/profile">
              Create User
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
          
          {/* Search Button */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Search />}
            onClick={() => {}}
            size="small"
          >
            Search
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="user management table">
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
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.khasraNumber}</TableCell>
                  <TableCell>{user.villageName}</TableCell>
                  <TableCell>{user.plotNumber}</TableCell>
                  
                  {/* View Button placed properly in the table */}
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ textTransform: 'none' }}
                    >
                      <Link
                        to="/admin/assessment-tool-setting"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        View
                      </Link>
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    <IconButton onClick={() => handleClickOpen(user)} color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(user.id)} color="secondary">
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
      </TableContainer>

      {/* Dialog for Adding/Editing User */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{currentUser?.id ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Farmer Name"
            fullWidth
            variant="outlined"
            value={currentUser?.name || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
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
        message={currentUser?.id ? 'User updated successfully!' : 'User added successfully!'}
      />
    </Box>
  );
};

export default ContentManagementView;