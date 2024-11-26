import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ServiceCard from '../../components/servicecard/servicecard';
import './Services.css';

const ServiceCardList = () => {
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
    {
      title: "Scaling / Cleaning",
      description: "Professional teeth cleaning to remove plaque and tartar, ensuring healthy gums and a brighter smile.",
      badge: "Essential",
      frontImage: "assets/cleaning.jpg",
      backImage: "path/to/back-image-scaling.jpg",
    },
    {
      title: "Extraction",
      description: "Safe and pain-free tooth extraction services, including wisdom tooth removal, performed by experienced dentists.",
      badge: "Safe",
      frontImage: "assets/extraction.jpg",
      backImage: "path/to/back-image-extraction.jpg",
    },
    {
      title: "Fix and Removable Teeth",
      description: "Custom solutions for fixed and removable teeth to restore your smile's function and aesthetics.",
      badge: "Customizable",
      frontImage: "assets/removable.png",
      backImage: "path/to/back-image-fix-removable.jpg",
    },
    {
      title: "Periodontic Treatment",
      description: "Advanced treatment for gum diseases, ensuring healthy gums and strong teeth for a long-lasting smile.",
      badge: "Advanced",
      frontImage: "assets/periodontic.jpg",
      backImage: "path/to/back-image-periodontic.jpg",
    },
    {
      title: "Complete Denture",
      description: "Perfectly fitted complete dentures for replacing missing teeth, improving your ability to eat and speak confidently.",
      badge: "Reliable",
      frontImage: "assets/complete-denture.jpg",
      backImage: "path/to/back-image-complete-denture.jpg",
    },
    {
      title: "Digital X-Ray",
      description: "State-of-the-art digital X-ray technology for accurate diagnosis and treatment planning.",
      badge: "Tech-Enabled",
      frontImage: "assets/digital-xray.jpg",
      backImage: "path/to/back-image-digital-xray.jpg",
    },
    {
      title: "Intra Oral Camera",
      description: "High-definition intraoral cameras for detailed visualization of oral conditions, enhancing patient understanding.",
      badge: "Modern",
      frontImage: "assets/dental-oral.jpg",
      backImage: "path/to/back-image-intraoral-camera.jpg",
    },
    {
      title: "Rotary R.C.T",
      description: "Efficient and precise rotary root canal treatment for quick recovery and long-lasting results.",
      badge: "Efficient",
      frontImage: "assets/rotary.png",
      backImage: "path/to/back-image-rotary-rct.jpg",
    },
    {
      title: "Aligners",
      description: "Custom clear aligners for discreet teeth straightening, offering convenience and comfort.",
      badge: "Discreet",
      frontImage: "assets/aligners.png",
      backImage: "path/to/back-image-aligners.jpg",
    },
    {
      title: "Bleaching/Tooth Whitening",
      description: "Safe and effective tooth whitening services to brighten your smile and boost your confidence.",
      badge: "Bright",
      frontImage: "assets/teethwhite.jpg",
      backImage: "path/to/back-image-whitening.jpg",
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Comprehensive full mouth rehabilitation to restore oral health, function, and aesthetics.",
      badge: "Complete",
      frontImage: "assets/fullmouth.png",
      backImage: "path/to/back-image-full-mouth.jpg",
    },
    {
      title: "TMJ Disorders",
      description: "Expert care for TMJ disorders, providing relief from jaw pain and improving joint function.",
      badge: "Relief",
      frontImage: "assets/tmj.png",
      backImage: "path/to/back-image-tmj.jpg",
    },
  ];
  
 
  

  return (
    <div className="service-page-container">
      <Navbar />
      <div className="service-card-list">
        <h1 className='h11'>Our Services</h1>
        <div className="card-container">
          {services.map((service, index) => (
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
      </div>
      <Footer />
    </div>
  );
};

export default ServiceCardList;