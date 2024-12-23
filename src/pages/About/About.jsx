import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      
      <div className="about-container">
        <header className="about-header">
          <div className="header-content">
            <h1 style={{color: 'black', fontWeight: 'bold'}}>About Our Dental Clinic</h1>
            <p style={{color: 'black', fontWeight: 500}}>
              Discover our commitment to excellence in dental care. Explore the story 
              behind our dedicated team and our mission to create healthier, happier smiles.
            </p>
          </div>
        </header>

        {/* Doctor's Information Section */}
        <section className="doctor-profile">
          <div className="section-container">
            <h2>Meet Our Expert</h2>
            <div className="doctor-info">
              <div className="doctor-card">
                <Card
                  title="Dr. Suraj Sharma"
                  description="Dental Surgeon with extensive experience in providing expert dental care."
                  image="/assets/suraj.png"  // Use absolute path from public folder
                />
              </div>
              <div className="doctor-details">
                <h3>Dr. Suraj Sharma</h3>
                <div className="contact-info">
                  <p><strong>Qualification:</strong> BDS, MIDA</p>
                  <p><strong>Specialization:</strong> Dental Surgeon</p>
                  <p><strong>Mobile:</strong> 
                    <a href="tel:+917508574656">M. 75085 74656</a>, 
                    <a href="tel:+911604013517">+91 1604 01 3517</a>
                  </p>
                </div>
                <div className="clinic-timings">
                  <h4>Clinic Timings</h4>
                  <p><strong>Morning:</strong> 9:00 AM – 2:00 PM</p>
                  <p><strong>Evening:</strong> 3:00 PM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
        <Footer />
    </div>
  );
};

export default About;