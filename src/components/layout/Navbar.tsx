"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, Zap, BatteryCharging, Wrench, PlugZap, ScanSearch } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

const SPRING = [0.32, 0.72, 0, 1] as const;
const PHONE  = "+32 483 48 04 96";

const SERVICES_NAV: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Dépannage d'urgence",     href: "/services/depannage-urgence",      Icon: Zap             },
  { label: "Borne de recharge",       href: "/services/borne-recharge",         Icon: BatteryCharging },
  { label: "Mise en conformité",      href: "/services/renovation-conformite",  Icon: Wrench          },
  { label: "Installation électrique", href: "/services/installation-electrique",Icon: PlugZap         },
  { label: "Diagnostic électrique",   href: "/services/diagnostic-electrique",  Icon: ScanSearch      },
];

const NAV_LINKS = [
  { label: "Zones",    href: "/#zones"   },
  { label: "Tarifs",   href: "/tarifs"   },
  { label: "Devis",    href: "/devis"    },
  { label: "FAQ",      href: "/faq"      },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: SPRING }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav className="flex items-center justify-between gap-6 w-full max-w-5xl px-5 py-0 rounded-full bg-white/85 backdrop-blur-xl ring-1 ring-black/[0.07] shadow-[0_4px_28px_rgba(43,43,43,0.09)]">
        <a href="/" className="flex items-center flex-shrink-0 select-none py-2">
          <Image src="/logo.svg" alt="TF Technics" width={148} height={32} priority className="h-8 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <div className="relative group/svc py-4">
            <button className="flex items-center gap-1 text-[13px] font-medium text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors duration-300">
              Services
              <ChevronDown size={11} strokeWidth={2.5} className="transition-transform duration-300 group-hover/svc:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-max opacity-0 pointer-events-none group-hover/svc:opacity-100 group-hover/svc:pointer-events-auto transition-all duration-200 pt-2">
              <div className="rounded-2xl bg-white ring-1 ring-black/[0.07] shadow-[0_8px_40px_rgba(43,43,43,0.13)] p-2 min-w-[240px] flex flex-col gap-0.5">
                {SERVICES_NAV.map(({ label, href, Icon }) => (
                  <a key={href} href={href}
                    className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f97316]/[0.06] transition-colors duration-200"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                      <Icon size={14} strokeWidth={2} />
                    </span>
                    <span className="text-[13px] font-semibold text-[#2b2b2b] group-hover/item:text-[#f97316] transition-colors duration-200">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className="text-[13px] font-medium text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><LocaleSwitcher /></div>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#2b2b2b] text-white text-[13px] font-semibold transition-all duration-500 hover:bg-[#f97316] active:scale-[0.97]">
            <Phone size={12} strokeWidth={2.5} />Appeler
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            className="md:hidden relative w-11 h-11 rounded-full bg-[#2b2b2b]/[0.07] flex items-center justify-center transition-colors hover:bg-[#2b2b2b]/[0.12] active:scale-[0.95]">
            <motion.div animate={{ rotate: menuOpen ? 45 : 0, opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.3, ease: SPRING }} className="absolute">
              <Menu size={18} strokeWidth={2} className="text-[#2b2b2b]" />
            </motion.div>
            <motion.div animate={{ rotate: menuOpen ? 0 : -45, opacity: menuOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: SPRING }} className="absolute">
              <X size={18} strokeWidth={2} className="text-[#2b2b2b]" />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.35, ease: SPRING }}
        className="absolute top-20 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-2xl ring-1 ring-black/[0.07] shadow-[0_16px_64px_rgba(43,43,43,0.14)] p-5 flex flex-col gap-1 md:hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={menuOpen ? { opacity: 1, y: 0, transition: { delay: 0, duration: 0.4, ease: SPRING } } : { opacity: 0, y: 12 }}
        >
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-semibold text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.04] transition-colors"
          >
            Services
            <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="pl-2 flex flex-col gap-0.5 mt-1">
              {SERVICES_NAV.map(({ label, href, Icon }) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#6b6b6b] hover:text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.04] transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                    <Icon size={13} strokeWidth={2} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {NAV_LINKS.map((l, i) => (
          <motion.a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 12 }}
            animate={menuOpen ? { opacity: 1, y: 0, transition: { delay: 0.06 * (i + 1), duration: 0.4, ease: SPRING } } : { opacity: 0, y: 12 }}
            className="px-4 py-3.5 rounded-xl text-[16px] font-semibold text-[#2b2b2b] hover:bg-[#2b2b2b]/[0.04] transition-colors">
            {l.label}
          </motion.a>
        ))}

        <div className="px-4 py-2"><LocaleSwitcher /></div>
        <div className="mt-2 pt-3 border-t border-black/[0.06]">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-full bg-[#f97316] text-white font-bold text-[16px] shadow-[0_4px_20px_rgba(249,115,22,0.35)] active:scale-[0.98] transition-transform">
            <Phone size={16} strokeWidth={2.5} />{PHONE}
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
