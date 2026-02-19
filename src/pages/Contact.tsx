import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, Check, MapPin, Mail, Phone } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1 - Entreprise
  company: string;
  sector: string;
  employees: string;
  // Step 2 - Projet
  service: string;
  urgency: string;
  // Step 3 - Budget / Délai
  budget: string;
  deadline: string;
  // Step 4 - Description
  description: string;
  name: string;
  email: string;
  phone: string;
  rgpd: boolean;
}

const steps = [
  { number: 1, label: "Entreprise" },
  { number: 2, label: "Projet" },
  { number: 3, label: "Budget" },
  { number: 4, label: "Description" },
];

const sectors = ["Artisanat", "Commerce", "Industrie", "Services", "Hôtellerie/Restauration", "Santé", "Agriculture", "Autre"];
const services = ["Identité visuelle", "Création de site web", "Refonte de site web", "Photographie produit", "Stratégie digitale", "Plusieurs services"];
const budgets = ["< 1 000 €", "1 000 – 3 000 €", "3 000 – 6 000 €", "6 000 – 10 000 €", "> 10 000 €", "À définir ensemble"];
const urgencies = ["Dès que possible", "Dans le mois", "Dans 2-3 mois", "Pas de contrainte"];
const deadlines = ["Dès que possible", "1 mois", "2-3 mois", "6 mois", "Flexible"];

function SelectOption({ value, selected, onClick, label }: { value: string; selected: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left px-4 py-3 rounded-lg border text-sm font-inter transition-all duration-200 ${
        selected
          ? "border-primary bg-primary/5 text-primary font-medium"
          : "border-border bg-card text-steel hover:border-primary/40 hover:text-foreground"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${selected ? "border-primary bg-primary" : "border-border"}`}>
          {selected && <Check size={10} className="text-white" />}
        </div>
        {label}
      </div>
    </button>
  );
}

export default function ContactPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    company: "", sector: "", employees: "",
    service: "", urgency: "",
    budget: "", deadline: "",
    description: "", name: "", email: "", phone: "", rgpd: false,
  });

  const update = (key: keyof FormData, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md px-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Check size={28} className="text-primary" />
            </div>
            <h2 className="font-grotesk font-bold text-3xl text-foreground mb-3">
              Message envoyé !
            </h2>
            <p className="font-inter text-steel leading-relaxed mb-8">
              Merci <strong className="text-foreground">{form.name}</strong>. Nous reviendrons vers vous sous 48h ouvrées avec une proposition adaptée à votre projet.
            </p>
            <div className="p-4 rounded-lg border border-border bg-surface text-left">
              <p className="font-inter text-xs text-steel mb-1">
                <span className="font-medium text-foreground">Projet :</span> {form.service}
              </p>
              <p className="font-inter text-xs text-steel mb-1">
                <span className="font-medium text-foreground">Budget indicatif :</span> {form.budget}
              </p>
              <p className="font-inter text-xs text-steel">
                <span className="font-medium text-foreground">Contact :</span> {form.email}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-graphite pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-steel">
              Contact
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-graphite-foreground max-w-2xl mb-4">
            Parlons de votre<br />
            <span className="text-primary">projet.</span>
          </h1>
          <p className="font-inter text-steel max-w-lg leading-relaxed">
            Répondez à quelques questions pour nous permettre de vous préparer un devis adapté. 5 minutes suffisent.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  {steps.map((s, i) => (
                    <div key={s.number} className="flex items-center gap-2 flex-1">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono-tech font-medium transition-all ${
                            step > s.number
                              ? "bg-primary text-white"
                              : step === s.number
                              ? "bg-primary/10 border-2 border-primary text-primary"
                              : "bg-muted border border-border text-steel"
                          }`}
                        >
                          {step > s.number ? <Check size={12} /> : s.number}
                        </div>
                        <span className={`font-inter text-xs hidden sm:block ${step === s.number ? "text-primary font-medium" : "text-steel"}`}>
                          {s.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="flex-1 h-px bg-border mx-1">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: step > s.number ? "100%" : "0%" }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-accent transition-all duration-500 rounded-full"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form content */}
              <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-border bg-card" style={{ boxShadow: "var(--shadow-md)" }}>
                {/* Step 1 */}
                {step === 1 && (
                  <div className="animate-fade-up">
                    <h2 className="font-grotesk font-bold text-xl text-foreground mb-1">Votre entreprise</h2>
                    <p className="font-inter text-sm text-steel mb-6">Quelques infos pour contextualiser votre projet.</p>

                    <div className="space-y-5">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">
                          Nom de l'entreprise *
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="Votre entreprise..."
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background font-inter text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Secteur d'activité *
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {sectors.map((s) => (
                            <SelectOption
                              key={s}
                              value={s}
                              selected={form.sector === s}
                              onClick={() => update("sector", s)}
                              label={s}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">
                          Nombre de collaborateurs
                        </label>
                        <select
                          value={form.employees}
                          onChange={(e) => update("employees", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background font-inter text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        >
                          <option value="">Sélectionner...</option>
                          <option>Indépendant</option>
                          <option>2 – 5</option>
                          <option>6 – 20</option>
                          <option>21 – 50</option>
                          <option>50+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="animate-fade-up">
                    <h2 className="font-grotesk font-bold text-xl text-foreground mb-1">Votre projet</h2>
                    <p className="font-inter text-sm text-steel mb-6">Quel type de prestation recherchez-vous ?</p>

                    <div className="space-y-5">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Service souhaité *
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {services.map((s) => (
                            <SelectOption
                              key={s}
                              value={s}
                              selected={form.service === s}
                              onClick={() => update("service", s)}
                              label={s}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Urgence du projet
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {urgencies.map((u) => (
                            <SelectOption
                              key={u}
                              value={u}
                              selected={form.urgency === u}
                              onClick={() => update("urgency", u)}
                              label={u}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="animate-fade-up">
                    <h2 className="font-grotesk font-bold text-xl text-foreground mb-1">Budget & délai</h2>
                    <p className="font-inter text-sm text-steel mb-6">Ces informations nous permettent de calibrer notre proposition.</p>

                    <div className="space-y-5">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Budget indicatif (HT)
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {budgets.map((b) => (
                            <SelectOption
                              key={b}
                              value={b}
                              selected={form.budget === b}
                              onClick={() => update("budget", b)}
                              label={b}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                          Délai souhaité
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {deadlines.map((d) => (
                            <SelectOption
                              key={d}
                              value={d}
                              selected={form.deadline === d}
                              onClick={() => update("deadline", d)}
                              label={d}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                  <div className="animate-fade-up">
                    <h2 className="font-grotesk font-bold text-xl text-foreground mb-1">Description & contact</h2>
                    <p className="font-inter text-sm text-steel mb-6">Décrivez votre projet et laissez vos coordonnées.</p>

                    <div className="space-y-4">
                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">
                          Description du projet *
                        </label>
                        <textarea
                          value={form.description}
                          onChange={(e) => update("description", e.target.value)}
                          placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background font-inter text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">Prénom Nom *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Jean Dupont"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background font-inter text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>
                        <div>
                          <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="jean@entreprise.fr"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background font-inter text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-inter text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="06 00 00 00 00"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background font-inter text-sm text-foreground placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      {/* RGPD */}
                      <div className="p-4 rounded-lg bg-muted/50 border border-border">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={form.rgpd}
                            onChange={(e) => update("rgpd", e.target.checked)}
                            required
                            className="mt-0.5 accent-primary"
                          />
                          <span className="font-inter text-xs text-steel leading-relaxed">
                            J'accepte que PIXORA collecte et utilise mes données pour répondre à ma demande de devis, conformément à sa{" "}
                            <button type="button" className="text-primary underline">politique de confidentialité</button>.
                            Ces données ne seront jamais transmises à des tiers.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => (s - 1) as Step)}
                      className="font-grotesk font-medium text-sm text-steel hover:text-foreground flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft size={14} /> Retour
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => (s + 1) as Step)}
                      className="btn-animated group font-grotesk font-semibold text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground flex items-center gap-2 hover:bg-primary/90 transition-all shadow-blue"
                    >
                      Étape suivante
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-animated group font-grotesk font-semibold text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground flex items-center gap-2 hover:bg-primary/90 transition-all shadow-blue"
                    >
                      Envoyer ma demande
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="flex flex-col gap-5">
              <div className="p-5 rounded-xl border border-border bg-card" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="font-grotesk font-semibold text-foreground mb-4">Coordonnées</h3>
                <div className="flex flex-col gap-3">
                  <a href="mailto:contact@pixora.fr" className="flex items-center gap-3 text-sm text-steel hover:text-primary transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={13} className="text-primary" />
                    </div>
                    contact@pixora.fr
                  </a>
                  <a href="tel:+33600000000" className="flex items-center gap-3 text-sm text-steel hover:text-primary transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <Phone size={13} className="text-primary" />
                    </div>
                    +33 6 00 00 00 00
                  </a>
                  <div className="flex items-center gap-3 text-sm text-steel">
                    <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={13} className="text-primary" />
                    </div>
                    Haute-Loire (43)
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-grotesk font-semibold text-foreground mb-3">Nos engagements</h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Réponse sous 48h ouvrées",
                    "Devis gratuit & sans engagement",
                    "Confidentialité garantie",
                    "Interlocuteur unique",
                  ].map((e) => (
                    <li key={e} className="flex items-center gap-2 text-sm text-steel">
                      <Check size={13} className="text-primary flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
