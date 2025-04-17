import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header init-hidden fade-in-down">
      <div className="navbar-container">
        <nav className="max-w-7xl mx-auto">
          <div className="nav-logo">
            <a href="#" className="logo-link">
              <img 
                src="/assets/logos/lucaverse-logo1-nobg.svg" 
                alt="Lucaverse Logo" 
                className="logo-image" 
              />
            </a>
          </div>
        </nav>
        <div className="nav-glow"></div>
      </div>
    </header>
  );
};

export default Header;