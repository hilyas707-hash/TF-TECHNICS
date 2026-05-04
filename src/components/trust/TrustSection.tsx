"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionBridge from "@/components/ui/SectionBridge";
import type { Dictionary } from "@/i18n/dictionaries/types";

const SPRING = [0.32, 0.72, 0, 1] as const;

interface Props { dict: Dictionary }

export default function TrustSection({ dict }: Props) {
  const { trust } = dict;

  const stats = [
    trust.stats.response,
    trust.stats.interventions,
    trust.stats.experience,
    trust.stats.satisfaction,
  ];

  return (
    <section id="confiance" className="bg-bornes-gradient py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-12">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: SPRING }}
          className="mb-16 text-center flex flex-col items-center gap-3"
        >
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-[1.08]">
            {trust.reviewsTitle}
          </h2>
          <p className="text-[0.95rem] text-[#6b6b6b] max-w-lg">
            {trust.description}
          </p>
        </motion.div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: SPRING, delay: i * 0.08 }}
              className="rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-6 flex flex-col gap-1 text-center"
            >
              <p className="text-[2.2rem] font-extrabold tracking-[-0.04em] leading-none text-[#2b2b2b]">
                {stat.value}
              </p>
              <p className="text-[0.82rem] text-[#6b6b6b] font-medium leading-snug mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Label témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: SPRING }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="text-[0.8rem] font-semibold text-[#2b2b2b]">{trust.testimonialsLabel}</span>
          <span className="flex">
            {[...Array(5)].map((_, k) => (
              <Star key={k} size={13} fill="#dbb82d" stroke="none" />
            ))}
          </span>
        </motion.div>

        {/* Témoignages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trust.reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, ease: SPRING, delay: i * 0.09 }}
              className="rounded-2xl border border-[#f0f0f0] bg-white p-6 flex flex-col gap-4 shadow-[0_2px_16px_rgba(43,43,43,0.05)] hover:shadow-[0_6px_28px_rgba(43,43,43,0.09)] transition-shadow duration-300"
            >
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, k) => (
                  <Star key={k} size={14} fill="#dbb82d" stroke="none" />
                ))}
              </div>
              <p className="text-[0.875rem] text-[#4b4b4b] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#f0f0f0]">
                <div className="w-8 h-8 rounded-full bg-[#dbb82d] flex items-center justify-center text-white text-[0.75rem] font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-[0.82rem] font-semibold text-[#2b2b2b]">{review.name}</p>
                  <p className="text-[0.75rem] text-[#6b6b6b]">{review.location} · {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ligne de réassurance */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: SPRING, delay: 0.4 }}
          className="mt-12 text-center text-[0.85rem] text-[#6b6b6b] font-medium tracking-wide"
        >
          {trust.reassurance}
        </motion.p>

        <SectionBridge
          text={trust.bridgeText}
          cta={trust.bridgeCta}
          href="#zones"
        />

      </div>
    </section>
  );
}
