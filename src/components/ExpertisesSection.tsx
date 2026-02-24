import { Link } from "react-router-dom";
import { Palette, Globe, Camera, ArrowRight } from "lucide-react";

const expertises = [
  { icon: Palette, number: "01", title: "Identité visuelle", tagline: "Créer une marque mémorable", objective: "Construire une identité cohérente qui inspire confiance et différencie.", deliverables: ["Logo & charte graphique", "Système de marque complet", "Templates & déclinaisons"], result: "Une image professionnelle et cohérente sur tous vos supports.", href: "/services#identite" },
  { icon: Globe, number: "02", title: "Site internet", tagline: "Convertir vos visiteurs en clients", objective: "Un site performant, optimisé SEO, qui travaille pour vous 24h/24.", deliverables: ["Site vitrine ou e-commerce", "Optimisation mobile & SEO", "Hébergement & maintenance"], result: "Un outil de vente qui génère des contacts qualifiés.", href: "/services#web" },
  { icon: Camera, number: "03", title: "Photographie produit", tagline: "Valoriser vos produits & services", objective: "Des visuels professionnels qui font vendre et inspirent confiance.", deliverables: ["Packshots fond blanc", "Shooting en situation", "Retouches & livraison HD"], result: "Des images qui remplacent le discours commercial.", href: "/services#photo" },
];

export default function ExpertisesSection() {
  return (
    <section className="bg-background text-foreground section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">Expertises stratégiques</span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Accélérer votre business.<br className="hidden md:block" />
            <span className="text-primary italic">Une expertise à la fois.</span>
          </h2>
          <p className="font-inter text-steel text-lg leading-relaxed">Pas de fioritures, juste des prestations pensées pour un retour sur investissement concret pour votre entreprise en Haute-Loire.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {expertises.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="group p-8 rounded bg-card border border-border flex flex-col hover:border-primary/40 transition-all duration-350 card-accent">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-350">
                    <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-mono-tech text-xs text-steel/20 font-bold tracking-widest">{e.number}</span>
                </div>
                <h3 className="font-grotesk font-bold text-2xl text-foreground mb-2">{e.title}</h3>
                <p className="font-inter text-[10px] font-bold text-primary mb-6 uppercase tracking-[0.2em]">{e.tagline}</p>
                <p className="font-inter text-sm text-steel leading-relaxed mb-8">{e.objective}</p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {e.deliverables.map((d) => (<li key={d} className="flex items-center gap-3 text-sm text-foreground/70"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{d}</li>))}
                </ul>
                <div className="p-4 rounded-xl bg-muted border border-primary/10 mb-8">
                  <p className="font-inter text-xs text-primary font-semibold">Objectif : {e.result}</p>
                </div>
                <Link to={e.href} className="flex items-center gap-2 text-sm font-grotesk font-bold text-foreground hover:text-primary transition-colors group/link">
                  Découvrir la prestation <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
