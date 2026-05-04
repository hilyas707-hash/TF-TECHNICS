import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Elektricien Brussel 24u/24 | TF Technics",
  description:
    "Neem contact op met TF Technics: spoedinterventie in Brussel binnen 60 min, gratis offerte, laadpaal installatie. Beschikbaar 24u/24 – 7d/7. Bel +32 483 48 04 96.",
  alternates: {
    canonical: "https://tftechnics.be/nl/contact",
    languages: { fr: "/contact", nl: "/nl/contact" },
  },
  openGraph: {
    title: "Contact TF Technics — Elektricien Brussel 24u/24",
    description: "Elektrische panne? Bel TF Technics op +32 483 48 04 96. Interventie in minder dan 60 min in Brussel, Vlaanderen en Waals-Brabant.",
    type: "website",
    locale: "nl_BE",
    url: "/nl/contact",
  },
};

export default async function NlContactPage() {
  const dict = await getDictionary("nl");

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactSection dict={dict} />
      </div>
      <Footer dict={dict} />
    </>
  );
}
