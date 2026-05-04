import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import Navbar from "@/components/layout/Navbar";
import DevisSection from "@/components/devis/DevisSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Devis Gratuit Électricien Bruxelles | TF Technics",
  description:
    "Obtenez votre devis gratuit en 2 minutes : dépannage électrique, borne de recharge wallbox, mise en conformité RGIE. Réponse sous 2 heures. TF Technics — Bruxelles, Flandre et Brabant Wallon.",
  keywords:
    "devis électricien bruxelles, devis borne de recharge bruxelles, devis mise en conformité RGIE, devis gratuit électricien belgique, estimation travaux électriques bruxelles",
  alternates: {
    canonical: "https://tftechnics.be/devis",
  },
  openGraph: {
    title: "Devis Gratuit Électricien | TF Technics Bruxelles",
    description:
      "Formulaire de devis en 4 étapes : choisissez votre service, indiquez votre zone et recevez une réponse sous 2h. Gratuit et sans engagement.",
    type: "website",
    locale: "fr_BE",
    url: "/devis",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://tftechnics.be" },
    { "@type": "ListItem", position: 2, name: "Devis gratuit", item: "https://tftechnics.be/devis" },
  ],
};

export default async function DevisPage() {
  const dict = await getDictionary("fr");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="pt-20">
        <DevisSection />
      </div>
      <Footer dict={dict} />
    </>
  );
}
