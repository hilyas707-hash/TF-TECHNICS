"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone, Zap, BatteryCharging, Wrench, PlugZap, HelpCircle } from "lucide-react";
import SectionBridge from "@/components/ui/SectionBridge";
import { FAQ_ITEMS, type FaqItem, type FaqCategory } from "@/data/faq";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

type FilterKey = "all" | FaqCategory;

interface FilterConfig {
  key: FilterKey;
  labelKey: keyof Pick<Dictionary["faq"], "filterAll" | "filterDepannage" | "filterBorne" | "filterRgie" | "filterInstallation" | "filterGeneral">;
  icon: React.ReactNode;
}

const FILTERS: FilterConfig[] = [
  { key: "all",          labelKey: "filterAll",          icon: <HelpCircle   size={14} strokeWidth={1.8} /> },
  { key: "depannage",    labelKey: "filterDepannage",    icon: <Zap           size={14} strokeWidth={1.8} /> },
  { key: "borne",        labelKey: "filterBorne",        icon: <BatteryCharging size={14} strokeWidth={1.8} /> },
  { key: "rgie",         labelKey: "filterRgie",         icon: <Wrench        size={14} strokeWidth={1.8} /> },
  { key: "installation", labelKey: "filterInstallation", icon: <PlugZap       size={14} strokeWidth={1.8} /> },
  { key: "general",      labelKey: "filterGeneral",      icon: <HelpCircle   size={14} strokeWidth={1.8} /> },
];

interface Props {
  dict: Dictionary;
  items?: FaqItem[];
  locale?: string;
}

export default function FaqSection({ dict, items, locale }: Props) {
  const faqItems = items ?? FAQ_ITEMS;
  const { faq, contact } = dict;
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [openIndex,    setOpenIndex]    = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? faqItems
    : faqItems.filter((item) => item.category === activeFilter);

  function selectFilter(key: FilterKey) {
    setActiveFilter(key);
    setOpenIndex(null);
  }

  return (
    <section id="faq" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="halo-br-md pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-10 md:mb-12 flex flex-col gap-4 max-w-2xl"
        >
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
            {faq.sectionTitle}
          </h2>
          <p className="text-[1rem] text-[#6b6b6b] leading-relaxed">
            {faq.sectionSubtitle}
          </p>
        </motion.div>

        {/* Filtres catégories */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.1 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => selectFilter(f.key)}
                className={`
                  inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold
                  transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                  ${isActive
                    ? "bg-[#2b2b2b] text-white shadow-[0_4px_16px_rgba(43,43,43,0.22)]"
                    : "bg-[#f5f5f5] text-[#6b6b6b] hover:bg-[#ebebeb] hover:text-[#2b2b2b]"
                  }
                `}
              >
                <span className={isActive ? "text-[#f97316]" : ""}>{f.icon}</span>
                {faq[f.labelKey]}
                <span className={`
                  ml-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full
                  ${isActive ? "bg-white/15 text-white" : "bg-[#2b2b2b]/[0.07] text-[#6b6b6b]"}
                `}>
                  {f.key === "all"
                    ? faqItems.length
                    : faqItems.filter((i) => i.category === f.key).length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grille accordéons + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Accordéons */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: SPRING }}
                className="flex flex-col gap-2"
              >
                {filtered.map((item, i) => {
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
                      <h3 className="contents">
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white transition-colors duration-300"
                        >
                          <span className={`text-[0.925rem] font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-[#f97316]" : "text-[#2b2b2b]"}`}>
                            {item.question}
                          </span>
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "bg-[#f97316] text-white" : "bg-[#2b2b2b]/[0.06] text-[#2b2b2b]"}`}>
                            {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
                          </span>
                        </button>
                      </h3>

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
            </AnimatePresence>
          </div>

          {/* CTA sticky */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.15 }}
            className="lg:col-span-2 lg:sticky lg:top-32 flex flex-col gap-5"
          >
            <div className="rounded-[1.75rem] p-2 bg-[#2b2b2b] ring-1 ring-white/[0.06] shadow-[0_8px_32px_rgba(43,43,43,0.18)]">
              <div className="rounded-[calc(1.75rem-0.5rem)] p-7 bg-[#2b2b2b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/20 flex items-center justify-center">
                  <Phone size={17} strokeWidth={2} className="text-[#f97316]" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[1.05rem] font-bold text-white leading-tight">
                    {faq.sectionSubtitle}
                  </p>
                </div>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="
                    group inline-flex items-center gap-3 w-fit
                    px-5 py-3 rounded-full
                    bg-[#f97316] text-white font-bold text-[14px]
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    hover:bg-[#ea580c] active:scale-[0.98]
                    shadow-[0_4px_16px_rgba(249,115,22,0.38)]
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  {faq.callCta}
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        <SectionBridge
          text={faq.bridgeText}
          cta={faq.bridgeCta}
          href={locale === "nl" ? "/nl/contact" : "/contact"}
        />

      </div>
    </section>
  );
}
