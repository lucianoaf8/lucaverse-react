import React from 'react';
import CTAButton from '../CTAButton/CTAButton';
import FloatingPanel from '../FloatingPanel/FloatingPanel';
import GlitchAvatar from './GlitchAvatar';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* Left Column - Text */}
          <div className="flex flex-col justify-center text-center md:text-left relative z-10">
            <h1 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider leading-tight init-hidden fade-in-left delay-1">
              <span className="block text-[color:var(--neon-pink)] text-glow-pink">Welcome</span>
              <span className="block text-[color:var(--neon-pink)] text-glow-pink text-xl sm:text-2xl lg:text-3xl mb-2">to the</span>
              <span id="lucaverse-title" className="block text-[color:var(--neon-blue)] text-glow-blue transition-all duration-300 glitch-active">Lucaverse</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0 init-hidden fade-in-left delay-2">
              A digital universe of tools, thoughts, and resources curated by Luca (aka Luca).
            </p>
            <div className="mt-8 init-hidden fade-in-up delay-3">
              <CTAButton subLabel="Begin your journey">
                Enter The Lucaverse
              </CTAButton>
            </div>
          </div>

          {/* Right Column - Avatar + Panels */}
          <div className="relative flex items-center justify-center min-h-[500px]">

            {/* Avatar centered inside */}
            <div className="avatar-container"  style={{ marginTop: '30px' }}>
              <GlitchAvatar />
            </div>

            {/* Floating Panels */}
            <FloatingPanel 
              title="Mission" 
              glowColor="blue"
              className="w-64  floating-float-medium"
              style={{ top: '0%', right: '-20%' }}
              animationDelay="delay-3"
            >
              A gateway to my builds, my thoughts, my tools.
              Lucaverse.dev is where experiments become reality.
            </FloatingPanel>

            <FloatingPanel 
              title="Vision" 
              glowColor="blue"
              className="w-64  floating-float-slow"
              style={{ top: '55%', left: '-20%' }}
              animationDelay="delay-4"
            >
              A growing galaxy of scripts, side quests, and whispers.
              It's not about polish; it's about presence.
            </FloatingPanel>

            <FloatingPanel 
              title="Luca" 
              glowColor="pink"
              className="w-64  floating-float-fast"
              style={{ bottom: '-15%', right: '-15%' }}
              animationDelay="delay-5"
            >
              The Architect
            </FloatingPanel>

          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
