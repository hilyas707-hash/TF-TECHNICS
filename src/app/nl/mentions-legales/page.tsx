import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Wettelijke vermeldingen | TF Technics",
  description: "Wettelijke vermeldingen van de website TF Technics — elektricien in Brussel.",
  robots: "noindex",
};

export default function NlMentionsLegalesPage() {
  return (
    <LegalPage
      locale="nl"
      title="Wettelijke vermeldingen"
      subtitle="Verplichte wettelijke informatie over de uitgever en de host van de website."
      lastUpdated="Januari 2025"
      sections={[
        {
          title: "Uitgever van de website",
          content:
            "TF Technics BV\nOndernemingsnummer (KBO) : BE1037.492.402\nMaatschappelijke zetel : Koningin Astridlaan 49, Bus 1780, 1780 Wemmel, België\nTelefoon : +32 483 48 04 96\nE-mail : info@tftechnics.be",
        },
        {
          title: "Directeur van de publicatie",
          content: "De directeur van de publicatie is de zaakvoerder van TF Technics BV.",
        },
        {
          title: "Hosting",
          content:
            "Deze website wordt gehost door Vercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, Verenigde Staten\nWebsite : https://vercel.com",
        },
        {
          title: "Intellectuele eigendom",
          content:
            "Alle inhoud op deze website (teksten, afbeeldingen, grafische elementen, logo's, pictogrammen, geluiden, software) is het exclusieve eigendom van TF Technics BV, tenzij anders vermeld.\nElke reproductie, verspreiding, wijziging, aanpassing, hertransmissie of publicatie van deze elementen is strikt verboden zonder voorafgaande schriftelijke toestemming van TF Technics BV.",
        },
        {
          title: "Aansprakelijkheid",
          content:
            "TF Technics BV streeft ernaar de nauwkeurigheid en actualiteit van de op deze website verspreide informatie te waarborgen. TF Technics BV kan echter de nauwkeurigheid, precisie of volledigheid van de beschikbare informatie op deze website niet garanderen.\nTF Technics BV behoudt zich het recht voor om de inhoud van deze website op elk moment en zonder voorafgaande kennisgeving te corrigeren.",
        },
        {
          title: "Hyperlinks",
          content:
            "Deze website kan links bevatten naar andere internetsites. TF Technics BV is niet verantwoordelijk voor de inhoud van externe sites waarnaar links worden aangeboden.",
        },
        {
          title: "Toepasselijk recht",
          content:
            "Deze wettelijke vermeldingen worden beheerst door het Belgisch recht. Elk geschil met betrekking tot het gebruik van deze website valt onder de exclusieve bevoegdheid van de rechtbanken van Brussel.",
        },
      ]}
    />
  );
}
