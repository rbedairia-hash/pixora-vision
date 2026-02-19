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
    { x: 120, y: 60, label: "Brioude" },
    { x: 200, y: 100, label: "Le Puy" },
    { x: 160, y: 150, label: "Yssingeaux" },
    { x: 90, y: 120, label: "Langeac" },
    { x: 230, y: 70, label: "Monistrol" },
    { x: 180, y: 200, label: "Monastier" },
    { x: 140, y: 100, label: "Craponne" },
  ];

  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto" fill="none">
      {/* Map shape */}
      <path
        d="M80 40 L160 20 L240 50 L270 120 L250 200 L180 240 L100 220 L60 160 L50 100 Z"
        fill="hsl(221 83% 53% / 0.06)"
        stroke="hsl(221 83% 53% / 0.3)"
        strokeWidth="1.5"
      />
      {/* Grid lines */}
      <line x1="0" y1="140" x2="320" y2="140" stroke="hsl(221 83% 53% / 0.08)" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="280" stroke="hsl(221 83% 53% / 0.08)" strokeWidth="1" />

      {/* Connection lines */}
      {points.map((p, i) =>
        points.slice(i + 1).map((p2, j) =>
          Math.abs(p.x - p2.x) + Math.abs(p.y - p2.y) < 120 ? (
            <line
              key={`line-${i}-${j}`}
              x1={p.x} y1={p.y} x2={p2.x} y2={p2.y}
              stroke="hsl(221 83% 53% / 0.15)"
              strokeWidth="1"
            />
          ) : null
        )
      )}

      {/* Points */}
      {points.map((point, i) => (
        <g key={point.label}>
          {/* Pulse ring */}
          <circle
            cx={point.x} cy={point.y} r="12"
            fill="hsl(189 94% 53% / 0.08)"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <circle
            cx={point.x} cy={point.y} r="4"
            fill="hsl(189 94% 53%)"
          />
          <circle
            cx={point.x} cy={point.y} r="2"
            fill="hsl(0 0% 100%)"
          />
          <text
            x={point.x + 10}
            y={point.y + 4}
            className="text-[10px]"
            fill="hsl(0 0% 100% / 0.5)"
            fontSize="9"
            fontFamily="Inter, sans-serif"
          >
            {point.label}
          </text>
        </g>
      ))}

      {/* Label */}
      <text x="160" y="265" textAnchor="middle" fill="hsl(0 0% 100% / 0.2)" fontSize="9" fontFamily="JetBrains Mono, monospace">
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
    <section id="problematique" className="bg-graphite py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-2 mb-6 reveal-item opacity-0">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
                Problématique PME
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-graphite-foreground mb-4 reveal-item opacity-0">
              Votre image digitale<br />
              <span className="text-primary">vous coûte des clients.</span>
            </h2>
            <p className="font-inter text-steel leading-relaxed mb-10 reveal-item opacity-0">
              Pour une PME, l'image n'est pas un luxe. C'est le premier filtre que vos prospects utilisent pour décider si vous êtes crédibles.
            </p>

            <div className="flex flex-col gap-6">
              {problems.map((problem, i) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={problem.title}
                    className="reveal-item opacity-0 flex gap-4 p-5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover-lift"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-grotesk font-semibold text-graphite-foreground mb-1">
                        {problem.title}
                      </h3>
                      <p className="font-inter text-sm text-steel leading-relaxed">
                        {problem.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Map */}
          <div className="reveal-item opacity-0 flex flex-col items-center">
            <div className="relative w-full max-w-sm mx-auto">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(221 83% 53% / 0.08), transparent 70%)",
                }}
              />
              <div className="relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <HauteLoire />
                <div className="mt-6 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
                    <span className="font-mono-tech text-[10px] text-steel">Projets actifs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono-tech text-[10px] text-steel">Zone couverte</span>
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
