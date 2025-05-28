import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Reliable Service',
      description: 'Our commitment to on-time delivery and consistent service quality sets us apart.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Safety First',
      description: 'We maintain the highest safety standards in all our operations and fleet management.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Efficient Operations',
      description: 'Advanced logistics technology ensures optimal route planning and resource utilization.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your needs and concerns.'
    }
  ];

  return (
    <Container maxWidth="lg" className="why-choose-us-container">
      <Box className="why-choose-us-header">
        <StarIcon sx={{ fontSize: 60, color: '#1a237e' }} />
        <Typography variant="h2" component="h1" className="why-choose-us-title">
          Why Choose Us
        </Typography>
      </Box>

      <Grid container spacing={4} className="features-grid">
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} className="feature-card">
              <Box className="feature-icon">
                {feature.icon}
              </Box>
              <Typography variant="h5" component="h3" className="feature-title">
                {feature.title}
              </Typography>
              <Typography variant="body1" className="feature-description">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box className="stats-section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="stat-card">
              <Typography variant="h3" className="stat-number">
                15+
              </Typography>
              <Typography variant="h6" className="stat-label">
                Years of Experience
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="stat-card">
              <Typography variant="h3" className="stat-number">
                1000+
              </Typography>
              <Typography variant="h6" className="stat-label">
                Satisfied Clients
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="stat-card">
              <Typography variant="h3" className="stat-number">
                50+
              </Typography>
              <Typography variant="h6" className="stat-label">
                Fleet Vehicles
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs; 