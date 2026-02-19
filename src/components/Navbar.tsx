import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/studio", label: "Studio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-solid" : "glass"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-1">
            <span className="font-grotesk font-bold text-xl tracking-tight text-graphite-foreground">
              PIX
            </span>
            <span className="font-grotesk font-bold text-xl tracking-tight text-cyan-accent">
              ORA
            </span>
          </div>
          <div className="h-5 w-px bg-cyan-accent/40 mx-1" />
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-steel/70 hidden sm:block">
            Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`font-inter text-sm font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.href
                    ? "text-cyan-accent"
                    : "text-graphite-foreground/70 hover:text-graphite-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-cyan-accent transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-animated font-grotesk text-sm font-semibold px-5 py-2.5 rounded-md bg-primary text-primary-foreground shadow-blue hover:bg-primary/90 transition-all duration-200"
          >
            Obtenir un devis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-graphite-foreground/80 hover:text-graphite-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-graphite border-t border-white/5 px-6 py-6 flex flex-col gap-5 animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-grotesk text-base font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-cyan-accent"
                  : "text-graphite-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 font-grotesk text-sm font-semibold px-5 py-3 rounded-md bg-primary text-primary-foreground text-center"
          >
            Obtenir un devis
          </Link>
        </div>
      )}
    </header>
  );
}
