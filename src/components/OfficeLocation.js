import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Tabs, Tab } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OfficeMap from './OfficeMap';

const offices = [
  {
    id: 'sf',
    name: 'San Francisco',
    address: '123 Logistics Way, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@zebralogistics.com',
    hours: {
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: 'la',
    name: 'Los Angeles',
    address: '456 Shipping Blvd, Los Angeles, CA 90001',
    phone: '+1 (555) 234-5678',
    email: 'la@zebralogistics.com',
    hours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '9:00 AM - 3:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  {
    id: 'ny',
    name: 'New York',
    address: '789 Transport Ave, New York, NY 10001',
    phone: '+1 (555) 345-6789',
    email: 'ny@zebralogistics.com',
    hours: {
      weekdays: '8:30 AM - 5:30 PM',
      saturday: '9:00 AM - 2:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: 'chicago',
    name: 'Chicago',
    address: '321 Delivery St, Chicago, IL 60601',
    phone: '+1 (555) 456-7890',
    email: 'chicago@zebralogistics.com',
    hours: {
      weekdays: '8:00 AM - 5:00 PM',
      saturday: '9:00 AM - 3:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
  {
    id: 'miami',
    name: 'Miami',
    address: '654 Cargo Rd, Miami, FL 33101',
    phone: '+1 (555) 567-8901',
    email: 'miami@zebralogistics.com',
    hours: {
      weekdays: '8:30 AM - 5:30 PM',
      saturday: '9:00 AM - 2:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    }
  }
];

const OfficeLocation = () => {
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  const handleOfficeChange = (event, newValue) => {
    setSelectedOffice(offices.find(office => office.id === newValue));
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Office Locations
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Tabs
                value={selectedOffice.id}
                onChange={handleOfficeChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 3 }}
              >
                {offices.map((office) => (
                  <Tab
                    key={office.id}
                    value={office.id}
                    label={office.name}
                  />
                ))}
              </Tabs>

              <Typography variant="h5" gutterBottom>
                {selectedOffice.name} Office
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>
                  {selectedOffice.address}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>
                  {selectedOffice.phone}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>
                  {selectedOffice.email}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>
                  Monday - Friday: {selectedOffice.hours.weekdays}<br />
                  Saturday: {selectedOffice.hours.saturday}<br />
                  Sunday: {selectedOffice.hours.sunday}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ height: '100%', overflow: 'hidden' }}>
              <OfficeMap
                center={selectedOffice.coordinates}
                officeName={selectedOffice.name}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OfficeLocation; 