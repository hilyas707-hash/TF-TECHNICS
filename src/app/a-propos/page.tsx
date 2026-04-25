import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/about/AboutSection";

export const metadata: Metadata = {
  title:       "À propos de TF Technics | Électricien Agréé AREI Bruxelles",
  description: "TF Technics : électricien agréé AREI à Bruxelles depuis plus de 15 ans. Découvrez notre équipe, nos certifications et notre engagement qualité.",
  openGraph: {
    title:       "À propos de TF Technics | Électricien Agréé Bruxelles",
    description: "15 ans d'expérience, agréé AREI, assuré RC professionnelle. TF Technics, votre électricien de confiance à Bruxelles.",
    type:        "website",
    locale:      "fr_BE",
  },
  alternates: {
    canonical: "https://mon-super-site-mu.vercel.app/a-propos",
  },
};

export default async function AProposPage() {
  const dict = await getDictionary("fr");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type":    "AboutPage",
    name:       "À propos de TF Technics",
    url:        "https://mon-super-site-mu.vercel.app/a-propos",
    description: "TF Technics est un électricien agréé AREI opérant à Bruxelles, en Flandre et en Brabant Wallon depuis plus de 15 ans.",
    mainEntity: {
      "@type":       "LocalBusiness",
      "@id":         "https://mon-super-site-mu.vercel.app/#business",
      name:          "TF Technics",
      foundingDate:  "2009",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "5" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutSection />
      <Footer dict={dict} />
    </>
  );
}
