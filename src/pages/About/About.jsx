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

      {/* Removed the mission section */}
      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="card-container">
          <Card
            title="Dr. John Smith"
            description="Lead Dentist with over 20 years of experience in general and cosmetic dentistry."
            image="./assets/john.jpg"
          />
          <Card
            title="Dr. Emily Taylor"
            description="Orthodontist specializing in braces and Invisalign treatments."
            image="./assets/emily.jpg"
          />
          <Card
            title="Dr. Sarah Brown"
            description="Pediatric Dentist dedicated to caring for young patients."
            image="./assets/sarah.jpg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
