import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="site-header init-hidden fade-in-down">
      <div className="navbar-container">
        <nav className="w-full px-8 flex justify-between items-center">
          <div className="nav-logo ml-4">
            <a href="/" className="logo-link">
              <img 
                src="/assets/logos/lucaverse-logo1-nobg.svg" 
                alt="Lucaverse Logo" 
                className="logo-image" 
              />
            </a>
          </div>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <div className="nav-right">
            <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
              <ul className="nav-menu-list">
                <li className="nav-menu-item"><a href="#home" className="nav-menu-link">Home</a></li>
                <li className="nav-menu-item"><a href="#about" className="nav-menu-link">About</a></li>
                <li className="nav-menu-item"><a href="#projects" className="nav-menu-link">Projects</a></li>
                <li className="nav-menu-item"><a href="#custom-gpts" className="nav-menu-link">Custom GPTs</a></li>
                <li className="nav-menu-item"><a href="#contact" className="nav-menu-link">Contact Me</a></li>
                <li className="nav-menu-item"><a href="https://blog.luca137.com" className="nav-menu-link nav-menu-link--external" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li className="nav-menu-item"><a href="https://newsletter.luca137.com" className="nav-menu-link nav-menu-link--external" target="_blank" rel="noopener noreferrer">Newsletter</a></li>
              </ul>
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
            </nav>
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
