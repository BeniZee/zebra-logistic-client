import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import LiveChat from '../LiveChat';
import './CustomerSupport.css';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CustomerSupport = () => {
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
        Customer Support
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
              <SupportAgentIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
              <Typography variant="h5" sx={{ color: '#3B82F6', fontWeight: 'bold' }}>
                How Can We Help You?
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ color: '#3B82F6', mb: 3 }}>
              Our dedicated support team is here to assist you with any questions or concerns you may have. 
              We're committed to providing the best possible service and ensuring your complete satisfaction.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#3B82F6', mb: 2, fontWeight: 'bold' }}>
                Common Support Topics:
              </Typography>
              <ul style={{ color: '#3B82F6', paddingLeft: '20px' }}>
                <li>Tracking your shipment</li>
                <li>Schedule changes or delays</li>
                <li>Billing and payment inquiries</li>
                <li>Service modifications</li>
                <li>Claims and insurance</li>
                <li>General questions about our services</li>
              </ul>
            </Box>
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
              <Typography variant="h5" sx={{ color: '#3B82F6', fontWeight: 'bold' }}>
                Contact Information
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#3B82F6', mb: 2, fontWeight: 'bold' }}>
                Phone Support
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6', mb: 1 }}>
                Main: 443-820-8354
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6', mb: 1 }}>
                Support: 443-820-8354
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#3B82F6', mb: 2, fontWeight: 'bold' }}>
                Email Support
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6', mb: 1 }}>
                General Inquiries: info@zebralogistics.com
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6', mb: 1 }}>
                Support: support@zebralogistics.com
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ color: '#3B82F6', mb: 2, fontWeight: 'bold' }}>
                Support Hours
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6', mb: 1 }}>
                Monday - Friday: 9:00 AM - 6:00 PM
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6', mb: 1 }}>
                Saturday: 10:00 AM - 2:00 PM
              </Typography>
              <Typography variant="body1" sx={{ color: '#3B82F6' }}>
                Sunday: Closed
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Need immediate assistance?
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our AI assistant is available 24/7 to help you with any questions.
          Click the chat icon in the bottom right corner to get started.
        </Typography>
      </Box>

      <LiveChat />
    </Container>
  );
};

export default CustomerSupport; 