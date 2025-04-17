import React from 'react';
import CTAButton from '../CTAButton/CTAButton';
import FloatingPanel from '../FloatingPanel/FloatingPanel';
import GlitchAvatar from './GlitchAvatar';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left relative z-10">
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

          {/* Right Column - Avatar and Floating Panels */}
          <div className="relative flex justify-center md:justify-end items-center mt-8 md:mt-0 h-[250px] md:h-[320px]">
            <div className="avatar-container init-hidden fade-in-right delay-2">
              <GlitchAvatar />
            </div>

            <FloatingPanel 
              title="Mission" 
              glowColor="blue"
              className="w-44"
              style={{ top: '5%', right: '5%' }}
              animationDelay="delay-3"
            >
              Lucaverse.dev is my everything-site — part portfolio, part digital brain, part experimental playground. It’s where I host and share what I build, what I learn, and the tools I rely on.
            </FloatingPanel>

            <FloatingPanel 
              title="Vision" 
              glowColor="blue"
              className="w-44"
              style={{ top: '40%', left: '0%' }}
              animationDelay="delay-4"
            >
              I want Lucaverse to grow into a living system — a modular, ever-expanding galaxy of thoughts, scripts, resources, and side quests. It’s not about polish; it’s about presence.
            </FloatingPanel>

            <FloatingPanel 
              title="Luca" 
              glowColor="pink"
              className="w-44"
              style={{ bottom: '15%', right: '10%' }}
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