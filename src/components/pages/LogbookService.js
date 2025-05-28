import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper } from '@mui/material';
import Logbook from '../Logbook';
import TimeSheet from '../TimeSheet';
import './LogbookService.css';

const LogbookService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" className="logbook-service-container">
      <Typography variant="h4" className="logbook-service-title">
        Driver Management System
      </Typography>
      
      <Paper className="logbook-service-tabs">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Logbook" />
          <Tab label="Time Sheet" />
        </Tabs>
      </Paper>

      <Box className="logbook-service-content">
        {activeTab === 0 && <Logbook />}
        {activeTab === 1 && <TimeSheet />}
      </Box>
    </Container>
  );
};

export default LogbookService; 