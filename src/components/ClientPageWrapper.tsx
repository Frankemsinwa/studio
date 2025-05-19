
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
  const [showLoadingScreenInitialContent, setShowLoadingScreenInitialContent] = useState(true);
  const [startFiveZoomAnimation, setStartFiveZoomAnimation] = useState(false);
  const [isAppReadyForDisplay, setIsAppReadyForDisplay] = useState(false);

  useEffect(() => {
    const initialContentTimer = setTimeout(() => {
      setShowLoadingScreenInitialContent(false); // Hide "Loading the vibe..." text & spinner
      setStartFiveZoomAnimation(true);           // Start the '5' zoom animation
    }, 1500); // Duration for "Loading the vibe..." text & spinner to be visible

    const header = document.querySelector('header');
    if (header) {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }

    return () => {
      clearTimeout(initialContentTimer);
    };
  }, []);

  const handleFiveZoomAnimationComplete = () => {
    setIsAppReadyForDisplay(true); // Entire loading sequence finished, app is ready
  };

  const handleEnterVibeClick = () => {
    const section = document.getElementById('flavor-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isAppReadyForDisplay) {
    return (
      <LoadingScreen
        showInitialContent={showLoadingScreenInitialContent}
        startZoom={startFiveZoomAnimation}
        onZoomComplete={handleFiveZoomAnimationComplete}
      />
    );
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
        <AiPairingSection />
      </main>
      <AppFooter />
    </div>
  );
}
