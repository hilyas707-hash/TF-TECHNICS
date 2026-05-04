"use client";

import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const isNl = pathname.startsWith("/nl");

  function handleSwitch(next: "fr" | "nl") {
    const already = next === "nl" ? isNl : !isNl;
    if (already) return;
    window.location.href = next === "nl" ? "/nl/" : "/";
  }

  return (
    <div className="relative flex p-[3px] bg-[#2b2b2b]/[0.06] rounded-full select-none">
      {/* Pill glissante — transform seul, aucune lecture de layout */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-y-[3px] left-[3px]
          w-[calc(50%-1.5px)] rounded-full bg-[#2b2b2b]
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
        "
        style={{ transform: isNl ? "translateX(100%)" : "translateX(0)" }}
      />
      {(["fr", "nl"] as const).map((l) => {
        const isActive = l === (isNl ? "nl" : "fr");
        return (
          <button
            key={l}
            type="button"
            onClick={() => handleSwitch(l)}
            aria-label={l === "fr" ? "Passer en français" : "Overschakelen naar het Nederlands"}
            aria-pressed={isActive}
            className="
              relative z-10 w-10 py-1 rounded-full
              text-[12px] font-bold uppercase tracking-[0.08em]
              transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
            "
            style={{ color: isActive ? "#ffffff" : "#6b6b6b" }}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
