// import React, { useState } from 'react';
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
// import { Add, Edit, Delete } from '@mui/icons-material';

// const UserManagementView = () => {
//   // State management
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', role: 'Counsellor', assessmentHistory: 'Good' },
//     { id: 2, name: 'Jane Smith', role: 'Manager', assessmentHistory: 'Excellent' },
//     { id: 3, name: 'Michael Johnson', role: 'Student', assessmentHistory: 'Average' },
//   ]);
  
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   const handleClickOpen = (user = null) => {
//     setCurrentUser(user);
//     setOpenDialog(true);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//     setCurrentUser(null);
//   };

//   const handleSave = () => {
//     if (currentUser) {
//       // Edit existing user
//       setUsers((prev) =>
//         prev.map((user) => (user.id === currentUser.id ? currentUser : user))
//       );
//     } else {
//       // Add new user
//       const newUser = { id: Date.now(), name: 'New User', role: 'Counsellor', assessmentHistory: 'N/A' };
//       setUsers((prev) => [...prev, newUser]);
//     }
//     handleClose();
//     setSnackbarOpen(true);
//   };

//   const handleDelete = (id) => {
//     setUsers((prev) => prev.filter((user) => user.id !== id));
//     setSnackbarOpen(true);
//   };

//   return (
//     <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
//         User Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={() => handleClickOpen()}
//         sx={{ mb: 2 }}
//       >
//         Add User
//       </Button>

//       <TableContainer component={Paper}>
//         <Table aria-label="user management table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Farmer Name</TableCell>
//               <TableCell>Khasra No</TableCell>
//               <TableCell>Assessment History</TableCell>
//               <TableCell align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell>{user.assessmentHistory}</TableCell>
//                 <TableCell align="center">
//                   <IconButton onClick={() => handleClickOpen(user)} color="primary">
//                     <Edit />
//                   </IconButton>
//                   <IconButton onClick={() => handleDelete(user.id)} color="secondary">
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Dialog for Adding/Editing User */}
//       <Dialog open={openDialog} onClose={handleClose}>
//         <DialogTitle>{currentUser ? 'Edit User' : 'Add User'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.name || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Role"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.role || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Assessment History"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.assessmentHistory || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, assessmentHistory: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSave} color="primary">
//             {currentUser ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for Notifications */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={() => setSnackbarOpen(false)}
//         message={currentUser ? 'User updated successfully!' : 'User added successfully!'}
//       />
//     </Box>
//   );
// };

// export default UserManagementView;


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
// import { Add, Edit, Delete } from '@mui/icons-material';

// const UserManagementView = () => {
//   // State management
//   const [users, setUsers] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   // Fetch users from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/admin/all-users');  // Adjust the API endpoint if needed
//         setUsers(response.data.Data);  // Assuming your API returns the data in the 'Data' field
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
//     fetchUsers();
//   }, []); // Run once when component mounts

//   const handleClickOpen = (user = null) => {
//     setCurrentUser(user);
//     setOpenDialog(true);
//   };

//   const handleClose = () => {
//     setOpenDialog(false);
//     setCurrentUser(null);
//   };

//   const handleSave = () => {
//     if (currentUser) {
//       // Edit existing user
//       setUsers((prev) =>
//         prev.map((user) => (user.id === currentUser.id ? currentUser : user))
//       );
//     } else {
//       // Add new user (this logic may change if you're adding via the API)
//       const newUser = { id: Date.now(), name: 'New User', role: 'Counsellor', assessmentHistory: 'N/A' };
//       setUsers((prev) => [...prev, newUser]);
//     }
//     handleClose();
//     setSnackbarOpen(true);
//   };

//   const handleDelete = (id) => {
//     setUsers((prev) => prev.filter((user) => user.id !== id));
//     setSnackbarOpen(true);
//   };

//   return (
//     <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
//       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
//         User Management
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<Add />}
//         onClick={() => handleClickOpen()}
//         sx={{ mb: 2 }}
//       >
//         Add User
//       </Button>

//       <TableContainer component={Paper}>
//         <Table aria-label="user management table">
//           <TableHead>
//             <TableRow>
//               <TableCell>id</TableCell>
//               <TableCell>Name </TableCell>
//               <TableCell>username</TableCell>
//               <TableCell>mobile</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                   <TableCell>{user.id}</TableCell>
//                 <TableCell>{user.firstname} {user.lastname}</TableCell>
//                 <TableCell>{user.username}</TableCell>
//                 <TableCell>{user.mobile || 'N/A'}</TableCell>
//                 <TableCell>{user.email|| 'N/A'}</TableCell>
//                 <TableCell align="center">
//                   <IconButton onClick={() => handleClickOpen(user)} color="primary">
//                     <Edit />
//                   </IconButton>
//                   <IconButton onClick={() => handleDelete(user.id)} color="secondary">
//                     <Delete />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Dialog for Adding/Editing User */}
//       <Dialog open={openDialog} onClose={handleClose}>
//         <DialogTitle>{currentUser ? 'Edit User' : 'Add User'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.name || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Role"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.role || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Assessment History"
//             fullWidth
//             variant="outlined"
//             value={currentUser?.assessmentHistory || ''}
//             onChange={(e) => setCurrentUser({ ...currentUser, assessmentHistory: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSave} color="primary">
//             {currentUser ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for Notifications */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={() => setSnackbarOpen(false)}
//         message={currentUser ? 'User updated successfully!' : 'User added successfully!'}
//       />
//     </Box>
//   );
// };

// export default UserManagementView;



import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
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
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const UserManagementView = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
 const navigate = useNavigate()
  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://lrm-backend.onrender.com/api/admin/all-users');  // Adjust API endpoint
        setUsers(response.data.Data);  // Assuming your API returns users in 'Data'
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleClickOpen = (user = null) => {
    setCurrentUser(user || { username: '', email: '', password: '', firstname: '', lastname: '', mobile: '', city: '', state: '', role: '' });
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setCurrentUser(null);
  };

  const handleSave = async () => {
    try {
      if (currentUser.id) {
        // Update existing user
        await axios.put(`https://lrm-backend.onrender.com/api/admin/update-user/${currentUser.id}`, currentUser);
        setUsers((prev) => prev.map((user) => (user.id === currentUser.id ? currentUser : user)));
      } else {
       
        const response = await axios.post('https://lrm-backend.onrender.com/api/v1/user/register', currentUser);
        setUsers((prev) => [...prev, response.data.newUser]);  // Assuming 'newUser' is in response
      }
      setSnackbarOpen(true);
      handleClose();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://lrm-backend.onrender.com/api/admin/delete-user/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        User Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => handleClickOpen()}
        sx={{ mb: 2 }}
      >
        Add User
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="user management table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} onClick={()=>navigate(`/admin/user-details/${user.id}`)}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.mobile || 'N/A'}</TableCell>
                <TableCell>{user.email || 'N/A'}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleClickOpen(user)} color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user._id)} color="secondary">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Adding/Editing User */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{currentUser?.id ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Username"
            fullWidth
            variant="outlined"
            value={currentUser?.username || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })}
          />
          <TextField
            margin="dense"
            label="First Name"
            fullWidth
            variant="outlined"
            value={currentUser?.firstname || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, firstname: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            variant="outlined"
            value={currentUser?.lastname || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, lastname: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Mobile"
            fullWidth
            variant="outlined"
            value={currentUser?.mobile || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, mobile: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            variant="outlined"
            value={currentUser?.email || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="City"
            fullWidth
            variant="outlined"
            value={currentUser?.city || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, city: e.target.value })}
          />
          <TextField
            margin="dense"
            label="State"
            fullWidth
            variant="outlined"
            value={currentUser?.state || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, state: e.target.value })}
          />
         
          <TextField
            margin="dense"
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            value={currentUser?.password || ''}
            onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
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

export default UserManagementView;






//   const doc = new jsPDF();
//   let yPos = 4;
//   const pageWidth = 210;
//   const margin = 10;
//   const maxWidth = pageWidth - 2 * margin;

//   doc.addImage(Logos, "jpg", 20, 10, 30, 30);

//   const logoBottomY = 10 + 30;
//   doc.setDrawColor(0, 0, 255);
//   doc.line(margin, logoBottomY + 5, pageWidth - margin, logoBottomY + 5);

//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(22);
//   doc.text("Claims Nidan", 170, 20, { align: "right" });

//   doc.setFontSize(12);
//   doc.text("Total insurance claims solution", 170, 28, { align: "right" });

//   doc.setFontSize(10);
//   doc.text(`Ref. No.: ${claimData?.id}`, 20, 50);
//   doc.text(`Date: ${claimData?.request_date}`, 170, 50, { align: "right" });

//   doc.setDrawColor(0, 0, 255);
//   yPos += 8;

//   doc.setFontSize(16);
//   doc.setTextColor("black");
//   doc.text("Fees Structure cum Service Agreement", 105, 60, {
//     align: "center",
//   });

//   // Content
//   doc.setFontSize(10);
//   let y = 70;
//   const lineHeight = 5;
//   const pageHeight = 297;

//   const addText = (text, indent = 0) => {
//     const lines = doc.splitTextToSize(text, 170 - indent);
//     lines.forEach((line) => {
//       if (y + lineHeight > pageHeight - 30) {
//         doc.addPage();
//         y = 20;
//       }
//       doc.text(line, 20 + indent, y);
//       y += lineHeight;
//     });
//     y += lineHeight;
//   };

//   addText(
//     `This Fees Structure cum Service Agreement (herein referred as "Agreement") is made and entered into as of ${claimData?.request_date} ("herein referred as Effective ${claimData.request_date}"), by and between:`
//   );

//   addText(
//     `Claims Nidan having its registered office at 21, Second Floor, Metro Plaza Bittan Market, E-5, Arera Colony Bhopal (M.P.) – 462016 (herein referred as “Firm”`
//   );

//   doc.text("//AND//", 105, 96, { align: "center" });

//   const details = [
//     `Name of complainant - ${claimData?.complainant_name}`,
//     `Name of Insurer -  ${claimData?.insurer_name}`,
//     `Type of Claim/case - ${claimData?.claim_type}` ,
//     `Policy Number - ${claimData?.policy_no}`,
//     `Claim Ref No. - ${claimData?.claim_no} `,
//     `Disputed amount - ${claimData?.disputed_amount} `,
//     `Claimant/ claim is made for - ${claimData?.complainant_name}`,
//     `Date of event -  ${claimData?.hospital_admission_date} `,
//   ];

//   details.forEach((detail) => {
//     if (y + lineHeight > pageHeight - 30) {
//       doc.addPage();
//       y = 20;
//     }
//     doc.text(detail, 30, y);
//     y += lineHeight;
//   });

//   y += lineHeight * 2;

//   addText("1. SCOPE OF WORK:-");
//   addText(
//     `1.1 The Firm undertakes to render services encompassing, but not restricted to, Claim Filing, Applicationfor query responses, Reconsideration processes, Set Aside of rejected or deducted claims, and exertingefforts to facilitate the settlement of claims through correspondence, Court proceedings, or providingguidance and assistance for Bima Lokpal proceedings to the Customer.`
//   );

//   addText("2. PAYMENT TERMS:-");
//   addText(
//     `2.1 The Customer agrees to pay fee to the Firm in the following format:-`
//   );

//   addText(
//     `i. Processing fee of Rs.${claimData?.total_processing_charge} includingGST (18%) in advance (non-refundable) ( ${claimData?.processing_charge} + ${claimData?.total_processing_charge}  +${claimData?.total_processing_charge} (18% GST) = ${claimData?.total_processing_charge}<sub className="fw-bold">(Total )</sub>`);
//   addText(
//     `ii. Rs ${claimData?.consultation_fee * 1.18}  including GST (18%) tentative. And ${claimData?.consultation_percent}% in actual of the final disbursed amount of the total claimed amount of Rs. ${claimData?.disputed_amount}/- towards consultancy fees.Rs ${claimData?.consultation_percent* 0.18} 18% GST${claimData?.consultation_percent * 0.18}(Total )`)

//   addText(
//     `iii. PDC detail – Cheque No. ……… Name of Bank ……………………. A/c No……………………Account holder ……………………………Amount …………`
//   );

//   addText("3. DEFAULT OF PAYMENT:-");
//   addText(
//     "3.1 In case of dishonoring the cheque or non-payment of fees, the Firm reserves the right to take legal action under Section 138 of the Negotiable Instrument Act 1881."
//   );

//   addText("4. WORK COMMITMENT:-");
//   addText(
//     `4.1 The Customer undertakes to remit and pay the actual consultancy fee to the firm, as specified above (15.00% of the final disbursed amount), within two days after the disbursement of the claim amount from the insurer to legal hire/proposer/ corporate or policyholder as per policy terms on their designated bank account.`
//   );

//   addText(
//     `4.2 If the consultation fee, as indicated in the cheque, varies from the agreed percentage upon settlement of the claim, any disparity shall be reconciled. If the cheque amount exceeds the predetermined percentage, the surplus shall be refunded to the Customer. Conversely, if the cheque amount is less than the agreed percentage, the Customer shall compensate for the deficit amount.`
//   );
//   addText(
//     `4.3 In the event of the Firm's inability to secure relief for the Customer through non-settlement of the claim in accordance with policy terms, the Firm undertakes to return the Post Dated Cheque of consultancy fee to the Customer and no consultancy fee will be charged`
//   );
//   addText(
//     `4.4 The party is liable to give all correct information, authentic documents duly verified by him/her of
// his/her claim to the firm and no any fake/bogus document to be provided, the firm is not responsible for
// any legal complication / non-settlement of claim due to any such information/document`
//   );

//   addText(
//     `4.5 The firm is responsible for making all efforts and guiding all processes involved as mentioned towards
// the settlement of the claim but not a guarantee of the payment of the claim `
//   );
//   addText(
//     `4.6 In the event of settlement of the claim after the date of this agreement signed by both parties, the
// customer is liable to pay the full agreed consultation fee to the firm without delay, as narrated above point `
//   );
//   addText(
//     `4.7 The time frame of the entire claim process toward settlement depends upon case by case and there is no set timeline, however, the firm is liable to make all efforts for the same for disposal of the claim as soon as possible `
//   );
//   addText(
//     `4.8 In the event of settlement of the claim, and the amount disbursed by insurer, the party is liable to
// inform the to firm immediately, so that, the firm can proceed to close, or appropriate action for the balance amount if there is a quantum settlement `
//   );

//   addText(
//     ` 4.9 During the case proceeding, all the expenses shall be beard by the customer which is not refundable, and the firm is liable to communicate the details to the party `
//   );
//   addText(
//     ` 4.10 The case can be withdrawn by the customer at any stage but only before the fixation of the date of
// the hearing for argument, subject to clearing all the dues/fees/expenses and a written application to be given to the firm, the application should be accepted and no objection letter should be issued by the firm,in such condition, the party is liable to pay 50% of the consultation fee to the firm considering the final consultation fee for all the process done by the firm during processing, the percentage will be calculated as per the disputed amount `
//   );

//   // Confidentiality
//   addText("5. CONFIDENTIALITY:-");
//   addText(
//     `5.1 The Firm acknowledges and agrees to uphold the utmost confidentiality with respect to all facts of the services rendered herein, encompassing, without limitation, the details of the Customer and any proprietary information disclosed during the engagement `
//   );

//   addText(
//     ` 5.2 The Firm shall exercise reasonable diligence and take appropriate measures to prevent the unauthorized disclosure, dissemination, or use of any confidential information. This obligation of confidentiality extends to all employees, agents, or representatives of the Firm involved in the provision of services under this agreement.`
//   );

//   // Governing Law
//   addText("6. GOVERNING LAW AND JURISDICTION:-");
//   addText(
//     `6.1 This Agreement is governed by the laws of India, and the Parties agree that any disputes shall fall under the jurisdiction of the courts of Bhopal (Madhya Pradesh)`
//   );

//   // Dispute Resolution
//   addText("7. DISPUTE RESOLUTION:-");
//   addText(
//     `7.1 Prior to initiating any legal proceedings, disputes arising from this Agreement shall be subject tresolution through the laws as applicable. The parties agree to engage in good faith efforts to reach an amicable resolution through the facilitation process before pursuing litigation`
//   );
//   addText(
//     ` IN WITNESS WHEREOF, the Parties hereto have executed this Service Agreement as of the Effective Date.`
//   );

//   addText(
//     ` All above contents and other terms and conditions have been explained, well understood, and agreed by customer`
//   );

//   y += lineHeight * 3;

//   // Signatures
//   if (y + lineHeight * 5 > pageHeight - 30) {
//     doc.addPage();
//     y = 20;
//   }

//   addText(
//     "IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the Effective Date."
//   );

//   // Signature lines
//   y += lineHeight * 2;
//   doc.text(" Thanks & regards,", 30, y);
//   doc.text("Name of proposer/customer -", 30, y + 10);
//   doc.text("Signature -", 30, y + 20);
//   doc.text("Mobile No - ", 30, y + 30);

//   y += lineHeight * 2;
//   doc.text("Authorized signatory For Claims Nidan", 120, y);
//   // doc.text("Name: ", 150, y + 10);
//   // doc.text("Signature: ", 150, y + 20);
//   // doc.text("Date: ", 150, y + 30);

//   // Footer with page numbers
 
//   const pageCount = doc.internal.getNumberOfPages();
//   for (let i = 1; i <= pageCount; i++) {
//     doc.setPage(i);
//     doc.setFontSize(10);
//     doc.text(`Page ${i} of ${pageCount}`, 95, 280, { align: "center" });
//   }
//   doc.save("Claims-Nidan-Agreement.pdf");
// };
