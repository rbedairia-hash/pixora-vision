import { useEffect, useRef } from "react";
import { AlertTriangle, TrendingDown, MousePointer } from "lucide-react";
import Section from "./Section";

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
function HauteLoire({ variant }: { variant: "dark" | "light" }) {
  const points = [
    { x: 70, y: 80, label: "Brioude", align: "start" as const },
    { x: 140, y: 45, label: "Craponne", align: "end" as const },
    { x: 240, y: 55, label: "Monistrol", align: "start" as const },
    { x: 220, y: 110, label: "Yssingeaux", align: "start" as const },
    { x: 160, y: 170, label: "Le Puy", align: "start" as const },
    { x: 80, y: 150, label: "Langeac", align: "start" as const },
    { x: 190, y: 220, label: "Le Monastier", align: "start" as const },
  ];

  const primaryColor = "72 89% 57%";
  const accentColor = "72 89% 57%";

  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto group cursor-default transition-transform duration-700 hover:scale-[1.02]" fill="none">
      {/* Map shape */}
      <path
        d="M 80 40 L 150 25 L 260 35 L 290 90 L 250 160 L 210 240 L 160 270 L 100 240 L 50 180 L 30 110 Z"
        fill={`hsl(${primaryColor} / 0.05)`}
        stroke={`hsl(${primaryColor} / 0.25)`}
        strokeWidth="1.5"
        className="transition-all duration-700 group-hover:fill-[hsl(72_89%_57%_/_0.15)] group-hover:stroke-[hsl(72_89%_57%_/_0.6)]"
      />
      {/* Grid lines */}
      <line x1="0" y1="140" x2="320" y2="140" stroke={`hsl(${primaryColor} / 0.08)`} strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="280" stroke={`hsl(${primaryColor} / 0.08)`} strokeWidth="1" />


      {/* Points */}
      {points.map((point) => (
        <g key={point.label} className="reveal-item opacity-0">
          <circle
            cx={point.x} cy={point.y} r="12"
            fill={`hsl(${accentColor} / 0.08)`}
            className="animate-pulse-glow"
          />
          <circle
            cx={point.x} cy={point.y} r="4"
            fill={`hsl(${accentColor})`}
          />
          <circle
            cx={point.x} cy={point.y} r="2"
            fill="white"
          />
          {/* Outline / glow effect for text readability */}
          <text
            x={point.align === "end" ? point.x - 10 : point.x + 10}
            y={point.y + 3}
            textAnchor={point.align}
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="white"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            className="font-medium opacity-50"
          >
            {point.label}
          </text>
          {/* Actual text */}
          <text
            x={point.align === "end" ? point.x - 10 : point.x + 10}
            y={point.y + 3}
            textAnchor={point.align}
            className="font-medium transition-colors duration-500 group-hover:fill-primary"
            fill={variant === "dark" ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.6)"}
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            {point.label}
          </text>
        </g>
      ))}

      {/* Label */}
      <text x="160" y="15" textAnchor="middle" fill={variant === "dark" ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.8)"} fontSize="14" fontWeight="bold" fontFamily="JetBrains Mono, monospace">
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
    <Section id="problematique" variant="light" className="reveal">
      <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <div className="flex items-center gap-2 mb-6 reveal-item opacity-0">
            <div className="h-px w-8 bg-foreground" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.3em] font-bold">
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
            {problems.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.title}
                  className="reveal-item opacity-0 flex gap-4 p-6 rounded bg-background border border-border shadow-sm hover:-translate-y-1 transition-transform"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded bg-foreground/10 border border-foreground/20 flex items-center justify-center">
                    <Icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
          <div className="relative w-full max-w-md mx-auto">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: "radial-gradient(ellipse at center, hsl(72 89% 57% / 0.05), transparent 70%)",
              }}
            />
            <div className="relative p-12 rounded-lg border border-border bg-background shadow-sm">
              <HauteLoire variant="light" />
              <div className="mt-10 flex items-center justify-center gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-foreground/40 animate-pulse" />
                  <span className="font-mono-tech text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Projets actifs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <span className="font-mono-tech text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Zone couverte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
