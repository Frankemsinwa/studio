'use client';

import { useState, useEffect, useRef } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { AppFooter } from '@/components/layout/AppFooter';
import { LoadingScreen } from '@/components/sections/LoadingScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { AiPairingSection } from '@/components/sections/AiPairingSection';

export function ClientPageWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const aiPairingSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust as needed

    // Set header height for HeroSection calculation
    const header = document.querySelector('header');
    if (header) {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }


    return () => clearTimeout(timer);
  }, []);

  const handleEnterVibeClick = () => {
    const section = document.getElementById('ai-pairing-section');
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
        <AiPairingSection />
      </main>
      <AppFooter />
    </div>
  );
}
