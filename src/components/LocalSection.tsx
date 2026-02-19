import { useEffect, useRef } from "react";
import hauteLoire from "@/assets/haute-loire.jpg";

export default function LocalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".local-reveal").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
              el.classList.add("animate-fade-up");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${hauteLoire})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(90deg, hsl(220 25% 8% / 0.95) 0%, hsl(220 25% 8% / 0.85) 50%, hsl(220 25% 8% / 0.6) 100%)",
      }} />
      {/* Color overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(180deg, hsl(221 83% 53% / 0.05) 0%, transparent 100%)",
      }} />

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6 local-reveal opacity-0">
            <div className="h-px w-8 bg-cyan-accent" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-cyan-accent/80">
              Ancrage local
            </span>
          </div>

          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-graphite-foreground mb-6 local-reveal opacity-0">
            Un partenaire local.<br />
            <span className="text-primary">Une vision digitale moderne.</span>
          </h2>

          <p className="font-inter text-steel leading-relaxed mb-8 local-reveal opacity-0">
            Basé en Haute-Loire, nous connaissons le tissu économique local, ses codes et ses enjeux. Nos clients sont des artisans, commerçants et PME — des entreprises réelles, avec des projets concrets.
          </p>

          <div className="grid grid-cols-3 gap-6 local-reveal opacity-0">
            {[
              { number: "47+", label: "Projets réalisés" },
              { number: "43", label: "Département Haute-Loire" },
              { number: "5 ans", label: "D'expérience locale" },
            ].map((stat) => (
              <div key={stat.label} className="border-t border-white/10 pt-4">
                <div className="font-grotesk font-bold text-2xl text-primary mb-1">
                  {stat.number}
                </div>
                <div className="font-inter text-xs text-steel">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
