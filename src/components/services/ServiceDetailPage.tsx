"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap, PlugZap, BatteryCharging, Wrench, ScanSearch,
  Phone, ArrowUpRight, ArrowLeft, CheckCircle2,
  Plus, Minus, FileText, AlertTriangle, Euro, ExternalLink,
} from "lucide-react";
import { useState } from "react";
import type { ServiceData } from "@/data/services";
import { SERVICES_DATA } from "@/data/services";

const SPRING = [0.32, 0.72, 0, 1] as const;

const ICON_MAP = {
  zap:     <Zap             size={22} strokeWidth={1.8} />,
  plugzap: <PlugZap         size={22} strokeWidth={1.8} />,
  battery: <BatteryCharging size={22} strokeWidth={1.8} />,
  wrench:  <Wrench          size={22} strokeWidth={1.8} />,
  scan:    <ScanSearch      size={22} strokeWidth={1.8} />,
};

const ICON_MAP_LG = {
  zap:     <Zap             size={28} strokeWidth={1.6} />,
  plugzap: <PlugZap         size={28} strokeWidth={1.6} />,
  battery: <BatteryCharging size={28} strokeWidth={1.6} />,
  wrench:  <Wrench          size={28} strokeWidth={1.6} />,
  scan:    <ScanSearch      size={28} strokeWidth={1.6} />,
};

const PHONE = "+32 483 48 04 96";

interface Props { service: ServiceData }

export default function ServiceDetailPage({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const icon    = ICON_MAP[service.iconKey];
  const iconLg  = ICON_MAP_LG[service.iconKey];

  const titleLines = service.heroTitle.split("\n");

  const related = SERVICES_DATA
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
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

      {/* ════════════════════════════════════════════════════════════════════════
          HERO — texte + illustration (dépannage)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(249,115,22,0.08) 0%, transparent 60%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0f0f0] to-transparent"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: SPRING }}
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              {service.badge}
            </span>

            {/* Titre dramatique */}
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#2b2b2b] max-w-3xl">
              {titleLines.map((line, i) =>
                i === 1
                  ? <span key={i} className="text-[#f97316]">{line}<br /></span>
                  : <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
              )}
            </h1>

            <p className="text-[1.1rem] md:text-[1.2rem] text-[#6b6b6b] leading-relaxed max-w-2xl">
              {service.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3.5 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_24px_rgba(249,115,22,0.42)] hover:bg-[#ea580c] hover:shadow-[0_8px_32px_rgba(249,115,22,0.55)] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="flex items-center gap-2.5"><Phone size={15} strokeWidth={2.5} /> Appeler maintenant</div>
                <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[15px] hover:bg-[#2b2b2b]/[0.04] hover:border-[#2b2b2b]/20 active:scale-[0.98] transition-all duration-500"
              >
                <FileText size={15} strokeWidth={2} /> Demander un devis
              </Link>
            </div>

            {/* Pilules de réassurance */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Intervention < 60 min", "24h/24 – 7j/7", "Assuré RC Pro", "Devis gratuit"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-[#f5f5f5] border border-[#ebebeb] text-[12px] font-semibold text-[#4b4b4b]">
                  <CheckCircle2 size={11} strokeWidth={2.5} className="text-[#f97316]" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          INTRO
      ════════════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════════════
          PROBLÈMES — "Ces situations vous parlent ?"
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1e1e1e] py-20 md:py-28 overflow-hidden relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.08) 0%, transparent 55%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-12 flex flex-col items-start gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#f97316]/15 border border-[#f97316]/25 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316]">
              <AlertTriangle size={11} strokeWidth={2.5} />
              Situations fréquentes
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
              Ces situations vous parlent&nbsp;?
            </h2>
            <p className="text-[0.95rem] text-white/75 max-w-lg leading-relaxed">
              Vous n&apos;êtes pas seul. Voici les cas les plus fréquents pour lesquels nos clients font appel à TF Technics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.08 }}
                className="group rounded-2xl p-1 bg-white/[0.04] ring-1 ring-white/[0.08] hover:ring-[#f97316]/30 hover:bg-white/[0.06] transition-all duration-400"
              >
                <div className="rounded-[calc(1rem-0.25rem)] p-6 flex flex-col gap-3 h-full">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[#f97316]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#f97316] text-[11px] font-extrabold">{i + 1}</span>
                    </div>
                    <h3 className="text-[0.95rem] font-bold text-white leading-snug">{problem.title}</h3>
                  </div>
                  <p className="text-[0.85rem] text-white/75 leading-relaxed pl-9">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: SPRING, delay: 0.35 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3 rounded-full bg-[#f97316] text-white font-bold text-[14px] shadow-[0_4px_20px_rgba(249,115,22,0.38)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-500"
            >
              <div className="flex items-center gap-2.5"><Phone size={14} strokeWidth={2.5} /> Appelez-nous maintenant</div>
              <span className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-500">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          AVANTAGES (grille Bento 3 colonnes)
      ════════════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════════════
          TARIFS — transparence des prix
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-orange-50 py-16 md:py-20 border-y border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#f97316]/15 border border-[#f97316]/25 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
                <Euro size={11} strokeWidth={2.5} />
                Tarifs
              </span>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.1]">
                Transparence totale sur les prix
              </h2>
              <p className="text-[0.95rem] text-[#6b6b6b] font-medium leading-relaxed">
                {service.pricing.tagline}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {service.pricing.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: SPRING, delay: i * 0.07 }}
                  className="flex items-start gap-3 rounded-xl bg-white border border-orange-100 px-5 py-3.5"
                >
                  <CheckCircle2 size={16} strokeWidth={2} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                  <span className="text-[0.88rem] text-[#3f3f3f] leading-relaxed font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-[0.8rem] text-[#9b9b9b] font-medium">
              * Les prix sont indicatifs et confirmés avant toute intervention. Devis gratuit et sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          PROCESSUS (étapes numérotées)
      ════════════════════════════════════════════════════════════════════════ */}
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
                      <p className="text-[0.83rem] text-white/75 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FAQ spécifique au service
      ════════════════════════════════════════════════════════════════════════ */}
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
                  transition={{ duration: 0.5, ease: SPRING, delay: i * 0.05 }}
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
                      {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
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

      {/* ════════════════════════════════════════════════════════════════════════
          SERVICES CONNEXES
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f8f8f8] py-16 md:py-20 border-t border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: SPRING }}
            className="mb-8 flex flex-col gap-1.5"
          >
            <h2 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-extrabold tracking-[-0.025em] text-[#2b2b2b]">
              Nos autres services
            </h2>
            <p className="text-[0.88rem] text-[#6b6b6b]">
              TF Technics couvre tous vos besoins électriques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: SPRING, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-4 h-full rounded-2xl p-5 bg-white ring-1 ring-black/[0.07] hover:ring-[#f97316]/30 hover:shadow-[0_6px_28px_rgba(43,43,43,0.08)] transition-all duration-400"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all duration-400">
                    {ICON_MAP[s.iconKey]}
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="text-[0.9rem] font-bold text-[#2b2b2b] leading-snug">{s.title}</h3>
                    <p className="text-[0.8rem] text-[#6b6b6b] leading-relaxed line-clamp-2">{s.heroSubtitle}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#f97316]">
                    En savoir plus <ExternalLink size={12} strokeWidth={2.5} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#fff7ed] py-16 md:py-24 border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#f97316] flex items-center justify-center text-white shadow-[0_4px_24px_rgba(249,115,22,0.44)]">
            {iconLg}
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.6rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.1]">
            Prêt à passer à l&apos;action&nbsp;?
          </h2>
          <p className="text-[1rem] text-[#6b6b6b] max-w-md leading-relaxed">
            Appelez-nous pour une intervention immédiate ou remplissez notre formulaire pour recevoir un devis gratuit sous 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3.5 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(249,115,22,0.38)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-500"
            >
              <div className="flex items-center gap-2.5"><Phone size={15} strokeWidth={2.5} /> Appeler maintenant</div>
              <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-500">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[15px] hover:bg-[#2b2b2b]/[0.04] active:scale-[0.98] transition-all duration-400"
            >
              <FileText size={15} strokeWidth={2} /> Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
