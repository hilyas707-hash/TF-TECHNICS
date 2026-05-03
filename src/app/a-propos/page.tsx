import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/about/AboutSection";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title:       "À propos de TF Technics | Électricien Professionnel Bruxelles",
  description: "TF Technics : électricien professionnel à Bruxelles, assuré RC professionnelle. Découvrez notre équipe et notre engagement qualité.",
  openGraph: {
    title:       "À propos de TF Technics | Électricien Professionnel Bruxelles",
    description: "Assuré RC professionnelle, disponible 24h/24. TF Technics, votre électricien de confiance à Bruxelles.",
    type:        "website",
    locale:      "fr_BE",
  },
  alternates: {
    canonical: "https://tftechnics.be/a-propos",
  },
};

export default async function AProposPage() {
  const dict = await getDictionary("fr");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil",   item: "https://tftechnics.be" },
      { "@type": "ListItem", position: 2, name: "À propos",  item: "https://tftechnics.be/a-propos" },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type":    "AboutPage",
    name:       "À propos de TF Technics",
    url:        "https://tftechnics.be/a-propos",
    description: "TF Technics est un électricien professionnel opérant à Bruxelles, en Flandre et en Brabant Wallon.",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id":   "https://tftechnics.be/#business",
      name:    "TF Technics",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <AboutSection />
      <Footer dict={dict} />
    </>
  );
}
