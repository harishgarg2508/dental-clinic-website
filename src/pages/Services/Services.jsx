// ServiceCardList.jsx
import React from 'react';
import ServiceCard from '../../components/servicecard/servicecard';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Services.css';

const ServiceCardList = () => {
  return (
    <div className="service-card-list">
      <Navbar />
      <div className="card-container">
        <ServiceCard
          title="Teeth whitening"
          description="Our dental clinic offers professional teeth whitening services to help you achieve a brighter, more radiant smile. Using safe and effective whitening treatments, we remove stains and discoloration, giving your teeth a fresh, youthful appearance. "
          badge="New"
          time="10 min"
          servings="Teeth whitening"
          frontImage="assets/teethwhite.jpg"
          backImage="path/to/back-image-salad.jpg"
        />
        <ServiceCard
          title="Implants"
          description="At our dental clinic, we offer high-quality tooth implants to restore missing teeth and improve your smile. Using advanced technology, our skilled professionals place durable titanium posts into the jawbone, providing a secure foundation for custom crowns."
          badge="Popular"
          time="15 min"
          servings="1 serving"
          frontImage="assets/implant.jpg"
          backImage="assets/teethwhite.jpg"
        />
        <ServiceCard
          title="orthodontics"
          description="Our dental clinic provides expert orthodontic services to help you achieve a straighter, healthier smile. Using modern braces, clear aligners, and other advanced treatments, we correct misaligned teeth and bite issues."
          badge="New"
          time="20 min"
          servings="4 servings"
          frontImage="assets/orthodontics.jpg"
          backImage="path/to/back-image-spaghetti.jpg"
        />
        <ServiceCard
          title="Implant"
          description="Classic spaghetti with tomato sauce."
          badge="New"
          time="20 min"
          servings="4 servings"
          frontImage="assets/implant.jpg"
          backImage="path/to/back-image-spaghetti.jpg"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceCardList;
