"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

interface Props { dict: Dictionary }

export default function Footer({ dict }: Props) {
  const { footer, nav, contact } = dict;
  const year = new Date().getFullYear();

  const NAV_COLUMNS = [
    {
      title: "Services",
      links: [
        { label: "Dépannage d'urgence",       href: "/services/depannage-urgence"       },
        { label: "Borne de recharge",          href: "/services/borne-recharge"          },
        { label: "Mise en conformité RGIE",    href: "/services/renovation-conformite"   },
        { label: "Installation électrique",    href: "/services/installation-electrique" },
        { label: "Diagnostic électrique",      href: "/services/diagnostic-electrique"   },
      ],
    },
    {
      title: "Zones",
      links: [
        { label: "Bruxelles-Capitale", href: "#zones" },
        { label: "Brabant Wallon",     href: "#zones" },
        { label: "Brabant Flamand",    href: "#zones" },
        { label: "Toutes nos communes",href: "#zones" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos de TF Technics", href: "#"        },
        { label: "Nos engagements",           href: "#confiance"},
        { label: "Avis clients",             href: "#confiance"},
        { label: nav.contact,                href: "#contact"  },
      ],
    },
  ];

  const LEGAL_LINKS = [
    { label: "Mentions légales",           href: "/mentions-legales"          },
    { label: "Conditions générales",       href: "/conditions-generales"      },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Cookies",                    href: "/cookies"                   },
  ];

  return (
    <footer className="relative bg-[#2b2b2b] overflow-hidden">

      {/* Décoration haute */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px]"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 65%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: SPRING }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12 pt-16 pb-10 md:pt-20 md:pb-12"
      >

        {/* ── Grille principale ── */}
        {/* Mobile : marque pleine largeur, puis nav en 3 colonnes côte à côte */}
        <div className="grid grid-cols-1 gap-10 mb-12">

          {/* Colonne marque */}
          <div className="flex flex-col gap-5">
            <a href="/" className="w-fit">
              <Image
                src="/logo.svg"
                alt="TF Technics — électricien Bruxelles"
                width={148}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </a>

            <p className="text-[0.875rem] text-white/45 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                { icon: <Phone size={13} strokeWidth={2} />, value: contact.phone,  href: `tel:${contact.phone.replace(/\s/g, "")}` },
                { icon: <Mail  size={13} strokeWidth={2} />, value: contact.email,  href: `mailto:${contact.email}` },
                { icon: <MapPin size={13} strokeWidth={2} />, value: "Bruxelles, Flandre, Brabant Wallon", href: "#zones" },
              ].map((item) => (
                <a key={item.value} href={item.href} className="flex items-center gap-2.5 text-[0.85rem] text-white/50 hover:text-white/80 transition-colors duration-300 font-medium w-fit">
                  <span className="text-[#f97316]">{item.icon}</span>
                  {item.value}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
              </span>
              <span className="text-[0.8rem] text-white/40 font-medium">{contact.hours}</span>
            </div>
          </div>

          {/* Colonnes nav — toujours 3 colonnes côte à côte (mobile + desktop) */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            {NAV_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold text-white/30">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[0.75rem] sm:text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-300 font-medium leading-snug block">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Séparateur ── */}
        <div className="border-t border-white/[0.07] mb-6" />

        {/* ── Bas de footer — copyright + liens légaux minimalistes ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.775rem] text-white/30 text-center sm:text-left">
            © {year} TF Technics. {footer.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {LEGAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-[0.72rem] text-white/30 hover:text-white/60 transition-colors duration-300 font-medium whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-[0.72rem] text-white/20">
          TF Technics SRL · BCE BE 0XXX.XXX.XXX · Assuré RC professionnelle · Devis gratuit sans engagement
        </p>

      </motion.div>
    </footer>
  );
}
