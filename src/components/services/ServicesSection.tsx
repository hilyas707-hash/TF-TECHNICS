"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  PlugZap,
  BatteryCharging,
  Wrench,
  ScanSearch,
  ArrowUpRight,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

/* Icône par service */
const SERVICE_ICONS = {
  depannage:    Zap,
  borne:        BatteryCharging,
  renovation:   Wrench,
  installation: PlugZap,
  diagnostic:   ScanSearch,
} as const;

/* Slug de chaque service pour les liens vers les pages détail */
const SERVICE_SLUGS: Record<string, string> = {
  depannage:    "depannage-urgence",
  borne:        "borne-recharge",
  renovation:   "renovation-conformite",
  installation: "installation-electrique",
  diagnostic:   "diagnostic-electrique",
};

/* Mise en page Bento — 5 services, colonnes sur 12
   Rangée 1 : Dépannage (7) + Borne recharge (5)
   Rangée 2 : Conformité RGIE (6) + Installation (6)
   Rangée 3 : Diagnostic (12 — bannière pleine largeur) */
/* Mobile-first : 1 colonne sous 768 px, Bento asymétrique à partir de md */
const BENTO_SPAN = [
  "col-span-12 lg:col-span-7",  // dépannage — featured large (pilier 1)
  "col-span-12 lg:col-span-5",  // borne recharge (pilier 2)
  "col-span-12 md:col-span-6",  // conformité RGIE (pilier 3)
  "col-span-12 md:col-span-6",  // installation électrique
  "col-span-12",                // diagnostic — bannière pleine largeur
];

interface Props { dict: Dictionary }

export default function ServicesSection({ dict }: Props) {
  const { services } = dict;

  const items = Object.entries(services.items) as [
    keyof typeof SERVICE_ICONS,
    { title: string; description: string }
  ][];

  return (
    <section
      id="services"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration ambiante */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">

        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-12 md:mb-16 flex flex-col gap-3 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            Ce que nous faisons
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
            {services.sectionTitle}
          </h2>
          <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed">
            {services.sectionSubtitle}
          </p>
        </motion.div>

        {/* Grille Bento asymétrique */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {items.map(([key, item], i) => {
            const Icon = SERVICE_ICONS[key];
            const isFeatured = i === 0;
            const isWide = i === 4;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: SPRING, delay: i * 0.07 }}
                className={BENTO_SPAN[i]}
              >
                <Link href={`/services/${SERVICE_SLUGS[key]}`} className="block h-full">
                {/* Outer shell (Doppelrand) */}
                <div
                  className={`
                    group relative h-full rounded-[1.75rem] p-2
                    ring-1 ring-black/[0.06]
                    ${isFeatured ? "bg-[#2b2b2b]" : "bg-black/[0.025]"}
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    hover:ring-[#f97316]/30
                    ${isFeatured ? "hover:shadow-[0_16px_56px_rgba(43,43,43,0.22)]" : "hover:shadow-[0_8px_32px_rgba(43,43,43,0.10)]"}
                  `}
                >
                  {/* Inner core */}
                  <div
                    className={`
                      relative h-full rounded-[calc(1.75rem-0.5rem)]
                      ${isFeatured ? "bg-[#2b2b2b] p-7 md:p-9" : "bg-white p-6 md:p-7"}
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                      flex ${isWide ? "flex-col md:flex-row md:items-center gap-5 md:gap-8" : "flex-col gap-5"}
                      overflow-hidden
                    `}
                  >
                    {/* Reflet ambiant sur la carte featured */}
                    {isFeatured && (
                      <div
                        aria-hidden
                        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
                        }}
                      />
                    )}

                    {/* Icône */}
                    <div
                      className={`
                        flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center
                        ${isFeatured
                          ? "bg-[#f97316] text-white shadow-[0_4px_16px_rgba(249,115,22,0.45)]"
                          : "bg-[#f97316]/10 text-[#f97316]"
                        }
                        transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                        group-hover:scale-110
                      `}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="flex flex-col gap-2 flex-1 relative z-10">
                      <h3
                        className={`
                          font-bold text-[1.05rem] leading-tight tracking-[-0.01em]
                          ${isFeatured ? "text-white" : "text-[#2b2b2b]"}
                        `}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`
                          text-[0.9rem] leading-relaxed
                          ${isFeatured ? "text-white/80" : "text-[#6b6b6b]"}
                          ${isWide ? "max-w-xl" : ""}
                        `}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Flèche hover */}
                    <div
                      className={`
                        absolute bottom-5 right-5 w-8 h-8 rounded-full
                        flex items-center justify-center
                        ${isFeatured ? "bg-white/10" : "bg-[#2b2b2b]/06"}
                        opacity-0 group-hover:opacity-100
                        translate-x-2 group-hover:translate-x-0
                        transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                      `}
                    >
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className={isFeatured ? "text-white" : "text-[#2b2b2b]"}
                      />
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
