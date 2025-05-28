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
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import NatureIcon from '@mui/icons-material/Nature';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import './Values.css';

const Values = () => {
  const values = [
    {
      icon: <EmojiObjectsIcon fontSize="large" />,
      title: 'Innovation',
      description: 'We constantly seek new ways to improve our services and stay ahead of industry trends.'
    },
    {
      icon: <HandshakeIcon fontSize="large" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    },
    {
      icon: <NatureIcon fontSize="large" />,
      title: 'Sustainability',
      description: 'We are committed to reducing our environmental impact through eco-friendly practices.'
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Efficiency',
      description: 'We optimize our operations to deliver the best service at the lowest cost.'
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Reliability',
      description: 'We build trust through consistent, dependable service delivery.'
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: 'Customer Focus',
      description: 'We put our customers first, understanding and exceeding their expectations.'
    }
  ];

  const principles = [
    {
      title: 'Environmental Responsibility',
      description: 'We actively work to reduce our carbon footprint through sustainable practices and green initiatives.'
    },
    {
      title: 'Community Engagement',
      description: 'We support local communities through various social responsibility programs and initiatives.'
    },
    {
      title: 'Employee Development',
      description: "We invest in our team's growth through continuous learning and professional development."
    },
    {
      title: 'Quality Service',
      description: 'We maintain the highest standards in every aspect of our operations.'
    }
  ];

  return (
    <Container maxWidth="lg" className="values-container">
      <Box className="values-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          The Principles That Guide Us
        </Typography>
      </Box>

      <Box className="values-intro">
        <Paper elevation={3} className="intro-card">
          <Typography variant="body1" paragraph>
            At Zebra Logistic, our values are more than just words - they are the foundation of everything we do. 
            They guide our decisions, shape our culture, and drive our success. We believe in creating a positive 
            impact through our work, both in the logistics industry and in the communities we serve.
          </Typography>
        </Paper>
      </Box>

      <Box className="values-grid">
        <Typography variant="h4" gutterBottom className="section-title">
          Core Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="value-card">
                <CardContent>
                  <Box className="value-icon">
                    {value.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="principles-section">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Principles
        </Typography>
        <Grid container spacing={4}>
          {principles.map((principle, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper elevation={3} className="principle-card">
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {principle.title}
                  </Typography>
                  <Typography variant="body1">
                    {principle.description}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="values-cta">
        <Paper elevation={3} className="cta-card">
          <Typography variant="h4" gutterBottom>
            Join Us in Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We're looking for partners and team members who share our values and vision for the future of logistics.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/contact">
            Get in Touch
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Values; 