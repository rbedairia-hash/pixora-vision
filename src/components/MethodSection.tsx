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
            // Animate steps
            entry.target.querySelectorAll(".step-item").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${0.2 + i * 0.2}s`;
              el.classList.add("animate-fade-up");
            });
            // Animate line
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
    <section className="bg-graphite py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
              Méthode
            </span>
          </div>
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-graphite-foreground">
            Un process structuré.<br />
            <span className="text-primary">Aucune surprise.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/[0.06]">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-primary to-cyan-accent"
              style={{ width: "0%" }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="step-item opacity-0 relative flex flex-col"
              >
                {/* Number circle */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full border-2 border-primary/40 bg-graphite flex items-center justify-center flex-shrink-0"
                    style={{
                      boxShadow: i === 0 ? "var(--shadow-blue)" : "none",
                      borderColor: i === 0 ? "hsl(var(--primary))" : undefined,
                    }}
                  >
                    <span className="font-mono-tech font-medium text-sm text-primary">
                      {step.number}
                    </span>
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20" />
                    )}
                  </div>
                </div>

                <h3 className="font-grotesk font-bold text-lg text-graphite-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-steel leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector on mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-6 ml-8 h-6 w-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
