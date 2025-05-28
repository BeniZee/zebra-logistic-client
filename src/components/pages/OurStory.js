import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Divider,
  Button
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './OurStory.css';

const OurStory = () => {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Zebra Logistic was founded by a team of logistics experts with a vision to revolutionize the industry. Starting with just five trucks and a small warehouse in Baltimore, we set out to make shipping more efficient and customer-friendly.',
      icon: <BusinessIcon />
    },
    {
      year: '2012',
      title: 'First Major Expansion',
      description: 'Our commitment to excellence led to rapid growth. We expanded operations across the East Coast, establishing our first major distribution center in Baltimore. This marked the beginning of our nationwide presence.',
      icon: <LocationOnIcon />
    },
    {
      year: '2015',
      title: 'Technology Innovation',
      description: 'We launched our proprietary tracking system, revolutionizing how customers interact with their shipments. This innovation set new standards for shipment visibility and customer communication in the logistics industry.',
      icon: <TrendingUpIcon />
    },
    {
      year: '2018',
      title: 'National Coverage',
      description: 'Achieved nationwide coverage with a network of 50+ distribution centers and 1,000+ delivery vehicles. Our expansion was driven by customer demand and our commitment to providing reliable service across the country.',
      icon: <LocalShippingIcon />
    },
    {
      year: '2020',
      title: 'Sustainability Initiative',
      description: 'Launched our green fleet initiative, introducing electric vehicles and sustainable packaging solutions. This commitment to environmental responsibility has become a cornerstone of our operations.',
      icon: <EmojiEventsIcon />
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Recognized as one of the top 10 logistics companies in North America for customer satisfaction and innovation. This achievement reflects our dedication to excellence and continuous improvement.',
      icon: <EmojiEventsIcon />
    }
  ];

  const values = [
    {
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring their success is our priority. Our customer-centric approach has been the key to our growth and success.',
      icon: <PeopleIcon />
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving and adopting new technologies to improve our services and efficiency. We believe in staying ahead of the curve to provide the best possible solutions.',
      icon: <TrendingUpIcon />
    },
    {
      title: 'Reliability',
      description: 'Building trust through consistent, on-time deliveries and transparent communication. Our reliability has made us the preferred choice for businesses across North America.',
      icon: <LocalShippingIcon />
    },
    {
      title: 'Sustainability',
      description: 'Committed to reducing our environmental impact through eco-friendly practices and green initiatives. We believe in responsible growth that benefits both our customers and the planet.',
      icon: <BusinessIcon />
    }
  ];

  const achievements = [
    {
      number: '1M+',
      title: 'Deliveries Completed',
      description: 'Successfully delivered over 1 million packages across North America, maintaining a 99.9% on-time delivery rate'
    },
    {
      number: '50+',
      title: 'Distribution Centers',
      description: 'Strategic locations across the continent, ensuring fast and efficient delivery to every corner of North America'
    },
    {
      number: '1000+',
      title: 'Fleet Vehicles',
      description: 'Modern fleet including electric and hybrid vehicles, reducing our carbon footprint while maintaining efficiency'
    },
    {
      number: '98%',
      title: 'Customer Satisfaction',
      description: 'Consistently high customer satisfaction ratings, reflecting our commitment to excellence in service'
    }
  ];

  return (
    <Container maxWidth="lg" className="our-story-container">
      <Box className="story-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          From humble beginnings to industry leaders in logistics
        </Typography>
      </Box>

      <Box className="story-intro">
        <Paper elevation={3} className="intro-card">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              The Zebra Logistic Journey
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2010, Zebra Logistic began with a simple mission: to make shipping and logistics more efficient, 
              transparent, and customer-friendly. What started as a small operation with just five trucks has grown into 
              one of the most trusted names in the logistics industry.
            </Typography>
            <Typography variant="body1" paragraph>
              Our journey began when a group of logistics experts recognized a gap in the market for a more customer-focused, 
              technology-driven logistics provider. They envisioned a company that would not just move packages, but would 
              transform the entire shipping experience through innovation and exceptional service.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, we operate a fleet of over 1,000 vehicles, serve customers across North America, and continue to 
              innovate in the logistics space. Our commitment to excellence and customer satisfaction has earned us 
              recognition as a leader in the industry.
            </Typography>
          </CardContent>
        </Paper>
      </Box>

      <Box className="achievements-section">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Achievements
        </Typography>
        <Grid container spacing={3}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="achievement-card">
                <CardContent>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {achievement.number}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="story-timeline">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Journey Through Time
        </Typography>
        <Box className="timeline-container">
          {milestones.map((milestone, index) => (
            <Box key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <Paper elevation={3} className="timeline-paper">
                <Box className="timeline-icon">
                  {milestone.icon}
                </Box>
                <Typography variant="h6" component="h3">
                  {milestone.year}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {milestone.title}
                </Typography>
                <Typography variant="body2">
                  {milestone.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="story-values">
        <Typography variant="h4" gutterBottom className="section-title">
          Our Core Values
        </Typography>
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="value-card">
                <CardContent>
                  <Box className="value-icon">
                    {value.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
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

      <Box className="story-future">
        <Paper elevation={3} className="future-card">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Looking Forward
            </Typography>
            <Typography variant="body1" paragraph>
              As we continue to grow, our commitment to innovation and customer service remains unwavering. 
              We're investing in cutting-edge technology, expanding our sustainable practices, and developing 
              new solutions to meet the evolving needs of our customers.
            </Typography>
            <Typography variant="body1" paragraph>
              Our vision for the future includes:
            </Typography>
            <ul className="future-list">
              <li>Expanding our electric vehicle fleet to reduce carbon emissions by 50% by 2025</li>
              <li>Implementing AI-driven route optimization for faster and more efficient deliveries</li>
              <li>Developing new sustainable packaging solutions to minimize environmental impact</li>
              <li>Expanding our international presence to serve customers globally</li>
              <li>Launching a new customer portal with real-time tracking and analytics</li>
            </ul>
            <Box className="cta-section">
              <Button variant="contained" color="primary" size="large">
                Join Our Journey
              </Button>
            </Box>
          </CardContent>
        </Paper>
      </Box>
    </Container>
  );
};

export default OurStory; 