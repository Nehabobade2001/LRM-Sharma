// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from '@mui/material';

// const ReportsAnalyticsView = () => {
//   const [reportType, setReportType] = useState('');
//   const [reports, setReports] = useState([]);

//   const handleGenerateReport = () => {
//     // Logic to generate report based on the selected report type
//     // For demonstration, we'll add dummy data to the reports state
//     const newReport = {
//       type: reportType,
//       data: Math.random() * 100, // Simulated data
//     };
//     setReports((prevReports) => [...prevReports, newReport]);
//     setReportType(''); // Reset the report type selection
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} md={6}>
//         <Box p={2}>
//           <Typography variant="h4" gutterBottom>
//             Reports & Analytics
//           </Typography>
//           <Select
//             fullWidth
//             value={reportType}
//             onChange={(e) => setReportType(e.target.value)}
//             displayEmpty
//             sx={{ marginBottom: 2 }}
//           >
//             <MenuItem value="">
//               <em>Select Report Type</em>
//             </MenuItem>
//             <MenuItem value="Student Interests">Student Interests</MenuItem>
//             <MenuItem value="Prediction Outcomes">Prediction Outcomes</MenuItem>
//             <MenuItem value="Admission Trends">Admission Trends</MenuItem>
//             <MenuItem value="Counsellor Performance">Counsellor Performance</MenuItem>
//             <MenuItem value="Manager Performance">Manager Performance</MenuItem>
//           </Select>
//           <Button variant="contained" color="primary" onClick={handleGenerateReport}>
//             Generate Report
//           </Button>
//         </Box>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <Box p={2}>
//           <Typography variant="h5" gutterBottom>
//             Generated Reports
//           </Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Report Type</TableCell>
//                   <TableCell>Data</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {reports.length === 0 ? (
//                   <TableRow>
//                     <TableCell colSpan={2} align="center">
//                       No reports generated yet.
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   reports.map((report, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{report.type}</TableCell>
//                       <TableCell>{report.data.toFixed(2)}</TableCell>
//                     </TableRow>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default ReportsAnalyticsView;



// import React, { useState, useEffect } from 'react';
// import SideBar from '../../Sidebars/Sidebar';

// // Utility function to format the date
// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// Sidebar Component
// const SideBar = () => (
//   <div className="w-80 h-screen bg-gray-100 border-r fixed">
//     <div className="flex items-center justify-center py-6">
//       {/* User Profile */}
//       <div className="text-center">
//         <img
//           src="https://via.placeholder.com/100" // Replace with actual image source
//           alt="User Avatar"
//           className="w-24 h-24 rounded-full mx-auto"
//         />
//         <p className="mt-4 font-semibold text-gray-700">Ravi Tiwari</p>
//         <p className="text-sm text-gray-500">HOD</p>
//       </div>
//     </div>

//     {/* Navigation Items */}
//     <nav className="px-4">
//       <ul>
//         <li className="py-2">
//           <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
//             <i className="fas fa-home mr-2"></i> Home
//           </a>
//         </li>
//         <li className="py-2">
//           <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
//             <i className="fas fa-envelope mr-2"></i> Enquiry
//           </a>
//         </li>
//         <li className="py-2">
//           <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
//             <i className="fas fa-folder-open mr-2"></i> Claims Master
//           </a>
//         </li>
//         <li className="py-2">
//           <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
//             <i className="fas fa-clipboard-list mr-2"></i> Registration
//           </a>
//         </li>
//         {/* Add other sidebar links */}
//       </ul>
//     </nav>
//   </div>
// );

// Component for rendering individual activity cards






// import React, { useState, useEffect } from 'react';


// // Utility function to format the date
// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const ActivityCard = ({ activity }) => (
//   <div
//     className={`p-4 my-2 rounded-lg shadow-md flex justify-between ${
//       activity.highlight ? 'bg-green-100' : 'bg-yellow-100'
//     }`}
//   >
//     {/* Left Section */}
//     <div>
//       <p className="font-bold text-2xl text-gray-800">{activity.name}</p>
//       <p className="text-sm text-gray-500">{activity.caseId}</p>
//     </div>

//     {/* Center Section */}
//     <div className="flex-1 text-center">
//       <p className="font-semibold text-xl text-yellow-700">{activity.description}</p>
//     </div>

//     {/* Right Section */}
//     <div className="text-right">
//       <p className="font-semibold text-2xl text-yellow-700">{activity.team}</p>
//       <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
//     </div>
//   </div>
// );

// // Main Component for Trails
// const ReportsAnalyticsView  = () => {
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       // Simulating a fetch request
//       const fetchedActivities = [
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Case Remark Updated/Added.', team: 'Operations Team', date: '2024-10-14T10:33:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Legal Downloaded.', team: 'Operations Team', date: '2024-10-14T10:18:00' },
//         { name: 'Ravi Tiwari', caseId: 'CN0100', description: 'HOD approval status updated - approved.', team: 'HOD', date: '2024-10-14T10:17:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Referred for Initial Opinion.', team: 'Operations Team', date: '2024-10-14T10:14:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Case Remark Updated/Added.', team: 'Operations Team', date: '2024-10-14T10:14:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Claim Registered.', team: 'Operations Team', date: '2024-10-14T10:13:00', highlight: true },
//       ];
//       setActivities(fetchedActivities);
//     };

//     fetchActivities();
//   }, []);

//   const handleBack = () => {
//     console.log('Go Back');
//   };

//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="flex">
      
//       <div className="ml-80 w-full p-40">
//         {/* Header with Back and Refresh Buttons */}
//         <div className="flex justify-between items-center mb-6">
//           <button onClick={handleBack} className="text-blue-600">
//             &larr; Back
//           </button>
//           <button onClick={handleRefresh} className="text-blue-600">
//             &#x21bb;
//           </button>
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities</h2>

//         {/* Activity Cards */}
//         {activities.length > 0 ? (
//           activities.map((activity, index) => (
//             <ActivityCard key={index} activity={activity} />
//           ))
//         ) : (
//           <p className="text-gray-500">No activities to display.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReportsAnalyticsView ;




// import React, { useState, useEffect } from 'react';

// // Utility function to format the date
// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// // Activity Card Component
// const ActivityCard = ({ activity }) => (
//   <div
//     className={`p-4 my-2 rounded-lg shadow-md flex justify-between items-center ${
//       activity.highlight ? 'bg-green-100' : 'bg-yellow-100'
//     }`}
//   >
//     {/* Left Section */}
//     <div>
//       <p className="font-bold text-2xl text-gray-800">{activity.name}</p>
//       <p className="text-sm text-gray-500">{activity.caseId}</p>
//     </div>

//     {/* Center Section */}
//     <div className="flex-1 text-center">
//       <p className="font-semibold text-xl text-yellow-700">{activity.description}</p>
//     </div>

//     {/* Right Section */}
//     <div className="text-right">
//       <p className="font-semibold text-2xl text-yellow-700">{activity.team}</p>
//       <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
//     </div>
//   </div>
// );

// // Main Component for Trails
// const ReportsAnalyticsView = () => {
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       // Simulating a fetch request
//       const fetchedActivities = [
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Case Remark Updated/Added.', team: 'Operations Team', date: '2024-10-14T10:33:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Legal Downloaded.', team: 'Operations Team', date: '2024-10-14T10:18:00' },
//         { name: 'Ravi Tiwari', caseId: 'CN0100', description: 'HOD approval status updated - approved.', team: 'HOD', date: '2024-10-14T10:17:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Referred for Initial Opinion.', team: 'Operations Team', date: '2024-10-14T10:14:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Case Remark Updated/Added.', team: 'Operations Team', date: '2024-10-14T10:14:00' },
//         { name: 'Shweta Mandhve', caseId: 'CN0106', description: 'Claim Registered.', team: 'Operations Team', date: '2024-10-14T10:13:00', highlight: true },
//       ];
//       setActivities(fetchedActivities);
//     };

//     fetchActivities();
//   }, []);

//   const handleBack = () => {
//     console.log('Go Back');
//   };

//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="flex justify-center p-10">
//       <div className="w-full max-w-4xl">
//         {/* Header with Back and Refresh Buttons */}
//         <div className="flex justify-between items-center mb-6">
//           <button
//             onClick={handleBack}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             &larr; Back
//           </button>
//           <button
//             onClick={handleRefresh}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             &#x21bb; Refresh
//           </button>
//         </div>

//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Activities</h2>

//         {/* Activity Cards */}
//         {activities.length > 0 ? (
//           activities.map((activity, index) => (
//             <ActivityCard key={index} activity={activity} />
//           ))
//         ) : (
//           <p className="text-gray-500">No activities to display.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReportsAnalyticsView;



import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import RestoreIcon from '@mui/icons-material/Restore';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';

// Sample Data (You will replace this with an API call)
const mockBackups = [
  { id: 1, name: 'Backup_2024-10-01', date: '2024-10-01', size: '2GB' },
  { id: 2, name: 'Backup_2024-09-01', date: '2024-09-01', size: '1.5GB' },
  { id: 3, name: 'Backup_2024-08-01', date: '2024-08-01', size: '1.2GB' },
];

const  ReportsAnalyticsView = () => {
  const [backups, setBackups] = useState([]);

  // Fetch backup data
  useEffect(() => {
    // Simulate fetching from an API or database
    setBackups(mockBackups);
  }, []);

  // Backup Handler
  const handleBackup = () => {
    console.log('Backup Created');
    // Here you'd trigger a backup process via API call
  };

  // Restore Handler
  const handleRestore = (backupId) => {
    console.log(`Restoring from backup ID: ${backupId}`);
    // API call to restore the system from the selected backup
  };

  // Delete Backup Handler
  const handleDelete = (backupId) => {
    console.log(`Deleting backup ID: ${backupId}`);
    // API call to delete the selected backup
    setBackups(backups.filter(backup => backup.id !== backupId));
  };

  // Refresh Handler
  const handleRefresh = () => {
    // Simulate refreshing the list from the server
    console.log('Refreshing backup list...');
    setBackups(mockBackups);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Data Backup and Restore
      </Typography>

      {/* Backup Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<BackupIcon />}
          onClick={handleBackup}
        >
          Create Backup
        </Button>
        <IconButton onClick={handleRefresh}>
          <Tooltip title="Refresh Backups">
            <RefreshIcon />
          </Tooltip>
        </IconButton>
      </div>

      {/* Backup List */}
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Backup Name</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Size</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {backups.length > 0 ? (
              backups.map((backup) => (
                <TableRow key={backup.id}>
                  <TableCell>{backup.name}</TableCell>
                  <TableCell>{backup.date}</TableCell>
                  <TableCell>{backup.size}</TableCell>
                  <TableCell>
                    <Tooltip title="Restore Backup">
                      <IconButton
                        color="primary"
                        onClick={() => handleRestore(backup.id)}
                      >
                        <RestoreIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Backup">
                      <IconButton
                        color="secondary"
                        onClick={() => handleDelete(backup.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No backups available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default  ReportsAnalyticsView;

