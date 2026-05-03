"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, PlugZap, BatteryCharging, Wrench,
  ScanSearch, MapPin, Home, Building2,
  Briefcase, Store, Clock, CalendarDays,
  CalendarClock, Leaf, User, Phone, Mail,
  Sun, Sunset, Moon, ChevronRight, ChevronLeft,
  CheckCircle2, Send, FileText,
} from "lucide-react";
import SectionBridge from "@/components/ui/SectionBridge";

const SPRING = [0.32, 0.72, 0, 1] as const;

/* ─── Types ──────────────────────────────────────────────────────────────── */
type ServiceKey  = "urgence"|"borne"|"renovation"|"installation"|"diagnostic";
type RegionKey   = "bruxelles"|"brabant-wallon"|"brabant-flamand"|"autre";
type PropertyKey = "maison"|"appartement"|"bureau"|"commerce";
type UrgencyKey  = "urgent"|"semaine"|"mois"|"tranquille";
type RappelKey   = "matin"|"apres-midi"|"soir";

interface FormData {
  service:     ServiceKey  | null;
  region:      RegionKey   | null;
  commune:     string;
  property:    PropertyKey | null;
  urgency:     UrgencyKey  | null;
  description: string;
  prenom:      string;
  nom:         string;
  phone:       string;
  email:       string;
  rappel:      RappelKey   | null;
}

const INIT: FormData = {
  service: null, region: null, commune: "", property: null,
  urgency: null, description: "", prenom: "", nom: "",
  phone: "", email: "", rappel: null,
};

/* ─── Données de configuration ───────────────────────────────────────────── */
const SERVICES: { key: ServiceKey; label: string; sub: string; icon: React.ReactNode; urgent?: boolean }[] = [
  { key:"urgence",      label:"Urgence électrique",       sub:"Panne, court-circuit, disjoncteur",    icon:<Zap             size={22} strokeWidth={1.8}/>, urgent:true },
  { key:"borne",        label:"Borne de recharge",        sub:"Wallbox véhicule électrique",          icon:<BatteryCharging size={22} strokeWidth={1.8}/> },
  { key:"renovation",   label:"Mise en conformité RGIE",  sub:"Normes AREI, rapport officiel",        icon:<Wrench          size={22} strokeWidth={1.8}/> },
  { key:"installation", label:"Installation électrique",  sub:"Tableau, prises, éclairage",           icon:<PlugZap         size={22} strokeWidth={1.8}/> },
  { key:"diagnostic",   label:"Diagnostic électrique",    sub:"Inspection, rapport technique",        icon:<ScanSearch      size={22} strokeWidth={1.8}/> },
];

const REGIONS: { key: RegionKey; label: string; icon: React.ReactNode }[] = [
  { key:"bruxelles",       label:"Bruxelles-Capitale",  icon:<MapPin size={16} strokeWidth={2}/> },
  { key:"brabant-wallon",  label:"Brabant Wallon",       icon:<MapPin size={16} strokeWidth={2}/> },
  { key:"brabant-flamand", label:"Brabant Flamand",      icon:<MapPin size={16} strokeWidth={2}/> },
  { key:"autre",           label:"Autre commune",        icon:<MapPin size={16} strokeWidth={2}/> },
];

const PROPERTIES: { key: PropertyKey; label: string; icon: React.ReactNode }[] = [
  { key:"maison",      label:"Maison",    icon:<Home      size={18} strokeWidth={1.8}/> },
  { key:"appartement", label:"Appart.",   icon:<Building2 size={18} strokeWidth={1.8}/> },
  { key:"bureau",      label:"Bureau",    icon:<Briefcase size={18} strokeWidth={1.8}/> },
  { key:"commerce",    label:"Commerce",  icon:<Store     size={18} strokeWidth={1.8}/> },
];

const URGENCIES: { key: UrgencyKey; label: string; sub: string; icon: React.ReactNode; highlight?: boolean }[] = [
  { key:"urgent",     label:"Aujourd'hui",   sub:"Intervention d'urgence",      icon:<Clock       size={18} strokeWidth={2}/>, highlight:true },
  { key:"semaine",    label:"Cette semaine",  sub:"Sous 7 jours",                icon:<CalendarDays  size={18} strokeWidth={2}/> },
  { key:"mois",       label:"Ce mois-ci",    sub:"Sous 30 jours",               icon:<CalendarClock size={18} strokeWidth={2}/> },
  { key:"tranquille", label:"Pas pressé",    sub:"Planification flexible",       icon:<Leaf          size={18} strokeWidth={2}/> },
];

const RAPPELS: { key: RappelKey; label: string; icon: React.ReactNode }[] = [
  { key:"matin",     label:"Matin (8h–12h)",       icon:<Sun    size={15} strokeWidth={2}/> },
  { key:"apres-midi",label:"Après-midi (12h–18h)", icon:<Sunset size={15} strokeWidth={2}/> },
  { key:"soir",      label:"Soir (18h–20h)",       icon:<Moon   size={15} strokeWidth={2}/> },
];

const REGION_LABELS: Record<RegionKey,  string> = {
  "bruxelles":"Bruxelles-Capitale","brabant-wallon":"Brabant Wallon",
  "brabant-flamand":"Brabant Flamand","autre":"Autre commune",
};
const PROPERTY_LABELS: Record<PropertyKey,string> = {
  maison:"Maison",appartement:"Appartement",bureau:"Bureau",commerce:"Commerce",
};
const URGENCY_LABELS: Record<UrgencyKey, string> = {
  urgent:"Aujourd'hui (urgence)",semaine:"Cette semaine",mois:"Ce mois-ci",tranquille:"Pas pressé",
};
const RAPPEL_LABELS: Record<RappelKey,  string> = {
  matin:"Matin",  "apres-midi":"Après-midi",  soir:"Soir",
};

/* ─── Barre de progression ───────────────────────────────────────────────── */
const STEP_LABELS = ["Service","Localisation","Délais","Coordonnées"];

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-0 mb-8 md:mb-10">
      {STEP_LABELS.map((label, i) => {
        const num      = i + 1;
        const active   = num === step;
        const done     = num < step;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            {/* Cercle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  text-[12px] font-bold flex-shrink-0
                  transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                  ${done  ? "bg-[#f97316] text-white shadow-[0_2px_10px_rgba(249,115,22,0.40)]" : ""}
                  ${active? "bg-[#2b2b2b] text-white ring-4 ring-[#2b2b2b]/15" : ""}
                  ${!done && !active ? "bg-[#2b2b2b]/[0.07] text-[#6b6b6b]" : ""}
                `}
              >
                {done ? <CheckCircle2 size={14} strokeWidth={2.5}/> : num}
              </div>
              <span className={`hidden sm:block text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 ${active?"text-[#2b2b2b]":done?"text-[#f97316]":"text-[#6b6b6b]/60"}`}>
                {label}
              </span>
            </div>
            {/* Trait de connexion */}
            {i < STEP_LABELS.length - 1 && (
              <div className="flex-1 h-[2px] mx-1.5 mb-5 rounded-full overflow-hidden bg-[#2b2b2b]/[0.07]">
                <motion.div
                  className="h-full bg-[#f97316] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: SPRING }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Composant carte sélectionnable ────────────────────────────────────── */
function SelectCard({
  selected, onClick, icon, label, sub, highlight, fullWidth,
}: {
  selected: boolean; onClick: () => void;
  icon?: React.ReactNode; label: string; sub?: string;
  highlight?: boolean; fullWidth?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative text-left rounded-2xl p-1.5
        ring-1 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
        active:scale-[0.98]
        ${fullWidth ? "w-full" : ""}
        ${selected
          ? "ring-[#f97316] shadow-[0_4px_20px_rgba(249,115,22,0.18)]"
          : "ring-black/[0.07] hover:ring-[#f97316]/40 hover:shadow-[0_4px_16px_rgba(43,43,43,0.08)]"
        }
      `}
    >
      <div
        className={`
          rounded-[calc(1rem-0.375rem)] px-4 py-3.5
          flex items-start gap-3
          transition-colors duration-300
          ${selected ? "bg-orange-50" : "bg-white group-hover:bg-[#2b2b2b]/[0.02]"}
        `}
      >
        {icon && (
          <div
            className={`
              mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center
              transition-all duration-400
              ${selected
                ? "bg-[#f97316] text-white shadow-[0_2px_8px_rgba(249,115,22,0.40)]"
                : "bg-[#2b2b2b]/[0.06] text-[#2b2b2b]"
              }
            `}
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-[0.875rem] font-bold leading-tight ${selected ? "text-[#f97316]" : "text-[#2b2b2b]"}`}>
              {label}
            </span>
            {highlight && (
              <span className="flex-shrink-0 rounded-full px-1.5 py-0.5 bg-red-50 border border-red-100 text-[9px] font-bold text-red-500 uppercase tracking-wide">
                Urgent
              </span>
            )}
          </div>
          {sub && (
            <span className="text-[0.775rem] text-[#6b6b6b] leading-snug">{sub}</span>
          )}
        </div>
        {selected && (
          <CheckCircle2 size={16} strokeWidth={2} className="flex-shrink-0 text-[#f97316] mt-0.5" />
        )}
      </div>
    </button>
  );
}

/* ─── Composant principal ────────────────────────────────────────────────── */
export default function DevisSection() {
  const [step,    setStep]    = useState(1);
  const [dir,     setDir]     = useState(1);
  const [data,    setData]    = useState<FormData>(INIT);
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  /* Navigation */
  function next() { setDir(1);  setStep((s) => Math.min(s + 1, 5)); }
  function back() { setDir(-1); setStep((s) => Math.max(s - 1, 1)); }

  function canNext(): boolean {
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.region && !!data.property;
    if (step === 3) return !!data.urgency;
    if (step === 4) return !!data.prenom && !!data.phone;
    return true;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/devis", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur");
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Appelez-nous directement.");
    } finally {
      setLoading(false);
    }
  }

  /* Variantes d'animation de slide */
  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
  };

  /* Service sélectionné (pour affichage récap) */
  const selectedService = SERVICES.find((s) => s.key === data.service);

  return (
    <section
      id="devis"
      className="relative bg-[#f8f8f8] py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration */}
      <div
        aria-hidden
        className="halo-top-md pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-12 md:mb-16 flex flex-col gap-3 items-center text-center"
        >
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
            Obtenez votre devis
            <br />
            <span className="text-[#f97316]">en 2 minutes</span>
          </h2>
          <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-lg">
            Remplissez ce formulaire et recevez une réponse sous 2 heures ouvrables.
            Intervention d&apos;urgence ? Appelez-nous directement.
          </p>
        </motion.div>

        {/* Card principale */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: SPRING, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Outer shell */}
          <div className="rounded-[2rem] p-2 bg-black/[0.03] ring-1 ring-black/[0.06] shadow-[0_12px_56px_rgba(43,43,43,0.10)]">
            {/* Inner core */}
            <div className="rounded-[calc(2rem-0.5rem)] bg-white overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">

              {/* Bandeau supérieur coloré */}
              <div className="bg-[#2b2b2b] px-7 pt-7 pb-6">
                {sent ? (
                  <p className="text-white font-bold text-[1rem]">Demande envoyée !</p>
                ) : (
                  <ProgressBar step={step} />
                )}
              </div>

              {/* Corps du formulaire */}
              <div className="px-6 md:px-8 py-7 md:py-8 min-h-[360px]">
                {sent ? (
                  /* ── Confirmation ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: SPRING }}
                    className="flex flex-col items-center justify-center gap-5 py-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f97316]/12 flex items-center justify-center">
                      <CheckCircle2 size={28} strokeWidth={1.8} className="text-[#f97316]" />
                    </div>
                    <div>
                      <h3 className="text-[1.2rem] font-extrabold text-[#2b2b2b] mb-2">
                        Votre demande est bien reçue !
                      </h3>
                      <p className="text-[0.9rem] text-[#6b6b6b] max-w-sm">
                        Nous vous contactons sous <strong>2 heures</strong> aux
                        coordonnées renseignées. Pour une urgence, appelez-nous
                        directement.
                      </p>
                    </div>
                    <a
                      href="tel:+32483480496"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f97316] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:bg-[#ea580c] transition-colors duration-300"
                    >
                      <Phone size={14} strokeWidth={2.5} />
                      Appeler maintenant
                    </a>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                      key={step}
                      custom={dir}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.32, ease: SPRING }}
                    >
                      {/* ══ ÉTAPE 1 : Service ══ */}
                      {step === 1 && (
                        <div>
                          <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-4">
                            Quel type d&apos;intervention souhaitez-vous ?
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {SERVICES.map((s) => (
                              <SelectCard
                                key={s.key}
                                selected={data.service === s.key}
                                onClick={() => setData({ ...data, service: s.key })}
                                icon={s.icon}
                                label={s.label}
                                sub={s.sub}
                                highlight={s.urgent}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ══ ÉTAPE 2 : Localisation ══ */}
                      {step === 2 && (
                        <div className="flex flex-col gap-6">
                          {/* Région */}
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-3">
                              Dans quelle région ?
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {REGIONS.map((r) => (
                                <SelectCard
                                  key={r.key}
                                  selected={data.region === r.key}
                                  onClick={() => setData({ ...data, region: r.key })}
                                  icon={r.icon}
                                  label={r.label}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Commune */}
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-2">
                              Commune ou ville
                            </p>
                            <input
                              type="text"
                              placeholder="Ex. : Ixelles, Wavre, Zaventem…"
                              value={data.commune}
                              onChange={(e) => setData({ ...data, commune: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300"
                            />
                          </div>

                          {/* Type de bien */}
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-3">
                              Type de bien
                            </p>
                            <div className="grid grid-cols-4 gap-2">
                              {PROPERTIES.map((p) => (
                                <button
                                  key={p.key}
                                  type="button"
                                  onClick={() => setData({ ...data, property: p.key })}
                                  className={`
                                    flex flex-col items-center gap-2 py-3.5 px-2 rounded-xl
                                    ring-1 text-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                                    active:scale-[0.97]
                                    ${data.property === p.key
                                      ? "ring-[#f97316] bg-orange-50"
                                      : "ring-black/[0.07] bg-white hover:ring-[#f97316]/30"
                                    }
                                  `}
                                >
                                  <span className={`transition-colors duration-300 ${data.property === p.key ? "text-[#f97316]" : "text-[#6b6b6b]"}`}>
                                    {p.icon}
                                  </span>
                                  <span className={`text-[11px] font-semibold leading-tight transition-colors duration-300 ${data.property === p.key ? "text-[#f97316]" : "text-[#2b2b2b]"}`}>
                                    {p.label}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ══ ÉTAPE 3 : Urgence + Description ══ */}
                      {step === 3 && (
                        <div className="flex flex-col gap-6">
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-3">
                              Quand avez-vous besoin de nous ?
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {URGENCIES.map((u) => (
                                <SelectCard
                                  key={u.key}
                                  selected={data.urgency === u.key}
                                  onClick={() => setData({ ...data, urgency: u.key })}
                                  icon={u.icon}
                                  label={u.label}
                                  sub={u.sub}
                                  highlight={u.highlight}
                                />
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-2">
                              Décrivez votre besoin{" "}
                              <span className="normal-case text-[#6b6b6b]/50">(optionnel)</span>
                            </p>
                            <textarea
                              rows={4}
                              value={data.description}
                              onChange={(e) => setData({ ...data, description: e.target.value })}
                              placeholder="Décrivez la panne, le projet ou les travaux souhaités…"
                              className="w-full resize-none px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300"
                            />
                          </div>
                        </div>
                      )}

                      {/* ══ ÉTAPE 4 : Coordonnées ══ */}
                      {step === 4 && (
                        <form id="devis-form" onSubmit={submit}>
                          <div className="flex flex-col gap-4">
                            {/* Nom / Prénom */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em] flex items-center gap-1">
                                  <User size={10} strokeWidth={2.5}/> Prénom *
                                </label>
                                <input
                                  required
                                  type="text"
                                  value={data.prenom}
                                  onChange={(e) => setData({ ...data, prenom: e.target.value })}
                                  placeholder="Jean"
                                  className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300"
                                />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">
                                  Nom
                                </label>
                                <input
                                  type="text"
                                  value={data.nom}
                                  onChange={(e) => setData({ ...data, nom: e.target.value })}
                                  placeholder="Dupont"
                                  className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300"
                                />
                              </div>
                            </div>

                            {/* Téléphone */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em] flex items-center gap-1">
                                <Phone size={10} strokeWidth={2.5}/> Téléphone *
                              </label>
                              <input
                                required
                                type="tel"
                                value={data.phone}
                                onChange={(e) => setData({ ...data, phone: e.target.value })}
                                placeholder="+32 4XX XX XX XX"
                                className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300"
                              />
                            </div>

                            {/* E-mail */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em] flex items-center gap-1">
                                <Mail size={10} strokeWidth={2.5}/> E-mail
                              </label>
                              <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                placeholder="jean.dupont@email.be"
                                className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300"
                              />
                            </div>

                            {/* Rappel */}
                            <div className="flex flex-col gap-2">
                              <p className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">
                                Meilleur moment pour vous rappeler
                              </p>
                              <div className="flex gap-2 flex-wrap">
                                {RAPPELS.map((r) => (
                                  <button
                                    key={r.key}
                                    type="button"
                                    onClick={() => setData({ ...data, rappel: r.key })}
                                    className={`
                                      flex items-center gap-1.5 px-3.5 py-2 rounded-full
                                      text-[12px] font-semibold
                                      ring-1 transition-all duration-300
                                      active:scale-[0.97]
                                      ${data.rappel === r.key
                                        ? "ring-[#f97316] bg-orange-50 text-[#f97316]"
                                        : "ring-black/[0.07] bg-white text-[#6b6b6b] hover:ring-[#f97316]/30"
                                      }
                                    `}
                                  >
                                    {r.icon} {r.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </form>
                      )}

                      {/* ══ ÉTAPE 5 : Récapitulatif ══ */}
                      {step === 5 && (
                        <div className="flex flex-col gap-5">
                          <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em]">
                            Récapitulatif de votre demande
                          </p>

                          {/* Carte récap */}
                          <div className="rounded-2xl bg-[#f8f8f8] ring-1 ring-black/[0.06] overflow-hidden">
                            {[
                              {
                                label: "Service",
                                value: selectedService?.label ?? "—",
                                icon:  selectedService?.icon,
                              },
                              {
                                label: "Région",
                                value: data.region ? REGION_LABELS[data.region] : "—",
                                icon:  <MapPin size={14} strokeWidth={2}/>,
                              },
                              {
                                label: "Commune",
                                value: data.commune || "Non renseignée",
                                icon:  <MapPin size={14} strokeWidth={2}/>,
                              },
                              {
                                label: "Type de bien",
                                value: data.property ? PROPERTY_LABELS[data.property] : "—",
                                icon:  <Home size={14} strokeWidth={2}/>,
                              },
                              {
                                label: "Délai souhaité",
                                value: data.urgency ? URGENCY_LABELS[data.urgency] : "—",
                                icon:  <Clock size={14} strokeWidth={2}/>,
                              },
                              {
                                label: "Contact",
                                value: `${data.prenom} ${data.nom}`.trim() || "—",
                                icon:  <User size={14} strokeWidth={2}/>,
                              },
                              {
                                label: "Téléphone",
                                value: data.phone || "—",
                                icon:  <Phone size={14} strokeWidth={2}/>,
                              },
                              ...(data.rappel ? [{
                                label: "Rappel",
                                value: RAPPEL_LABELS[data.rappel],
                                icon:  <CalendarDays size={14} strokeWidth={2}/>,
                              }] : []),
                            ].map((row, i) => (
                              <div
                                key={row.label}
                                className={`flex items-center gap-3 px-4 py-3 ${i !== 0 ? "border-t border-black/[0.05]" : ""}`}
                              >
                                <span className="text-[#f97316] flex-shrink-0">{row.icon}</span>
                                <span className="text-[11px] font-semibold text-[#6b6b6b] w-28 flex-shrink-0">
                                  {row.label}
                                </span>
                                <span className="text-[0.875rem] font-semibold text-[#2b2b2b] truncate">
                                  {row.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Description si remplie */}
                          {data.description && (
                            <div className="rounded-xl bg-orange-50 border border-orange-100 px-4 py-3">
                              <p className="text-[11px] font-semibold text-[#f97316] uppercase tracking-[0.1em] mb-1">
                                Description
                              </p>
                              <p className="text-[0.875rem] text-[#2b2b2b] leading-relaxed">
                                {data.description}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              {/* Pied du formulaire — boutons navigation */}
              {!sent && (
                <div className="px-6 md:px-8 pb-7 pt-2 flex items-center justify-between gap-3 border-t border-black/[0.05]">
                  {/* Retour */}
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 1}
                    className={`
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                      text-[14px] font-semibold transition-all duration-400
                      ${step === 1
                        ? "opacity-0 pointer-events-none"
                        : "text-[#6b6b6b] hover:text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.05] active:scale-[0.97]"
                      }
                    `}
                  >
                    <ChevronLeft size={16} strokeWidth={2.5} />
                    Retour
                  </button>

                  {/* Suivant / Envoyer */}
                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canNext()}
                      className={`
                        group inline-flex items-center justify-between gap-3
                        pl-5 pr-2 py-2.5 rounded-full
                        font-bold text-[14px] text-white
                        transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                        active:scale-[0.98]
                        ${canNext()
                          ? "bg-[#2b2b2b] hover:bg-[#f97316] shadow-[0_4px_16px_rgba(43,43,43,0.20)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.35)]"
                          : "bg-[#2b2b2b]/30 cursor-not-allowed"
                        }
                      `}
                    >
                      {step === 4 ? "Vérifier ma demande" : "Étape suivante"}
                      <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                        <ChevronRight size={14} strokeWidth={2.5} />
                      </span>
                    </button>
                  ) : (
                    <div className="flex flex-col items-end gap-2">
                      {error && (
                        <p className="text-[0.78rem] text-red-500 font-medium">{error}</p>
                      )}
                      <button
                        type="submit"
                        form="devis-form"
                        onClick={submit}
                        disabled={loading}
                        className="
                          group inline-flex items-center justify-between gap-3
                          pl-5 pr-2 py-2.5 rounded-full
                          bg-[#f97316] text-white font-bold text-[14px]
                          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                          hover:bg-[#ea580c] active:scale-[0.98] disabled:opacity-60 disabled:cursor-wait
                          shadow-[0_4px_20px_rgba(249,115,22,0.40)]
                          hover:shadow-[0_6px_28px_rgba(249,115,22,0.55)]
                        "
                      >
                        {loading ? "Envoi…" : "Envoyer ma demande"}
                        <span className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                          <Send size={13} strokeWidth={2.5} />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </motion.div>

        <SectionBridge
          text="Une dernière hésitation ? Toutes les réponses sont juste en dessous."
          cta="Consulter la FAQ"
          href="#faq"
        />

      </div>
    </section>
  );
}
