"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SPRING = [0.32, 0.72, 0, 1] as const;

/**
 * Pill FR / NL — lit la locale depuis l'URL (/ = FR, /nl = NL)
 * et navigue vers la version correspondante lors d'un clic.
 */
export default function LocaleSwitcher() {
  const pathname = usePathname();
  /* On est sur la version NL si le chemin commence par /nl */
  const isNl = pathname.startsWith("/nl");
  const active: "fr" | "nl" = isNl ? "nl" : "fr";

  function handleSwitch(next: "fr" | "nl") {
    if (next === active) return;
    window.location.href = next === "nl" ? "/nl/" : "/";
  }

  return (
    <div
      className="
        relative flex items-center gap-[2px]
        bg-[#2b2b2b]/[0.06] rounded-full p-[3px]
      "
    >
      {(["fr", "nl"] as const).map((l) => {
        const isActive = l === active;
        return (
          <button
            key={l}
            onClick={() => handleSwitch(l)}
            aria-label={l === "fr" ? "Passer en français" : "Overschakelen naar het Nederlands"}
            className="
              relative z-10 px-3 py-1 rounded-full
              text-[12px] font-bold uppercase tracking-[0.08em]
              transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
            "
            style={{ color: isActive ? "#ffffff" : "#6b6b6b" }}
          >
            {isActive && (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full bg-[#2b2b2b]"
                transition={{ duration: 0.35, ease: SPRING }}
              />
            )}
            <span className="relative z-10">{l.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
