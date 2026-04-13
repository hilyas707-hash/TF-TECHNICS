import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import HeroSection     from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import TrustSection    from "@/components/trust/TrustSection";
import ZonesSection    from "@/components/zones/ZonesSection";
import BornesSection   from "@/components/bornes/BornesSection";
import DevisSection    from "@/components/devis/DevisSection";
import FaqSection      from "@/components/faq/FaqSection";
import ContactSection  from "@/components/contact/ContactSection";
import Footer          from "@/components/layout/Footer";

/* ── Métadonnées SEO — page d'accueil NL ───────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Elektricien Herstellingen Brussel | Laadpalen Vlaanderen | AREI-conformiteit | TF Technics",
  description:
    "TF Technics — erkende elektricien AREI: spoedherstellingen in Brussel binnen 60 min 24u/24, installatie laadpalen (wallbox) in Vlaanderen en Waals-Brabant, AREI-conformiteit. Gratis offerte.",
  keywords:
    "elektricien brussel, spoed elektricien brussel 24u, laadpaal installatie vlaanderen, wallbox laadpaal waals-brabant, AREI conformiteit belgie, erkende elektricien brussel, elektrische panne nacht, elektrische installatie brussel",
  openGraph: {
    title:
      "Elektricien Herstellingen Brussel | Laadpalen & AREI-conformiteit | TF Technics",
    description:
      "Spoedherstellingen < 60 min in Brussel, laadpalen in Vlaanderen en Waals-Brabant, AREI-conformiteit. Erkend AREI. Gratis offerte.",
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
  "@id": "https://mon-super-site-mu.vercel.app/nl#business",
  name: "TF Technics",
  description:
    "Erkende AREI-elektricien voor spoedinterventies in Brussel, Vlaanderen en Waals-Brabant. Herstellingen, laadpalen en AREI-conformiteit.",
  url: "https://mon-super-site-mu.vercel.app/nl",
  telephone: "+32XXXXXXXXX",
  email: "info@electricien-bruxelles.be",
  logo: "https://mon-super-site-mu.vercel.app/logo.png",
  image: "https://mon-super-site-mu.vercel.app/logo.png",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussel",
    addressRegion: "Brussels Hoofdstedelijk Gewest",
    postalCode: "1000",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8503,
    longitude: 4.3517,
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
          description: "Wallbox tot 22 kW, gecertificeerd voor regionale premies in Vlaanderen en Waals-Brabant",
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

export default async function NlHome() {
  const dict = await getDictionary("nl");

  return (
    <>
      {/* JSON-LD LocalBusiness NL — données structurées pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNl) }}
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
