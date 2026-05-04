"use client";

import { motion } from "framer-motion";
import {
  Phone, Shield, Clock, Zap, CheckCircle2,
  MapPin, ArrowUpRight, BatteryCharging, Wrench,
} from "lucide-react";
import type { CommuneData } from "@/data/communes";

const SPRING = [0.32, 0.72, 0, 1] as const;

const SERVICES = [
  { icon: <Zap size={18} strokeWidth={1.8} />,            label: "Dépannage d'urgence",         sub: "24h/24 – 7j/7, < 60 min" },
  { icon: <Zap size={18} strokeWidth={1.8} />,            label: "Installation électrique",      sub: "Tableau, prises, câblage" },
  { icon: <BatteryCharging size={18} strokeWidth={1.8} />, label: "Borne de recharge",           sub: "Wallbox jusqu'à 22 kW" },
  { icon: <Wrench size={18} strokeWidth={1.8} />,          label: "Mise en conformité AREI",     sub: "Rapport officiel inclus" },
];

interface Props {
  commune: CommuneData;
}

export default function CommunePage({ commune }: Props) {
  const titleLines = commune.heroTitle.split("\n");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] bg-white flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.07) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-7">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-[12px] text-[#6b6b6b]">
            <a href="/" className="hover:text-[#f97316] transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-[#2b2b2b] font-medium">{commune.name}</span>
          </nav>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            <MapPin size={11} strokeWidth={2.5} />
            {commune.description}
          </motion.span>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.08 }}
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#2b2b2b]"
          >
            {titleLines[0]}
            <br />
            {titleLines[1] && <span className="text-[#f97316]">{titleLines[1]}</span>}
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.14 }}
            className="text-[1.05rem] text-[#6b6b6b] leading-relaxed max-w-xl"
          >
            {commune.intro}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SPRING, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="tel:+32483480496"
              className="
                group inline-flex items-center justify-between gap-3
                pl-5 pr-2 py-3 rounded-full
                bg-[#f97316] text-white font-bold text-[15px]
                shadow-[0_4px_20px_rgba(249,115,22,0.38)]
                hover:bg-[#ea580c] active:scale-[0.98]
                transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
              "
            >
              <div className="flex items-center gap-2.5">
                <Phone size={15} strokeWidth={2.5} />
                Appeler maintenant
              </div>
              <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
            <a
              href="/devis"
              className="
                inline-flex items-center justify-center gap-2
                px-5 py-3 rounded-full
                border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[14px]
                hover:bg-[#2b2b2b] hover:text-white hover:border-[#2b2b2b]
                transition-all duration-300
              "
            >
              Devis gratuit en 2 min
            </a>
          </motion.div>

          {/* Pilules confiance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: SPRING, delay: 0.28 }}
            className="flex flex-wrap gap-2"
          >
            {[
              { icon: <Shield size={11} />,  label: "Assurés RC Pro" },
              { icon: <Clock size={11} />,   label: "24h/24 – 7j/7" },
              { icon: <Zap size={11} />,     label: "< 60 min" },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2b2b2b]/[0.05] text-[12px] font-medium text-[#2b2b2b]"
              >
                {icon} {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-10 flex flex-col gap-3"
          >
            <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b]">
              Nos services à <span className="text-[#f97316]">{commune.name}</span>
            </h2>
            <p className="text-[0.95rem] text-[#6b6b6b] max-w-lg">
              TF Technics intervient pour tous types de travaux électriques à {commune.name} et ses environs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.07 }}
                className="rounded-2xl bg-white border border-[#f0f0f0] p-6 flex items-start gap-4 shadow-[0_2px_12px_rgba(43,43,43,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-[0.95rem] text-[#2b2b2b]">{s.label}</p>
                  <p className="text-[0.82rem] text-[#6b6b6b] mt-0.5">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi TF Technics ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-10"
          >
            <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] mb-3">
              Pourquoi choisir TF Technics<br />à <span className="text-[#f97316]">{commune.name}</span> ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Intervention < 60 min",       desc: `Nos techniciens couvrent ${commune.name} et arrivent en moins d'une heure.` },
              { title: "Disponible 24h/24 – 7j/7",    desc: "Nuits, week-ends et jours fériés inclus. Pas de frais supplémentaires cachés." },
              { title: "Assuré RC professionnelle",      desc: "Couverture responsabilité civile professionnelle complète. Travaux conformes aux normes AREI." },
              { title: "Devis transparent",            desc: "Tarif communiqué avant intervention. Vous acceptez, on commence." },
              { title: "Garantie 2 ans",               desc: "Toutes nos interventions sont garanties pièces et main-d'œuvre." },
              { title: "Primes bornes de recharge",    desc: "Nous gérons les démarches pour vos primes régionales à votre place." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: SPRING, delay: i * 0.06 }}
                className="flex items-start gap-3 p-5 rounded-2xl border border-[#f0f0f0] bg-[#fafafa]"
              >
                <CheckCircle2 size={16} className="text-[#f97316] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="font-bold text-[0.9rem] text-[#2b2b2b]">{item.title}</p>
                  <p className="text-[0.82rem] text-[#6b6b6b] mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA urgence ── */}
      <section className="py-16 bg-[#2b2b2b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[#f97316]/15 border border-[#f97316]/25 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] mx-auto md:mx-0 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              Disponible maintenant
            </span>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-white tracking-[-0.02em]">
              Besoin d&apos;un électricien à {commune.name} ?
            </h2>
            <p className="text-white/55 text-[0.9rem]">
              Intervention en moins de 60 minutes, 24h/24 – 7j/7.
            </p>
          </div>
          <a
            href="tel:+32483480496"
            className="
              group flex-shrink-0 inline-flex items-center justify-between gap-3
              pl-6 pr-2 py-2.5 rounded-full
              bg-[#f97316] text-white font-bold text-[16px]
              shadow-[0_4px_24px_rgba(249,115,22,0.45)]
              hover:bg-[#ea580c] active:scale-[0.98]
              transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            "
          >
            <div className="flex items-center gap-3">
              <Phone size={17} strokeWidth={2.5} />
              Appeler TF Technics
            </div>
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
