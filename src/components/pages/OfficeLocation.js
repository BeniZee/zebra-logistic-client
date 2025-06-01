import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';

const OfficeLocation = () => {
  const officeLocation = {
    lat: 37.7749,
    lng: -122.4194,
    address: '123 Logistics Way, San Francisco, CA 94107'
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '8px'
  };

  const center = {
    lat: officeLocation.lat,
    lng: officeLocation.lng
  };

  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${officeLocation.lat},${officeLocation.lng}`,
      '_blank'
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ 
          color: '#3B82F6',
          fontWeight: 'bold',
          mb: 4
        }}
      >
        Our Office Location
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            backgroundColor: '#ffffff',
            borderRadius: 2,
            mb: 4
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon sx={{ mr: 2, color: '#3B82F6', fontSize: 32 }} />
            <Typography variant="h5" sx={{ color: '#333' }}>
              {officeLocation.address}
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<DirectionsIcon />}
            onClick={handleDirections}
            sx={{
              backgroundColor: '#3B82F6',
              '&:hover': {
                backgroundColor: '#2563EB'
              }
            }}
          >
            Get Directions
          </Button>
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 2,
            backgroundColor: '#ffffff',
            borderRadius: 2
          }}
        >
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Paper>
      </Box>
    </Container>
  );
};

export default OfficeLocation; 