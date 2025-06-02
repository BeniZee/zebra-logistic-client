import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import './Careers.css';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: '',
  });

  const jobListings = [
    {
      id: 1,
      title: 'Professional Truck Driver',
      location: 'Baltimore, MD',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Join our team of professional drivers. We offer competitive pay, benefits, and a supportive work environment.',
      requirements: [
        'Valid CDL-A license',
        '2+ years of experience',
        'Clean driving record',
        'Strong communication skills'
      ]
    },
    {
      id: 2,
      title: 'Logistics Coordinator',
      location: 'Baltimore, MD',
      type: 'Full-time',
      salary: '$45,000 - $55,000',
      description: 'Coordinate and optimize logistics operations. Work with drivers, customers, and management to ensure smooth operations.',
      requirements: [
        'Bachelor\'s degree in Logistics or related field',
        '2+ years of logistics experience',
        'Strong organizational skills',
        'Proficiency in logistics software'
      ]
    },
    {
      id: 3,
      title: 'Warehouse Manager',
      location: 'Baltimore, MD',
      type: 'Full-time',
      salary: '$60,000 - $70,000',
      description: 'Manage warehouse operations, inventory, and staff. Ensure efficient and safe warehouse operations.',
      requirements: [
        '5+ years of warehouse management experience',
        'Strong leadership skills',
        'Inventory management expertise',
        'Forklift certification'
      ]
    },
    {
      id: 4,
      title: 'Customer Service Representative',
      location: 'Baltimore, MD',
      type: 'Full-time',
      salary: '$35,000 - $45,000',
      description: 'Provide excellent customer service and support to our clients. Handle inquiries, track shipments, and resolve issues.',
      requirements: [
        '2+ years of customer service experience',
        'Excellent communication skills',
        'Problem-solving abilities',
        'Proficiency in CRM software'
      ]
    }
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setApplicationData(prev => ({
      ...prev,
      position: job.title
    }));
    setApplicationOpen(true);
  };

  const handleClose = () => {
    setApplicationOpen(false);
    setSelectedJob(null);
  };

  const handleApplicationChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationData);
    alert('Application submitted successfully!');
    handleClose();
  };

  return (
    <Container maxWidth="lg" className="careers-container">
      <Box className="careers-header">
        <WorkIcon sx={{ fontSize: 60, color: '#3B82F6' }} />
        <Typography variant="h2" component="h1" className="careers-title">
          Careers at Zebra Logistic
        </Typography>
        <Typography variant="h6" className="careers-subtitle">
          Join our team and be part of something great
        </Typography>
      </Box>

      <Grid container spacing={4} className="job-listings">
        {jobListings.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <Card className="job-card">
              <CardContent>
                <Typography variant="h5" component="h2" className="job-title">
                  {job.title}
                </Typography>
                <Box className="job-details">
                  <Box className="job-detail">
                    <LocationOnIcon sx={{ color: '#3B82F6' }} />
                    <Typography>{job.location}</Typography>
                  </Box>
                  <Box className="job-detail">
                    <ScheduleIcon sx={{ color: '#3B82F6' }} />
                    <Typography>{job.type}</Typography>
                  </Box>
                  <Box className="job-detail">
                    <AttachMoneyIcon sx={{ color: '#3B82F6' }} />
                    <Typography>{job.salary}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" className="job-description">
                  {job.description}
                </Typography>
                <Typography variant="h6" className="requirements-title">
                  Requirements:
                </Typography>
                <ul className="requirements-list">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleJobClick(job)}
                  className="apply-button"
                  sx={{ 
                    backgroundColor: '#3B82F6',
                    '&:hover': {
                      backgroundColor: '#2563EB'
                    }
                  }}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={applicationOpen}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        className="application-dialog"
      >
        <DialogTitle sx={{ color: '#3B82F6' }}>
          Apply for {selectedJob?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="close-button"
            sx={{ color: '#3B82F6' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleApplicationSubmit} className="application-form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={applicationData.name}
                  onChange={handleApplicationChange}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={applicationData.email}
                  onChange={handleApplicationChange}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={applicationData.phone}
                  onChange={handleApplicationChange}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Years of Experience"
                  name="experience"
                  type="number"
                  value={applicationData.experience}
                  onChange={handleApplicationChange}
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
                  label="Cover Letter"
                  name="coverLetter"
                  multiline
                  rows={4}
                  value={applicationData.coverLetter}
                  onChange={handleApplicationChange}
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
                  variant="outlined"
                  component="label"
                  className="resume-upload"
                  sx={{ 
                    borderColor: '#3B82F6',
                    color: '#3B82F6',
                    '&:hover': {
                      borderColor: '#2563EB',
                      backgroundColor: 'rgba(59, 130, 246, 0.04)'
                    }
                  }}
                >
                  Upload Resume
                  <input
                    type="file"
                    name="resume"
                    onChange={handleApplicationChange}
                    accept=".pdf,.doc,.docx"
                    hidden
                    required
                  />
                </Button>
                {applicationData.resume && (
                  <Typography variant="body2" className="file-name">
                    Selected file: {applicationData.resume.name}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <DialogActions>
              <Button 
                onClick={handleClose}
                sx={{ color: '#3B82F6' }}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="contained"
                sx={{ 
                  backgroundColor: '#3B82F6',
                  '&:hover': {
                    backgroundColor: '#2563EB'
                  }
                }}
              >
                Submit Application
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Careers; 