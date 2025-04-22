import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaRobot } from 'react-icons/fa';
import './CustomGPTs.css';

const CustomGPTs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Placeholder custom GPT data
  const customGpts = [
    {
      id: 1,
      title: "Cybernetic Coding Assistant",
      description: "Advanced coding assistant that specializes in cybersecurity and systems architecture with futuristic visualization capabilities.",
      capabilities: ["Code Generation", "Security Analysis", "Architecture Design"],
      image: "/assets/placeholders/gpt1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Quantum Research Companion",
      description: "Research-focused GPT designed to assist with quantum computing theories, simulations, and experimental design.",
      capabilities: ["Literature Analysis", "Quantum Simulations", "Research Planning"],
      image: "/assets/placeholders/gpt2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Neuro-Interface Designer",
      description: "Creative assistant for designing brain-computer interfaces with neural network visualization and interaction prototyping.",
      capabilities: ["Interface Design", "Neural Visualization", "User Testing"],
      image: "/assets/placeholders/gpt3.jpg",
      link: "#"
    }
  ];

  return (
    <section className={`custom-gpts-section ${isVisible ? 'visible' : ''}`} id="custom-gpts">
      <div className="section-glow top-glow"></div>
      
      <div className="custom-gpts-container">
        <h2 className="section-title font-orbitron text-glow-pink text-center">
          <span>Custom GPTs</span>
        </h2>

        <div className="custom-gpts-grid">
          {customGpts.map((gpt, index) => (
            <div 
              key={gpt.id} 
              className={`gpt-card init-hidden fade-in-up delay-${index + 1}`}
            >
              <div className="gpt-icon-container">
                <div className="gpt-icon-placeholder">
                  <FaRobot className="gpt-icon" />
                </div>
              </div>
              <div className="gpt-content">
                <h3 className="gpt-title font-rajdhani">{gpt.title}</h3>
                <p className="gpt-description">{gpt.description}</p>
                <div className="gpt-capabilities">
                  {gpt.capabilities.map((capability, idx) => (
                    <span key={idx} className="capability-tag">{capability}</span>
                  ))}
                </div>
                <div className="gpt-links">
                  <a href={gpt.link} className="gpt-link" aria-label="Try this GPT">
                    <FaExternalLinkAlt />
                    <span>Try this GPT</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-gpts-cta init-hidden fade-in-up delay-6">
          <p className="cta-text font-rajdhani">Want to explore my custom AI assistants?</p>
          <button className="nav-cta-button cta-secondary">
            View All GPTs
          </button>
        </div>
      </div>

      <div className="section-glow bottom-glow"></div>
    </section>
  );
};

export default CustomGPTs;
