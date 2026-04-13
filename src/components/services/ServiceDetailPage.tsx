"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Zap, PlugZap, BatteryCharging, Wrench, ScanSearch,
  Phone, ArrowUpRight, ArrowLeft, CheckCircle2,
  Plus, Minus, FileText,
} from "lucide-react";
import { useState } from "react";
import type { ServiceData } from "@/data/services";

const SPRING = [0.32, 0.72, 0, 1] as const;

/* ─── Map clé → composant icône ─────────────────────────────────────────── */
const ICON_MAP = {
  zap:     <Zap             size={24} strokeWidth={1.8} />,
  plugzap: <PlugZap         size={24} strokeWidth={1.8} />,
  battery: <BatteryCharging size={24} strokeWidth={1.8} />,
  wrench:  <Wrench          size={24} strokeWidth={1.8} />,
  scan:    <ScanSearch      size={24} strokeWidth={1.8} />,
};

const PHONE = "+32 XXX XX XX XX"; // ← à remplacer par le vrai numéro

interface Props { service: ServiceData }

export default function ServiceDetailPage({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const icon = ICON_MAP[service.iconKey];

  const titleLines = service.heroTitle.split("\n");

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navbar minimaliste ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: SPRING }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
      >
        <nav className="flex items-center justify-between gap-6 w-full max-w-5xl px-5 py-3 rounded-full bg-white/85 backdrop-blur-xl ring-1 ring-black/[0.07] shadow-[0_4px_28px_rgba(43,43,43,0.09)]">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors duration-300"
            >
              <ArrowLeft size={14} strokeWidth={2.5} />
              Accueil
            </Link>
            <span className="text-[#2b2b2b]/20">/</span>
            <span className="text-[13px] font-semibold text-[#2b2b2b] truncate max-w-[200px]">
              {service.title}
            </span>
          </div>

          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316] text-white text-[13px] font-bold hover:bg-[#ea580c] transition-all duration-400 shadow-[0_2px_10px_rgba(249,115,22,0.38)]"
          >
            <Phone size={12} strokeWidth={2.5} />
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </nav>
      </motion.header>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.07) 0%, transparent 65%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Gauche */}
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: SPRING }}
              className="flex flex-col gap-6"
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                {service.badge}
              </span>

              {/* Titre */}
              <h1 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#2b2b2b]">
                {titleLines.map((line, i) =>
                  i === 1
                    ? <span key={i} className="text-[#f97316]">{line}<br /></span>
                    : <span key={i}>{line}<br /></span>
                )}
              </h1>

              <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-md">
                {service.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(249,115,22,0.38)] hover:bg-[#ea580c] hover:shadow-[0_6px_28px_rgba(249,115,22,0.52)] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <div className="flex items-center gap-2.5"><Phone size={15} strokeWidth={2.5} /> Appeler maintenant</div>
                  <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-500">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>
                </a>

                <Link
                  href="/#devis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[15px] hover:bg-[#2b2b2b]/[0.04] hover:border-[#2b2b2b]/20 active:scale-[0.98] transition-all duration-500"
                >
                  <FileText size={15} strokeWidth={2} /> Demander un devis
                </Link>
              </div>
            </motion.div>

            {/* Droite — Image Double-Bezel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              transition={{ duration: 1.1, ease: SPRING, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] p-2 bg-black/[0.04] ring-1 ring-black/[0.06] shadow-[0_8px_48px_rgba(43,43,43,0.11)]">
                <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4]" style={{ borderRadius: "calc(2rem - 0.5rem)" }}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(43,43,43,0.35) 0%, transparent 55%)" }} />

                  {/* Badge service flottant */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: SPRING, delay: 0.8 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/92 backdrop-blur-xl ring-1 ring-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#f97316] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.40)]">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#2b2b2b]">{service.title}</p>
                      <p className="text-[11px] text-[#6b6b6b]">TF Technics · Agréé AREI</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-[11px] font-extrabold text-[#f97316]">Gratuit</p>
                      <p className="text-[10px] text-[#6b6b6b]">Devis & dépl.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f8f8f8] py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="text-[1.1rem] md:text-[1.2rem] text-[#3f3f3f] leading-relaxed font-medium"
          >
            {service.intro}
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          AVANTAGES (grille Bento 3 colonnes)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-10 flex flex-col gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              Pourquoi nous choisir
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.08]">
              Ce que vous obtenez avec TF Technics
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.07 }}
              >
                <div className="group h-full rounded-[1.5rem] p-1.5 bg-black/[0.025] ring-1 ring-black/[0.06] hover:ring-[#f97316]/25 hover:shadow-[0_8px_32px_rgba(43,43,43,0.08)] transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-white p-5 flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] group-hover:scale-110 transition-transform duration-400">
                      <CheckCircle2 size={16} strokeWidth={2} />
                    </div>
                    <h3 className="text-[0.95rem] font-bold text-[#2b2b2b] leading-tight">{b.title}</h3>
                    <p className="text-[0.85rem] text-[#6b6b6b] leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROCESSUS (étapes numérotées)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#2b2b2b] py-20 md:py-28 overflow-hidden relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.10) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-12 text-center flex flex-col items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#f97316]/15 border border-[#f97316]/25 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316]">
              Comment ça se passe
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
              Le déroulement de votre intervention
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.1 }}
              >
                <div className="group h-full rounded-[1.5rem] p-1.5 bg-white/[0.05] ring-1 ring-white/[0.08] hover:ring-[#f97316]/30 hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)] transition-all duration-400">
                  <div className="h-full rounded-[calc(1.5rem-0.375rem)] bg-white/[0.04] p-6 flex flex-col gap-4">
                    <span className="text-[2.5rem] font-extrabold text-[#f97316]/30 leading-none tracking-[-0.05em]">
                      {step.number}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[0.95rem] font-bold text-white leading-tight">{step.title}</h3>
                      <p className="text-[0.83rem] text-white/50 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ spécifique au service
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-10 flex flex-col gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              Questions fréquentes
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.08]">
              Vos questions sur {service.title.toLowerCase()}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-2">
            {service.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: SPRING, delay: i * 0.06 }}
                  className={`rounded-2xl overflow-hidden ring-1 transition-all duration-400 ${isOpen ? "ring-[#f97316]/30 shadow-[0_4px_20px_rgba(249,115,22,0.07)]" : "ring-black/[0.07]"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white"
                  >
                    <span className={`text-[0.925rem] font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-[#f97316]" : "text-[#2b2b2b]"}`}>
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-400 ${isOpen ? "bg-[#f97316] text-white" : "bg-[#2b2b2b]/[0.06] text-[#2b2b2b]"}`}>
                      {isOpen ? <Minus size={13} strokeWidth={2.5}/> : <Plus size={13} strokeWidth={2.5}/>}
                    </span>
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: SPRING }}
                    >
                      <p className="px-5 pb-5 text-[0.875rem] text-[#6b6b6b] leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA FINAL — Urgence ou Devis
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#fff7ed] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#f97316] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(249,115,22,0.40)]">
            {icon}
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.1]">
            Prêt à passer à l&apos;action ?
          </h2>
          <p className="text-[1rem] text-[#6b6b6b] max-w-md leading-relaxed">
            Appelez-nous pour une intervention immédiate ou remplissez notre formulaire
            pour recevoir un devis gratuit sous 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(249,115,22,0.38)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-500"
            >
              <div className="flex items-center gap-2.5"><Phone size={15} strokeWidth={2.5}/> Appeler maintenant</div>
              <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-500">
                <ArrowUpRight size={14} strokeWidth={2.5}/>
              </span>
            </a>
            <Link
              href="/#devis"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[15px] hover:bg-[#2b2b2b]/[0.04] active:scale-[0.98] transition-all duration-400"
            >
              <FileText size={15} strokeWidth={2}/> Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
