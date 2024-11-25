import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Dr. Suraj Sharma</h3>
          <p>
            Dr. Suraj Sharma is a highly skilled dental surgeon with extensive experience in providing top-notch dental care. 
            His clinic offers comprehensive services with a patient-first approach.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Information</h3>
          <p><strong>Dr. Suraj Sharma (BDS, MIDA)</strong></p>
          <p><strong>Mobile:</strong> M. 89628 88817, 75085 74656</p>
          <p><strong>Email:</strong> <a href="mailto:sunrisedental817@gmail.com">sunrisedental817@gmail.com</a></p>
          <p><strong>Address:</strong> Gali No 7, Near Shishu Niketan School, Nayagaon, Chandigarh, Punjab 160103</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dr. Suraj Sharma | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
