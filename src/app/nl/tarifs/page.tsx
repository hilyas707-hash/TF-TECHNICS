import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import TarifsPage from "@/components/tarifs/TarifsPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tarieven Elektricien Brussel | Officiële tarieflijst TF Technics",
  description:
    "Officiële tarieflijst TF Technics: verplaatsing vanaf 60 €, minimumforfait 150 €, toeslagen avond/weekend. Btw 6%. Gratis en vrijblijvende offerte.",
  alternates: {
    canonical: "https://tftechnics.be/nl/tarifs",
    languages: { fr: "/tarifs", nl: "/nl/tarifs" },
  },
  openGraph: {
    title: "Tarieven Elektricien | TF Technics Brussel",
    description: "Verplaatsingskosten, arbeidsforfaits, avond- en weekendtoeslagen. Gratis offerte.",
    type: "website",
    locale: "nl_BE",
  },
};

export default async function NlTarifsPage() {
  const dict = await getDictionary("nl");

  return (
    <>
      <Navbar />
      <TarifsPage locale="nl" />
      <Footer dict={dict} locale="nl" />
    </>
  );
}
