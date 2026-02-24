export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal, .reveal-scale, .reveal-stagger").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}
