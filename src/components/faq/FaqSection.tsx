"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

const FAQ_ITEMS = [
  {
    question: "Quels sont vos délais d'intervention en urgence ?",
    answer:
      "Nous intervenons en moins de 60 minutes sur Bruxelles et ses environs, 24h/24 et 7j/7, y compris les week-ends et jours fériés. Pour les zones plus éloignées en Brabant Wallon ou Flamand, comptez 60 à 90 minutes maximum.",
  },
  {
    question: "Êtes-vous agréés AREI et assurés ?",
    answer:
      "Oui. TF Technics est agréé selon le Règlement Général sur les Installations Électriques (AREI) en Belgique. Nous sommes également couverts par une assurance responsabilité civile professionnelle pour tous nos chantiers, qu'il s'agisse de particuliers ou de professionnels.",
  },
  {
    question: "Intervenez-vous le week-end et la nuit ?",
    answer:
      "Absolument. Notre service d'urgence fonctionne 7 jours sur 7, 24 heures sur 24. Une panne électrique ne s'annonce pas : c'est pourquoi nous sommes disponibles en permanence pour vous dépanner rapidement, même en pleine nuit ou le dimanche.",
  },
  {
    question: "Quel est le coût d'une intervention d'urgence ?",
    answer:
      "Le tarif d'une intervention dépend du type de panne, de l'heure et de la durée du travail. Nous pratiquons des tarifs transparents et vous communiquons une estimation claire avant de commencer. Le déplacement est inclus dans nos tarifs. Demandez un devis gratuit via notre formulaire.",
  },
  {
    question: "Comment se déroule l'installation d'une borne de recharge ?",
    answer:
      "Notre technicien effectue d'abord un audit de votre installation électrique existante. Nous vous proposons ensuite la borne la plus adaptée à votre véhicule et à vos besoins (puissance, connectique). L'installation prend généralement une journée. Nous nous occupons également des démarches pour les primes régionales (Bruxelles Environnement, primes énergie).",
  },
  {
    question: "Puis-je bénéficier de primes pour ma borne de recharge ?",
    answer:
      "Oui. En Région de Bruxelles-Capitale, en Wallonie et en Flandre, des primes sont disponibles pour l'installation d'une borne de recharge à domicile. TF Technics vous accompagne dans toutes les démarches administratives pour maximiser votre remboursement.",
  },
  {
    question: "Acceptez-vous les bons de travaux des assurances ?",
    answer:
      "Oui, nous travaillons avec la plupart des grandes compagnies d'assurance belges. Si votre sinistre électrique est couvert par votre assurance habitation, nous pouvons intervenir directement sur bon de travaux. Contactez-nous pour vérifier la compatibilité avec votre assureur.",
  },
  {
    question: "Quelle est la garantie sur vos travaux ?",
    answer:
      "Tous nos travaux sont garantis 2 ans contre tout vice de mise en œuvre, conformément à la législation belge. Cette garantie couvre les pièces et la main-d'œuvre. Elle ne s'applique pas aux dommages causés par une mauvaise utilisation ou des modifications ultérieures non autorisées.",
  },
  {
    question: "Réalisez-vous des travaux pour les entreprises et commerces ?",
    answer:
      "Absolument. Nous intervenons aussi bien chez les particuliers que pour les PME, commerces, bureaux et copropriétés. Nous proposons des contrats de maintenance préventive pour les professionnels souhaitant bénéficier d'une priorité d'intervention et de tarifs négociés.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, le devis est entièrement gratuit et sans engagement. Remplissez notre formulaire en ligne ou appelez-nous directement. Un technicien peut se déplacer gratuitement pour évaluer votre besoin avant tout chantier important.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="faq"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(249,115,22,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* ── Gauche : En-tête sticky ── */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="lg:col-span-2 lg:sticky lg:top-32 flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <HelpCircle size={11} strokeWidth={2.5} />
              Questions fréquentes
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.07]">
              Tout ce que vous
              <br />
              <span className="text-[#f97316]">voulez savoir</span>
            </h2>
            <p className="text-[1rem] text-[#6b6b6b] leading-relaxed max-w-sm">
              Vous ne trouvez pas la réponse à votre question ? Appelez-nous ou
              utilisez notre formulaire de devis.
            </p>

            {/* CTA téléphone */}
            <a
              href="tel:+32XXXXXXXXX"
              className="
                group inline-flex items-center gap-3 w-fit
                px-5 py-3 rounded-full
                border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[14px]
                transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                hover:bg-[#f97316] hover:text-white hover:border-[#f97316]
                active:scale-[0.98]
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
              </span>
              Nous appeler directement
            </a>
          </motion.div>

          {/* ── Droite : Accordéon ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-2"
          >
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`
                    rounded-2xl overflow-hidden
                    ring-1 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${isOpen
                      ? "ring-[#f97316]/30 shadow-[0_4px_24px_rgba(249,115,22,0.08)]"
                      : "ring-black/[0.06] hover:ring-black/[0.10]"
                    }
                  `}
                >
                  {/* Bouton question */}
                  <button
                    onClick={() => toggle(i)}
                    className="
                      w-full flex items-center justify-between gap-4
                      px-5 py-4 text-left
                      bg-white
                      transition-colors duration-300
                    "
                  >
                    <span
                      className={`
                        text-[0.925rem] font-semibold leading-snug
                        transition-colors duration-300
                        ${isOpen ? "text-[#f97316]" : "text-[#2b2b2b]"}
                      `}
                    >
                      {item.question}
                    </span>

                    {/* Icône +/- animée */}
                    <span
                      className={`
                        flex-shrink-0 w-7 h-7 rounded-full
                        flex items-center justify-center
                        transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                        ${isOpen
                          ? "bg-[#f97316] text-white rotate-0"
                          : "bg-[#2b2b2b]/[0.06] text-[#2b2b2b]"
                        }
                      `}
                    >
                      {isOpen
                        ? <Minus size={13} strokeWidth={2.5} />
                        : <Plus  size={13} strokeWidth={2.5} />
                      }
                    </span>
                  </button>

                  {/* Réponse animée */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: SPRING }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-5 pb-5 text-[0.875rem] text-[#6b6b6b] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
