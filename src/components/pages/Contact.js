import React from 'react';
import Map from '../Map';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any questions or inquiries</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <h2>Baltimore Office</h2>
            <p>1400 W Patapsco Ave</p>
            <p>Baltimore, MD 21230</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: baltimore@zebralogistics.com</p>
          </div>
        </div>

        <div className="map-section">
          <Map />
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 