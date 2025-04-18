import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer init-hidden fade-in-up delay-6">
      <div className="footer-container">
        <div className="footer-info">
          &copy; {currentYear} <a href="https://luca137.com" className="text-[color:var(--neon-blue)]">Luca137</a> | Built with curiosity, hosted in the void
        </div>
      </div>
      <div className="footer-glow"></div>
    </footer>

  );
};

export default Footer;