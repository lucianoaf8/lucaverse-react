import React, { useEffect, useRef } from 'react';
import './LucaverseExplosionEffect.css';

const BOOM_SOUND = 'https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b4b3e.mp3'; // Example sound, replace with local asset if desired

const LucaverseExplosionEffect = ({ onComplete, crackedText = 'Lucaverse' }) => {
  const overlayRef = useRef(null);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  // Particle and debris logic
  useEffect(() => {
    // Play boom sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    const overlay = overlayRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let startTime = null;
    let shaking = true;
    let flashAlpha = 1;
    const DURATION = 2600;
    const SHAKE_DURATION = 600;
    const FLASH_DURATION = 300;
    let lastFrameTime = Date.now();

    // Set canvas size
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Debris particles
    const debris = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const fontSize = Math.min(canvas.width * 0.08, 120);
    ctx.font = `bold ${fontSize}px Orbitron, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Get text metrics for proper splitting
    const text = crackedText;
    const chars = text.split('');
    let offset = -((chars.length - 1) / 2);

    // Function to convert HSL to RGB directly for reliability
    const hslToRgb = (h, s, l) => {
      s /= 100;
      l /= 100;
      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
      return `rgb(${Math.round(255 * f(0))}, ${Math.round(255 * f(8))}, ${Math.round(255 * f(4))})`;
    };

    // In useEffect, generate initial RGB colors directly
    const initialColors = [
      hslToRgb(195, 100, 50),  // Equivalent to neon-blue HSL
      hslToRgb(330, 100, 50)   // Equivalent to soft-pink HSL
    ];

    // Create debris for each character
    chars.forEach((char, i) => {
      const angle = (Math.random() - 0.5) * Math.PI * 1.2;
      const speed = 12 + Math.random() * 16;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed - 8;
      debris.push({
        char,
        x: centerX + offset * fontSize * 0.9,
        y: centerY,
        dx,
        dy,
        rot: 0,
        drot: (Math.random() - 0.5) * 0.2,
        size: fontSize,
        alpha: 1,
        color: initialColors[i % 2],  // Use pre-generated RGB
        trail: [],  // New: For trails
      });
      offset++;
    });

    // Add pre-explosion crack effect
    const crackDuration = 500;  // ms for cracking animation
    let crackStart = Date.now();
    function drawCrack() {
      const now = Date.now();
      if (now - crackStart < crackDuration) {
        ctx.save();
        ctx.font = `bold ${fontSize}px Orbitron, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        chars.forEach((char, i) => {
          ctx.fillStyle = 'rgba(255,0,0,0.8)';
          ctx.shadowBlur = 10;
          ctx.fillText(char, centerX + offset * fontSize * 0.9 + (Math.random() * 4 - 2), centerY + (Math.random() * 4 - 2));
        });
        requestAnimationFrame(drawCrack);
      } else {
        // Start main explosion
        requestAnimationFrame(animate);
      }
    }
    drawCrack();

    // Shockwave
    let shockwaveProgress = 0;
    let shockwaveAlpha = 0.5;

    // Animation loop
    function animate(ts) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Screen flash
      if (elapsed < FLASH_DURATION) {
        flashAlpha = 1 - elapsed / FLASH_DURATION;
        ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Enhance particle physics with wind and collision
      debris.forEach((p, i) => {
        if (elapsed > 150) {
          const windForce = 0.5 + Math.sin(elapsed / 1000) * 0.5;  // Simulate wind
          p.dx += windForce * 0.1;  // Apply wind to x-velocity
          p.x += p.dx;
          p.y += p.dy + (0.5 + Math.random() * 0.5);  // Variable gravity
          p.dy += 0.7;
          p.dx *= 0.98;
          p.dy *= 0.98;
          p.rot += p.drot;
          p.alpha -= 0.012;
          p.trail.push({x: p.x, y: p.y, alpha: p.alpha});
          if (p.trail.length > 10) p.trail.shift();
          
          // Generate HSL and resolve to RGB
          const h = (elapsed + i * 50) % 360;
          p.color = i % 2 === 0 ? hslToRgb(h, 100, 50) : hslToRgb((h + 180) % 360, 100, 50);  // Direct RGB conversion
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.font = `bold ${p.size}px Orbitron, sans-serif`;
        ctx.shadowColor = p.color;  // Now guaranteed to be RGB
        ctx.shadowBlur = 30;  // Enhanced bloom
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size / 2);
        gradient.addColorStop(0, p.color);
        const rgbValues = p.color.match(/\d+/g);  // Extract RGB values for safety
        if (rgbValues && rgbValues.length === 3) {
          gradient.addColorStop(0.5, `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.7)`);
          gradient.addColorStop(1, 'rgba(0,0,0,0.5)');
        } else {
          gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');  // Fallback
          gradient.addColorStop(1, 'rgba(0,0,0,0.5)');
        }
        ctx.fillStyle = gradient;
        ctx.fillText(p.char, 0, 0);
        
        // Enhanced trail drawing with gradient
        ctx.beginPath();
        p.trail.forEach((point, idx) => {
          ctx.globalAlpha = point.alpha * 0.7;
          const trailSize = p.size / (idx + 1);
          ctx.arc(point.x - p.x, point.y - p.y, trailSize / 10, 0, Math.PI * 2);
          const trailRgb = p.color.match(/\d+/g);
          if (trailRgb && trailRgb.length === 3) {
            ctx.fillStyle = `rgba(${trailRgb[0]}, ${trailRgb[1]}, ${trailRgb[2]}, ${point.alpha * 0.6})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${point.alpha * 0.6})`;
          }
        });
        ctx.fill();
        ctx.restore();
      });

      // Shockwave
      if (elapsed > 120) {
        shockwaveProgress = Math.min(1, (elapsed - 120) / 800);
        shockwaveAlpha = 0.5 * (1 - shockwaveProgress);
        ctx.save();
        ctx.globalAlpha = shockwaveAlpha;
        ctx.beginPath();
        ctx.arc(centerX, centerY, shockwaveProgress * canvas.width * 0.5, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(0,255,255,0.4)';
        ctx.lineWidth = 18 * (1 - shockwaveProgress) + 2;
        ctx.shadowColor = '#00faff';
        ctx.shadowBlur = 40;
        ctx.stroke();
        ctx.restore();
      }

      // Dust/fade
      if (elapsed > DURATION - 500) {
        ctx.save();
        ctx.globalAlpha = (elapsed - (DURATION - 500)) / 500;
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      // Fade to reveal at end
      if (elapsed < DURATION - 500) {
        ctx.save();
        ctx.globalAlpha = Math.min(1, (elapsed - (DURATION - 500)) / 500);
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      // Screen shake
      if (elapsed < SHAKE_DURATION && shaking) {
        const shake = 18 * (1 - elapsed / SHAKE_DURATION);
        overlay.style.transform = `translate(${(Math.random() - 0.5) * shake}px, ${(Math.random() - 0.5) * shake}px)`;
      } else {
        overlay.style.transform = '';
        shaking = false;
      }

      // Optimize animation loop with frame rate check
      if (elapsed < DURATION) {
        if (!animationFrame || (Date.now() - lastFrameTime > 16)) {  // ~60fps cap
          animationFrame = requestAnimationFrame(animate);
          lastFrameTime = Date.now();
        }
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (onComplete) onComplete();
      }
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [onComplete, crackedText]);

  // Overlay and canvas
  return (
    <div ref={overlayRef} className="lucaverse-explosion-overlay">
      <canvas ref={canvasRef} className="lucaverse-explosion-canvas" />
      <audio ref={audioRef} src={BOOM_SOUND} preload="auto" />
    </div>
  );
};

export default LucaverseExplosionEffect;
