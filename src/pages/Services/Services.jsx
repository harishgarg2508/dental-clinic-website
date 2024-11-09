// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Dental Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Teeth Whitening</h3>
          <p>Brighten your smile with our safe and effective teeth whitening services.</p>
          <Link to="/services/teeth-whitening" className="service-link">Learn More</Link>
        </div>
        <div className="service-item">
          <h3>Dental Implants</h3>
          <p>Restore your smile with durable and natural-looking dental implants.</p>
          <Link to="/services/dental-implants" className="service-link">Learn More</Link>
        </div>
        <div className="service-item">
          <h3>Orthodontics</h3>
          <p>Achieve the perfect smile with braces and Invisalign treatments.</p>
          <Link to="/services/orthodontics" className="service-link">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
