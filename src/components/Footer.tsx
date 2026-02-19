import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Identité visuelle", href: "/services#identite" },
    { label: "Création de site web", href: "/services#web" },
    { label: "Photographie produit", href: "/services#photo" },
    { label: "Stratégie digitale", href: "/services#strategie" },
  ],
  studio: [
    { label: "À propos", href: "/studio" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-grotesk font-bold text-2xl text-graphite-foreground">PIX</span>
              <span className="font-grotesk font-bold text-2xl text-cyan-accent">ORA</span>
            </div>
            <p className="font-inter text-sm text-steel leading-relaxed max-w-xs mb-6">
              Studio image & digital pour PME en Haute-Loire. Identité visuelle, site internet et photographie produit — sur mesure.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-steel text-sm">
                <MapPin size={14} className="text-cyan-accent flex-shrink-0" />
                <span>Haute-Loire (43), Auvergne-Rhône-Alpes</span>
              </div>
              <div className="flex items-center gap-2 text-steel text-sm">
                <Mail size={14} className="text-cyan-accent flex-shrink-0" />
                <a href="mailto:contact@pixora.fr" className="hover:text-graphite-foreground transition-colors">
                  contact@pixora.fr
                </a>
              </div>
              <div className="flex items-center gap-2 text-steel text-sm">
                <Phone size={14} className="text-cyan-accent flex-shrink-0" />
                <a href="tel:+33600000000" className="hover:text-graphite-foreground transition-colors">
                  +33 6 00 00 00 00
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-grotesk font-semibold text-graphite-foreground text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-inter text-sm text-steel hover:text-cyan-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 text-cyan-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h3 className="font-grotesk font-semibold text-graphite-foreground text-sm uppercase tracking-widest mb-5">
              Studio
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.studio.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-inter text-sm text-steel hover:text-cyan-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 text-cyan-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-steel/60">
            © 2026 PIXORA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="font-inter text-xs text-steel/60 hover:text-steel transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="font-inter text-xs text-steel/60 hover:text-steel transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
