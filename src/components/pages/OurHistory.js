import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './OurHistory.css';

const OurHistory = () => {
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

  return (
    <Container maxWidth="lg" className="history-container">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" sx={{ color: '#3B82F6', fontWeight: 700, mb: 2 }}>
          Our History
        </Typography>
        <Typography variant="h5" sx={{ color: '#3B82F6' }}>
          A journey of growth, innovation, and excellence
        </Typography>
      </Box>

      <Box className="history-timeline">
        {milestones.map((milestone, index) => (
          <Box key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <Paper elevation={3} className="timeline-paper">
              <Box className="timeline-icon" sx={{ color: '#3B82F6' }}>
                {milestone.icon}
              </Box>
              <Typography variant="h6" component="h3" sx={{ color: '#3B82F6' }}>
                {milestone.year}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#3B82F6', mb: 2 }}>
                {milestone.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#3B82F6' }}>
                {milestone.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default OurHistory; 