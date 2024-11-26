import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/Contact/ContactUs';
import Appointment from './pages/Appointment/Appointment';
import ServiceDetail from './pages/Services/ServiceDetail';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;