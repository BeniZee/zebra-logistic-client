import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  Alert,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './DriverApplication.css';

const steps = ['Personal Information', 'License & Experience', 'Vehicle Information', 'Additional Details'];

const DriverApplication = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // License & Experience
    licenseNumber: '',
    licenseState: '',
    licenseExpiry: '',
    experience: '',
    vehicleType: '',
    
    // Vehicle Information
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleVin: '',
    
    // Additional Details
    availability: '',
    preferredRoutes: '',
    certifications: '',
    notes: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: e.target.type === 'checkbox' ? checked : value
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    
    switch (activeStep) {
      case 0:
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        break;
      case 1:
        if (!formData.licenseNumber) newErrors.licenseNumber = 'License number is required';
        if (!formData.licenseState) newErrors.licenseState = 'License state is required';
        if (!formData.licenseExpiry) newErrors.licenseExpiry = 'License expiry date is required';
        break;
      case 2:
        if (!formData.vehicleMake) newErrors.vehicleMake = 'Vehicle make is required';
        if (!formData.vehicleModel) newErrors.vehicleModel = 'Vehicle model is required';
        if (!formData.vehicleYear) newErrors.vehicleYear = 'Vehicle year is required';
        break;
      case 3:
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // You would typically send this data to your backend
      alert('Application submitted successfully!');
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="ZIP Code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="License Number"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                error={!!errors.licenseNumber}
                helperText={errors.licenseNumber}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="License State"
                name="licenseState"
                value={formData.licenseState}
                onChange={handleChange}
                error={!!errors.licenseState}
                helperText={errors.licenseState}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="License Expiry Date"
                name="licenseExpiry"
                type="date"
                value={formData.licenseExpiry}
                onChange={handleChange}
                error={!!errors.licenseExpiry}
                helperText={errors.licenseExpiry}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Vehicle Type"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <MenuItem value="CDL-A">CDL-A</MenuItem>
                <MenuItem value="CDL-B">CDL-B</MenuItem>
                <MenuItem value="CDL-C">CDL-C</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vehicle Make"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                error={!!errors.vehicleMake}
                helperText={errors.vehicleMake}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vehicle Model"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                error={!!errors.vehicleModel}
                helperText={errors.vehicleModel}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Vehicle Year"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                error={!!errors.vehicleYear}
                helperText={errors.vehicleYear}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="VIN"
                name="vehicleVin"
                value={formData.vehicleVin}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Preferred Routes"
                name="preferredRoutes"
                value={formData.preferredRoutes}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
              {errors.agreeToTerms && (
                <Alert severity="error" sx={{ mt: 1 }}>
                  {errors.agreeToTerms}
                </Alert>
              )}
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" className="driver-application-container">
      <Box className="application-header">
        <DirectionsCarIcon sx={{ fontSize: 60, color: '#1a237e' }} />
        <Typography variant="h2" component="h1" className="application-title">
          Driver Application
        </Typography>
      </Box>

      <Paper elevation={3} className="application-form-container">
        <Stepper activeStep={activeStep} className="application-stepper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit} className="application-form">
          {renderStepContent(activeStep)}

          <Box className="form-actions">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className="back-button"
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit-button"
              >
                Submit Application
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className="next-button"
              >
                Next
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default DriverApplication; 