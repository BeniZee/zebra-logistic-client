import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar
} from '@mui/material';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'With over 20 years of experience in logistics, John leads our company with vision and expertise.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Sarah oversees our day-to-day operations, ensuring efficiency and excellence in every delivery.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Michael drives our technological innovation, implementing cutting-edge solutions for better logistics.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Customer Success Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Emily ensures our customers receive exceptional service and support at every step.'
    },
    {
      name: 'David Kim',
      position: 'Sustainability Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'David leads our environmental initiatives, making our operations more sustainable.'
    },
    {
      name: 'Lisa Patel',
      position: 'Human Resources Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Lisa builds and nurtures our talented team, creating a positive work environment.'
    }
  ];

  return (
    <Container maxWidth="lg" className="our-team-container">
      <Box className="team-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Meet the leaders behind Zebra Logistic's success
        </Typography>
      </Box>

      <Box className="team-intro">
        <Typography variant="body1" paragraph>
          Our leadership team brings together decades of experience in logistics, technology, and customer service. 
          Together, we're committed to transforming the logistics industry through innovation and excellence.
        </Typography>
      </Box>

      <Grid container spacing={4} className="team-grid">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="team-card">
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
                className="team-image"
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="team-values">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Team Culture
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className="culture-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Collaboration
                </Typography>
                <Typography variant="body2">
                  We believe in the power of teamwork and cross-functional collaboration to achieve our goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="culture-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body2">
                  We encourage creative thinking and continuous improvement in everything we do.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="culture-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Growth
                </Typography>
                <Typography variant="body2">
                  We support professional development and personal growth for all team members.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OurTeam; 