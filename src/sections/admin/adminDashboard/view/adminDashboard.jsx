
import { faker } from '@faker-js/faker';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
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

export default function AdminDashboardView() {
  // Blue-themed gradients and colors
  const blueGradient = `linear-gradient(135deg, #6a85b6 0%, #bac8e0 100%)`;
  const lightBlue = '#77B5FE';
  const darkerBlue = '#005f99';

  // Shared widget styles
  const widgetCommonStyles = {
    backgroundImage: blueGradient,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    color: '#fff', // Ensures text is white for visibility on dark backgrounds
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: '#f0f4f8', padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Sales Widget */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            sx={{ ...widgetCommonStyles }}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        {/* New Users Widget */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            sx={{ ...widgetCommonStyles }}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        {/* Item Orders Widget */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            sx={{ ...widgetCommonStyles }}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        {/* Bug Reports Widget */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            sx={{ ...widgetCommonStyles }}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        {/* NEET Statistics */}
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="NEET (UG) - Past Ten Year Statistical Analysis"
            subheader="(+13%) increase from last year"
            chart={{
              labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
              series: [
                {
                  name: 'Registered Candidates',
                  type: 'column',
                  fill: 'solid',
                  data: [1103456, 1157340, 1223480, 1314650, 1519375, 1597435, 1634745, 1732100, 1827346, 1901500],
                },
                {
                  name: 'Appeared Candidates',
                  type: 'area',
                  fill: 'gradient',
                  data: [1040500, 1094320, 1160500, 1252100, 1410752, 1501685, 1552200, 1634130, 1705423, 1773500],
                },
                {
                  name: 'Qualified Candidates',
                  type: 'line',
                  fill: 'solid',
                  data: [520345, 545670, 607890, 651000, 797042, 804388, 879000, 933000, 989423, 1025400],
                },
              ],
            }}
          />
        </Grid>

        {/* Current Visits */}
        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        {/* NEET Table */}
        <Grid xs={12} md={12} lg={12}>
          <NEETStatisticsTable />
        </Grid>

        {/* Medical College Dashboard */}
        <Grid xs={12} md={12} lg={12}>
          <MedicalCollegeDashboard />
        </Grid>

        {/* Conversion Rates */}
        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        {/* Current Subject */}
        <Grid xs={12} md={6} lg={4}>
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

        {/* Traffic by Site */}
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
                icon: <Iconify icon="eva:linkedin-fill" color={lightBlue} width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color={darkerBlue} width={32} />,
              },
            ]}
          />
        </Grid>

        {/* News Update */}
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

        {/* Order Timeline */}
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

        {/* Tasks */}
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
        </Grid>
      </Grid>
    </Container>
  );
}
