
'use client';

import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'; // Using scroll area for horizontal content

export function IdentitySection() {
  const stories = [
    { title: 'Lagos Love', content: 'Davido\'s heart beats for Lagos, the vibrant city that shaped him.', imgSrc: 'https://images.unsplash.com/photo-1719314313652-d9835e0c52c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxMYWdvcyUyMHNreWxpbmV8ZW58MHx8fHwxNzQ3NjUxMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'Lagos skyline' },
    { title: 'Jollof & Suya', content: 'His go-to comfort foods: a plate of smoky Jollof and spicy Suya.', imgSrc: 'https://images.unsplash.com/photo-1665556899022-9761f95769e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxqb2xsb2YlMjBzdXlhfGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'jollof suya' },
    { title: 'Album Milestones', content: '"Timeless" breaking records, a testament to his enduring artistry.', imgSrc: 'https://images.unsplash.com/photo-1652092956602-8da6348b986f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtdXNpYyUyMGF3YXJkfGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'music award' },
    { title: 'Atlanta Roots', content: 'His formative years in Atlanta infused his music with global appeal.', imgSrc: 'https://images.unsplash.com/photo-1465138456624-660a77cb151f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxBdGxhbnRhJTIwY2l0eXNjYXBlfGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'Atlanta cityscape' },
    { title: 'Philanthropic Heart', content: 'Beyond music, Davido\'s generosity touches countless lives.', imgSrc: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb21tdW5pdHklMjBjaGFyaXR5fGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'community charity' },
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
