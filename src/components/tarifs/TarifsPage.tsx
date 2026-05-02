"use client";

import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Check, Clock, Zap, Shield, Info } from "lucide-react";
import Link from "next/link";

const SPRING = [0.32, 0.72, 0, 1] as const;

const TARIFS = [
  {
    category: "Dépannage & Urgence",
    color: "orange",
    icon: <Zap size={20} strokeWidth={2} />,
    items: [
      { label: "Frais de déplacement (journée)",   price: "À partir de 50 €" },
      { label: "Tarif horaire — heures normales",   price: "65 – 85 € / h"   },
      { label: "Tarif horaire — nuit & weekend",    price: "110 – 140 € / h" },
      { label: "Diagnostic électrique sur site",    price: "À partir de 75 €" },
      { label: "Remplacement disjoncteur / fusible", price: "À partir de 80 €" },
      { label: "Remise en service tableau",          price: "À partir de 90 €" },
    ],
  },
  {
    category: "Installation & Travaux",
    color: "dark",
    icon: <Shield size={20} strokeWidth={2} />,
    items: [
      { label: "Pose prise / interrupteur",          price: "À partir de 60 €"    },
      { label: "Installation tableau électrique",    price: "À partir de 800 €"   },
      { label: "Câblage logement complet",           price: "Sur devis"           },
      { label: "Mise en conformité RGIE (AREI)",     price: "Sur devis"           },
      { label: "Installation borne de recharge",     price: "À partir de 900 €"   },
      { label: "Éclairage extérieur / intérieur",   price: "À partir de 120 €"   },
    ],
  },
  {
    category: "Contrôle & Conformité",
    color: "gold",
    icon: <Check size={20} strokeWidth={2} />,
    items: [
      { label: "Rapport de contrôle RGIE",           price: "À partir de 150 €"  },
      { label: "Visite de contrôle pré-vente",       price: "À partir de 180 €"  },
      { label: "Mise en conformité légère",          price: "À partir de 250 €"  },
      { label: "Mise en conformité complète",        price: "Sur devis"           },
      { label: "Attestation de conformité",          price: "Inclus dans contrôle"},
      { label: "Suivi organisme agréé",              price: "Sur devis"           },
    ],
  },
];

const MENTIONS = [
  "Les prix indiqués sont des tarifs indicatifs TTC. Chaque intervention est évaluée sur place.",
  "Déplacement offert pour tout devis accepté sur les travaux > 300 €.",
  "Devis écrit gratuit et sans engagement pour tout projet.",
  "TVA belge (21 %) incluse dans les tarifs affichés.",
];

export default function TarifsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white pt-36 pb-14 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.06) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b6b6b] mb-8">
            <a href="/" className="hover:text-[#f97316] transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-[#2b2b2b] font-medium">Tarifs</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              Transparence totale
            </span>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.06]">
              Nos tarifs<br />
              <span className="text-[#f97316]">clairs et honnêtes</span>
            </h1>

            <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-xl">
              Chez TF Technics, pas de mauvaises surprises. Voici nos grilles de prix indicatives.
              Chaque intervention est précédée d'un <strong className="text-[#2b2b2b]">devis gratuit et sans engagement</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Grilles de tarifs ── */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TARIFS.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(43,43,43,0.07)] ${
                  cat.color === "dark" ? "bg-[#2b2b2b]" : "bg-white"
                }`}
              >
                {/* En-tête catégorie */}
                <div className={`px-6 py-5 border-b ${
                  cat.color === "dark"
                    ? "border-white/10"
                    : cat.color === "gold"
                    ? "border-[#dbb82d]/15 bg-[#dbb82d]/5"
                    : "border-orange-100 bg-orange-50/50"
                }`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    cat.color === "dark"    ? "bg-white/10 text-white"
                    : cat.color === "gold" ? "bg-[#dbb82d]/15 text-[#dbb82d]"
                    : "bg-[#f97316]/10 text-[#f97316]"
                  }`}>
                    {cat.icon}
                  </div>
                  <h2 className={`text-[1rem] font-bold ${
                    cat.color === "dark" ? "text-white" : "text-[#2b2b2b]"
                  }`}>
                    {cat.category}
                  </h2>
                </div>

                {/* Lignes de tarif */}
                <div className="px-6 py-4 flex flex-col divide-y divide-black/[0.04]">
                  {cat.items.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-3 py-3.5">
                      <span className={`text-[0.82rem] leading-snug ${
                        cat.color === "dark" ? "text-white/70" : "text-[#4b4b4b]"
                      }`}>
                        {item.label}
                      </span>
                      <span className={`text-[0.82rem] font-bold whitespace-nowrap flex-shrink-0 ${
                        cat.color === "dark"    ? "text-white"
                        : cat.color === "gold" ? "text-[#dbb82d]"
                        : "text-[#f97316]"
                      }`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mentions légales tarifs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: SPRING, delay: 0.3 }}
            className="mt-8 rounded-2xl bg-white border border-[#f0f0f0] px-6 py-5"
          >
            <div className="flex items-start gap-3 mb-4">
              <Info size={16} strokeWidth={2} className="text-[#f97316] flex-shrink-0 mt-0.5" />
              <p className="text-[0.82rem] font-semibold text-[#2b2b2b]">Informations importantes</p>
            </div>
            <ul className="flex flex-col gap-2">
              {MENTIONS.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-[0.8rem] text-[#6b6b6b] leading-relaxed">
                  <Check size={13} strokeWidth={2.5} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Urgence délai ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Clock size={18} strokeWidth={2} />, label: "Délai d'intervention", value: "< 60 min" },
              { icon: <Zap   size={18} strokeWidth={2} />, label: "Disponibilité",         value: "24h/24 – 7j/7" },
              { icon: <Check size={18} strokeWidth={2} />, label: "Devis",                  value: "Gratuit & sans engagement" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: SPRING, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-[#f0f0f0] bg-[#fafafa] px-5 py-4"
              >
                <span className="w-10 h-10 rounded-xl bg-orange-50 text-[#f97316] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[0.75rem] text-[#9b9b9b] font-medium">{item.label}</p>
                  <p className="text-[0.9rem] font-bold text-[#2b2b2b]">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-5">
          <h2 className="text-[1.5rem] font-extrabold text-[#2b2b2b] tracking-[-0.025em]">
            Besoin d&apos;un devis précis ?
          </h2>
          <p className="text-[0.9rem] text-[#6b6b6b] max-w-md">
            Appelez-nous ou remplissez le formulaire de devis. Réponse en moins de 2h en journée.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+32483480496"
              className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(249,115,22,0.38)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-500"
            >
              <div className="flex items-center gap-2.5">
                <Phone size={15} strokeWidth={2.5} />
                Appeler maintenant
              </div>
              <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
            <Link
              href="/#devis"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2b2b2b]/15 bg-white text-[#2b2b2b] font-semibold text-[15px] hover:border-[#f97316] hover:text-[#f97316] transition-all duration-300"
            >
              Demander un devis en ligne
            </Link>
          </div>
        </div>
      </section>

      {/* Retour */}
      <div className="py-8 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2 text-[13px] font-semibold text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors w-fit">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </>
  );
}
