// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/Contact/ContactUs';
import Team from './pages/Teams/Team';
import AppointmentForm from './components/appointment/AppointmentForm';
import ServiceDetail from './pages/Services/ServiceDetail';
import Services from './pages/Services/Services';
import AuthForm from './pages/login/login';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
