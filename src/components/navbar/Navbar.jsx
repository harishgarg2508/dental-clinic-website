import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Dental Clinic</Link>
      </div>
      <ul className={`navbar-links ${showLinks ? 'show' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
            Services
          </Link>
        </li>
        {/* <li>
          <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>
            Team
          </Link>
        </li> */}
        <li>
          <Link to="/appointment" className={location.pathname === '/appointment' ? 'active' : ''}>
            Appointment
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={`navbar-toggler ${showLinks ? 'active' : ''}`} onClick={toggleNavbar}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;