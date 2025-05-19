'use client';

import { Spoon } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background space-y-8">
      <div
        className="text-9xl font-bold text-primary animate-bubble-in"
        style={{ animationDelay: '0.2s', animationName: 'bubble-in, pulse-glow', animationDuration: '0.8s, 2s', animationIterationCount: '1, infinite', animationTimingFunction: 'ease-out, ease-in-out' }}
      >
        5
      </div>
      <div className="flex items-center space-x-3 animate-bubble-in" style={{ animationDelay: '0.5s' }}>
        <Spoon className="h-10 w-10 text-primary animate-spin" style={{ animationDuration: '1.5s' }} />
        <p className="text-lg text-muted-foreground tracking-wider">Loading the Vibe...</p>
      </div>
    </div>
  );
}
