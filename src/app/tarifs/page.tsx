import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import TarifsPage from "@/components/tarifs/TarifsPage";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Tarifs Électricien Bruxelles | Prix Dépannage & Installation | TF Technics",
  description:
    "Tarifs transparents de TF Technics : dépannage urgence dès 50 €, tarif horaire 65–85 €/h, installation borne de recharge dès 900 €. Devis gratuit et sans engagement.",
  openGraph: {
    title:       "Tarifs Électricien | TF Technics Bruxelles",
    description: "Grille de prix claire pour tous nos services : dépannage, installation, mise en conformité RGIE, bornes de recharge. Devis gratuit.",
    type:        "website",
    locale:      "fr_BE",
  },
  alternates: {
    canonical: "https://tftechnics.be/tarifs",
  },
};

export default async function Tarifs() {
  const dict = await getDictionary("fr");

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
        name: "Dépannage urgence — frais de déplacement",
        description: "Frais de déplacement inclus pour toute intervention en journée à Bruxelles et environs.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "50",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
          unitText: "intervention",
        },
      },
      {
        "@type": "Offer",
        name: "Dépannage électrique — tarif horaire (heures normales)",
        description: "Tarif horaire pour dépannage électrique en heures normales (7h–22h, jours ouvrés).",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: "65",
          maxPrice: "85",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
          unitCode: "HUR",
          unitText: "heure",
        },
      },
      {
        "@type": "Offer",
        name: "Dépannage électrique — tarif horaire (nuit & week-end)",
        description: "Tarif horaire pour dépannage électrique de nuit (22h–7h) et le week-end.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: "110",
          maxPrice: "140",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
          unitCode: "HUR",
          unitText: "heure",
        },
      },
      {
        "@type": "Offer",
        name: "Installation borne de recharge (wallbox)",
        description: "Installation complète d'une borne de recharge véhicule électrique à domicile, audit inclus.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "900",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
          unitText: "installation",
        },
      },
      {
        "@type": "Offer",
        name: "Mise en conformité AREI — remplacement tableau",
        description: "Remplacement tableau électrique + mise à la terre avec rapport de conformité AREI officiel.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: "1500",
          maxPrice: "4000",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
          unitText: "chantier",
        },
      },
      {
        "@type": "Offer",
        name: "Diagnostic électrique complet",
        description: "Diagnostic professionnel avec rapport technique détaillé, photos et recommandations.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "75",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
          unitText: "visite",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <TarifsPage />
      <Footer dict={dict} />
    </>
  );
}
