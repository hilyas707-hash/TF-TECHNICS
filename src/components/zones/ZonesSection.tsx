"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

/* Couleur d'accent par région */
const REGION_STYLES = [
  { dot: "bg-[#f97316]",  badge: "bg-orange-50 border-orange-100 text-[#f97316]",   label: "Région 1" },
  { dot: "bg-[#2b2b2b]",  badge: "bg-[#2b2b2b]/[0.06] border-[#2b2b2b]/10 text-[#2b2b2b]", label: "Région 2" },
  { dot: "bg-[#6b6b6b]",  badge: "bg-[#6b6b6b]/[0.07] border-[#6b6b6b]/15 text-[#6b6b6b]", label: "Région 3" },
];

interface Props { dict: Dictionary }

export default function ZonesSection({ dict }: Props) {
  const { zones } = dict;

  const regions = [
    zones.regions.bruxelles,
    zones.regions.brabantWallon,
    zones.regions.flamand,
  ];

  return (
    <section
      id="zones"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(249,115,22,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-12 md:mb-16 flex flex-col gap-3 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
            <MapPin size={11} strokeWidth={2.5} />
            Où intervenons-nous
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
            {zones.sectionTitle}
          </h2>
          <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed">
            {zones.sectionSubtitle}
          </p>
        </motion.div>

        {/* Cartes de régions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: SPRING, delay: i * 0.1 }}
            >
              {/* Outer shell */}
              <div
                className="
                  group h-full rounded-[1.75rem] p-2
                  bg-black/[0.025] ring-1 ring-black/[0.06]
                  hover:ring-[#f97316]/25
                  transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                  hover:shadow-[0_8px_32px_rgba(43,43,43,0.09)]
                "
              >
                {/* Inner core */}
                <div
                  className="
                    h-full rounded-[calc(1.75rem-0.5rem)] p-6 md:p-7
                    bg-white
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]
                    flex flex-col gap-5
                  "
                >
                  {/* En-tête de carte */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${REGION_STYLES[i].dot}`} />
                      <h3 className="font-bold text-[1rem] text-[#2b2b2b] leading-tight">
                        {region.name}
                      </h3>
                    </div>
                    <span
                      className={`
                        flex-shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold
                        border ${REGION_STYLES[i].badge}
                      `}
                    >
                      {region.cities.length} communes
                    </span>
                  </div>

                  {/* Liste des communes */}
                  <ul className="flex flex-col gap-0">
                    {region.cities.map((city) => (
                      <li
                        key={city}
                        className="
                          flex items-center gap-2 py-2
                          border-b border-black/[0.05] last:border-0
                          text-[0.875rem] text-[#3f3f3f] font-medium
                          group-hover:text-[#2b2b2b]
                          transition-colors duration-300
                        "
                      >
                        <ChevronRight
                          size={12}
                          strokeWidth={2.5}
                          className="text-[#f97316] flex-shrink-0"
                        />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bas de section */}
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
              className="
                font-semibold text-[#f97316]
                underline underline-offset-2 decoration-[#f97316]/40
                hover:decoration-[#f97316]
                transition-all duration-300
              "
            >
              Contactez-nous
            </a>{" "}
            — nous étudions chaque demande.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
