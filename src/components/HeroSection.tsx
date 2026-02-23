import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const words = ["Votre", "image", "mérite", "mieux", "qu'un", "simple", "prestataire."];

const clients = ["Artisan & Co", "Industrie43", "Commerce Local", "Services Pro", "BTP Auvergne", "Hôtellerie"];

export default function HeroSection() {
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    wordsRef.current.forEach((el, i) => {
      if (el) {
        el.style.animationDelay = `${0.1 + i * 0.12}s`;
        el.style.opacity = "0";
        el.style.animation = `wordReveal 0.6s ease ${0.1 + i * 0.12}s forwards`;
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grain">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(180deg, hsl(30 5% 8% / 0.7) 0%, hsl(30 5% 8% / 0.85) 60%, hsl(30 5% 8%) 100%)",
      }} />
      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 animate-pulse-glow"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 30%, hsl(72 89% 57% / 0.05), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary font-bold">
              Studio créatif en Haute-Loire · 43
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white tracking-tighter mb-8">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => { if (el) wordsRef.current[i] = el; }}
                className="inline-block mr-[0.2em] word-animate"
              >
                {word === "image" ? (
                  <span className="text-primary italic">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
            <span className="cursor-blink text-primary ml-1">|</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-inter text-lg md:text-xl text-steel leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            Studio graphique & web pour PME en Haute-Loire.{" "}
            <span className="text-graphite-foreground/80">Identité.</span>{" "}
            <span className="text-graphite-foreground/80">Site internet.</span>{" "}
            <span className="text-graphite-foreground/80">Photographie produit.</span>
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
          >
            <Link
              to="/contact"
              className="btn-animated group font-grotesk font-semibold px-8 py-4 rounded bg-primary text-primary-foreground flex items-center gap-2 hover:bg-secondary transition-all duration-200"
            >
              Obtenir un devis structuré
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/realisations"
              className="font-grotesk font-bold px-8 py-4 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Voir nos réalisations
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
          >
            <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-steel/50 mb-4">
              Ils nous font confiance
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-grotesk font-semibold text-sm text-steel/30 hover:text-steel/60 transition-colors cursor-default tracking-wide"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problematique"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-steel/40 hover:text-primary transition-colors group"
      >
        <span className="font-mono-tech text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
      </a>
    </section>
  );
}
