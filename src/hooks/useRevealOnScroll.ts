import { useEffect, useRef } from "react";

export function useRevealOnScroll(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    // Delay observer setup to ensure first paint
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animated.current) {
              animated.current = true;
              requestAnimationFrame(() => {
                entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
                  const htmlEl = el as HTMLElement;
                  htmlEl.style.transitionDelay = `${i * 0.12}s`;
                  htmlEl.classList.add("animate-visible");
                });
              });
            }
          });
        },
        { threshold }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [threshold]);

  return ref;
}
