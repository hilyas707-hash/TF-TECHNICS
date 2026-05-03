"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

interface SectionBridgeProps {
  text: string;
  cta: string;
  href: string;
}

export default function SectionBridge({ text, cta, href }: SectionBridgeProps) {
  return (
    <div className="mt-20 flex flex-col items-center gap-7 text-center">

      {/* Ligne qui se dessine depuis le haut */}
      <motion.div
        className="w-px bg-gradient-to-b from-black/[0.07] via-[#f97316]/40 to-[#f97316]/70 origin-top"
        style={{ height: 56 }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.85, ease: SPRING }}
      />

      {/* Texte avec shimmer continu + entrée blur-dissolve */}
      <motion.p
        initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px 0px" }}
        transition={{ duration: 0.85, ease: SPRING, delay: 0.28 }}
        className="bridge-shimmer text-[1.05rem] font-semibold max-w-lg leading-relaxed px-4"
      >
        {text}
      </motion.p>

      {/* Bouton CTA — button-in-button architecture */}
      <motion.a
        href={href}
        initial={{ opacity: 0, y: 10, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px 0px" }}
        transition={{ duration: 0.75, ease: SPRING, delay: 0.48 }}
        className="group inline-flex items-center rounded-full bg-[#2b2b2b] text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#f97316] hover:shadow-[0_8px_28px_rgba(249,115,22,0.38)] active:scale-[0.97]"
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
