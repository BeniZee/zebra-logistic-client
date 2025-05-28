import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Button
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Team.css';

const Team = () => {
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
      <Box className="team-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Meet the People Behind Our Success
        </Typography>
      </Box>

      <Box className="team-intro">
        <Paper elevation={3} className="intro-card">
          <Typography variant="body1" paragraph>
            At Zebra Logistic, our team is our greatest asset. We bring together passionate professionals 
            from diverse backgrounds, united by a common goal: to revolutionize the logistics industry 
            through innovation, reliability, and exceptional service.
          </Typography>
        </Paper>
      </Box>

      <Box className="team-story">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Story
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="story-card">
              <Typography variant="h5" gutterBottom>
                The Beginning
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2010, Zebra Logistic started as a small team of logistics enthusiasts with a vision to transform the industry. 
                What began as a local delivery service has grown into a comprehensive logistics solution provider serving clients across North America.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="story-card">
              <Typography variant="h5" gutterBottom>
                Growth & Innovation
              </Typography>
              <Typography variant="body1" paragraph>
                Over the years, we've expanded our services, embraced cutting-edge technology, and built a team of industry experts. 
                Our commitment to innovation has led to the development of proprietary tracking systems and optimization algorithms.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="story-card">
              <Typography variant="h5" gutterBottom>
                Milestones
              </Typography>
              <Typography variant="body1" paragraph>
                • 2015: Expanded to nationwide operations<br />
                • 2018: Launched our AI-powered route optimization system<br />
                • 2020: Achieved ISO 9001 certification<br />
                • 2022: Reached 1 million successful deliveries<br />
                • 2023: Named "Logistics Provider of the Year"
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="story-card">
              <Typography variant="h5" gutterBottom>
                Our Future
              </Typography>
              <Typography variant="body1" paragraph>
                As we look ahead, we're focused on sustainable growth, technological advancement, and expanding our global reach. 
                Our goal is to become the most trusted name in logistics while maintaining our commitment to excellence and innovation.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4} className="team-grid">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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
                <Typography variant="body2" color="text.secondary" paragraph>
                  {member.bio}
                </Typography>
                <Box className="team-social">
                  <Button
                    startIcon={<LinkedInIcon />}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    startIcon={<EmailIcon />}
                    href={`mailto:${member.email}`}
                  >
                    Email
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="team-cta">
        <Paper elevation={3} className="cta-card">
          <Typography variant="h4" gutterBottom>
            Join Our Team
          </Typography>
          <Typography variant="body1" paragraph>
            We're always looking for talented individuals who share our passion for excellence and innovation.
            Check out our current openings and become part of our success story.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/careers">
            View Open Positions
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Team; 