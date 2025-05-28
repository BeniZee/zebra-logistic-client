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
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import './Achievements.css';

const Achievements = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Zebra Logistic was established with a vision to revolutionize the logistics industry.'
    },
    {
      year: '2012',
      title: 'First Distribution Center',
      description: 'Opened our first state-of-the-art distribution center in Chicago.'
    },
    {
      year: '2015',
      title: 'National Expansion',
      description: 'Expanded operations to all major cities across North America.'
    },
    {
      year: '2018',
      title: 'Green Fleet Initiative',
      description: 'Launched our eco-friendly fleet of electric and hybrid vehicles.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced tracking and AI-powered logistics solutions.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Named "Logistics Company of the Year" by Industry Leaders Association.'
    }
  ];

  const awards = [
    {
      title: 'Best Logistics Provider 2023',
      organization: 'North American Logistics Association',
      description: 'Recognized for excellence in service delivery and customer satisfaction.'
    },
    {
      title: 'Green Business Award',
      organization: 'Environmental Protection Agency',
      description: 'Acknowledged for our commitment to sustainable practices.'
    },
    {
      title: 'Innovation Excellence',
      organization: 'Tech Logistics Forum',
      description: 'Honored for implementing cutting-edge logistics solutions.'
    },
    {
      title: 'Customer Service Excellence',
      organization: 'Service Industry Association',
      description: 'Recognized for outstanding customer support and satisfaction.'
    }
  ];

  return (
    <Container maxWidth="lg" className="achievements-container">
      <Box className="achievements-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Achievements
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Milestones and Recognition in Our Journey
        </Typography>
      </Box>

      <Box className="achievements-intro">
        <Paper elevation={3} className="intro-card">
          <Typography variant="body1" paragraph>
            Since our founding in 2010, Zebra Logistic has achieved numerous milestones and received 
            recognition for our commitment to excellence, innovation, and customer service. Our journey 
            has been marked by continuous growth and improvement, setting new standards in the logistics industry.
          </Typography>
        </Paper>
      </Box>

      <Box className="milestones-section">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Journey
        </Typography>
        <Timeline position="alternate" className="timeline">
          {milestones.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <TrendingUpIcon />
                </TimelineDot>
                {index < milestones.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6" component="h3">
                    {milestone.year}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body1">
                    {milestone.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      <Box className="awards-section">
        <Typography variant="h4" gutterBottom className="section-title">
          Awards & Recognition
        </Typography>
        <Grid container spacing={4}>
          {awards.map((award, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card className="award-card">
                <CardContent>
                  <Box className="award-icon">
                    <EmojiEventsIcon fontSize="large" />
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {award.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {award.organization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {award.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="achievements-cta">
        <Paper elevation={3} className="cta-card">
          <Typography variant="h4" gutterBottom>
            Be Part of Our Success Story
          </Typography>
          <Typography variant="body1" paragraph>
            Join us in our mission to transform the logistics industry and create a sustainable future.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/contact">
            Partner With Us
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Achievements; 