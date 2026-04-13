"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

interface Props { dict: Dictionary }

export default function Footer({ dict }: Props) {
  const { footer, nav, contact, meta } = dict;
  const year = new Date().getFullYear();

  /* ── Colonnes de navigation ── */
  const NAV_COLUMNS = [
    {
      title: "Services",
      links: [
        { label: "Dépannage d'urgence",        href: "/services/depannage-urgence"      },
        { label: "Borne de recharge",           href: "/services/borne-recharge"         },
        { label: "Mise en conformité RGIE",     href: "/services/renovation-conformite"  },
        { label: "Installation électrique",     href: "/services/installation-electrique"},
        { label: "Diagnostic électrique",       href: "/services/diagnostic-electrique"  },
      ],
    },
    {
      title: "Zones",
      links: [
        { label: "Bruxelles-Capitale",          href: "#zones" },
        { label: "Brabant Wallon",              href: "#zones" },
        { label: "Brabant Flamand",             href: "#zones" },
        { label: "Toutes nos communes",         href: "#zones" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos de TF Technics",    href: "#" },
        { label: "Certifications AREI",         href: "#" },
        { label: "Avis clients",                href: "#" },
        { label: nav.contact,                   href: "#contact" },
      ],
    },
  ];

  /* ── Pages légales ── */
  const LEGAL_PAGES = [
    {
      label: "Mentions légales",
      href: "/mentions-legales",
      description: "Informations sur l'éditeur du site, hébergeur, responsabilité.",
    },
    {
      label: "Conditions générales",
      href: "/conditions-generales",
      description: "CGV/CGU régissant les prestations de TF Technics.",
    },
    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite",
      description: "Traitement de vos données personnelles (RGPD).",
    },
    {
      label: "Politique de cookies",
      href: "/cookies",
      description: "Cookies utilisés sur ce site et comment les gérer.",
    },
  ];

  return (
    <footer className="relative bg-[#2b2b2b] overflow-hidden">

      {/* Décoration haute */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 65%)",
        }}
      />

      {/* ── Corps du footer ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: SPRING }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12 pt-16 pb-10 md:pt-20 md:pb-12"
      >
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

          {/* Colonne marque */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo textuel */}
            <div className="flex items-center">
              <span className="font-extrabold text-[20px] tracking-tight leading-none select-none">
                <span style={{ color: "#f97316" }}>TF</span>
                <span className="text-white"> technics</span>
              </span>
            </div>

            <p className="text-[0.875rem] text-white/45 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>

            {/* Coordonnées */}
            <div className="flex flex-col gap-2.5 mt-1">
              {[
                {
                  icon: <Phone size={13} strokeWidth={2} />,
                  value: contact.phone,
                  href: `tel:${contact.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: <Mail size={13} strokeWidth={2} />,
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: <MapPin size={13} strokeWidth={2} />,
                  value: "Bruxelles, Flandre, Brabant Wallon",
                  href: "#zones",
                },
              ].map((item) => (
                <a
                  key={item.value}
                  href={item.href}
                  className="flex items-center gap-2.5 text-[0.85rem] text-white/50 hover:text-white/80 transition-colors duration-300 font-medium w-fit"
                >
                  <span className="text-[#f97316]">{item.icon}</span>
                  {item.value}
                </a>
              ))}
            </div>

            {/* Disponibilité */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
              </span>
              <span className="text-[0.8rem] text-white/40 font-medium">
                {contact.hours}
              </span>
            </div>
          </div>

          {/* Colonnes navigation */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/30">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-300 font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Séparateur ── */}
        <div className="border-t border-white/[0.07] mb-10" />

        {/* ── Pages légales — section dédiée ── */}
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/30 mb-5">
            Informations légales & RGPD
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LEGAL_PAGES.map((page) => (
              <a
                key={page.label}
                href={page.href}
                className="
                  group flex flex-col gap-1.5 p-4 rounded-xl
                  bg-white/[0.04] border border-white/[0.06]
                  hover:bg-white/[0.07] hover:border-[#f97316]/25
                  transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.85rem] font-semibold text-white/75 group-hover:text-white transition-colors duration-300">
                    {page.label}
                  </span>
                  <ExternalLink
                    size={11}
                    strokeWidth={2}
                    className="text-white/25 group-hover:text-[#f97316] transition-colors duration-300 flex-shrink-0"
                  />
                </div>
                <p className="text-[0.775rem] text-white/30 leading-relaxed line-clamp-2">
                  {page.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* ── Séparateur ── */}
        <div className="border-t border-white/[0.07] mb-8" />

        {/* ── Bas de footer ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-white/30 text-center sm:text-left">
            © {year} TF Technics. {footer.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {LEGAL_PAGES.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="text-[0.775rem] text-white/30 hover:text-white/60 transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>

        {/* Numéro TVA / identification légale */}
        <p className="mt-4 text-center text-[0.75rem] text-white/20">
          TF Technics SRL · BCE BE 0XXX.XXX.XXX · Agréé AREI · Installateur certifié bornes de recharge
        </p>
      </motion.div>
    </footer>
  );
}
