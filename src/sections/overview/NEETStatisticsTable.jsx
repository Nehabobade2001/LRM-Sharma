// import React,{useEffect,useState}from 'react';
// import {
//   Card,
//   CardHeader,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import axios from 'axios';
// import { Delete, Edit } from 'lucide-react';

// const HoverTableRow = styled(TableRow)(({ theme }) => ({
//   '&:hover': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// const NEETStatisticsTable = () => {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     const fetchUserRoleAndRecords = async () => {
//       try {
//         if (user.role === 'admin') {
//           const response = await axios.get('http://localhost:8000/api/v1/admin/records');
//           setRecords(response.data.record);
//         }
//       } catch (error) {
//         console.error('Error fetching records or role:', error);
//       }
//     };

//     fetchUserRoleAndRecords();
//   }, []); // This will only run when the component mounts

//   return (
//     <Card variant="outlined">
//       <CardHeader title="Land Records Management CRM" />
//       <TableContainer component={Paper}>
//         {/* <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Farmer Name</TableCell>
//               <TableCell>Khasra Number</TableCell>
//               <TableCell>Village Name</TableCell>
//               <TableCell>Mobile Number</TableCell>
//               <TableCell>Date of Registration</TableCell>
//               <TableCell>Plot Number</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row, index) => {
//               const registeredIncrease = index > 0
//                 ? ((row.registered - data[index - 1].registered) / data[index - 1].registered) * 100
//                 : null;

//               const appearedIncrease = index > 0
//                 ? ((row.appeared - data[index - 1].appeared) / data[index - 1].appeared) * 100
//                 : null;

//               const qualifiedIncrease = index > 0
//                 ? ((row.qualified - data[index - 1].qualified) / data[index - 1].qualified) * 100
//                 : null;

//               return (
//                 <HoverTableRow key={row.year}>
//                   <TableCell>{row.year}</TableCell>
//                   <TableCell>{row.registered}</TableCell>
//                   <TableCell>{row.appeared}</TableCell>
//                   <TableCell>{row.qualified}</TableCell>
//                   <TableCell>{registeredIncrease !== null ? registeredIncrease.toFixed(2) + '%' : '0.00%'}</TableCell>
//                   <TableCell>{appearedIncrease !== null ? appearedIncrease.toFixed(2) + '%' : '0.00%'}</TableCell>

//                 </HoverTableRow>
//               );
//             })}
//           </TableBody>
//         </Table> */}

// <Table aria-label="document management table">
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
//     </Card>
//   );
// };

// export default NEETStatisticsTable;

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { Delete, Edit } from 'lucide-react';

const HoverTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NEETStatisticsTable = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('https://lrm-backend.onrender.com/api/v1/admin/records');
        setRecords(response.data.record);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  const handleEdit = (id) => {
    console.log('Edit record with ID:', id);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log('Delete record with ID:', id);
    // Add your delete logic here
  };

  return (
    <Card variant="outlined">
      <CardHeader title="Land Records Management CRM" />
      <TableContainer component={Paper}>
        <Table aria-label="land records table">
          <TableHead>
            <TableRow>
              <TableCell>Farmer Name</TableCell>
              <TableCell>Khasra Number</TableCell>
              <TableCell>Village Name</TableCell>
              <TableCell>Plot Number</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {records.length > 0 ? (
              records.map((record) => (
                <HoverTableRow key={record._id}>
                  <TableCell>{record.farmerName}</TableCell>
                  <TableCell>{record.khasraNumber}</TableCell>
                  <TableCell>{record.villageName}</TableCell>
                  <TableCell>{record.plotNumber}</TableCell>
                 
                
                </HoverTableRow>
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
    </Card>
  );
};

export default NEETStatisticsTable;
