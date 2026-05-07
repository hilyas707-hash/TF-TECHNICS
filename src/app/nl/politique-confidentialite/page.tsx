import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacybeleid | TF Technics",
  description: "Privacybeleid van TF Technics — bescherming van uw persoonsgegevens.",
  robots: "noindex",
};

export default function NlPolitiqueConfidentialitePage() {
  return (
    <LegalPage
      locale="nl"
      title="Privacybeleid"
      subtitle="Bescherming van uw persoonsgegevens overeenkomstig de AVG (GDPR)."
      lastUpdated="Januari 2025"
      sections={[
        {
          title: "Verantwoordelijke voor de verwerking",
          content:
            "TF Technics BV\nKBO : BE1037.492.402\nKoningin Astridlaan 49, Bus 1780, 1780 Wemmel\ninfo@tftechnics.be — +32 483 48 04 96",
        },
        {
          title: "Verzamelde gegevens",
          content: [
            "Identificatiegegevens : naam, voornaam, telefoonnummer, e-mailadres",
            "Locatiegegevens : adres van de interventie of offerte-aanvraag",
            "Communicatiegegevens : inhoud van berichten verzonden via het contactformulier",
          ],
        },
        {
          title: "Doeleinden van de verwerking",
          content: [
            "Beheer van offerte-aanvragen en interventieplanning",
            "Communicatie met klanten (bevestiging, opvolging, factuur)",
            "Verbetering van onze diensten en website",
            "Naleving van wettelijke verplichtingen",
          ],
        },
        {
          title: "Rechtsgrondslag",
          content:
            "De verwerking is gebaseerd op de uitvoering van een contract (offerte, interventie), ons gerechtvaardigd belang (klantenservice, fraudepreventie) of uw voorafgaande toestemming.",
        },
        {
          title: "Bewaartermijn",
          content:
            "Uw gegevens worden bewaard gedurende de tijd die nodig is voor de contractuele relatie en maximaal 3 jaar na het laatste contact, behalve voor boekhoudkundige verplichtingen (10 jaar).",
        },
        {
          title: "Uw rechten",
          content: [
            "Recht op inzage en rectificatie van uw gegevens",
            "Recht op wissing ('recht om vergeten te worden')",
            "Recht op beperking van de verwerking",
            "Recht op overdraagbaarheid",
            "Recht van bezwaar",
          ],
        },
        {
          title: "Contact en klachten",
          content:
            "Om uw rechten uit te oefenen of een klacht in te dienen : info@tftechnics.be\nU kunt ook een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit : www.gegevensbeschermingsautoriteit.be",
        },
      ]}
    />
  );
}
