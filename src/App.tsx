import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SomewhereSection } from './components/SomewhereSection';
import { LittleThingsSection } from './components/LittleThingsSection';
import { KaleshSection } from './components/KaleshSection';
import { WhatIWantSection } from './components/WhatIWantSection';
import { MemoryTimelineSection } from './components/MemoryTimelineSection';
import { ProposalSection } from './components/ProposalSection';
import { FinalLetterSection } from './components/FinalLetterSection';
import { FloatingParticles } from './components/FloatingParticles';
import { NavbarProgress } from './components/NavbarProgress';
import { AudioPlayer } from './components/AudioPlayer';

export const App: React.FC = () => {
  const handleStartReading = () => {
    const section1 = document.getElementById('section-1');
    if (section1) {
      section1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#120308] text-[#fff5f8] overflow-x-hidden">
      {/* Background Particles & Ambient Lighting */}
      <FloatingParticles />

      {/* Top Navbar & Scroll Progress Indicator */}
      <NavbarProgress />

      {/* Ambient Audio Generator & Toggle */}
      <AudioPlayer />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onStartClick={handleStartReading} />
        <SomewhereSection />
        <LittleThingsSection />
        <KaleshSection />
        <WhatIWantSection />
        <MemoryTimelineSection />
        <ProposalSection onReplay={handleReplay} />
        <FinalLetterSection />
      </main>
    </div>
  );
};

export default App;
