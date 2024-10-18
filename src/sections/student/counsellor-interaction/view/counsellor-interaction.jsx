import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  Avatar,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import VideoPlayer from '../VideoPlayer';
import Roadmap from '../Roadmap';

const steps = [
  'Introduction to NEET',
  'Understanding Syllabus',
  'Choosing the Right Study Material',
  'Counselling Process',
  'Final Strategy & Exam Tips',
];

// Sample notes data
const notesData = [
  { id: 1, title: 'Study Materials', content: 'Please review Chapter 5 of Physics.' },
  { id: 2, title: 'Mock Test', content: 'Complete the mock test by the end of this week.' },
  { id: 1, title: 'Study Materials', content: 'Please review Chapter 5 of Physics.' },
  { id: 2, title: 'Mock Test', content: 'Complete the mock test by the end of this week.' },
  { id: 1, title: 'Study Materials', content: 'Please review Chapter 5 of Physics.' },
  { id: 2, title: 'Mock Test', content: 'Complete the mock test by the end of this week.' },
  { id: 1, title: 'Study Materials', content: 'Please review Chapter 5 of Physics.' },
  { id: 2, title: 'Mock Test', content: 'Complete the mock test by the end of this week.' },
  { id: 1, title: 'Study Materials', content: 'Please review Chapter 5 of Physics.' },
  { id: 2, title: 'Mock Test', content: 'Complete the mock test by the end of this week.' },
  { id: 1, title: 'Study Materials', content: 'Please review Chapter 5 of Physics.' },
  { id: 2, title: 'Mock Test', content: 'Complete the mock test by the end of this week.' },

];

const CounsellorPage = () => {
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false); // Control chat popup visibility

  // Sample profile images
  const userProfileImage = 'https://example.com/user-profile.jpg';
  const counsellorProfileImage = 'https://example.com/counsellor-profile.jpg';

  // Simulate counsellor's reply after sending a message
  const simulateCounsellorReply = (userMessage) => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `I received your message - "${userMessage}"`, sender: 'Counsellor' },
      ]);
    }, 1000); // Simulate a 1-second delay
  };

  // Handle sending a new message in the chat
  const handleSendMessage = () => {
    if (chatInput.trim()) {
      // Add user's message
      setMessages([...messages, { text: chatInput, sender: 'User' }]);

      // Clear input field
      setChatInput('');

      // Simulate counsellor's reply
      simulateCounsellorReply(chatInput);
    }
  };

  // Toggle chat popup
  const toggleChatPopup = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {/* Left Column: Video, Roadmap, and Key Stages */}
        <Grid item xs={12} md={8}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              NEET Career Counselling with Expert Counsellors
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Watch the video and follow our comprehensive roadmap for NEET success
            </Typography>
          </Box>

          <Paper elevation={3} sx={{ padding: '16px', borderRadius: '10px', marginBottom: '40px' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <VideoPlayer videoUrl="/assets/teacher.mp4" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Meet Our Lead Counsellor: Dr. John Doe
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Dr. John Doe has guided hundreds of students toward their dream of becoming successful medical professionals.
                </Typography>
                <Button variant="contained" color="primary" size="large" startIcon={<PlayCircleOutlineIcon />}>
                  Watch Full Video
                </Button>
              </Grid>
            </Grid>
          </Paper>

          {/* NEET Roadmap Section */}
          <Typography variant="h5" gutterBottom>
            Your Roadmap to NEET Success
          </Typography>
          <Roadmap />

          {/* Stepper for Key Stages */}
          <Box my={6}>
            <Typography variant="h6" gutterBottom>
              Key Stages in Your Counselling Process
            </Typography>
            <Stepper activeStep={0} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
          </Box>
        </Grid>

        {/* Right Column: Access Notes, Tasks, and Chat */}
        <Grid item xs={12} md={4}>
          {/* Access Notes and Tasks Section */}
          <Typography mt={5} variant="h5" gutterBottom>
            Notes and Tasks
          </Typography>
          <Box my={1} sx={{ height: '70vh', bgcolor: '#EBEEF4', overflowY: 'scroll', p: 2, borderRadius: '20px' }}>
            <Grid container spacing={1}>
              {notesData.map((note) => (
                <Grid item xs={12} key={note.id}>
                  <Paper elevation={3} sx={{ padding: '16px' }}>
                    <Typography variant="h6">{note.title}</Typography>
                    <Typography variant="body2">{note.content}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Fixed Chat Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleChatPopup}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          padding: '10px 20px',
        }}
      >
        Chat with Counsellor
      </Button>

      {/* Chat Popup */}
      {isChatOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            position: 'fixed',
            bottom: 0,
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 1000,
          }}
        >
          {/* Chat messages */}
          <Box
            mb={2}
            sx={{
              maxHeight: '300px',
              overflowY: 'auto',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: message.sender === 'User' ? 'flex-end' : 'flex-start',
                  mb: 2,
                }}
              >
                {message.sender !== 'User' && (
                  <Avatar alt="Counsellor" src={counsellorProfileImage} sx={{ mr: 2 }} />
                )}
                <Box
                  sx={{
                    bgcolor: message.sender === 'User' ? 'primary.main' : 'secondary.main',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    maxWidth: '70%',
                  }}
                >
                  {message.text}
                </Box>
                {message.sender === 'User' && <Avatar alt="User" src={userProfileImage} sx={{ ml: 2 }} />}
              </Box>
            ))}
          </Box>

          {/* Chat Input */}
          <Box display="flex" alignItems="center">
            <TextField
              label="Type your message..."
              fullWidth
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </motion.div>
      )}
    </Container>
  );
};

export default CounsellorPage;
