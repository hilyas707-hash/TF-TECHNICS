export interface Article {
  slug:        string;
  title:       string;
  excerpt:     string;
  date:        string;       // ISO 8601
  readTime:    number;       // minutes
  category:    string;
  seoTitle:    string;
  seoDesc:     string;
  content:     ArticleBlock[];
}

export type ArticleBlock =
  | { type: "h2";        text: string }
  | { type: "h3";        text: string }
  | { type: "p";         text: string }
  | { type: "ul";        items: string[] }
  | { type: "cta";       label: string; href: string }
  | { type: "highlight"; text: string };

export const ARTICLES: Article[] = [
  /* ── 1 ─────────────────────────────────────────────────────────────────── */
  {
    slug:     "disjoncteur-saute-que-faire",
    title:    "Disjoncteur qui saute : que faire et quand appeler un électricien ?",
    excerpt:  "Un disjoncteur qui saute en boucle n'est pas anodin. Découvrez les causes fréquentes, ce que vous pouvez tenter vous-même et quand il est indispensable d'appeler un professionnel.",
    date:     "2026-04-10",
    readTime: 5,
    category: "Dépannage",
    seoTitle: "Disjoncteur qui Saute : Causes & Solutions | TF Technics Bruxelles",
    seoDesc:  "Votre disjoncteur saute en boucle ? Découvrez les causes (surcharge, court-circuit, humidité) et pourquoi appeler un électricien professionnel à Bruxelles.",
    content: [
      { type: "p", text: "Un disjoncteur qui saute régulièrement est l'un des problèmes électriques les plus fréquents en Belgique. Si cela arrive une fois, pas de panique. Mais si le phénomène se répète, il faut comprendre pourquoi avant que la situation ne devienne dangereuse." },
      { type: "h2", text: "Pourquoi un disjoncteur saute-t-il ?" },
      { type: "p", text: "Un disjoncteur est un dispositif de protection : il coupe le courant automatiquement pour éviter une surchauffe ou un incendie. Voici les causes les plus fréquentes :" },
      { type: "ul", items: [
        "Surcharge du circuit : trop d'appareils branchés en même temps sur le même circuit (four, lave-linge, sèche-cheveux...)",
        "Court-circuit : un fil dénudé ou une connexion défectueuse crée un contact non voulu.",
        "Défaut à la terre : un appareil défectueux laisse fuir du courant vers la masse.",
        "Disjoncteur vieillissant : après 15-20 ans, les composants s'usent et déclenchent trop facilement.",
        "Humidité dans le tableau : fréquent dans les caves ou sous-sols belges.",
      ]},
      { type: "h2", text: "Pourquoi ne pas intervenir soi-même ?" },
      { type: "p", text: "Face à un disjoncteur qui saute, le réflexe naturel est de le réenclencher. C'est compréhensible — mais c'est aussi risqué. Un disjoncteur qui disjoncte est un signal d'alarme : forcer le retour en marche sans comprendre la cause peut provoquer une surchauffe des câbles, un court-circuit aggravé ou un incendie domestique. Les installations électriques cachent des dangers invisibles à l'œil nu : connexions desserrées, isolant dégradé, câbles surchargés. Un électricien professionnel dispose des instruments de mesure adaptés pour identifier le problème à la source, en toute sécurité." },
      { type: "highlight", text: "💡 Le bon réflexe : ne réenclenchez pas le disjoncteur en boucle. Appelez TF Technics — nous identifions la cause exacte et réparons définitivement." },
      { type: "highlight", text: "⚠️ Si le disjoncteur saute immédiatement à la remise en marche, sans aucun appareil branché, ne réenclenchez plus : c'est un court-circuit dans le câblage. Appelez un électricien agréé." },
      { type: "h2", text: "Quand appeler un électricien ?" },
      { type: "p", text: "Certaines situations nécessitent l'intervention d'un électricien professionnel sans délai :" },
      { type: "ul", items: [
        "Le disjoncteur saute immédiatement sans charge branchée.",
        "Vous sentez une odeur de brûlé ou de plastique chaud.",
        "Le tableau électrique est chaud au toucher.",
        "Vous observez des traces de carbonisation ou de brûlures.",
        "Le problème revient régulièrement malgré vos vérifications.",
        "Votre installation a plus de 25 ans.",
      ]},
      { type: "h2", text: "Le coût d'une intervention à Bruxelles" },
      { type: "p", text: "Le tarif d'un électricien pour ce type d'intervention dépend de plusieurs facteurs : l'heure (jour/nuit), le type de panne et la durée de l'intervention. Chez TF Technics, le déplacement est inclus et le tarif est communiqué avant toute intervention. Pas de mauvaise surprise." },
      { type: "cta", label: "Appeler TF Technics — intervention < 60 min", href: "tel:+32483480496" },
      { type: "h2", text: "Prévenir les pannes futures" },
      { type: "p", text: "Un tableau électrique moderne avec disjoncteurs différentiels de type A ou F, un parafoudre et une mise à la terre conforme réduisent considérablement les risques. Si votre installation date d'avant 2000, un diagnostic électrique complet est fortement recommandé — notamment avant la vente de votre bien." },
    ],
  },

  /* ── 2 ─────────────────────────────────────────────────────────────────── */
  {
    slug:     "primes-bornes-recharge-belgique-2026",
    title:    "Primes bornes de recharge en Belgique en 2026 : guide complet",
    excerpt:  "Région bruxelloise, Wallonie, Flandre : toutes les primes disponibles pour l'installation d'une borne de recharge à domicile en 2026, les montants et les conditions.",
    date:     "2026-04-18",
    readTime: 7,
    category: "Bornes de recharge",
    seoTitle: "Primes Bornes Recharge Belgique 2026 | Wallbox Subventions | TF Technics",
    seoDesc:  "Guide complet des primes pour borne de recharge en Belgique en 2026 : Bruxelles, Wallonie, Flandre. Montants, conditions et démarches expliqués.",
    content: [
      { type: "p", text: "Installer une borne de recharge (wallbox) à domicile peut bénéficier d'aides financières importantes selon votre région. En 2026, les trois régions belges maintiennent des dispositifs de soutien pour encourager la mobilité électrique. Voici un guide complet et à jour." },
      { type: "h2", text: "Primes à Bruxelles-Capitale" },
      { type: "p", text: "En Région de Bruxelles-Capitale, Bruxelles Environnement propose une prime pour l'installation d'une borne de recharge privée :" },
      { type: "ul", items: [
        "Montant : jusqu'à 40 % des coûts d'installation (matériel + main-d'œuvre).",
        "Plafond : 1 250 € pour les particuliers.",
        "Condition : la borne doit être installée par un installateur certifié.",
        "La demande se fait après l'installation via le portail Bruxelles Environnement.",
        "Délai de traitement : 8 à 12 semaines en 2026.",
      ]},
      { type: "h2", text: "Primes en Wallonie" },
      { type: "p", text: "La Wallonie propose des aides via les primes énergie de la Région wallonne :" },
      { type: "ul", items: [
        "Prime de base pour borne de recharge résidentielle.",
        "Conditions de revenus applicables (prime plus élevée pour revenus modestes).",
        "Installation par un électricien agréé obligatoire.",
        "Possibilité de cumul avec d'autres primes énergie (isolation, pompe à chaleur).",
      ]},
      { type: "h2", text: "Primes en Flandre (VEKA)" },
      { type: "p", text: "En Région flamande, les aides sont gérées par le VEKA (Vlaams Energie- en Klimaatagentschap) :" },
      { type: "ul", items: [
        "Prime borne de recharge intelligente ('slim laden') disponible.",
        "La borne doit être compatible avec la gestion intelligente de la charge.",
        "Installation par un électricien professionnel obligatoire pour bénéficier des primes.",
        "Déduction fiscale possible en plus de la prime régionale.",
      ]},
      { type: "highlight", text: "💡 TF Technics gère toutes les démarches administratives à votre place, du dossier de demande jusqu'à l'obtention de la prime. Zéro stress, zéro paperasse pour vous." },
      { type: "h2", text: "Déduction fiscale fédérale" },
      { type: "p", text: "En plus des primes régionales, une déduction fiscale fédérale pour l'installation d'une borne de recharge intelligente à domicile est disponible. Renseignez-vous auprès de votre comptable ou du SPF Finances pour les conditions 2026." },
      { type: "h2", text: "Comment bénéficier des primes ?" },
      { type: "ul", items: [
        "Faites auditer votre installation électrique (gratuit chez TF Technics).",
        "Choisissez une borne certifiée compatible avec les exigences régionales.",
        "Faites installer par un technicien certifié (condition indispensable).",
        "Constituez le dossier de demande avec les factures et attestations.",
        "Soumettez la demande dans le délai imparti (généralement 6 mois après l'installation).",
      ]},
      { type: "cta", label: "Demander un devis borne de recharge gratuit", href: "#devis" },
      { type: "h2", text: "Quelle borne choisir ?" },
      { type: "p", text: "Pour une maison individuelle, une borne monophasée de 7,4 kW est généralement suffisante. Pour une recharge plus rapide ou un véhicule à grande batterie, une borne triphasée de 11 ou 22 kW est recommandée. Lors de notre audit gratuit, nous déterminons la configuration idéale pour votre situation." },
    ],
  },

  /* ── 3 ─────────────────────────────────────────────────────────────────── */
  {
    slug:     "conformite-arei-belgique-guide",
    title:    "Conformité AREI en Belgique : tout ce que vous devez savoir",
    excerpt:  "Vente immobilière, assurance, ancienne installation : pourquoi la conformité AREI est obligatoire, ce qu'elle implique concrètement et combien ça coûte.",
    date:     "2026-04-05",
    readTime: 6,
    category: "Conformité",
    seoTitle: "Conformité AREI Belgique : Guide Complet 2026 | TF Technics",
    seoDesc:  "Tout savoir sur la conformité AREI en Belgique : obligations légales, coût d'une mise en conformité, délais et impact sur votre assurance. Guide 2026.",
    content: [
      { type: "p", text: "En Belgique, toute installation électrique domestique ou professionnelle doit être conforme au Règlement Général sur les Installations Électriques (RGIE/AREI). Cette obligation est souvent méconnue jusqu'au moment de la vente d'un bien ou d'un sinistre. Voici ce que vous devez absolument savoir." },
      { type: "h2", text: "Qu'est-ce que la conformité AREI ?" },
      { type: "p", text: "L'AREI (Algemeen Reglement op de Elektrische Installaties) est le cadre légal belge qui définit les normes de sécurité pour toutes les installations électriques. Un contrôle de conformité est réalisé par un organisme agréé indépendant (comme VINÇOTTE, SOCABEL ou APAVE) qui vérifie que votre installation respecte ces normes." },
      { type: "h2", text: "Quand la conformité est-elle obligatoire ?" },
      { type: "ul", items: [
        "Vente immobilière : un contrôle AREI est obligatoire avant toute vente.",
        "Nouvelle installation : toute installation neuve doit être contrôlée avant mise en service.",
        "Rénovation importante : remplacement du tableau ou câblage complet.",
        "Après un sinistre électrique (incendie, court-circuit grave).",
        "Demande de l'assureur (de plus en plus fréquent).",
      ]},
      { type: "h2", text: "Que se passe-t-il en cas de non-conformité ?" },
      { type: "p", text: "Lors d'une vente, si le contrôle révèle des non-conformités, l'acheteur dispose de 18 mois pour les corriger. Cependant, cela peut impacter négativement la transaction : prix de vente revu à la baisse, acheteurs rebutés, négociations compliquées." },
      { type: "highlight", text: "⚠️ Important : en cas de sinistre électrique dans un logement non conforme, votre assureur peut refuser de vous indemniser ou réduire drastiquement l'indemnisation. La conformité AREI protège votre couverture assurance." },
      { type: "h2", text: "Les points contrôlés lors d'un audit AREI" },
      { type: "ul", items: [
        "État du tableau électrique et des disjoncteurs différentiels.",
        "Mise à la terre de l'installation.",
        "Isolation des câbles et fils électriques.",
        "Protection des circuits humides (cuisine, salle de bain).",
        "Conformité des prises et interrupteurs.",
        "Éclairage de sécurité si applicable.",
        "Distances de sécurité dans les locaux humides.",
      ]},
      { type: "h2", text: "Combien coûte une mise en conformité ?" },
      { type: "p", text: "Le coût varie considérablement selon l'état initial de votre installation. En règle générale :" },
      { type: "ul", items: [
        "Installation récente avec quelques remarques mineures : 300 € à 800 €.",
        "Remplacement du tableau électrique seul : 800 € à 2 000 €.",
        "Mise à la terre + tableau : 1 500 € à 3 500 €.",
        "Rénovation complète d'une maison ancienne : 4 000 € à 12 000 €.",
      ]},
      { type: "p", text: "Ces montants sont indicatifs. Seul un diagnostic gratuit réalisé par TF Technics vous donnera un chiffre précis pour votre installation." },
      { type: "cta", label: "Demander un diagnostic AREI gratuit", href: "#devis" },
      { type: "h2", text: "Délai pour la mise en conformité" },
      { type: "p", text: "Après un contrôle avec non-conformités, vous disposez généralement de 12 à 18 mois pour effectuer les travaux. TF Technics vous accompagne de A à Z : diagnostic, travaux de mise en conformité, et présence lors du contrôle final par l'organisme agréé." },
    ],
  },

  /* ── 4 ─────────────────────────────────────────────────────────────────── */
  {
    slug:     "securite-electrique-maison-conseils",
    title:    "10 signaux d'alerte qui indiquent que votre installation électrique doit être vérifiée",
    excerpt:  "Tableau vieillissant, prises qui chauffent, disjoncteurs qui sautent : ces 10 signes sont des avertissements que seul un électricien professionnel peut évaluer correctement.",
    date:     "2026-03-28",
    readTime: 4,
    category: "Sécurité",
    seoTitle: "10 Signaux d'Alerte Électrique à Faire Vérifier | TF Technics Bruxelles",
    seoDesc:  "Tableau vieillissant, prises chaudes, odeur de brûlé : 10 signaux qui imposent d'appeler un électricien à Bruxelles. Diagnostic gratuit.",
    content: [
      { type: "p", text: "Les accidents électriques représentent la deuxième cause d'incendie domestique en Belgique. Dans la grande majorité des cas, des signes avant-coureurs existaient bien avant le sinistre — mais ils ont été ignorés ou sous-estimés. Voici les 10 signaux qui doivent vous conduire à appeler un électricien sans attendre." },
      { type: "h2", text: "1. Votre tableau électrique a plus de 25 ans" },
      { type: "p", text: "Les anciens tableaux avec fusibles à cartouche ou fusibles plomb n'offrent pas la protection nécessaire. Au-delà de 25 ans, une inspection professionnelle s'impose. Un remplacement peut s'avérer indispensable — et urgent." },
      { type: "h2", text: "2. Vos disjoncteurs différentiels ne se déclenchent pas au test" },
      { type: "p", text: "Si le bouton test de vos disjoncteurs différentiels ne déclenche pas, leur protection est défaillante. C'est un risque d'électrocution réel. Un électricien doit les remplacer immédiatement." },
      { type: "h2", text: "3. Des prises ou interrupteurs sont chauds au toucher" },
      { type: "p", text: "Une prise qui chauffe anormalement signale une surcharge, une connexion desserrée ou un câblage défectueux. C'est une cause directe d'incendie. N'attendez pas." },
      { type: "h2", text: "4. Des câbles visibles sont fissurés, jaunis ou dénudés" },
      { type: "p", text: "Un câble dont l'isolation est dégradée est un risque de court-circuit immédiat. Aucune réparation provisoire n'est acceptable : le remplacement par un professionnel est la seule solution sûre." },
      { type: "h2", text: "5. Vous n'avez pas de prise de terre dans vos pièces humides" },
      { type: "p", text: "Cuisine et salle de bain exigent des circuits dédiés avec protection différentielle et mise à la terre. Une installation non conforme dans ces zones expose à un risque d'électrocution fatal." },
      { type: "h2", text: "6. Vos prises n'ont pas de borne de terre (3e trou rond)" },
      { type: "p", text: "L'absence de mise à la terre est une non-conformité AREI. Votre installation n'est pas sécurisée et votre assureur peut refuser de vous indemniser en cas de sinistre électrique." },
      { type: "h2", text: "7. Vous avez des multiprises en cascade ou des rallonges permanentes" },
      { type: "p", text: "Les multiprises en cascade indiquent un manque de prises dans votre installation. C'est un signe que le câblage d'origine est sous-dimensionné et doit être renforcé par un professionnel." },
      { type: "h2", text: "8. Vous sentez une odeur de brûlé ou de plastique chaud" },
      { type: "p", text: "Une odeur de brûlé est le signe d'une surchauffe active. Coupez le disjoncteur principal et appelez immédiatement un électricien. Ne rallumez rien avant son intervention." },
      { type: "h2", text: "9. Des scintillements ou variations d'éclairage se produisent régulièrement" },
      { type: "p", text: "Des variations de lumière répétées trahissent des connexions desserrées, un câblage surchargé ou des problèmes sur le réseau. Ignorés, ces symptômes évoluent vers la panne grave." },
      { type: "h2", text: "10. Votre installation n'a jamais été contrôlée" },
      { type: "p", text: "Une installation électrique non vérifiée depuis plus de 10 ans cache des risques que seul un diagnostic professionnel peut révéler : connexions défaillantes, isolants dégradés, surcharges chroniques. Ne laissez pas votre sécurité au hasard." },
      { type: "cta", label: "Demander un diagnostic électrique gratuit", href: "#devis" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
