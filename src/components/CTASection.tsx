import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 100% at 50% 100%, hsl(189 94% 53% / 0.15), transparent 70%)",
      }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-white/60 mb-5 block">
          Passez à l'action
        </span>
        <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
          Prêt à structurer<br />votre image ?
        </h2>
        <p className="font-inter text-white/70 text-lg max-w-md mx-auto mb-10">
          Obtenez un devis détaillé sous 48h. Sans engagement, sans jargon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-animated group font-grotesk font-bold text-base px-8 py-4 rounded-md bg-white text-primary flex items-center gap-2 hover:bg-white/90 transition-all shadow-lg"
          >
            Obtenir mon devis gratuit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/realisations"
            className="font-grotesk font-medium text-base px-8 py-4 rounded-md border border-white/30 text-white hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Voir nos réalisations
          </Link>
        </div>

        {/* Reassurance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {["Réponse sous 48h", "Devis gratuit & sans engagement", "Basé en Haute-Loire"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="font-inter text-sm text-white/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
