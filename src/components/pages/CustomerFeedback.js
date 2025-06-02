import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    feedbackType: '',
    message: '',
    serviceUsed: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="lg" className="customer-feedback-container">
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ color: '#3B82F6', fontWeight: 'bold', mb: 4 }}
      >
        Customer Feedback
      </Typography>

      <Typography variant="h6" align="center" sx={{ color: '#3B82F6', mb: 6 }}>
        We value your opinion! Help us improve our services by sharing your experience.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, backgroundColor: '#ffffff', borderRadius: 2, height: '100%' }}>
            <Typography variant="h5" sx={{ color: '#3B82F6', fontWeight: 'bold', mb: 3 }}>
              Why Your Feedback Matters
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#3B82F6', mb: 3 }}>
              Your feedback helps us understand what we're doing well and where we can improve. 
              We use your insights to enhance our services and provide a better experience for all our customers.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#3B82F6', mb: 2, fontWeight: 'bold' }}>
                What We're Looking For:
              </Typography>
              <ul style={{ color: '#3B82F6', paddingLeft: '20px' }}>
                <li>Service quality and reliability</li>
                <li>Communication effectiveness</li>
                <li>Timeliness of deliveries</li>
                <li>Customer service experience</li>
                <li>Overall satisfaction</li>
              </ul>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, backgroundColor: '#ffffff', borderRadius: 2, height: '100%' }}>
            <Typography variant="h5" sx={{ color: '#3B82F6', fontWeight: 'bold', mb: 3 }}>
              Share Your Experience
            </Typography>

            {submitted ? (
              <Alert severity="success" sx={{ mb: 3, '& .MuiAlert-message': { color: '#3B82F6' } }}>
                Thank you for your feedback! We appreciate your time and input.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ 
                        '& .MuiInputLabel-root': { color: '#3B82F6' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#3B82F6' },
                          '&:hover fieldset': { borderColor: '#2563EB' },
                          '&.Mui-focused fieldset': { borderColor: '#3B82F6' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ 
                        '& .MuiInputLabel-root': { color: '#3B82F6' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#3B82F6' },
                          '&:hover fieldset': { borderColor: '#2563EB' },
                          '&.Mui-focused fieldset': { borderColor: '#3B82F6' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ color: '#3B82F6', mb: 1 }}>
                      Rate Your Experience
                    </Typography>
                    <Rating
                      name="rating"
                      value={formData.rating}
                      onChange={(event, newValue) => {
                        setFormData({ ...formData, rating: newValue });
                      }}
                      size="large"
                      sx={{ color: '#3B82F6' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel sx={{ color: '#3B82F6' }}>Type of Feedback</InputLabel>
                      <Select
                        name="feedbackType"
                        value={formData.feedbackType}
                        onChange={handleChange}
                        label="Type of Feedback"
                        sx={{ 
                          '& .MuiInputLabel-root': { color: '#3B82F6' },
                          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3B82F6' },
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2563EB' },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#3B82F6' }
                        }}
                      >
                        <MenuItem value="praise">Praise</MenuItem>
                        <MenuItem value="suggestion">Suggestion</MenuItem>
                        <MenuItem value="complaint">Complaint</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel sx={{ color: '#3B82F6' }}>Service Used</InputLabel>
                      <Select
                        name="serviceUsed"
                        value={formData.serviceUsed}
                        onChange={handleChange}
                        label="Service Used"
                        sx={{ 
                          '& .MuiInputLabel-root': { color: '#3B82F6' },
                          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3B82F6' },
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2563EB' },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#3B82F6' }
                        }}
                      >
                        <MenuItem value="local">Local Delivery</MenuItem>
                        <MenuItem value="long-haul">Long Haul</MenuItem>
                        <MenuItem value="cross-country">Cross Country</MenuItem>
                        <MenuItem value="dedicated">Dedicated Routes</MenuItem>
                        <MenuItem value="warehousing">Warehousing</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Feedback"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ 
                        '& .MuiInputLabel-root': { color: '#3B82F6' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#3B82F6' },
                          '&:hover fieldset': { borderColor: '#2563EB' },
                          '&.Mui-focused fieldset': { borderColor: '#3B82F6' }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      fullWidth
                      sx={{ 
                        backgroundColor: '#3B82F6',
                        '&:hover': {
                          backgroundColor: '#2563EB'
                        }
                      }}
                    >
                      Submit Feedback
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerFeedback; 