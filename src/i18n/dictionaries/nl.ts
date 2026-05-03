import type { Dictionary } from "./types";

const nl: Dictionary = {
  /* ─── Metagegevens SEO ────────────────────────────────────────────────── */
  meta: {
    siteName: "Elektricien Herstellingen Brussel",
    defaultTitle: "Elektricien Herstellingen Brussel | Spoed 24u/24 – 7d/7",
    defaultDescription:
      "Erkende elektricien voor spoedinterventies in Brussel, Vlaanderen en Waals-Brabant. Snelle herstellingen, installaties en laadpaal. Gratis offerte.",
    keywords:
      "elektricien brussel, elektrische panne, spoed elektricien, laadpaal elektrische wagen, erkende elektricien belgie",
  },

  /* ─── Navigatie ───────────────────────────────────────────────────────── */
  nav: {
    services: "Diensten",
    zones: "Werkgebied",
    bornes: "Laadpalen",
    urgence: "Spoed",
    contact: "Contact",
    callNow: "Nu bellen",
    language: "FR",
  },

  /* ─── Hero ────────────────────────────────────────────────────────────── */
  hero: {
    badge: "Interventie binnen 60 min",
    title: "Uw elektricien\nvoor herstellingen in Brussel",
    subtitle:
      "24u/24 – 7d/7 beschikbaar voor al uw elektrische spoedgevallen in Brussel, Vlaanderen en Waals-Brabant.",
    cta: "Bellen voor spoed",
    ctaSecondary: "Onze diensten",
    phone: "+32 483 48 04 96",
    trust: {
      certified: "Verzekerd BA Prof.",
      available: "Beschikbaar 24u/24",
      speed: "Interventie < 60 min",
    },
  },

  /* ─── Diensten ────────────────────────────────────────────────────────── */
  services: {
    sectionTitle: "Onze elektrische diensten",
    sectionSubtitle:
      "Elektrische herstellingen, laadpaalinstallaties en AREI-conformiteit — in Brussel, Vlaanderen en Waals-Brabant.",
    items: {
      depannage: {
        title: "Elektrische spoedherstellingen",
        description:
          "Differentiaalschakelaar 30 mA die springt, kortsluiting, stroomuitval? Interventie binnen 60 min, 24u/24 en 7d/7 — inclusief weekends en feestdagen.",
      },
      borne: {
        title: "Laadpaal wallbox",
        description:
          "Installatie van laadpalen modus 3 type 2 tot 22 kW. Synergrid-aangifte, AREI-keuring en begeleiding voor Vlaamse en Brussels premies inbegrepen.",
      },
      renovation: {
        title: "AREI-conformiteit",
        description:
          "Eendraadschema, equipotentiaalverbinding, differentiaalschakelaar 300 mA: volledige normalisatie met officieel conformiteitsrapport voor verzekering en vastgoedverkoop.",
      },
      installation: {
        title: "Elektrische installatie",
        description:
          "Verdeelinrichting, kabels sectie 2,5 mm², stopcontacten, verlichting: alle installaties voor particulieren en bedrijven conform de geldende AREI-normen.",
      },
      diagnostic: {
        title: "Elektrische diagnose",
        description:
          "Volledige controle van uw installatie: meting van lekstromen, verificatie van IP-indices, gedetailleerd technisch rapport en prioriteitsaanbevelingen.",
      },
    },
  },

  /* ─── Werkgebied ──────────────────────────────────────────────────────── */
  zones: {
    sectionTitle: "Elektricien in Brussel, Vlaanderen en Waals-Brabant",
    sectionSubtitle:
      "Elektrische herstellingen en installaties beschikbaar 24u/24 in het Brussels Gewest en omgeving.",
    description:
      "Gevestigd in Wemmel, zijn onze vakkundige elektriciens actief in heel Groot-Brussel. In het Brussels Hoofdstedelijk Gewest staan wij in voor dringende elektrische herstellingen: defecte zekering, stroomonderbreking of kortsluiting. In Waals-Brabant installeren wij wallboxen in Waver, Waterloo en Eigenbrakel en voeren wij AREI-conformiteitsrapporten uit voor vastgoedverkoop. In Vlaams-Brabant werken wij in Zaventem, Vilvoorde en Tervuren. Onze BA-verzekerde techniciens zijn 24u/24 en 7d/7 beschikbaar voor spoedgevallen.",
    regions: {
      bruxelles: {
        name: "Brussels Hoofdstedelijk Gewest",
        cities: [
          "Anderlecht", "Oudergem", "Sint-Agatha-Berchem", "Brussel-Stad",
          "Etterbeek", "Evere", "Vorst", "Ganshoren", "Elsene", "Jette",
          "Koekelberg", "Molenbeek", "Sint-Gillis", "Sint-Joost", "Schaarbeek",
          "Ukkel", "Watermaal-Bosvoorde", "Sint-Lambrechts-Woluwe", "Sint-Pieters-Woluwe",
        ],
      },
      brabantWallon: {
        name: "Waals-Brabant",
        cities: [
          "Waver", "Waterloo", "Eigenbrakel", "Ottignies-LLN",
          "La Hulpe", "Rixensart", "Nijvel",
        ],
      },
      flamand: {
        name: "Vlaams-Brabant",
        cities: [
          "Zaventem", "Tervuren", "Wezembeek-Oppem", "Kraainem",
          "Overijse", "Halle", "Vilvoorde",
        ],
      },
    },
  },

  /* ─── Laadpalen ───────────────────────────────────────────────────────── */
  bornes: {
    sectionTitle: "Laadpalen in Brussel",
    sectionSubtitle:
      "Installatie van wallboxen tot 22 kW thuis of op kantoor, in Brussel, Vlaanderen en Waals-Brabant.",
    ctaInstall: "Offerte aanvragen",
    features: {
      certified: "Vakkundige installateur",
      subsidy: "Hulp bij premieaanvragen",
      speed: "Installatie op één dag",
    },
  },

  /* ─── Vertrouwen / Sociale bewijzen ──────────────────────────────────── */
  trust: {
    sectionTitle: "Uw vertrouwde elektricien in Brussel",
    stats: {
      interventions: { value: "24u/24",   label: "Beschikbaar 7d/7" },
      experience:    { value: "0 €",      label: "Gratis offerte" },
      satisfaction:  { value: "2 jaar",   label: "Garantie werken" },
      response:      { value: "< 60 min", label: "Reactietijd" },
    },
  },

  /* ─── Contact & Spoed ─────────────────────────────────────────────────── */
  contact: {
    sectionTitle: "Contacteer ons",
    urgencyTitle: "Elektrisch noodgeval?",
    urgencySubtitle: "Bel ons onmiddellijk, wij interveniëren binnen 60 minuten.",
    phone: "+32 483 48 04 96",
    email: "info@tftechnics.be",
    hours: "Beschikbaar 24u/24 – 7d/7",
    formName: "Uw naam",
    formPhone: "Uw telefoonnummer",
    formMessage: "Beschrijf uw probleem",
    formSubmit: "Mijn aanvraag verzenden",
    formSuccess: "Uw bericht is verzonden. Wij nemen snel contact met u op.",
  },

  /* ─── Voettekst ───────────────────────────────────────────────────────── */
  footer: {
    tagline: "Elektricien – Brussel, Vlaanderen, Waals-Brabant",
    rights: "Alle rechten voorbehouden.",
    legal: "Juridische vermeldingen",
    privacy: "Privacybeleid",
  },
};

export default nl;
