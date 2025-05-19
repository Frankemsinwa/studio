import { AiPairingForm } from "@/components/AiPairingForm";

export function AiPairingSection() {
  return (
    <section id="ai-pairing-section" className="py-16 md:py-24 bg-background relative">
       <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                         linear-gradient(to right, hsl(var(--accent)) 1px, hsl(var(--background)) 1px)`,
        backgroundSize: `40px 40px`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <AiPairingForm />
      </div>
    </section>
  );
}
