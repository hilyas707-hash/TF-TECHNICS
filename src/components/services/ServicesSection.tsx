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

const SERVICE_ICONS = {
  depannage:    Zap,
  borne:        BatteryCharging,
  renovation:   Wrench,
  installation: PlugZap,
  diagnostic:   ScanSearch,
} as const;

const SERVICE_SLUGS: Record<string, string> = {
  depannage:    "depannage-urgence",
  borne:        "borne-recharge",
  renovation:   "renovation-conformite",
  installation: "installation-electrique",
  diagnostic:   "diagnostic-electrique",
};

/* Image ou dégradé par service */
const SERVICE_VISUALS: Record<string, { img?: string; gradient: string }> = {
  depannage:    { img: "/depannageelectrique.png",           gradient: "linear-gradient(135deg,#1e1e1e 0%,#2b2b2b 100%)" },
  borne:        { img: "/BorneElectriqueCards.jpg",          gradient: "linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)" },
  renovation:   { img: "/MiseAuNorme.png", gradient: "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)" },
  installation: { gradient: "linear-gradient(135deg,#2b2b2b 0%,#3d2c1e 50%,#f97316 100%)" },
  diagnostic:   { gradient: "linear-gradient(135deg,#f5f5f5 0%,#ebebeb 100%)" },
};

/* Bento spans */
const BENTO_SPAN = [
  "col-span-12 lg:col-span-7",
  "col-span-12 lg:col-span-5",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
  "col-span-12",
];

/* Hauteur de la zone image par card */
const IMG_HEIGHT = ["h-56", "h-52", "h-48", "h-48", "md:h-64 h-52"];

interface Props { dict: Dictionary }

export default function ServicesSection({ dict }: Props) {
  const { services } = dict;

  const items = Object.entries(services.items) as [
    keyof typeof SERVICE_ICONS,
    { title: string; description: string }
  ][];

  return (
    <section id="services" className="relative bg-white py-24 md:py-32 overflow-hidden">

      {/* Décoration ambiante */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px]"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 xl:px-12">

        {/* En-tête */}
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

        {/* Grille Bento */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {items.map(([key, item], i) => {
            const Icon    = SERVICE_ICONS[key];
            const visual  = SERVICE_VISUALS[key];
            const isWide  = i === 4;
            const isDiag  = key === "diagnostic";

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
                  <div className={`
                    group relative h-full rounded-[1.75rem] overflow-hidden
                    ring-1 ring-black/[0.07]
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    hover:ring-[#f97316]/35 hover:shadow-[0_12px_40px_rgba(43,43,43,0.13)]
                    bg-white flex ${isWide ? "flex-col md:flex-row" : "flex-col"}
                  `}>

                    {/* ── Zone image / visuel ── */}
                    <div className={`
                      relative overflow-hidden flex-shrink-0
                      ${isWide ? "md:w-2/5 w-full" : "w-full"}
                      ${IMG_HEIGHT[i]}
                    `}>
                      {visual.img ? (
                        <img
                          src={visual.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ background: visual.gradient }}
                        >
                          <Icon
                            size={48}
                            strokeWidth={1.2}
                            className={isDiag ? "text-[#2b2b2b]/20" : "text-white/20"}
                          />
                        </div>
                      )}

                      {/* Badge icône en overlay */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#f97316] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(249,115,22,0.50)] transition-transform duration-500 group-hover:scale-110">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                    </div>

                    {/* ── Contenu ── */}
                    <div className={`
                      flex flex-col gap-3 flex-1
                      p-6 ${isWide ? "md:p-8 md:justify-center" : ""}
                    `}>
                      <h3 className="font-bold text-[1.05rem] leading-tight tracking-[-0.01em] text-[#2b2b2b]">
                        {item.title}
                      </h3>
                      <p className="text-[0.88rem] leading-relaxed text-[#6b6b6b] flex-1">
                        {item.description}
                      </p>

                      {/* Bouton En savoir plus */}
                      <div className="pt-2 mt-auto">
                        <span className="
                          inline-flex items-center gap-2
                          px-4 py-2 rounded-full
                          text-[12px] font-bold
                          bg-[#2b2b2b] text-white
                          transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                          group-hover:bg-[#f97316] group-hover:shadow-[0_4px_16px_rgba(249,115,22,0.38)]
                        ">
                          En savoir plus
                          <ArrowUpRight
                            size={13}
                            strokeWidth={2.5}
                            className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
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
