import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Button
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: <LocalShippingIcon fontSize="large" />,
      title: 'Nationwide Coverage',
      description: 'With distribution centers across North America, we provide comprehensive logistics solutions for businesses of all sizes.'
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Secure & Reliable',
      description: 'Our advanced tracking systems and security protocols ensure your shipments are always safe and accounted for.'
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Fast Delivery',
      description: 'Optimized routes and efficient operations mean your packages reach their destination quickly and on time.'
    },
    {
      icon: <SupportIcon fontSize="large" />,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is available around the clock to assist you with any questions or concerns.'
    }
  ];

  const stats = [
    {
      number: '1M+',
      label: 'Deliveries Completed',
      description: 'Successfully delivered packages across North America'
    },
    {
      number: '50+',
      label: 'Distribution Centers',
      description: 'Strategic locations for efficient delivery'
    },
    {
      number: '1000+',
      label: 'Fleet Vehicles',
      description: 'Modern fleet including electric vehicles'
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Consistently high customer satisfaction ratings'
    }
  ];

  return (
    <Container maxWidth="lg" className="about-container">
      <Box className="about-header">
        <Typography variant="h2" component="h1" gutterBottom>
          About Zebra Logistic
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Your Trusted Partner in Logistics Excellence
        </Typography>
      </Box>

      <Box className="about-intro">
        <Paper elevation={3} className="intro-card">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" paragraph>
              Zebra Logistic is a leading logistics and transportation company dedicated to providing innovative 
              solutions for businesses across North America. Founded in 2010, we've grown from a small local 
              operation to one of the most trusted names in the logistics industry.
            </Typography>
            <Typography variant="body1" paragraph>
              Our commitment to excellence, innovation, and customer satisfaction has made us the preferred 
              choice for businesses looking for reliable, efficient, and sustainable logistics solutions.
            </Typography>
          </CardContent>
        </Paper>
      </Box>

      <Box className="features-section">
        <Typography variant="h4" gutterBottom className="section-title">
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="feature-card">
                <CardContent>
                  <Box className="feature-icon">
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="stats-section">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Impact
        </Typography>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="stat-card">
                <CardContent>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {stat.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="mission-section">
        <Paper elevation={3} className="mission-card">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              To revolutionize the logistics industry through innovation, sustainability, and exceptional 
              customer service. We strive to be the most trusted and efficient logistics partner for 
              businesses across North America.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              To be the global leader in sustainable logistics solutions, setting new standards for 
              efficiency, reliability, and environmental responsibility in the transportation industry.
            </Typography>
            <Box className="cta-section">
              <Button variant="contained" color="primary" size="large">
                Learn More About Our Services
              </Button>
            </Box>
          </CardContent>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUs; 