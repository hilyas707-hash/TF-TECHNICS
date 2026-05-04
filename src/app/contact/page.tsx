import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Électricien Bruxelles 24h/24 | TF Technics",
  description:
    "Contactez TF Technics : urgence électrique à Bruxelles sous 60 min, devis gratuit, installation borne de recharge. Disponible 24h/24 – 7j/7. Appelez le +32 483 48 04 96.",
  keywords:
    "contact électricien bruxelles, urgence électricien bruxelles, dépannage électrique contact, borne recharge contact, électricien 24h bruxelles",
  alternates: {
    canonical: "https://tftechnics.be/contact",
  },
  openGraph: {
    title: "Contact TF Technics — Électricien Bruxelles 24h/24",
    description:
      "Urgence électrique ? Appelez TF Technics au +32 483 48 04 96. Intervention en moins de 60 min à Bruxelles, Flandre et Brabant Wallon.",
    type: "website",
    locale: "fr_BE",
    url: "/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://tftechnics.be" },
    { "@type": "ListItem", position: 2, name: "Contact",  item: "https://tftechnics.be/contact" },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TF Technics",
  description: "Page de contact de TF Technics — électricien professionnel à Bruxelles, Flandre et Brabant Wallon.",
  url: "https://tftechnics.be/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "TF Technics",
    telephone: "+32483480496",
    email: "info@tftechnics.be",
    openingHours: "Mo-Su 00:00-23:59",
  },
};

export default async function ContactPage() {
  const dict = await getDictionary("fr");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <Navbar />
      <div className="pt-20">
        <ContactSection dict={dict} />
      </div>
      <Footer dict={dict} />
    </>
  );
}
