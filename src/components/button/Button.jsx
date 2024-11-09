import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
