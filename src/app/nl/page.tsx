import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getDictionary } from "@/i18n";
import { FAQ_ITEMS } from "@/data/faq";
import HeroSection from "@/components/hero/HeroSection";

const ServicesSection = dynamic(() => import("@/components/services/ServicesSection"), { loading: () => <div id="services" /> });
const TrustSection    = dynamic(() => import("@/components/trust/TrustSection"),    { loading: () => <div id="confiance" /> });
const ZonesSection    = dynamic(() => import("@/components/zones/ZonesSection"),    { loading: () => <div id="zones" /> });
const BornesSection   = dynamic(() => import("@/components/bornes/BornesSection"),  { loading: () => <div id="bornes" /> });
const DevisSection    = dynamic(() => import("@/components/devis/DevisSection"),    { loading: () => <div id="devis" /> });
const FaqSection      = dynamic(() => import("@/components/faq/FaqSection"),        { loading: () => <div id="faq" /> });
const ContactSection  = dynamic(() => import("@/components/contact/ContactSection"), { loading: () => <div id="contact" /> });
const Footer          = dynamic(() => import("@/components/layout/Footer"));

/* ── Métadonnées SEO — page d'accueil NL ───────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Elektricien Herstellingen Brussel | Laadpalen Vlaanderen | AREI-conformiteit | TF Technics",
  description:
    "TF Technics — professionele elektricien: spoedherstellingen in Brussel binnen 60 min 24u/24, installatie laadpalen (wallbox) in Vlaanderen en Waals-Brabant, AREI-conformiteit. Gratis offerte.",
  keywords:
    "elektricien brussel, spoed elektricien brussel 24u, laadpaal installatie vlaanderen, wallbox laadpaal waals-brabant, AREI conformiteit belgie, elektrische panne nacht, elektrische installatie brussel",
  openGraph: {
    title:
      "Elektricien Herstellingen Brussel | Laadpalen & AREI-conformiteit | TF Technics",
    description:
      "Spoedherstellingen < 60 min in Brussel, laadpalen in Vlaanderen en Waals-Brabant, AREI-conformiteit. Verzekerd BA Pro. Gratis offerte.",
    type:   "website",
    locale: "nl_BE",
    url:    "/nl",
  },
  alternates: {
    languages: {
      fr: "/",
      nl: "/nl",
    },
  },
};

/* ── Schéma JSON-LD LocalBusiness — versie NL ──────────────────────────────── */
const jsonLdNl = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  "@id": "https://tftechnics.be/nl#business",
  name: "TF Technics",
  description:
    "Professionele elektricien voor spoedinterventies in Brussel, Vlaanderen en Waals-Brabant. Herstellingen, laadpalen en AREI-conformiteit.",
  url: "https://tftechnics.be/nl",
  telephone: "+32483480496",
  email: "info@tftechnics.be",
  logo: "https://tftechnics.be/logo.svg",
  image: "https://tftechnics.be/hero.png",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue Reine Astrid 49, Boîte 1780",
    addressLocality: "Wemmel",
    addressRegion: "Vlaams-Brabant",
    postalCode: "1780",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9012,
    longitude: 4.3082,
  },
  areaServed: [
    { "@type": "AdministrativeArea", "name": "Brussels Hoofdstedelijk Gewest" },
    { "@type": "AdministrativeArea", "name": "Waals-Brabant" },
    { "@type": "AdministrativeArea", "name": "Vlaams-Brabant" },
    { "@type": "AdministrativeArea", "name": "Vlaanderen" },
    { "@type": "City", "name": "Brussel" },
    { "@type": "City", "name": "Waver" },
    { "@type": "City", "name": "Waterloo" },
    { "@type": "City", "name": "Zaventem" },
    { "@type": "City", "name": "Vilvoorde" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Elektrische diensten TF Technics",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Elektrische spoedherstellingen",
          description: "Interventie binnen 60 minuten, 24u/24 – 7d/7, Brussel en omgeving",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installatie laadpalen",
          description: "Wallbox tot 22 kW, begeleiding voor regionale premies in Vlaanderen en Waals-Brabant",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AREI-conformiteit",
          description: "Officieel conformiteitsrapport voor verzekering en vastgoedverkoop in België",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Elektrische installatie",
          description: "Zekeringkast, stopcontacten, verlichting, volledige bekabeling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Elektrische diagnose",
          description: "Volledige inspectie met gedetailleerd technisch rapport",
        },
      },
    ],
  },
  knowsLanguage: ["nl", "fr"],
  currenciesAccepted: "EUR",
};

/* ── Schema FAQPage NL ───────────────────────────────────────────────────── */
const faqJsonLdNl = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default async function NlHome() {
  const dict = await getDictionary("nl");

  return (
    <>
      {/* JSON-LD LocalBusiness NL — données structurées pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNl) }}
      />
      {/* JSON-LD FAQPage NL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdNl) }}
      />

      {/* 1 — Hero + Navigatie */}
      <HeroSection dict={dict} />

      {/* 2 — Onze diensten */}
      <ServicesSection dict={dict} />

      {/* 3 — Cijfers (donkere achtergrond) */}
      <TrustSection dict={dict} />

      {/* 4 — Werkgebied */}
      <ZonesSection dict={dict} />

      {/* 5 — Laadpalen */}
      <BornesSection dict={dict} />

      {/* 6 — Offerteformulier */}
      <DevisSection />

      {/* 7 — Veelgestelde vragen */}
      <FaqSection />

      {/* 8 — Contact + spoed */}
      <ContactSection dict={dict} />

      {/* 9 — Voettekst + juridisch */}
      <Footer dict={dict} />
    </>
  );
}
