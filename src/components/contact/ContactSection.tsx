"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

interface Props { dict: Dictionary }

export default function ContactSection({ dict }: Props) {
  const { contact } = dict;
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [form,    setForm]    = useState({ name: "", phone: "", message: "" });
  const [honey,   setHoney]   = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honey) return; // honeypot : bot détecté, on ignore silencieusement
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur");
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Appelez-nous directement.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Décoration */}
      <div
        aria-hidden
        className="halo-tl pointer-events-none absolute top-0 left-0 w-[700px] h-[500px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* Bandeau urgence — fond anthracite */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: SPRING }}
          className="
            mb-16 md:mb-20 rounded-[2rem] p-2
            bg-[#2b2b2b] ring-1 ring-white/[0.06]
            shadow-[0_8px_48px_rgba(43,43,43,0.22)]
          "
        >
          <div
            className="
              rounded-[calc(2rem-0.5rem)] px-7 py-10 md:py-14
              bg-[#2b2b2b]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]
              overflow-hidden relative
            "
          >
            {/* Reflet orange */}
            <div
              aria-hidden
              className="halo-center-lg pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[#f97316]/15 border border-[#f97316]/25 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] mx-auto md:mx-0 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                  Disponible maintenant
                </span>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
                  {contact.urgencyTitle}
                </h2>
                <p className="text-[0.95rem] text-white/80 max-w-md leading-relaxed">
                  {contact.urgencySubtitle}
                </p>
              </div>

              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="
                  group flex-shrink-0 inline-flex items-center justify-between gap-3
                  pl-6 pr-2 py-2.5 rounded-full
                  bg-[#f97316] text-white font-bold text-[16px]
                  transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                  hover:bg-[#ea580c] active:scale-[0.98]
                  shadow-[0_4px_24px_rgba(249,115,22,0.45)]
                  hover:shadow-[0_6px_32px_rgba(249,115,22,0.60)]
                "
              >
                <div className="flex items-center gap-3">
                  <Phone size={17} strokeWidth={2.5} />
                  {contact.phone}
                </div>
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Grille formulaire + infos */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit mb-4">
                Nous contacter
              </span>
              <h3 className="text-[1.6rem] font-extrabold tracking-[-0.025em] text-[#2b2b2b] leading-tight">
                {contact.sectionTitle}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <Phone size={16} strokeWidth={2} />,
                  label: "Téléphone",
                  value: contact.phone,
                  href: `tel:${contact.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: <Mail size={16} strokeWidth={2} />,
                  label: "E-mail",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: <Clock size={16} strokeWidth={2} />,
                  label: "Disponibilité",
                  value: contact.hours,
                  href: null,
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 text-[#f97316]">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#6b6b6b] mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[0.95rem] font-semibold text-[#2b2b2b] hover:text-[#f97316] transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[0.95rem] font-semibold text-[#2b2b2b]">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {/* Outer shell */}
            <div className="rounded-[1.75rem] p-2 bg-black/[0.025] ring-1 ring-black/[0.06] shadow-[0_4px_24px_rgba(43,43,43,0.07)]">
              {/* Inner core */}
              <div className="rounded-[calc(1.75rem-0.5rem)] bg-white p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: SPRING }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#f97316]/12 flex items-center justify-center">
                      <Send size={22} strokeWidth={1.8} className="text-[#f97316]" />
                    </div>
                    <p className="text-[1rem] font-bold text-[#2b2b2b]">
                      {contact.formSuccess}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Honeypot anti-spam — invisible pour les humains */}
                    <input
                      type="text"
                      name="website"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute left-[-9999px] opacity-0 pointer-events-none"
                    />
                    {/* Nom */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">
                        {contact.formName}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08]
                          text-[0.95rem] text-[#2b2b2b] font-medium
                          placeholder:text-[#6b6b6b]/60
                          focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50
                          transition-all duration-300
                        "
                        placeholder="Jean Dupont"
                      />
                    </div>

                    {/* Téléphone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">
                        {contact.formPhone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08]
                          text-[0.95rem] text-[#2b2b2b] font-medium
                          placeholder:text-[#6b6b6b]/60
                          focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50
                          transition-all duration-300
                        "
                        placeholder="+32 4XX XX XX XX"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-semibold text-[#6b6b6b] uppercase tracking-[0.1em]">
                        {contact.formMessage}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="
                          w-full px-4 py-3 rounded-xl resize-none
                          bg-[#2b2b2b]/[0.04] border border-[#2b2b2b]/[0.08]
                          text-[0.95rem] text-[#2b2b2b] font-medium
                          placeholder:text-[#6b6b6b]/60
                          focus:outline-none focus:border-[#f97316]/50 focus:bg-orange-50/50
                          transition-all duration-300
                        "
                        placeholder="Décrivez votre panne ou votre projet…"
                      />
                    </div>

                    {/* Bouton envoi */}
                    {error && (
                      <p className="text-[0.82rem] text-red-500 font-medium">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group mt-2 inline-flex items-center justify-between gap-3
                        pl-6 pr-2 py-3 rounded-full
                        bg-[#2b2b2b] text-white font-bold text-[15px]
                        transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                        hover:bg-[#f97316] active:scale-[0.98] disabled:opacity-60 disabled:cursor-wait
                        shadow-[0_4px_16px_rgba(43,43,43,0.20)]
                        hover:shadow-[0_4px_20px_rgba(249,115,22,0.38)]
                      "
                    >
                      {loading ? "Envoi…" : contact.formSubmit}
                      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                        <Send size={14} strokeWidth={2.5} />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
