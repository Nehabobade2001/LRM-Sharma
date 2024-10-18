
import React, { useState ,useEffect} from 'react';
import { faker } from '@faker-js/faker';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Iconify from 'src/components/iconify';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import GaugeChart from 'react-gauge-chart';
import AppWidgetSummary from '../../../overview/app-widget-summary';
import {useSelector} from 'react-redux'
import axios from 'axios'
import AppTrafficBySite from 'src/sections/overview/app-traffic-by-site';
import AppOrderTimeline from '../../../overview/app-order-timeline';
import MedicalCollegeDashboard from 'src/sections/overview/MedicalCollegeDashboard';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const user = useSelector((state) => state.user.user);
  
  // State to store metrics
  const [metrics, setMetrics] = useState({
    totalDocs: 0,
    recentDocs: 0,
    totalUsers: 0,
  });

  // Fetch data from the API
  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await axios.get(`https://lrm-backend.onrender.com/api/v1/legal/get-metrics?id=${user.id}`);
        setMetrics(response.data); 
      } catch (error) {
        console.error("Error fetching the metrics", error);
      }
    }

    fetchMetrics(); 
  }, []);

  

  const admissionsHistory = [
    {
      id: 1,
      date: '2024-08-01',
      advice: 'Submit application for College X by the end of this week.',
    },
    {
      id: 2,
      date: '2024-07-25',
      advice: 'Prepare for the counseling session scheduled next week.',
    },
  ];

  const neetResults = [
    { id: 1, date: '2024-07-20', score: 450, analysis: 'Good chances of qualifying.' },
    { id: 2, date: '2024-06-15', score: 430, analysis: 'Improve Biology.' },
  ];

  const psychometricResults = [
    { id: 1, date: '2024-07-18', result: 'Top career preference: Medicine.' },
    { id: 2, date: '2024-06-10', result: 'Aptitude for Engineering.' },
  ];

  const [adviceOpen, setAdviceOpen] = useState(false);
  const [neetOpen, setNeetOpen] = useState(false);
  const [psychOpen, setPsychOpen] = useState(false);

  const neetData = {
    labels: ['Jun 2024', 'Jul 2024', 'Aug 2024'],
    datasets: [
      {
        label: 'NEET Score',
        data: [430, 450, 460],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f7fa' }}>
      {/* <Typography variant="h4" gutterBottom sx={{ color: '#007bff' }}>
        Legal Team Dashboard
      </Typography> */}
      <Grid container spacing={3}>
    
        <Grid xs={12} sm={6} md={3}  mt={3}>
          <AppWidgetSummary
            title="Total Records"
            total={metrics.totalDocs || 0}
            color="success"
            sx={{ backgroundImage: ` linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)`,}}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3} ml={5}  mt={3}>
          <AppWidgetSummary
            title="Recent Docs"
           total={metrics.recentDocs || 0} 
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            sx={{ backgroundImage: `linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)`,}}
            // sx={{ backgroundImage: `linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)`,}}

          />
        </Grid>

        <Grid xs={12} sm={6} md={3} ml={5}  mt={3}>
          <AppWidgetSummary
            title="Total Users"
           total={0} 
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            sx={{ backgroundImage: `linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)`,}}
            // sx={{ backgroundImage: `linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)`,}}

          />
        </Grid>


        <Grid xs={12} md={12} lg={12}>
            <MedicalCollegeDashboard  />
          </Grid>
      


      </Grid>
    </Box>
  );
};

export default StudentDashboard;
