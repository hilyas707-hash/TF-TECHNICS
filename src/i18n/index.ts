import type { Dictionary } from "./dictionaries/types";

export type Locale = "fr" | "nl";

export const locales: Locale[] = ["fr", "nl"];
export const defaultLocale: Locale = "fr";

/**
 * Charge le dictionnaire correspondant à la locale demandée.
 * Utilisé côté serveur (App Router) pour les Server Components.
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case "nl":
      return (await import("./dictionaries/nl")).default;
    case "fr":
    default:
      return (await import("./dictionaries/fr")).default;
  }
}

export type { Dictionary };
