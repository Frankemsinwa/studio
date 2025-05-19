
'use client';

import { useState, useEffect, useRef } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { AppFooter } from '@/components/layout/AppFooter';
import { LoadingScreen } from '@/components/sections/LoadingScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { FlavorSection } from '@/components/sections/FlavorSection';
import { IdentitySection } from '@/components/sections/IdentitySection';
import { VibeRoomSection } from '@/components/sections/VibeRoomSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AiPairingSection } from '@/components/sections/AiPairingSection';

export function ClientPageWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  // const aiPairingSectionRef = useRef<HTMLElement>(null); // No longer primary target for hero button

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const header = document.querySelector('header');
    if (header) {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleEnterVibeClick = () => {
    // Now scrolls to the Flavor section, which is the first content section
    const section = document.getElementById('flavor-section'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection onEnterVibeClick={handleEnterVibeClick} />
        <FlavorSection />
        <IdentitySection />
        <VibeRoomSection />
        <ExperienceSection />
        <AiPairingSection /> {/* This section is now after the new ones */}
      </main>
      <AppFooter />
    </div>
  );
}
