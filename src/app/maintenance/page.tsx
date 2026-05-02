"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4 overflow-hidden relative">

      {/* Image hero en fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="TF Technics"
          fill
          priority
          className="object-cover object-top scale-75 origin-top"
          sizes="100vw"
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-[#1a1a1a]/80" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.15) 0%, transparent 60%)" }} />
      </div>

      {/* Grille décorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center gap-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SPRING }}
        >
          <Image
            src="/logo.svg"
            alt="TF Technics"
            width={160}
            height={36}
            className="h-10 w-auto brightness-0 invert"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: SPRING, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#f97316]/20 border border-[#f97316]/30"
        >
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316]">
            En maintenance
          </span>
        </motion.div>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: SPRING, delay: 0.25 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] font-extrabold text-white tracking-[-0.04em] leading-[1.04]">
            Site en cours
            <br />
            <span className="text-[#f97316]">d&apos;amélioration</span>
          </h1>
          <p className="text-[1rem] text-white/50 leading-relaxed max-w-sm mx-auto">
            Nous travaillons pour vous offrir une meilleure expérience. De retour très bientôt.
          </p>
        </motion.div>

        {/* Barre de progression */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.4 }}
          className="w-full max-w-xs"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[0.75rem] text-white/30 font-medium">En cours...</span>
            <span className="text-[0.75rem] text-[#f97316] font-bold flex items-center gap-1.5">
              <Clock size={11} strokeWidth={2.5} /> Bientôt disponible
            </span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.9 }}
              className="h-full bg-gradient-to-r from-[#f97316] to-[#fdba74] rounded-full"
            />
          </div>
        </motion.div>

        {/* Contact urgence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.5 }}
          className="w-full max-w-sm rounded-2xl bg-white/[0.06] backdrop-blur-sm ring-1 ring-white/[0.10] p-5 flex flex-col gap-3"
        >
          <p className="text-[0.78rem] text-white/40 uppercase tracking-[0.15em] font-semibold">
            Urgence électrique ?
          </p>
          <a href="tel:+32483480496" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#f97316]/20 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
              <Phone size={15} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[0.75rem] text-white/40">Appelez-nous 24h/24</p>
              <p className="text-[0.95rem] font-bold text-white group-hover:text-[#f97316] transition-colors duration-300">
                +32 483 48 04 96
              </p>
            </div>
          </a>
          <a href="mailto:info@tftechnics.be" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/40 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
              <Mail size={15} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[0.75rem] text-white/40">Par email</p>
              <p className="text-[0.95rem] font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                info@tftechnics.be
              </p>
            </div>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[0.72rem] text-white/20"
        >
          © {new Date().getFullYear()} TF Technics SRL · Wemmel · Bruxelles
        </motion.p>

      </div>
    </div>
  );
}
