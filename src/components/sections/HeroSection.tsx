
'use client';

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onEnterVibeClick: () => void;
}

interface Star {
  id: number;
  style: React.CSSProperties;
  animationClass: string;
}

const NUM_STARS = 35; // Number of stars, adjust for density

export function HeroSection({ onEnterVibeClick }: HeroSectionProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    const animationClasses = ['animate-star-drift-1', 'animate-star-drift-2', 'animate-star-drift-3', 'animate-star-drift-4'];
    
    for (let i = 0; i < NUM_STARS; i++) {
      const size = Math.random() * 2 + 1; // Star size between 1px and 3px
      const animationDuration = Math.random() * 25 + 20; // Duration 20s to 45s
      const animationDelay = Math.random() * 15; // Delay 0s to 15s
      
      const selectedAnimationClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];

      generatedStars.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        },
        animationClass: selectedAnimationClass,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <section className="min-h-[calc(100vh-var(--header-height,80px))] flex flex-col items-center justify-center text-center p-6 bg-background relative overflow-hidden">
      {/* Radial gradient background - behind stars */}
      <div className="absolute inset-0 opacity-5 z-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.1), transparent 60%),
                         radial-gradient(circle at top left, hsl(var(--accent) / 0.1), transparent 50%),
                         radial-gradient(circle at bottom right, hsl(var(--accent) / 0.1), transparent 50%)`
      }}></div>

      {/* Star background - on top of radial gradient, behind content */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full bg-primary/60 ${star.animationClass}`}
            style={star.style}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6">
          <span className="text-primary text-glow-gold">ENTER</span> THE <span className="text-primary text-glow-gold">5</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Immerse yourself in a culinary journey where flavor meets rhythm, inspired by Davido's iconic "5IVE" album.
        </p>
        <Button 
          size="lg" 
          className="px-10 py-6 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 group"
          onClick={onEnterVibeClick}
          aria-label="Scroll to AI Food Pairing Section"
        >
          Enter the Vibe
          <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
}
