import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import './OurMission.css';

const OurMission = () => {
  return (
    <Container maxWidth="lg" className="mission-container">
      <Box className="mission-header">
        <FlagIcon sx={{ fontSize: 60, color: '#1a237e' }} />
        <Typography variant="h2" component="h1" className="mission-title">
          Our Mission
        </Typography>
      </Box>

      <Grid container spacing={4} className="mission-content">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="mission-card">
            <Typography variant="h4" component="h2" className="card-title">
              Vision
            </Typography>
            <Typography variant="body1" className="card-text">
              To be the leading logistics provider, known for our commitment to excellence, 
              innovation, and customer satisfaction in the transportation industry.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="mission-card">
            <Typography variant="h4" component="h2" className="card-title">
              Mission Statement
            </Typography>
            <Typography variant="body1" className="card-text">
              We are dedicated to providing reliable, efficient, and sustainable logistics 
              solutions while maintaining the highest standards of safety and customer service.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="mission-card values-card">
            <Typography variant="h4" component="h2" className="card-title">
              Core Values
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box className="value-item">
                  <Typography variant="h6" className="value-title">
                    Excellence
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We strive for excellence in every aspect of our operations.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="value-item">
                  <Typography variant="h6" className="value-title">
                    Integrity
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We conduct our business with honesty and transparency.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="value-item">
                  <Typography variant="h6" className="value-title">
                    Innovation
                  </Typography>
                  <Typography variant="body2" className="value-description">
                    We continuously seek new ways to improve our services.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurMission; 