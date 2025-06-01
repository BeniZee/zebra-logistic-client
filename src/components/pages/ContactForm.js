import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Container, Typography, Box, Paper, TextField, Button, Alert } from '@mui/material';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
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
        Contact Us
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
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              {...register('fullName', { 
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9-+() ]{10,}$/,
                  message: 'Invalid phone number'
                }
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              {...register('subject', { 
                required: 'Subject is required',
                minLength: {
                  value: 3,
                  message: 'Subject must be at least 3 characters'
                }
              })}
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              {...register('message', { 
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters'
                }
              })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          </Box>

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
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm; 