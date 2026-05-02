"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

/* ── Témoignages clients — à remplacer par de vrais avis Google ─────────── */
const REVIEWS = [
  {
    name: "Sophie V.",
    location: "Ixelles",
    date: "il y a 2 semaines",
    rating: 5,
    text: "Intervention ultra-rapide un dimanche soir. Technicien professionnel, propre et efficace. Panne résolue en 30 minutes. Je recommande vivement !",
    avatar: "S",
  },
  {
    name: "Marc D.",
    location: "Etterbeek",
    date: "il y a 1 mois",
    rating: 5,
    text: "Très bonne expérience pour l'installation de ma borne de recharge. Travail soigné, prix honnête et bon suivi. Merci à toute l'équipe.",
    avatar: "M",
  },
  {
    name: "Laura B.",
    location: "Woluwe-Saint-Lambert",
    date: "il y a 3 semaines",
    rating: 5,
    text: "Disjoncteur général en panne en pleine nuit. Appelé à 22h, arrivée en moins de 45 min. Très rassurant et compétent. Tarif correct pour une urgence.",
    avatar: "L",
  },
  {
    name: "Thomas K.",
    location: "Uccle",
    date: "il y a 2 mois",
    rating: 5,
    text: "Mise en conformité RGIE réalisée rapidement avant ma vente. Rapport clair, travaux bien exécutés. Sérieux du début à la fin.",
    avatar: "T",
  },
];

/* ── Chiffres clés ───────────────────────────────────────────────────────── */
const STATS = [
  { value: "24h/24",   label: "Disponible 7j/7" },
  { value: "0 €",      label: "Devis gratuit" },
  { value: "2 ans",    label: "Garantie travaux" },
  { value: "< 60 min", label: "Délai d'intervention" },
];

interface Props { dict: Dictionary }

export default function TrustSection({ dict }: Props) {
  void dict; // conservé pour compatibilité i18n future

  return (
    <section id="confiance" className="py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* ── En-tête ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-16 text-center flex flex-col items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#dbb82d]/10 border border-[#dbb82d]/25 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#dbb82d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dbb82d]" />
            Ils nous font confiance
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.08]">
            Ce que disent nos clients
          </h2>
          <p className="text-[0.95rem] text-[#6b6b6b] max-w-md">
            Disponibles à Bruxelles, en Flandre et en Brabant Wallon. Voici ce que nos clients en pensent.
          </p>
        </motion.div>

        {/* ── Chiffres clés ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: SPRING, delay: i * 0.08 }}
              className="rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-6 flex flex-col gap-1 text-center"
            >
              <p
                className="text-[2.2rem] font-extrabold tracking-[-0.04em] leading-none"
                style={{ color: "#2b2b2b" }}
              >
                {stat.value}
              </p>
              <p className="text-[0.82rem] text-[#6b6b6b] font-medium leading-snug mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Témoignages clients ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: SPRING }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="text-[0.8rem] font-semibold text-[#2b2b2b]">Témoignages clients</span>
          <span className="flex">
            {[...Array(5)].map((_, k) => (
              <Star key={k} size={13} fill="#dbb82d" stroke="none" />
            ))}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, ease: SPRING, delay: i * 0.09 }}
              className="rounded-2xl border border-[#f0f0f0] bg-white p-6 flex flex-col gap-4 shadow-[0_2px_16px_rgba(43,43,43,0.05)] hover:shadow-[0_6px_28px_rgba(43,43,43,0.09)] transition-shadow duration-300"
            >
              {/* Étoiles */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, k) => (
                  <Star key={k} size={14} fill="#dbb82d" stroke="none" />
                ))}
              </div>

              {/* Texte */}
              <p className="text-[0.875rem] text-[#4b4b4b] leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#f0f0f0]">
                <div className="w-8 h-8 rounded-full bg-[#dbb82d] flex items-center justify-center text-white text-[0.75rem] font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-[0.82rem] font-semibold text-[#2b2b2b]">{review.name}</p>
                  <p className="text-[0.75rem] text-[#6b6b6b]">{review.location} · {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ligne de réassurance */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.4 }}
          className="mt-12 text-center text-[0.85rem] text-[#6b6b6b] font-medium tracking-wide"
        >
          Assuré RC Pro · Devis gratuit · Bruxelles — Flandre — Brabant Wallon
        </motion.p>

      </div>
    </section>
  );
}
