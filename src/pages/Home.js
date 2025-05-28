import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';

const services = [
  {
    title: 'Freight Services',
    description: 'Reliable and efficient freight transportation solutions for your business needs.',
    icon: <LocalShippingIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Fleet Maintenance',
    description: 'Comprehensive maintenance and repair services to keep your fleet running smoothly.',
    icon: <BuildIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Professional Drivers',
    description: 'Experienced and certified drivers committed to safe and timely deliveries.',
    icon: <PeopleIcon sx={{ fontSize: 60 }} />,
  },
];

function Home() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Your Trusted Partner in Logistics
              </Typography>
              <Typography variant="h5" paragraph>
                Delivering excellence in transportation and logistics solutions
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mr: 2 }}
                >
                  Our Services
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  color="inherit"
                  size="large"
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Comprehensive logistics solutions tailored to your needs
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{service.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'secondary.main', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Join our team of professional drivers or partner with us for your logistics needs
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/driver-application"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2 }}
            >
              Apply Now
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              color="inherit"
              size="large"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 