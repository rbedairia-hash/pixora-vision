import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

interface FormData {
  company: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  privacy: boolean;
}

const projectTypes = [
  { value: "", label: "Sélectionnez un type" },
  { value: "identite", label: "Identité visuelle & Print" },
  { value: "web", label: "Création de site internet" },
  { value: "photo", label: "Photographie packshot" },
  { value: "global", label: "Accompagnement global" },
];

const budgets = [
  { value: "", label: "Sélectionnez un budget" },
  { value: "1k-3k", label: "1 000€ - 3 000€" },
  { value: "3k-5k", label: "3 000€ - 5 000€" },
  { value: "5k+", label: "Plus de 5 000€" },
];

const timelines = [
  { value: "", label: "Sélectionnez un délai" },
  { value: "asap", label: "Dès que possible" },
  { value: "1-3months", label: "D'ici 1 à 3 mois" },
  { value: "3months+", label: "Dans plus de 3 mois" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    company: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center animate-section">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-8 shadow-blue">
                <Check size={36} className="text-primary" />
              </div>
              <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-foreground mb-6">
                Message envoyé !
              </h1>
              <p className="font-inter text-steel text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                Merci.
                Nous avons bien reçu la demande pour votre entreprise <span className="font-semibold text-foreground">{form.company}</span>.
                Notre équipe reviendra vers vous sous 48h ouvrées.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-animated font-grotesk font-semibold text-sm px-8 py-3.5 rounded-md bg-graphite text-graphite-foreground hover:bg-graphite/90 transition-all"
              >
                Retour au formulaire
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl animate-section">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
                Parlons de votre futur
              </span>
            </div>
            <h1 className="font-grotesk font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Contact
            </h1>
            <p className="font-inter text-xl text-steel max-w-2xl leading-relaxed">
              Discutons de votre projet. Que vous ayez une idée précise ou besoin d'accompagnement, nous sommes là pour vous aider à concrétiser vos ambitions.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 space-y-10 order-2 lg:order-1 animate-section" style={{ animationDelay: "100ms" }}>
              <div>
                <h3 className="font-grotesk font-bold text-xl mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  <a href="mailto:contact@pixora.fr" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded bg-card border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-steel uppercase tracking-wider mb-0.5">E-mail</p>
                      <p className="font-inter font-medium text-foreground">contact@pixora.fr</p>
                    </div>
                  </a>

                  <a href="tel:+33600000000" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded bg-card border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-steel uppercase tracking-wider mb-0.5">Téléphone</p>
                      <p className="font-inter font-medium text-foreground">+33 6 00 00 00 00</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded bg-card border border-border shadow-sm flex items-center justify-center text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-steel uppercase tracking-wider mb-0.5">Localisation</p>
                      <p className="font-inter font-medium text-foreground">Le Puy-en-Velay, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded bg-card border border-border text-foreground overflow-hidden relative group">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-grotesk font-bold text-xl mb-4 relative z-10">Nos engagements</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Réponse sous 48h ouvrées
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Devis gratuit & sans engagement
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Interlocuteur unique et dédié
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 order-1 lg:order-2 animate-section" style={{ animationDelay: "200ms" }}>
              <div className="bg-card rounded border border-border p-8 md:p-10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="font-inter text-sm font-semibold text-foreground flex gap-1">
                        Nom de l'entreprise <span className="text-primary">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Votre société"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-border bg-background hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-inter text-sm font-semibold text-foreground flex gap-1">
                        Email professionnel <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="vous@entreprise.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-border bg-background hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="font-inter text-sm font-semibold text-foreground flex gap-1">
                        Type de projet <span className="text-primary">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-border bg-background hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                      >
                        {projectTypes.map((s) => (
                          <option key={s.value} value={s.value} disabled={s.value === ""}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="font-inter text-sm font-semibold text-foreground flex gap-1">
                        Budget estimatif <span className="text-primary">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-border bg-background hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                      >
                        {budgets.map((s) => (
                          <option key={s.value} value={s.value} disabled={s.value === ""}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="font-inter text-sm font-semibold text-foreground flex gap-1">
                      Délai souhaité <span className="text-primary">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-background hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                    >
                      {timelines.map((s) => (
                        <option key={s.value} value={s.value} disabled={s.value === ""}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-inter text-sm font-semibold text-foreground flex gap-1">
                      Description du projet <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={20}
                      rows={6}
                      placeholder="..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border bg-background hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                    />
                    <p className="text-[11px] text-steel">Min. 20 caractères</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        checked={form.privacy}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                      />
                      <label htmlFor="privacy" className="font-inter text-xs text-steel leading-relaxed cursor-pointer">
                        J'ai lu et j'accepte la <a href="/politique-de-confidentialite" className="text-primary hover:underline font-medium">politique de confidentialité</a> de PIXORA. Mes données sont traitées uniquement pour répondre à ma demande.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto btn-animated group flex items-center justify-center gap-2 font-grotesk font-bold text-sm px-10 py-4 rounded bg-primary text-primary-foreground hover:bg-secondary transition-all disabled:opacity-70 shadow-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Traitement...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
