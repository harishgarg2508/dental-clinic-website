import React, { useState, useEffect, useCallback } from 'react';
import './location.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ClinicLocation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

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
  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(null);
  };

  // Navigate to next image
  const nextImage = useCallback(() => {
    if (currentImageIndex !== null) {
      const nextIndex = (currentImageIndex + 1) % clinicImages.length;
      setSelectedImage(clinicImages[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }
  }, [currentImageIndex, clinicImages]);

  // Navigate to previous image
  const prevImage = useCallback(() => {
    if (currentImageIndex !== null) {
      const prevIndex = (currentImageIndex - 1 + clinicImages.length) % clinicImages.length;
      setSelectedImage(clinicImages[prevIndex]);
      setCurrentImageIndex(prevIndex);
    }
  }, [currentImageIndex, clinicImages]);

  // Touch event tracking
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end (swipe detection)
  const handleTouchEnd = () => {
    if (selectedImage) {
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 75;
      const isRightSwipe = distance < -75;

      if (isLeftSwipe) {
        nextImage();
      } else if (isRightSwipe) {
        prevImage();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        switch (e.key) {
          case 'ArrowRight':
            nextImage();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'Escape':
            closeImageModal();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, nextImage, prevImage]);

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
              onClick={() => openImageModal(image, index)}
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="nav-btn prev-btn"
              onClick={prevImage}
            >
              &#10094;
            </button>

            <img 
              src={selectedImage} 
              alt="Full Screen" 
              className="modal-image"
            />

            <button 
              className="nav-btn next-btn"
              onClick={nextImage}
            >
              &#10095;
            </button>

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