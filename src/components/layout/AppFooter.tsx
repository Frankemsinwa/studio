import Link from 'next/link';

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'Order', href: '#' },
    { name: 'Socials', href: '#' },
    { name: 'Legal', href: '#' },
  ];

  return (
    <footer className="py-8 px-6 md:px-8 border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} 5iVE Kitchen. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Inspired by the Vibe.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
