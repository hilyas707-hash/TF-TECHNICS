import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { FAQ_ITEMS } from "@/data/faq";
import HeroSection      from "@/components/hero/HeroSection";
import ServicesSection  from "@/components/services/ServicesSection";
import TrustSection     from "@/components/trust/TrustSection";
import ZonesSection     from "@/components/zones/ZonesSection";
import BornesSection    from "@/components/bornes/BornesSection";
import DevisSection     from "@/components/devis/DevisSection";
import FaqSection       from "@/components/faq/FaqSection";
import ContactSection   from "@/components/contact/ContactSection";
import Footer           from "@/components/layout/Footer";

/* ── Métadonnées SEO — page d'accueil FR ───────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Électricien Dépanneur Bruxelles | Bornes Recharge Flandre | Conformité RGIE Brabant Wallon | TF Technics",
  description:
    "TF Technics — électricien agréé AREI : dépannage urgence à Bruxelles en moins de 60 min 24h/24, installation bornes de recharge (wallbox) en Flandre et Brabant Wallon, mise en conformité RGIE. Devis gratuit.",
  keywords:
    "électricien dépannage bruxelles, urgence électricien bruxelles 24h, bornes de recharge flandre, borne recharge wallbox brabant wallon, mise en conformité RGIE belgique, électricien agréé AREI bruxelles, dépannage électrique urgence nuit, installation électrique bruxelles",
  openGraph: {
    title:
      "Électricien Dépanneur Bruxelles | Bornes Recharge & Conformité RGIE | TF Technics",
    description:
      "Dépannage urgence < 60 min à Bruxelles, bornes de recharge en Flandre et Brabant Wallon, mise en conformité RGIE. Agréé AREI. Devis gratuit.",
    type:   "website",
    locale: "fr_BE",
    url:    "/",
  },
  alternates: {
    languages: {
      fr: "/",
      nl: "/nl",
    },
  },
};

/* ── Schéma JSON-LD LocalBusiness ───────────────────────────────────────────
   Permet à Google de comprendre qu'il s'agit d'un électricien local
   opérant à Bruxelles et dans les provinces limitrophes.
─────────────────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  "@id": "https://mon-super-site-mu.vercel.app/#business",
  name: "TF Technics",
  description:
    "Électricien agréé AREI intervenant en urgence à Bruxelles, en Flandre et en Brabant Wallon. Dépannage, installation de bornes de recharge et mise en conformité RGIE.",
  url: "https://mon-super-site-mu.vercel.app",
  telephone: "+32XXXXXXXXX",
  email: "info@electricien-bruxelles.be",
  logo: "https://mon-super-site-mu.vercel.app/logo.png",
  image: "https://mon-super-site-mu.vercel.app/logo.png",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressRegion: "Région de Bruxelles-Capitale",
    postalCode: "1000",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8503,
    longitude: 4.3517,
  },
  areaServed: [
    { "@type": "AdministrativeArea", "name": "Région de Bruxelles-Capitale" },
    { "@type": "AdministrativeArea", "name": "Brabant Wallon" },
    { "@type": "AdministrativeArea", "name": "Brabant Flamand" },
    { "@type": "AdministrativeArea", "name": "Flandre" },
    { "@type": "City", "name": "Bruxelles" },
    { "@type": "City", "name": "Wavre" },
    { "@type": "City", "name": "Waterloo" },
    { "@type": "City", "name": "Zaventem" },
    { "@type": "City", "name": "Vilvoorde" },
    { "@type": "City", "name": "Ixelles" },
    { "@type": "City", "name": "Schaerbeek" },
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
    name: "Services électriques TF Technics",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage électrique d'urgence",
          description: "Intervention en moins de 60 minutes, 24h/24 – 7j/7, Bruxelles et environs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installation de bornes de recharge",
          description: "Wallbox jusqu'à 22 kW, certifié pour les primes régionales en Flandre et Brabant Wallon",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mise en conformité RGIE/AREI",
          description: "Rapport de conformité officiel pour assurance et vente immobilière en Belgique",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installation électrique",
          description: "Tableau électrique, prises, éclairage, câblage complet pour particuliers et professionnels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostic électrique",
          description: "Inspection complète avec rapport technique détaillé",
        },
      },
    ],
  },
  knowsLanguage: ["fr", "nl"],
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Virement bancaire, Carte bancaire",
};

/* ── Schéma JSON-LD FAQPage ──────────────────────────────────────────────── */
const faqJsonLd = {
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

export default async function Home() {
  const dict = await getDictionary("fr");

  return (
    <>
      {/* JSON-LD LocalBusiness — données structurées pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* JSON-LD FAQPage — rich snippets accordéon dans les SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1 — Hero + Navigation flottante */}
      <HeroSection dict={dict} />

      {/* 2 — Nos services (Bento asymétrique) */}
      <ServicesSection dict={dict} />

      {/* 3 — Chiffres clés (fond anthracite) */}
      <TrustSection dict={dict} />

      {/* 4 — Zones d'intervention */}
      <ZonesSection dict={dict} />

      {/* 5 — Bornes de recharge */}
      <BornesSection dict={dict} />

      {/* 6 — Formulaire devis multi-étapes */}
      <DevisSection />

      {/* 7 — FAQ accordéon */}
      <FaqSection />

      {/* 8 — Contact + urgence */}
      <ContactSection dict={dict} />

      {/* 9 — Pied de page + légal */}
      <Footer dict={dict} />
    </>
  );
}
