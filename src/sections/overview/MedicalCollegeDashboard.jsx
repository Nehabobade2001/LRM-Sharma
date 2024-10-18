import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Paper,
} from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const collegeData = [
  { name: 'Data Entry', LRM: 442 },
  { name: 'Legal Team',  LRM: 2 },
  { name: ' Doc', LRM: 355 },
  { name: 'View',  LRM: 51 },
  { name: 'year',  LRM: 11 },
  { name: 'month',  LRM: 1 },
  { name: 'weak',  LRM: 20 },
  { name: 'active',  LRM: 2 },
];

const COLORS = ['#ffc658', '#8884d8', '#82ca9d', '#ff8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CollegeCard = ({ name,  LRM, isHovered, onHover }) => {
  return (
    <Card 
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        transition: 'all 0.1s ease-in-out',
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
        bgcolor: isHovered ? 'navy' : 'background.paper',
        color: isHovered ? '#FFF' : '#000',
        cursor: "pointer"
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="h4" component="div">
          { LRM}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        LRM
        </Typography>
      </CardContent>
    </Card>
  );
};

const MedicalCollegeDashboard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const chartData = collegeData.map((item, index) => ({
    ...item,
    value: hoveredIndex === index ? item. LRM * 120 : item. LRM
  }));

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>
        Land Records Management
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Navigate across different Land Records Management & CRM
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 0, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PieChart width={300} height={300}>
              <Pie
                data={chartData}
                cx={150}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name, props) => [
                hoveredIndex === props.index ? `${value} seats` : `${value}  LRM`,
                props.payload.name
              ]} />
              <text x={150} y={150} textAnchor="middle" dominantBaseline="middle">
                <tspan x={150} dy="-1em" fontSize="24" fontWeight="bold">{totalValue}</tspan>
                <tspan x={150} dy="1.5em" fontSize="16">{hoveredIndex !== null ? 'seats' : ' LRM'}</tspan>
              </text>
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={1}>
            {collegeData.map((college, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <CollegeCard 
                  {...college} 
                  isHovered={hoveredIndex === index}
                  onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MedicalCollegeDashboard;