import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';
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

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="card-container">
          <Card
            title="Teeth Whitening"
            description="Brighten your smile with our professional teeth whitening service."
            image="./assets/teethwhite.jpg"
          />
          <Card
            title="Dental Implants"
            description="Restore your smile with safe and reliable dental implants."
            image="./assets/implant.jpg"
          />
          <Card
            title="Orthodontics"
            description="Achieve the perfect smile with our orthodontic treatments."
            image="./assets/orthodontics.jpg"
          />
        </div>
      </section>

      <section ref={appointmentRef} className="appointment-section">
        <h2>Book an Appointment</h2>
        <AppointmentForm />
      </section>

      <Footer />
    </div>
  );
};

export default Home;