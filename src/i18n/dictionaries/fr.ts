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
    phone: "+32 483 48 04 96",
    trust: {
      certified: "Assurés RC Pro",
      available: "Disponible 24h/24",
      speed: "Intervention < 60 min",
    },
  },

  /* ─── Services ────────────────────────────────────────────────────────── */
  services: {
    sectionTitle: "Nos services électriques",
    sectionSubtitle:
      "Dépannage électrique d'urgence, installation de bornes de recharge wallbox et mise en conformité RGIE/AREI — à Bruxelles, en Flandre et en Brabant Wallon.",
    items: {
      depannage: {
        title: "Dépannage électrique d'urgence",
        description:
          "Disjoncteur différentiel 30 mA qui saute, court-circuit, panne de courant totale ou partielle ? Intervention en moins de 60 min, 24h/24 et 7j/7 — week-ends et jours fériés inclus.",
      },
      borne: {
        title: "Borne de recharge wallbox",
        description:
          "Installation de bornes de recharge mode 3 type 2 jusqu'à 22 kW. Déclaration Synergrid, contrôle RGIE et accompagnement pour les primes Bruxelles Environnement inclus.",
      },
      renovation: {
        title: "Mise en conformité RGIE/AREI",
        description:
          "Schéma unifilaire, liaison équipotentielle, différentiel 300 mA : mise aux normes complète avec rapport de conformité officiel pour assurance et vente immobilière.",
      },
      installation: {
        title: "Installation électrique",
        description:
          "Tableau de répartition, câbles VV-U et EXVB section 2,5 mm², prises, éclairage : toutes installations pour particuliers et professionnels selon les normes AREI en vigueur.",
      },
      diagnostic: {
        title: "Diagnostic électrique",
        description:
          "Contrôle complet de votre installation : mesure des courants de fuite, vérification des indices IP, rapport technique détaillé et recommandations prioritaires.",
      },
    },
  },

  /* ─── Zones d'intervention ────────────────────────────────────────────── */
  zones: {
    sectionTitle: "Électricien à Bruxelles, Flandre et Brabant Wallon",
    sectionSubtitle:
      "Dépannage et installation électrique disponibles 24h/24 dans toute la région de Bruxelles et ses environs.",
    description:
      "Basés à Wemmel, nos électriciens qualifiés interviennent dans tout le Grand Bruxelles et ses alentours. À Bruxelles-Capitale, nous prenons en charge les dépannages électriques urgents : disjoncteur défaillant, panne de courant totale ou partielle, court-circuit. En Brabant Wallon, nous installons des bornes de recharge wallbox à Wavre, Waterloo et Braine-l'Alleud, et réalisons des mises en conformité AREI pour les transactions immobilières. En Brabant Flamand, nous intervenons à Zaventem, Vilvoorde et Tervuren pour toutes vos installations électriques. Assurés RC professionnelle, nos techniciens se déplacent 24h/24 et 7j/7 pour les urgences.",
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
    sectionTitle: "Bornes de recharge à Bruxelles",
    sectionSubtitle:
      "Installation de wallbox jusqu'à 22 kW à domicile ou en entreprise, à Bruxelles, en Flandre et en Brabant Wallon.",
    ctaInstall: "Demander un devis",
    features: {
      certified: "Technicien qualifié",
      subsidy: "Aide aux démarches pour primes",
      speed: "Installation en une journée",
    },
  },

  /* ─── Confiance / Preuves sociales ───────────────────────────────────── */
  trust: {
    sectionTitle: "Votre électricien de confiance à Bruxelles",
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
    urgencySubtitle: "TF Technics intervient pour tout dépannage électrique urgent à Bruxelles et en Brabant Wallon dans un délai maximum de 60 minutes. Disponible 24h/24 et 7j/7 au +32 483 48 04 96 — y compris les week-ends et jours fériés.",
    phone: "+32 483 48 04 96",
    email: "info@tftechnics.be",
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
