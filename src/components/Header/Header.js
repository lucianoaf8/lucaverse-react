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
              <div className="nav-menu">
                <ul className="nav-menu-list">
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">Home</button></li>
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">About</button></li>
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">Projects</button></li>
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">Custom GPTs</button></li>
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">Contact Me</button></li>
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">Blog</button></li>
                  <li className="nav-menu-item"><button type="button" className="nav-menu-link">Newsletter</button></li>
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
