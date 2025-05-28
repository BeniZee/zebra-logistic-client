import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Zebra Logistic</h1>
          <p>Your trusted partner in transportation and logistics solutions</p>
          <div className="hero-buttons">
            <Link to="/services" className="primary-button">Our Services</Link>
            <Link to="/contact" className="secondary-button">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Local Delivery</h3>
            <p>Fast and reliable local transportation solutions</p>
            <Link to="/services/local-delivery">Learn More</Link>
          </div>
          
          <div className="service-card">
            <h3>Long Haul</h3>
            <p>Cross-country transportation services</p>
            <Link to="/services/long-haul">Learn More</Link>
          </div>
          
          <div className="service-card">
            <h3>Warehousing</h3>
            <p>Secure storage and distribution solutions</p>
            <Link to="/services/warehousing">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Reliability</h3>
            <p>On-time delivery guaranteed</p>
          </div>
          
          <div className="feature">
            <h3>Experience</h3>
            <p>Over 20 years in the industry</p>
          </div>
          
          <div className="feature">
            <h3>Technology</h3>
            <p>Advanced tracking and monitoring</p>
          </div>
          
          <div className="feature">
            <h3>Support</h3>
            <p>24/7 customer service</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free quote</p>
          <Link to="/contact" className="cta-button">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 