import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "site-internet-pme-haute-loire",
    category: "Site internet",
    title: "Pourquoi votre site internet vous fait perdre des clients en 2026",
    excerpt: "Un site lent, non-mobile ou sans appel à l'action clair : voici les 5 erreurs que font encore la majorité des PME en Haute-Loire — et comment les corriger.",
    readTime: 7,
    date: "15 janvier 2026",
    tag: "Web",
  },
  {
    slug: "identite-visuelle-artisan",
    category: "Identité",
    title: "Identité visuelle : investissement ou dépense pour un artisan ?",
    excerpt: "Un logo professionnel peut sembler accessoire. En réalité, il détermine si votre prospect vous rappelle ou va voir la concurrence. Données à l'appui.",
    readTime: 6,
    date: "8 janvier 2026",
    tag: "Identité",
  },
  {
    slug: "seo-local-haute-loire",
    category: "SEO",
    title: "SEO local en Haute-Loire : comment apparaître en 1ère position Google",
    excerpt: "Les bases du référencement local expliquées simplement. Google Business, mots-clés géolocalisés, avis clients : votre guide pratique.",
    readTime: 8,
    date: "2 janvier 2026",
    tag: "SEO",
  },
  {
    slug: "photographie-produit-vente",
    category: "Photographie",
    title: "Photographie produit : pourquoi vos photos smartphone freinent vos ventes",
    excerpt: "Une étude montre que 75% des acheteurs en ligne décident sur la qualité des photos. Voici ce que vous perdez avec des visuels amateurs.",
    readTime: 5,
    date: "20 décembre 2025",
    tag: "Photo",
  },
  {
    slug: "strategie-digitale-pme",
    category: "Stratégie",
    title: "Stratégie digitale pour PME : par où commencer quand on est débordé",
    excerpt: "Pas besoin d'être partout. Voici comment prioriser vos actions digitales avec un budget limité pour un impact maximum.",
    readTime: 7,
    date: "12 décembre 2025",
    tag: "Stratégie",
  },
  {
    slug: "wordpress-ou-shopify",
    category: "Web",
    title: "WordPress ou Shopify : quel CMS choisir pour votre PME en 2026 ?",
    excerpt: "Comparatif honnête des deux plateformes selon votre secteur, vos ressources et vos objectifs. Sans langue de bois.",
    readTime: 6,
    date: "5 décembre 2025",
    tag: "Web",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-graphite pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-cyan-accent" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
              Blog
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-graphite-foreground max-w-2xl mb-4">
            Ressources & conseils<br />
            <span className="text-cyan-accent">pour les PME.</span>
          </h1>
          <p className="font-inter text-steel max-w-xl leading-relaxed">
            Des articles pratiques sur le digital, le graphisme et la stratégie — sans jargon. Écrits pour les entrepreneurs de Haute-Loire.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-6 p-6 rounded-xl border border-border bg-card hover-lift" style={{ boxShadow: "var(--shadow-md)" }}>
              <div className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-primary/15 to-cyan/10 rounded-lg flex items-center justify-center">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-primary/50">Article vedette</span>
              </div>
              <div className="flex flex-col justify-center py-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary border border-primary/20 rounded px-2 py-1 bg-primary/5">
                    {articles[0].tag}
                  </span>
                  <span className="font-inter text-xs text-steel">{articles[0].date}</span>
                </div>
                <h2 className="font-grotesk font-bold text-2xl text-foreground mb-3">
                  {articles[0].title}
                </h2>
                <p className="font-inter text-sm text-steel leading-relaxed mb-5">
                  {articles[0].excerpt}
                </p>
                {/* Callout */}
                <div className="p-3 rounded-md border-l-2 border-cyan-accent bg-cyan/5 mb-5">
                  <p className="font-inter text-xs text-foreground/70">
                    <span className="font-semibold text-cyan-accent">💡 Conseil pratique :</span>{" "}
                    Testez votre site sur PageSpeed Insights aujourd'hui. Si votre score est sous 70, chaque seconde supplémentaire vous coûte des clients.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-steel">
                    <Clock size={12} />
                    <span className="font-inter text-xs">{articles[0].readTime} min de lecture</span>
                  </div>
                  <button className="font-grotesk font-medium text-sm text-primary hover:text-cyan-accent transition-colors flex items-center gap-1.5 group">
                    Lire l'article
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <article
                key={article.slug}
                className="rounded-xl border border-border bg-card hover-lift cursor-pointer overflow-hidden"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="h-36 bg-gradient-to-br from-primary/8 to-surface flex items-center justify-center">
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-primary/30">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-primary border border-primary/20 rounded px-1.5 py-0.5 bg-primary/5">
                      {article.tag}
                    </span>
                    <span className="font-inter text-xs text-steel">{article.date}</span>
                  </div>
                  <h3 className="font-grotesk font-bold text-base text-foreground mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-inter text-xs text-steel leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-steel">
                      <Clock size={11} />
                      <span className="font-inter text-xs">{article.readTime} min</span>
                    </div>
                    <button className="font-grotesk text-xs font-medium text-primary hover:text-cyan-accent transition-colors flex items-center gap-1 group">
                      Lire
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
