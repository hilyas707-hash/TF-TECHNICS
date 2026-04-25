"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowUpRight, BookOpen } from "lucide-react";
import type { Article } from "@/data/articles";

const SPRING = [0.32, 0.72, 0, 1] as const;

const CATEGORY_COLORS: Record<string, string> = {
  "Dépannage":        "bg-red-50 text-red-500 border-red-100",
  "Bornes de recharge": "bg-green-50 text-green-600 border-green-100",
  "Conformité":       "bg-blue-50 text-blue-600 border-blue-100",
  "Sécurité":         "bg-orange-50 text-[#f97316] border-orange-100",
};

interface Props { articles: Article[] }

export default function BlogListPage({ articles }: Props) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white pt-36 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.06) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b6b6b] mb-8">
            <a href="/" className="hover:text-[#f97316] transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-[#2b2b2b] font-medium">Blog</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SPRING }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-orange-50 border border-orange-100 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#f97316] w-fit">
              <BookOpen size={11} strokeWidth={2.5} />
              Conseils & guides
            </span>
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.06]">
              Le blog<br />
              <span className="text-[#f97316]">électricité TF Technics</span>
            </h1>
            <p className="text-[1rem] text-[#6b6b6b] leading-relaxed">
              Conseils pratiques, guides sur les normes AREI, primes bornes de recharge et sécurité électrique pour les particuliers et professionnels en Belgique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Liste articles ── */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: SPRING, delay: i * 0.07 }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="
                    group flex flex-col gap-4 h-full
                    rounded-2xl bg-white border border-[#f0f0f0]
                    p-6 shadow-[0_2px_12px_rgba(43,43,43,0.04)]
                    hover:shadow-[0_8px_32px_rgba(43,43,43,0.09)]
                    transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]
                  "
                >
                  {/* Catégorie + temps de lecture */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold border ${CATEGORY_COLORS[article.category] ?? "bg-gray-50 text-gray-500 border-gray-100"}`}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#9b9b9b] font-medium">
                      <Clock size={11} strokeWidth={2} />
                      {article.readTime} min
                    </span>
                  </div>

                  {/* Titre */}
                  <h2 className="text-[1rem] font-bold text-[#2b2b2b] leading-snug group-hover:text-[#f97316] transition-colors duration-300">
                    {article.title}
                  </h2>

                  {/* Extrait */}
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
                    <time className="text-[11px] text-[#9b9b9b] font-medium">
                      {new Date(article.date).toLocaleDateString("fr-BE", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                    <span className="
                      flex items-center gap-1 text-[12px] font-semibold text-[#f97316]
                      group-hover:gap-2 transition-all duration-300
                    ">
                      Lire l&apos;article
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
