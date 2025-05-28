import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Map.css';

const Map = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const location = {
    lat: 39.2673,  // Baltimore coordinates
    lng: -76.6424
  };

  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 39.2673,
    lng: -76.6424
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+15551234567';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@zebralogistics.com';
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setShowContactForm(false);
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker
            position={location}
            title="Zebra Logistic - Baltimore Office"
          />
        </GoogleMap>
      </LoadScript>

      <div className="location-details">
        <div className="map-info">
          <h3>Baltimore Office</h3>
          <div className="info-section">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>1400 W Patapsco Ave</p>
              <p>Baltimore, MD 21230</p>
            </div>
          </div>
          
          <div className="info-section">
            <i className="fas fa-clock"></i>
            <div>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="info-section">
            <i className="fas fa-phone"></i>
            <div>
              <p>Phone: (555) 123-4567</p>
              <p>Fax: (555) 123-4568</p>
            </div>
          </div>

          <div className="info-section">
            <i className="fas fa-envelope"></i>
            <div>
              <p>Email: info@zebralogistics.com</p>
              <p>Support: support@zebralogistics.com</p>
            </div>
          </div>

          <div className="map-actions">
            <button 
              className="action-btn directions-btn"
              onClick={handleGetDirections}
            >
              <i className="fas fa-directions"></i> Get Directions
            </button>
            <button 
              className="action-btn call-btn"
              onClick={handleCall}
            >
              <i className="fas fa-phone"></i> Call Us
            </button>
            <button 
              className="action-btn email-btn"
              onClick={handleEmail}
            >
              <i className="fas fa-envelope"></i> Email Us
            </button>
            <button 
              className="action-btn contact-btn"
              onClick={() => setShowContactForm(!showContactForm)}
            >
              <i className="fas fa-comment"></i> Contact Form
            </button>
          </div>
        </div>

        {showContactForm && (
          <div className="contact-form-container">
            <h3>Contact Us</h3>
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="4"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Send Message</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowContactForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map; 