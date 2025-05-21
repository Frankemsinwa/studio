
'use client';

import Image from 'next/image';
import lagosMarketImage from '@/assets/img/_Another view of Nnamdi Azikiwe and Idumota Market in the 1980s_ While the streets are usually___.jpg';

export function IdentitySection() {

  const stories = [
    { title: 'Lagos Love', content: 'Davido\'s heart beats for Lagos, the vibrant city that shaped him.', imgSrc: lagosMarketImage, hint: 'Lagos market 1980s' },
    { title: 'Jollof & Suya', content: 'His go-to comfort foods: a plate of smoky Jollof and spicy Suya.', imgSrc: 'https://images.unsplash.com/photo-1665556899022-9761f95769e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxqb2xsb2YlMjBzdXlhfGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'jollof suya' },
    { title: 'Album Milestones', content: '"Timeless" breaking records, a testament to his enduring artistry.', imgSrc: 'https://images.unsplash.com/photo-1652092956602-8da6348b986f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtdXNpYyUyMGF3YXJkfGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'music award' },
    { title: 'Atlanta Roots', content: 'His formative years in Atlanta infused his music with global appeal.', imgSrc: 'https://images.unsplash.com/photo-1465138456624-660a77cb151f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxBdGxhbnRhJTIwY2l0eXNjYXBlfGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'Atlanta cityscape' },
    { title: 'Philanthropic Heart', content: 'Beyond music, Davido\'s generosity touches countless lives.', imgSrc: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb21tdW5pdHklMjBjaGFyaXR5fGVufDB8fHx8MTc0NzY1MTExNXww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'community charity' },
  ];

  return (
    <section id="identity-section" className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
      {/* Decorative light flare */}
      <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[150px] opacity-70 pointer-events-none"></div>
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1), transparent 2px), linear-gradient(to bottom, hsl(var(--primary) / 0.1), transparent 2px)`,
        backgroundSize: `20px 20px`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-gold">i</span>DENTITY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the stories and inspirations behind Davido and the 5iVE Kitchen experience.
          </p>
        </div>

        {/* Journey/Timeline Layout */}
        <div className="relative">
          {/* The main timeline "spine" - visible on md+ */}
          <div className="hidden md:block absolute w-1 bg-primary/30 top-0 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 md:space-y-0"> {/* Handles spacing for mobile cards */}
            {stories.map((story, index) => (
              <div key={index} className={`md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-8 items-start ${index < stories.length -1 ? 'mb-12 md:mb-24' : 'mb-0'}`}>
                
                {/* Left Content Area (or spacer) */}
                <div className={`md:col-start-1 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                  {index % 2 === 0 && (
                    <div className="bg-background/80 backdrop-blur-md border-border hover:border-primary rounded-lg shadow-xl p-6 relative transition-all duration-300">
                      {/* Mobile node indicator */}
                      <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-primary border-[3px] border-background shadow-md"></div>
                      <Image
                        src={story.imgSrc}
                        alt={story.title}
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover rounded-md mb-4 shadow-md"
                        data-ai-hint={story.hint}
                        priority={index === 0} // Prioritize loading the first image
                      />
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-2">{story.title}</h3>
                      <p className="text-sm lg:text-base text-muted-foreground">{story.content}</p>
                    </div>
                  )}
                </div>

                {/* Node on the Spine (Center Column for Desktop) */}
                <div className="hidden md:flex md:col-start-2 justify-center relative pt-2"> {/* pt-2 to align node with card content typically */}
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>
                </div>

                {/* Right Content Area (or spacer) */}
                <div className={`md:col-start-3 ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                  {index % 2 !== 0 && (
                    <div className="bg-background/80 backdrop-blur-md border-border hover:border-primary rounded-lg shadow-xl p-6 relative transition-all duration-300">
                      {/* Mobile node indicator */}
                       <div className="md:hidden absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-primary border-[3px] border-background shadow-md"></div>
                      <Image
                        src={story.imgSrc}
                        alt={story.title}
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover rounded-md mb-4 shadow-md"
                        data-ai-hint={story.hint}
                      />
                      <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-2">{story.title}</h3>
                      <p className="text-sm lg:text-base text-muted-foreground">{story.content}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Sound Section - Preserved */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Ambient Sound</h3>
          <p className="text-muted-foreground">
            Imagine Davido's "5ive" album playing softly in the background.
          </p>
          <div className="mt-4 p-4 bg-muted/30 rounded-md max-w-md mx-auto">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/album/4jzhMxpTkAm2pxUuamulT8?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

