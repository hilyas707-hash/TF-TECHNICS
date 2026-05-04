"use client";

import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Check, Clock, Zap, AlertCircle, Wrench, CreditCard, TrendingUp } from "lucide-react";
import Link from "next/link";

const SPRING = [0.32, 0.72, 0, 1] as const;

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
              Grille tarifaire<br />
              <span className="text-[#f97316]">officielle TF Technics</span>
            </h1>

            <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-xl">
              Ces tarifs sont établis selon les conditions de notre bon d&apos;intervention.
              Le technicien vous communique le montant exact du forfait avant tout démarrage des travaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Grilles tarifaires ── */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-5">

          {/* Ligne 1 : Déplacement + Main-d'œuvre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Frais de déplacement */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: SPRING }}
              className="rounded-[1.75rem] p-2 bg-[#f97316]/10 ring-1 ring-[#f97316]/20 shadow-[0_4px_24px_rgba(249,115,22,0.10)]"
            >
              <div className="rounded-[calc(1.75rem-0.5rem)] bg-white p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                    <Zap size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-bold text-[#2b2b2b]">Frais de déplacement</h2>
                    <p className="text-[11px] text-[#9b9b9b] mt-0.5">Selon le moment d&apos;intervention</p>
                  </div>
                </div>

                <div className="flex flex-col divide-y divide-black/[0.05]">
                  {[
                    { label: "Heures de bureau",     sublabel: "08h00 – 17h00",  price: "60 €",  highlight: false },
                    { label: "Soirée",               sublabel: "17h00 – 22h00",  price: "110 €", highlight: false },
                    { label: "Nuit",                 sublabel: "22h00 – 08h00",  price: "180 €", highlight: true  },
                    { label: "Urgence",              sublabel: "Jour même",       price: "180 €", highlight: true  },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-3 py-3.5">
                      <div>
                        <span className="text-[0.875rem] font-semibold text-[#2b2b2b]">{row.label}</span>
                        <span className="ml-2 text-[11px] text-[#9b9b9b]">{row.sublabel}</span>
                      </div>
                      <span className={`text-[0.9rem] font-extrabold flex-shrink-0 ${row.highlight ? "text-[#f97316]" : "text-[#2b2b2b]"}`}>
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-orange-50 border border-orange-100 px-4 py-3">
                  <AlertCircle size={13} strokeWidth={2} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                  <p className="text-[11.5px] text-[#6b6b6b] leading-relaxed">
                    Le déplacement reste dû même si la réparation s&apos;avère impossible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main-d'œuvre et Forfaits */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: SPRING, delay: 0.1 }}
              className="rounded-[1.75rem] p-2 bg-[#2b2b2b] ring-1 ring-white/[0.06] shadow-[0_4px_24px_rgba(43,43,43,0.18)]"
            >
              <div className="rounded-[calc(1.75rem-0.5rem)] bg-[#2b2b2b] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    <Wrench size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-bold text-white">Main-d&apos;œuvre & Forfaits</h2>
                    <p className="text-[11px] text-white/50 mt-0.5">Communiqué selon l&apos;intervention</p>
                  </div>
                </div>

                <div className="flex flex-col divide-y divide-white/[0.07]">
                  {[
                    { label: "Minimum de prestation",       price: "1 heure"  },
                    { label: "Forfait minimum",             price: "150 €"    },
                    { label: "Frais de devis / expertise",  price: "150 €"    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-3 py-4">
                      <span className="text-[0.875rem] font-medium text-white/75">{row.label}</span>
                      <span className="text-[0.9rem] font-extrabold text-[#f97316] flex-shrink-0">{row.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] px-4 py-3">
                  <AlertCircle size={13} strokeWidth={2} className="text-white/40 flex-shrink-0 mt-0.5" />
                  <p className="text-[11.5px] text-white/50 leading-relaxed">
                    Le technicien communique le montant du forfait selon l&apos;intervention à effectuer.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ligne 2 : Majorations + Pièces & Paiement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Majorations */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: SPRING, delay: 0.15 }}
              className="rounded-[1.75rem] p-2 bg-black/[0.025] ring-1 ring-black/[0.07] shadow-[0_4px_16px_rgba(43,43,43,0.06)]"
            >
              <div className="rounded-[calc(1.75rem-0.5rem)] bg-white p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#2b2b2b]/[0.07] flex items-center justify-center flex-shrink-0 text-[#2b2b2b]">
                    <TrendingUp size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-bold text-[#2b2b2b]">Majorations</h2>
                    <p className="text-[11px] text-[#9b9b9b] mt-0.5">Sur déplacement + main-d&apos;œuvre</p>
                  </div>
                </div>

                <p className="text-[0.8rem] text-[#6b6b6b] mb-4 leading-relaxed">
                  Tarifs de base applicables en semaine de 08h00 à 17h00. Majorations ci-dessous :
                </p>

                <div className="flex flex-col divide-y divide-black/[0.05]">
                  {[
                    { label: "Semaine",         sublabel: "17h00 – 22h00",   pct: "+ 50 %",  level: 1 },
                    { label: "Semaine nuit",    sublabel: "22h00 – 08h00",   pct: "+ 100 %", level: 2 },
                    { label: "Samedi",          sublabel: "Toute la journée", pct: "+ 50 %",  level: 1 },
                    { label: "Dim. & fériés",   sublabel: "Toute la journée", pct: "+ 100 %", level: 2 },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-3 py-3.5">
                      <div>
                        <span className="text-[0.875rem] font-semibold text-[#2b2b2b]">{row.label}</span>
                        <span className="ml-2 text-[11px] text-[#9b9b9b]">{row.sublabel}</span>
                      </div>
                      <span className={`text-[0.875rem] font-extrabold flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] ${
                        row.level === 2
                          ? "bg-[#f97316]/10 text-[#f97316]"
                          : "bg-[#2b2b2b]/[0.07] text-[#2b2b2b]"
                      }`}>
                        {row.pct}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pièces & Paiement */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: SPRING, delay: 0.2 }}
              className="rounded-[1.75rem] p-2 bg-black/[0.025] ring-1 ring-black/[0.07] shadow-[0_4px_16px_rgba(43,43,43,0.06)]"
            >
              <div className="rounded-[calc(1.75rem-0.5rem)] bg-white p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#2b2b2b]/[0.07] flex items-center justify-center flex-shrink-0 text-[#2b2b2b]">
                    <CreditCard size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-bold text-[#2b2b2b]">Pièces & Paiement</h2>
                    <p className="text-[11px] text-[#9b9b9b] mt-0.5">Modalités et conditions</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5">
                  {[
                    {
                      icon: <Check size={13} strokeWidth={2.5} />,
                      text: <><strong className="text-[#2b2b2b]">Commande de pièces</strong> — Acompte de <strong className="text-[#f97316]">60 %</strong> du prix de la pièce exigé.</>,
                    },
                    {
                      icon: <Check size={13} strokeWidth={2.5} />,
                      text: <><strong className="text-[#2b2b2b]">Règlement</strong> — Toute prestation doit être réglée <strong className="text-[#2b2b2b]">au grand comptant immédiatement</strong> après l&apos;intervention.</>,
                    },
                    {
                      icon: <Check size={13} strokeWidth={2.5} />,
                      text: <><strong className="text-[#2b2b2b]">TVA</strong> — <strong className="text-[#f97316]">6 %</strong> selon l&apos;AR du 18 juillet 1986.</>,
                    },
                    {
                      icon: <AlertCircle size={13} strokeWidth={2} />,
                      text: <><strong className="text-[#2b2b2b]">Annulation</strong> — Aucun acompte n&apos;est récupérable en cas d&apos;annulation par le client.</>,
                      warn: true,
                    },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-start gap-3 rounded-xl px-4 py-3 ${row.warn ? "bg-red-50 border border-red-100" : "bg-[#f8f8f8]"}`}>
                      <span className={`flex-shrink-0 mt-0.5 ${row.warn ? "text-red-400" : "text-[#f97316]"}`}>
                        {row.icon}
                      </span>
                      <p className="text-[0.8rem] text-[#4b4b4b] leading-relaxed">{row.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Chiffres clés ── */}
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
              href="/devis"
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
