import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { CheckCircle2, Target, Lightbulb } from "lucide-react";

const engagements = [
  "Interlocuteur unique du brief à la livraison",
  "Délais annoncés, délais respectés",
  "Fichiers sources livrés systématiquement",
  "Formation incluse sur vos outils",
  "Pas de jargon, pas de langue de bois",
  "Disponibilité réelle pendant le projet",
];

const values = [
  {
    icon: Target,
    title: "Orienté résultat",
    desc: "L'esthétique est au service de votre business. Chaque décision créative a une raison stratégique.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatique",
    desc: "Les outils les plus simples qui fonctionnent. Pas de sur-ingénierie. Votre équipe doit pouvoir maintenir ce qu'on construit.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent",
    desc: "Devis détaillé, planning partagé, points réguliers. Vous savez exactement où en est votre projet.",
  },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-graphite pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
              Le Studio
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-graphite-foreground max-w-2xl mb-4">
            PIXORA, c'est un studio.<br className="hidden md:block" />
            <span className="text-primary">Pas une agence.</span>
          </h1>
          <p className="font-inter text-steel max-w-xl leading-relaxed">
            Un interlocuteur unique, une expertise complète, une relation de confiance construite sur la durée.
          </p>
        </div>
      </section>

      {/* Portrait + Vision */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-cyan/10 border border-border relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-grotesk font-bold text-2xl text-primary">P</span>
                    </div>
                    <span className="font-mono-tech text-xs text-steel uppercase tracking-wider">
                      Portrait Studio
                    </span>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-graphite/80 backdrop-blur-sm rounded-lg border border-white/10">
                  <p className="font-grotesk font-semibold text-graphite-foreground text-sm">
                    Directeur artistique & fondateur
                  </p>
                  <p className="font-inter text-xs text-steel mt-0.5">
                    Haute-Loire · 5+ ans d'expérience
                  </p>
                </div>
              </div>
              {/* Stats */}
              <div className="absolute -right-4 top-8 bg-card border border-border rounded-lg p-4 shadow-md">
                <div className="font-grotesk font-bold text-2xl text-primary mb-0.5">47+</div>
                <div className="font-inter text-xs text-steel">Projets livrés</div>
              </div>
            </div>

            {/* Vision */}
            <div>
              <h2 className="font-grotesk font-bold text-3xl text-foreground mb-4">
                Vision
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-inter text-steel leading-relaxed">
                  En Haute-Loire, des dizaines de PME proposent des produits et services de qualité. Beaucoup souffrent d'une image digitale qui ne reflète pas leur savoir-faire. C'est ce décalage que je corrige.
                </p>
                <p className="font-inter text-steel leading-relaxed">
                  PIXORA n'est pas une grande agence avec des comptes à gérer et des délais interminables. C'est un studio structuré, avec un interlocuteur unique et des méthodes éprouvées.
                </p>
                <p className="font-inter text-steel leading-relaxed">
                  Mon objectif : que dans 6 mois, votre image travaille pour vous — et pas l'inverse.
                </p>
              </div>

              {/* Values */}
              <div className="grid gap-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} className="flex gap-4 p-4 rounded-lg border border-border bg-card hover-lift">
                      <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-grotesk font-semibold text-sm text-foreground mb-0.5">
                          {v.title}
                        </h3>
                        <p className="font-inter text-xs text-steel leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 bg-graphite">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
                Engagements
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl text-graphite-foreground">
              Ce que vous pouvez<br className="hidden md:block" />
              <span className="text-primary">exiger de nous.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engagements.map((eng, i) => (
              <div key={eng} className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono-tech text-[10px] text-primary/50 mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-inter text-sm text-graphite-foreground/80 leading-relaxed">
                  {eng}
                </p>
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
