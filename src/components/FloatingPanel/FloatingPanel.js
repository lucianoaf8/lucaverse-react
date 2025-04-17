import React, { useRef } from 'react';
import './FloatingPanel.css';

const FloatingPanel = ({
  title,
  children,
  glowColor = 'blue',
  className = '',
  style = {},
  animationDelay = '',
}) => {
  const panelRef = useRef(null);

  const handleMouseEnter = () => {
    if (panelRef.current) {
      panelRef.current.style.transform = 'translateY(-5px)';
      panelRef.current.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    }
  };

  const handleMouseLeave = () => {
    if (panelRef.current) {
      panelRef.current.style.transform = 'translateY(0)';
    }
  };

  const glowClass =
    glowColor === 'pink'
      ? 'shadow-glow-pink hover:shadow-glow-pink-pulse'
      : 'shadow-glow-blue hover:shadow-glow-blue-pulse';

  const animClass = animationDelay ? `init-hidden fade-in-up ${animationDelay}` : '';

  return (
    <div
      ref={panelRef}
      className={`floating-panel ${glowClass} ${animClass} ${className} floating-float-slow`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && (
        <h3 className="font-orbitron text-sm uppercase font-semibold text-[color:var(--neon-${glowColor})] mb-2">
          {title}
        </h3>
      )}
      <div className="text-base text-gray-300 font-rajdhani  leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default FloatingPanel;
