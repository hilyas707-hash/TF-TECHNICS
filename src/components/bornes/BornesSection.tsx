"use client";

import { motion } from "framer-motion";
import { BatteryCharging, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

/* Avantages supplémentaires (fixes, hors dictionnaire) */
const EXTRA_BENEFITS = [
  "Compatible toutes marques de véhicules électriques",
  "Modes de charge 2 et 3 (jusqu'à 22 kW)",
  "Application mobile de supervision incluse",
  "Garantie pièces & main-d'œuvre 2 ans",
];

interface Props { dict: Dictionary }

export default function BornesSection({ dict }: Props) {
  const { bornes } = dict;

  const features = [
    bornes.features.certified,
    bornes.features.subsidy,
    bornes.features.speed,
  ];

  return (
    <section
      id="bornes"
      className="relative bg-[#fff7ed] py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* Layout Z-Axis : grille 2 colonnes — image à droite avec légère rotation sur desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── GAUCHE — Contenu ── */}
          <motion.div
            initial={{ opacity: 0, x: -32, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: SPRING }}
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#f97316]/12 border border-[#f97316]/20 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <BatteryCharging size={11} strokeWidth={2.5} />
              Mobilité électrique
            </span>

            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
              {bornes.sectionTitle}
            </h2>

            <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-md">
              {bornes.sectionSubtitle}
            </p>

            {/* Points forts — dictionnaire */}
            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f97316]/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={13} strokeWidth={2.5} className="text-[#f97316]" />
                  </div>
                  <span className="text-[0.95rem] font-semibold text-[#2b2b2b]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Avantages supplémentaires */}
            <div className="flex flex-col gap-2 pl-1">
              {EXTRA_BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <Zap size={12} strokeWidth={2.5} className="text-[#f97316] flex-shrink-0" />
                  <span className="text-[0.875rem] text-[#6b6b6b]">{b}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="
                  group inline-flex items-center justify-between gap-3
                  pl-5 pr-2 py-2.5 rounded-full
                  bg-[#f97316] text-white font-bold text-[15px]
                  transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                  hover:bg-[#ea580c] active:scale-[0.98]
                  shadow-[0_4px_20px_rgba(249,115,22,0.38)]
                  hover:shadow-[0_6px_28px_rgba(249,115,22,0.52)]
                "
              >
                {bornes.ctaInstall}
                <span
                  className="
                    w-9 h-9 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0
                    transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110
                  "
                >
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── DROITE — Image Double-Bezel avec légère rotation (Z-Axis) ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: SPRING, delay: 0.1 }}
            className="relative w-full"
          >
            {/* Ombre portée décalée (Z-Axis depth) */}
            <div
              aria-hidden
              className="absolute inset-4 rounded-[2rem] bg-[#f97316]/20 blur-2xl -z-10"
              style={{ transform: "translateY(16px)" }}
            />

            {/* Outer shell */}
            <div
              className="
                relative rounded-[2rem] p-2
                bg-[#f97316]/10 ring-1 ring-[#f97316]/20
                shadow-[0_8px_48px_rgba(249,115,22,0.15)]
              "
            >
              {/* Inner core — visuel graphique SVG */}
              <div
                className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center"
                style={{
                  borderRadius: "calc(2rem - 0.5rem)",
                  background: "linear-gradient(145deg, #1a1a1a 0%, #2b2b2b 50%, #1f1f1f 100%)",
                }}
              >
                {/* Cercles décoratifs */}
                <div aria-hidden className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 65%)" }} />
                  <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)" }} />
                  {/* Grille subtile */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Icône principale */}
                <div className="relative flex flex-col items-center gap-6">
                  {/* Anneau externe */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full" style={{ background: "rgba(249,115,22,0.12)", boxShadow: "0 0 60px rgba(249,115,22,0.20)" }} />
                    <div className="absolute inset-3 rounded-full border border-[#f97316]/20" />
                    {/* SVG connecteur de recharge */}
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Corps du connecteur */}
                      <rect x="18" y="8" width="28" height="36" rx="6" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="1.5"/>
                      {/* Broches */}
                      <rect x="25" y="16" width="5" height="12" rx="2.5" fill="#f97316"/>
                      <rect x="34" y="16" width="5" height="12" rx="2.5" fill="#f97316"/>
                      <rect x="29.5" y="22" width="5" height="9" rx="2.5" fill="#f97316" opacity="0.6"/>
                      {/* Câble */}
                      <path d="M32 44 Q32 52 32 56" stroke="#f97316" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                      {/* Éclair central */}
                      <path d="M35 26 L29 34 H33 L29 42 L38 31 H34 L38 26 Z" fill="white" opacity="0.9"/>
                    </svg>
                  </div>

                  {/* Texte sous l'icône */}
                  <div className="text-center">
                    <p className="text-white/90 text-[13px] font-bold tracking-wider uppercase">Mode 3 · AC</p>
                    <p className="text-[#f97316] text-[11px] font-medium mt-1 tracking-wide">jusqu&apos;à 22 kW</p>
                  </div>

                  {/* Indicateur d'état */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)" }}>
                    <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                    <span className="text-[11px] text-white/70 font-medium">En charge</span>
                  </div>
                </div>

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: SPRING, delay: 0.6 }}
                  className="
                    absolute bottom-4 left-4 right-4
                    flex items-center gap-3 px-4 py-3 rounded-2xl
                    bg-white/92 backdrop-blur-xl
                    shadow-[0_4px_24px_rgba(0,0,0,0.12)]
                    ring-1 ring-white/60
                  "
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f97316] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.40)]">
                    <BatteryCharging size={16} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#2b2b2b] leading-tight">
                      Jusqu&apos;à 22 kW
                    </p>
                    <p className="text-[11px] text-[#6b6b6b] mt-0.5">
                      Charge rapide · Mode 3
                    </p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-[11px] font-extrabold text-[#f97316]">
                      Installation
                    </p>
                    <p className="text-[10px] text-[#6b6b6b]">en 1 journée</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
