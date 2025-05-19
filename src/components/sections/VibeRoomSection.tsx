
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Music, Disc3, Utensils } from 'lucide-react';

export function VibeRoomSection() {
  const items = [
    { type: 'food', name: 'Jollof Beats', imgSrc: 'https://placehold.co/300x300.png', hint: 'jollof plate' },
    { type: 'track', name: 'Fall - Davido', imgSrc: 'https://placehold.co/300x300.png', hint: 'music album cover' },
    { type: 'food', name: 'Suya Grooves', imgSrc: 'https://placehold.co/300x300.png', hint: 'suya skewer' },
    { type: 'track', name: 'If - Davido', imgSrc: 'https://placehold.co/300x300.png', hint: 'davido concert' },
    { type: 'food', name: 'Pounded Yam Rhythms', imgSrc: 'https://placehold.co/300x300.png', hint: 'pounded yam' },
  ];

  return (
    <section id="vibe-room-section" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(hsl(var(--accent)) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        animation: 'float 20s infinite linear',
      }}></div>
       <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(0px) translateX(-10px); }
          75% { transform: translateY(10px) translateX(0px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-gold">V</span>IBE ROOM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An interactive digital lounge. Hover to pulse plates and preview tracks; click for an immersive experience.
          </p>
          <p className="mt-4 text-2xl font-semibold text-accent text-glow-purple italic">
            “Food is the Soundtrack of the Soul”
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-card/80 backdrop-blur-sm rounded-lg shadow-xl border border-border p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-primary/50 hover:border-primary transition-all duration-300 transform hover:scale-105"
              onClick={() => alert(`Clicked on ${item.name}. Fullscreen animation & playback would start here.`)}
            >
              <Image
                src={item.imgSrc}
                alt={item.name}
                width={150}
                height={150}
                className="rounded-md mb-3 object-cover"
                data-ai-hint={item.hint}
              />
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
              {item.type === 'food' ? (
                <Utensils className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-1" />
              ) : (
                <Disc3 className="w-5 h-5 text-muted-foreground group-hover:text-primary mt-1" />
              )}
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse group-hover:animate-none" style={{animationDuration: '2s'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
