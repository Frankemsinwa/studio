
'use client';

import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'; // Using scroll area for horizontal content

export function IdentitySection() {
  const stories = [
    { title: 'Lagos Love', content: 'Davido\'s heart beats for Lagos, the vibrant city that shaped him.', imgSrc: 'https://placehold.co/400x600.png', hint: 'Lagos skyline' },
    { title: 'Jollof & Suya', content: 'His go-to comfort foods: a plate of smoky Jollof and spicy Suya.', imgSrc: 'https://placehold.co/400x600.png', hint: 'jollof suya' },
    { title: 'Album Milestones', content: '"Timeless" breaking records, a testament to his enduring artistry.', imgSrc: 'https://placehold.co/400x600.png', hint: 'music award' },
    { title: 'Atlanta Roots', content: 'His formative years in Atlanta infused his music with global appeal.', imgSrc: 'https://placehold.co/400x600.png', hint: 'Atlanta cityscape' },
    { title: 'Philanthropic Heart', content: 'Beyond music, Davido\'s generosity touches countless lives.', imgSrc: 'https://placehold.co/400x600.png', hint: 'community charity' },
  ];

  return (
    <section id="identity-section" className="py-16 md:py-24 bg-card/50 relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1), transparent 2px), linear-gradient(to bottom, hsl(var(--primary) / 0.1), transparent 2px)`,
        backgroundSize: `20px 20px`,
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-gold">i</span>DENTITY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the stories and inspirations behind Davido and the 5iVE Kitchen experience.
          </p>
        </div>

        {/* Simulating a vertical scroll strip feel with horizontal scrolling cards */}
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-6 pb-4">
            {stories.map((story, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-xl w-[300px] bg-background border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                <Image
                  src={story.imgSrc}
                  alt={story.title}
                  width={400}
                  height={600}
                  className="w-full h-[200px] object-cover"
                  data-ai-hint={story.hint}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{story.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-normal h-20 overflow-y-auto">{story.content}</p>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Ambient Sound</h3>
          <p className="text-muted-foreground">
            Imagine Davido's "Timeless" album playing softly in the background.
          </p>
          {/* Placeholder for Spotify embed */}
          <div className="mt-4 p-4 bg-muted/30 rounded-md max-w-md mx-auto">
            <p className="text-sm">[Embedded Spotify Playlist Placeholder]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
