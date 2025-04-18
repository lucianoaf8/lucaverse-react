// src/components/ShutdownEffect/ShutdownEffect.js
import React, { useEffect, useRef } from 'react';
import './ShutdownEffect.css';

const ShutdownEffect = ({ isActive, onComplete }) => {
  const overlayRef = useRef(null);
  const crtEffectRef = useRef(null);
  const glitchOverlayRef = useRef(null);
  const flickerEffectRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    
    const overlay = overlayRef.current;
    const crtEffect = crtEffectRef.current;
    const glitchOverlay = glitchOverlayRef.current;
    const flickerEffect = flickerEffectRef.current;
    
    // Disable any ongoing animations in the app
    const allAnimatingElements = document.querySelectorAll('*[class*="animation"], *[class*="animate"], *[style*="animation"]');
    allAnimatingElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      el.style.transition = 'none';
    });
    
    // Make overlay visible
    overlay.style.opacity = '1';
    glitchOverlay.style.opacity = '1';
    
    // Create rapid random flickering effect
    let flickerCount = 0;
    const flickerInterval = setInterval(() => {
      flickerEffect.style.opacity = Math.random() > 0.5 ? (Math.random() * 0.5).toString() : '0';
      flickerCount++;
      
      if (flickerCount > 25) { // Increased flicker count
        clearInterval(flickerInterval);
      }
    }, 30); // Made faster
    
    // Apply stronger glitch to the content
    const glitchContainer = document.querySelector('.App') || document.body;
    glitchContainer.classList.add('glitching-intense');
    
    // Function to create random visual glitches
    const createRandomGlitch = () => {
      // Random color shifts
      document.body.style.filter = `hue-rotate(${Math.random() * 360}deg) saturate(${Math.random() * 5 + 1})`;
      
      // Random transform on main container
      if (glitchContainer) {
        glitchContainer.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(${Math.random() * 0.1 + 0.95})`;
      }
      
      // Randomly corrupt images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (Math.random() > 0.7) {
          img.style.filter = `contrast(${Math.random() * 200 + 100}%) brightness(${Math.random() * 150 + 50}%) blur(${Math.random() * 3}px)`;
        }
      });
    };
    
    // Create frequent random glitches - FASTER INTERVAL
    const glitchInterval = setInterval(createRandomGlitch, 50); // Changed from 100 to 50ms
    
    // Add corrupted data visual effect - FASTER INTERVAL
    const createDataCorruption = () => {
      const corruption = document.createElement('div');
      corruption.style.position = 'fixed';
      corruption.style.zIndex = '9990';
      corruption.style.pointerEvents = 'none';
      corruption.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.3 + 0.1})`;
      corruption.style.width = `${Math.random() * 50 + 10}px`;
      corruption.style.height = `${Math.random() * 100 + 10}px`;
      corruption.style.top = `${Math.random() * 100}%`;
      corruption.style.left = `${Math.random() * 100}%`;
      corruption.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
      document.body.appendChild(corruption);
      
      // Remove after a short time - FASTER REMOVAL
      setTimeout(() => {
        corruption.remove();
      }, Math.random() * 400 + 100); // Changed from 1000+200 to 400+100ms
    };
    
    // Create data corruption visual effects - FASTER INTERVAL
    const corruptionInterval = setInterval(createDataCorruption, 100); // Changed from 200 to 100ms
    
    // Show digital noise briefly - FASTER APPEARANCE
    setTimeout(() => {
      const noise = document.createElement('div');
      noise.style.position = 'fixed';
      noise.style.top = '0';
      noise.style.left = '0';
      noise.style.width = '100%';
      noise.style.height = '100%';
      noise.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")';
      noise.style.opacity = '0.3';
      noise.style.zIndex = '9995';
      noise.style.mixBlendMode = 'multiply';
      document.body.appendChild(noise);
      
      // Increase noise briefly - FASTER TRANSITION
      setTimeout(() => {
        noise.style.opacity = '0.7';
        
        setTimeout(() => {
          noise.remove();
        }, 100); // Changed from 300 to 150ms
      }, 150); // Changed from 400 to 200ms
    }, 300); // Changed from 700 to 350ms
    
    // Create torn screen effect (horizontal line tears) - FASTER TEARS
    const createScreenTear = () => {
      const tear = document.createElement('div');
      const tearHeight = Math.floor(Math.random() * 20 + 3);
      const yPos = Math.floor(Math.random() * window.innerHeight);
      
      tear.style.position = 'fixed';
      tear.style.top = `${yPos}px`;
      tear.style.left = '0';
      tear.style.width = '100%';
      tear.style.height = `${tearHeight}px`;
      tear.style.backgroundColor = '#000';
      tear.style.zIndex = '9993';
      tear.style.transform = `translateX(${Math.random() * 30 - 15}px)`;
      document.body.appendChild(tear);
      
      // Remove tear after a short time - FASTER REMOVAL
      setTimeout(() => {
        tear.remove();
      }, Math.random() * 150 + 50); // Changed from 300+100 to 150+50ms
    };
    
    // Create several screen tears - FASTER INTERVAL
    const tearInterval = setInterval(createScreenTear, 80); // Changed from 150 to 80ms
    
    // Simulate broken screen with fast horizontal line moving - FASTER TRANSITION
    setTimeout(() => {
      // Clear intervals first
      clearInterval(glitchInterval);
      clearInterval(corruptionInterval);
      clearInterval(tearInterval);
      
      const horizontalLine = document.createElement('div');
      horizontalLine.style.position = 'fixed';
      horizontalLine.style.left = '0';
      horizontalLine.style.width = '100%';
      horizontalLine.style.height = '5px';
      horizontalLine.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      horizontalLine.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
      horizontalLine.style.zIndex = '9994';
      document.body.appendChild(horizontalLine);
      
      // Animate the line from top to bottom - FASTER MOVEMENT
      let position = 0;
      const moveSpeed = 8; // Changed from 5 to 8
      const moveInterval = setInterval(() => {
        position += moveSpeed;
        horizontalLine.style.top = `${position}px`;
        
        if (position > window.innerHeight) {
          clearInterval(moveInterval);
          horizontalLine.remove();
          
          // Final shutdown - turn screen completely black
          document.body.style.backgroundColor = '#000';
          document.body.style.transition = 'background-color 0.3s ease';
          document.body.style.filter = '';
          
          // Ensure all content is hidden
          const rootElement = document.getElementById('root');
          if (rootElement) {
            rootElement.style.opacity = '0';
            rootElement.style.transition = 'opacity 0.5s ease';
          }
          
          // Complete the effect with a clean slate - FASTER COMPLETION
          setTimeout(() => {
            // Remove any glitching classes before completing
            if (glitchContainer) {
              glitchContainer.classList.remove('glitching-intense');
              glitchContainer.style.transform = '';
            }
            
            // Final callback
            if (onComplete) onComplete();
          }, 300); // Changed from 500 to 300ms
        }
      }, 10);
    }, 1000); // Changed from 2000 to 1000ms - CUT TOTAL TIME IN HALF
    
    // Cleanup function
    return () => {
      clearInterval(flickerInterval);
      
      // Reset any body styles
      document.body.style.filter = '';
      
      // Remove the glitching class
      const glitchContainer = document.querySelector('.App') || document.body;
      if (glitchContainer) {
        glitchContainer.classList.remove('glitching-intense');
        glitchContainer.style.transform = '';
      }
      
      // Remove any corruption elements
      document.querySelectorAll('div[style*="rgba"]').forEach(el => {
        if (el.style.position === 'fixed' && el.style.pointerEvents === 'none') {
          el.remove();
        }
      });
    };
    
    // Cleanup function
    return () => {
      clearInterval(flickerInterval);
      document.body.classList.remove('glitching');
      document.body.style.backgroundColor = '';
    };
  }, [isActive, onComplete]);

  return (
    <div className="shutdown-effect-container">
      <div ref={overlayRef} className="shutdown-overlay">
        <div className="scanlines"></div>
        <div ref={crtEffectRef} className="crt-shutdown"></div>
      </div>
      <div ref={glitchOverlayRef} className="glitch-overlay"></div>
      <div ref={flickerEffectRef} className="flicker-effect"></div>
    </div>
  );
};

export default ShutdownEffect;