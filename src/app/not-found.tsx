import Link from "next/link";
import { Phone, ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      {/* Décoration ambiante */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-md">
        {/* Icône */}
        <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 flex items-center justify-center">
          <Zap size={28} className="text-[#f97316]" strokeWidth={1.8} />
        </div>

        {/* Code erreur */}
        <p className="text-[6rem] font-extrabold leading-none tracking-[-0.05em] text-[#2b2b2b]/[0.08] select-none">
          404
        </p>

        {/* Message */}
        <div className="-mt-6 flex flex-col gap-3">
          <h1 className="text-[1.8rem] font-extrabold tracking-[-0.03em] text-[#2b2b2b] leading-tight">
            Page introuvable
          </h1>
          <p className="text-[1rem] text-[#6b6b6b] leading-relaxed">
            Cette page n&apos;existe pas ou a été déplacée.
            Revenez à l&apos;accueil ou appelez-nous directement.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/"
            className="
              flex items-center justify-center gap-2
              px-5 py-3 rounded-full
              border border-[#2b2b2b]/12 text-[#2b2b2b] font-semibold text-[14px]
              hover:bg-[#2b2b2b] hover:text-white hover:border-[#2b2b2b]
              transition-all duration-300
            "
          >
            <ArrowLeft size={15} strokeWidth={2.5} />
            Retour à l&apos;accueil
          </Link>
          <a
            href="tel:+32483480496"
            className="
              flex items-center justify-center gap-2
              px-5 py-3 rounded-full
              bg-[#f97316] text-white font-semibold text-[14px]
              hover:bg-[#ea580c]
              transition-colors duration-300
              shadow-[0_4px_16px_rgba(249,115,22,0.35)]
            "
          >
            <Phone size={15} strokeWidth={2.5} />
            Appeler TF Technics
          </a>
        </div>
      </div>
    </main>
  );
}
