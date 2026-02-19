import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ExternalLink } from "lucide-react";

const categories = ["Tous", "Identité", "Web", "Photographie", "Stratégie"];

const projects = [
  {
    title: "Menuiserie Chalard",
    category: "Identité",
    tags: ["Logo", "Charte graphique", "Site web"],
    context: "Menuisier artisan en Haute-Loire, 15 ans d'activité.",
    problem: "Aucune identité visuelle cohérente, présence digitale inexistante.",
    solution: "Identité visuelle complète + site vitrine SEO + shooting chantiers.",
    stack: ["Adobe Illustrator", "WordPress", "Canon EOS R5"],
    result: "+340% contacts entrants en 6 mois",
    color: "from-primary/20 to-cyan/10",
  },
  {
    title: "Garage Martin",
    category: "Web",
    tags: ["Refonte web", "SEO", "Photographie"],
    context: "Garage automobile multi-marques à Yssingeaux.",
    problem: "Site de 2012, non-mobile, taux de rebond > 85%.",
    solution: "Refonte complète + packshots véhicules + stratégie Google.",
    stack: ["WordPress", "Rank Math SEO", "Lightroom"],
    result: "Taux de rebond 85% → 38%",
    color: "from-cyan/20 to-primary/10",
  },
  {
    title: "Hôtel du Velay",
    category: "Identité",
    tags: ["Identité", "Site web", "Photographie"],
    context: "Hôtel 3 étoiles au Puy-en-Velay, repositionnement haut de gamme.",
    problem: "Image vieillissante ne reflétant plus le standing.",
    solution: "Nouveau logo, charte, site, shooting architecture et chambres.",
    stack: ["Adobe CC", "WordPress", "Sony A7IV"],
    result: "+22% taux de remplissage hors saison",
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Boulangerie des Sucs",
    category: "Photographie",
    tags: ["Packshots", "Ambiance"],
    context: "Boulangerie-pâtisserie artisanale, Monistrol-sur-Loire.",
    problem: "Photos smartphone pour les réseaux sociaux insuffisantes.",
    solution: "Shooting produits + mise en scène + formation publication.",
    stack: ["Studio mobile", "Canon EOS R5", "Lightroom"],
    result: "+180% d'engagement Instagram",
    color: "from-cyan/15 to-cyan/5",
  },
  {
    title: "Électricité Bernard",
    category: "Stratégie",
    tags: ["SEO local", "Google Business", "Site web"],
    context: "Électricien indépendant, secteur Brioude.",
    problem: "Invisible sur Google, 0 appels entrants depuis le web.",
    solution: "Audit + site vitrine + optimisation Google Business.",
    stack: ["WordPress", "Google Search Console", "SEMrush"],
    result: "1ère page Google pour 8 requêtes locales",
    color: "from-primary/10 to-surface/50",
  },
  {
    title: "Scierie des Monts",
    category: "Web",
    tags: ["Site e-commerce", "Catalogue produits"],
    context: "Scierie familiale, vente de bois de construction et décoration.",
    problem: "Ventes uniquement locales, aucune présence e-commerce.",
    solution: "Boutique WooCommerce + packshots produits bois + SEO régional.",
    stack: ["WooCommerce", "WordPress", "Stripe"],
    result: "+65% de CA en vente directe",
    color: "from-steel/10 to-primary/10",
  },
];

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-graphite pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-cyan-accent" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
              Réalisations
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-graphite-foreground max-w-2xl mb-4">
            Nos projets.<br />
            <span className="text-cyan-accent">Leurs résultats.</span>
          </h1>
          <p className="font-inter text-steel max-w-xl leading-relaxed">
            Chaque projet est une collaboration. Voici quelques exemples concrets de ce que nous avons construit ensemble.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border bg-surface sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-grotesk text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-blue"
                    : "bg-card border border-border text-steel hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-border bg-card overflow-hidden hover-lift"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Visual */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 bg-graphite/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="font-grotesk font-semibold text-sm text-graphite-foreground border border-white/20 rounded-md px-4 py-2.5 flex items-center gap-2 hover:border-white/50 transition-colors">
                      Voir le détail <ExternalLink size={13} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono-tech text-[9px] uppercase tracking-wider text-graphite-foreground/80 bg-graphite/50 backdrop-blur-sm border border-white/10 rounded px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-grotesk font-bold text-base text-foreground">
                        {project.title}
                      </h3>
                      <span className="font-mono-tech text-[10px] text-steel uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="font-inter text-xs text-steel leading-relaxed mb-3">
                    {project.solution}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((s) => (
                      <span key={s} className="font-mono-tech text-[9px] text-steel/60 border border-border rounded px-1.5 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="pt-3 border-t border-border flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent flex-shrink-0" />
                    <span className="font-grotesk font-semibold text-xs text-primary">
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
