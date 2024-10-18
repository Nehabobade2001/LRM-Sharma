import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useRouter } from 'src/routes/hooks';
import { asyncUserSignin, asyncUserSignup } from 'src/store/Actions/userActions';

import Iconify from 'src/components/iconify';
import Logo from 'src/components/logo';

// Animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

// ----------------------------------------------------------------------

export default function RegisterView() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors('');  // Clear previous errors
    if (!username || !email || !password) {
      setErrors('All fields are required.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors('Please enter a valid email.');
      return;
    }
  
    setLoading(true);
    try {
     dispatch(asyncUserSignup({ email, password, username }));
     router.push('/')
    } catch (error) {
      setErrors(error.message || 'Signup failed due to an unexpected error.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on xs and horizontally on md
        height: '100vh',
        overflow: 'visible',
        padding: { xs: 1, md: 10 }, // Adjust padding for smaller screens
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)`,
          boxShadow: `rgba(133, 189, 215, 0.88) 0px 30px 30px -20px`,
          borderRadius: { xs: "0 0 30px 30px", md: "30px 0 0 30px" }, // Adjust border-radius for mobile
          border: `5px solid rgb(255, 255, 255)`,
          borderRight: { md: `5px solid #F6C16E` }, // No right border for mobile
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          style={{ width: '100%', maxWidth: 520 }}
        >
          <Card
            sx={{
              padding: { xs: 1, md: 5 }, 
              width: '100%',
              boxShadow: theme.shadows[3],
              textAlign: 'center',
            }}
          >
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <Box mb={0}>
                <img
                  src="/assets/images/avatars/user_icon.jpg"
                  alt="logo"
                  style={{ width: '100px', marginBottom: '16px' }}
                />
              </Box>

              <Typography variant="h5" sx={{ mb: 1 }}>
                Create your account
              </Typography>
              <Typography variant="body2" sx={{ mb: { xs: 2, md: 3 } }}>
                Welcome! Excel in your NEET journey with Medical Mentor
              </Typography>

              {/* Name Input */}
              <TextField
                fullWidth
                name="username"
                label="Full name"
                value={username}
                onChange={handleChangeName}
                sx={{ mb: { xs: 2, md: 3 } }}
              />
              {/* Email Input */}
              <TextField
                fullWidth
                name="email"
                label="Email address"
                value={email}
                onChange={handleChangeEmail}
                sx={{ mb: { xs: 2, md: 3 } }}
              />

              {/* Password Input */}
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={handleChangePassword}
                sx={{ mb: { xs: 1, md: 3 } }}
              />

              {errors && <Typography color="error">{errors}</Typography>}

              <LoadingButton
                fullWidth
                size="large"
                variant="contained"
                loading={loading}
                onClick={handleRegister}
                sx={{
                  mt: 2,
                  background: theme.palette.gradients.primary,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    background: theme.palette.gradients.primary,
                    opacity: 0.9,
                  },
                }}
              >
                Register Now
              </LoadingButton>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/login"
                variant="body1"
                sx={{ display: 'block', mt: 2, color: 'primary.main', textDecoration: 'none' }}
              >
                Already have an account? <span style={{ color: 'blue' }}>Log In</span>
              </Link>
              <Link
                href="#"
                variant="body2"
                sx={{ display: 'block', mt: 2, color: 'primary.main' }}
              >
                Trouble signing in? Get Help
              </Link>
            </motion.div>

            <Divider sx={{ my: 3 }} />

            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton color="primary">
                <Iconify icon="logos:google-icon" width={24} />
              </IconButton>
              <IconButton color="primary">
                <Iconify icon="logos:facebook" width={24} />
              </IconButton>
              <IconButton color="primary">
                <Iconify icon="logos:twitter" width={24} />
              </IconButton>
            </Stack>
          </Card>
        </motion.div>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #243771 0%, navy 100%)', // Gradient background
          color: '#fff',
          boxShadow: `rgba(133, 189, 215, 0.88) 0px 30px 30px -20px`,
          borderRadius: { xs: '30px 30px 0 0', md: '0 30px 30px 0' },
        }}
      >
        {/* Video Content */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          style={{
            width: '80%',
            textAlign: 'center',
          }}
        >
          {/* Add video or image */}
          <Box
            component="video"
            autoPlay
            loop
            muted
            src="/assets/vid-stu.mp4" // Add the image path
            alt="Mentor illustration"
            sx={{
              width: '100%',
              maxWidth: 400,
              mb: 3,
              borderRadius: "30px"
            }}
          />
          <Typography variant="h4" sx={{ mb: 1 }}>
            Get Personalized Counsellor
          </Typography>
          <Typography variant="body1">
            We are here to assist you in achieving your dream medical seat.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
