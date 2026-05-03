"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BatteryCharging, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

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
      <div
        aria-hidden
        className="halo-circle pointer-events-none absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── GAUCHE — Contenu ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: SPRING }}
            className="flex flex-col gap-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#f97316]/12 border border-[#f97316]/20 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <BatteryCharging size={11} strokeWidth={2.5} />
              04 — Et demain ?
            </span>

            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
              {bornes.sectionTitle}
            </h2>

            <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-md">
              {bornes.sectionSubtitle}
            </p>

            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f97316]/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={13} strokeWidth={2.5} className="text-[#f97316]" />
                  </div>
                  <span className="text-[0.95rem] font-semibold text-[#2b2b2b]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pl-1">
              {EXTRA_BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <Zap size={12} strokeWidth={2.5} className="text-[#f97316] flex-shrink-0" />
                  <span className="text-[0.875rem] text-[#6b6b6b]">{b}</span>
                </div>
              ))}
            </div>

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
                <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── DROITE — Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: SPRING, delay: 0.1 }}
            className="relative w-full"
          >
            <div
              aria-hidden
              className="absolute inset-4 translate-y-4 rounded-[2rem] bg-[#f97316]/20 blur-2xl -z-10"
            />

            {/* Outer shell */}
            <div className="relative rounded-[2rem] p-2 bg-[#f97316]/10 ring-1 ring-[#f97316]/20 shadow-[0_8px_48px_rgba(249,115,22,0.15)]">
              {/* Image */}
              <div
                className="rounded-inner relative overflow-hidden aspect-[4/5] sm:aspect-[3/4]"
              >
                <Image
                  src="/electric-car-power-charging_1.jpg"
                  alt="Connecteur de borne de recharge installé par TF Technics"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay bas */}
                <div
                  className="halo-bottom-orange absolute inset-0 pointer-events-none"
                />

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: SPRING, delay: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] ring-1 ring-white/60"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f97316] flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.40)]">
                    <BatteryCharging size={16} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#2b2b2b] leading-tight">
                      Jusqu&apos;à 22 kW
                    </p>
                    <p className="text-[11px] text-[#6b6b6b] mt-0.5">Charge rapide · Mode 3</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-[11px] font-extrabold text-[#f97316]">Installation</p>
                    <p className="text-[10px] text-[#6b6b6b]">en 1 journée</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bridge → section suivante ── */}
        <div className="mt-16 pt-8 border-t border-black/[0.05] text-center">
          <p className="text-[0.88rem] text-[#6b6b6b] mb-2.5">
            Vous voulez savoir exactement combien ça coûte ? Obtenez votre estimation en 2 minutes.
          </p>
          <a href="#devis" className="inline-flex items-center gap-1.5 text-[0.88rem] font-bold text-[#f97316] hover:gap-3 transition-all duration-300">
            Demander un devis gratuit <span aria-hidden="true">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
