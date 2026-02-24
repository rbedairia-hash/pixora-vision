import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ChevronDown, Palette, Globe, Camera, BarChart } from "lucide-react";

const services = [
  {
    id: "identite",
    icon: Palette,
    number: "01",
    title: "Identité visuelle",
    tagline: "Graphiste Haute-Loire",
    hero: "Votre marque, construite pour durer.",
    description:
      "Une identité visuelle solide, c'est votre premier commercial. Elle rassure vos prospects avant même qu'ils lisent une ligne.",
    problems: [
      "Logo créé par un amateur ou obsolète",
      "Charte graphique inexistante ou non respectée",
      "Incohérence entre vos supports print et digital",
    ],
    approach:
      "Nous partons toujours d'un audit de votre secteur, de vos concurrents et de votre positionnement. La créativité est au service de votre stratégie, pas l'inverse.",
    deliverables: [
      "Logo principal + variantes",
      "Palette couleurs & typographies",
      "Charte graphique (PDF)",
      "Fichiers sources + formats exportés",
      "Templates réseaux sociaux",
    ],
    result: "Une marque cohérente et professionnelle sur tous vos supports.",
    faq: [
      {
        q: "Combien de propositions créatives ?",
        a: "Nous proposons 2 directions créatives distinctes, puis nous affinons ensemble jusqu'à validation.",
      },
      {
        q: "Vous travaillez avec des entreprises de tous secteurs ?",
        a: "Oui : artisanat, commerce, industrie, services, hôtellerie. Chaque secteur a ses codes.",
      },
      {
        q: "Quel est le délai moyen ?",
        a: "3 à 5 semaines selon la complexité du projet et la réactivité dans les échanges.",
      },
    ],
  },
  {
    id: "web",
    icon: Globe,
    number: "02",
    title: "Site internet",
    tagline: "Création site internet 43",
    hero: "Votre site, votre meilleur commercial.",
    description:
      "Un site qui ne convertit pas, c'est une dépense. Un site bien structuré, c'est un investissement qui travaille pour vous 24h/24.",
    problems: [
      "Site non-mobile, lent, non sécurisé",
      "Invisible sur Google (Haute-Loire)",
      "Formulaires de contact qui ne fonctionnent plus",
    ],
    approach:
      "Nous commençons par définir vos objectifs business (générer des appels ? Des devis ? Des ventes ?), puis nous structurons votre site en conséquence.",
    deliverables: [
      "Site WordPress responsive & sécurisé",
      "Optimisation SEO on-page",
      "Score PageSpeed 90+",
      "Formation à la gestion du contenu",
      "1 mois de support inclus",
    ],
    result: "Un site que Google indexe et que vos prospects apprécient.",
    faq: [
      {
        q: "Vous livrez sur WordPress uniquement ?",
        a: "Principalement WordPress pour sa flexibilité et sa maintenabilité. Solutions sur-mesure selon le projet.",
      },
      {
        q: "Le référencement naturel est-il inclus ?",
        a: "L'optimisation SEO technique et on-page est incluse. Une stratégie de contenu peut être ajoutée.",
      },
      {
        q: "Et l'hébergement ?",
        a: "Nous recommandons et gérons votre hébergement. Formules à partir de 15€/mois.",
      },
    ],
  },
  {
    id: "photo",
    icon: Camera,
    number: "03",
    title: "Photographie produit",
    tagline: "Photographe packshot Haute-Loire",
    hero: "Vos produits, sublimés.",
    description:
      "Une belle photo vend mieux que n'importe quel discours. Des visuels professionnels changent radicalement la perception de votre offre.",
    problems: [
      "Photos smartphone floues ou mal éclairées",
      "Visuels inconsistants entre vos supports",
      "Produits sous-valorisés face à vos concurrents",
    ],
    approach:
      "Shooting en studio ou en situation selon vos besoins. Direction artistique incluse pour assurer la cohérence avec votre identité de marque.",
    deliverables: [
      "Packshots fond blanc HD",
      "Shooting en situation ou ambiance",
      "Retouches professionnelles",
      "Livraison formats print & web",
      "Droits d'utilisation illimités",
    ],
    result: "Des photos qui vendent.",
    faq: [
      {
        q: "Vous vous déplacez en Haute-Loire ?",
        a: "Oui, sur toute la Haute-Loire et départements limitrophes. Studio mobile disponible.",
      },
      {
        q: "Combien de produits par session ?",
        a: "De 5 à 50+ produits selon le format. Tarification par session ou par produit.",
      },
      {
        q: "Quelle est la résolution des fichiers livrés ?",
        a: "Fichiers haute définition (72dpi web + 300dpi print). Format JPEG et PNG.",
      },
    ],
  },
  {
    id: "strategie",
    icon: BarChart,
    number: "04",
    title: "Stratégie digitale",
    tagline: "Stratégie digitale PME",
    hero: "Une stratégie, pas des outils.",
    description:
      "Avoir un site et un logo ne suffit plus. Une stratégie digitale cohérente coordonne tous vos leviers pour maximiser votre visibilité.",
    problems: [
      "Présence digitale fragmentée et incohérente",
      "Réseaux sociaux abandonnés",
      "Aucun suivi des performances",
    ],
    approach:
      "Audit complet, définition des priorités, plan d'action sur 6 mois. On choisit les bons leviers pour votre secteur, pas tous les leviers.",
    deliverables: [
      "Audit digital complet",
      "Plan stratégique 6 mois",
      "Templates de contenus",
      "Tableau de bord suivi performances",
      "Accompagnement mensuel",
    ],
    result: "Une présence digitale cohérente et des indicateurs qui progressent.",
    faq: [
      {
        q: "Est-ce adapté aux petites entreprises ?",
        a: "C'est précisément pour elles que nous avons conçu cette offre. Pragmatique, réaliste, mesurable.",
      },
      {
        q: "Vous gérez nos réseaux sociaux ?",
        a: "Nous pouvons assurer la création de contenu et la planification. À définir selon vos besoins.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-inter font-medium text-sm text-foreground group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-steel flex-shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 animate-accordion-down">
          <p className="font-inter text-sm text-steel leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    // Scroll reveal handled by individual sections
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="bg-graphite pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="reveal">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-primary font-bold">
                Expertises PME
              </span>
            </div>
            <h1 className="font-grotesk font-bold text-5xl md:text-7xl text-white tracking-tighter leading-[1.1] mb-8">
              Prestations sur-mesure.<br className="hidden md:block" />
              <span className="text-primary italic">Un seul interlocuteur.</span>
            </h1>
            <p className="font-inter text-steel text-lg md:text-xl max-w-2xl leading-relaxed">
              Chaque prestation est pensée pour la réalité économique des PME de Haute-Loire. Pas de packages standardisés — nous construisons votre solution ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? "bg-surface" : "bg-background"}`}
          >
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-steel">
                      {service.number} / {service.tagline}
                    </span>
                  </div>
                  <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="font-grotesk text-xl text-primary mb-5">
                    {service.hero}
                  </p>
                  <p className="font-inter text-steel leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Problems */}
                  <div className="mb-8">
                    <h3 className="font-grotesk font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
                      Problèmes fréquents
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {service.problems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-steel">
                          <span className="text-destructive mt-0.5 font-bold">×</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div className="p-5 rounded-lg border border-primary/15 bg-primary/5">
                    <h3 className="font-grotesk font-semibold text-sm text-primary mb-2">
                      Notre approche
                    </h3>
                    <p className="font-inter text-sm text-foreground/70 leading-relaxed">
                      {service.approach}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className={isEven ? "" : "lg:order-1"}>
                  {/* Deliverables */}
                  <div className="p-6 rounded-xl border border-border bg-card mb-6" style={{ boxShadow: "var(--shadow-md)" }}>
                    <h3 className="font-grotesk font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      Livrables inclus
                    </h3>
                    <ul className="flex flex-col gap-3 mb-6">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-foreground">
                          <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="font-mono-tech text-[8px] text-primary">✓</span>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="font-inter text-xs text-primary font-bold uppercase tracking-wider">
                        → {service.result}
                      </p>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h3 className="font-grotesk font-semibold text-foreground mb-2">
                      Questions fréquentes
                    </h3>
                    {service.faq.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
      <Footer />
    </div>
  );
}
