
import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Switch, Button, Box, Alert, AlertTitle } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BackupIcon from '@mui/icons-material/Backup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ErrorIcon from '@mui/icons-material/Error';

const NotificationView = () => {
  const [updatesEnabled, setUpdatesEnabled] = useState(false);
  const [largeUploadAlert, setLargeUploadAlert] = useState(false);
  const [loginAttemptsAlert, setLoginAttemptsAlert] = useState(false);
  const [documentDeletionsAlert, setDocumentDeletionsAlert] = useState(false);

  const handleToggle = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        System Notifications & Alerts
      </Typography>
      <Grid container spacing={3}>
        {/* System Updates */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <NotificationsIcon color="primary" sx={{ marginRight: 2 }} />
                <Typography variant="h6">System Updates / Backups</Typography>
              </Box>
              <Switch
                checked={updatesEnabled}
                onChange={() => handleToggle(setUpdatesEnabled)}
              />
            </Grid>
            {updatesEnabled && (
              <Alert severity="info" sx={{ marginTop: 2 }}>
                <AlertTitle>System Update Enabled</AlertTitle>
                You will receive notifications for system updates and backups.
              </Alert>
            )}
          </Paper>
        </Grid>

        {/* Large Document Uploads */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <CloudUploadIcon color="secondary" sx={{ marginRight: 2 }} />
                <Typography variant="h6">Large Document Uploads</Typography>
              </Box>
              <Switch
                checked={largeUploadAlert}
                onChange={() => handleToggle(setLargeUploadAlert)}
              />
            </Grid>
            {largeUploadAlert && (
              <Alert severity="warning" sx={{ marginTop: 2 }}>
                <AlertTitle>Large Upload Alert Enabled</AlertTitle>
                Notifications will be sent for any large document uploads.
              </Alert>
            )}
          </Paper>
        </Grid>

        {/* Multiple Failed Login Attempts */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <ErrorIcon color="error" sx={{ marginRight: 2 }} />
                <Typography variant="h6">Multiple Failed Login Attempts</Typography>
              </Box>
              <Switch
                checked={loginAttemptsAlert}
                onChange={() => handleToggle(setLoginAttemptsAlert)}
              />
            </Grid>
            {loginAttemptsAlert && (
              <Alert severity="error" sx={{ marginTop: 2 }}>
                <AlertTitle>Failed Login Alert Enabled</AlertTitle>
                Admin will be alerted for unusual login activities.
              </Alert>
            )}
          </Paper>
        </Grid>

        {/* Large Document Deletions */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <BackupIcon color="success" sx={{ marginRight: 2 }} />
                <Typography variant="h6">Large Document Deletions</Typography>
              </Box>
              <Switch
                checked={documentDeletionsAlert}
                onChange={() => handleToggle(setDocumentDeletionsAlert)}
              />
            </Grid>
            {documentDeletionsAlert && (
              <Alert severity="warning" sx={{ marginTop: 2 }}>
                <AlertTitle>Document Deletion Alert Enabled</AlertTitle>
                Admin will be alerted when large numbers of documents are deleted.
              </Alert>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Button variant="contained" color="primary">
              Save Notification Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotificationView ;
