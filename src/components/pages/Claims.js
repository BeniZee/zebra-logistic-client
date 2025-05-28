import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import './Claims.css';

const Claims = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    trackingNumber: '',
    claimType: '',
    damageDescription: '',
    damagePhotos: [],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    preferredContact: 'email',
    additionalNotes: ''
  });

  const steps = ['Claim Information', 'Contact Details', 'Review & Submit'];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Claim submitted successfully! We will contact you within 24 hours.');
    setFormData({
      trackingNumber: '',
      claimType: '',
      damageDescription: '',
      damagePhotos: [],
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      preferredContact: 'email',
      additionalNotes: ''
    });
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Claim Information
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Tracking Number"
                name="trackingNumber"
                value={formData.trackingNumber}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Claim Type</InputLabel>
                <Select
                  name="claimType"
                  value={formData.claimType}
                  onChange={handleFormChange}
                  label="Claim Type"
                >
                  <MenuItem value="damage">Package Damage</MenuItem>
                  <MenuItem value="loss">Package Loss</MenuItem>
                  <MenuItem value="delay">Delivery Delay</MenuItem>
                  <MenuItem value="wrong">Wrong Item</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Damage Description"
                name="damageDescription"
                value={formData.damageDescription}
                onChange={handleFormChange}
                required
                multiline
                rows={4}
                placeholder="Please provide detailed information about the issue..."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                fullWidth
              >
                Upload Photos
                <input
                  type="file"
                  hidden
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFormData(prev => ({
                      ...prev,
                      damagePhotos: [...prev.damagePhotos, ...files]
                    }));
                  }}
                />
              </Button>
              {formData.damagePhotos.length > 0 && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {formData.damagePhotos.length} photo(s) selected
                </Typography>
              )}
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Name"
                name="contactName"
                value={formData.contactName}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Email"
                name="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Phone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Preferred Contact Method</InputLabel>
                <Select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleFormChange}
                  label="Preferred Contact Method"
                >
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="phone">Phone</MenuItem>
                  <MenuItem value="both">Both</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Review Your Claim
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Claim Details
                  </Typography>
                  <Typography variant="body2">
                    <strong>Tracking Number:</strong> {formData.trackingNumber}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Claim Type:</strong> {formData.claimType}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Description:</strong> {formData.damageDescription}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Photos:</strong> {formData.damagePhotos.length} uploaded
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body2">
                    <strong>Name:</strong> {formData.contactName}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Email:</strong> {formData.contactEmail}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Phone:</strong> {formData.contactPhone}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Preferred Contact:</strong> {formData.preferredContact}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleFormChange}
                multiline
                rows={3}
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" className="claims-container">
      <Box className="claims-header">
        <Typography variant="h2" component="h1" gutterBottom>
          File a Claim
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          We're here to help resolve any issues with your shipment
        </Typography>
      </Box>

      <Paper elevation={3} className="claims-form-container">
        <Box p={4}>
          <Stepper activeStep={activeStep} className="claims-stepper">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box mt={4}>
            <form onSubmit={handleSubmit}>
              {renderStepContent(activeStep)}

              <Box mt={4} display="flex" justifyContent="space-between">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit Claim
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Paper>

      <Box mt={4} className="claims-help">
        <Alert severity="info">
          <Typography variant="body1">
            Need help filing a claim?
          </Typography>
          <Typography variant="body2">
            • Call our claims department at 1-800-ZEBRA-CLAIM
            <br />
            • Email us at claims@zebralogistic.com
            <br />
            • Chat with our support team 24/7
          </Typography>
        </Alert>
      </Box>
    </Container>
  );
};

export default Claims; 