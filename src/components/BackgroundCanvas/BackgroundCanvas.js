import React, { useEffect, useRef } from 'react';
import './BackgroundCanvas.css';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Resize canvas to fit the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Configuration
    const config = {
      nodeSpeed: 0.5, 
      nodeDensity: 100, 
      glowIntensity: 20, 
      colors: ['#00FFFF', '#FF00FF', '#8A2BE2', '#4B0082'], 
      lineColor: 'rgba(128, 0, 128, 0.3)', // Purple line color
    };

    // Create nodes
    const nodes = [];
    for (let i = 0; i < config.nodeDensity; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
        direction: Math.random() * Math.PI * 2,
      });
    }

    // Draw circuit lines
    const drawLines = () => {
      ctx.strokeStyle = config.lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw nodes
    const drawNodes = () => {
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = config.glowIntensity;
        ctx.fill();

        // Pulsing effect
        ctx.shadowBlur = config.glowIntensity + Math.sin(Date.now() * 0.01 + node.x) * 5;
      });
    };

    // Update nodes position
    const updateNodes = () => {
      nodes.forEach(node => {
        node.x += Math.cos(node.direction) * config.nodeSpeed;
        node.y += Math.sin(node.direction) * config.nodeSpeed;

        // Wrap around screen edges
        if (node.x > canvas.width) node.x = 0;
        if (node.x < 0) node.x = canvas.width;
        if (node.y > canvas.height) node.y = 0;
        if (node.y < 0) node.y = canvas.height;
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLines();
      drawNodes();
      updateNodes();
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    
    // Add loaded class to body after a short delay to enable animations
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <canvas id="background-canvas" ref={canvasRef} />;
};

export default BackgroundCanvas;