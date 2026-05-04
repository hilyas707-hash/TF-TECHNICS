import type { ServiceData } from "./services";

export const SERVICES_DATA_NL: ServiceData[] = [
  /* ── 1. SPOEDHERSTELLINGEN ───────────────────────────────────────────────── */
  {
    slug:    "depannage-urgence",
    iconKey: "zap",
    badge:   "Beschikbaar 24u/24 – 7d/7",
    title:   "Spoedherstellingen",
    heroTitle:    "Elektrische panne?\nWij zijn er\nbinnen 60 minuten.",
    heroSubtitle: "Kortsluiting, springende zekering, totaal of gedeeltelijk stroomverlies — TF Technics interveneert 24u/24 in Brussel en omgeving, dag en nacht.",
    intro: "Een elektrische noodsituatie laat zich niet plannen. Of het nu gaat om een totale stroomuitval, een steeds terugkerende springende zekering of een brandgeur — elke minuut telt. TF Technics garandeert een snelle, veilige en AREI-conforme interventie.",
    problems: [
      { title: "Geen stroom in één kamer of het hele huis",        desc: "Een defecte zekering of beschadigde kabel kan alles afsnijden zonder waarschuwing. Elke minuut zonder stroom is er één te veel." },
      { title: "Zekering springt steeds opnieuw",                  desc: "U zet ze terug, houdt het even, dan herhaalt het zich. Dit wijst op een overbelasting of kortsluiting die onmiddellijk gelokaliseerd moet worden." },
      { title: "Brandgeur of verkolingssporen zichtbaar",          desc: "Absolute noodsituatie. Schakel de hoofdschakelaar uit en bel nu — steek niets aan vóór de interventie." },
      { title: "Vonken, warme stopcontacten of schakelaars",       desc: "Een defect contact dat opwarmt kan binnen enkele uren brand veroorzaken. Wacht niet." },
    ],
    benefits: [
      { title: "Interventie < 60 min",        description: "Onze technici zijn strategisch gepositioneerd om Brussel en omgeving in minder dan een uur te bereiken." },
      { title: "Beschikbaar 24u/24 – 7d/7",   description: "Weekends, nachten, feestdagen inbegrepen. Een dedicated spoedlijn, onmiddellijke respons gegarandeerd." },
      { title: "Diagnose inbegrepen",          description: "Wij identificeren de exacte oorzaak van de panne vóór elke interventie, zonder verborgen diagnostiekkosten." },
      { title: "Materiaal aan boord",          description: "Onze voertuigen zijn uitgerust om 95% van de pannes in één bezoek op te lossen." },
      { title: "Verzekerd BA Professioneel",   description: "Volledige professionele aansprakelijkheidsverzekering. Elke interventie is conform het AREI." },
      { title: "Transparante offerte",         description: "Tarief meegedeeld vóór interventie. Geen onaangename verrassingen op de factuur." },
    ],
    pricing: {
      tagline: "Tarief meegedeeld vóór interventie — geen verrassingen",
      points: [
        "Verplaatsing inbegrepen in het eindtarief",
        "Schatting gegeven per telefoon vóór aankomst",
        "Vaste toeslag tijdens nachtelijke uren (22u–7u) en weekend — vooraf aangekondigd",
        "Facturatie op werkelijke uren + onderdelen aan leveranciersprijs",
        "Betaling per overschrijving, bankkaart of cash",
      ],
    },
    steps: [
      { number: "01", title: "Bel ons",              description: "Beschrijf kort de panne. Een gekwalificeerde technicus neemt onmiddellijk op, 24u/24." },
      { number: "02", title: "Onmiddellijk vertrek",  description: "De dichtstbijzijnde technicus wordt ter plaatse gestuurd. U ontvangt een aankomsttijdschatting." },
      { number: "03", title: "Diagnose ter plaatse",  description: "Volledige inspectie van de installatie om de exacte oorzaak van het probleem te identificeren." },
      { number: "04", title: "Reparatie & test",      description: "De panne wordt opgelost en de volledige installatie getest vóór het vertrek van de technicus." },
    ],
    faq: [
      { question: "Interveniëert u echt 's nachts en in het weekend?",   answer: "Ja, zonder uitzondering. Onze spoeddienst werkt 365 dagen per jaar, 24u/24. Er is altijd een technicus van wacht — nooit een antwoordapparaat 's nachts." },
      { question: "Wat kost een nachtelijke spoedinterventie?",           answer: "Nachtinterventies (22u–7u) en weekendinterventies hebben een vaste toeslag. Wij melden het exacte tarief vóór de start. Geen verborgen kosten, geen verrassingen op de factuur." },
      { question: "Wat te doen bij brandgeur of vonken?",                 answer: "Schakel onmiddellijk de hoofdschakelaar uit indien mogelijk en bel ons. Raak de draden niet aan. Evacueer de bewoners indien de geur aanhoudt en bel ook de brandweer (100/112)." },
      { question: "Kunt u komen voor een eenvoudige gesprongen zekering?", answer: "Absoluut. Zelfs een schijnbaar kleine panne kan een ernstig probleem verbergen. Wij interveniëren voor elk type elektrische noodsituatie, ongeacht de omvang." },
      { question: "Is het nachttarief veel hoger?",                       answer: "De nachttoeslag is vast en transparant — aangekondigd vóór ons vertrek. Wij vinden dat een noodsituatie om 2u 's nachts dezelfde kwaliteit verdient als overdag, aan een eerlijk en bekend tarief." },
      { question: "Wat als de panne het hele gebouw treft?",              answer: "Controleer eerst de algemene meterkast van het gebouw als u er toegang toe heeft. Als andere bewoners ook geen stroom hebben, neem contact op met uw netbeheerder (Sibelga in Brussel, ORES in Waals-Brabant, Fluvius in Vlaanderen). Als het probleem intern is aan uw woning, bel TF Technics." },
    ],
    seo: {
      title:       "Elektrische Spoedherstellingen Brussel | < 60 min | TF Technics",
      description: "Spoedelectricien in Brussel, Waals-Brabant en Vlaams-Brabant. Interventie in minder dan 60 min, 24u/24 – 7d/7. Verzekerd BA Pro. Bel nu.",
    },
  },

  /* ── 2. ELEKTRISCHE INSTALLATIE ─────────────────────────────────────────── */
  {
    slug:    "installation-electrique",
    iconKey: "plugzap",
    badge:   "Woning & appartement",
    title:   "Elektrische installatie",
    heroTitle:    "Professionele\nelektrische installatie\nconform AREI.",
    heroSubtitle: "Zekeringkast, stopcontacten, verlichting, volledige bekabeling — TF Technics ontwerpt en installeert uw elektrische installatie van A tot Z, volledig conform de Belgische regelgeving.",
    intro: "Een goed ontworpen elektrische installatie is de veiligheid van uw gezin en de waarde van uw eigendom. TF Technics voert alle soorten installaties uit voor particulieren, ontwikkelaars en professionals, van een eenvoudige vervanging van de zekeringkast tot de volledige installatie van een nieuwbouwwoning.",
    problems: [
      { title: "Zekeringkast van meer dan 25 jaar oud",              desc: "Oude installaties zijn onderdimensioneerd voor moderne apparaten en niet AREI-conform. Vervanging is noodzakelijk." },
      { title: "Overal verlengsnoeren en stekkerdozen",              desc: "Teken dat uw installatie te weinig stopcontacten heeft — met oververhittingsrisico. De oplossing: dedicated circuits en stopcontacten." },
      { title: "Renovatie in uitvoering zonder elektrische update",  desc: "Dit is het ideale moment om de bedrading te herzien. Elektrische werken integreren in een renovatie halveert de kosten." },
      { title: "Onvoldoende verlichting of niet-conforme installatie", desc: "Vochtige ruimtes, ingebouwde spots, domotica — uw installatie moet evolueren met uw behoeften." },
    ],
    benefits: [
      { title: "Moderne zekeringkast",       description: "Vervanging of installatie van kasten met differentieelautomaten, overstroombeveiliging en bliksembeveiliging." },
      { title: "Stopcontacten & verlichting", description: "Toevoegen, verplaatsen of vervangen van stopcontacten, schakelaars, ingebouwde spots, LED-panelen en buitenverlichting." },
      { title: "Nieuwe volledige bekabeling", description: "Integrale bekabeling voor nieuwbouw of zware renovaties, met uitvoeringsplannen inbegrepen." },
      { title: "AREI-conformiteitsrapport",  description: "Na elke installatie wordt een conformiteitsrapport afgegeven voor uw verzekering en de doorverkoop van het goed." },
      { title: "Gratis offerte",             description: "Gratis technisch bezoek om uw behoeften te evalueren en u een gedetailleerde en transparante offerte te geven." },
      { title: "2 jaar garantie",            description: "Al onze installaties zijn gedekt door een onderdelen- en arbeidsgarantie van 2 jaar." },
    ],
    pricing: {
      tagline: "Gratis en gedetailleerde offerte — afgeleverd binnen 24u",
      points: [
        "Gratis en vrijblijvend technisch bezoek",
        "Offerte afgeleverd binnen 24u met volledig werkbeschrijving",
        "Vervanging zekeringkast: vanaf 800 € afhankelijk van de oppervlakte",
        "Toevoegen van stopcontacten of circuits: per sessie begroot",
        "2 jaar garantie op onderdelen en arbeidskosten voor alle installaties",
      ],
    },
    steps: [
      { number: "01", title: "Technisch bezoek",            description: "Een technicus evalueert uw bestaande installatie, uw behoeften en stelt een werkplan voor." },
      { number: "02", title: "Gedetailleerde offerte",       description: "Ontvangst van een volledige offerte met werkbeschrijving, materialen en uitvoeringstermijnen." },
      { number: "03", title: "Uitvoering",                   description: "Onze elektriciens voeren de werken netjes uit, binnen de afgesproken termijnen." },
      { number: "04", title: "AREI-rapport & overhandiging", description: "Volledige tests, overhandiging van het conformiteitsrapport en uitleg over de werking." },
    ],
    faq: [
      { question: "Is een AREI-rapport verplicht?",                          answer: "Ja, in België moet elke elektrische installatie AREI-conform zijn en worden gecontroleerd door een onafhankelijk erkend organisme. TF Technics voert de werken uit en begeleidt u in dit proces tot het officiële rapport." },
      { question: "Hoe lang duurt een volledige installatie?",               answer: "Voor een standaard appartement (60-80 m²) rekent u 2 tot 4 dagen. Voor een huis of grotere werf wordt de planning vastgesteld tijdens het gratis technisch bezoek." },
      { question: "Kunt u werken in een bewoonde woning?",                   answer: "Ja. We plannen de werken per zone om stroomonderbrekingen en hinder te minimaliseren. We beschermen ook uw vloeren en meubels vóór de start." },
      { question: "Welke materialen gebruikt u?",                            answer: "Wij werken uitsluitend met CE-gecertificeerde materialen van erkende merken zoals Hager, Schneider Electric en Legrand — een garantie voor duurzaamheid en conformiteit." },
      { question: "Wat is het verschil tussen een zekering en een automaat?", answer: "Een automaat is herzetbaar: hij schakelt uit bij overbelasting en kan handmatig teruggezet worden. Een zekering 'brandt door' en moet vervangen worden. Moderne installaties gebruiken uitsluitend differentieelautomaten, veel veiliger. Als uw kast nog zekeringen bevat, is vervanging sterk aanbevolen." },
      { question: "Werkt u 's avonds of in het weekend voor professionals?",  answer: "Ja. Voor werven bij professionals of winkels kunnen we de werken plannen buiten de activiteitsuren, ook 's avonds of in het weekend, afhankelijk van uw operationele beperkingen." },
    ],
    seo: {
      title:       "Elektrische Installatie Brussel | Zekeringkast, Stopcontacten, Verlichting | TF Technics",
      description: "Volledige elektrische installatie in Brussel: zekeringkast, stopcontacten, bekabeling, verlichting. AREI-conform, conformiteitsrapport inbegrepen. Gratis offerte.",
    },
  },

  /* ── 3. LAADPAAL ─────────────────────────────────────────────────────────── */
  {
    slug:    "borne-recharge",
    iconKey: "battery",
    badge:   "Elektrische voertuigen",
    title:   "Laadpaal",
    heroTitle:    "Installeer uw laadpaal\nthuis\nvandaag nog.",
    heroSubtitle: "Wallbox tot 22 kW, compatibel met alle merken. TF Technics installeert uw laadpaal op één dag en begeleidt u voor de regionale premies.",
    intro: "Overschakelen naar elektrisch begint thuis. Een goed geïnstalleerde wallbox laat u tot 10× sneller laden dan een standaard huishoudelijk stopcontact. TF Technics begeleidt u van de installatie tot het aanvraagdossier voor de regionale premies.",
    problems: [
      { title: "Laden via huishoudelijk stopcontact: 18u voor een volle lading", desc: "Een standaard stopcontact (2,3 kW) is 3 tot 8× trager dan een dedicated wallbox. Elke nacht onvolledige lading is een dag gereden trajecten in het gedrang." },
      { title: "Premies beschikbaar maar procedures onbegrijpelijk",            desc: "Tot 40% terugbetaling in Brussel-Hoofdstad — maar de regionale dossiers ontmoedigen. TF Technics regelt het volledig in uw plaats." },
      { title: "Appartement of mede-eigendom zonder laadpaal",                 desc: "De Belgische wet faciliteert installatie in mede-eigendom sinds 2021. TF Technics neemt de procedure bij uw syndicus op zich." },
      { title: "Elektrische kast mogelijk onvoldoende voor een wallbox",        desc: "Een voorafgaande audit van uw installatie is onmisbaar vóór elke installatie. TF Technics voert deze gratis uit." },
    ],
    benefits: [
      { title: "Tot 22 kW",               description: "Enkelfasige (3,7–7,4 kW) of driefasige (11–22 kW) laadpalen afhankelijk van uw voertuig en installatie." },
      { title: "Gekwalificeerde technicus", description: "Verzorgde installatie conform AREI-normen. Premiedossier samengesteld en ingediend door ons." },
      { title: "Premies & subsidies",       description: "Wij regelen de aanvragen voor Brussel Leefmilieu-premies, energiepremies Wallonië en Vlaanderen in uw naam." },
      { title: "Compatibel met alle merken", description: "Wallbox voor Tesla, Renault, Volkswagen, Kia, Hyundai, BMW, Peugeot en alle andere elektrische voertuigen." },
      { title: "Installatie op 1 dag",     description: "Van het leggen van de conduits tot de eindtest, onze technici ronden alles af in één bezoek." },
      { title: "Supervisie-app",           description: "Beheer uw laadsessies via uw smartphone: programmering, verbruikshistoriek, tarieven daluren." },
    ],
    pricing: {
      tagline: "Regionale premies: tot 40% van de kosten terugbetaald",
      points: [
        "Audit van uw elektrische installatie: gratis",
        "Premie Brussel Leefmilieu: tot 40% van de totale kosten",
        "Energiepremies Wallonië en Vlaanderen (VEKA) beschikbaar op voorwaarden",
        "Premiedossier volledig samengesteld en ingediend door TF Technics",
        "2 jaar garantie op de volledige laadpaalinstallatie",
      ],
    },
    steps: [
      { number: "01", title: "Audit van uw installatie", description: "Controle van de beschikbare elektrische capaciteit en keuze van de laadpaal op maat van uw voertuig." },
      { number: "02", title: "Bestelling & planning",    description: "Selectie van de wallbox, bestelling van het materiaal en planning van de installatie op uw gemak." },
      { number: "03", title: "Volledige installatie",    description: "Leggen van conduits, bekabeling, bevestiging van de wallbox, aansluiting en configuratie van de app." },
      { number: "04", title: "Test & premiedossier",    description: "Volledige laadtest en overhandiging van het dossier voor aanvraag van uw regionale premies." },
    ],
    faq: [
      { question: "Welke laadpaal is compatibel met mijn auto?",              answer: "Al onze laadpalen gebruiken de Type 2-norm (Europese standaard verplicht sinds 2019), compatibel met alle elektrische voertuigen verkocht in België. Voor Tesla met eigen aansluiting is een Type 2-adapter standaard meegeleverd met het voertuig." },
      { question: "Welke premies kan ik krijgen in Brussel?",                 answer: "In het Brussels Hoofdstedelijk Gewest kunt u een premie krijgen van tot 40% van de installatiekosten via Brussel Leefmilieu. TF Technics beheert het volledige dossier voor u — van aanvraag tot uitbetaling." },
      { question: "Kan ik een laadpaal installeren in een appartement?",      answer: "Ja, mits akkoord van de mede-eigendom. De Belgische wet faciliteert deze procedures sinds 2021. TF Technics kan u begeleiden in de procedure bij uw syndicus." },
      { question: "Hoeveel ampère moet ik beschikbaar hebben?",               answer: "Voor een enkelfasige 7,4 kW laadpaal hebt u minimaal een dedicated circuit van 32 A nodig. Voor 22 kW driefasig zijn 3×32 A nodig. TF Technics controleert dit tijdens de gratis audit." },
      { question: "Werkt mijn laadpaal met elk voertuig?",                    answer: "Ja. De Type 2-connector is de Europese standaard: compatibel met alle elektrische modellen verkocht in Europa sinds 2019 (Renault, Volkswagen, Peugeot, Kia, BMW, Hyundai, Tesla via adapter, enz.)." },
      { question: "Stopt de laadpaal bij een stroomonderbreking?",            answer: "Ja, zoals elk elektrisch apparaat. Slimme laadpalen (smart wallbox) onthouden de ladingsprogrammeringen en hervatten ze automatisch zonder handmatige tussenkomst bij het herstel van de stroom." },
    ],
    seo: {
      title:       "Laadpaal Installatie Brussel | Wallbox Elektrisch Voertuig | TF Technics",
      description: "Installatie van laadpalen (wallbox) in Brussel. Tot 22 kW, begeleiding voor regionale premies, installatie op 1 dag. Gratis offerte.",
    },
  },

  /* ── 4. RENOVATIE & AREI-CONFORMITEIT ───────────────────────────────────── */
  {
    slug:    "renovation-conformite",
    iconKey: "wrench",
    badge:   "AREI-normen",
    title:   "Renovatie & AREI-conformiteit",
    heroTitle:    "Breng uw\nelektrische installatie\nop AREI-norm.",
    heroSubtitle: "Verouderde installatie, verouderde bedrading, niet-conforme zekeringkast — TF Technics voert de volledige conformiteitsaanpassing van uw elektrische installatie uit in alle rust.",
    intro: "In België moet elke elektrische installatie conform zijn aan het AREI. Een niet-conforme installatie kan uw woningverzekering ongeldig maken en de verkoop van uw eigendom blokkeren. TF Technics begeleidt u en voert de nodige werken uit.",
    problems: [
      { title: "Verkoop geblokkeerd door een niet-conformiteitsrapport",      desc: "De koper of notaris eist conformiteitsaanpassing vóór de ondertekening. Elke verloren week kost geld." },
      { title: "Verzekering weigert elektrische schade te dekken",            desc: "Een niet-conforme installatie maakt uw dekking ongeldig. Bescherm uzelf vóór de schade, niet erna." },
      { title: "Installatie van meer dan 25 jaar, nooit gecontroleerd",       desc: "Verouderde kabels, ontbreken van aarding, niet-conforme kast — risico's stapelen zich stilzwijgend op." },
      { title: "Renovatiewerken die verouderde installaties blootleggen",     desc: "Aluminiumdraden, stopcontacten zonder aarding, zekeringkasten — profiteer van de renovatie om alles bij te werken." },
    ],
    benefits: [
      { title: "Volledige AREI-diagnose", description: "Uitvoerige inspectie van uw installatie om alle niet-conformiteiten te identificeren." },
      { title: "Begroot werkplan",         description: "Precieze lijst van verplichte en aanbevolen werken, met prioriteiten en gedetailleerd budget." },
      { title: "Vervanging zekeringkast",  description: "Modernisering van de zekeringkast met differentieelautomaten en bliksembeveiliging indien nodig." },
      { title: "Aarding",                  description: "Installatie of controle van de aarding, verplicht in elke moderne installatie." },
      { title: "Conformiteitsrapport",     description: "Officieel document dat de conformiteit van uw installatie bevestigt, vereist voor verzekering en verkoop." },
      { title: "Begeleiding controle",     description: "TF Technics begeleidt u tijdens de controle door het erkend organisme en beheert eventuele opmerkingen." },
    ],
    pricing: {
      tagline: "Nauwkeurige offerte na gratis diagnose — geen verrassing",
      points: [
        "Volledige diagnose van de installatie: gratis en vrijblijvend",
        "Vervanging zekeringkast + aarding: 1.500 € – 4.000 € afhankelijk van oppervlakte",
        "Volledige renovatie oud huis: 4.000 € – 12.000 € (indicatief)",
        "Exacte begroting na technisch bezoek — geen blinde forfaits",
        "Begeleiding eindcontrole door erkend organisme inbegrepen in de offerte",
      ],
    },
    steps: [
      { number: "01", title: "Volledige inspectie",        description: "Grondig technisch bezoek van de volledige installatie met schriftelijk rapport van niet-conformiteiten." },
      { number: "02", title: "Herstelplan",                description: "Voorstel van geprioriteerde werken met gedetailleerde offerte. U kiest het interventietempo." },
      { number: "03", title: "Conformiteitswerken",        description: "Uitvoering van de werken door onze gekwalificeerde technici, binnen de afgesproken termijnen." },
      { number: "04", title: "Controle & AREI-rapport",   description: "Eindcontrole door erkend organisme, overhandiging van het officieel conformiteitsrapport." },
    ],
    faq: [
      { question: "Wanneer moet mijn huis AREI-conform zijn?",                   answer: "Elke elektrische installatie moet AREI-conform zijn. Als u uw eigendom verkoopt, is een controle verplicht vóór de ondertekening. Bij niet-conformiteit heeft de koper 18 maanden om te regulariseren — maar dit heeft systematisch invloed op de verkoopprijs." },
      { question: "Kan mijn verzekering weigeren te vergoeden?",                 answer: "Ja. Bij een elektrische schade in een niet-conforme woning kan uw verzekeraar de dekking weigeren of de vergoeding drastisch verminderen. AREI-conformiteit is uw echte bescherming." },
      { question: "Hoeveel kost een volledige conformiteitsaanpassing?",         answer: "De kosten hangen af van de initiële staat van de installatie. TF Technics voert de diagnose gratis uit en bezorgt u een gedetailleerde offerte. Aarding + vervanging zekeringkast varieert tussen 1.500 € en 4.000 € afhankelijk van de oppervlakte." },
      { question: "Kan ik in mijn huis blijven tijdens de werken?",              answer: "In de meeste gevallen ja. We plannen de stroomonderbrekingen om ze te minimaliseren en uit te voeren op de minst belastende momenten voor u en uw gezin." },
      { question: "Moet ik aanwezig zijn tijdens de controle door het erkend organisme?", answer: "Uw aanwezigheid is niet verplicht maar aanbevolen. TF Technics kan u vertegenwoordigen tijdens het controlebezoek en eventuele technische opmerkingen van de inspecteur beheren. U ontvangt het officieel rapport rechtstreeks." },
      { question: "Heeft conformiteitsaanpassing invloed op de waarde van mijn eigendom?", answer: "Positief, ja. Een eigendom met een conforme installatie verkoopt sneller en zonder waardevermindering. Kopers en hun banken letten steeds meer op de elektrische staat. Een recent conformiteitsrapport is een concreet verkoopargument." },
    ],
    seo: {
      title:       "AREI-conformiteit Elektrische Installatie Brussel | TF Technics",
      description: "AREI-conforme elektrische installatie in Brussel. Renovatie installatie, vervanging zekeringkast, conformiteitsrapport. Gratis offerte.",
    },
  },

  /* ── 5. ELEKTRISCHE DIAGNOSE ────────────────────────────────────────────── */
  {
    slug:    "diagnostic-electrique",
    iconKey: "scan",
    badge:   "Gedetailleerd rapport",
    title:   "Elektrische diagnose",
    heroTitle:    "Volledige diagnose\nvan uw elektrische\ninstallatie.",
    heroSubtitle: "Professionele inspectie met gedetailleerd technisch rapport — TF Technics analyseert uw installatie om elk risico te detecteren voordat het een probleem wordt.",
    intro: "Voorkomen is beter dan genezen. Een regelmatige elektrische diagnose maakt het mogelijk afwijkingen te detecteren voordat ze een panne, brand of een ongeluk veroorzaken. TF Technics gebruikt professionele meetinstrumenten voor een volledig overzicht van uw installatie.",
    problems: [
      { title: "U koopt een eigendom en kent de elektrische staat niet",     desc: "Een diagnose vóór aankoop bespaart u onaangename verrassingen na de ondertekening — en mogelijk duizenden euro's aan onvoorziene werken." },
      { title: "Herhaalde pannes die u niet kunt verklaren",                 desc: "Terugkerende zekeringen, flikkerende verlichting, warme stopcontacten — een inspectie onthult de oorzaak die het blote oog niet ziet." },
      { title: "Installatie nooit gecontroleerd in meer dan 10 jaar",        desc: "De onzichtbare veroudering van kabels en aansluitingen is de eerste oorzaak van elektrische huisbranden in België." },
      { title: "Verzekeraar of notaris vraagt een recente elektrische staat", desc: "Ons gedetailleerd technisch rapport voldoet aan de eisen van verzekeraars, vastgoedkantoren en notarissen." },
    ],
    benefits: [
      { title: "Gedetailleerd schriftelijk rapport", description: "Volledig verslag met foto's, metingen en classificatie van afwijkingen per prioriteitsniveau." },
      { title: "Professionele metingen",              description: "Gebruik van gecertificeerde meetapparatuur: multimeter, isolatietester, netwerkanalysator." },
      { title: "Vroege detectie",                     description: "Identificatie van losse verbindingen, verouderde kabels, overbelastingen en brandrisico's." },
      { title: "Persoonlijk advies",                  description: "Geprioriteerde aanbevelingen op basis van urgentie en budget, zonder verplichting de werken toe te vertrouwen aan TF Technics." },
      { title: "Meerwaarde bij verkoop",              description: "Een recente diagnose stelt kopers gerust en kan de verkoop van uw eigendom versnellen." },
      { title: "Werkenofferte indien nodig",          description: "Als interventies nodig zijn, wordt een offerte bij het rapport gevoegd zonder meerkosten." },
    ],
    pricing: {
      tagline: "Volledig rapport afgeleverd binnen 48u — inbegrepen in de offerte",
      points: [
        "Diagnose appartement (tot 100 m²): offerte op aanvraag",
        "Diagnose individuele woning: offerte afhankelijk van oppervlakte en ouderdom",
        "Schriftelijk rapport met foto's en classificatie van afwijkingen per prioriteit",
        "Indien werken nodig: offerte bij het rapport gevoegd, zonder diagnostiekkosten",
        "Duur ter plaatse: 1,5u tot 3u afhankelijk van de oppervlakte — rapport binnen 48u",
      ],
    },
    steps: [
      { number: "01", title: "Afspraak",               description: "Planning van een bezoek op uw gemak. De diagnose duurt 1 tot 3 uur afhankelijk van de oppervlakte." },
      { number: "02", title: "Inspectie ter plaatse",  description: "Visuele controle en instrumentele metingen van de volledige elektrische installatie." },
      { number: "03", title: "Analyse & rapport",      description: "Opstelling van het gedetailleerd rapport met foto's en classificatie van de vastgestelde afwijkingen." },
      { number: "04", title: "Presentatie & advies",   description: "Toelichting van het rapport, uitleg van de kritieke punten en interventieaanbevelingen." },
    ],
    faq: [
      { question: "Hoe vaak een elektrische diagnose laten uitvoeren?",       answer: "Wij raden een diagnose aan om de 10 jaar voor een bestaande installatie, en systematisch vóór de aankoop van een onroerend goed of na een elektrisch incident." },
      { question: "Verschilt de diagnose van de AREI-controle?",              answer: "Ja. De AREI-controle wordt uitgevoerd door een onafhankelijk erkend organisme en produceert een officieel wettelijk erkend certificaat. Onze diagnose is een diepgaande technische inspectie die deze controle voorbereidt en aanvult." },
      { question: "Hoe lang duurt een diagnose?",                             answer: "Voor een appartement tot 100 m² rekent u 1,5u tot 2u. Voor een huis 2,5u tot 3u. Het schriftelijk rapport wordt u afgeleverd binnen 48 werkuren." },
      { question: "Bent u objectief als er werken nodig zijn?",               answer: "Absoluut. Wij bezorgen u het rapport met de vastgestelde afwijkingen. U bent vrij om de werken toe te vertrouwen aan wie u wenst. Onze reputatie berust op de integriteit van onze vaststellingen." },
      { question: "Verplicht de diagnose TF Technics om de werken uit te voeren?", answer: "Nee. Onze diagnose is volledig onafhankelijk van de werken. U ontvangt een objectief rapport en bent volledig vrij voor het vervolg. Wij stellen een werkenofferte voor als optie, nooit als verplichting." },
      { question: "Wat is het verschil met een officiële AREI-controle?",     answer: "De officiële AREI-controle wordt uitgevoerd door erkende onafhankelijke organisaties (Vinçotte, SOCABEL, Apave) en produceert een wettelijk erkend certificaat voor de verkoop. Onze diepgaande diagnose bereidt deze controle voor en onthult de afwijkingen die gecorrigeerd moeten worden vóór het officieel bezoek." },
    ],
    seo: {
      title:       "Elektrische Diagnose Brussel | Inspectie & Technisch Rapport | TF Technics",
      description: "Volledige elektrische diagnose in Brussel met gedetailleerd rapport. Detectie van afwijkingen, professionele metingen, persoonlijk advies. Gratis offerte.",
    },
  },
];

export function getServiceBySlugNl(slug: string): ServiceData | undefined {
  return SERVICES_DATA_NL.find((s) => s.slug === slug);
}
