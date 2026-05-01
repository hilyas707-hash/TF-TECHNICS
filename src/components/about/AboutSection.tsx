"use client";

import { motion } from "framer-motion";
import {
  Shield, Award, Users, Clock,
  CheckCircle2, Phone, ArrowUpRight,
} from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

const VALEURS = [
  { icon: <Shield    size={20} strokeWidth={1.8} />, title: "Assurés RC Pro",       desc: "TF Technics est couvert par une assurance responsabilité civile professionnelle pour tous nos chantiers." },
  { icon: <Award     size={20} strokeWidth={1.8} />, title: "Travaux conformes",    desc: "Chaque intervention respecte le Règlement Général sur les Installations Électriques (AREI) en vigueur en Belgique." },
  { icon: <Users     size={20} strokeWidth={1.8} />, title: "Équipe qualifiée",     desc: "Techniciens formés sur les nouvelles normes et technologies : bornes de recharge, domotique, tableaux modernes." },
  { icon: <Clock     size={20} strokeWidth={1.8} />, title: "Disponibilité totale", desc: "Service d'urgence 24h/24 – 7j/7. Jamais de répondeur la nuit, toujours un technicien disponible." },
];

const ENGAGEMENTS = [
  "Assurance RC professionnelle",
  "Travaux conformes AREI",
  "Devis gratuit et sans engagement",
  "Garantie 2 ans pièces & main-d'œuvre",
  "Accompagnement primes régionales",
  "Tarifs transparents, zéro surprise",
];

const STATS = [
  { value: "24h/24",   label: "Disponibilité" },
  { value: "0 €",      label: "Devis gratuit" },
  { value: "2 ans",    label: "Garantie" },
  { value: "< 60 min", label: "Délai d'arrivée" },
];

export default function AboutSection() {
  return (
    <>
      {/* ── Hero À propos ── */}
      <section className="relative bg-white pt-36 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.06) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b6b6b] mb-8">
            <a href="/" className="hover:text-[#f97316] transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-[#2b2b2b] font-medium">À propos</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: SPRING }}
              className="flex flex-col gap-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
                Notre histoire
              </span>
              <h1 className="text-[clamp(2rem,5vw,3.8rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.06]">
                TF Technics —<br />
                <span className="text-[#f97316]">votre électricien</span><br />
                de confiance
              </h1>
              <p className="text-[1rem] text-[#6b6b6b] leading-relaxed">
                TF Technics intervient à Bruxelles et ses environs pour tous les besoins électriques des particuliers et des professionnels. Fondée sur des valeurs de sérieux, de transparence et de réactivité, notre équipe s&apos;engage à répondre à chaque urgence avec rapidité et professionnalisme.
              </p>
              <p className="text-[1rem] text-[#6b6b6b] leading-relaxed">
                Assuré en responsabilité civile professionnelle, TF Technics vous garantit des travaux conformes aux normes AREI, durables et couverts par une garantie de 2 ans.
              </p>
              <a
                href="tel:+32XXXXXXXXX"
                className="
                  group inline-flex items-center justify-between gap-3 w-fit
                  pl-5 pr-2 py-3 rounded-full
                  bg-[#f97316] text-white font-bold text-[15px]
                  shadow-[0_4px_20px_rgba(249,115,22,0.38)]
                  hover:bg-[#ea580c] active:scale-[0.98]
                  transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                "
              >
                <div className="flex items-center gap-2.5">
                  <Phone size={15} strokeWidth={2.5} />
                  Nous appeler
                </div>
                <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </a>
            </motion.div>

            {/* Chiffres clés */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: SPRING, delay: 0.12 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: SPRING, delay: 0.2 + i * 0.07 }}
                  className="rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-6 flex flex-col gap-1 text-center"
                >
                  <p className="text-[2.4rem] font-extrabold text-[#2b2b2b] tracking-[-0.04em] leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[0.8rem] text-[#6b6b6b] font-medium mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Nos valeurs ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-10 text-center"
          >
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b]">
              Ce qui nous distingue
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALEURS.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-[#f0f0f0] p-6 flex items-start gap-4 shadow-[0_2px_12px_rgba(43,43,43,0.04)]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <p className="font-bold text-[0.95rem] text-[#2b2b2b] mb-1">{v.title}</p>
                  <p className="text-[0.84rem] text-[#6b6b6b] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: SPRING }}
            className="mb-10"
          >
            <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] mb-3">
              Nos engagements
            </h2>
            <p className="text-[0.95rem] text-[#6b6b6b] max-w-lg">
              Chaque intervention TF Technics est réalisée dans le respect des normes AREI, avec transparence sur les tarifs et garantie sur les travaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ENGAGEMENTS.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: SPRING, delay: i * 0.06 }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[#f0f0f0] bg-[#fafafa]"
              >
                <CheckCircle2 size={16} className="text-[#f97316] flex-shrink-0" strokeWidth={2} />
                <span className="text-[0.88rem] font-semibold text-[#2b2b2b]">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#2b2b2b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold text-white tracking-[-0.02em]">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-white/55 text-[0.9rem]">Devis gratuit, réponse sous 2 heures.</p>
          </div>
          <a
            href="tel:+32XXXXXXXXX"
            className="
              group flex-shrink-0 inline-flex items-center justify-between gap-3
              pl-6 pr-2 py-2.5 rounded-full
              bg-[#f97316] text-white font-bold text-[16px]
              shadow-[0_4px_24px_rgba(249,115,22,0.45)]
              hover:bg-[#ea580c] active:scale-[0.98]
              transition-all duration-500
            "
          >
            <div className="flex items-center gap-3">
              <Phone size={17} strokeWidth={2.5} />
              Appeler maintenant
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
