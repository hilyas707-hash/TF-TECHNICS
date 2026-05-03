"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

const REGION_STYLES = [
  { dot: "bg-[#f97316]",  badge: "bg-orange-50 border-orange-100 text-[#f97316]",            pill: "bg-orange-50 text-[#f97316] border-orange-100" },
  { dot: "bg-[#2b2b2b]",  badge: "bg-[#2b2b2b]/[0.06] border-[#2b2b2b]/10 text-[#2b2b2b]",  pill: "bg-[#f5f5f5] text-[#2b2b2b] border-[#e5e5e5]" },
  { dot: "bg-[#6b6b6b]",  badge: "bg-[#6b6b6b]/[0.07] border-[#6b6b6b]/15 text-[#6b6b6b]",  pill: "bg-[#f8f8f8] text-[#6b6b6b] border-[#e8e8e8]" },
];

interface Props { dict: Dictionary }

export default function ZonesSection({ dict }: Props) {
  const { zones } = dict;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const regions = [
    zones.regions.bruxelles,
    zones.regions.brabantWallon,
    zones.regions.flamand,
  ];

  return (
    <section id="zones" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Décoration */}
      <div
        aria-hidden
        className="halo-br pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-12 md:mb-16 flex flex-col gap-3 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
            <MapPin size={11} strokeWidth={2.5} />
            03 — Nous venons chez vous
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
            {zones.sectionTitle}
          </h2>
          <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed">
            {zones.sectionSubtitle}
          </p>
          <p className="text-[0.95rem] text-[#6b6b6b] leading-relaxed mt-2">
            {zones.description}
          </p>
        </motion.div>

        {/* ── MOBILE : accordéons compacts ──────────────────────────────────── */}
        <div className="flex flex-col gap-3 md:hidden">
          {regions.map((region, i) => {
            const isOpen = openIndex === i;
            const s = REGION_STYLES[i];
            return (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: SPRING, delay: i * 0.07 }}
                className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden"
              >
                {/* Ligne d'en-tête cliquable */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                    <span className="font-bold text-[0.95rem] text-[#2b2b2b]">{region.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold border ${s.badge}`}>
                      {region.cities.length} communes
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: SPRING }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={16} strokeWidth={2} className="text-[#9b9b9b]" />
                  </motion.div>
                </button>

                {/* Communes en pills */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: SPRING }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 flex flex-wrap gap-2">
                        {region.cities.map((city) => (
                          <span
                            key={city}
                            className={`rounded-full px-3 py-1 text-[12px] font-medium border ${s.pill}`}
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP : grille 3 colonnes (inchangée) ───────────────────────── */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {regions.map((region, i) => {
            const s = REGION_STYLES[i];
            return (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: SPRING, delay: i * 0.1 }}
              >
                <div className="group h-full rounded-[1.75rem] p-2 bg-black/[0.025] ring-1 ring-black/[0.06] hover:ring-[#f97316]/25 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_8px_32px_rgba(43,43,43,0.09)]">
                  <div className="h-full rounded-[calc(1.75rem-0.5rem)] p-7 bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${s.dot}`} />
                        <h3 className="font-bold text-[1rem] text-[#2b2b2b] leading-tight">{region.name}</h3>
                      </div>
                      <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold border ${s.badge}`}>
                        {region.cities.length} communes
                      </span>
                    </div>
                    <ul className="flex flex-col gap-0">
                      {region.cities.map((city) => (
                        <li key={city} className="flex items-center gap-2 py-2 border-b border-black/[0.05] last:border-0 text-[0.875rem] text-[#3f3f3f] font-medium group-hover:text-[#2b2b2b] transition-colors duration-300">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot} opacity-60`} />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <p className="text-[0.9rem] text-[#6b6b6b]">
            Votre commune n&apos;est pas listée ?{" "}
            <a
              href="#contact"
              className="font-semibold text-[#f97316] underline underline-offset-2 decoration-[#f97316]/40 hover:decoration-[#f97316] transition-all duration-300"
            >
              Contactez-nous
            </a>{" "}
            — nous étudions chaque demande.
          </p>
        </motion.div>

        {/* ── Bridge → section suivante ── */}
        <div className="mt-16 pt-8 border-t border-black/[0.05] text-center">
          <p className="text-[0.88rem] text-[#6b6b6b] mb-2.5">
            Vous avez un véhicule électrique — ou vous y pensez ? On installe votre borne de recharge.
          </p>
          <a href="#bornes" className="inline-flex items-center gap-1.5 text-[0.88rem] font-bold text-[#f97316] hover:gap-3 transition-all duration-300">
            Découvrir nos bornes de recharge <span aria-hidden="true">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
