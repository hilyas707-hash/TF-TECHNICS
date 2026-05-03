"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

interface SectionBridgeProps {
  text: string;
  cta: string;
  href: string;
}

export default function SectionBridge({ text, cta, href }: SectionBridgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const words = text.split(" ");
  /* Le bouton attend que tous les mots soient apparus */
  const ctaDelay = Math.min(words.length * 0.06 + 0.4, 1.4);

  return (
    <div ref={ref} className="mt-20 flex flex-col items-center gap-7 text-center">

      {/* Ligne qui se dessine depuis le haut */}
      <motion.div
        className="w-px bg-gradient-to-b from-black/[0.07] via-[#f97316]/40 to-[#f97316]/70 origin-top"
        style={{ height: 56 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.85, ease: SPRING }}
      />

      {/* Texte : chaque mot s'envole depuis le bas et rejoint sa place */}
      <p className="text-[1.05rem] font-semibold max-w-lg leading-relaxed px-4 text-[#2b2b2b] flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.1em]">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.55,
              ease: SPRING,
              delay: 0.28 + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>

      {/* Bouton CTA — button-in-button, apparaît après les mots */}
      <motion.a
        href={href}
        className="group inline-flex items-center rounded-full bg-[#2b2b2b] text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#f97316] hover:shadow-[0_8px_28px_rgba(249,115,22,0.38)] active:scale-[0.97]"
        initial={{ opacity: 0, y: 10, scale: 0.92 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: SPRING, delay: ctaDelay }}
      >
        <span className="pl-6 pr-3 py-3 text-[13px] font-bold tracking-wide whitespace-nowrap">
          {cta}
        </span>
        <span className="mr-1.5 w-7 h-7 rounded-full bg-white/[0.12] flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[3px] group-hover:bg-white/[0.22]">
          <ChevronDown size={12} strokeWidth={2.5} />
        </span>
      </motion.a>

    </div>
  );
}
