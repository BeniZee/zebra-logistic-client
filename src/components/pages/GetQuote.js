import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Typography, Box, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';

const GetQuote = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const freightTypes = [
    'General Freight',
    'Refrigerated',
    'Hazardous Materials',
    'Oversized Load',
    'Express Delivery',
    'International'
  ];

  const onSubmit = async (data) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Quote request data:', data);
      toast.success('Quote request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
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
        Get a Quote
      </Typography>

      <Paper 
        elevation={3} 
        sx={{ 
          p: 4,
          backgroundColor: '#ffffff',
          borderRadius: 2
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Pickup Location"
                variant="outlined"
                {...register('pickupLocation', { 
                  required: 'Pickup location is required'
                })}
                error={!!errors.pickupLocation}
                helperText={errors.pickupLocation?.message}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Delivery Location"
                variant="outlined"
                {...register('deliveryLocation', { 
                  required: 'Delivery location is required'
                })}
                error={!!errors.deliveryLocation}
                helperText={errors.deliveryLocation?.message}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Type of Freight"
                variant="outlined"
                {...register('freightType', { 
                  required: 'Freight type is required'
                })}
                error={!!errors.freightType}
                helperText={errors.freightType?.message}
              >
                {freightTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Weight (kg)"
                type="number"
                variant="outlined"
                {...register('weight', { 
                  required: 'Weight is required',
                  min: {
                    value: 0,
                    message: 'Weight must be positive'
                  }
                })}
                error={!!errors.weight}
                helperText={errors.weight?.message}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Length (cm)"
                type="number"
                variant="outlined"
                {...register('length', { 
                  required: 'Length is required',
                  min: {
                    value: 0,
                    message: 'Length must be positive'
                  }
                })}
                error={!!errors.length}
                helperText={errors.length?.message}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Width (cm)"
                type="number"
                variant="outlined"
                {...register('width', { 
                  required: 'Width is required',
                  min: {
                    value: 0,
                    message: 'Width must be positive'
                  }
                })}
                error={!!errors.width}
                helperText={errors.width?.message}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Height (cm)"
                type="number"
                variant="outlined"
                {...register('height', { 
                  required: 'Height is required',
                  min: {
                    value: 0,
                    message: 'Height must be positive'
                  }
                })}
                error={!!errors.height}
                helperText={errors.height?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                multiline
                rows={4}
                variant="outlined"
                {...register('notes')}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  backgroundColor: '#3B82F6',
                  '&:hover': {
                    backgroundColor: '#2563EB'
                  }
                }}
              >
                Request Quote
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default GetQuote; 