import React, { useEffect, useRef } from 'react';
import './BackgroundCanvas.css';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Define colors
    const colors = {
      background: '#0f011f',
      backgroundFade: 'rgba(15, 1, 31, 0.4)',
      neonPink: '#ff00c8',
      neonBlue: '#00caff',
      lightViolet: '#2a0f4a'
    };
    
    // Create points
    const pointsCount = 120;
    const points = [];
    for (let i = 0; i < pointsCount; i++) {
      const color = Math.random() > 0.5 ? colors.neonPink : colors.neonBlue;
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: color
      });
    }
    
    // Drawing function
    function draw() {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, colors.background);
      gradient.addColorStop(1, colors.lightViolet);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = colors.backgroundFade;
      ctx.fillRect(0, 0, width, height);
      
      // Update point positions
      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      
      const gridSize = 35;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Draw connections between points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i];
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.5;
            const hexOpacity = Math.floor(opacity * 255).toString(16).padStart(2, '0');
            
            let connectionColor = (p1.color === p2.color) 
              ? p1.color 
              : (Math.random() > 0.5 ? colors.neonPink : colors.neonBlue);
            
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `${connectionColor}${hexOpacity}`;
            ctx.shadowBlur = 4;
            ctx.shadowColor = connectionColor;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }
      
      // Draw points
      for (let p of points) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      // Continue animation loop
      requestAnimationFrame(draw);
    }
    
    // Start drawing
    draw();
    
    // Add loaded class to body after a short delay to enable animations
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas id="background-canvas" ref={canvasRef} />;
};

export default BackgroundCanvas;