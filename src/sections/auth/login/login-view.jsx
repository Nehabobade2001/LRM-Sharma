/* eslint-disable import/no-unresolved */
/* eslint-disable perfectionist/sort-imports */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { motion } from 'framer-motion';
import { useRouter } from 'src/routes/hooks';
import { asyncUserSignin } from 'src/store/Actions/userActions';

// eslint-disable-next-line import/no-unresolved
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

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    // If authenticated, redirect to the dashboard
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleChangeEmail = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors('');

    try {
      await dispatch(asyncUserSignin({ username, password }));
    } catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'visible',
        padding: { xs: 0, md: 14 },
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Grid container sx={{ height: '100%' }}>
        {/* Left Section */}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: `linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)`,
            borderTopLeftRadius: { xs: '20px', md: '30px' },
            borderBottomLeftRadius: { xs: '20px', md: '30px' },
            border: `5px solid rgb(255, 255, 255)`,
            borderRight: `5px solid #F6C16E`,
            boxShadow: `rgba(133, 189, 215, 0.88) 0px 30px 30px -20px`,
            padding: { xs: 1, md: 0 },
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
                <Box mb={2}>
                  <img
                    src="/assets/images/avatars/user_icon.jpg"
                    alt="icon"
                    style={{ width: '100px', marginBottom: '16px' }}
                  />
                </Box>

                <Typography variant="h5" sx={{ mb: 1 }}>
                  Log in to your account
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}></Typography>

                {/* Email Input */}
                <TextField
                  required
                  fullWidth
                  name="text"
                  label="Username"
                  value={username}
                  onChange={handleChangeEmail}
                  sx={{ mb: 3 }}
                />

                {/* Password Input */}
                <TextField
                  required
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  onChange={handleChangePassword}
                  sx={{ mb: 3 }}
                />

                {errors && <Typography color="error">{errors}</Typography>}

                <LoadingButton
                  fullWidth
                  size="large"
                  variant="contained"
                  loading={loading}
                  onClick={handleLogin}
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
                  Log In
                </LoadingButton>
              </motion.div>

              {/* <motion.div variants={fadeInUp}>
                <Link
                  href="/register"
                  variant="body1"
                  sx={{ display: 'block', mt: 2, color: 'primary.main', textDecoration: 'none' }}
                >
                  Dont have an account? <span style={{ color: 'blue' }}>Sign Up</span>
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ display: 'block', mt: 2, color: 'primary.main' }}
                >
                  Trouble signing in? Get Help
                </Link>
              </motion.div> */}

              <Divider sx={{ my: 3 }} />
            </Card>
          </motion.div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #701A75 0%, navy 100%)',
            color: '#fff',
            borderTopRightRadius: { xs: '20px', md: '30px' },
            borderBottomRightRadius: { xs: '20px', md: '30px' },
            borderLeft: `5px dashed #F6C16E`,
            boxShadow: `rgba(133, 189, 215, 0.88) 0px 30px 30px -20px`,
          }}
        >
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            style={{
              width: '80%',
              textAlign: 'center',
            }}
          >
            {/* <Box
              component="video"
              autoPlay
              loop
              muted
              src="/assets/vid-stu.mp4"
              alt="Mentor illustration"
              sx={{
                width: '100%',
                maxWidth: 400,
                mb: 3,
                borderRadius: '30px',
              }}
            /> */}

            
            <img src="http://www.mapmyindia.com/government-smart-city-solutions/images/digital_land.png" alt="" />

            <Typography variant="h4" sx={{ mb: 1 }}>
              {/* Get Personalized Counsellor */}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
