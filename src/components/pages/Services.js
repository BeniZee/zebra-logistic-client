import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import RouteIcon from '@mui/icons-material/Route';
import SupportIcon from '@mui/icons-material/Support';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Local Delivery',
      description: 'Fast and reliable local delivery services for businesses and individuals.',
      icon: <LocalShippingIcon fontSize="large" />,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/services/local-delivery'
    },
    {
      title: 'Long-Haul Transportation',
      description: 'Efficient long-distance transportation solutions across North America.',
      icon: <RouteIcon fontSize="large" />,
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/services/long-haul'
    },
    {
      title: 'Cross-Country Shipping',
      description: 'Comprehensive shipping solutions for businesses of all sizes.',
      icon: <LocalShippingIcon fontSize="large" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/services/cross-country'
    },
    {
      title: 'Dedicated Routes',
      description: 'Customized transportation solutions for regular shipping needs.',
      icon: <RouteIcon fontSize="large" />,
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/services/dedicated-routes'
    },
    {
      title: 'Warehousing',
      description: 'Secure storage solutions with advanced inventory management.',
      icon: <WarehouseIcon fontSize="large" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/services/warehousing'
    },
    {
      title: 'Customer Support',
      description: '24/7 customer support and tracking services.',
      icon: <SupportIcon fontSize="large" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/support/customer-service'
    }
  ];

  return (
    <Container maxWidth="lg" className="services-container">
      <Box className="services-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Comprehensive Logistics Solutions for Your Business
        </Typography>
      </Box>

      <Box className="services-intro">
        <Paper elevation={3} className="intro-card">
          <Typography variant="body1" paragraph>
            At Zebra Logistic, we offer a wide range of logistics and transportation services designed to meet 
            the unique needs of your business. From local deliveries to cross-country shipping, our solutions 
            are built on reliability, efficiency, and customer satisfaction.
          </Typography>
        </Paper>
      </Box>

      <Grid container spacing={4} className="services-grid">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="service-card">
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
                className="service-image"
              />
              <CardContent>
                <Box className="service-icon">
                  {service.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={service.link}
                  className="service-button"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="services-cta">
        <Paper elevation={3} className="cta-card">
          <Typography variant="h4" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us today to discuss your logistics needs and discover how we can help your business grow.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/contact">
            Contact Us
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Services; 