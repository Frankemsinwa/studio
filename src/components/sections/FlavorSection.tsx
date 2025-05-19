
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion'; // For potential future animations

export function FlavorSection() {
  const dishes = [
    { name: 'Jollof Rice Deluxe', description: 'A smoky, party-style jollof with all the trimmings.', imgSrc: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxqb2xsb2YlMjByaWNlfGVufDB8fHx8MTc0NzY1MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'jollof rice' },
    { name: 'Suya Sensation', description: 'Perfectly spiced beef suya, grilled to perfection.', imgSrc: 'https://images.unsplash.com/photo-1494358856891-c9a46d446c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3V5YSUyMGdyaWxsfGVufDB8fHx8MTc0NzY1MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080', hint: 'suya grill' },
    { name: 'Egusi Excellence', description: 'Rich egusi soup with pounded yam, a true classic.', imgSrc: 'https://images.unsplash.com/photo-1707897634957-e9fde6eab972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlZ3VzaSUyMHNvdXB8ZW58MHx8fHwxNzQ3NjUwOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'egusi soup' },
    { name: 'Plantain Paradise', description: 'Sweet, caramelized fried plantains.', imgSrc: 'https://placehold.co/600x400.png', hint: 'fried plantain' },
    { name: 'Chapman Chill', description: 'Our signature refreshing Nigerian Chapman cocktail.', imgSrc: 'https://placehold.co/600x400.png', hint: 'chapman cocktail' },
  ];

  return (
    <section id="flavor-section" className="py-16 md:py-24 bg-background/95 relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed', // For parallax-like effect
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow-gold">F</span>LAVOR
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into the rich tastes of 5iVE Kitchen. Experience high-quality dishes where every bite tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.slice(0,3).map((dish, index) => ( // Displaying first 3 for brevity, can be expanded
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group border-accent/20 hover:shadow-accent/20 shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={dish.imgSrc}
                      alt={dish.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={dish.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-2xl font-semibold mb-2 text-primary group-hover:text-glow-gold transition-all duration-300">{dish.name}</CardTitle>
                  <p className="text-muted-foreground flex-grow">{dish.description}</p>
                  <button className="mt-4 text-sm text-accent hover:underline self-start">
                    View Ingredients
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
         <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold mb-6">Top 5 Dishes from 5iVE Kitchen</h3>
          <ul className="space-y-2 text-muted-foreground max-w-md mx-auto">
            {dishes.map(dish => <li key={dish.name} className="p-2 bg-card rounded-md shadow-sm hover:bg-muted transition-colors">{dish.name}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
