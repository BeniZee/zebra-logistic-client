import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const SupportHours = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
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
        Support Hours
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <AccessTimeIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
              <Typography variant="h5" sx={{ color: '#333' }}>
                Business Hours
              </Typography>
            </Box>

            {businessHours.map((schedule, index) => (
              <Box 
                key={index}
                sx={{ 
                  mb: 2,
                  p: 2,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {schedule.day}
                </Typography>
                <Typography variant="body1" sx={{ color: schedule.day === 'Sunday' ? '#dc3545' : '#28a745' }}>
                  {schedule.hours}
                </Typography>
              </Box>
            ))}
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
              <Typography variant="h5" sx={{ color: '#333' }}>
                Contact Information
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
                Phone Support
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Main: (555) 123-4567
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Support: (555) 987-6543
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
                Email Support
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                General Inquiries: info@zebralogistics.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Support: support@zebralogistics.com
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupportHours; 