// src/components/SocialIcon/SocialIcon.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot } from 'react-icons/fa';
import './SocialIcon.css';

const iconMap = {
  github: <FaGithub size={30} />,      // 🐙 GitHub icon
  linkedin: <FaLinkedin size={30} />,   // 🔗 LinkedIn icon
  email: <FaEnvelope size={30} />,      // ✉️ Email icon
  huggingface: <FaRobot size={30} />,   // 🤖 Hugging Face (using robot)
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
