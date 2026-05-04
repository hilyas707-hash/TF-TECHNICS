import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import TarifsPage from "@/components/tarifs/TarifsPage";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Tarifs Électricien Bruxelles | Grille officielle TF Technics",
  description:
    "Grille tarifaire officielle TF Technics : déplacement dès 60 €, forfait minimum 150 €, majorations soir/week-end. TVA 6 %. Devis gratuit et sans engagement.",
  openGraph: {
    title:       "Tarifs Électricien | TF Technics Bruxelles",
    description: "Frais de déplacement, forfaits main-d'œuvre, majorations soir et week-end, modalités de paiement. Devis gratuit.",
    type:        "website",
    locale:      "fr_BE",
  },
  alternates: {
    canonical: "https://tftechnics.be/tarifs",
  },
};

export default async function Tarifs() {
  const dict = await getDictionary("fr");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://tftechnics.be" },
      { "@type": "ListItem", position: 2, name: "Tarifs",  item: "https://tftechnics.be/tarifs" },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Électricien Dépanneur TF Technics",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://tftechnics.be/#business",
      name: "TF Technics",
      url: "https://tftechnics.be",
      telephone: "+32483480496",
      areaServed: ["Bruxelles", "Flandre", "Brabant Wallon"],
    },
    offers: [
      {
        "@type": "Offer",
        name: "Déplacement heures de bureau (08h–17h)",
        description: "Frais de déplacement en semaine pendant les heures de bureau.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "60",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
          unitText: "déplacement",
        },
      },
      {
        "@type": "Offer",
        name: "Déplacement soirée (17h–22h)",
        description: "Frais de déplacement en soirée, semaine.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "110",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
          unitText: "déplacement",
        },
      },
      {
        "@type": "Offer",
        name: "Déplacement nuit (22h–08h) ou urgence",
        description: "Frais de déplacement de nuit ou intervention le jour même.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "180",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
          unitText: "déplacement",
        },
      },
      {
        "@type": "Offer",
        name: "Forfait minimum main-d'œuvre",
        description: "Forfait minimum applicable pour toute prestation — durée minimum 1 heure.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "150",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
          unitText: "intervention",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <TarifsPage />
      <Footer dict={dict} />
    </>
  );
}
