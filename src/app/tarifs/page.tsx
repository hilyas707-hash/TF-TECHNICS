import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import TarifsPage from "@/components/tarifs/TarifsPage";
import Footer from "@/components/layout/Footer";

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
    canonical: "https://mon-super-site-mu.vercel.app/tarifs",
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
      name: "TF Technics",
      url: "https://mon-super-site-mu.vercel.app",
      telephone: "+32XXXXXXXXX",
      areaServed: ["Bruxelles", "Flandre", "Brabant Wallon"],
    },
    offers: [
      {
        "@type": "Offer",
        name: "Frais de déplacement",
        price: "50",
        priceCurrency: "EUR",
        description: "Frais de déplacement pour intervention en journée",
      },
      {
        "@type": "Offer",
        name: "Tarif horaire dépannage",
        price: "65",
        priceCurrency: "EUR",
        description: "Tarif horaire pour dépannage électrique en heures normales",
      },
      {
        "@type": "Offer",
        name: "Installation borne de recharge",
        price: "900",
        priceCurrency: "EUR",
        description: "Installation borne de recharge véhicule électrique à domicile",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TarifsPage />
      <Footer dict={dict} />
    </>
  );
}
