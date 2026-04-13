"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Zap,
  Clock,
  Shield,
  ArrowUpRight,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/types";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

/* ─── Constantes de mouvement ───────────────────────────────────────────────── */

/** Courbe ressort — simulant une physique de masse réelle */
const SPRING = [0.32, 0.72, 0, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.88,
      ease: SPRING,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: SPRING, delay: 0.15 },
  },
};

const floatCardVariants = {
  hidden: { opacity: 0, x: 20, y: -8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: SPRING, delay: 0.65 },
  },
};

/* ─── Composant principal ────────────────────────────────────────────────────── */

interface HeroSectionProps {
  dict: Dictionary;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const { hero, nav } = dict;
  const [menuOpen, setMenuOpen] = useState(false);

  /* Liens de navigation */
  const navLinks = [
    { label: nav.services, href: "#services" },
    { label: nav.zones,    href: "#zones"    },
    { label: nav.bornes,   href: "#bornes"   },
    { label: nav.contact,  href: "#contact"  },
  ];

  /* Lignes du titre (séparées par \n dans le dictionnaire) */
  const titleLines = hero.title.split("\n");

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          NAVIGATION FLOTTANTE — "Island" pill détachée du haut
      ════════════════════════════════════════════════════════════════════ */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: SPRING }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
      >
        <nav
          className="
            flex items-center justify-between gap-6
            w-full max-w-5xl
            px-5 py-0 rounded-full
            bg-white/85 backdrop-blur-xl
            ring-1 ring-black/[0.07]
            shadow-[0_4px_28px_rgba(43,43,43,0.09)]
          "
        >
          {/* Logo textuel TF Technics */}
          <a
            href="/"
            className="flex items-center flex-shrink-0 select-none"
          >
            <span className="text-xl font-extrabold tracking-tight leading-none">
              <span style={{ color: "#f97316" }}>TF</span>
              <span style={{ color: "#2b2b2b" }}> technics</span>
            </span>
          </a>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-[13px] font-medium text-[#6b6b6b]
                  hover:text-[#2b2b2b]
                  transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sélecteur de langue + CTA téléphone */}
          <div className="flex items-center gap-2">
            {/* FR / NL toggle */}
            <div className="hidden sm:block">
              <LocaleSwitcher />
            </div>
            <a
              href={`tel:${hero.phone.replace(/\s/g, "")}`}
              className="
                group hidden sm:flex items-center gap-2
                px-4 py-2 rounded-full
                bg-[#2b2b2b] text-white text-[13px] font-semibold
                transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                hover:bg-[#f97316] active:scale-[0.97]
              "
            >
              <Phone size={12} strokeWidth={2.5} />
              {nav.callNow}
            </a>

            {/* Burger mobile — cible tactile 44 px */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="
                md:hidden relative w-11 h-11 rounded-full
                bg-[#2b2b2b]/[0.07] flex items-center justify-center
                transition-colors duration-300
                hover:bg-[#2b2b2b]/[0.12] active:scale-[0.95]
              "
            >
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.3, ease: SPRING }}
                className="absolute"
              >
                <Menu size={18} strokeWidth={2} className="text-[#2b2b2b]" />
              </motion.div>
              <motion.div
                animate={{ rotate: menuOpen ? 0 : -45, opacity: menuOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: SPRING }}
                className="absolute"
              >
                <X size={18} strokeWidth={2} className="text-[#2b2b2b]" />
              </motion.div>
            </button>
          </div>
        </nav>

        {/* ── Menu mobile overlay ── */}
        <motion.div
          initial={false}
          animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.35, ease: SPRING }}
          className="
            absolute top-20 left-4 right-4 rounded-2xl
            bg-white/95 backdrop-blur-2xl
            ring-1 ring-black/[0.07]
            shadow-[0_16px_64px_rgba(43,43,43,0.14)]
            p-5 flex flex-col gap-1
            md:hidden
          "
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 12 }}
              animate={
                menuOpen
                  ? { opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.4, ease: SPRING } }
                  : { opacity: 0, y: 12 }
              }
              className="
                px-4 py-3.5 rounded-xl
                text-[16px] font-semibold text-[#2b2b2b]
                hover:bg-[#2b2b2b]/[0.04]
                transition-colors duration-200
              "
            >
              {link.label}
            </motion.a>
          ))}

          {/* Sélecteur de langue dans le menu mobile */}
          <div className="px-4 py-2">
            <LocaleSwitcher />
          </div>

          <div className="mt-2 pt-3 border-t border-black/[0.06]">
            <a
              href={`tel:${hero.phone.replace(/\s/g, "")}`}
              className="
                flex items-center justify-center gap-2
                w-full px-5 py-4 rounded-full
                bg-[#f97316] text-white font-bold text-[16px]
                shadow-[0_4px_20px_rgba(249,115,22,0.35)]
                active:scale-[0.98] transition-transform duration-200
              "
            >
              <Phone size={16} strokeWidth={2.5} />
              {hero.phone}
            </a>
          </div>
        </motion.div>
      </motion.header>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="
          relative min-h-[100dvh] bg-white overflow-hidden
          flex flex-col justify-center
          pt-28 pb-16 md:pt-32 md:pb-24
        "
      >
        {/* ── Décorations ambiantes (GPU-safe : transform + opacity uniquement) ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(43,43,43,0.035) 0%, transparent 70%)",
          }}
        />

        {/* ── Conteneur principal ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">

            {/* ┌─────────────────────────────────────────────────────────────┐
                │  COLONNE GAUCHE — Bloc typographique                        │
                └─────────────────────────────────────────────────────────────┘ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-7 lg:gap-8"
            >
              {/* Badge eyebrow */}
              <motion.div variants={itemVariants}>
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full px-3.5 py-1.5
                    bg-orange-50 border border-orange-100
                    text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316]
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                  {hero.badge}
                </span>
              </motion.div>

              {/* H1 — taille fluide : réduite sur mobile pour tenir en 2-3 lignes */}
              <motion.h1
                variants={itemVariants}
                className="
                  text-[clamp(2rem,7vw,5.2rem)]
                  font-extrabold leading-[1.06] tracking-[-0.03em]
                  text-[#2b2b2b]
                  text-wrap-balance
                "
              >
                {/* Ligne 1 : "Votre électricien" */}
                <span>{titleLines[0]}</span>
                <br />
                {/* Ligne 2 : "dépanneur à Bruxelles" — accent orange */}
                {titleLines[1] && (
                  <span className="text-[#f97316]">{titleLines[1]}</span>
                )}
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                variants={itemVariants}
                className="
                  text-[1.05rem] sm:text-[1.1rem] leading-relaxed
                  text-[#6b6b6b] max-w-[30rem]
                "
              >
                {hero.subtitle}
              </motion.p>

              {/* ── Boutons CTA ── */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-3"
              >
                {/* CTA primaire — pleine largeur sur mobile, auto sur sm+ */}
                <a
                  href={`tel:${hero.phone.replace(/\s/g, "")}`}
                  className="
                    group relative flex items-center justify-between gap-3
                    w-full sm:w-auto sm:inline-flex
                    pl-5 pr-2 py-3.5 sm:py-2.5 rounded-full
                    bg-[#f97316] text-white font-bold text-[16px] sm:text-[15px]
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    hover:bg-[#ea580c] active:scale-[0.98]
                    shadow-[0_4px_20px_rgba(249,115,22,0.38)]
                    hover:shadow-[0_6px_28px_rgba(249,115,22,0.52)]
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <Phone size={16} strokeWidth={2.5} />
                    {hero.cta}
                  </div>
                  {/* Button-in-Button trailing icon */}
                  <span
                    className="
                      w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/25
                      flex items-center justify-center flex-shrink-0
                      transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                      group-hover:scale-110
                    "
                  >
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </span>
                </a>

                {/* CTA secondaire — pleine largeur sur mobile */}
                <button
                  className="
                    flex items-center justify-center
                    w-full sm:w-auto sm:inline-flex
                    px-6 py-3.5 sm:py-3 rounded-full
                    border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[16px] sm:text-[15px]
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    hover:bg-[#2b2b2b]/[0.04] hover:border-[#2b2b2b]/20
                    active:scale-[0.98]
                  "
                >
                  {hero.ctaSecondary}
                </button>
              </motion.div>

              {/* ── Pilules de confiance ── */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 pt-1"
              >
                {[
                  { icon: <Shield size={12} strokeWidth={2} />,  label: hero.trust.certified },
                  { icon: <Clock  size={12} strokeWidth={2} />,  label: hero.trust.available },
                  { icon: <Zap    size={12} strokeWidth={2} />,  label: hero.trust.speed     },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="
                      inline-flex items-center gap-1.5
                      px-3 py-1.5 rounded-full
                      bg-[#2b2b2b]/[0.05] text-[#2b2b2b]
                      text-[12px] font-medium
                    "
                  >
                    {icon}
                    {label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ┌─────────────────────────────────────────────────────────────┐
                │  COLONNE DROITE — Image Double-Bezel (Doppelrand)           │
                └─────────────────────────────────────────────────────────────┘ */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full"
            >
              {/* Enveloppe externe (outer shell) */}
              <div
                className="
                  relative rounded-[2rem] p-2
                  bg-black/[0.04] ring-1 ring-black/[0.06]
                  shadow-[0_8px_48px_rgba(43,43,43,0.11)]
                "
              >
                {/* Noyau interne (inner core) — rayon calculé: 2rem - 0.5rem */}
                <div
                  className="
                    relative overflow-hidden
                    aspect-[16/9] sm:aspect-[3/4] lg:aspect-[4/5]
                  "
                  style={{ borderRadius: "calc(2rem - 0.5rem)" }}
                >
                  {/* Photographie réelle — électricien professionnel en intervention */}
                  <Image
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85"
                    alt="Électricien professionnel TF Technics en intervention sur tableau électrique à Bruxelles"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Dégradé bas (lisibilité de la carte flottante) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(43,43,43,0.45) 0%, rgba(43,43,43,0.10) 40%, transparent 70%)",
                    }}
                  />

                  {/* Carte flottante bas gauche — statut en temps réel */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: SPRING, delay: 0.9 }}
                    className="
                      absolute bottom-4 left-4 right-4
                      flex items-center gap-3
                      px-4 py-3 rounded-2xl
                      bg-white/92 backdrop-blur-xl
                      shadow-[0_4px_24px_rgba(0,0,0,0.14)]
                      ring-1 ring-white/60
                    "
                  >
                    {/* Indicateur de présence pulsant */}
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-55" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f97316]" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-bold text-[#2b2b2b] leading-tight">
                        Intervention en cours
                      </p>
                      <p className="text-[11px] text-[#6b6b6b] flex items-center gap-1 mt-0.5">
                        <MapPin size={10} strokeWidth={2} />
                        Bruxelles-Ville
                      </p>
                    </div>

                    <div className="flex-shrink-0 text-right">
                      <p className="text-[12px] font-extrabold text-[#f97316] leading-tight">
                        24h/24
                      </p>
                      <p className="text-[10px] text-[#6b6b6b] mt-0.5">7j/7</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Carte flottante haut droite — cachée sur mobile, visible sm+ */}
              <motion.div
                variants={floatCardVariants}
                initial="hidden"
                animate="visible"
                className="
                  hidden sm:block
                  absolute -top-4 right-2 lg:-right-4
                  px-4 py-3.5 rounded-2xl
                  bg-[#2b2b2b] text-white
                  shadow-[0_8px_32px_rgba(43,43,43,0.28)]
                  ring-1 ring-white/[0.08]
                "
              >
                <p className="text-[24px] font-extrabold leading-none tracking-[-0.04em]">
                  &lt;&nbsp;60&nbsp;min
                </p>
                <p className="text-[11px] text-white/55 mt-1 font-medium tracking-wide">
                  Délai d&apos;intervention
                </p>
              </motion.div>

              {/* Carte flottante gauche centrale — nombre d'interventions */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: SPRING, delay: 0.8 }}
                className="
                  absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6
                  hidden md:flex flex-col items-center
                  px-3.5 py-3 rounded-2xl
                  bg-white
                  shadow-[0_4px_24px_rgba(43,43,43,0.12)]
                  ring-1 ring-black/[0.05]
                  gap-0.5
                "
              >
                <p className="text-[20px] font-extrabold text-[#2b2b2b] leading-none tracking-[-0.04em]">
                  2 500<span className="text-[#f97316]">+</span>
                </p>
                <p className="text-[10px] text-[#6b6b6b] font-medium text-center leading-tight">
                  Interventions
                  <br />
                  réalisées
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
