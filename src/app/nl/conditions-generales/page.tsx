import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Algemene Verkoopsvoorwaarden | TF Technics",
  description: "Algemene verkoopsvoorwaarden van TF Technics — elektrische interventies in Brussel en omgeving.",
  robots: "noindex",
};

export default function NlConditionsGeneralesPage() {
  return (
    <LegalPage
      locale="nl"
      title="Algemene Verkoopsvoorwaarden"
      subtitle="Voorwaarden van toepassing op alle elektrische interventies uitgevoerd door TF Technics BV."
      lastUpdated="Januari 2025"
      sections={[
        {
          title: "Identiteit van de dienstverlener",
          content:
            "TF Technics BV — KBO BE1037.492.402\nKoningin Astridlaan 49, Bus 1780, 1780 Wemmel\ninfo@tftechnics.be — +32 483 48 04 96",
        },
        {
          title: "Toepassingsgebied",
          content:
            "Deze algemene voorwaarden zijn van toepassing op alle offertes, bestellingen en interventies uitgevoerd door TF Technics BV voor particuliere of professionele klanten in het Brussels Hoofdstedelijk Gewest, Waals-Brabant en Vlaams-Brabant.",
        },
        {
          title: "Offertes en prijzen",
          content: [
            "Alle offertes zijn gratis en vrijblijvend, geldig gedurende 30 dagen",
            "Verplaatsingskosten : vanaf 60 € (afhankelijk van de zone)",
            "Minimumforfait per interventie : 150 €",
            "Prijzen zijn exclusief btw (6% voor renovatie, 21% voor andere werken)",
            "Het exacte forfait wordt door de technicus meegedeeld vóór de start van de werken",
          ],
        },
        {
          title: "Betaling",
          content: [
            "Betaling is verschuldigd bij voltooiing van de interventie, tenzij anders overeengekomen",
            "Geaccepteerde betaalmethoden : bankoverschrijving, Bancontact, cash",
            "Bij niet-betaling op de vervaldag : verwijlinteresten van 10% per jaar + forfaitaire vergoeding van 15% (min. 50 €)",
            "Voor werken boven 1.000 € kan een voorschot van 30% worden gevraagd",
          ],
        },
        {
          title: "Spoedinterventies en toeslagen",
          content: [
            "Avondtoeslag (18u–22u) : +30%",
            "Nacht- en weekendtoeslag (22u–6u, zon- en feestdagen) : +50%",
            "Spoedinterventie binnen 2 uur overdag : +20%",
          ],
        },
        {
          title: "Garantie op werken",
          content:
            "TF Technics BV biedt 2 jaar garantie op uitgevoerde installaties en herstellingen, conform de Belgische wetgeving. De garantie dekt materiaalgebreken en installatiefouten, maar niet schade door oneigenlijk gebruik of externe invloeden.",
        },
        {
          title: "Annulering",
          content:
            "Annulering minder dan 24 uur voor de geplande afspraak : forfaitaire vergoeding van 50 €.\nBij spoedinterventie zonder annulering : volledige verplaatsingskosten worden aangerekend.",
        },
        {
          title: "Aansprakelijkheid",
          content:
            "TF Technics BV is aansprakelijk voor directe schade veroorzaakt door haar fouten in de uitvoering van de opdracht. Onze aansprakelijkheid is beperkt tot het bedrag van de betrokken interventie. TF Technics BV beschikt over een professionele BA-verzekering.",
        },
        {
          title: "Toepasselijk recht en geschillen",
          content:
            "Deze algemene voorwaarden worden beheerst door het Belgisch recht. In geval van geschil zijn de rechtbanken van het gerechtelijk arrondissement Brussel bevoegd.",
        },
      ]}
    />
  );
}
