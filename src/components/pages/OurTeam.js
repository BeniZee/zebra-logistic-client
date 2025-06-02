import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'With over 20 years of experience in logistics, John has transformed Zebra Logistic into a leading industry player.',
      linkedin: 'https://linkedin.com/in/johnsmith',
      email: 'john.smith@zebralogistic.com'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Sarah leads our operations with a focus on efficiency and innovation, ensuring seamless delivery across North America.',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@zebralogistic.com'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Michael drives our technological innovation, implementing cutting-edge solutions for tracking and optimization.',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael.chen@zebralogistic.com'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Customer Success Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Emily ensures exceptional customer experience through personalized service and innovative support solutions.',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily.rodriguez@zebralogistic.com'
    }
  ];

  return (
    <Container maxWidth="lg" className="team-container">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" sx={{ color: '#3B82F6', fontWeight: 700, mb: 2 }}>
          Our Team
        </Typography>
        <Typography variant="h5" sx={{ color: '#3B82F6' }}>
          Meet the dedicated professionals behind Zebra Logistics
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
                sx={{ borderRadius: '8px', mb: 2 }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ color: '#3B82F6', mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#3B82F6', mb: 2 }}>
                  {member.position}
                </Typography>
                <Typography variant="body2" sx={{ color: '#3B82F6', mb: 2 }}>
                  {member.bio}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    startIcon={<LinkedInIcon />}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#3B82F6' }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    startIcon={<EmailIcon />}
                    href={`mailto:${member.email}`}
                    sx={{ color: '#3B82F6' }}
                  >
                    Email
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#3B82F6',
            '&:hover': {
              backgroundColor: '#2563EB'
            }
          }}
        >
          Join Our Team
        </Button>
      </Box>
    </Container>
  );
};

export default OurTeam; 