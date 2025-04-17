import React, { useRef, useEffect } from 'react';
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
  
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    
    const handleMouseEnter = () => {
      panel.style.transform = 'translateY(-5px)';
      panel.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    };
    
    const handleMouseLeave = () => {
      panel.style.transform = 'translateY(0)';
    };
    
    panel.addEventListener('mouseenter', handleMouseEnter);
    panel.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      panel.removeEventListener('mouseenter', handleMouseEnter);
      panel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const glowClass = glowColor === 'pink' 
    ? 'shadow-glow-pink hover:shadow-glow-pink-pulse' 
    : 'shadow-glow-blue hover:shadow-glow-blue-pulse';
  
  const animClass = animationDelay ? `init-hidden fade-in-up ${animationDelay}` : '';
  
  return (
    <div 
      className={`floating-panel ${glowClass} ${animClass} ${className}`} 
      style={style} 
      ref={panelRef}
    >
      {title && <h3 className={`font-orbitron text-sm uppercase font-semibold text-[color:var(--neon-${glowColor})]`}>
        {title}
      </h3>}
      <div className="mt-1 text-xs text-gray-400 font-mono">{children}</div>
    </div>
  );
};

export default FloatingPanel;