import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/servicecard/servicecard';
import './newservice.css';

const NewServices = () => {
  const services = [
    {
      title: "Dental Check-Up",
      description: "Comprehensive dental check-ups to ensure the health of your teeth and gums. Our experts detect and prevent oral issues early, keeping your smile healthy.",
      badge: "Popular",
      frontImage: "assets/dentalcheckup.jpg",
      backImage: "path/to/back-image-checkup.jpg",
    },
    {
      title: "Orthodontic Treatment",
      description: "Expert orthodontic services to help you achieve a straighter, healthier smile using braces, clear aligners, and advanced treatments.",
      badge: "New",
      frontImage: "assets/orthodontics.jpg",
      backImage: "path/to/back-image-orthodontics.jpg",
    },
    {
      title: "Implant",
      description: "Durable and natural-looking dental implants to restore missing teeth and improve your oral health and appearance.",
      badge: "Recommended",
      frontImage: "assets/implant.jpg",
      backImage: "path/to/back-image-implant.jpg",
    },
    {
      title: "R.C.T (Root Canal Treatment)",
      description: "Pain-free root canal treatment to save infected teeth and alleviate discomfort, preserving your natural smile.",
      badge: "Expert",
      frontImage: "assets/rootcanal.jpg",
      backImage: "path/to/back-image-root-canal.jpg",
    },
    {
      title: "Filling (GIC, Composite)",
      description: "High-quality fillings using GIC and composite materials to restore the function and aesthetics of your teeth.",
      badge: "Affordable",
      frontImage: "assets/filling.jpg",
      backImage: "path/to/back-image-filling.jpg",
    },
    
  ];
  
  return (
    <div className="service-card-list">
      <h1 className='h11'>Our Services</h1>
      <div className="card-container">
        {services.slice(0, 6).map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            badge={service.badge}
            frontImage={service.frontImage}
            backImage={service.backImage}
          />
        ))}
      </div>
      
      <div className="explore-more-container">
        <Link 
          to="/services" 
          className="explore-more-button"
        >
          Explore More Services
        </Link>
      </div>
    </div>
  );
};

export default NewServices;