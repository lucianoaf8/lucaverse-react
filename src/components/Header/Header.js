import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header init-hidden fade-in-down">
      <div className="navbar-container">
        <nav className="w-full px-8 flex justify-between items-center">
          <div className="nav-logo ml-4">
            <a href="#" className="logo-link">
              <img 
                src="/assets/logos/lucaverse-logo1-nobg.svg" 
                alt="Lucaverse Logo" 
                className="logo-image" 
              />
            </a>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <div className="nav-right">
            <div className="nav-menu">
                <ul className="nav-menu-list">
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">Home</a></li>
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">About</a></li>
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">Projects</a></li>
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">Custom GPTs</a></li>
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">Contact Me</a></li>
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">Blog</a></li>
                  <li className="nav-menu-item"><a href="#" className="nav-menu-link">Newsletter</a></li>
                </ul>
              </div>
              <div className="nav-cta-menu">
                <ul className="nav-cta-menu-list">
                  <li className="nav-cta-menu-item">
                    <button type="button" onClick={() => window.dispatchEvent(new Event('enterLucaverse'))} className="nav-cta-button cta-primary nav-cta-small">Lucaverse Login</button>
                  </li>
                  <li className="nav-cta-menu-item">
                    <button type="button" onClick={() => window.dispatchEvent(new Event('requestAccess'))} className="nav-cta-button cta-secondary nav-cta-small">Request Access</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="nav-glow"></div>
      </div>
      <div className="header-glow"></div>
    </header>
  );
};

export default Header;
