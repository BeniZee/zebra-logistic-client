import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Box, Typography, CircularProgress, Button } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// TODO: Replace with your Google Maps API key from Google Cloud Console
// 1. Go to https://console.cloud.google.com/
// 2. Create a project or select existing one
// 3. Enable Maps JavaScript API
// 4. Create credentials (API key)
// 5. Add restrictions:
//    - HTTP referrers: localhost:3001/*, localhost:3000/*
//    - API restrictions: Maps JavaScript API
const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY_HERE';

const libraries = ['places'];

const OfficeMap = ({ center, officeName }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [mapError, setMapError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
    setIsLoading(false);
    setMapError(null);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMapError = (error) => {
    console.error('Google Maps Error:', error);
    setMapError('Unable to load the map. Please check your internet connection and try again.');
    setIsLoading(false);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setMapError(null);
    window.location.reload();
  };

  if (mapError) {
    return (
      <Box 
        sx={{ 
          height: '400px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          bgcolor: '#f5f5f5',
          borderRadius: '4px',
          p: 3,
          gap: 2
        }}
      >
        <Typography color="error" align="center">
          {mapError}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleRetry}
        >
          Retry Loading Map
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', height: '400px' }}>
      {isLoading && (
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 1
          }}
        >
          <CircularProgress />
        </Box>
      )}
      
      <LoadScript 
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        libraries={libraries}
        onError={handleMapError}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ],
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            gestureHandling: 'cooperative'
          }}
        >
          <Marker
            position={center}
            title={officeName}
            onClick={() => setShowInfo(true)}
          />
          {showInfo && (
            <InfoWindow
              position={center}
              onCloseClick={() => setShowInfo(false)}
            >
              <div style={{ padding: '8px' }}>
                <h3 style={{ margin: '0 0 8px 0' }}>{officeName} Office</h3>
                <p style={{ margin: '0' }}>
                  Click for directions
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default OfficeMap; 