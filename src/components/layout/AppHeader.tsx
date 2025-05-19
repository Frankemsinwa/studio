import Link from 'next/link';

export function AppHeader() {
  return (
    <header className="py-4 px-6 md:px-8 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-primary text-glow-gold">5</span>
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-primary">i</span>VE Kitchen
          </h1>
        </Link>
        {/* Future navigation links can go here */}
      </div>
    </header>
  );
}
