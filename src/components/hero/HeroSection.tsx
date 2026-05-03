"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Clock, Shield, Zap, ArrowUpRight, MapPin, Menu, X, Star, ChevronDown, BatteryCharging, Wrench, PlugZap, ScanSearch } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

const SPRING = [0.32, 0.72, 0, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: SPRING } },
};

const STATS = [
  { value: "< 60 min", label: "Délai moyen"      },
  { value: "24h/24",   label: "Disponibilité"    },
  { value: "0 €",      label: "Devis gratuit"    },
  { value: "2 ans",    label: "Garantie",        gold: false },
];

const SERVICES_NAV: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Dépannage d'urgence",    href: "/services/depannage-urgence",      Icon: Zap            },
  { label: "Borne de recharge",      href: "/services/borne-recharge",         Icon: BatteryCharging },
  { label: "Mise en conformité",     href: "/services/renovation-conformite",  Icon: Wrench         },
  { label: "Installation électrique",href: "/services/installation-electrique",Icon: PlugZap        },
  { label: "Diagnostic électrique",  href: "/services/diagnostic-electrique",  Icon: ScanSearch     },
];

interface HeroSectionProps { dict: Dictionary }

export default function HeroSection({ dict }: HeroSectionProps) {
  const { hero, nav } = dict;
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: nav.zones,   href: "#zones"   },
    { label: nav.bornes,  href: "#bornes"  },
    { label: "Tarifs",    href: "/tarifs"  },
    { label: "Blog",      href: "/blog"    },
    { label: nav.contact, href: "#contact" },
  ];
  const titleLines = hero.title.split("\n");

  return (
    <>
      {/* ═══════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════ */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: SPRING }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
      >
        <nav className="flex items-center justify-between gap-6 w-full max-w-5xl px-5 py-0 rounded-full bg-white/85 backdrop-blur-xl ring-1 ring-black/[0.07] shadow-[0_4px_28px_rgba(43,43,43,0.09)]">
          <a href="/" className="flex items-center flex-shrink-0 select-none py-2">
            <Image src="/logo.svg" alt="TF Technics" width={148} height={32} priority className="h-8 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-5">

            {/* ── Dropdown Services ── */}
            <div className="relative group/svc py-4">
              <button className="flex items-center gap-1 text-[13px] font-medium text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors duration-300">
                Services
                <ChevronDown size={11} strokeWidth={2.5} className="transition-transform duration-300 group-hover/svc:rotate-180" />
              </button>

              {/* Panel — pt-2 crée un pont invisible pour ne pas fermer au survol */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-max opacity-0 pointer-events-none group-hover/svc:opacity-100 group-hover/svc:pointer-events-auto transition-all duration-200 pt-2">
                <div className="rounded-2xl bg-white ring-1 ring-black/[0.07] shadow-[0_8px_40px_rgba(43,43,43,0.13)] p-2 min-w-[240px] flex flex-col gap-0.5">
                  {SERVICES_NAV.map(({ label, href, Icon }) => (
                    <a key={href} href={href}
                      className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f97316]/[0.06] transition-colors duration-200"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                        <Icon size={14} strokeWidth={2} />
                      </span>
                      <span className="text-[13px] font-semibold text-[#2b2b2b] group-hover/item:text-[#f97316] transition-colors duration-200">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-[13px] font-medium text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block"><LocaleSwitcher /></div>
            <a href={`tel:${hero.phone.replace(/\s/g, "")}`}
              className="group hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#2b2b2b] text-white text-[13px] font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#f97316] active:scale-[0.97]">
              <Phone size={12} strokeWidth={2.5} />{nav.callNow}
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
              className="md:hidden relative w-11 h-11 rounded-full bg-[#2b2b2b]/[0.07] flex items-center justify-center transition-colors hover:bg-[#2b2b2b]/[0.12] active:scale-[0.95]">
              <motion.div animate={{ rotate: menuOpen ? 45 : 0, opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.3, ease: SPRING }} className="absolute">
                <Menu size={18} strokeWidth={2} className="text-[#2b2b2b]" />
              </motion.div>
              <motion.div animate={{ rotate: menuOpen ? 0 : -45, opacity: menuOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: SPRING }} className="absolute">
                <X size={18} strokeWidth={2} className="text-[#2b2b2b]" />
              </motion.div>
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        <motion.div
          initial={false}
          animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.35, ease: SPRING }}
          className="absolute top-20 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-2xl ring-1 ring-black/[0.07] shadow-[0_16px_64px_rgba(43,43,43,0.14)] p-5 flex flex-col gap-1 md:hidden"
        >
          {/* Services accordéon mobile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={menuOpen ? { opacity: 1, y: 0, transition: { delay: 0, duration: 0.4, ease: SPRING } } : { opacity: 0, y: 12 }}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-semibold text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.04] transition-colors"
            >
              Services
              <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-2 flex flex-col gap-0.5 mt-1">
                {SERVICES_NAV.map(({ label, href, Icon }) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#6b6b6b] hover:text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.04] transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                      <Icon size={13} strokeWidth={2} />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {navLinks.map((l, i) => (
            <motion.a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 12 }}
              animate={menuOpen ? { opacity: 1, y: 0, transition: { delay: 0.06 * (i + 1), duration: 0.4, ease: SPRING } } : { opacity: 0, y: 12 }}
              className="px-4 py-3.5 rounded-xl text-[16px] font-semibold text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.04] transition-colors">
              {l.label}
            </motion.a>
          ))}
          <div className="px-4 py-2"><LocaleSwitcher /></div>
          <div className="mt-2 pt-3 border-t border-black/[0.06]">
            <a href={`tel:${hero.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-full bg-[#f97316] text-white font-bold text-[16px] shadow-[0_4px_20px_rgba(249,115,22,0.35)] active:scale-[0.98] transition-transform">
              <Phone size={16} strokeWidth={2.5} />{hero.phone}
            </a>
          </div>
        </motion.div>
      </motion.header>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">

        {/* Image Ken Burns */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero.png"
            alt="Électricien TF Technics en intervention à Bruxelles"
            fill
            priority
            className="object-cover object-top animate-ken-burns"
            sizes="100vw"
          />
        </div>

        {/* Overlay multicouche */}
        <div aria-hidden className="hero-overlay-top absolute inset-0 pointer-events-none" />
        <div aria-hidden className="hero-overlay-side absolute inset-0 pointer-events-none" />
        {/* Halo orange bas-gauche — signature marque */}
        <div aria-hidden className="hero-halo absolute pointer-events-none bottom-0 left-0 w-[700px] h-[400px]" />

        {/* Carte haut droite — délai */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.9, ease: SPRING, delay: 1.2 }}
          className="absolute top-28 right-5 md:top-32 md:right-10 z-10 hidden sm:block"
        >
          <div className="px-4 py-3.5 rounded-2xl bg-black/40 backdrop-blur-xl ring-1 ring-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <p className="text-[28px] font-extrabold leading-none tracking-[-0.04em] text-white">&lt;&nbsp;60&nbsp;min</p>
            <p className="text-[11px] text-white/80 mt-1.5 font-medium tracking-wider uppercase">Délai d&apos;intervention</p>
          </div>
        </motion.div>

        {/* Carte milieu droite — garantie */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: SPRING, delay: 1.45 }}
          className="absolute top-[46%] -translate-y-1/2 right-5 md:right-10 z-10 hidden md:block"
        >
          <div className="px-4 py-3.5 rounded-2xl bg-black/40 backdrop-blur-xl ring-1 ring-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <p className="text-[28px] font-extrabold leading-none tracking-[-0.04em] text-white">2 ans</p>
            <p className="text-[11px] text-white/80 mt-1.5 font-medium tracking-wider uppercase">Garantie travaux</p>
          </div>
        </motion.div>

        {/* ── Contenu principal ancré en bas ── */}
        <div className="relative z-10 mt-auto w-full">

          {/* Bloc texte */}
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 pt-0 pb-6">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-5 max-w-[42rem]">

              {/* Badge live */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-white/[0.08] backdrop-blur-md ring-1 ring-white/[0.15] text-[11px] uppercase tracking-[0.22em] font-semibold text-white/85">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
                  </span>
                  {hero.badge}
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1 variants={fadeUp}
                className="text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
                {titleLines[0]}
                <br />
                {titleLines[1] && (
                  <span className="text-[#f97316]">{titleLines[1]}</span>
                )}
              </motion.h1>

              {/* Sous-titre */}
              <motion.p variants={fadeUp} className="text-[1rem] sm:text-[1.1rem] leading-relaxed text-white/80 max-w-[30rem]">
                {hero.subtitle}
              </motion.p>

              {/* CTA */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
                <a href={`tel:${hero.phone.replace(/\s/g, "")}`}
                  className="group relative flex items-center justify-between gap-3 w-full sm:w-auto sm:inline-flex pl-5 pr-2 py-3.5 sm:py-3 rounded-full bg-[#f97316] text-white font-bold text-[15px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#ea580c] active:scale-[0.98] shadow-[0_4px_32px_rgba(249,115,22,0.55)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.7)]">
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} strokeWidth={2.5} />{hero.cta}
                  </div>
                  <span className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </span>
                </a>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: <Shield size={11} strokeWidth={2} />, label: hero.trust.certified },
                    { icon: <Clock  size={11} strokeWidth={2} />, label: hero.trust.available },
                    { icon: <Zap    size={11} strokeWidth={2} />, label: hero.trust.speed     },
                  ].map(({ icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.12] backdrop-blur-md ring-1 ring-white/[0.18] text-white/90 text-[12px] font-medium">
                      {icon}{label}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Phrase d'engagement — texte plein pour crawlers IA et voix */}
              <motion.p variants={fadeUp} className="text-[0.75rem] leading-relaxed text-white/55 max-w-[34rem]">
                TF Technics intervient pour tout dépannage électrique urgent à Bruxelles,
                en Brabant Wallon et en Flandre dans un délai maximum de 60 minutes.
                Disponible 24h/24 et 7j/7 au{" "}
                <span className="font-semibold text-white/75">{hero.phone}</span>
                {" "}— y compris les week-ends et jours fériés belges.
              </motion.p>

            </motion.div>
          </div>

          {/* ── Barre de stats bas de page ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: SPRING, delay: 1.1 }}
            className="w-full border-t border-white/[0.08] bg-black/50 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16">
              <div className="flex items-stretch divide-x divide-white/[0.08] overflow-x-auto scrollbar-none">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col items-center justify-center px-6 py-4 flex-1 min-w-[90px] gap-0.5">
                    <span className={`text-[1.1rem] font-extrabold tracking-[-0.03em] leading-none ${s.gold ? "text-[#dbb82d]" : "text-white"}`}>
                      {s.value}
                    </span>
                    <span className="text-[10px] text-white/65 font-medium uppercase tracking-wider whitespace-nowrap">
                      {s.label}
                    </span>
                  </div>
                ))}
                <div className="hidden lg:flex items-center justify-center px-6 py-4 flex-1 gap-1.5">
                  <MapPin size={11} strokeWidth={2} className="text-white/60" />
                  <span className="text-[11px] text-white/65 font-medium whitespace-nowrap">
                    Bruxelles · Flandre · Brabant Wallon
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
