import React from 'react';
import './ServiceCard.css';  // Import the CSS file

const ServiceCard = ({ title, description, badge, time, servings, frontImage, backImage }) => {
  return (
    <div className="card">
      <div className="card-inner">
        {/* Front side of the card */}
        <div className="card-front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
            {/* Display the front image */}
            <img src={frontImage} alt="Front" className="front-image" />
          </div>
          <div className="front-content">
            <small className="badge">{badge}</small>
            <div className="description">
              <div className="title">
                <p className="title"><strong>{title}</strong></p>
              </div>
              <p className="card-footer">
                {time} | {servings}
              </p>
            </div>
          </div>
        </div>

        {/* Back side of the card */}
        <div className="card-back">
          <div className="back-content">
            {/* Display the back image */}
            {/* <img src={backImage} alt="Back" className="back-image" /> */}
            <strong>{description}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
