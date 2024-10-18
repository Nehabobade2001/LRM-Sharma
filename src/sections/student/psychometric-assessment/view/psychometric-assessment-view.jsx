// import React, { useState, useEffect } from 'react';
// import { Typography, Button, Grid, Paper, Box, CircularProgress, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Chip } from '@mui/material';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import Questions from '../QuestionData';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const PsychometricAssessment = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [questionTimer, setQuestionTimer] = useState(60);
//   const [totalTime, setTotalTime] = useState(3600); // 60 minutes
//   const [showResults, setShowResults] = useState(false);
//   const [results, setResults] = useState(null);
//   const [testStarted, setTestStarted] = useState(false); // New state for test start
//   const [shuffledQuestions, setShuffledQuestions] = useState(Questions); // State for shuffled questions

//   // Dummy data for previously attempted test results
//   const previousResults = [
//     { date: '2024-01-15', score: 75, category: 'Personality Traits' },
//     { date: '2024-02-10', score: 80, category: 'Interest Inventory' },
//     // Add more results as needed
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuestionTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//       setTotalTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (totalTime === 0) {
//       handleSubmit();
//     }
//   }, [totalTime]);

//   const shuffleQuestions = (questions) => {
//     for (let i = questions.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [questions[i], questions[j]] = [questions[j], questions[i]];
//     }
//     return questions;
//   };

//   const handleStartTest = () => {
//     setShuffledQuestions(shuffleQuestions([...Questions])); 
//     setTestStarted(true);
//   };

//   const handleAnswer = (answer) => {
//     setAnswers({ ...answers, [currentQuestion]: { answer, time: 60 - questionTimer } });
//     setQuestionTimer(60);
//     if (currentQuestion < shuffledQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleSubmit = () => {
//     const categories = ["Interest Inventory", "Personality Traits", "Skills and Competencies", "Work Values", "Motivations"];
//     const categoryScores = categories.reduce((acc, category) => {
//       acc[category] = 0;
//       return acc;
//     }, {});
  
//     Object.entries(answers).forEach(([index, answer]) => {
//       const question = shuffledQuestions[index]; // Access shuffled questions
//       categoryScores[question.category] += 1;
//     });
  
//     // Replace NaN with 0 using isNaN
//     Object.keys(categoryScores).forEach(category => {
//       categoryScores[category] = isNaN(categoryScores[category]) ? 0 : categoryScores[category];
//     });
  
//     const totalScore = Object.values(categoryScores).reduce((a, b) => a + b, 0);
//     const maxPossibleScore = shuffledQuestions.length;
  
//     setResults({
//       categoryScores,
//       totalScore: isNaN(totalScore) ? 0 : totalScore, // Replace NaN with 0 if found
//       maxPossibleScore: isNaN(maxPossibleScore) ? 0 : maxPossibleScore // Replace NaN with 0 if found
//     });
  
//     setShowResults(true);
//   };
  

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <Container maxWidth='xl' sx={{ margin: 'auto', padding: 2 }}>
//       <Typography variant="h4" gutterBottom align='center'>
//         Psychometric Assessment for Medical Career Counseling
//       </Typography>

//       {!testStarted ? ( 
//         <>
//           <Box textAlign="center" marginBottom={2}>
//             <Button variant="contained" size='large' color="primary" onClick={handleStartTest}>
//               Start Test
//             </Button>
//           </Box>
          
//           <Typography variant="h5" gutterBottom align='center'>
//             Previous Test Results
//           </Typography>
          
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Date</TableCell>
//                   <TableCell align="right">Score</TableCell>
//                   <TableCell align="right">Category</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {previousResults.map((result, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{result.date}</TableCell>
//                     <TableCell align="right">{result.score}</TableCell>
//                     <TableCell align="right">{result.category}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </>
//       ) : (
//         <>
//           <Grid container spacing={2} mt={3}>
//             <Grid item md={8} xs={12} sm={4}>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
//                 <Typography variant="h6">Question {currentQuestion + 1} of {shuffledQuestions.length}</Typography>
                
//                 <Typography variant="h6">Total Time: &nbsp;
//                   <Chip label={formatTime(totalTime)} color='error' /> 
//                 </Typography>
//               </Box>
//               <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
//                   <Typography variant="h5" gutterBottom>{shuffledQuestions[currentQuestion].question}</Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Typography sx={{ marginLeft: 2 }}>Question Timer: {questionTimer}s</Typography> &nbsp;
//                     <CircularProgress variant="determinate" value={(questionTimer / 60) * 100} />
//                   </Box>
//                 </Box>
//                 <Grid container spacing={2}>
//                   {shuffledQuestions[currentQuestion].options.map((option, index) => (
//                     <Grid item xs={12} sm={6} key={index}>
//                       <Button
//                         variant={answers[currentQuestion]?.answer === option ? "contained" : "outlined"}
//                         fullWidth
//                         onClick={() => handleAnswer(option)}
//                       >
//                         {option}
//                       </Button>
//                     </Grid>
//                   ))}
//                 </Grid>
             
//                 <Grid item xs={12} sm={8} mt={4}>
//                   <Button variant="contained" color="primary" onClick={handleSubmit}>
//                     Submit Assessment
//                   </Button>
//                 </Grid>
//               </Paper>
//             </Grid>
//             <Grid item md={4} xs={12} sm={8}>
//               <Paper elevation={3} sx={{ padding: 2 }}>
//                 <Typography variant="h6" gutterBottom>Question Navigation</Typography>
//                 <Grid container spacing={1}>
//                   {shuffledQuestions.map((_, index) => (
//                     <Grid item key={index}>
//                       <Button
//                         variant="contained"
//                         size="small"
//                         sx={{ bgcolor: answers[index] ? "success.main" : "primary.lighter", color: answers[index] ? "primary.lighter" : "primary.main"  }} 
//                         onClick={() => setCurrentQuestion(index)}
//                       >
//                         {index + 1}
//                       </Button>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Paper>
//             </Grid>
//           </Grid>
//         </>
//       )}

//       <Modal open={showResults} onClose={() => setShowResults(false)}>
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           <Typography variant="h5" gutterBottom>Assessment Results</Typography>
//           {results ? ( // Check if results is not null
//             <>
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Category</TableCell>
//                       <TableCell align="right">Score</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {Object.entries(results.categoryScores).map(([category, score]) => (
//                       <TableRow key={category}>
//                         <TableCell component="th" scope="row">{category}</TableCell>
//                         <TableCell align="right">{score}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <Typography variant="h6" gutterBottom>
//                 Total Score: {results.totalScore} out of {results.maxPossibleScore}
//               </Typography>
//             </>
//           ) : (
//             <Typography variant="body1">No results available.</Typography>
//           )}
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default PsychometricAssessment;



import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon,
  Switch, Box, CircularProgress, IconButton
} from '@mui/material';
import FileViewer from 'react-file-viewer';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';

const documents = [
  {
    name: 'Document 1',
    url: '/docs/jeet.pdf',
    type: 'pdf',
  },
  {
    name: 'Image 1',
    url: 'https://learts-4437.kxcdn.com/wp-content/uploads/2018/11/product-56.jpg',
    type: 'image/jpeg',
  },
];

export default function  PsychometricAssessment() {
  const [currentDoc, setCurrentDoc] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [defaultViewer, setDefaultViewer] = useState(true);

  useEffect(() => {
    if (Array.isArray(documents) && documents.length > 0) {
      setIsLoading(false);
    }
  }, []);

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
                  {Array.isArray(documents) && documents.length > 0 ? (
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
