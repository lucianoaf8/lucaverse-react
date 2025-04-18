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

const SocialIcon = ({ type, href, style = {} }) => {
  const icon = iconMap[type];

  if (!icon) {
    console.error(`No icon found for type: ${type}`);
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon floating-float-slow"
      style={style}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
