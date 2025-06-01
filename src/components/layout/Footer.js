import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
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
            <p>11400 W Patapsco Ave</p>
            <p>Baltimore, MD 21230</p>
            <p>Phone: 443-820-8354</p>
            <p>Email: info@zebralogistics.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-section">
          <a 
            href="https://facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FacebookIcon />
          </a>
          <a 
            href="https://instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <InstagramIcon />
          </a>
          <a 
            href="https://x.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <TwitterIcon />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <LinkedInIcon />
          </a>
          <a 
            href="https://youtube.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <YouTubeIcon />
          </a>
          <a 
            href="mailto:info@zebralogistics.com" 
            className="social-icon"
          >
            <EmailIcon />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zebra Logistic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 