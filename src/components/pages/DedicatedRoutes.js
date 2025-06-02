import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimerIcon from '@mui/icons-material/Timer';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import './DedicatedRoutes.css';

const DedicatedRoutes = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Custom Routes',
      description: 'Tailored transportation solutions for your specific needs.'
    },
    {
      icon: <TimerIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Consistent Schedule',
      description: 'Reliable and predictable delivery times for your business.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Dedicated Drivers',
      description: 'Experienced drivers familiar with your routes and requirements.'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your transportation needs.'
    }
  ];

  return (
    <Container maxWidth="lg" className="dedicated-routes-container">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" sx={{ color: '#3B82F6', fontWeight: 700, mb: 2 }}>
          Dedicated Routes
        </Typography>
        <Typography variant="h5" sx={{ color: '#3B82F6' }}>
          Customized transportation solutions for regular routes
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ color: '#3B82F6', mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#3B82F6' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#3B82F6',
            '&:hover': {
              backgroundColor: '#2563EB'
            }
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default DedicatedRoutes; 