"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowLeft, Phone, ArrowUpRight } from "lucide-react";
import type { Article, ArticleBlock } from "@/data/articles";

const SPRING = [0.32, 0.72, 0, 1] as const;

function RenderBlock({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-[1.5rem] font-extrabold tracking-[-0.025em] text-[#2b2b2b] mt-10 mb-4 leading-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-[1.15rem] font-bold text-[#2b2b2b] mt-7 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="text-[1rem] text-[#4b4b4b] leading-[1.75] mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mb-5 flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[0.95rem] text-[#4b4b4b] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div className="my-6 rounded-2xl bg-orange-50 border border-orange-100 px-5 py-4">
          <p className="text-[0.95rem] text-[#2b2b2b] leading-relaxed font-medium">
            {block.text}
          </p>
        </div>
      );
    case "cta":
      return (
        <div className="my-8">
          <a
            href={block.href}
            className="
              group inline-flex items-center justify-between gap-3
              pl-5 pr-2 py-3 rounded-full
              bg-[#f97316] text-white font-bold text-[15px]
              shadow-[0_4px_20px_rgba(249,115,22,0.38)]
              hover:bg-[#ea580c] active:scale-[0.98]
              transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            "
          >
            <div className="flex items-center gap-2.5">
              <Phone size={15} strokeWidth={2.5} />
              {block.label}
            </div>
            <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      );
  }
}

interface Props { article: Article }

export default function BlogPostPage({ article }: Props) {
  return (
    <>
      {/* ── Hero article ── */}
      <section className="relative bg-white pt-36 pb-10 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.05) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-[12px] text-[#6b6b6b] mb-8">
            <a href="/" className="hover:text-[#f97316] transition-colors">Accueil</a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#f97316] transition-colors">Blog</a>
            <span>/</span>
            <span className="text-[#2b2b2b] font-medium truncate max-w-[200px]">{article.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="flex flex-col gap-5"
          >
            {/* Catégorie + temps de lecture */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold bg-orange-50 text-[#f97316] border border-orange-100">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-[#9b9b9b] font-medium">
                <Clock size={12} strokeWidth={2} />
                {article.readTime} min de lecture
              </span>
              <time className="text-[12px] text-[#9b9b9b] font-medium">
                {new Date(article.date).toLocaleDateString("fr-BE", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </div>

            {/* H1 */}
            <h1 className="text-[clamp(1.8rem,4.5vw,3rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.1]">
              {article.title}
            </h1>

            {/* Extrait */}
            <p className="text-[1.05rem] text-[#6b6b6b] leading-relaxed border-l-2 border-[#f97316] pl-4">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: SPRING, delay: 0.1 }}
          >
            {article.content.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
          </motion.div>

          {/* Footer article */}
          <div className="mt-12 pt-8 border-t border-[#f0f0f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[14px] font-semibold text-[#6b6b6b] hover:text-[#2b2b2b] transition-colors"
            >
              <ArrowLeft size={15} strokeWidth={2.5} />
              Retour au blog
            </Link>
            <p className="text-[0.8rem] text-[#9b9b9b]">
              Article rédigé par TF Technics — électricien professionnel à Bruxelles
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA bas de page ── */}
      <section className="py-14 bg-[#f8f8f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center gap-4">
          <h2 className="text-[1.4rem] font-extrabold text-[#2b2b2b] tracking-[-0.025em]">
            Besoin d&apos;un électricien à Bruxelles ?
          </h2>
          <p className="text-[0.9rem] text-[#6b6b6b]">
            TF Technics intervient en moins de 60 min, 24h/24 – 7j/7. Devis gratuit.
          </p>
          <a
            href="tel:+32XXXXXXXXX"
            className="
              group inline-flex items-center justify-between gap-3
              pl-6 pr-2 py-3 rounded-full
              bg-[#f97316] text-white font-bold text-[15px]
              shadow-[0_4px_20px_rgba(249,115,22,0.38)]
              hover:bg-[#ea580c] active:scale-[0.98]
              transition-all duration-500
            "
          >
            <div className="flex items-center gap-2.5">
              <Phone size={15} strokeWidth={2.5} />
              Appeler TF Technics
            </div>
            <span className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
