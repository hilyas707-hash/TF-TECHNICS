import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { FAQ_ITEMS } from "@/data/faq";
import Navbar from "@/components/layout/Navbar";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FAQ Électricien Bruxelles — Questions Fréquentes | TF Technics",
  description:
    "Toutes les réponses à vos questions : délais d'intervention, tarifs, borne de recharge, conformité RGIE, primes disponibles. TF Technics — électricien à Bruxelles, Flandre et Brabant Wallon.",
  keywords:
    "FAQ électricien bruxelles, questions electricien belgique, prix dépannage électrique, borne recharge belgique questions, conformité RGIE questions, délai intervention électricien",
  alternates: {
    canonical: "https://tftechnics.be/faq",
  },
  openGraph: {
    title: "FAQ Électricien Bruxelles | TF Technics",
    description:
      "Réponses claires à vos questions sur le dépannage électrique, les bornes de recharge et la mise en conformité RGIE en Belgique.",
    type: "website",
    locale: "fr_BE",
    url: "/faq",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil",    item: "https://tftechnics.be" },
    { "@type": "ListItem", position: 2, name: "FAQ",        item: "https://tftechnics.be/faq" },
  ],
};

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

export default async function FaqPage() {
  const dict = await getDictionary("fr");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <div className="pt-20">
        <FaqSection dict={dict} />
      </div>
      <Footer dict={dict} />
    </>
  );
}
