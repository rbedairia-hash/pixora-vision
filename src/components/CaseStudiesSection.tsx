import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const cases = [
  { title: "Menuiserie Chalard", category: "Identité + Site web", problem: "Zéro visibilité en ligne, dépendance totale au bouche-à-oreille.", impact: "+340% de contacts entrants en 6 mois", color: "from-primary/20 to-accent/10", tag: "Artisanat" },
  { title: "Garage Martin", category: "Refonte web + Photo", problem: "Site de 2012, non-mobile, taux de rebond > 85%.", impact: "Taux de rebond : 85% → 38%", color: "from-accent/15 to-primary/10", tag: "Automobile" },
  { title: "Hôtel du Velay", category: "Identité complète", problem: "Image vieillissante ne reflétant plus le niveau de service.", impact: "Taux de remplissage +22% hors saison", color: "from-primary/15 to-primary/5", tag: "Hôtellerie" },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-background text-foreground section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">Histoires de succès locales</span>
            </div>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-foreground leading-tight">
              Études de cas. <br className="hidden md:block" /><span className="text-primary italic">Impact mesurable.</span>
            </h2>
          </div>
          <Link to="/realisations" className="font-grotesk font-bold text-sm text-foreground flex items-center gap-3 hover:text-primary transition-all group flex-shrink-0 border-b border-border pb-2">
            Découvrez tous nos projets <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.title} className="group relative rounded border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-350 hover:-translate-y-1" style={{ boxShadow: "0 2px 16px hsl(217 91% 53% / 0.04)" }}>
              <div className={`h-56 bg-gradient-to-br ${c.color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700`}>
                <div className="absolute inset-x-4 top-4 h-full bg-foreground/5 rounded-t-xl border border-foreground/10 transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute inset-x-8 top-8 h-full bg-foreground/10 rounded-t-xl border border-foreground/10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 delay-75" />
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center">
                    <div className="font-grotesk font-bold text-2xl text-foreground mb-2 uppercase tracking-tighter">{c.title.split(' ')[0]}</div>
                    <div className="h-0.5 w-12 bg-primary mx-auto" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-foreground border border-border rounded px-4 py-1.5 bg-background/80 backdrop-blur-md">{c.tag}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="font-grotesk font-bold text-2xl text-foreground mb-1">{c.title}</h3>
                  <p className="font-mono-tech text-[10px] text-primary uppercase tracking-[0.2em] font-bold">{c.category}</p>
                </div>
                <div className="space-y-4 mb-8">
                  <p className="font-inter text-sm text-steel leading-relaxed"><strong className="text-foreground/50 font-medium mr-2">Défi :</strong> {c.problem}</p>
                  <p className="font-inter text-sm text-steel leading-relaxed"><strong className="text-foreground/50 font-medium mr-2">Impact :</strong> <span className="text-primary font-bold">{c.impact}</span></p>
                </div>
                <Link to="/realisations" className="inline-flex items-center gap-2 font-grotesk font-bold text-xs text-foreground uppercase tracking-widest group/btn hover:text-primary transition-colors">
                  Étude complète <div className="w-8 h-px bg-border group-hover/btn:w-12 group-hover/btn:bg-primary transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
