import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background text-foreground section-dark">
      {/* Blue directional glow */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 100% at 50% 100%, hsl(217 91% 53% / 0.08), transparent 70%)",
      }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(220 20% 97% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 97% / 0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-steel mb-5 block">
          Passez à l'action
        </span>
        <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-foreground mb-6 max-w-2xl mx-auto leading-tight">
          Prêt à structurer<br className="hidden md:block" />votre image ?
        </h2>
        <p className="font-inter text-muted-foreground text-lg max-w-md mx-auto mb-10">
          Obtenez un devis détaillé sous 48h. Sans engagement, sans jargon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-animated group font-grotesk font-bold text-base px-8 py-4 rounded bg-primary text-primary-foreground flex items-center gap-2 transition-all duration-300"
          >
            Obtenir mon devis gratuit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/realisations"
            className="font-grotesk font-bold text-base px-8 py-4 rounded border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Voir nos réalisations
          </Link>
        </div>

        {/* Reassurance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {["Réponse sous 48h", "Devis gratuit & sans engagement", "Basé en Haute-Loire"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-inter text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
