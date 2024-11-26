// src/pages/ClinicLocation.jsx
import React, { useState } from 'react';
import './location.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
// import { div } from 'framer-motion/client';

const ClinicLocation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Clinic location details
  const clinicLocation = {
    name: "Sunrise Dental Clinic and Implant Centre",
    address: "Gali No 7, Near Shishu Niketan School Nayagaon, Chandigarh, Punjab, 160103",
    googleMapsLink: "https://maps.app.goo.gl/gsRRoGcfifhqyH1M7"
  };

  // Clinic images (replace with your actual image paths)
  const clinicImages = [
    "/assets/view1.jpg",
    "/assets/view2.jpg",
    "/assets/view3.jpg",
    "/assets/view4.jpg",
    "/assets/view5.jpg"
    
  ];

  // Open Google Maps with directions
  const openDirections = () => {
    window.open(clinicLocation.googleMapsLink, '_blank');
  };

  // Open image in full screen
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
        <Navbar />
    <div className="clinic-location-container">
      {/* Location Section */}
      <section className="location-section">
        <h1 className="section-title">
          <span className="icon map-pin">📍</span>
          Clinic Location
        </h1>

        {/* Google Maps Embedded */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.7707101652677!2d76.78774267562318!3d30.78101417456106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff3c6b2600b4b%3A0xc99d5c307bcfa5e0!2sSunrise%20dental%20clinic%20and%20implant%20centre!5e0!3m2!1sen!2sin!4v1732629554187!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Location Details */}
        <div className="location-details">
          <h2 className="clinic-name">{clinicLocation.name}</h2>
          <p className="clinic-address">{clinicLocation.address}</p>
          
          <button 
            onClick={openDirections}
            className="directions-btn"
          >
            <span className="icon navigation">🧭</span>
            Get Directions
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">
          <span className="icon camera">📷</span>
          Clinic Gallery
        </h2>

        <div className="image-gallery">
          {clinicImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openImageModal(image)}
            >
              <img 
                src={image} 
                alt={`Clinic Image ${index + 1}`}
                className="gallery-image"
              />
              <div className="image-overlay">
                <span className="expand-icon">⛶</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="image-modal"
          onClick={closeImageModal}
        >
          <div className="modal-content">
            <img 
              src={selectedImage} 
              alt="Full Screen" 
              className="modal-image"
            />
            <button 
              className="close-modal-btn"
              onClick={closeImageModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default ClinicLocation;