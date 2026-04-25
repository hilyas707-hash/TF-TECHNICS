/* ─── Configuration globale du site ────────────────────────────────────────
   Source unique de vérité pour le téléphone, l'email et l'URL de base.
   Modifiez ces valeurs ici → répercussion automatique sur tout le site.
──────────────────────────────────────────────────────────────────────────── */

export const SITE = {
  /* ⚠️  REMPLACEZ PAR LE VRAI NUMÉRO AVANT MISE EN PRODUCTION */
  phone:    "+32 XXX XX XX XX",
  phoneTel: "+32XXXXXXXXX",          // format href:tel (sans espaces)

  email:    "info@tftechnics.be",
  baseUrl:  "https://mon-super-site-mu.vercel.app",
  name:     "TF Technics",
} as const;
