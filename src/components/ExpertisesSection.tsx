import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Palette, Globe, Camera, ArrowRight } from "lucide-react";

const expertises = [
  {
    icon: Palette,
    number: "01",
    title: "Identité visuelle",
    tagline: "Créer une marque mémorable",
    objective: "Construire une identité cohérente qui inspire confiance et différencie.",
    deliverables: ["Logo & charte graphique", "Système de marque complet", "Templates & déclinaisons"],
    result: "Une image professionnelle et cohérente sur tous vos supports.",
    href: "/services#identite",
  },
  {
    icon: Globe,
    number: "02",
    title: "Site internet",
    tagline: "Convertir vos visiteurs en clients",
    objective: "Un site performant, optimisé SEO, qui travaille pour vous 24h/24.",
    deliverables: ["Site vitrine ou e-commerce", "Optimisation mobile & SEO", "Hébergement & maintenance"],
    result: "Un outil de vente qui génère des contacts qualifiés.",
    href: "/services#web",
  },
  {
    icon: Camera,
    number: "03",
    title: "Photographie produit",
    tagline: "Valoriser vos produits & services",
    objective: "Des visuels professionnels qui font vendre et inspirent confiance.",
    deliverables: ["Packshots fond blanc", "Shooting en situation", "Retouches & livraison HD"],
    result: "Des images qui remplacent le discours commercial.",
    href: "/services#photo",
  },
];

export default function ExpertisesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".card-reveal").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
              el.classList.add("animate-fade-up");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-5 card-reveal opacity-0">
            <div className="h-px w-8 bg-cyan-accent" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
              Expertises
            </span>
          </div>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-graphite mb-4 card-reveal opacity-0">
            Trois expertises.<br />
            <span className="text-primary">Un studio.</span> Des résultats.
          </h2>
          <p className="font-inter text-steel leading-relaxed card-reveal opacity-0">
            Chaque prestation est conçue pour répondre à un objectif business précis — pas à une tendance graphique.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {expertises.map((expertise) => {
            const Icon = expertise.icon;
            return (
              <div
                key={expertise.title}
                className="card-reveal opacity-0 card-accent group p-7 rounded-xl bg-card border border-border flex flex-col"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="font-mono-tech text-xs text-steel/30 font-medium">
                    {expertise.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-grotesk font-bold text-xl text-graphite mb-1">
                  {expertise.title}
                </h3>
                <p className="font-inter text-xs font-medium text-cyan-accent mb-4 uppercase tracking-wide">
                  {expertise.tagline}
                </p>
                <p className="font-inter text-sm text-steel leading-relaxed mb-5">
                  {expertise.objective}
                </p>

                {/* Deliverables */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {expertise.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-graphite/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Result */}
                <div className="p-3 rounded-md bg-surface border border-primary/10 mb-5">
                  <p className="font-inter text-xs text-primary font-medium">
                    → {expertise.result}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  to={expertise.href}
                  className="flex items-center gap-2 text-sm font-grotesk font-medium text-primary hover:text-cyan-accent transition-colors group/link"
                >
                  En savoir plus
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
