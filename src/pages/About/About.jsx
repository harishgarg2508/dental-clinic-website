import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Navbar />

      <header className="about-header">
        <h1>About Our Dental Clinic</h1>
        <p>
          Discover our commitment to excellence in dental care. Explore the story behind our dedicated team and our
          mission to create healthier, happier smiles.
        </p>
        <a href="#" className="btn">
          Learn More
        </a>
      </header>

      {/* Doctor's Information Section */}
      <section className="doctor-profile">
        <h2>Meet Our Expert</h2>
        <div className="doctor-info">
          <Card
            title="Dr. Suraj Sharma (BDS, MIDA)"
            description="Dental Surgeon with extensive experience in providing expert dental care."
            image="./assets/suraj.png"
          />
          <div className="doctor-details">
            <h3>Dr. Suraj Sharma</h3>
            <div className="contact-info">
              <p><strong>Qualification:</strong> BDS, MIDA</p>
              <p><strong>Specialization:</strong> Dental Surgeon</p>
              <p><strong>Mobile:</strong> M. 89628 88817, 75085 74656</p>
            </div>
            <div className="clinic-timings">
              <h4>Clinic Timings</h4>
              <p><strong>Morning:</strong> 9:00 AM – 2:00 PM</p>
              <p><strong>Evening:</strong> 3:00 PM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
