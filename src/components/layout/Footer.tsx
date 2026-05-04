"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

interface Props { dict: Dictionary }

export default function Footer({ dict }: Props) {
  void dict;
  const year = new Date().getFullYear();

  const SERVICES = [
    { label: "Dépannage d'urgence",    href: "/services/depannage-urgence"       },
    { label: "Borne de recharge",      href: "/services/borne-recharge"          },
    { label: "Mise en conformité",     href: "/services/renovation-conformite"   },
    { label: "Installation électrique",href: "/services/installation-electrique" },
    { label: "Diagnostic électrique",  href: "/services/diagnostic-electrique"   },
  ];

  const LEGAL = [
    { label: "Mentions légales",             href: "/mentions-legales"           },
    { label: "Politique de confidentialité", href: "/politique-confidentialite"  },
    { label: "Cookies",                      href: "/cookies"                    },
  ];

  return (
    <footer className="bg-[#2b2b2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12 py-14 md:py-16">

        {/* ── Ligne principale ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">

          {/* Gauche — marque + CTA */}
          <div className="flex flex-col gap-5 max-w-xs">
            <Link href="/" className="text-[1.4rem] font-extrabold tracking-[-0.03em] w-fit">
              <span className="text-[#f97316]">tf</span>
              <span className="text-white">-Technics</span>
            </Link>
            <p className="text-[0.85rem] text-white/60 leading-relaxed">
              Électricien dépanneur à Bruxelles, Flandre et Brabant Wallon.
            </p>
            <a
              href="tel:+32483480496"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c2410c] text-white font-bold text-[13px] w-fit shadow-[0_4px_16px_rgba(194,65,12,0.35)] hover:bg-[#9a3412] transition-all duration-300"
            >
              <Phone size={13} strokeWidth={2.5} />
              Appeler maintenant
            </a>
          </div>

          {/* Droite — services */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/55">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[0.85rem] text-white/70 hover:text-white/95 transition-colors duration-300 font-medium"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bas ── */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.75rem] text-white/55">
            © {year} TF Technics · Assuré RC professionnelle
          </p>
          <div className="flex items-center gap-4">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.72rem] text-white/55 hover:text-white/80 transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
