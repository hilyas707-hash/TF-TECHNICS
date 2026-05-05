import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import Navbar from "@/components/layout/Navbar";
import DevisSection from "@/components/devis/DevisSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Gratis Offerte Elektricien Brussel | TF Technics",
  description:
    "Vraag uw gratis offerte aan in 2 minuten: elektrische panne, laadpaal wallbox, AREI-conformiteit. Antwoord binnen 2 uur. TF Technics — Brussel, Vlaanderen en Waals-Brabant.",
  keywords:
    "offerte elektricien brussel, offerte laadpaal brussel, offerte AREI-conformiteit, gratis offerte elektricien belgie, elektrische werken brussel",
  alternates: {
    canonical: "https://tftechnics.be/nl/devis",
    languages: { fr: "/devis", nl: "/nl/devis" },
  },
  openGraph: {
    title: "Gratis Offerte Elektricien | TF Technics Brussel",
    description:
      "Offerteformulier in 4 stappen: kies uw dienst, geef uw zone op en ontvang een antwoord binnen 2u. Gratis en vrijblijvend.",
    type: "website",
    locale: "nl_BE",
    url: "/nl/devis",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startpagina", item: "https://tftechnics.be/nl" },
    { "@type": "ListItem", position: 2, name: "Gratis offerte", item: "https://tftechnics.be/nl/devis" },
  ],
};

export default async function NlDevisPage() {
  const dict = await getDictionary("nl");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="pt-20">
        <DevisSection locale="nl" />
      </div>
      <Footer dict={dict} />
    </>
  );
}
