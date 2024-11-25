import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';
import NewServices from '../newservices/newservice';
import AppointmentForm from '../../components/appointment/AppointmentForm';
import './Home.css';

const Home = () => {
  const appointmentRef = useRef(null);

  const scrollToAppointment = (e) => {
    e.preventDefault();
    appointmentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <Navbar />

      <header className="home-header">
        <div className="home-header-content">
          <h1>Welcome to Our Dental Clinic</h1>
          <p>Your smile is our priority. We offer top-quality dental care with a patient-first approach.</p>
          <a href="#book-appointment" className="book-appointment-btn" onClick={scrollToAppointment}>
            Book Appointment
          </a>
        </div>
        <div className="home-header-image">
          <img src="./assets/banner.png" alt="Dental Clinic" />
          
        </div>
        
      </header>
      <NewServices /> 
     
      <section ref={appointmentRef} className="appointment-section">
        <h2>Book an Appointment</h2>
        <AppointmentForm />
      </section>

      <Footer />
    </div>
  );
};

export default Home;