import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const About = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Nationwide Coverage',
      description: 'Extensive network covering all major cities and regions across the country.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Secure Transportation',
      description: 'State-of-the-art security measures to ensure your cargo arrives safely.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Fast Delivery',
      description: 'Optimized routes and efficient logistics for timely deliveries.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you with any queries.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ 
          color: '#3B82F6',
          fontWeight: 'bold',
          mb: 6
        }}
      >
        About Zebra Logistics
      </Typography>

      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            color: '#333',
            mb: 4,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          We are a leading logistics company dedicated to providing reliable and efficient transportation solutions for businesses of all sizes.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#333',
                  mb: 2,
                  fontWeight: 'bold'
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ color: '#666' }}
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            color: '#333',
            mb: 4,
            fontWeight: 'bold'
          }}
        >
          Our Mission
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}
        >
          At Zebra Logistics, our mission is to revolutionize the logistics industry by providing innovative, 
          reliable, and sustainable transportation solutions. We are committed to excellence in service, 
          safety, and customer satisfaction, while maintaining the highest standards of professionalism 
          and integrity in all our operations.
        </Typography>
      </Box>

      <Box>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            color: '#333',
            mb: 4,
            fontWeight: 'bold'
          }}
        >
          Our Vision
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8
          }}
        >
          We envision a future where logistics is seamless, efficient, and environmentally conscious. 
          Through continuous innovation and dedication to our customers' needs, we strive to be the 
          leading force in shaping the future of transportation and logistics.
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 