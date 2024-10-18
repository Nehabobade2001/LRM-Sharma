// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Snackbar,
//   TextField,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Grid,
// } from '@mui/material';

// const AssessmentToolSettingView = () => {
//   const [questions, setQuestions] = useState([]); // To store psychometric questions
//   const [openQuestionDialog, setOpenQuestionDialog] = useState(false); // Dialog for question management
//   const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar for notifications
//   const [snackbarMessage, setSnackbarMessage] = useState(''); // Message for snackbar
//   const [currentQuestion, setCurrentQuestion] = useState(null); // Current question being edited
//   const [scoreSystem, setScoreSystem] = useState(''); // Scoring system state
//   const [recommendations, setRecommendations] = useState(''); // Recommendations state

//   const handleOpenQuestionDialog = () => {
//     setCurrentQuestion({ id: Date.now(), text: '' }); // Prepare a new question for editing
//     setOpenQuestionDialog(true);
//   };

//   const handleCloseQuestionDialog = () => {
//     setOpenQuestionDialog(false);
//   };

//   const handleSaveQuestion = () => {
//     if (currentQuestion) {
//       setQuestions((prev) =>
//         prev.map((q) => (q.id === currentQuestion.id ? currentQuestion : q))
//       );
//     } else {
//       setQuestions((prev) => [...prev, currentQuestion]);
//     }
//     setSnackbarMessage('Question saved successfully!');
//     setSnackbarOpen(true);
//     handleCloseQuestionDialog();
//   };

//   const handleEditQuestion = (question) => {
//     setCurrentQuestion(question);
//     setOpenQuestionDialog(true);
//   };

//   const handleDeleteQuestion = (id) => {
//     setQuestions((prev) => prev.filter((q) => q.id !== id));
//     setSnackbarMessage('Question deleted successfully!');
//     setSnackbarOpen(true);
//   };

//   const handleSaveScoringSystem = () => {
//     // Here you can implement logic to save the scoring system and recommendations
//     setSnackbarMessage('Scoring system and recommendations saved successfully!');
//     setSnackbarOpen(true);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} md={6}>
//         <Box p={2}>
//           <Typography variant="h4" gutterBottom>
//             Assessment Tool Settings
//           </Typography>

//           <Button variant="contained" color="primary" onClick={handleOpenQuestionDialog}>
//             Add Psychometric Question
//           </Button>

//           <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Question</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {questions.map((question) => (
//                   <TableRow key={question.id}>
//                     <TableCell>{question.text}</TableCell>
//                     <TableCell>
//                       <Button color="primary" onClick={() => handleEditQuestion(question)}>
//                         Edit
//                       </Button>
//                       <Button color="secondary" onClick={() => handleDeleteQuestion(question.id)}>
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           <Box mt={4}>
//             <Typography variant="h6">Manage Scoring System</Typography>
//             <TextField
//               label="Scoring System"
//               multiline
//               rows={4}
//               fullWidth
//               value={scoreSystem}
//               onChange={(e) => setScoreSystem(e.target.value)}
//               variant="outlined"
//               margin="normal"
//             />
//             <TextField
//               label="Recommendations"
//               multiline
//               rows={4}
//               fullWidth
//               value={recommendations}
//               onChange={(e) => setRecommendations(e.target.value)}
//               variant="outlined"
//               margin="normal"
//             />
//             <Button variant="contained" color="primary" onClick={handleSaveScoringSystem}>
//               Save Scoring System
//             </Button>
//           </Box>

//           {/* Snackbar for notifications */}
//           <Snackbar
//             open={snackbarOpen}
//             autoHideDuration={3000}
//             onClose={() => setSnackbarOpen(false)}
//             message={snackbarMessage}
//           />

//           {/* Dialog for Add/Edit Question */}
//           <Dialog open={openQuestionDialog} onClose={handleCloseQuestionDialog}>
//             <DialogTitle>{currentQuestion ? 'Edit Question' : 'Add Question'}</DialogTitle>
//             <DialogContent>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 label="Question"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 value={currentQuestion ? currentQuestion.text : ''}
//                 onChange={(e) =>
//                   setCurrentQuestion({
//                     ...currentQuestion,
//                     text: e.target.value,
//                   })
//                 }
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleCloseQuestionDialog} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={handleSaveQuestion} color="primary">
//                 Save
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Box>
//       </Grid>

//       {/* Live Preview Section */}
//       <Grid item xs={12} md={6}>
//         <Box p={2} sx={{ border: '1px solid #ccc', borderRadius: '4px', height: '100%' }}>
//           <Typography variant="h5" gutterBottom>
//             Live Preview
//           </Typography>
//           <Box sx={{ marginBottom: 2 }}>
//             <Typography variant="h6">Psychometric Assessment Tool</Typography>
//             {questions.length === 0 ? (
//               <Typography>No questions added yet.</Typography>
//             ) : (
//               questions.map((question) => (
//                 <Typography key={question.id} variant="body1">
//                   - {question.text}
//                 </Typography>
//               ))
//             )}
//           </Box>

//           <Box>
//             <Typography variant="h6">Scoring System</Typography>
//             <Typography variant="body1">{scoreSystem || 'No scoring system defined.'}</Typography>
//           </Box>

//           <Box mt={2}>
//             <Typography variant="h6">Recommendations</Typography>
//             <Typography variant="body1">{recommendations || 'No recommendations defined.'}</Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default AssessmentToolSettingView;



// import React, { useEffect, useState } from 'react';
// import {
//   Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon,
//   Switch, Box, CircularProgress, IconButton
// } from '@mui/material';
// import FileViewer from 'react-file-viewer';
// import DownloadIcon from '@mui/icons-material/Download';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import ImageIcon from '@mui/icons-material/Image';
// import { useParams } from 'react-router-dom';
// const documents = [
//   {
//     name: 'Document 1',
//     url: '/docs/jeet.pdf',
//     type: 'pdf',
//   },
//   {
//     name: 'Image 1',
//     url: 'https://learts-4437.kxcdn.com/wp-content/uploads/2018/11/product-56.jpg',
//     type: 'image/jpeg',
//   },
// ];

// export default function  PsychometricAssessment() {
//   const [currentDoc, setCurrentDoc] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [documentLoading, setDocumentLoading] = useState(false);
//   const [defaultViewer, setDefaultViewer] = useState(true);
//   const { id } = useParams();
//   useEffect(() => {
//     if (Array.isArray(documents) && documents.length > 0) {
//       setIsLoading(false);
//     }
//   }, []);

//   function loadDocument(doc) {
//     setCurrentDoc(doc);
//     setDocumentLoading(doc.type === 'pdf' && defaultViewer);
//   }

//   useEffect(() => {
//     if (currentDoc.type && currentDoc.type !== 'pdf') {
//       setDefaultViewer(true);
//       setDocumentLoading(false);
//     }
//     if (currentDoc.type === 'pdf' && defaultViewer) {
//       setDocumentLoading(true);
//     }
//   }, [currentDoc, defaultViewer]);

//   const isImageType = currentDoc?.type?.startsWith('image/');
//   const isPdfType = currentDoc?.type === 'pdf';

//   return (
//     <Container maxWidth="xl" sx={{ display: 'flex', minHeight: '100vh', gap: 2 }}>
//       <Box sx={{ flexGrow: 1, padding: 3 }}>
//         <Paper elevation={3} sx={{ padding: 3 }}>
//           <Grid container justifyContent="space-between" alignItems="center">
//             <Typography variant="h5">Documents</Typography>
//             <Box display="flex" alignItems="center">
//               <Typography variant="body2" sx={{ mr: 2 }}>Google Docs Viewer</Typography>
//               <Switch
//                 checked={defaultViewer}
//                 onChange={(e) => {
//                   if (e.target.checked && !isPdfType) {
//                     alert('Google Docs Viewer supports only PDF files.');
//                     return;
//                   }
//                   setDocumentLoading(!e.target.checked && isPdfType);
//                   setDefaultViewer(e.target.checked);
//                 }}
//               />
//             </Box>
//           </Grid>

//           <Grid container spacing={3} sx={{ mt: 2 }}>
//             <Grid item xs={12} md={3}>
//               <Paper elevation={2} sx={{ maxHeight: '70vh', overflow: 'auto', borderRadius: '8px' }}>
//                 <List>
//                   {Array.isArray(documents) && documents.length > 0 ? (
//                     documents.map((doc, index) => (
//                       <ListItem
//                         key={index}
//                         button
//                         selected={doc.name === currentDoc.name}
//                         onClick={() => loadDocument(doc)}
//                         sx={{
//                           border: '1px solid',
//                           borderColor: doc.name === currentDoc.name ? 'primary.main' : 'grey.300',
//                           borderRadius: '8px',
//                           margin: '8px',
//                           padding: '10px',
//                           boxShadow: doc.name === currentDoc.name ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                             borderColor: 'primary.main',
//                           },
//                         }}
//                       >
//                         <ListItemIcon>
//                           {doc.type === 'pdf' ? <PictureAsPdfIcon color="primary" /> : <ImageIcon color="secondary" />}
//                         </ListItemIcon>
//                         <ListItemText primary={doc.name} />
//                         <IconButton component="a" href={doc.url} download target="_blank">
//                           <DownloadIcon />
//                         </IconButton>
//                       </ListItem>
//                     ))
//                   ) : (
//                     <Typography align="center" variant="body2">No Documents Available</Typography>
//                   )}
//                 </List>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} md={9}>
//               <Paper sx={{ height: '80vh', position: 'relative' }}>
//                 {isLoading && (
//                   <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//                     <CircularProgress />
//                     <Typography sx={{ ml: 2 }}>Loading...</Typography>
//                   </Box>
//                 )}
//                 {!isLoading && Object.keys(currentDoc).length === 0 && (
//                   <Typography align="center" variant="h6">Select any document to view</Typography>
//                 )}
//                 {isPdfType && defaultViewer && (
//                   <iframe
//                     title="doc"
//                     width="100%"
//                     height="100%"
//                     src={currentDoc.url}
//                     style={{ border: 'none' }}
//                     onLoad={() => setDocumentLoading(false)}
//                   />
//                 )}
//                 {isPdfType && !defaultViewer && (
//                   <FileViewer fileType="pdf" filePath={currentDoc.url} />
//                 )}
//                 {isImageType && (
//                   <img
//                     src={currentDoc.url}
//                     alt={currentDoc.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                   />
//                 )}
//                 {documentLoading && (
//                   <Box position="absolute" top={0} left={0} right={0} bottom={0} display="flex" justifyContent="center" alignItems="center" bgcolor="rgba(255,255,255,0.7)">
//                     <CircularProgress />
//                   </Box>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </Container>
//   );
// }



import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon,
  Switch, Box, CircularProgress, IconButton
} from '@mui/material';
import FileViewer from 'react-file-viewer';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // For making API requests

export default function PsychometricAssessment() {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [defaultViewer, setDefaultViewer] = useState(true);
  const { id } = useParams();

  // Fetch documents from API
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`https://lrm-backend.onrender.com/api/records/doc?recordId=${id}`); // Replace with your API endpoint
        setDocuments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, [id]);

  function loadDocument(doc) {
    setCurrentDoc(doc);
    setDocumentLoading(doc.type === 'pdf' && defaultViewer);
  }

  useEffect(() => {
    if (currentDoc.type && currentDoc.type !== 'pdf') {
      setDefaultViewer(true);
      setDocumentLoading(false);
    }
    if (currentDoc.type === 'pdf' && defaultViewer) {
      setDocumentLoading(true);
    }
  }, [currentDoc, defaultViewer]);

  const isImageType = currentDoc?.type?.startsWith('image/');
  const isPdfType = currentDoc?.type === 'pdf';

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', minHeight: '100vh', gap: 2 }}>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h5">Documents</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ mr: 2 }}>Google Docs Viewer</Typography>
              <Switch
                checked={defaultViewer}
                onChange={(e) => {
                  if (e.target.checked && !isPdfType) {
                    alert('Google Docs Viewer supports only PDF files.');
                    return;
                  }
                  setDocumentLoading(!e.target.checked && isPdfType);
                  setDefaultViewer(e.target.checked);
                }}
              />
            </Box>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Paper elevation={2} sx={{ maxHeight: '70vh', overflow: 'auto', borderRadius: '8px' }}>
                <List>
                  {isLoading ? (
                    <CircularProgress />
                  ) : documents.length > 0 ? (
                    documents.map((doc, index) => (
                      <ListItem
                        key={index}
                        button
                        selected={doc.name === currentDoc.name}
                        onClick={() => loadDocument(doc)}
                        sx={{
                          border: '1px solid',
                          borderColor: doc.name === currentDoc.name ? 'primary.main' : 'grey.300',
                          borderRadius: '8px',
                          margin: '8px',
                          padding: '10px',
                          boxShadow: doc.name === currentDoc.name ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderColor: 'primary.main',
                          },
                        }}
                      >
                        <ListItemIcon>
                          {doc.type === 'pdf' ? <PictureAsPdfIcon color="primary" /> : <ImageIcon color="secondary" />}
                        </ListItemIcon>
                        <ListItemText primary={doc.name} />
                        <IconButton component="a" href={doc.url} download target="_blank">
                          <DownloadIcon />
                        </IconButton>
                      </ListItem>
                    ))
                  ) : (
                    <Typography align="center" variant="body2">No Documents Available</Typography>
                  )}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={9}>
              <Paper sx={{ height: '80vh', position: 'relative' }}>
                {isLoading && (
                  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <CircularProgress />
                    <Typography sx={{ ml: 2 }}>Loading...</Typography>
                  </Box>
                )}
                {!isLoading && Object.keys(currentDoc).length === 0 && (
                  <Typography align="center" variant="h6">Select any document to view</Typography>
                )}
                {isPdfType && defaultViewer && (
                  <iframe
                    title="doc"
                    width="100%"
                    height="100%"
                    src={currentDoc.url}
                    style={{ border: 'none' }}
                    onLoad={() => setDocumentLoading(false)}
                  />
                )}
                {isPdfType && !defaultViewer && (
                  <FileViewer fileType="pdf" filePath={currentDoc.url} />
                )}
                {isImageType && (
                  <img
                    src={currentDoc.url}
                    alt={currentDoc.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                )}
                {documentLoading && (
                  <Box position="absolute" top={0} left={0} right={0} bottom={0} display="flex" justifyContent="center" alignItems="center" bgcolor="rgba(255,255,255,0.7)">
                    <CircularProgress />
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
