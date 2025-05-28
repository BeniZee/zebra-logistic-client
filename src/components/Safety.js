import React from 'react';
import './Safety.css';

const Safety = () => {
  return (
    <div className="safety-container">
      <h2>Safety Guidelines</h2>
      
      <div className="safety-sections">
        <section className="safety-section">
          <h3>Driver Safety</h3>
          <ul>
            <li>Regular vehicle maintenance checks</li>
            <li>Mandatory rest periods</li>
            <li>Speed limit compliance</li>
            <li>Proper load securing</li>
            <li>Regular safety training</li>
          </ul>
        </section>

        <section className="safety-section">
          <h3>Road Safety</h3>
          <ul>
            <li>Weather condition monitoring</li>
            <li>Route planning and optimization</li>
            <li>Emergency response procedures</li>
            <li>Vehicle tracking systems</li>
            <li>Regular safety audits</li>
          </ul>
        </section>

        <section className="safety-section">
          <h3>Load Safety</h3>
          <ul>
            <li>Proper weight distribution</li>
            <li>Secure cargo fastening</li>
            <li>Hazardous materials handling</li>
            <li>Temperature monitoring</li>
            <li>Regular inspections</li>
          </ul>
        </section>
      </div>

      <div className="safety-contact">
        <h3>Safety Concerns?</h3>
        <p>Contact our safety department:</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: safety@zebralogistics.com</p>
      </div>
    </div>
  );
};

export default Safety; 