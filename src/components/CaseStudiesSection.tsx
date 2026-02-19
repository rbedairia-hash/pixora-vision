import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const cases = [
  {
    title: "Menuiserie Chalard",
    category: "Identité + Site web",
    context: "Menuisier artisan, 15 ans d'activité, aucune présence digitale.",
    problem: "Zéro visibilité en ligne, dépendance totale au bouche-à-oreille.",
    solution: "Identité visuelle premium + site vitrine SEO-optimisé.",
    impact: "+340% de contacts entrants en 6 mois",
    color: "from-primary/20 to-cyan/10",
    tag: "Artisanat",
  },
  {
    title: "Garage Martin",
    category: "Refonte web + Photo",
    context: "Garage automobile multi-marques, Yssingeaux.",
    problem: "Site de 2012, non-mobile, taux de rebond > 85%.",
    solution: "Refonte complète + shooting véhicules + stratégie Google.",
    impact: "Taux de rebond : 85% → 38%",
    color: "from-cyan/20 to-primary/10",
    tag: "Automobile",
  },
  {
    title: "Hôtel du Velay",
    category: "Identité complète",
    context: "Hôtel 3 étoiles, Le Puy-en-Velay. Repositionnement haut de gamme.",
    problem: "Image vieillissante ne reflétant plus le niveau de service.",
    solution: "Nouveau logo, charte, site, shooting architecture et chambres.",
    impact: "Taux de remplissage +22% hors saison",
    color: "from-primary/15 to-primary/5",
    tag: "Hôtellerie",
  },
];

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".case-item").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
              el.classList.add("animate-fade-up");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-cyan-accent" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
                Études de cas
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-graphite">
              Des résultats.<br />
              <span className="text-primary">Pas des promesses.</span>
            </h2>
          </div>
          <Link
            to="/realisations"
            className="font-grotesk font-medium text-sm text-primary flex items-center gap-2 hover:text-cyan-accent transition-colors group flex-shrink-0"
          >
            Voir toutes les réalisations
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="case-item opacity-0 group relative rounded-xl border border-border bg-card overflow-hidden hover-lift cursor-pointer"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {/* Visual header */}
              <div className={`h-40 bg-gradient-to-br ${c.color} relative`}>
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary/70 border border-primary/20 rounded px-2 py-1 bg-graphite/30 backdrop-blur-sm">
                    {c.tag}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-graphite/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-grotesk font-semibold text-graphite-foreground text-sm border border-white/20 rounded-md px-4 py-2 flex items-center gap-2">
                    Voir le projet <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-grotesk font-bold text-lg text-graphite">
                      {c.title}
                    </h3>
                    <p className="font-mono-tech text-[10px] text-steel uppercase tracking-wide">
                      {c.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <div>
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-steel/50 block mb-1">Contexte</span>
                    <p className="font-inter text-xs text-steel leading-relaxed">{c.context}</p>
                  </div>
                  <div>
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-steel/50 block mb-1">Solution</span>
                    <p className="font-inter text-xs text-steel leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent flex-shrink-0" />
                    <span className="font-grotesk font-semibold text-sm text-primary">
                      {c.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
