"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import SectionBridge from "@/components/ui/SectionBridge";
import { FAQ_ITEMS } from "@/data/faq";

const SPRING = [0.32, 0.72, 0, 1] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration */}
      <div
        aria-hidden
        className="halo-br-md pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* ── Gauche : En-tête sticky ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="lg:col-span-2 lg:sticky lg:top-32 flex flex-col gap-5"
          >
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
              Questions sur votre
              <br />
              <span className="text-[#f97316]">électricien à Bruxelles</span>
            </h2>
            <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-sm">
              Vous ne trouvez pas la réponse à votre question ? Appelez-nous ou
              utilisez notre formulaire de devis.
            </p>

            {/* CTA téléphone */}
            <a
              href="tel:+32483480496"
              className="
                group inline-flex items-center gap-3 w-fit
                px-5 py-3 rounded-full
                border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[14px]
                transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                hover:bg-[#f97316] hover:text-white hover:border-[#f97316]
                active:scale-[0.98]
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
              </span>
              Nous appeler directement
            </a>
          </motion.div>

          {/* ── Droite : Accordéon ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-2"
          >
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`
                    rounded-2xl overflow-hidden
                    ring-1 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${isOpen
                      ? "ring-[#f97316]/30 shadow-[0_4px_24px_rgba(249,115,22,0.08)]"
                      : "ring-black/[0.06] hover:ring-black/[0.10]"
                    }
                  `}
                >
                  {/* Bouton question — h3 pour la hiérarchie SEO, contents = invisible visuellement */}
                  <h3 className="contents">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="
                      w-full flex items-center justify-between gap-4
                      px-5 py-4 text-left
                      bg-white
                      transition-colors duration-300
                    "
                  >
                    <span
                      className={`
                        text-[0.925rem] font-semibold leading-snug
                        transition-colors duration-300
                        ${isOpen ? "text-[#f97316]" : "text-[#2b2b2b]"}
                      `}
                    >
                      {item.question}
                    </span>

                    {/* Icône +/- animée */}
                    <span
                      className={`
                        flex-shrink-0 w-7 h-7 rounded-full
                        flex items-center justify-center
                        transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                        ${isOpen
                          ? "bg-[#f97316] text-white rotate-0"
                          : "bg-[#2b2b2b]/[0.06] text-[#2b2b2b]"
                        }
                      `}
                    >
                      {isOpen
                        ? <Minus size={13} strokeWidth={2.5} />
                        : <Plus  size={13} strokeWidth={2.5} />
                      }
                    </span>
                  </button>
                  </h3>

                  {/* Réponse animée */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: SPRING }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[0.875rem] text-[#6b6b6b] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

        <SectionBridge
          text="Prêt à nous confier votre projet ? On est disponibles maintenant — même ce soir."
          cta="Nous contacter directement"
          href="#contact"
        />

      </div>
    </section>
  );
}
