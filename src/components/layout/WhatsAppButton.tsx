"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const SPRING = [0.32, 0.72, 0, 1] as const;

/*
 * ⚠️  REMPLACE CE NUMÉRO par ton vrai numéro WhatsApp Business
 * Format : indicatif pays sans + ni 0 → ex. 32477123456 pour +32 477 12 34 56
 */
const WA_NUMBER  = "32XXXXXXXXX";
const WA_MESSAGE = encodeURIComponent(
  "Bonjour TF Technics, je souhaite obtenir des informations sur vos services électriques."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

/* ─── Anneaux de pulsation ───────────────────────────────────────────────────
   3 ondes concentriques décalées de 0.8 s chacune.
   Couleur : orange de marque (#f97316) à faible opacité pour rester subtil.
   pointer-events-none → aucun impact sur les clics ni sur la mise en page.
─────────────────────────────────────────────────────────────────────────── */
const PULSE_RINGS = [
  { delay: 0,   opacity: 0.30 },
  { delay: 0.8, opacity: 0.20 },
  { delay: 1.6, opacity: 0.12 },
];

export default function WhatsAppButton() {
  const [bubbleOpen, setBubbleOpen] = useState(false);

  return (
    /* ── Conteneur fixe — bas droite ── */
    <div className="fixed bottom-10 right-8 z-[80] flex flex-col items-end gap-3">

      {/* ── Bulle de message ── */}
      <AnimatePresence>
        {bubbleOpen && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, scale: 0.85, y: 12, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.85, y: 12  }}
            transition={{ duration: 0.35, ease: SPRING }}
            className="w-72 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.16)] ring-1 ring-black/[0.07]"
          >
            {/* En-tête vert WhatsApp */}
            <div className="flex items-center justify-between gap-3 bg-[#25D366] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white leading-tight">TF Technics</p>
                  <p className="text-[11px] text-white/70">Disponible 24h/24</p>
                </div>
              </div>
              <button
                onClick={() => setBubbleOpen(false)}
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={12} strokeWidth={2.5} />
              </button>
            </div>

            {/* Corps */}
            <div className="bg-white px-4 py-4 flex flex-col gap-3">
              {/* Bulle de message style WhatsApp */}
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none px-3.5 py-2.5 max-w-[90%]">
                <p className="text-[0.8rem] text-[#2b2b2b] leading-relaxed">
                  👋 Bonjour ! Comment puis-je vous aider ? Envoyez-moi un message,
                  je réponds rapidement.
                </p>
                <p className="text-[10px] text-[#6b6b6b] mt-1 text-right">
                  TF Technics
                </p>
              </div>

              {/* Bouton envoyer */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-full py-3 rounded-full
                  bg-[#25D366] text-white font-bold text-[13px]
                  hover:bg-[#1ebe5b] active:scale-[0.98]
                  transition-all duration-300
                  shadow-[0_4px_14px_rgba(37,211,102,0.35)]
                "
              >
                <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Écrire sur WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bouton principal + anneaux de pulsation ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: SPRING, delay: 1.5 }}
        className="relative"
      >
        {/* ── Anneaux de pulsation ─────────────────────────────────────────
            Visibles uniquement quand la bulle est fermée.
            Positionnés en absolute sur le centre du bouton (inset-0),
            pointer-events-none pour ne jamais capturer les clics.
        ──────────────────────────────────────────────────────────────── */}
        {!bubbleOpen && PULSE_RINGS.map(({ delay, opacity }) => (
          <motion.span
            key={delay}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ backgroundColor: `rgba(249,115,22,${opacity})` }}
            animate={{
              scale:   [1, 2.6],
              opacity: [opacity, 0],
            }}
            transition={{
              duration:    2,
              ease:        "easeOut",
              repeat:      Infinity,
              delay,
              repeatDelay: 0,
            }}
          />
        ))}

        {/* Bouton WhatsApp */}
        <motion.button
          onClick={() => setBubbleOpen(!bubbleOpen)}
          aria-label="Ouvrir le chat WhatsApp"
          className="
            relative z-10
            w-14 h-14 rounded-full
            bg-[#25D366]
            flex items-center justify-center
            shadow-[0_6px_28px_rgba(37,211,102,0.45)]
            hover:shadow-[0_8px_36px_rgba(37,211,102,0.60)]
            hover:scale-110
            active:scale-[0.95]
            transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
          "
        >
          {/* Icône animée */}
          <AnimatePresence mode="wait">
            {bubbleOpen ? (
              <motion.span
                key="close"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0   }}
                exit={{   scale: 0, rotate:  90  }}
                transition={{ duration: 0.25, ease: SPRING }}
              >
                <X size={22} strokeWidth={2.5} className="text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ scale: 0, rotate: 90  }}
                animate={{ scale: 1, rotate: 0   }}
                exit={{   scale: 0, rotate: -90  }}
                transition={{ duration: 0.25, ease: SPRING }}
              >
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.span>
            )}
          </AnimatePresence>

          {/* Indicateur de présence — petit dot blanc en haut à droite */}
          {!bubbleOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]" />
            </span>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
