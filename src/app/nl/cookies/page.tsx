import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Cookiebeleid | TF Technics",
  description: "Cookiebeleid van TF Technics — gebruik van cookies op de website.",
  robots: "noindex",
};

export default function NlCookiesPage() {
  return (
    <LegalPage
      locale="nl"
      title="Cookiebeleid"
      subtitle="Informatie over het gebruik van cookies op de website van TF Technics."
      lastUpdated="Januari 2025"
      sections={[
        {
          title: "Wat zijn cookies?",
          content:
            "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website te laten functioneren, de prestaties te verbeteren en u een betere gebruikerservaring te bieden.",
        },
        {
          title: "Gebruikte cookies",
          content: [
            "Technische cookies : noodzakelijk voor het functioneren van de website (sessie, beveiliging)",
            "Analytische cookies : anonieme statistieken over het gebruik van de website (Google Analytics)",
            "Voorkeurscookies : onthouden uw taalvoorkeur",
          ],
        },
        {
          title: "Toestemming",
          content:
            "Bij uw eerste bezoek wordt u gevraagd uw toestemming te geven voor niet-essentiële cookies. U kunt uw keuze op elk moment wijzigen via uw browserinstellingen.",
        },
        {
          title: "Cookies beheren",
          content:
            "U kunt cookies uitschakelen via de instellingen van uw browser. Let op: het uitschakelen van bepaalde cookies kan de werking van de website beïnvloeden.\nChrome: Instellingen > Privacy en beveiliging > Cookies\nFirefox: Opties > Privacy en beveiliging\nSafari: Voorkeuren > Privacy",
        },
        {
          title: "Bewaartermijn",
          content:
            "Sessiecookies worden verwijderd wanneer u uw browser sluit. Permanente cookies worden bewaard gedurende een periode van maximaal 13 maanden.",
        },
        {
          title: "Contact",
          content:
            "Voor vragen over ons cookiebeleid : info@tftechnics.be",
        },
      ]}
    />
  );
}
