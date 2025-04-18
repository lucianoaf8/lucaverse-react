import React, { useState } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import FloatingPanel from '../FloatingPanel/FloatingPanel';
import GlitchAvatar from './GlitchAvatar';
import SocialIcon from '../SocialIcon/SocialIcon'; 
import AccessRequestForm from '../AccessRequestForm/AccessRequestForm';
import './MainContent.css';

const MainContent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <main className="main-content">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* Left Column - Text */}
          <div className="flex flex-col justify-center text-center md:text-left relative z-10 mt-16">
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider leading-tight init-hidden fade-in-left delay-1">
              <span className="block text-[color:var(--neon-pink)] text-glow-pink">Welcome</span>
              <span className="block text-[color:var(--neon-pink)] text-glow-pink text-xl sm:text-3xl lg:text-4xl mb-4">to the</span>
              <span id="lucaverse-title" className="block text-[color:var(--neon-blue)] text-glow-blue transition-all duration-300 glitch-active mb-4 mt-4">Lucaverse</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-md mx-auto md:mx-0 init-hidden fade-in-left delay-2">
              A digital universe of tools, thoughts, and resources curated by Luca.
            </p>
            <div className="mt-6 init-hidden fade-in-up delay-3 flex flex-col items-center md:items-start gap-4">
              <CTAButton subLabel="If you dare">
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