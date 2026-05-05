"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, PlugZap, BatteryCharging, Wrench,
  ScanSearch, MapPin, Home, Building2,
  Briefcase, Store, Clock, CalendarDays,
  CalendarClock, Leaf, User, Phone, Mail,
  Sun, Sunset, Moon, ChevronRight, ChevronLeft,
  CheckCircle2, Send,
} from "lucide-react";
import SectionBridge from "@/components/ui/SectionBridge";

const SPRING = [0.32, 0.72, 0, 1] as const;

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

/* ── Traductions ─────────────────────────────────────────────────────────── */
const T = {
  fr: {
    h2a: "Obtenez votre devis", h2b: "en 2 minutes",
    intro: "Remplissez ce formulaire et recevez une réponse sous 2 heures ouvrables. Intervention d'urgence ? Appelez-nous directement.",
    steps: ["Service", "Localisation", "Délais", "Coordonnées"],
    sentBadge: "Demande envoyée !",
    confirmH3: "Votre demande est bien reçue !",
    confirmP:  "Nous vous contactons sous 2 heures aux coordonnées renseignées. Pour une urgence, appelez-nous directement.",
    callNow:   "Appeler maintenant",
    step1Q:    "Quel type d'intervention souhaitez-vous ?",
    step2RegQ: "Dans quelle région ?",
    step2Com:  "Commune ou ville",
    step2ComPH:"Ex. : Ixelles, Wavre, Zaventem…",
    step2PropQ:"Type de bien",
    step3UrgQ: "Quand avez-vous besoin de nous ?",
    step3DescQ:"Décrivez votre besoin",
    step3DescOpt:"(optionnel)",
    step3DescPH:"Décrivez la panne, le projet ou les travaux souhaités…",
    labelPrenom:"Prénom *",
    labelNom:  "Nom",
    labelPhone:"Téléphone *",
    labelEmail:"E-mail",
    labelRappel:"Meilleur moment pour vous rappeler",
    step5Title:"Récapitulatif de votre demande",
    recapService:"Service",
    recapRegion: "Région",
    recapCommune:"Commune",
    recapProp:   "Type de bien",
    recapUrgency:"Délai souhaité",
    recapContact:"Contact",
    recapPhone:  "Téléphone",
    recapRappel: "Rappel",
    recapDesc:   "Description",
    recapNone:   "Non renseignée",
    back:        "Retour",
    nextStep:    "Étape suivante",
    verify:      "Vérifier ma demande",
    send:        "Envoyer ma demande",
    sending:     "Envoi…",
    error:       "Une erreur est survenue. Appelez-nous directement.",
    bridgeText:  "Une dernière hésitation ? Toutes les réponses sont juste en dessous.",
    bridgeCta:   "Consulter la FAQ",
    bridgeHref:  "/faq",
    urgentTag:   "Urgent",
    services: [
      { key:"urgence",      label:"Urgence électrique",      sub:"Panne, court-circuit, disjoncteur",   urgent:true },
      { key:"borne",        label:"Borne de recharge",       sub:"Wallbox véhicule électrique"                     },
      { key:"renovation",   label:"Mise en conformité RGIE", sub:"Normes AREI, rapport officiel"                   },
      { key:"installation", label:"Installation électrique", sub:"Tableau, prises, éclairage"                      },
      { key:"diagnostic",   label:"Diagnostic électrique",   sub:"Inspection, rapport technique"                   },
    ],
    regions: [
      { key:"bruxelles",       label:"Bruxelles-Capitale"  },
      { key:"brabant-wallon",  label:"Brabant Wallon"       },
      { key:"brabant-flamand", label:"Brabant Flamand"      },
      { key:"autre",           label:"Autre commune"        },
    ],
    properties: [
      { key:"maison",      label:"Maison"   },
      { key:"appartement", label:"Appart."  },
      { key:"bureau",      label:"Bureau"   },
      { key:"commerce",    label:"Commerce" },
    ],
    urgencies: [
      { key:"urgent",     label:"Aujourd'hui",  sub:"Intervention d'urgence",   highlight:true },
      { key:"semaine",    label:"Cette semaine", sub:"Sous 7 jours"                            },
      { key:"mois",       label:"Ce mois-ci",   sub:"Sous 30 jours"                           },
      { key:"tranquille", label:"Pas pressé",   sub:"Planification flexible"                  },
    ],
    rappels: [
      { key:"matin",      label:"Matin (8h–12h)"       },
      { key:"apres-midi", label:"Après-midi (12h–18h)" },
      { key:"soir",       label:"Soir (18h–20h)"       },
    ],
  },
  nl: {
    h2a: "Uw offerte", h2b: "in 2 minuten",
    intro: "Vul dit formulier in en ontvang een antwoord binnen 2 werkuren. Spoedinterventie? Bel ons direct.",
    steps: ["Dienst", "Locatie", "Termijn", "Gegevens"],
    sentBadge: "Aanvraag verzonden!",
    confirmH3: "Uw aanvraag is goed ontvangen!",
    confirmP:  "Wij nemen contact met u op binnen 2 uur op de opgegeven gegevens. Spoedgeval? Bel ons direct.",
    callNow:   "Bel ons nu",
    step1Q:    "Welk type interventie wenst u?",
    step2RegQ: "In welke regio?",
    step2Com:  "Gemeente of stad",
    step2ComPH:"Bv.: Ixelles, Wavre, Zaventem…",
    step2PropQ:"Type woning",
    step3UrgQ: "Wanneer heeft u ons nodig?",
    step3DescQ:"Beschrijf uw vraag",
    step3DescOpt:"(optioneel)",
    step3DescPH:"Beschrijf de panne, het project of de gewenste werken…",
    labelPrenom:"Voornaam *",
    labelNom:  "Naam",
    labelPhone:"Telefoon *",
    labelEmail:"E-mail",
    labelRappel:"Beste moment om u terug te bellen",
    step5Title:"Samenvatting van uw aanvraag",
    recapService:"Dienst",
    recapRegion: "Regio",
    recapCommune:"Gemeente",
    recapProp:   "Type woning",
    recapUrgency:"Gewenste termijn",
    recapContact:"Contact",
    recapPhone:  "Telefoon",
    recapRappel: "Terugbelmoment",
    recapDesc:   "Beschrijving",
    recapNone:   "Niet ingevuld",
    back:        "Terug",
    nextStep:    "Volgende stap",
    verify:      "Mijn aanvraag controleren",
    send:        "Mijn aanvraag verzenden",
    sending:     "Verzenden…",
    error:       "Er is een fout opgetreden. Bel ons direct.",
    bridgeText:  "Nog een vraag? Alle antwoorden staan hieronder.",
    bridgeCta:   "FAQ raadplegen",
    bridgeHref:  "/nl/faq",
    urgentTag:   "Spoed",
    services: [
      { key:"urgence",      label:"Elektrische spoed",     sub:"Panne, kortsluiting, zekering",        urgent:true },
      { key:"borne",        label:"Laadpaal",               sub:"Wallbox elektrisch voertuig"                       },
      { key:"renovation",   label:"AREI-conformiteit",      sub:"AREI-normen, officieel rapport"                    },
      { key:"installation", label:"Elektrische installatie",sub:"Zekeringkast, stopcontacten, verlichting"          },
      { key:"diagnostic",   label:"Elektrische diagnose",   sub:"Inspectie, technisch rapport"                      },
    ],
    regions: [
      { key:"bruxelles",       label:"Brussel-Hoofdstad" },
      { key:"brabant-wallon",  label:"Waals-Brabant"     },
      { key:"brabant-flamand", label:"Vlaams-Brabant"    },
      { key:"autre",           label:"Andere gemeente"   },
    ],
    properties: [
      { key:"maison",      label:"Woning"      },
      { key:"appartement", label:"Appartement" },
      { key:"bureau",      label:"Kantoor"     },
      { key:"commerce",    label:"Winkel"      },
    ],
    urgencies: [
      { key:"urgent",     label:"Vandaag",    sub:"Spoedinterventie",   highlight:true },
      { key:"semaine",    label:"Deze week",  sub:"Binnen 7 dagen"                    },
      { key:"mois",       label:"Deze maand", sub:"Binnen 30 dagen"                   },
      { key:"tranquille", label:"Geen haast", sub:"Flexibele planning"                },
    ],
    rappels: [
      { key:"matin",      label:"Ochtend (8u–12u)"    },
      { key:"apres-midi", label:"Namiddag (12u–18u)"  },
      { key:"soir",       label:"Avond (18u–20u)"     },
    ],
  },
} as const;

/* ── Barre de progression ────────────────────────────────────────────────── */
function ProgressBar({ step, labels }: { step: number; labels: readonly string[] }) {
  return (
    <div className="flex items-center gap-0 mb-8 md:mb-10">
      {labels.map((label, i) => {
        const num    = i + 1;
        const active = num === step;
        const done   = num < step;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${done?"bg-[#f97316] text-white shadow-[0_2px_10px_rgba(249,115,22,0.40)]":""} ${active?"bg-[#2b2b2b] text-white ring-4 ring-[#2b2b2b]/15":""} ${!done&&!active?"bg-[#2b2b2b]/[0.07] text-[#6b6b6b]":""}`}>
                {done ? <CheckCircle2 size={14} strokeWidth={2.5}/> : num}
              </div>
              <span className={`hidden sm:block text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 ${active?"text-[#2b2b2b]":done?"text-[#f97316]":"text-[#6b6b6b]/60"}`}>
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div className="flex-1 h-[2px] mx-1.5 mb-5 rounded-full overflow-hidden bg-[#2b2b2b]/[0.07]">
                <motion.div className="h-full bg-[#f97316] rounded-full" initial={{ width:"0%" }} animate={{ width: done?"100%":"0%" }} transition={{ duration:0.5, ease:SPRING }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Carte sélectionnable ────────────────────────────────────────────────── */
function SelectCard({ selected, onClick, icon, label, sub, highlight, urgentTag, fullWidth }: {
  selected:boolean; onClick:()=>void; icon?:React.ReactNode;
  label:string; sub?:string; highlight?:boolean; urgentTag?:string; fullWidth?:boolean;
}) {
  return (
    <button type="button" onClick={onClick} className={`group relative text-left rounded-2xl p-1.5 ring-1 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${fullWidth?"w-full":""} ${selected?"ring-[#f97316] shadow-[0_4px_20px_rgba(249,115,22,0.18)]":"ring-black/[0.07] hover:ring-[#f97316]/40 hover:shadow-[0_4px_16px_rgba(43,43,43,0.08)]"}`}>
      <div className={`rounded-[calc(1rem-0.375rem)] px-4 py-3.5 flex items-start gap-3 transition-colors duration-300 ${selected?"bg-orange-50":"bg-white group-hover:bg-[#2b2b2b]/[0.02]"}`}>
        {icon && (
          <div className={`mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-400 ${selected?"bg-[#f97316] text-white shadow-[0_2px_8px_rgba(249,115,22,0.40)]":"bg-[#2b2b2b]/[0.06] text-[#2b2b2b]"}`}>
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-[0.875rem] font-bold leading-tight ${selected?"text-[#f97316]":"text-[#2b2b2b]"}`}>{label}</span>
            {highlight && urgentTag && (
              <span className="flex-shrink-0 rounded-full px-1.5 py-0.5 bg-red-50 border border-red-100 text-[9px] font-bold text-red-500 uppercase tracking-wide">{urgentTag}</span>
            )}
          </div>
          {sub && <span className="text-[0.775rem] text-[#6b6b6b] leading-snug">{sub}</span>}
        </div>
        {selected && <CheckCircle2 size={16} strokeWidth={2} className="flex-shrink-0 text-[#f97316] mt-0.5" />}
      </div>
    </button>
  );
}

/* ── Composant principal ─────────────────────────────────────────────────── */
interface Props { locale?: "fr" | "nl" }

export default function DevisSection({ locale = "fr" }: Props) {
  const t = T[locale];
  const [step,    setStep]    = useState(1);
  const [dir,     setDir]     = useState(1);
  const [data,    setData]    = useState<FormData>(INIT);
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

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
      const res = await fetch("/api/devis", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  }

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
  };

  const ICONS: Record<ServiceKey, React.ReactNode> = {
    urgence:      <Zap             size={22} strokeWidth={1.8}/>,
    borne:        <BatteryCharging size={22} strokeWidth={1.8}/>,
    renovation:   <Wrench          size={22} strokeWidth={1.8}/>,
    installation: <PlugZap         size={22} strokeWidth={1.8}/>,
    diagnostic:   <ScanSearch      size={22} strokeWidth={1.8}/>,
  };

  const URGENCY_ICONS: Record<UrgencyKey, React.ReactNode> = {
    urgent:     <Clock       size={18} strokeWidth={2}/>,
    semaine:    <CalendarDays  size={18} strokeWidth={2}/>,
    mois:       <CalendarClock size={18} strokeWidth={2}/>,
    tranquille: <Leaf          size={18} strokeWidth={2}/>,
  };

  const RAPPEL_ICONS: Record<RappelKey, React.ReactNode> = {
    matin:      <Sun    size={15} strokeWidth={2}/>,
    "apres-midi":<Sunset size={15} strokeWidth={2}/>,
    soir:       <Moon   size={15} strokeWidth={2}/>,
  };

  const selectedService = t.services.find((s) => s.key === data.service);
  const selectedRegion  = t.regions.find((r)  => r.key === data.region);
  const selectedProp    = t.properties.find((p) => p.key === data.property);
  const selectedUrgency = t.urgencies.find((u) => u.key === data.urgency);
  const selectedRappel  = t.rappels.find((r)  => r.key === data.rappel);

  return (
    <section id="devis" className="relative bg-[#f8f8f8] py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="halo-top-md pointer-events-none absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        <motion.div
          initial={{ opacity:0, y:28 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8, ease:SPRING }}
          className="mb-12 md:mb-16 flex flex-col gap-3 items-center text-center"
        >
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
            {t.h2a}<br /><span className="text-[#f97316]">{t.h2b}</span>
          </h2>
          <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-lg">{t.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:32 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.85, ease:SPRING, delay:0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-[2rem] p-2 bg-black/[0.03] ring-1 ring-black/[0.06] shadow-[0_12px_56px_rgba(43,43,43,0.10)]">
            <div className="rounded-[calc(2rem-0.5rem)] bg-white overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">

              <div className="bg-[#2b2b2b] px-7 pt-7 pb-6">
                {sent
                  ? <p className="text-white font-bold text-[1rem]">{t.sentBadge}</p>
                  : <ProgressBar step={step} labels={t.steps} />
                }
              </div>

              <div className="px-6 md:px-8 py-7 md:py-8 min-h-[360px]">
                {sent ? (
                  <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.5, ease:SPRING }} className="flex flex-col items-center justify-center gap-5 py-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#f97316]/12 flex items-center justify-center">
                      <CheckCircle2 size={28} strokeWidth={1.8} className="text-[#f97316]" />
                    </div>
                    <div>
                      <h3 className="text-[1.2rem] font-extrabold text-[#2b2b2b] mb-2">{t.confirmH3}</h3>
                      <p className="text-[0.9rem] text-[#6b6b6b] max-w-sm">{t.confirmP}</p>
                    </div>
                    <a href="tel:+32483480496" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f97316] text-white font-bold text-[14px] shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:bg-[#ea580c] transition-colors duration-300">
                      <Phone size={14} strokeWidth={2.5}/> {t.callNow}
                    </a>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div key={step} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration:0.32, ease:SPRING }}>

                      {/* ÉTAPE 1 */}
                      {step === 1 && (
                        <div>
                          <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-4">{t.step1Q}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {t.services.map((s) => (
                              <SelectCard key={s.key} selected={data.service === s.key} onClick={() => setData({...data, service: s.key as ServiceKey})} icon={ICONS[s.key as ServiceKey]} label={s.label} sub={s.sub} highlight={"urgent" in s && s.urgent} urgentTag={t.urgentTag} />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ÉTAPE 2 */}
                      {step === 2 && (
                        <div className="flex flex-col gap-6">
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-3">{t.step2RegQ}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {t.regions.map((r) => (
                                <SelectCard key={r.key} selected={data.region === r.key} onClick={() => setData({...data, region: r.key as RegionKey})} icon={<MapPin size={16} strokeWidth={2}/>} label={r.label} />
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-2">{t.step2Com}</p>
                            <input type="text" placeholder={t.step2ComPH} value={data.commune} onChange={(e) => setData({...data, commune: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300" />
                          </div>
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-3">{t.step2PropQ}</p>
                            <div className="grid grid-cols-4 gap-2">
                              {t.properties.map((p) => (
                                <button key={p.key} type="button" onClick={() => setData({...data, property: p.key as PropertyKey})} className={`flex flex-col items-center gap-2 py-3.5 px-2 rounded-xl ring-1 text-center transition-all duration-300 active:scale-[0.97] ${data.property===p.key?"ring-[#f97316] bg-orange-50":"ring-black/[0.07] bg-white hover:ring-[#f97316]/30"}`}>
                                  <span className={`transition-colors duration-300 ${data.property===p.key?"text-[#f97316]":"text-[#6b6b6b]"}`}>
                                    {p.key==="maison"?<Home size={18} strokeWidth={1.8}/>:p.key==="appartement"?<Building2 size={18} strokeWidth={1.8}/>:p.key==="bureau"?<Briefcase size={18} strokeWidth={1.8}/>:<Store size={18} strokeWidth={1.8}/>}
                                  </span>
                                  <span className={`text-[11px] font-semibold leading-tight transition-colors duration-300 ${data.property===p.key?"text-[#f97316]":"text-[#2b2b2b]"}`}>{p.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ÉTAPE 3 */}
                      {step === 3 && (
                        <div className="flex flex-col gap-6">
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-3">{t.step3UrgQ}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {t.urgencies.map((u) => (
                                <SelectCard key={u.key} selected={data.urgency===u.key} onClick={() => setData({...data, urgency: u.key as UrgencyKey})} icon={URGENCY_ICONS[u.key as UrgencyKey]} label={u.label} sub={u.sub} highlight={"highlight" in u ? (u as {highlight:boolean}).highlight : false} urgentTag={t.urgentTag} />
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em] mb-2">
                              {t.step3DescQ} <span className="normal-case text-[#6b6b6b]/50">{t.step3DescOpt}</span>
                            </p>
                            <textarea rows={4} value={data.description} onChange={(e) => setData({...data, description: e.target.value})} placeholder={t.step3DescPH} className="w-full resize-none px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300" />
                          </div>
                        </div>
                      )}

                      {/* ÉTAPE 4 */}
                      {step === 4 && (
                        <form id="devis-form" onSubmit={submit}>
                          <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em] flex items-center gap-1"><User size={10} strokeWidth={2.5}/> {t.labelPrenom}</label>
                                <input required type="text" value={data.prenom} onChange={(e) => setData({...data, prenom: e.target.value})} placeholder="Jean" className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300" />
                              </div>
                              <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">{t.labelNom}</label>
                                <input type="text" value={data.nom} onChange={(e) => setData({...data, nom: e.target.value})} placeholder="Dupont" className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300" />
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em] flex items-center gap-1"><Phone size={10} strokeWidth={2.5}/> {t.labelPhone}</label>
                              <input required type="tel" value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})} placeholder="+32 4XX XX XX XX" className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em] flex items-center gap-1"><Mail size={10} strokeWidth={2.5}/> {t.labelEmail}</label>
                              <input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} placeholder="jean.dupont@email.be" className="px-4 py-3 rounded-xl bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08] text-[0.9rem] text-[#2b2b2b] font-medium placeholder:text-[#6b6b6b]/50 focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50 transition-all duration-300" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <p className="text-[11px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">{t.labelRappel}</p>
                              <div className="flex gap-2 flex-wrap">
                                {t.rappels.map((r) => (
                                  <button key={r.key} type="button" onClick={() => setData({...data, rappel: r.key as RappelKey})} className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-semibold ring-1 transition-all duration-300 active:scale-[0.97] ${data.rappel===r.key?"ring-[#f97316] bg-orange-50 text-[#f97316]":"ring-black/[0.07] bg-white text-[#6b6b6b] hover:ring-[#f97316]/30"}`}>
                                    {RAPPEL_ICONS[r.key as RappelKey]} {r.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </form>
                      )}

                      {/* ÉTAPE 5 — Récap */}
                      {step === 5 && (
                        <div className="flex flex-col gap-5">
                          <p className="text-[0.8rem] font-semibold text-[#6b6b6b] uppercase tracking-[0.12em]">{t.step5Title}</p>
                          <div className="rounded-2xl bg-[#f8f8f8] ring-1 ring-black/[0.06] overflow-hidden">
                            {[
                              { label: t.recapService,  value: selectedService?.label ?? "—",                  icon: <Zap  size={14} strokeWidth={2}/> },
                              { label: t.recapRegion,   value: selectedRegion?.label  ?? "—",                  icon: <MapPin size={14} strokeWidth={2}/> },
                              { label: t.recapCommune,  value: data.commune || t.recapNone,                    icon: <MapPin size={14} strokeWidth={2}/> },
                              { label: t.recapProp,     value: selectedProp?.label    ?? "—",                  icon: <Home   size={14} strokeWidth={2}/> },
                              { label: t.recapUrgency,  value: selectedUrgency?.label ?? "—",                  icon: <Clock  size={14} strokeWidth={2}/> },
                              { label: t.recapContact,  value: `${data.prenom} ${data.nom}`.trim() || "—",     icon: <User   size={14} strokeWidth={2}/> },
                              { label: t.recapPhone,    value: data.phone || "—",                              icon: <Phone  size={14} strokeWidth={2}/> },
                              ...(data.rappel ? [{ label: t.recapRappel, value: selectedRappel?.label ?? "—", icon: <CalendarDays size={14} strokeWidth={2}/> }] : []),
                            ].map((row, i) => (
                              <div key={row.label} className={`flex items-center gap-3 px-4 py-3 ${i!==0?"border-t border-black/[0.05]":""}`}>
                                <span className="text-[#f97316] flex-shrink-0">{row.icon}</span>
                                <span className="text-[11px] font-semibold text-[#6b6b6b] w-28 flex-shrink-0">{row.label}</span>
                                <span className="text-[0.875rem] font-semibold text-[#2b2b2b] truncate">{row.value}</span>
                              </div>
                            ))}
                          </div>
                          {data.description && (
                            <div className="rounded-xl bg-orange-50 border border-orange-100 px-4 py-3">
                              <p className="text-[11px] font-semibold text-[#f97316] uppercase tracking-[0.1em] mb-1">{t.recapDesc}</p>
                              <p className="text-[0.875rem] text-[#2b2b2b] leading-relaxed">{data.description}</p>
                            </div>
                          )}
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              {/* Navigation */}
              {!sent && (
                <div className="px-6 md:px-8 pb-7 pt-2 flex items-center justify-between gap-3 border-t border-black/[0.05]">
                  <button type="button" onClick={back} disabled={step===1} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-400 ${step===1?"opacity-0 pointer-events-none":"text-[#6b6b6b] hover:text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.05] active:scale-[0.97]"}`}>
                    <ChevronLeft size={16} strokeWidth={2.5}/> {t.back}
                  </button>

                  {step < 5 ? (
                    <button type="button" onClick={next} disabled={!canNext()} className={`group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-2.5 rounded-full font-bold text-[14px] text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${canNext()?"bg-[#2b2b2b] hover:bg-[#f97316] shadow-[0_4px_16px_rgba(43,43,43,0.20)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.35)]":"bg-[#2b2b2b]/30 cursor-not-allowed"}`}>
                      {step===4 ? t.verify : t.nextStep}
                      <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                        <ChevronRight size={14} strokeWidth={2.5}/>
                      </span>
                    </button>
                  ) : (
                    <div className="flex flex-col items-end gap-2">
                      {error && <p className="text-[0.78rem] text-red-500 font-medium">{error}</p>}
                      <button type="submit" form="devis-form" onClick={submit} disabled={loading} className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-2.5 rounded-full bg-[#f97316] text-white font-bold text-[14px] transition-all duration-500 hover:bg-[#ea580c] active:scale-[0.98] disabled:opacity-60 disabled:cursor-wait shadow-[0_4px_20px_rgba(249,115,22,0.40)] hover:shadow-[0_6px_28px_rgba(249,115,22,0.55)]">
                        {loading ? t.sending : t.send}
                        <span className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                          <Send size={13} strokeWidth={2.5}/>
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </motion.div>

        <SectionBridge text={t.bridgeText} cta={t.bridgeCta} href={t.bridgeHref} />

      </div>
    </section>
  );
}
