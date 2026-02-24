export function initScrollReveal() {
  const setup = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll(".reveal, .reveal-scale, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  };

  // Run immediately and also after a small delay to catch late-rendered elements
  const cleanup1 = setup();
  const timeoutId = setTimeout(() => {
    setup();
  }, 100);

  return () => {
    cleanup1();
    clearTimeout(timeoutId);
  };
}
