import React from 'react';
import { Link } from 'react-router-dom';
import './Apply.css';

const Apply = () => {
  return (
    <div className="apply-container">
      <h1>Apply for a Position</h1>
      <p>Choose the position you'd like to apply for:</p>
      
      <div className="positions-grid">
        <Link to="/driver-application" className="position-card">
          <h3>Professional Driver</h3>
          <p>Join our team of professional drivers</p>
        </Link>
        
        <Link to="/dispatcher-position" className="position-card">
          <h3>Dispatcher</h3>
          <p>Coordinate our transportation operations</p>
        </Link>
        
        <Link to="/office-staff" className="position-card">
          <h3>Office Staff</h3>
          <p>Support our administrative operations</p>
        </Link>
        
        <Link to="/customer-service-application" className="position-card">
          <h3>Customer Service</h3>
          <p>Help us provide exceptional service</p>
        </Link>
      </div>
    </div>
  );
};

export default Apply; 