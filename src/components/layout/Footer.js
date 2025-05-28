import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <Link to="/services/local-delivery">Local Delivery</Link>
            <Link to="/services/long-haul">Long Haul</Link>
            <Link to="/services/cross-country">Cross Country</Link>
            <Link to="/services/dedicated-routes">Dedicated Routes</Link>
            <Link to="/services/warehousing">Warehousing</Link>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <Link to="/support/customer-service">Customer Service</Link>
            <Link to="/support/claims">Claims</Link>
            <Link to="/support/feedback">Feedback</Link>
            <Link to="/support/tracking">Tracking</Link>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>123 Logistics Way</p>
            <p>City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@zebralogistics.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zebra Logistic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 