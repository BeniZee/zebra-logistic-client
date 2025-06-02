import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SecurityIcon from '@mui/icons-material/Security';
import InventoryIcon from '@mui/icons-material/Inventory';
import SupportIcon from '@mui/icons-material/Support';
import './Warehousing.css';

const Warehousing = () => {
  const features = [
    {
      icon: <WarehouseIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Secure Storage',
      description: 'State-of-the-art facilities with advanced security systems.'
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Inventory Management',
      description: 'Real-time tracking and management of your inventory.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Climate Control',
      description: 'Temperature-controlled storage for sensitive goods.'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your storage needs.'
    }
  ];

  return (
    <Container maxWidth="lg" className="warehousing-container">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" sx={{ color: '#3B82F6', fontWeight: 700, mb: 2 }}>
          Warehousing Services
        </Typography>
        <Typography variant="h5" sx={{ color: '#3B82F6' }}>
          Secure storage and distribution solutions for your business
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

export default Warehousing; 