"use client";

import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Check, Clock, Zap, AlertCircle, Wrench, TrendingUp } from "lucide-react";
import Link from "next/link";

const SPRING = [0.32, 0.72, 0, 1] as const;

const T = {
  fr: {
    home: "Accueil", homeHref: "/", pageLabel: "Tarifs",
    badge: "Transparence totale",
    h1a: "Grille tarifaire", h1b: "officielle TF Technics",
    intro: "Ces tarifs sont établis selon les conditions de notre bon d'intervention. Le technicien vous communique le montant exact du forfait avant tout démarrage des travaux.",
    deplTitle: "Frais de déplacement",
    deplSub:   "Selon le moment d'intervention",
    deplRows: [
      { label: "Heures de bureau", sub: "08h00 – 17h00", price: "60 €",  hi: false },
      { label: "Soirée",           sub: "17h00 – 22h00", price: "110 €", hi: false },
      { label: "Nuit",             sub: "22h00 – 08h00", price: "180 €", hi: true  },
      { label: "Urgence",          sub: "Jour même",     price: "180 €", hi: true  },
    ],
    deplNote: "Le déplacement reste dû même si la réparation s'avère impossible.",
    moTitle: "Main-d'œuvre & Forfaits",
    moSub:   "Communiqué selon l'intervention",
    moRows: [
      { label: "Minimum de prestation",      price: "1 heure" },
      { label: "Forfait minimum",            price: "150 €"   },
      { label: "Frais de devis / expertise", price: "150 €"   },
    ],
    moNote: "Le technicien communique le montant du forfait selon l'intervention à effectuer.",
    majTitle: "Majorations",
    majSub:   "Sur déplacement + main-d'œuvre",
    majIntro: "Tarifs de base en semaine de 08h00 à 17h00. Majorations ci-dessous :",
    majRows: [
      { label: "Semaine",       sub: "17h00 – 22h00",    pct: "+ 50 %",  level: 1 },
      { label: "Semaine nuit",  sub: "22h00 – 08h00",    pct: "+ 100 %", level: 2 },
      { label: "Samedi",        sub: "Toute la journée", pct: "+ 50 %",  level: 1 },
      { label: "Dim. & fériés", sub: "Toute la journée", pct: "+ 100 %", level: 2 },
    ],
    kpi: [
      { label: "Délai d'intervention", value: "< 60 min"              },
      { label: "Disponibilité",        value: "24h/24 – 7j/7"         },
      { label: "Devis",                value: "Gratuit & sans engagement" },
    ],
    cgvNote: "Pour les conditions détaillées (acompte sur pièces, paiement, annulation, TVA 6 %), consultez nos ",
    cgvLink: "Conditions Générales de Vente",
    cgvHref: "/conditions-generales",
    ctaH2:    "Besoin d'un devis précis ?",
    ctaP:     "Appelez-nous ou remplissez le formulaire. Réponse en moins de 2h en journée.",
    callBtn:  "Appeler maintenant",
    quoteBtn: "Demander un devis en ligne",
    back:     "← Retour à l'accueil",
  },
  nl: {
    home: "Startpagina", homeHref: "/nl", pageLabel: "Tarieven",
    badge: "Volledige transparantie",
    h1a: "Officiële tarieflijst", h1b: "TF Technics",
    intro: "Deze tarieven zijn vastgesteld volgens de voorwaarden van ons interventiebonnetje. De technicus deelt het exacte bedrag van het forfait mee vóór de start van de werken.",
    deplTitle: "Verplaatsingskosten",
    deplSub:   "Afhankelijk van het tijdstip",
    deplRows: [
      { label: "Kantooruren", sub: "08u00 – 17u00", price: "60 €",  hi: false },
      { label: "Avond",       sub: "17u00 – 22u00", price: "110 €", hi: false },
      { label: "Nacht",       sub: "22u00 – 08u00", price: "180 €", hi: true  },
      { label: "Spoed",       sub: "Zelfde dag",    price: "180 €", hi: true  },
    ],
    deplNote: "De verplaatsingskost blijft verschuldigd ook al blijkt de reparatie onmogelijk.",
    moTitle: "Arbeid & Forfaits",
    moSub:   "Meegedeeld per interventie",
    moRows: [
      { label: "Minimale prestatie",        price: "1 uur"  },
      { label: "Minimumforfait",            price: "150 €"  },
      { label: "Offertekosten / expertise", price: "150 €"  },
    ],
    moNote: "De technicus deelt het bedrag van het forfait mee afhankelijk van de te uit te voeren interventie.",
    majTitle: "Toeslagen",
    majSub:   "Op verplaatsing + arbeid",
    majIntro: "Basistarieven op weekdagen van 08u00 tot 17u00. Toeslagen hieronder:",
    majRows: [
      { label: "Weekdag",           sub: "17u00 – 22u00", pct: "+ 50 %",  level: 1 },
      { label: "Weekdag nacht",     sub: "22u00 – 08u00", pct: "+ 100 %", level: 2 },
      { label: "Zaterdag",          sub: "Hele dag",      pct: "+ 50 %",  level: 1 },
      { label: "Zon. & feestdagen", sub: "Hele dag",      pct: "+ 100 %", level: 2 },
    ],
    kpi: [
      { label: "Interventietijd",  value: "< 60 min"          },
      { label: "Beschikbaarheid",  value: "24u/24 – 7d/7"     },
      { label: "Offerte",          value: "Gratis & vrijblijvend" },
    ],
    cgvNote: "Voor de gedetailleerde voorwaarden (voorschot, betaling, annulering, btw 6 %), raadpleeg onze ",
    cgvLink: "Algemene Verkoopsvoorwaarden",
    cgvHref: "/conditions-generales",
    ctaH2:    "Precieze offerte nodig?",
    ctaP:     "Bel ons of vul het formulier in. Antwoord binnen 2u overdag.",
    callBtn:  "Bel ons nu",
    quoteBtn: "Online offerte aanvragen",
    back:     "← Terug naar de startpagina",
  },
};

interface Props { locale?: "fr" | "nl" }

export default function TarifsPage({ locale = "fr" }: Props) {
  const t = T[locale];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white pt-36 pb-14 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.06) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b6b6b] mb-8">
            <a href={t.homeHref} className="hover:text-[#f97316] transition-colors">{t.home}</a>
            <span>/</span>
            <span className="text-[#2b2b2b] font-medium">{t.pageLabel}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              {t.badge}
            </span>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.06]">
              {t.h1a}<br />
              <span className="text-[#f97316]">{t.h1b}</span>
            </h1>

            <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-xl">
              {t.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Grilles tarifaires ── */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-5">

          {/* Déplacement + Main-d'œuvre */}
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
                    <h2 className="text-[1rem] font-bold text-[#2b2b2b]">{t.deplTitle}</h2>
                    <p className="text-[11px] text-[#9b9b9b] mt-0.5">{t.deplSub}</p>
                  </div>
                </div>

                <div className="flex flex-col divide-y divide-black/[0.05]">
                  {t.deplRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-3 py-3.5">
                      <div>
                        <span className="text-[0.875rem] font-semibold text-[#2b2b2b]">{row.label}</span>
                        <span className="ml-2 text-[11px] text-[#9b9b9b]">{row.sub}</span>
                      </div>
                      <span className={`text-[0.9rem] font-extrabold flex-shrink-0 ${row.hi ? "text-[#f97316]" : "text-[#2b2b2b]"}`}>
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-orange-50 border border-orange-100 px-4 py-3">
                  <AlertCircle size={13} strokeWidth={2} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                  <p className="text-[11.5px] text-[#6b6b6b] leading-relaxed">{t.deplNote}</p>
                </div>
              </div>
            </motion.div>

            {/* Main-d'œuvre */}
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
                    <h2 className="text-[1rem] font-bold text-white">{t.moTitle}</h2>
                    <p className="text-[11px] text-white/50 mt-0.5">{t.moSub}</p>
                  </div>
                </div>

                <div className="flex flex-col divide-y divide-white/[0.07]">
                  {t.moRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-3 py-4">
                      <span className="text-[0.875rem] font-medium text-white/75">{row.label}</span>
                      <span className="text-[0.9rem] font-extrabold text-[#f97316] flex-shrink-0">{row.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] px-4 py-3">
                  <AlertCircle size={13} strokeWidth={2} className="text-white/40 flex-shrink-0 mt-0.5" />
                  <p className="text-[11.5px] text-white/50 leading-relaxed">{t.moNote}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Majorations */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: SPRING, delay: 0.15 }}
            className="rounded-[1.75rem] p-2 bg-black/[0.025] ring-1 ring-black/[0.07]"
          >
            <div className="rounded-[calc(1.75rem-0.5rem)] bg-white p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2b2b2b]/[0.07] flex items-center justify-center flex-shrink-0 text-[#2b2b2b]">
                  <TrendingUp size={18} strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-[1rem] font-bold text-[#2b2b2b]">{t.majTitle}</h2>
                  <p className="text-[11px] text-[#9b9b9b] mt-0.5">{t.majSub}</p>
                </div>
              </div>

              <p className="text-[0.8rem] text-[#6b6b6b] mb-4 leading-relaxed">{t.majIntro}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.majRows.map((row) => (
                  <div key={row.label} className="rounded-xl border border-black/[0.07] p-4 flex flex-col gap-1.5">
                    <span className="text-[0.8rem] font-bold text-[#2b2b2b]">{row.label}</span>
                    <span className="text-[10px] text-[#9b9b9b]">{row.sub}</span>
                    <span className={`mt-1 text-[0.9rem] font-extrabold px-2 py-0.5 rounded-full w-fit text-[11px] ${
                      row.level === 2 ? "bg-[#f97316]/10 text-[#f97316]" : "bg-[#2b2b2b]/[0.07] text-[#2b2b2b]"
                    }`}>{row.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lien CGV */}
          <div className="flex items-center gap-2.5 rounded-xl bg-white border border-[#e8e8e8] px-5 py-3.5">
            <Check size={14} strokeWidth={2.5} className="text-[#f97316] flex-shrink-0" />
            <p className="text-[0.82rem] text-[#6b6b6b] leading-relaxed">
              {t.cgvNote}
              <Link href={t.cgvHref} className="font-semibold text-[#2b2b2b] underline underline-offset-2 hover:text-[#f97316] transition-colors">
                {t.cgvLink}
              </Link>.
            </p>
          </div>

        </div>
      </section>

      {/* ── KPI ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.kpi.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: SPRING, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-[#f0f0f0] bg-[#fafafa] px-5 py-4"
              >
                <span className="w-10 h-10 rounded-xl bg-orange-50 text-[#f97316] flex items-center justify-center flex-shrink-0">
                  {i === 0 ? <Clock size={18} strokeWidth={2} /> : i === 1 ? <Zap size={18} strokeWidth={2} /> : <Check size={18} strokeWidth={2} />}
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
          <h2 className="text-[1.5rem] font-extrabold text-[#2b2b2b] tracking-[-0.025em]">{t.ctaH2}</h2>
          <p className="text-[0.9rem] text-[#6b6b6b] max-w-md">{t.ctaP}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+32483480496"
              className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-3 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(249,115,22,0.38)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-500"
            >
              <div className="flex items-center gap-2.5"><Phone size={15} strokeWidth={2.5} />{t.callBtn}</div>
              <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2b2b2b]/15 bg-white text-[#2b2b2b] font-semibold text-[15px] hover:border-[#f97316] hover:text-[#f97316] transition-all duration-300"
            >
              {t.quoteBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Retour */}
      <div className="py-8 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Link href={t.homeHref} className="flex items-center gap-2 text-[13px] font-semibold text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors w-fit">
            {t.back}
          </Link>
        </div>
      </div>
    </>
  );
}
