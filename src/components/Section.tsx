import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  variant?: "dark" | "light";
  className?: string;
  children: ReactNode;
}

export default function Section({ id, variant = "dark", className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 bg-background text-foreground",
        variant === "light" ? "section-light" : "section-dark",
        className
      )}
    >
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}
