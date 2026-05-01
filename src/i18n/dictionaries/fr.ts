import type { Dictionary } from "./types";

const fr: Dictionary = {
  /* ─── Métadonnées SEO ─────────────────────────────────────────────────── */
  meta: {
    siteName: "Électricien Dépanneur Bruxelles",
    defaultTitle: "Électricien Dépanneur à Bruxelles | Urgence 24h/24 – 7j/7",
    defaultDescription:
      "Électricien agréé intervenant en urgence à Bruxelles, en Flandre et en Brabant Wallon. Dépannage rapide, installation et borne de recharge. Devis gratuit.",
    keywords:
      "électricien bruxelles, dépannage électrique, urgence électricien, borne recharge voiture électrique, électricien agréé belgique",
  },

  /* ─── Navigation ──────────────────────────────────────────────────────── */
  nav: {
    services: "Services",
    zones: "Zones d'intervention",
    bornes: "Bornes de recharge",
    urgence: "Urgence",
    contact: "Contact",
    callNow: "Appeler maintenant",
    language: "NL",
  },

  /* ─── Hero ────────────────────────────────────────────────────────────── */
  hero: {
    badge: "Intervention en moins de 60 min",
    title: "Votre électricien\ndépanneur à Bruxelles",
    subtitle:
      "Disponible 24h/24 – 7j/7 pour toutes vos urgences électriques à Bruxelles, en Flandre et en Brabant Wallon.",
    cta: "Appeler pour une urgence",
    ctaSecondary: "Nos services",
    phone: "+32 XXX XX XX XX",
    trust: {
      certified: "Assurés RC Pro",
      available: "Disponible 24h/24",
      speed: "Intervention < 60 min",
    },
  },

  /* ─── Services ────────────────────────────────────────────────────────── */
  services: {
    sectionTitle: "Nos services",
    sectionSubtitle:
      "Des interventions rapides et soignées pour particuliers et professionnels.",
    items: {
      depannage: {
        title: "Dépannage d'urgence",
        description:
          "Panne de courant, court-circuit, disjoncteur qui saute ? Nous intervenons en urgence, de jour comme de nuit.",
      },
      borne: {
        title: "Borne de recharge",
        description:
          "Installation de wallbox jusqu'à 22 kW à domicile ou en entreprise. Accompagnement pour les primes régionales.",
      },
      renovation: {
        title: "Mise en conformité RGIE",
        description:
          "Mise aux normes AREI/RGIE de votre installation. Rapport de conformité officiel pour assurance et vente.",
      },
      installation: {
        title: "Installation électrique",
        description:
          "Tableau électrique, prises, éclairage : tous types d'installations pour votre habitation ou bureau.",
      },
      diagnostic: {
        title: "Diagnostic électrique",
        description:
          "Contrôle complet de votre installation avec rapport technique détaillé et recommandations prioritaires.",
      },
    },
  },

  /* ─── Zones d'intervention ────────────────────────────────────────────── */
  zones: {
    sectionTitle: "Zones d'intervention",
    sectionSubtitle:
      "Nous couvrons Bruxelles et ses environs en Flandre et en Brabant Wallon.",
    regions: {
      bruxelles: {
        name: "Bruxelles-Capitale",
        cities: [
          "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Bruxelles-Ville",
          "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette",
          "Koekelberg", "Molenbeek", "Saint-Gilles", "Saint-Josse", "Schaerbeek",
          "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre",
        ],
      },
      brabantWallon: {
        name: "Brabant Wallon",
        cities: [
          "Wavre", "Waterloo", "Braine-l'Alleud", "Ottignies-LLN",
          "La Hulpe", "Rixensart", "Nivelles",
        ],
      },
      flamand: {
        name: "Brabant Flamand",
        cities: [
          "Zaventem", "Tervuren", "Wezembeek-Oppem", "Kraainem",
          "Overijse", "Halle", "Vilvoorde",
        ],
      },
    },
  },

  /* ─── Bornes de recharge ──────────────────────────────────────────────── */
  bornes: {
    sectionTitle: "Bornes de recharge",
    sectionSubtitle:
      "Installation professionnelle de wallbox pour véhicules électriques.",
    ctaInstall: "Demander un devis",
    features: {
      certified: "Technicien qualifié",
      subsidy: "Aide aux démarches pour primes",
      speed: "Installation en une journée",
    },
  },

  /* ─── Confiance / Preuves sociales ───────────────────────────────────── */
  trust: {
    sectionTitle: "Pourquoi nous choisir ?",
    stats: {
      interventions: { value: "24h/24",   label: "Disponible 7j/7" },
      experience:    { value: "0 €",      label: "Devis gratuit" },
      satisfaction:  { value: "2 ans",    label: "Garantie travaux" },
      response:      { value: "< 60 min", label: "Délai d'intervention" },
    },
  },

  /* ─── Contact & Urgence ───────────────────────────────────────────────── */
  contact: {
    sectionTitle: "Contactez-nous",
    urgencyTitle: "Urgence électrique ?",
    urgencySubtitle: "Appelez-nous immédiatement, nous intervenons en moins de 60 minutes.",
    phone: "+32 XXX XX XX XX",
    email: "info@electricien-bruxelles.be",
    hours: "Disponible 24h/24 – 7j/7",
    formName: "Votre nom",
    formPhone: "Votre téléphone",
    formMessage: "Décrivez votre problème",
    formSubmit: "Envoyer ma demande",
    formSuccess: "Votre message a bien été envoyé. Nous vous contactons rapidement.",
  },

  /* ─── Pied de page ────────────────────────────────────────────────────── */
  footer: {
    tagline: "Électricien professionnel – Bruxelles, Flandre, Brabant Wallon",
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
  },
};

export default fr;
