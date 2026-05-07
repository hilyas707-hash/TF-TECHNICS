import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { FAQ_ITEMS_NL } from "@/data/faq-nl";
import Navbar from "@/components/layout/Navbar";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FAQ Elektricien Brussel — Veelgestelde Vragen | TF Technics",
  description:
    "Antwoorden op al uw vragen: interventietijden, tarieven, laadpaal, AREI-conformiteit, beschikbare premies. TF Technics — elektricien in Brussel, Vlaanderen en Waals-Brabant.",
  alternates: {
    canonical: "https://tftechnics.be/nl/faq",
    languages: { fr: "/faq", nl: "/nl/faq" },
  },
  openGraph: {
    title: "FAQ Elektricien Brussel | TF Technics",
    description: "Duidelijke antwoorden op uw vragen over elektrische herstellingen, laadpalen en AREI-conformiteit in België.",
    type: "website",
    locale: "nl_BE",
    url: "/nl/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS_NL.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default async function NlFaqPage() {
  const dict = await getDictionary("nl");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <div className="pt-20">
        <FaqSection dict={dict} items={FAQ_ITEMS_NL} locale="nl" />
      </div>
      <Footer dict={dict} locale="nl" />
    </>
  );
}
