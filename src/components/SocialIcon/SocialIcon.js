// src/components/SocialIcon/SocialIcon.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';            // ← add this
import './SocialIcon.css';

const iconMap = {
  github:    <FaGithub size={30} />,
  linkedin:  <FaLinkedin size={30} />,
  email:     <FaEnvelope size={30} />,
  huggingface: <SiHuggingface size={30} />,               // ← replace FaRobot with this
};

const SocialIcon = ({ type, href, style = {}, orbitRadius = 120, angle = 0 }) => {
  const icon = iconMap[type];

  if (!icon) {
    console.error(`No icon found for type: ${type}`);
    return null;
  }

  const orbitStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`,
    ...style,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      style={orbitStyle}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
