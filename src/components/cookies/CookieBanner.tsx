"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cookie, Shield, BarChart2, Megaphone,
  ChevronDown, ChevronUp, X, Check,
  ExternalLink, Settings2,
} from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;
const STORAGE_KEY = "tf-cookie-consent";

/* ─── Types ──────────────────────────────────────────────────────────────── */
export interface CookieConsent {
  essential:    true;      // toujours actif, non modifiable
  analytics:    boolean;
  advertising:  boolean;
  date:         string;    // ISO — pour renouvellement à 13 mois
}

type View = "banner" | "settings";

/* ─── Catégories de cookies ──────────────────────────────────────────────── */
const CATEGORIES = [
  {
    key:         "essential" as const,
    label:       "Cookies essentiels",
    description: "Nécessaires au bon fonctionnement du site (session, préférences de langue). Ne peuvent pas être désactivés.",
    icon:        <Shield size={16} strokeWidth={1.8} />,
    locked:      true,
  },
  {
    key:         "analytics" as const,
    label:       "Cookies analytiques",
    description: "Mesure d'audience anonymisée (Google Analytics 4). Nous aident à comprendre comment le site est utilisé afin de l'améliorer.",
    icon:        <BarChart2 size={16} strokeWidth={1.8} />,
    locked:      false,
  },
  {
    key:         "advertising" as const,
    label:       "Cookies publicitaires",
    description: "Suivi des conversions Google Ads pour mesurer l'efficacité de nos campagnes. Aucun reciblage tiers sans consentement.",
    icon:        <Megaphone size={16} strokeWidth={1.8} />,
    locked:      false,
  },
];

/* ─── Toggle switch ──────────────────────────────────────────────────────── */
function Toggle({
  enabled, locked, onChange,
}: {
  enabled: boolean; locked?: boolean; onChange?: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      disabled={locked}
      onClick={() => !locked && onChange?.(!enabled)}
      className={`
        relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full
        transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
        focus:outline-none
        ${locked ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
        ${enabled ? "bg-[#f97316]" : "bg-[#2b2b2b]/20"}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white
          shadow-[0_1px_4px_rgba(0,0,0,0.20)]
          transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}

/* ─── Composant principal ────────────────────────────────────────────────── */
export default function CookieBanner() {
  const [visible,  setVisible]  = useState(false);
  const [view,     setView]     = useState<View>("banner");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [prefs,    setPrefs]    = useState({ analytics: false, advertising: false });

  /* Lecture du consentement stocké */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { setVisible(true); return; }

      const saved: CookieConsent = JSON.parse(raw);
      const savedDate = new Date(saved.date);
      const now       = new Date();
      const months    = (now.getFullYear() - savedDate.getFullYear()) * 12
                        + (now.getMonth() - savedDate.getMonth());

      /* Renouvellement après 13 mois (RGPD / APD belge) */
      if (months >= 13) { setVisible(true); return; }

      /* Consentement toujours valide — applique les scripts */
      applyConsent(saved);
    } catch {
      setVisible(true);
    }
  }, []);

  /* Application des scripts tiers selon consentement */
  function applyConsent(consent: CookieConsent) {
    if (consent.analytics) {
      /* TODO : initialiser Google Analytics 4 */
    }
    if (consent.advertising) {
      /* TODO : initialiser Google Ads conversion tracking */
    }
  }

  function save(analytics: boolean, advertising: boolean) {
    const consent: CookieConsent = {
      essential:   true,
      analytics,
      advertising,
      date: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setVisible(false);
  }

  function acceptAll()     { save(true,  true);  }
  function rejectAll()     { save(false, false); }
  function saveCustom()    { save(prefs.analytics, prefs.advertising); }

  if (!visible) return null;

  return (
    <AnimatePresence>
      {/* ── Backdrop (vue Paramètres uniquement) ── */}
      {view === "settings" && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
          onClick={() => setView("banner")}
        />
      )}

      {/* ══════════════════════════════════════════════════
          VUE BANNIÈRE — flottante en bas
      ══════════════════════════════════════════════════ */}
      {view === "banner" && (
        <motion.div
          key="banner"
          initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
          exit={{   opacity: 0, y: 80,  filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: SPRING }}
          className="
            fixed bottom-4 left-4 right-4 z-[100]
            md:left-auto md:right-6 md:bottom-6 md:max-w-[440px]
          "
        >
          {/* Outer shell */}
          <div className="rounded-[1.75rem] p-2 bg-white/80 ring-1 ring-black/[0.08] shadow-[0_16px_56px_rgba(43,43,43,0.18)] backdrop-blur-xl">
            {/* Inner core */}
            <div className="rounded-[calc(1.75rem-0.5rem)] bg-white p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">

              {/* En-tête */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#f97316]/12 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                  <Cookie size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-extrabold text-[#2b2b2b] leading-tight mb-0.5">
                    Ce site utilise des cookies
                  </h3>
                  <p className="text-[0.78rem] text-[#6b6b6b] leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience, mesurer
                    l&apos;audience et optimiser nos campagnes. Votre choix est conservé
                    13 mois, conformément au RGPD.{" "}
                    <a
                      href="/cookies"
                      className="text-[#f97316] font-semibold hover:underline inline-flex items-center gap-0.5"
                    >
                      En savoir plus
                      <ExternalLink size={10} strokeWidth={2.5} />
                    </a>
                  </p>
                </div>
              </div>

              {/* Boutons principaux */}
              <div className="flex flex-col gap-2">
                {/* Accepter tout */}
                <button
                  onClick={acceptAll}
                  className="
                    group w-full inline-flex items-center justify-center gap-2
                    py-3 rounded-full
                    bg-[#f97316] text-white font-bold text-[13px]
                    transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                    hover:bg-[#ea580c] active:scale-[0.98]
                    shadow-[0_4px_16px_rgba(249,115,22,0.35)]
                    hover:shadow-[0_4px_20px_rgba(249,115,22,0.50)]
                  "
                >
                  <Check size={13} strokeWidth={2.5} />
                  Accepter tous les cookies
                </button>

                <div className="grid grid-cols-2 gap-2">
                  {/* Refuser */}
                  <button
                    onClick={rejectAll}
                    className="
                      py-2.5 rounded-full
                      border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[12px]
                      transition-all duration-400 hover:bg-[#2b2b2b]/[0.05]
                      active:scale-[0.97]
                    "
                  >
                    Tout refuser
                  </button>

                  {/* Personnaliser */}
                  <button
                    onClick={() => setView("settings")}
                    className="
                      flex items-center justify-center gap-1.5
                      py-2.5 rounded-full
                      border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[12px]
                      transition-all duration-400 hover:bg-[#2b2b2b]/[0.05]
                      active:scale-[0.97]
                    "
                  >
                    <Settings2 size={12} strokeWidth={2} />
                    Personnaliser
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}

      {/* ══════════════════════════════════════════════════
          VUE PARAMÈTRES — modale centrale
      ══════════════════════════════════════════════════ */}
      {view === "settings" && (
        <motion.div
          key="settings"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{   opacity: 0, scale: 0.96, y: 20  }}
          transition={{ duration: 0.4, ease: SPRING }}
          className="
            fixed inset-x-4 bottom-4 z-[100]
            md:inset-auto md:left-1/2 md:-translate-x-1/2
            md:bottom-6 md:w-full md:max-w-[560px]
          "
        >
          {/* Outer shell */}
          <div className="rounded-[1.75rem] p-2 bg-white/90 ring-1 ring-black/[0.08] shadow-[0_20px_72px_rgba(43,43,43,0.22)] backdrop-blur-2xl">
            {/* Inner core */}
            <div className="rounded-[calc(1.75rem-0.5rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] overflow-hidden">

              {/* En-tête modale */}
              <div className="flex items-center justify-between gap-3 px-6 py-5 border-b border-black/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#f97316]/12 flex items-center justify-center text-[#f97316]">
                    <Settings2 size={15} strokeWidth={2} />
                  </div>
                  <h3 className="text-[0.95rem] font-extrabold text-[#2b2b2b]">
                    Paramètres des cookies
                  </h3>
                </div>
                <button
                  onClick={() => setView("banner")}
                  className="w-8 h-8 rounded-full bg-[#2b2b2b]/[0.06] flex items-center justify-center text-[#6b6b6b] hover:bg-[#2b2b2b]/[0.10] transition-colors duration-300"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>

              {/* Intro */}
              <p className="px-6 pt-4 pb-2 text-[0.8rem] text-[#6b6b6b] leading-relaxed">
                Choisissez les catégories de cookies que vous acceptez. Vos préférences
                seront sauvegardées 13 mois. Les cookies essentiels ne peuvent pas être
                désactivés car ils sont nécessaires au bon fonctionnement du site.
              </p>

              {/* Catégories */}
              <div className="px-6 pb-2 flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
                {CATEGORIES.map((cat) => {
                  const isEnabled =
                    cat.key === "essential"
                      ? true
                      : prefs[cat.key as "analytics" | "advertising"];
                  const isOpen = expanded === cat.key;

                  return (
                    <div
                      key={cat.key}
                      className={`
                        rounded-2xl overflow-hidden ring-1 transition-all duration-300
                        ${isEnabled && !cat.locked
                          ? "ring-[#f97316]/25"
                          : "ring-black/[0.07]"
                        }
                      `}
                    >
                      {/* Ligne principale */}
                      <div className="flex items-center gap-3 px-4 py-3.5 bg-white">
                        {/* Icône */}
                        <div
                          className={`
                            w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
                            transition-colors duration-300
                            ${isEnabled ? "bg-[#f97316]/12 text-[#f97316]" : "bg-[#2b2b2b]/[0.06] text-[#6b6b6b]"}
                          `}
                        >
                          {cat.icon}
                        </div>

                        {/* Titre + expand */}
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : cat.key)}
                          className="flex-1 flex items-center gap-1.5 text-left min-w-0"
                        >
                          <span className="text-[0.875rem] font-semibold text-[#2b2b2b] truncate">
                            {cat.label}
                          </span>
                          {cat.locked && (
                            <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wide text-[#6b6b6b]/60 bg-[#2b2b2b]/[0.06] px-1.5 py-0.5 rounded-full">
                              Requis
                            </span>
                          )}
                          <span className="ml-auto flex-shrink-0 text-[#6b6b6b]/50 pl-1">
                            {isOpen
                              ? <ChevronUp  size={13} strokeWidth={2.5} />
                              : <ChevronDown size={13} strokeWidth={2.5} />
                            }
                          </span>
                        </button>

                        {/* Toggle */}
                        <Toggle
                          enabled={isEnabled}
                          locked={cat.locked}
                          onChange={(v) =>
                            setPrefs((p) => ({ ...p, [cat.key]: v }))
                          }
                        />
                      </div>

                      {/* Description dépliable */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="desc"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: SPRING }}
                            style={{ overflow: "hidden" }}
                          >
                            <p className="px-4 pb-4 text-[0.775rem] text-[#6b6b6b] leading-relaxed bg-white">
                              {cat.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Pied — boutons */}
              <div className="px-6 py-5 border-t border-black/[0.06] flex flex-col sm:flex-row gap-2">
                <button
                  onClick={rejectAll}
                  className="flex-1 py-2.5 rounded-full border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[13px] hover:bg-[#2b2b2b]/[0.05] transition-all duration-300 active:scale-[0.97]"
                >
                  Tout refuser
                </button>
                <button
                  onClick={saveCustom}
                  className="flex-1 py-2.5 rounded-full border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[13px] hover:bg-[#2b2b2b]/[0.05] transition-all duration-300 active:scale-[0.97]"
                >
                  Enregistrer mes choix
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 py-2.5 rounded-full bg-[#f97316] text-white font-bold text-[13px] hover:bg-[#ea580c] transition-all duration-300 active:scale-[0.98] shadow-[0_4px_14px_rgba(249,115,22,0.35)]"
                >
                  Tout accepter
                </button>
              </div>

              {/* Lien politique */}
              <p className="pb-4 text-center text-[0.72rem] text-[#6b6b6b]/50">
                <a href="/politique-confidentialite" className="hover:text-[#f97316] transition-colors duration-300">
                  Politique de confidentialité
                </a>
                {" · "}
                <a href="/cookies" className="hover:text-[#f97316] transition-colors duration-300">
                  Politique de cookies
                </a>
              </p>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
