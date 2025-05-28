import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import LiveChat from '../LiveChat';
import './CustomerSupport.css';

const CustomerSupport = () => {
  return (
    <Container maxWidth="lg" className="customer-support-container">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Customer Support
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        We're here to help you with any questions or concerns
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" paragraph>
                <strong>Phone:</strong> (555) 123-4567
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> support@zebralogistics.com
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM EST
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Emergency Support:</strong> Available 24/7
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Support Services
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" paragraph>
                • Shipment Tracking
              </Typography>
              <Typography variant="body1" paragraph>
                • Claims Processing
              </Typography>
              <Typography variant="body1" paragraph>
                • Rate Inquiries
              </Typography>
              <Typography variant="body1" paragraph>
                • Schedule Changes
              </Typography>
              <Typography variant="body1" paragraph>
                • Technical Support
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