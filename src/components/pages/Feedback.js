import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Rating,
  Card,
  CardContent,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const testimonials = [
    {
      name: "John Smith",
      role: "Business Owner",
      rating: 5,
      comment: "Zebra Logistic has been an excellent partner for our shipping needs. Their service is reliable and their team is always professional.",
      avatar: "JS"
    },
    {
      name: "Sarah Johnson",
      role: "Logistics Manager",
      rating: 5,
      comment: "The team at Zebra Logistic goes above and beyond to ensure our deliveries are on time. Their customer service is outstanding.",
      avatar: "SJ"
    },
    {
      name: "Michael Brown",
      role: "Supply Chain Director",
      rating: 4,
      comment: "We've been working with Zebra Logistic for over a year now. Their tracking system is excellent and their drivers are always courteous.",
      avatar: "MB"
    },
    {
      name: "Emily Davis",
      role: "E-commerce Manager",
      rating: 5,
      comment: "As an online retailer, reliable shipping is crucial. Zebra Logistic has never let us down. Their real-time tracking and consistent delivery times are impressive.",
      avatar: "ED"
    },
    {
      name: "Robert Wilson",
      role: "Manufacturing Director",
      rating: 5,
      comment: "The warehousing solutions provided by Zebra Logistic have significantly improved our inventory management. Their team is knowledgeable and responsive.",
      avatar: "RW"
    },
    {
      name: "Lisa Anderson",
      role: "Small Business Owner",
      rating: 5,
      comment: "I was hesitant to switch logistics providers, but Zebra Logistic made the transition seamless. Their rates are competitive and service is top-notch.",
      avatar: "LA"
    },
    {
      name: "David Martinez",
      role: "Fleet Manager",
      rating: 4,
      comment: "The cross-country shipping service is excellent. Our goods always arrive on time and in perfect condition. Highly recommended!",
      avatar: "DM"
    },
    {
      name: "Jennifer Taylor",
      role: "Operations Manager",
      rating: 5,
      comment: "The dedicated routes service has helped us optimize our supply chain. The team at Zebra Logistic truly understands our business needs.",
      avatar: "JT"
    },
    {
      name: "Thomas Clark",
      role: "Retail Manager",
      rating: 5,
      comment: "Local delivery service is fast and reliable. Our customers are always happy with the delivery times. Great job, Zebra Logistic!",
      avatar: "TC"
    },
    {
      name: "Amanda White",
      role: "Distribution Coordinator",
      rating: 4,
      comment: "The temperature-controlled shipping service is excellent. Our perishable goods always arrive fresh and on schedule.",
      avatar: "AW"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Feedback submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      rating: 0,
      category: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="lg" className="feedback-container">
      <Box className="feedback-header">
        <Typography variant="h2" component="h1" gutterBottom>
          Customer Feedback
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          We value your opinion and are committed to improving our services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Feedback Form */}
        <Grid item xs={12} md={6}>
          <Card className="feedback-form-card">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Share Your Experience
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="legend">Rating</Typography>
                    <Rating
                      name="rating"
                      value={Number(formData.rating)}
                      onChange={handleChange}
                      size="large"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                        required
                      >
                        <MenuItem value="service">Service Quality</MenuItem>
                        <MenuItem value="delivery">Delivery Experience</MenuItem>
                        <MenuItem value="customer-service">Customer Service</MenuItem>
                        <MenuItem value="pricing">Pricing</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<ThumbUpIcon />}
                      fullWidth
                    >
                      Submit Feedback
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Testimonials */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            What Our Customers Say
          </Typography>
          <Grid container spacing={2}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} key={index}>
                <Card className="testimonial-card">
                  <CardContent>
                    <Box className="testimonial-header">
                      <Avatar className="testimonial-avatar">
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly />
                    <Typography variant="body1" className="testimonial-comment">
                      {testimonial.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Thank you for your feedback! We appreciate your input.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Feedback; 