import React from 'react';
import './CTAButton.css';

const CTAButton = ({ children, subLabel }) => {
  return (
    <button className="cta-button">
      {children}
      {subLabel && <span className="cta-sublabel">{subLabel}</span>}
    </button>
  );
};

export default CTAButton;