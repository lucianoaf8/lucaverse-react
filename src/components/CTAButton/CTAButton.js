import React from 'react';
import './CTAButton.css';

const CTAButton = ({ 
  children, 
  subLabel, 
  size = 'default', 
  variant = 'primary', 
  onClick = () => {},
  className = ''
}) => {
  return (
    <button 
      className={`cta-button cta-${size} cta-${variant} ${className}`} 
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <span className="text-lg sm:text-xl">{children}</span>  {/* MAIN text */}
         {/* SUB text */}
        {subLabel && (
          <span className="text-sm sm:text-base mt-1 opacity-70">{subLabel}</span> 
        )}
      </div>
    </button>
  );
};

export default CTAButton;
