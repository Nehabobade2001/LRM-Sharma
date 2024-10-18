import { faker } from '@faker-js/faker';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';
import NEETStatisticsTable from '../NEETStatisticsTable';
import MedicalCollegeDashboard from '../MedicalCollegeDashboard';
import { useSelector } from 'react-redux';
import StudentDashboard from 'src/pages/student/studentDashboard';
import CounsellorDashboard from 'src/pages/counsellor/counsellorDashboard';
import ManagerDashboard from 'src/pages/manager/managerDashboard';

// ----------------------------------------------------------------------

export default function AppView() {
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
        const response = await axios.get('https://lrm-backend.onrender.com/api/admin/get-metrics');
        setMetrics(response.data); // Set the response data to the state
      } catch (error) {
        console.error('Error fetching the metrics', error);
      }
    }

    fetchMetrics(); // Call the function when component mounts
  }, []);

  
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">👋 Hi, Welcome back</Typography>
      {/* <Typography variant="body2" sx={{ mb: 5 }}>
      Start your path to mastering NEET PG Counselling with guidance from your personalized Medical Mentor.
      </Typography> */}

      {/* Admin Block View */}
      {user?.role === 'admin' && (
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Records"
              total={metrics.totalDocs}
              color="success"
              sx={{ backgroundImage: ` linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)` }}
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Users"
              total={metrics.totalUsers}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
              sx={{ backgroundImage: `linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)` }}
              // sx={{ backgroundImage: `linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)`,}}
            />
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="New Records"
              total={metrics.recentDocs}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
              sx={{ backgroundImage: `linear-gradient( 135deg, #FDEB71 20%, #FFAB00 100%)` }}
            />
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Last Week"
              total={metrics.recentDocs}
              color="error"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
              sx={{ backgroundImage: `linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)` }}
            />
          </Grid>

          {/* <Grid xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Record analytics "
              subheader="(+13%) increase from last year"
              chart={{
                labels: [
                  '2015',
                  '2016',
                  '2017',
                  '2018',
                  '2019',
                  '2020',
                  '2021',
                  '2022',
                  '2023',
                  '2024',
                ],
                series: [
                  {
                    name: 'Registered Candidates',
                    type: 'column',
                    fill: 'solid',
                    data: [
                      1103456, 1157340, 1223480, 1314650, 1519375, 1597435, 1634745, 1732100,
                      1827346, 1901500,
                    ], // Example data for registered candidates
                  },
                  {
                    name: 'Appeared Candidates',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      1040500, 1094320, 1160500, 1252100, 1410752, 1501685, 1552200, 1634130,
                      1705423, 1773500,
                    ], // Example data for candidates who appeared
                  },
                  {
                    name: 'Qualified Candidates',
                    type: 'line',
                    fill: 'solid',
                    data: [
                      520345, 545670, 607890, 651000, 797042, 804388, 879000, 933000, 989423,
                      1025400,
                    ], // Example data for qualified candidates
                  },
                ],
              }}
            />
          </Grid> */}


          <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title=" Land Records Management"
            subheader="Year"
            chart={{
              series: [
               
                { label: 'Des', value: 300 },
                { label: 'Nav', value: 340 },
                { label: 'Oct', value: 370 },
                { label: 'Sep', value: 430 },
                { label: 'Aug', value: 448 },
                { label: 'Jul', value: 470 },
                { label: 'Jun', value: 540 },
                { label: 'May', value: 580 },
                { label: 'Apr', value: 690 },
                { label: 'Mar', value: 1100 },
                { label: 'Feb', value: 1200 },
                { label: 'Jan', value: 1380 },
              ],
            }}
          />
        </Grid>

          <Grid xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title=" Land Records Management"
              chart={{
                series: [
                  { label: 'Years', value: 4344 },
                  { label: 'Month', value: 5435 },
                  { label: 'Weak', value: 1443 },
                  { label: 'Weak', value: 4443 },
                ],
              }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <NEETStatisticsTable />
          </Grid>

          {/* <Grid xs={12} md={12} lg={12}>
            <MedicalCollegeDashboard />
          </Grid>

          <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title=" Land Records Management"
            subheader="Year"
            chart={{
              series: [
               
                { label: 'Des', value: 350 },
                { label: 'Nav', value: 380 },
                { label: 'Sep', value: 430 },
                { label: 'Aug', value: 448 },
                { label: 'Jul', value: 470 },
                { label: 'Jun', value: 540 },
                { label: 'May', value: 580 },
                { label: 'Apr', value: 690 },
                { label: 'Mar', value: 1100 },
                { label: 'Feb', value: 1200 },
                { label: 'Jan', value: 1380 },
              ],
            }}
          />
        </Grid> */}

          {/* <Grid xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chart={{
                categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
                series: [
                  { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                  { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                  { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
                ],
              }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}


        
        </Grid>
      )}

      {/* Student Block View */}
      {user?.role === 'user' && <StudentDashboard />}

      {/* Student Block View */}
      {user?.role === 'counsellor' && <CounsellorDashboard />}

      {/* Student Block View */}
      {user?.role === 'manager' && <ManagerDashboard />}
    </Container>
  );
}
