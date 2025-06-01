import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './Contact.css';

const Contact = () => {
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
          mb: 4
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              backgroundColor: '#ffffff',
              borderRadius: 2,
              height: '100%'
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
              Get in Touch
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We're here to help! Choose from the following options to get in touch with us:
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  component={Link}
                  to="/contact/office-location"
                  variant="contained"
                  fullWidth
                  startIcon={<LocationOnIcon />}
                  sx={{
                    backgroundColor: '#3B82F6',
                    '&:hover': {
                      backgroundColor: '#2563EB'
                    },
                    mb: 2
                  }}
                >
                  Office Location
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  component={Link}
                  to="/contact/form"
                  variant="contained"
                  fullWidth
                  startIcon={<EmailIcon />}
                  sx={{
                    backgroundColor: '#3B82F6',
                    '&:hover': {
                      backgroundColor: '#2563EB'
                    },
                    mb: 2
                  }}
                >
                  Contact Form
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  component={Link}
                  to="/contact/support-hours"
                  variant="contained"
                  fullWidth
                  startIcon={<AccessTimeIcon />}
                  sx={{
                    backgroundColor: '#3B82F6',
                    '&:hover': {
                      backgroundColor: '#2563EB'
                    },
                    mb: 2
                  }}
                >
                  Support Hours
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  component={Link}
                  to="/contact/get-quote"
                  variant="contained"
                  fullWidth
                  startIcon={<LocalShippingIcon />}
                  sx={{
                    backgroundColor: '#3B82F6',
                    '&:hover': {
                      backgroundColor: '#2563EB'
                    }
                  }}
                >
                  Get a Quote
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              backgroundColor: '#ffffff',
              borderRadius: 2,
              height: '100%'
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
              Quick Contact
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#333' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    443-820-8354
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#333' }}>
                    Email
                  </Typography>
                  <Typography variant="body1">
                    info@zebralogistics.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: '#333' }}>
                    Address
                  </Typography>
                  <Typography variant="body1">
                    11400 W Patapsco Ave
                  </Typography>
                  <Typography variant="body1">
                    Baltimore, MD 21230
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 