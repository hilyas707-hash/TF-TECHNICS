"use client";

import { motion } from "framer-motion";
import { Wrench, Phone, Mail, Clock } from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4 overflow-hidden relative">

      {/* Fonds dégradés */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 55%)" }} />

      {/* Grille décorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center gap-8">

        {/* Icône animée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-3xl bg-[#f97316] flex items-center justify-center shadow-[0_8px_48px_rgba(249,115,22,0.45)]">
            <motion.div animate={{ rotate: [0, -15, 15, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
              <Wrench size={44} strokeWidth={1.6} className="text-white" />
            </motion.div>
          </div>
          <span className="absolute inset-0 rounded-3xl bg-[#f97316]/30 animate-ping" style={{ animationDuration: "2s" }} />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.2 }}
        >
          <span className="text-[2rem] font-extrabold text-[#f97316] tracking-[-0.04em]">tf</span>
          <span className="text-[2rem] font-extrabold text-white tracking-[-0.04em]">-Technics</span>
        </motion.div>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: SPRING, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-white tracking-[-0.04em] leading-[1.05]">
            Site en maintenance
          </h1>
          <p className="text-[1rem] text-white/50 leading-relaxed max-w-sm mx-auto">
            Nous améliorons notre site pour mieux vous servir. De retour très bientôt.
          </p>
        </motion.div>

        {/* Barre de progression */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.45 }}
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
              transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              className="h-full bg-gradient-to-r from-[#f97316] to-[#fdba74] rounded-full"
            />
          </div>
        </motion.div>

        {/* Contact urgence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.55 }}
          className="w-full max-w-sm rounded-2xl bg-white/[0.05] ring-1 ring-white/[0.08] p-5 flex flex-col gap-3"
        >
          <p className="text-[0.78rem] text-white/40 uppercase tracking-[0.15em] font-semibold">
            Urgence électrique ?
          </p>
          <a href="tel:+32483480496" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#f97316]/15 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
              <Phone size={15} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[0.75rem] text-white/40">Appelez-nous 24h/24</p>
              <p className="text-[0.95rem] font-bold text-white group-hover:text-[#f97316] transition-colors duration-300">+32 483 48 04 96</p>
            </div>
          </a>
          <a href="mailto:info@tftechnics.be" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/40 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
              <Mail size={15} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[0.75rem] text-white/40">Par email</p>
              <p className="text-[0.95rem] font-bold text-white/70 group-hover:text-white transition-colors duration-300">info@tftechnics.be</p>
            </div>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[0.72rem] text-white/20"
        >
          © {new Date().getFullYear()} TF Technics · Électricien dépanneur Bruxelles
        </motion.p>

      </div>
    </div>
  );
}
