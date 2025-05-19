
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Youtube, ShoppingBag } from 'lucide-react';

export function ExperienceSection() {
  const reviews = [
    { author: 'Opeyemi Foodie', text: 'Absolutely vibing with these flavors!', platform: 'Twitter', imgSrc: 'https://placehold.co/80x80.png', hint: 'person avatar' },
    { author: 'Lagos Gourmet', text: 'Five stars for 5iVE Kitchen!', platform: 'Instagram', imgSrc: 'https://placehold.co/80x80.png', hint: 'food blogger' },
    { author: 'NaijaEats', text: 'Best new spot in town.', platform: 'TikTok', imgSrc: 'https://placehold.co/80x80.png', hint: 'social media user' },
  ];

  return (
    <section id="experience-section" className="py-16 md:py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-black opacity-50"></div>
      <div className="absolute inset-0 pattern-dots pattern-primary pattern-bg-transparent pattern-opacity-10 pattern-size-8"></div>
      {/* Spotlight effect placeholder */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[150px] animate-pulse" style={{animationDuration: '5s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-gold">E</span>XPERIENCE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what others are saying and join the culinary conversation.
          </p>
        </div>

        {/* Placeholder for carousel of reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur-md border-border hover:border-accent transition-colors shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src={review.imgSrc}
                  alt={review.author}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 border-2 border-primary"
                  data-ai-hint={review.hint}
                />
                <p className="text-lg font-semibold text-foreground mb-1">"{review.text}"</p>
                <p className="text-sm text-muted-foreground mb-2">- {review.author}</p>
                <div className="flex items-center text-xs text-accent">
                  {review.platform === 'TikTok' || review.platform === 'Instagram' ? <Youtube className="w-4 h-4 mr-1" /> : <MessageCircle className="w-4 h-4 mr-1" />}
                  {review.platform}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="px-10 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 group"
            onClick={() => alert('Order modal/link would open here.')}
            aria-label="Order Now"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Order Now – Taste the Vibe
          </Button>
        </div>
      </div>
    </section>
  );
}

// Minimal CSS for pattern-dots using pseudo-elements (could be more complex with SVG)
// This is a very basic representation. For more complex patterns, an SVG or a library would be better.
// Add to globals.css or a style tag if preferred.
// For now, let's use a simple background pattern via a utility class if available or inline style.
// Using a helper for Tailwind CSS for patterns (requires setup)
// For simplicity, I'll add a simple dot pattern via inline style for now
// in the parent div using:
// className="pattern-dots pattern-primary pattern-bg-transparent pattern-opacity-10 pattern-size-8"
// Assuming `tailwindcss-patterns` or similar plugin is configured or you'd define these manually in globals.css
// For now, the effect will be minimal without the plugin.
