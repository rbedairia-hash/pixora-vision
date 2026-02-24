import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Audit",
    desc: "Analyse de votre image actuelle, de votre marché et de vos concurrents locaux. On part des faits.",
  },
  {
    number: "02",
    title: "Stratégie",
    desc: "Définition du positionnement, de la direction créative et du plan d'action priorisé.",
  },
  {
    number: "03",
    title: "Production",
    desc: "Création des livrables : visuels, site, photos. Itérations courtes avec votre validation à chaque étape.",
  },
  {
    number: "04",
    title: "Déploiement",
    desc: "Mise en ligne, formation, transfert de compétences. Vous gardez la main sur vos outils.",
  },
];

export default function MethodSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".step-item").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${0.2 + i * 0.2}s`;
              el.classList.add("animate-fade-up");
            });
            if (lineRef.current) {
              lineRef.current.style.transition = "width 1.2s ease 0.3s";
              lineRef.current.style.width = "100%";
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background text-foreground section-light py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Méthode
            </span>
          </div>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-foreground">
            Un process structuré.<br className="hidden md:block" />
            <span className="text-foreground italic">Aucune surprise.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border">
            <div ref={lineRef} className="h-full bg-primary" style={{ width: "0%" }} />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="step-item opacity-0 relative flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full border-2 border-border bg-background flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: i === 0 ? "hsl(217 91% 53% / 0.5)" : undefined,
                      boxShadow: i === 0 ? "0 4px 16px hsl(217 91% 53% / 0.1)" : "none",
                    }}
                  >
                    <span className="font-mono-tech font-bold text-sm text-foreground">{step.number}</span>
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20" />
                    )}
                  </div>
                </div>

                <h3 className="font-grotesk font-bold text-lg text-foreground mb-3">{step.title}</h3>
                <p className="font-inter text-sm text-steel leading-relaxed">{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="md:hidden mt-6 ml-8 h-6 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
