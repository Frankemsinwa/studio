
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Flavor', href: '#flavor-section' },
  { name: 'Identity', href: '#identity-section' },
  { name: 'Vibe Room', href: '#vibe-room-section' },
  { name: 'Experience', href: '#experience-section' },
  { name: 'AI Pairing', href: '#ai-pairing-section' },
];

export function AppHeader() {
  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // Allow default behavior for external links or full page reloads if href doesn't start with #
    if (!href.startsWith('#')) {
      return;
    }
    event.preventDefault();
    const targetId = href.substring(1); // Remove #
    const element = document.getElementById(targetId);
    if (element) {
      // Calculate offset if header is fixed/sticky
      const headerOffset = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="py-4 px-6 md:px-8 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth'});
          }
        }}>
          <span className="text-4xl font-bold text-primary text-glow-gold">5</span>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-primary">i</span>VE Kitchen
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6 border-l border-border/60">
              <div className="flex flex-col space-y-1">
                <Link href="/" className="flex items-center space-x-2 mb-6" onClick={(e) => {
                    if (window.location.pathname === '/') {
                        // If already on home page, prevent default and scroll to top
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth'});
                        // Manually close sheet if SheetClose is wrapping this link
                        const closeButton = document.querySelector('[data-radix-dialog-close]');
                        if (closeButton instanceof HTMLElement) closeButton.click();
                    }
                    // If not on home page, Link will navigate, then SheetClose closes.
                  }}>
                    <span className="text-4xl font-bold text-primary text-glow-gold">5</span>
                    <h1 className="text-2xl font-bold tracking-tight">
                      <span className="text-primary">i</span>VE Kitchen
                    </h1>
                </Link>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
