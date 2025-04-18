// Updated src/components/MainContent/MainContent.js with shutdown effect
import React, { useState } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import FloatingPanel from '../FloatingPanel/FloatingPanel';
import GlitchAvatar from './GlitchAvatar';
import SocialIcon from '../SocialIcon/SocialIcon'; 
import AccessRequestForm from '../AccessRequestForm/AccessRequestForm';
import ShutdownEffect from '../ShutdownEffect/ShutdownEffect'; // Import the new component
import './MainContent.css';

const MainContent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isShuttingDown, setIsShuttingDown] = useState(false); // New state for shutdown effect
  
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  // Handle the "Enter the Lucaverse" button click
  const handleEnterLucaverse = () => {
    setIsShuttingDown(true);
    // You can add actual navigation logic in the onComplete callback
  };
  
  // Function to run after shutdown completes
  const handleShutdownComplete = () => {
    console.log('Shutdown complete, intruder alert triggered...');
    
    // Create container for alert elements
    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '0';
    alertContainer.style.left = '0';
    alertContainer.style.width = '100%';
    alertContainer.style.height = '100%';
    alertContainer.style.backgroundColor = '#000';
    alertContainer.style.zIndex = '10000';
    alertContainer.style.overflow = 'hidden';
    document.body.appendChild(alertContainer);
    
    // Create flashing red alert background
    const alertBg = document.createElement('div');
    alertBg.style.position = 'absolute';
    alertBg.style.top = '0';
    alertBg.style.left = '0';
    alertBg.style.width = '100%';
    alertBg.style.height = '100%';
    alertBg.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    alertBg.style.animation = 'flash-alert 0.8s infinite';
    alertContainer.appendChild(alertBg);
    
    // Create warning message
    const messageEl = document.createElement('div');
    messageEl.style.position = 'absolute';
    messageEl.style.top = '50%';
    messageEl.style.left = '50%';
    messageEl.style.transform = 'translate(-50%, -50%)';
    messageEl.style.color = '#ff0000';
    messageEl.style.fontFamily = 'Orbitron, sans-serif';
    messageEl.style.fontSize = '32px';
    messageEl.style.fontWeight = 'bold';
    messageEl.style.textAlign = 'center';
    messageEl.style.textTransform = 'uppercase';
    messageEl.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.8)';
    alertContainer.appendChild(messageEl);
    
    // Add a "system alert" sound
    const alertSound = new Audio();
    alertSound.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAA='; // Empty sound
    alertSound.volume = 0.6;
    alertSound.play().catch(e => console.log('Audio play failed:', e));
    
    // Add security camera frame overlay
    const cameraFrame = document.createElement('div');
    cameraFrame.style.position = 'absolute';
    cameraFrame.style.top = '0';
    cameraFrame.style.left = '0';
    cameraFrame.style.width = '100%';
    cameraFrame.style.height = '100%';
    cameraFrame.style.border = '20px solid rgba(0, 0, 0, 0.8)';
    cameraFrame.style.boxSizing = 'border-box';
    cameraFrame.style.pointerEvents = 'none';
    alertContainer.appendChild(cameraFrame);
    
    // Add camera record indicator
    const recordIndicator = document.createElement('div');
    recordIndicator.style.position = 'absolute';
    recordIndicator.style.top = '30px';
    recordIndicator.style.right = '30px';
    recordIndicator.style.width = '20px';
    recordIndicator.style.height = '20px';
    recordIndicator.style.backgroundColor = '#ff0000';
    recordIndicator.style.borderRadius = '50%';
    recordIndicator.style.animation = 'blink-record 1s infinite';
    alertContainer.appendChild(recordIndicator);
    
    // Create flashing alert style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes flash-alert {
        0%, 100% { background-color: rgba(255, 0, 0, 0.1); }
        50% { background-color: rgba(255, 0, 0, 0.3); }
      }
      @keyframes blink-record {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes text-flicker {
        0%, 100% { opacity: 1; }
        8%, 10% { opacity: 0.8; }
        20%, 25% { opacity: 0.4; }
        40%, 42% { opacity: 0.9; }
        90%, 92% { opacity: 0.8; }
      }
      @keyframes text-scramble {
        0%, 100% { transform: translate(0); }
        10% { transform: translate(-2px, 1px); }
        20% { transform: translate(2px, -1px); }
        30% { transform: translate(-1px, -1px); }
        40% { transform: translate(1px, 2px); }
        50% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 1px); }
        70% { transform: translate(-1px, 2px); }
        80% { transform: translate(1px, -1px); }
        90% { transform: translate(-2px, 1px); }
      }
    `;
    document.head.appendChild(style);
    
    // Sequence of alert messages
    const messages = [
      "Access Not Authorized",
      "Intruder Detected",
      "Security Protocol Activated",
      "Capturing Biometric Data",
      "Tracking IP: " + Array.from({length: 4}, () => Math.floor(Math.random() * 255)).join('.')
    ];
    
    let messageIndex = 0;
    
    // Show messages in sequence
    const showMessages = () => {
      if (messageIndex < messages.length) {
        messageEl.textContent = messages[messageIndex];
        messageEl.style.animation = 'text-scramble 0.3s, text-flicker 0.5s';
        
        // Add glitchy text effect
        if (messageIndex > 0 && messages[messageIndex]) {
          setTimeout(() => {
            if (messageEl && messageEl.textContent) {
              const messageText = messageEl.textContent;
              if (messageText && messageText.length > 0) {
                const randomIndex = Math.floor(Math.random() * messageText.length);
                const char = messageText.charAt(randomIndex);
                const randomChar = String.fromCharCode(Math.floor(Math.random() * 20) + 9600);
                messageEl.textContent = messageText.substring(0, randomIndex) + 
                                        randomChar + 
                                        messageText.substring(randomIndex + 1);
              }
            }
          }, 300);
        }
        
        messageIndex++;
        
        // If we're showing the IP tracking message, show it only briefly
        const delay = messageIndex === 5 ? 1200 : 1500;
        setTimeout(showMessages, delay);
      } else {
        // After showing all messages, show "Intruder located"
        messageEl.textContent = "Intruder Located";
        messageEl.style.animation = 'text-scramble 0.3s, text-flicker 0.5s';
        
        // Remove the flashing red background after 2 seconds
        setTimeout(() => {
          // Stop the alert effect
          if (alertBg) {
            alertBg.style.animation = 'none';
            alertBg.style.backgroundColor = 'transparent';
          }
          
          // Remove scanlines and recording indicator
          document.querySelectorAll('.screen-band, [style*="border-radius: 50%"]').forEach(el => {
            el.remove();
          });
          
          if (scanlines) {
            scanlines.remove();
          }
          
          if (cameraFrame) {
            cameraFrame.remove();
          }
          
          if (recordIndicator) {
            recordIndicator.remove();
          }
          
          // Clear message and show final "See you soon_" message
          setTimeout(() => {
            messageEl.textContent = "";
            
            // Create the final message with typing effect
            const finalMessage = document.createElement('div');
            finalMessage.style.position = 'absolute';
            finalMessage.style.top = '50%';
            finalMessage.style.left = '50%';
            finalMessage.style.transform = 'translate(-50%, -50%)';
            finalMessage.style.color = '#ffffff';
            finalMessage.style.fontFamily = 'monospace';
            finalMessage.style.fontSize = '28px';
            finalMessage.style.textAlign = 'center';
            finalMessage.style.letterSpacing = '2px';
            finalMessage.textContent = '';
            alertContainer.appendChild(finalMessage);
            
            // Add blinking cursor
            const cursor = document.createElement('span');
            cursor.textContent = '_';
            cursor.style.animation = 'blink-cursor 1s infinite';
            cursor.style.fontWeight = 'bold';
            finalMessage.appendChild(cursor);
            
            // Add cursor blink animation
            const cursorStyle = document.createElement('style');
            cursorStyle.textContent = `
              @keyframes blink-cursor {
                0%, 49% { opacity: 1; }
                50%, 100% { opacity: 0; }
              }
            `;
            document.head.appendChild(cursorStyle);
            
            // Type the message one character at a time
            const textToType = 'See you soon';
            let charIndex = 0;
            
            const typeWriter = () => {
              if (charIndex < textToType.length) {
                // Add slight randomness to typing speed for realistic effect
                const randomDelay = Math.floor(Math.random() * 100) + 100; // 100-200ms per character
                
                setTimeout(() => {
                  if (finalMessage) {
                    finalMessage.textContent = textToType.substring(0, charIndex + 1);
                    finalMessage.appendChild(cursor);
                    charIndex++;
                    typeWriter();
                  }
                }, randomDelay);
              }
            };
            
            // Start typing after a brief pause
            setTimeout(typeWriter, 300);
            
            // Final black screen effect
            document.body.style.backgroundColor = '#000';
            
          }, 2000);
        }, 2000);
      }
    };
    
    showMessages();
    
    // Add scanlines
    const scanlines = document.createElement('div');
    scanlines.style.position = 'absolute';
    scanlines.style.top = '0';
    scanlines.style.left = '0';
    scanlines.style.width = '100%';
    scanlines.style.height = '100%';
    scanlines.style.background = 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3) 51%)';
    scanlines.style.backgroundSize = '100% 4px';
    scanlines.style.pointerEvents = 'none';
    scanlines.style.zIndex = '1';
    alertContainer.appendChild(scanlines);
  };

  return (
    <main className="main-content">
      {/* Shutdown Effect Component */}
      <ShutdownEffect 
        isActive={isShuttingDown} 
        onComplete={handleShutdownComplete} 
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* Left Column - Text */}
          <div className="flex flex-col justify-center text-center md:text-left relative z-10">
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider leading-tight init-hidden fade-in-left delay-1">
              <span className="block text-[color:var(--neon-pink)] text-glow-pink">Welcome</span>
              <span className="block text-[color:var(--neon-pink)] text-glow-pink text-xl sm:text-3xl lg:text-4xl mb-2">to the</span>
              <span id="lucaverse-title" className="block text-[color:var(--neon-blue)] text-glow-blue transition-all duration-300 glitch-active">Lucaverse</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-md mx-auto md:mx-0 init-hidden fade-in-left delay-2">
              A digital universe of tools, thoughts, and resources curated by Luca.
            </p>
            <div className="mt-8 init-hidden fade-in-up delay-3 flex flex-col items-center md:items-start gap-4">
              <CTAButton 
                subLabel="If you dare"
                onClick={handleEnterLucaverse} // Add onClick handler
              >
                Enter The Lucaverse
              </CTAButton>

              <div className="self-center md:self-start ml-12">
                <CTAButton 
                  size="small" 
                  variant="secondary" 
                  onClick={openForm}
                >
                  Request Access
                </CTAButton>
              </div>
            </div>
          </div>
          
          {/* Right Column - Avatar + Panels */}
          <div className="relative flex items-center justify-center min-h-[500px]">
          
            <SocialIcon 
              type="github" 
              href="https://github.com/lucianoaf8" 
              style={{ top: '40%', right: '-5%' }}
            />

            <SocialIcon 
              type="linkedin" 
              href="https://www.linkedin.com/in/lucianoaf8" 
              style={{ bottom: '0%', left: '15%' }}
            />

            <SocialIcon 
              type="email" 
              href="mailto:your@email.com" 
              style={{ bottom: '10%', right: '10%' }}
            />

            <SocialIcon 
              type="huggingface" 
              href="https://huggingface.co/Luca137" 
              style={{ top: '20%', left: '20%' }}
            />

            {/* Avatar centered inside */}
            <div className="avatar-container" style={{ marginTop: '30px', filter: 'brightness(0.9)' }}>
              <GlitchAvatar />
            </div>

            {/* Floating Panels */}
            <FloatingPanel 
              title="Mission" 
              glowColor="blue"
              className="w-64 floating-float-medium"
              style={{ top: '0%', right: '-20%' }}
              animationDelay="delay-3"
            >
              A gateway to my builds, my thoughts, my tools.
              Lucaverse.dev is where experiments become reality.
            </FloatingPanel>

            <FloatingPanel 
              title="Vision" 
              glowColor="blue"
              className="w-64 floating-float-slow"
              style={{ top: '55%', left: '-20%' }}
              animationDelay="delay-4"
            >
              A growing galaxy of scripts, side quests, and whispers.
              It's not about polish; it's about presence.
            </FloatingPanel>

            <FloatingPanel 
              title="Luca" 
              glowColor="pink"
              className="w-64 floating-float-fast"
              style={{ bottom: '-15%', right: '-15%' }}
              animationDelay="delay-5"
            >
              The Architect
            </FloatingPanel>
          </div>
        </div>
      </section>
      
      {/* Access Request Form Modal */}
      <AccessRequestForm isOpen={isFormOpen} onClose={closeForm} />
    </main>
  );
};

export default MainContent;