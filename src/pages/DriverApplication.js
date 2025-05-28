import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Paper,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.object({
    street: yup.string().required('Street address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string().required('ZIP code is required'),
  }),
  licenseNumber: yup.string().required('License number is required'),
  licenseState: yup.string().required('License state is required'),
  experience: yup.number().required('Years of experience is required').min(0),
  vehicleType: yup.string().required('Vehicle type is required'),
});

const Input = styled('input')({
  display: 'none',
});

function DriverApplication() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
      },
      licenseNumber: '',
      licenseState: '',
      experience: '',
      vehicleType: '',
      resume: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // TODO: Implement form submission to backend
        console.log('Form submitted:', values);
        // Show success message
      } catch (error) {
        console.error('Error submitting form:', error);
        // Show error message
      }
    },
  });

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Driver Application
        </Typography>
        <Typography variant="body1" paragraph align="center" color="text.secondary">
          Join our team of professional drivers and start your journey with Zebra Logistic
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {/* Personal Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address.street"
                name="address.street"
                label="Street Address"
                value={formik.values.address.street}
                onChange={formik.handleChange}
                error={formik.touched.address?.street && Boolean(formik.errors.address?.street)}
                helperText={formik.touched.address?.street && formik.errors.address?.street}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="address.city"
                name="address.city"
                label="City"
                value={formik.values.address.city}
                onChange={formik.handleChange}
                error={formik.touched.address?.city && Boolean(formik.errors.address?.city)}
                helperText={formik.touched.address?.city && formik.errors.address?.city}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id="address.state"
                name="address.state"
                label="State"
                value={formik.values.address.state}
                onChange={formik.handleChange}
                error={formik.touched.address?.state && Boolean(formik.errors.address?.state)}
                helperText={formik.touched.address?.state && formik.errors.address?.state}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id="address.zipCode"
                name="address.zipCode"
                label="ZIP Code"
                value={formik.values.address.zipCode}
                onChange={formik.handleChange}
                error={formik.touched.address?.zipCode && Boolean(formik.errors.address?.zipCode)}
                helperText={formik.touched.address?.zipCode && formik.errors.address?.zipCode}
              />
            </Grid>

            {/* License Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                License Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="licenseNumber"
                name="licenseNumber"
                label="License Number"
                value={formik.values.licenseNumber}
                onChange={formik.handleChange}
                error={formik.touched.licenseNumber && Boolean(formik.errors.licenseNumber)}
                helperText={formik.touched.licenseNumber && formik.errors.licenseNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="licenseState"
                name="licenseState"
                label="License State"
                value={formik.values.licenseState}
                onChange={formik.handleChange}
                error={formik.touched.licenseState && Boolean(formik.errors.licenseState)}
                helperText={formik.touched.licenseState && formik.errors.licenseState}
              />
            </Grid>

            {/* Experience and Vehicle Type */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="experience"
                name="experience"
                label="Years of Experience"
                type="number"
                value={formik.values.experience}
                onChange={formik.handleChange}
                error={formik.touched.experience && Boolean(formik.errors.experience)}
                helperText={formik.touched.experience && formik.errors.experience}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="vehicleType"
                name="vehicleType"
                select
                label="Vehicle Type"
                value={formik.values.vehicleType}
                onChange={formik.handleChange}
                error={formik.touched.vehicleType && Boolean(formik.errors.vehicleType)}
                helperText={formik.touched.vehicleType && formik.errors.vehicleType}
              >
                <MenuItem value="CDL-A">CDL-A</MenuItem>
                <MenuItem value="CDL-B">CDL-B</MenuItem>
                <MenuItem value="CDL-C">CDL-C</MenuItem>
              </TextField>
            </Grid>

            {/* Resume Upload */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Resume Upload
              </Typography>
              <label htmlFor="resume-upload">
                <Input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => {
                    formik.setFieldValue('resume', event.currentTarget.files[0]);
                  }}
                />
                <Button variant="outlined" component="span">
                  Upload Resume
                </Button>
              </label>
              {formik.values.resume && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected file: {formik.values.resume.name}
                </Typography>
              )}
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={formik.isSubmitting}
                >
                  Submit Application
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default DriverApplication; 