import { useState, useEffect, useRef } from "react";
import hauteLoire from "@/assets/haute-loire.jpg";

export default function LocalSection() {
  const [counts, setCounts] = useState({ projects: 0, dept: 0, years: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".local-reveal").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
              el.classList.add("active");
            });

            const timer = setInterval(() => {
              setCounts(prev => ({
                projects: Math.min(prev.projects + 2, 47),
                dept: 43,
                years: Math.min(prev.years + 1, 5)
              }));
            }, 60);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden section-light bg-background text-foreground" ref={sectionRef}>
      {/* Background image — darkened & cold-tinted */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${hauteLoire})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "brightness(0.7) saturate(0.6)",
        }}
      />
      {/* Cold overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(90deg, hsl(220 20% 97% / 0.96) 0%, hsl(220 20% 97% / 0.88) 50%, hsl(220 20% 97% / 0.65) 100%)",
      }} />

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 local-reveal opacity-0">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Ancrage Local & Expertise 43
            </span>
          </div>

          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-foreground mb-8 local-reveal opacity-0 leading-tight">
            Pourquoi choisir un studio en <br className="hidden md:block" />
            <span className="text-foreground italic">Haute-Loire ?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="local-reveal opacity-0">
              <h3 className="font-grotesk font-bold text-xl text-foreground mb-4">Proximité & Réactivité</h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                Être basé au Puy-en-Velay et rayonner sur toute la Haute-Loire (43) nous permet une réactivité sans faille. On se rencontre, on discute de vive voix, on comprend votre terrain.
              </p>
            </div>
            <div className="local-reveal opacity-0">
              <h3 className="font-grotesk font-bold text-xl text-foreground mb-4">Connaissance du Territoire</h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                Nous connaissons le tissu économique altiligérien. Vos enjeux ne sont pas ceux d'une startup parisienne, mais ceux d'une entreprise ancrée dans la réalité de notre région.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 local-reveal opacity-0 border-t border-border pt-10">
            {[
              { number: `${counts.projects}+`, label: "Projets locaux" },
              { number: `${counts.dept}`, label: "Haute-Loire" },
              { number: `${counts.years} ans`, label: "Expertise" },
              { label: "Graphiste 43", isTag: true },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                {stat.number ? (
                  <div className="font-grotesk font-bold text-3xl text-foreground mb-1 min-w-[3ch]">{stat.number}</div>
                ) : (
                  <div className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3">{stat.label}</div>
                )}
                {stat.number && <div className="font-inter text-xs text-muted-foreground">{stat.label}</div>}
              </div>
            ))}
          </div>

          {/* SEO cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 local-reveal opacity-0">
            {[
              { title: "Graphiste Haute-Loire", desc: "Identité visuelle & branding local." },
              { title: "Site Internet 43", desc: "Création & refonte Web au Puy." },
              { title: "Photographe Produit", desc: "Studio packshot en Auvergne." },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded border border-border bg-card hover:-translate-y-1 transition-all duration-350" style={{ boxShadow: "0 2px 12px hsl(217 91% 53% / 0.04)" }}>
                <h4 className="font-grotesk font-bold text-lg text-foreground mb-2">{card.title}</h4>
                <p className="text-xs text-muted-foreground italic">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
