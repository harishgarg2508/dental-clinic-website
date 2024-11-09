// ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Services.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();  // This will extract the service ID from the URL
  
  let serviceContent;

  // Depending on the serviceId, display detailed information
  switch (serviceId) {
    case 'teeth-whitening':
      serviceContent = {
        title: 'Teeth Whitening',
        description: 'We offer professional teeth whitening services using safe, effective methods to brighten your smile and improve your confidence.',
        details: 'Our whitening procedures are customized to fit your needs and provide long-lasting results.'
      };
      break;
    case 'dental-implants':
      serviceContent = {
        title: 'Dental Implants',
        description: 'Dental implants are a permanent solution to replace missing teeth, offering a natural-looking and functional smile.',
        details: 'We use state-of-the-art technology to place dental implants, ensuring a smooth procedure and fast recovery.'
      };
      break;
    case 'orthodontics':
      serviceContent = {
        title: 'Orthodontics',
        description: 'Achieve a straight smile with our orthodontic services, including braces and Invisalign treatments.',
        details: 'Our team works with you to create a personalized plan to straighten your teeth and improve your bite.'
      };
      break;
    default:
      serviceContent = {
        title: 'Service Not Found',
        description: 'Sorry, the service you are looking for is unavailable at the moment.',
        details: ''
      };
  }

  return (
    <div className="service-detail">
      <h2>{serviceContent.title}</h2>
      <p>{serviceContent.description}</p>
      <p>{serviceContent.details}</p>
    </div>
  );
};

export default ServiceDetail;
