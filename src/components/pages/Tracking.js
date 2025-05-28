import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Divider,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Tracking.css';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderAddress: '',
    senderPhone: '',
    receiverName: '',
    receiverAddress: '',
    receiverPhone: '',
    packageType: '',
    weight: '',
    dimensions: '',
    specialInstructions: ''
  });

  // Sample tracking data
  const sampleTrackingData = {
    'ZEB123456': {
      status: 'In Transit',
      origin: 'Baltimore, MD',
      destination: 'New York, NY',
      estimatedDelivery: '2024-03-20',
      currentLocation: 'Philadelphia, PA',
      history: [
        {
          date: '2024-03-18 08:00 AM',
          status: 'Package picked up',
          location: 'Baltimore, MD'
        },
        {
          date: '2024-03-18 02:30 PM',
          status: 'In transit to sorting facility',
          location: 'Baltimore, MD'
        },
        {
          date: '2024-03-19 09:15 AM',
          status: 'Arrived at sorting facility',
          location: 'Philadelphia, PA'
        },
        {
          date: '2024-03-19 11:45 AM',
          status: 'Out for delivery',
          location: 'Philadelphia, PA'
        }
      ]
    },
    'ZEB789012': {
      status: 'Delivered',
      origin: 'Los Angeles, CA',
      destination: 'San Francisco, CA',
      estimatedDelivery: '2024-03-15',
      currentLocation: 'San Francisco, CA',
      history: [
        {
          date: '2024-03-13 09:00 AM',
          status: 'Package picked up',
          location: 'Los Angeles, CA'
        },
        {
          date: '2024-03-14 10:30 AM',
          status: 'In transit',
          location: 'Bakersfield, CA'
        },
        {
          date: '2024-03-15 08:45 AM',
          status: 'Out for delivery',
          location: 'San Francisco, CA'
        },
        {
          date: '2024-03-15 02:30 PM',
          status: 'Delivered',
          location: 'San Francisco, CA'
        }
      ]
    }
  };

  const handleTrack = () => {
    if (!trackingNumber) {
      setError('Please enter a tracking number');
      return;
    }

    const info = sampleTrackingData[trackingNumber];
    if (info) {
      setTrackingInfo(info);
      setError('');
    } else {
      setError('Tracking number not found');
      setTrackingInfo(null);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Tracking request submitted successfully! You will receive a tracking number via email.');
    setOpenForm(false);
    setFormData({
      senderName: '',
      senderAddress: '',
      senderPhone: '',
      receiverName: '',
      receiverAddress: '',
      receiverPhone: '',
      packageType: '',
      weight: '',
      dimensions: '',
      specialInstructions: ''
    });
  };

  return (
    <Container maxWidth="lg" className="tracking-container">
      <Box className="tracking-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Track Your Shipment
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Enter your tracking number to get real-time updates
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setOpenForm(true)}
          className="new-tracking-button"
        >
          Create New Tracking
        </Button>
      </Box>

      <Paper elevation={3} className="tracking-search">
        <Box p={3}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Tracking Number"
                variant="outlined"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your tracking number (e.g., ZEB123456)"
                error={!!error}
                helperText={error}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
                onClick={handleTrack}
              >
                Track Shipment
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {trackingInfo && (
        <Box className="tracking-results" mt={4}>
          <Card className="tracking-summary">
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Box className="tracking-info-item">
                    <Typography variant="subtitle2" color="text.secondary">
                      Status
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {trackingInfo.status}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className="tracking-info-item">
                    <Typography variant="subtitle2" color="text.secondary">
                      Current Location
                    </Typography>
                    <Typography variant="h6">
                      {trackingInfo.currentLocation}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className="tracking-info-item">
                    <Typography variant="subtitle2" color="text.secondary">
                      Estimated Delivery
                    </Typography>
                    <Typography variant="h6">
                      {trackingInfo.estimatedDelivery}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className="tracking-info-item">
                    <Typography variant="subtitle2" color="text.secondary">
                      Tracking Number
                    </Typography>
                    <Typography variant="h6">
                      {trackingNumber}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Tracking History
            </Typography>
            <Stepper orientation="vertical" className="tracking-history">
              {trackingInfo.history.map((event, index) => (
                <Step key={index} active={true}>
                  <StepLabel>
                    <Box className="tracking-event">
                      <Typography variant="subtitle1">
                        {event.status}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.location}
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      )}

      <Dialog 
        open={openForm} 
        onClose={() => setOpenForm(false)} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          style: {
            maxHeight: '90vh',
            overflowY: 'auto'
          }
        }}
      >
        <DialogTitle>
          <Typography variant="h5" component="div">
            Create New Tracking Request
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit} className="tracking-form">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Sender Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Sender Name"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Sender Phone"
                  name="senderPhone"
                  value={formData.senderPhone}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sender Address"
                  name="senderAddress"
                  value={formData.senderAddress}
                  onChange={handleFormChange}
                  required
                  multiline
                  rows={2}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Receiver Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Receiver Name"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Receiver Phone"
                  name="receiverPhone"
                  value={formData.receiverPhone}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Receiver Address"
                  name="receiverAddress"
                  value={formData.receiverAddress}
                  onChange={handleFormChange}
                  required
                  multiline
                  rows={2}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Package Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth required>
                  <InputLabel>Package Type</InputLabel>
                  <Select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleFormChange}
                    label="Package Type"
                  >
                    <MenuItem value="document">Document</MenuItem>
                    <MenuItem value="parcel">Parcel</MenuItem>
                    <MenuItem value="pallet">Pallet</MenuItem>
                    <MenuItem value="furniture">Furniture</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Weight (kg)"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleFormChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Dimensions (LxWxH cm)"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleFormChange}
                  placeholder="e.g., 30x20x15"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Special Instructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleFormChange}
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained" color="primary">
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>

      <Box mt={4} className="tracking-help">
        <Alert severity="info">
          <Typography variant="body1">
            Need help? Try these sample tracking numbers:
          </Typography>
          <Typography variant="body2">
            • ZEB123456 (In Transit)
            <br />
            • ZEB789012 (Delivered)
          </Typography>
        </Alert>
      </Box>
    </Container>
  );
};

export default Tracking; 