
'use client';

import { SoupIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface LoadingScreenProps {
  showInitialContent: boolean;
  startZoom: boolean;
  onZoomComplete: () => void;
}

export function LoadingScreen({ showInitialContent, startZoom, onZoomComplete }: LoadingScreenProps) {
  const fiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fiveElement = fiveRef.current;
    if (startZoom && fiveElement) {
      const animationEndListener = (event: AnimationEvent) => {
        // Ensure we're reacting to the 'loading-zoom-out' animation
        // Note: Tailwind might prefix animation names. For simplicity,
        // we assume if startZoom is true, any animationend on '5' is the one we want.
        // A more robust check would be event.animationName.includes('loading-zoom-out') if needed.
        if (event.target === fiveElement) { // Make sure it's the '5' element's animation
          onZoomComplete();
        }
      };
      fiveElement.addEventListener('animationend', animationEndListener);
      return () => {
        fiveElement.removeEventListener('animationend', animationEndListener);
      };
    }
  }, [startZoom, onZoomComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background space-y-8 overflow-hidden">
      <div
        ref={fiveRef}
        className={cn(
          "text-9xl font-bold text-primary",
          startZoom 
            ? "animate-loading-zoom-out" // Apply zoom-out animation when startZoom is true
            : "animate-bubble-in animate-pulse-glow-anim" // Apply initial bubble-in and pulse-glow
        )}
        style={!startZoom ? { animationDelay: '0.2s' } : {}} // Apply delay only for initial animations
      >
        5
      </div>

      {showInitialContent && (
        <div
          className="flex items-center space-x-3 animate-bubble-in"
          style={{ animationDelay: '0.5s' }} // Delay for the text/spinner bubble-in
        >
          <SoupIcon className="h-10 w-10 text-primary animate-spin" style={{ animationDuration: '1.5s' }} />
          <p className="text-lg text-muted-foreground tracking-wider">Loading the Vibe...</p>
        </div>
      )}
    </div>
  );
}
