import { useEffect, useRef } from "react";
import { AlertTriangle, TrendingDown, MousePointer } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Image vieillissante",
    desc: "Un logo créé il y a 15 ans, des visuels incohérents. Vos prospects doutent de votre sérieux avant même de vous contacter.",
  },
  {
    icon: TrendingDown,
    title: "Site obsolète",
    desc: "Non mobile, lent, invisible sur Google. Vous perdez des clients chaque jour sans le savoir.",
  },
  {
    icon: MousePointer,
    title: "Difficulté à convertir",
    desc: "Des visiteurs arrivent sur votre site, mais repartent sans agir. Il manque la structure et la confiance visuelle.",
  },
];

// SVG map of Haute-Loire (simplified)
function HauteLoire() {
  const points = [
    { x: 70, y: 80, label: "Brioude", align: "start" as const },
    { x: 140, y: 45, label: "Craponne", align: "end" as const },
    { x: 240, y: 55, label: "Monistrol", align: "start" as const },
    { x: 220, y: 110, label: "Yssingeaux", align: "start" as const },
    { x: 160, y: 170, label: "Le Puy", align: "start" as const },
    { x: 80, y: 150, label: "Langeac", align: "start" as const },
    { x: 190, y: 220, label: "Le Monastier", align: "start" as const },
  ];

  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto group cursor-default transition-transform duration-700 hover:scale-[1.02]" fill="none">
      <path
        d="M 80 40 L 150 25 L 260 35 L 290 90 L 250 160 L 210 240 L 160 270 L 100 240 L 50 180 L 30 110 Z"
        fill="hsl(217 91% 53% / 0.06)"
        stroke="hsl(217 91% 53% / 0.25)"
        strokeWidth="1.5"
        className="transition-all duration-700 group-hover:fill-[hsl(217_91%_53%_/_0.12)]"
      />
      <line x1="0" y1="140" x2="320" y2="140" stroke="hsl(217 91% 53% / 0.08)" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="280" stroke="hsl(217 91% 53% / 0.08)" strokeWidth="1" />

      {points.map((point) => (
        <g key={point.label} className="reveal-item opacity-0">
          <circle cx={point.x} cy={point.y} r="12" fill="hsl(217 91% 53% / 0.08)" className="animate-pulse-glow" />
          <circle cx={point.x} cy={point.y} r="4" fill="hsl(217 91% 53%)" />
          <circle cx={point.x} cy={point.y} r="2" fill="white" />
          <text
            x={point.align === "end" ? point.x - 10 : point.x + 10}
            y={point.y + 3}
            textAnchor={point.align}
            fill="rgba(255,255,255,0.5)"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            className="font-medium"
          >
            {point.label}
          </text>
        </g>
      ))}

      <text x="160" y="15" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14" fontWeight="bold" fontFamily="JetBrains Mono, monospace">
        HAUTE-LOIRE · 43
      </text>
    </svg>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.25}s`;
              (el as HTMLElement).style.animationDuration = `1.2s`;
              el.classList.add("animate-fade-up");
              el.classList.remove("opacity-0");
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
    <section id="problematique" className="py-24 bg-background text-foreground section-light reveal">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-2 mb-6 reveal-item opacity-0">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Problématique PME
              </span>
            </div>
            <h2 className="reveal-item opacity-0 mb-6 text-foreground leading-tight">
              Votre image digitale<br className="hidden md:block" />
              <span className="text-foreground italic">vous coûte des clients.</span>
            </h2>
            <p className="reveal-item opacity-0 mb-10 text-muted-foreground max-w-lg text-lg">
              Pour une PME, l'image n'est pas un luxe. C'est le premier filtre que vos prospects utilisent pour décider si vous êtes crédibles ou non.
            </p>

            <div className="flex flex-col gap-6">
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={problem.title}
                    className="reveal-item opacity-0 flex gap-4 p-6 rounded bg-card border border-border hover:-translate-y-1 transition-all duration-350"
                    style={{ boxShadow: "0 2px 12px hsl(217 91% 53% / 0.04)" }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Map */}
          <div className="reveal-item opacity-0 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-lg" style={{
                background: "radial-gradient(ellipse at center, hsl(217 91% 53% / 0.06), transparent 70%)",
              }} />
              <div className="relative p-12 rounded-lg border border-border bg-card" style={{
                boxShadow: "0 4px 24px hsl(217 91% 53% / 0.06)",
              }}>
                <HauteLoire />
                <div className="mt-10 flex items-center justify-center gap-10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
                    <span className="font-mono-tech text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Projets actifs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-mono-tech text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Zone couverte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
