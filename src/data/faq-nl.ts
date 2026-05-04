import type { FaqItem } from "./faq";

export const FAQ_ITEMS_NL: FaqItem[] = [
  {
    question: "Waarom springt mijn differentiaalschakelaar als het regent?",
    answer:
      "Een differentiaalschakelaar die bij regen springt wijst doorgaans op vocht dat binnendringt in een buitendoos of een tuinarmatuur met een onvoldoende beschermingsindex (IP). Het vocht creëert een lekstroom naar de aarde die hoger is dan de aanspreekwaarde van 30 mA, waardoor de differentiaalschakelaar ter bescherming van personen springt. Oplossing: controleer de afdichting van buitentoestellen (IP44 minimum, IP65 voor blootgestelde zones), meet de lekstroom per circuit en vervang het defecte materiaal. Laat de differentiaalschakelaar niet in de OFF-stand: het risico op een elektrische schok blijft bestaan.",
    category: "depannage",
  },
  {
    question: "Voldoet mijn elektrisch bord aan de AREI-normen om mijn huis in België te verkopen?",
    answer:
      "Sinds 2010 vereist elke vastgoedverkoop in België een AREI-keuringsverslag opgesteld door een erkend organisme (VINÇOTTE, KEMA, Bureau Veritas…). Als uw installatie dateert van vóór 1981 of nooit gekeurd werd, zal ze vrijwel zeker niet conform verklaard worden. De meest voorkomende overtredingen in Brussel: geen 300 mA differentiaalschakelaar op het hoofdcircuit, kabels zonder huls op zolder, bord zonder bijgewerkt eendraadschema, ontbrekende equipotentiaalverbindingen. TF Technics voert de conformiteitswerken uit en coördineert de AREI-keuring om uw verkoop te bespoedigen.",
    category: "rgie",
  },
  {
    question: "Welke laadpaal kiezen voor een eengezinswoning in Brussel?",
    answer:
      "Voor een eengezinswoning met een standaard enkelfasige aansluiting (40 A) is een wallbox van 7,4 kW in modus 3 type 2 optimaal: hij laadt een batterij van 60 kWh in ongeveer 8 uur. Als uw aansluiting driefasig is, vermindert een paal van 11 kW die tijd tot 5,5 uur. In Brussel kan de Leefmilieu Brussel-premie een deel van de installatiekost dekken. TF Technics installeert de merken Hager, Schneider en Wallbox — allemaal compatibel met het OCPP-protocol en de Belgische openbare laadpalen. Wij verzorgen de verplichte Synergrid-aangifte.",
    category: "borne",
  },
  {
    question: "Waarom draait mijn Fluvius-meter snel ook als alles uit is?",
    answer:
      "Een abnormaal verbruik in stand-by (meer dan 50 W buiten normale stand-by) kan drie oorzaken hebben: een defect toestel dat continu verwarmt (boiler, koelkast), een lekstroom in het circuit door een beschadigde kabel, of in zeldzamere gevallen een isolatiegebrek op het net. De meting gebeurt circuit per circuit aan het bord met een tangtester. Een elektricien identificeert de bron in 30 minuten met een netanalysator. Negeer dit symptoom niet: naast energieverspilling kan een isolatiegebrek oververhitting en brand veroorzaken.",
    category: "depannage",
  },
  {
    question: "Is een erkende elektricien verplicht voor het installeren van een laadpaal in België?",
    answer:
      "Ja. In België moet de installatie van een laadpaal (wallbox) verplicht worden uitgevoerd door een erkende elektricien en onderworpen aan een AREI-keuring door een geaccrediteerd organisme. Deze keuring wordt vereist door verzekeraars en door Synergrid voor de update van uw technisch dossier. Zonder deze keuring kan uw brandverzekering een schadegeval in verband met laden weigeren. TF Technics verzorgt de installatie, de Synergrid-aangifte en de coördinatie van de AREI-keuring van A tot Z.",
    category: "borne",
  },
  {
    question: "Wat zijn uw interventietijden in noodgevallen?",
    answer:
      "TF Technics interveniëert voor elke dringende elektrische herstelling in Brussel en Waals-Brabant binnen maximaal 60 minuten. Beschikbaar 24u/24 en 7d/7 op +32 483 48 04 96 — inclusief weekends en Belgische feestdagen. Voor verder gelegen zones in Vlaams-Brabant, reken op maximaal 60 tot 90 minuten.",
    category: "depannage",
  },
  {
    question: "Werkt u ook in het weekend en 's nachts?",
    answer:
      "Absoluut. Onze spoeddienst werkt 7 dagen op 7, 24 uur op 24, inclusief Belgische feestdagen. Een elektrische panne kondigt zich niet aan: daarom zijn wij permanent beschikbaar om u snel te helpen, of het nu midden in de nacht is of op zondagochtend.",
    category: "depannage",
  },
  {
    question: "Wat kost een spoedinterventie?",
    answer:
      "Het tarief hangt af van het type panne, het tijdstip van de interventie en de duur van de werkzaamheden. Wij hanteren transparante prijzen en geven u een duidelijke schatting vóór we beginnen. De verplaatsingskosten zijn inbegrepen in onze tarieven. Voor interventies 's nachts en in het weekend wordt een spoedtoeslag aangerekend. Raadpleeg onze tarievenpagina of bel ons voor een onmiddellijke offerte.",
    category: "general",
  },
  {
    question: "Kan ik premies krijgen voor mijn laadpaal?",
    answer:
      "Ja. In het Brussels Hoofdstedelijk Gewest (Leefmilieu Brussel-premie), in Wallonië en in Vlaanderen zijn er premies beschikbaar voor de installatie van een thuislaadpaal. Er kan ook een federale belastingaftrek van toepassing zijn. TF Technics begeleidt u in alle administratieve stappen om uw terugbetaling te maximaliseren.",
    category: "borne",
  },
  {
    question: "Accepteert u werkopdrachten van verzekeraars?",
    answer:
      "Ja, wij werken met de meeste grote Belgische verzekeringsmaatschappijen. Als uw elektrisch schadegeval gedekt is door uw brandverzekering, kunnen wij direct interveniëren op werkopdracht. Contacteer ons om de compatibiliteit met uw verzekeraar te controleren.",
    category: "general",
  },
  {
    question: "Welke garantie geldt voor uw werken?",
    answer:
      "Alle elektrische werkzaamheden zijn gedurende 2 jaar gegarandeerd tegen elk uitvoeringsgebrek, overeenkomstig de Belgische wetgeving. Deze garantie dekt onderdelen en arbeid. Ze is niet van toepassing op schade veroorzaakt door oneigenlijk gebruik of ongeautoriseerde wijzigingen.",
    category: "general",
  },
  {
    question: "Is de offerte gratis?",
    answer:
      "Ja, de offerte is volledig gratis en zonder verplichting. Vul ons online formulier in of bel ons direct op +32 483 48 04 96. Een technieker kan zich gratis verplaatsen om uw behoefte te evalueren vóór een grote werf.",
    category: "general",
  },
];
