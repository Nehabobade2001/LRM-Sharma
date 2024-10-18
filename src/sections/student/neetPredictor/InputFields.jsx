



import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Paper,
  Avatar,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Import icon

const InputFields = () => {
  const [role, setRole] = useState('User'); // Default role
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminLevel, setAdminLevel] = useState(''); // Extra field for Admin

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      role,
      username,
      email,
      password,
      ...(role === 'Admin' && { adminLevel }), // Include extra field for Admin if applicable
    };
    console.log(formData);
    // Perform form submission or API call here
  };

  return (
    <Paper
      elevation={10}
      sx={{
        padding: 4,
        borderRadius: 2,
        maxWidth: 400,
        margin: 'auto',
        background: 'linear-gradient(to right, #ffffff, #f0f4ff)',
      }}
    >
      <Avatar
        sx={{
          backgroundColor: '#1976d2',
          margin: 'auto',
          width: 56,
          height: 56,
        }}
      >
        <PersonAddIcon sx={{ fontSize: 30 }} />
      </Avatar>
      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', marginTop: 2 }}>
        Create User
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Role</InputLabel>
              <Select value={role} onChange={(e) => setRole(e.target.value)} label="Role">
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </Grid>

          {role === 'Admin' && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Admin Access Level"
                variant="outlined"
                value={adminLevel}
                onChange={(e) => setAdminLevel(e.target.value)}
                required
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#115293', // Darker shade for hover
                },
                padding: 1.5,
                fontWeight: 'bold',
              }}
            >
              Create User
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default InputFields;



