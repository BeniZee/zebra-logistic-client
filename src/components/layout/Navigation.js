import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// Import Material-UI icons
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import SupportIcon from '@mui/icons-material/Support';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkIcon from '@mui/icons-material/Work';
import LoginIcon from '@mui/icons-material/Login';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PublicIcon from '@mui/icons-material/Public';
import RouteIcon from '@mui/icons-material/Route';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FlagIcon from '@mui/icons-material/Flag';
import StarIcon from '@mui/icons-material/Star';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    home: [
      { name: 'Welcome', path: '/#welcome', icon: <HomeIcon /> },
      { name: 'Our Mission', path: '/mission', icon: <FlagIcon /> },
      { name: 'Why Choose Us', path: '/why-choose-us', icon: <StarIcon /> },
      { name: 'Latest News', path: '/#news', icon: <NewspaperIcon /> }
    ],
    services: [
      { name: 'Local Delivery', path: '/services/local-delivery', icon: <DirectionsCarIcon /> },
      { name: 'Long Haul', path: '/services/long-haul', icon: <LocalShippingIcon /> },
      { name: 'Cross Country', path: '/services/cross-country', icon: <PublicIcon /> },
      { name: 'Dedicated Routes', path: '/services/dedicated-routes', icon: <RouteIcon /> },
      { name: 'Warehousing', path: '/services/warehousing', icon: <WarehouseIcon /> }
    ],
    about: [
      { name: 'Our Story', path: '/about#story', icon: <BusinessIcon /> },
      { name: 'Our Team', path: '/about#team', icon: <GroupIcon /> },
      { name: 'Our Values', path: '/about#values', icon: <EmojiEventsIcon /> },
      { name: 'Our Achievements', path: '/about#achievements', icon: <LocalActivityIcon /> }
    ],
    contact: [
      { name: 'Contact Form', path: '/contact#form', icon: <ContactMailIcon /> },
      { name: 'Office Locations', path: '/contact#locations', icon: <LocationOnIcon /> },
      { name: 'Support Hours', path: '/contact#support', icon: <AccessTimeIcon /> },
      { name: 'Get a Quote', path: '/contact#quote', icon: <RequestQuoteIcon /> }
    ],
    support: [
      { name: 'Customer Service', path: '/support/customer-service', icon: <SupportIcon /> },
      { name: 'Claims', path: '/support/claims', icon: <AssignmentIcon /> },
      { name: 'Feedback', path: '/support/feedback', icon: <FeedbackIcon /> },
      { name: 'Tracking', path: '/support/tracking', icon: <LocalActivityIcon /> },
      { name: 'Driver Management', path: '/driver-management', icon: <AssignmentIcon /> }
    ]
  };

  const handleDropdownClick = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <LocalShippingIcon className="logo-icon" />
          Zebra Logistic
        </Link>
        
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdownClick('home')}
            >
              <HomeIcon className="nav-icon" />
              Home
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'home' && (
              <div className="dropdown-menu">
                {menuItems.home.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="nav-item">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdownClick('services')}
            >
              <LocalShippingIcon className="nav-icon" />
              Services
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu">
                {menuItems.services.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="nav-item">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdownClick('about')}
            >
              <InfoIcon className="nav-icon" />
              About Us
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu">
                {menuItems.about.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/careers" className="nav-link">
            <WorkIcon className="nav-icon" />
            Careers
          </Link>
          
          <div className="nav-item">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdownClick('support')}
            >
              <SupportIcon className="nav-icon" />
              Support
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'support' && (
              <div className="dropdown-menu">
                {menuItems.support.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="nav-item">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdownClick('contact')}
            >
              <ContactMailIcon className="nav-icon" />
              Contact
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'contact' && (
              <div className="dropdown-menu">
                {menuItems.contact.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/login" className="nav-link login-btn">
            <LoginIcon className="nav-icon" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 