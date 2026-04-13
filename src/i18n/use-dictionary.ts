"use client";

/**
 * Hook client pour accéder au dictionnaire dans les Client Components.
 * Le dictionnaire doit être passé en prop depuis un Server Component parent.
 *
 * Usage :
 *   // Server Component
 *   const dict = await getDictionary(locale);
 *   return <ClientComponent dict={dict} />;
 *
 *   // Client Component
 *   export function ClientComponent({ dict }: { dict: Dictionary }) {
 *     return <h1>{dict.hero.title}</h1>;
 *   }
 */

import type { Dictionary } from "./dictionaries/types";

export type { Dictionary };
