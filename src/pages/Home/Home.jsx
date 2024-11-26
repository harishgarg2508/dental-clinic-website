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

  const openWhatsApp = () => {
    const phoneNumber = '917508574656'; // Replace with your clinic's WhatsApp number
    const message = 'Hello, I would like to book a dental appointment.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home">
      <Navbar />

      <header className="home-header">
        <div className="home-header-content">
          <h1>Welcome to Our Dental Clinic</h1>
          <p>Your smile is our priority. We offer top-quality dental care with a patient-first approach.</p>
          <div className="header-actions">
            <a href="#book-appointment" className="book-appointment-btn" onClick={scrollToAppointment}>
              Book Appointment
            </a>
            <button className="whatsapp-btn" onClick={openWhatsApp}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.233 8.233 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.95-.4-4.22-1.15l-.69-.43-3.83 1 1.04-3.74-.48-.74c-.81-1.29-1.24-2.77-1.24-4.32 0-4.54 3.7-8.24 8.24-8.24zm-2.84 2.31c-.24 0-.61.09-.93.45-.32.36-1.22 1.19-1.22 2.9 0 1.72 1.25 3.39 1.42 3.62.18.23 2.58 3.93 6.31 5.37 3.11 1.23 3.74 1 4.42.94.68-.06 2.2-.9 2.51-1.76.3-.86.3-1.6.21-1.76-.09-.16-.33-.26-.68-.45-.36-.19-2.14-1.06-2.47-1.18-.32-.12-.57-.18-.81.18-.25.36-1 1.18-1.23 1.42-.22.23-.44.26-.81.06-1.13-.49-2.53-1.42-3.46-2.87-.52-.73-.57-1.26-.45-1.6.12-.33.64-1.03.8-1.26.17-.23.22-.4.33-.66.12-.26.06-.49-.03-.68-.09-.19-.81-1.95-1.14-2.67-.32-.7-.64-.61-.89-.62l-.77-.01z" />
              </svg>
              WhatsApp
            </button>
          </div>
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