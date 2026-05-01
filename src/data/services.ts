/* ─────────────────────────────────────────────────────────────────────────────
   Données de contenu pour les 5 pages de services TF Technics
   ───────────────────────────────────────────────────────────────────────────── */

export interface ServiceBenefit {
  title:       string;
  description: string;
}

export interface ServiceStep {
  number: string;
  title:  string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer:   string;
}

export interface ServiceProblem {
  title: string;
  desc:  string;
}

export interface ServicePricing {
  tagline: string;
  points:  string[];
}

export interface ServiceData {
  slug:         string;
  iconKey:      "zap" | "plugzap" | "battery" | "wrench" | "scan";
  badge:        string;
  title:        string;
  heroTitle:    string;
  heroSubtitle: string;
  intro:        string;
  problems:     ServiceProblem[];
  benefits:     ServiceBenefit[];
  pricing:      ServicePricing;
  steps:        ServiceStep[];
  faq:          ServiceFaq[];
  seo: {
    title:       string;
    description: string;
  };
}

export const SERVICES_DATA: ServiceData[] = [
  /* ── 1. DÉPANNAGE D'URGENCE ─────────────────────────────────────────────── */
  {
    slug:    "depannage-urgence",
    iconKey: "zap",
    badge:   "Disponible 24h/24 – 7j/7",
    title:   "Dépannage d'urgence",
    heroTitle:    "Panne électrique ?\nNous arrivons\nen moins de 60 min.",
    heroSubtitle: "Court-circuit, disjoncteur qui saute, perte de courant totale ou partielle — TF Technics intervient en urgence à Bruxelles et ses environs, de jour comme de nuit.",
    intro: "Une urgence électrique ne se planifie pas. Que ce soit une panne totale de courant, un fusible qui saute en boucle ou une odeur de brûlé, chaque minute compte. TF Technics garantit une intervention rapide, sécurisée et conforme à l'AREI.",
    problems: [
      { title: "Plus de courant dans une pièce ou toute la maison",    desc: "Un disjoncteur défaillant ou un câble endommagé peut tout couper sans prévenir. Chaque minute sans courant est une minute de trop." },
      { title: "Disjoncteur qui saute en boucle",                      desc: "Vous réenclenchez, ça tient quelques minutes, puis ça recommence. C'est le signe d'une surcharge ou d'un court-circuit à localiser immédiatement." },
      { title: "Odeur de brûlé ou traces de carbonisation",            desc: "Situation d'urgence absolue. Coupez le disjoncteur général et appelez maintenant — ne rallumez rien avant l'intervention." },
      { title: "Étincelles, prises ou interrupteurs qui chauffent",     desc: "Un contact défectueux qui chauffe peut déclencher un incendie en quelques heures. N'attendez pas." },
    ],
    benefits: [
      { title: "Intervention < 60 min",     description: "Nos techniciens sont positionnés stratégiquement pour couvrir Bruxelles et ses environs en moins d'une heure." },
      { title: "Disponible 24h/24 – 7j/7",  description: "Week-ends, nuits, jours fériés inclus. Une ligne d'urgence dédiée, réponse immédiate garantie." },
      { title: "Diagnostic inclus",          description: "Nous identifions l'origine exacte de la panne avant toute intervention, sans frais de diagnostic cachés." },
      { title: "Matériel embarqué",          description: "Nos véhicules sont équipés du matériel courant pour résoudre 95 % des pannes en une seule visite." },
      { title: "Assuré RC professionnelle",  description: "Couverture RC professionnelle complète. Chaque intervention respecte le Règlement Général sur les Installations Électriques (AREI)." },
      { title: "Devis transparent",          description: "Tarif communiqué avant intervention. Pas de mauvaise surprise sur la facture." },
    ],
    pricing: {
      tagline: "Tarif communiqué avant intervention — zéro surprise",
      points: [
        "Déplacement inclus dans le tarif final",
        "Estimation donnée par téléphone avant notre arrivée",
        "Supplément fixe en heures nocturnes (22h–7h) et week-end — annoncé à l'avance",
        "Facturation à l'heure réelle + pièces au prix fournisseur",
        "Paiement par virement, carte bancaire ou espèces",
      ],
    },
    steps: [
      { number: "01", title: "Appelez-nous",          description: "Décrivez brièvement la panne. Un technicien qualifié prend l'appel immédiatement, 24h/24." },
      { number: "02", title: "Départ immédiat",        description: "Le technicien le plus proche est dispatché sur place. Vous recevez une estimation d'arrivée." },
      { number: "03", title: "Diagnostic sur site",    description: "Inspection complète de l'installation pour identifier l'origine exacte du problème." },
      { number: "04", title: "Réparation & test",      description: "La panne est résolue et l'installation entière est testée avant le départ du technicien." },
    ],
    faq: [
      { question: "Intervenez-vous vraiment la nuit et le week-end ?",    answer: "Oui, sans exception. Notre service d'urgence fonctionne 365 jours par an, 24h/24. Un technicien de permanence est toujours disponible — jamais de répondeur la nuit." },
      { question: "Quel est le tarif d'une urgence nocturne ?",           answer: "Les interventions de nuit (22h–7h) et le week-end comportent un supplément fixe. Nous vous communiquons le tarif exact avant de commencer. Aucun frais caché, aucune surprise à la facturation." },
      { question: "Que faire en cas d'odeur de brûlé ou d'étincelles ?", answer: "Coupez immédiatement le disjoncteur principal si possible et appelez-nous. Ne touchez pas aux fils. Évacuez les occupants si l'odeur persiste et appelez également les pompiers (100/112)." },
      { question: "Pouvez-vous venir pour un simple fusible sauté ?",     answer: "Absolument. Même une panne apparemment mineure peut cacher un problème sérieux. Nous intervenons pour tout type d'urgence électrique, quelle que soit son ampleur." },
      { question: "Le tarif nocturne est-il beaucoup plus élevé ?",       answer: "Le supplément nocturne est fixe et transparent — il est annoncé avant notre départ. Nous considérons qu'une urgence à 2h du matin mérite la même qualité d'intervention qu'en journée, à un tarif juste et connu." },
      { question: "Que faire si la panne touche tout le bâtiment ?",      answer: "Vérifiez d'abord le tableau général de l'immeuble si vous y avez accès. Si d'autres occupants sont également coupés, contactez votre gestionnaire de réseau (Sibelga à Bruxelles, Ores en Brabant Wallon, Fluvius en Flandre). Si le problème est interne à votre logement, appelez TF Technics." },
    ],
    seo: {
      title:       "Dépannage Électrique Urgence Bruxelles | < 60 min | TF Technics",
      description: "Électricien dépanneur d'urgence à Bruxelles, Brabant Wallon et Flamand. Intervention en moins de 60 min, 24h/24 – 7j/7. Assuré RC Pro. Appelez maintenant.",
    },
  },

  /* ── 2. INSTALLATION ÉLECTRIQUE ─────────────────────────────────────────── */
  {
    slug:    "installation-electrique",
    iconKey: "plugzap",
    badge:   "Maison & appartement",
    title:   "Installation électrique",
    heroTitle:    "Installation électrique\nprofessionnelle\net aux normes AREI.",
    heroSubtitle: "Tableau électrique, prises, éclairage, câblage complet — TF Technics conçoit et installe votre installation électrique de A à Z, en conformité totale avec la réglementation belge.",
    intro: "Une installation électrique bien conçue, c'est la sécurité de votre famille et la valeur de votre bien. TF Technics réalise tous types d'installations pour les particuliers, promoteurs et professionnels, du simple remplacement de tableau à l'installation complète d'une maison neuve.",
    problems: [
      { title: "Tableau électrique de plus de 25 ans",                 desc: "Les anciennes installations sont sous-dimensionnées pour les appareils modernes et non conformes AREI. Un remplacement s'impose." },
      { title: "Multiprises et rallonges permanentes partout",          desc: "Signe que votre installation manque de prises — et risque de surchauffe. La solution : des circuits et prises dédiés." },
      { title: "Rénovation en cours sans mise à jour électrique",       desc: "C'est le moment idéal pour revoir le câblage. Intégrer les travaux électriques à une rénovation divise les coûts." },
      { title: "Éclairage insuffisant ou installation non conforme",    desc: "Zones humides, spots encastrés, domotique — votre installation doit évoluer avec vos besoins." },
    ],
    benefits: [
      { title: "Tableau électrique moderne",   description: "Remplacement ou installation de tableaux avec disjoncteurs différentiels, protection contre les surtensions et parafoudre." },
      { title: "Prises & éclairage",           description: "Ajout, déplacement ou remplacement de prises, interrupteurs, spots encastrés, dalles LED et éclairage extérieur." },
      { title: "Câblage complet neuf",         description: "Câblage intégral pour constructions neuves ou rénovations lourdes, avec plans d'exécution fournis." },
      { title: "Rapport de conformité AREI",   description: "Après chaque installation, un rapport de conformité est remis pour votre assurance et la revente du bien." },
      { title: "Devis gratuit",                description: "Visite technique gratuite pour évaluer vos besoins et vous remettre un devis détaillé et transparent." },
      { title: "Garantie 2 ans",               description: "Toutes nos installations sont couvertes par une garantie pièces et main-d'œuvre de 2 ans." },
    ],
    pricing: {
      tagline: "Devis gratuit et détaillé — remis sous 24h",
      points: [
        "Visite technique gratuite et sans engagement",
        "Devis remis sous 24h avec descriptif complet des travaux",
        "Remplacement de tableau : à partir de 800 € selon la surface",
        "Ajout de prises ou circuits dédiés : devisé à la séance",
        "Garantie 2 ans pièces et main-d'œuvre sur toute installation",
      ],
    },
    steps: [
      { number: "01", title: "Visite technique",      description: "Un technicien évalue votre installation existante, vos besoins et vous propose un plan de travail." },
      { number: "02", title: "Devis détaillé",         description: "Réception d'un devis complet avec descriptif des travaux, matériaux et délais d'exécution." },
      { number: "03", title: "Réalisation",            description: "Nos électriciens réalisent les travaux proprement, dans les délais convenus." },
      { number: "04", title: "Rapport AREI & remise",  description: "Tests complets, remise du rapport de conformité et explication du fonctionnement." },
    ],
    faq: [
      { question: "Faut-il obligatoirement un rapport AREI ?",           answer: "Oui, en Belgique toute installation électrique doit être conforme à l'AREI et faire l'objet d'un contrôle par un organisme agréé indépendant. TF Technics réalise les travaux et vous accompagne dans cette démarche jusqu'au rapport officiel." },
      { question: "Combien de temps dure une installation complète ?",   answer: "Pour un appartement standard (60-80 m²), comptez 2 à 4 jours. Pour une maison ou un chantier plus important, le planning est établi lors de la visite technique gratuite." },
      { question: "Pouvez-vous intervenir en maison occupée ?",          answer: "Oui. Nous planifions les travaux par zones pour minimiser les coupures de courant et les désagréments. Nous protégeons également vos sols et mobiliers avant de commencer." },
      { question: "Quels matériaux utilisez-vous ?",                     answer: "Nous travaillons exclusivement avec des matériaux certifiés CE, des marques reconnues comme Hager, Schneider Electric et Legrand — gage de durabilité et de conformité." },
      { question: "Quelle est la différence entre un disjoncteur et un fusible ?", answer: "Un disjoncteur est réarmable : il se déclenche en cas de surcharge et se réenclenche à la main. Un fusible 'grille' et doit être remplacé. Les installations modernes utilisent uniquement des disjoncteurs différentiels, bien plus sûrs. Si votre tableau contient encore des fusibles, un remplacement est fortement recommandé." },
      { question: "Travaillez-vous le soir ou le week-end pour les professionnels ?", answer: "Oui. Pour les chantiers chez des professionnels ou des commerces, nous pouvons planifier les travaux en dehors des heures d'activité, y compris en soirée ou le week-end, selon votre contrainte opérationnelle." },
    ],
    seo: {
      title:       "Installation Électrique Bruxelles | Tableau, Prises, Éclairage | TF Technics",
      description: "Installation électrique complète à Bruxelles : tableau électrique, prises, câblage, éclairage. Conforme AREI, rapport de conformité inclus. Devis gratuit.",
    },
  },

  /* ── 3. BORNE DE RECHARGE ───────────────────────────────────────────────── */
  {
    slug:    "borne-recharge",
    iconKey: "battery",
    badge:   "Véhicules électriques",
    title:   "Borne de recharge",
    heroTitle:    "Installez votre borne\nde recharge à domicile\ndès aujourd'hui.",
    heroSubtitle: "Wallbox jusqu'à 22 kW, compatible toutes marques. TF Technics installe votre borne de recharge en une journée et vous accompagne pour les primes régionales.",
    intro: "Passer à l'électrique commence à la maison. Une wallbox bien installée vous permet de recharger votre véhicule jusqu'à 10× plus vite qu'une prise domestique standard. TF Technics vous accompagne de l'installation au dossier de primes régionales.",
    problems: [
      { title: "Recharge via prise domestique : 18h pour une charge complète", desc: "Une prise standard (2,3 kW) est 3 à 8× plus lente qu'une wallbox dédiée. Chaque nuit de recharge incomplète, c'est une journée de trajet compromise." },
      { title: "Primes disponibles mais démarches incompréhensibles",          desc: "Jusqu'à 40 % de remboursement à Bruxelles-Capitale — mais les dossiers régionaux découragent. TF Technics s'en occupe entièrement à votre place." },
      { title: "Appartement ou copropriété sans borne",                        desc: "La loi belge facilite l'installation en copropriété depuis 2021. TF Technics prend en charge la procédure auprès de votre syndic." },
      { title: "Tableau électrique peut-être insuffisant pour une wallbox",    desc: "Un audit préalable de votre installation est indispensable avant toute installation. TF Technics le réalise gratuitement." },
    ],
    benefits: [
      { title: "Jusqu'à 22 kW",              description: "Bornes monophasées (3,7–7,4 kW) ou triphasées (11–22 kW) selon votre véhicule et votre installation." },
      { title: "Technicien qualifié",         description: "Installation soignée et conforme aux normes AREI. Dossier de primes constitué et soumis par nos soins." },
      { title: "Primes & subsides",           description: "Nous gérons les démarches pour les primes Bruxelles Environnement, primes énergie Wallonie et Flandre à votre place." },
      { title: "Compatible toutes marques",   description: "Wallbox pour Tesla, Renault, Volkswagen, Kia, Hyundai, BMW, Peugeot, et tous autres véhicules électriques." },
      { title: "Installation en 1 journée",   description: "De la pose des gaines au test de charge final, nos techniciens finalisent tout en une seule visite." },
      { title: "Application de supervision",  description: "Gestion de vos recharges depuis votre smartphone : programmation, historique de consommation, tarifs heures creuses." },
    ],
    pricing: {
      tagline: "Primes régionales : jusqu'à 40 % du coût pris en charge",
      points: [
        "Audit de votre installation électrique : gratuit",
        "Prime Bruxelles Environnement : jusqu'à 40 % du coût total",
        "Primes énergie Wallonie et Flandre (VEKA) disponibles selon conditions",
        "Dossier de prime constitué et soumis entièrement par TF Technics",
        "Garantie 2 ans sur l'installation complète de la borne",
      ],
    },
    steps: [
      { number: "01", title: "Audit de votre installation", description: "Vérification de la capacité électrique disponible et choix de la borne adaptée à votre véhicule." },
      { number: "02", title: "Commande & planification",    description: "Sélection de la wallbox, commande du matériel et planification de l'installation à votre convenance." },
      { number: "03", title: "Installation complète",       description: "Pose des gaines, câblage, fixation de la wallbox, raccordement et configuration de l'application." },
      { number: "04", title: "Test & dossier de primes",   description: "Test de charge complet et remise du dossier pour demander vos primes régionales." },
    ],
    faq: [
      { question: "Quelle borne est compatible avec ma voiture ?",      answer: "Toutes nos bornes utilisent la norme Type 2 (standard européen imposé depuis 2019), compatible avec tous les véhicules électriques vendus en Belgique. Pour les Tesla avec port propriétaire, un adaptateur Type 2 est inclus de série avec le véhicule." },
      { question: "Quelles primes puis-je obtenir à Bruxelles ?",       answer: "En Région de Bruxelles-Capitale, vous pouvez obtenir une prime allant jusqu'à 40 % du coût d'installation via Bruxelles Environnement. TF Technics gère le dossier complet pour vous — de la demande jusqu'à l'obtention." },
      { question: "Puis-je installer une borne en appartement ?",       answer: "Oui, sous réserve de l'accord de la copropriété. La loi belge facilite ces démarches depuis 2021. TF Technics peut vous accompagner dans la procédure auprès de votre syndic." },
      { question: "Combien d'ampères dois-je avoir disponibles ?",      answer: "Pour une borne 7,4 kW monophasée, il faut au minimum un circuit dédié de 32 A. Pour du 22 kW triphasé, 3×32 A sont nécessaires. TF Technics le vérifie lors de l'audit gratuit." },
      { question: "Ma borne fonctionne-t-elle avec n'importe quel véhicule ?", answer: "Oui. Le connecteur Type 2 est le standard européen : il est compatible avec tous les modèles électriques vendus en Europe depuis 2019 (Renault, Volkswagen, Peugeot, Kia, BMW, Hyundai, Tesla via adaptateur, etc.)." },
      { question: "La borne s'arrête-t-elle en cas de coupure de courant ?", answer: "Oui, comme tout appareil électrique. Les bornes intelligentes (smart wallbox) mémorisent les programmations de charge et les reprennent automatiquement sans intervention manuelle dès le rétablissement du courant." },
    ],
    seo: {
      title:       "Installation Borne Recharge Bruxelles | Wallbox Véhicule Électrique | TF Technics",
      description: "Installation de bornes de recharge (wallbox) à Bruxelles. Jusqu'à 22 kW, accompagnement pour les primes régionales, installation en 1 journée. Devis gratuit.",
    },
  },

  /* ── 4. RÉNOVATION & MISE EN CONFORMITÉ ─────────────────────────────────── */
  {
    slug:    "renovation-conformite",
    iconKey: "wrench",
    badge:   "Normes AREI",
    title:   "Rénovation & mise en conformité",
    heroTitle:    "Mettez votre\ninstallation électrique\naux normes AREI.",
    heroSubtitle: "Vieille installation, câblage obsolète, tableau hors normes — TF Technics réalise la mise en conformité complète de votre installation électrique en toute sérénité.",
    intro: "En Belgique, toute installation électrique doit être conforme à l'AREI. Une installation non conforme peut invalider votre assurance habitation et bloquer la vente de votre bien. TF Technics vous guide et réalise les travaux nécessaires.",
    problems: [
      { title: "Vente bloquée à cause d'un rapport de non-conformité",     desc: "L'acheteur ou le notaire exige la mise en conformité avant signature. Chaque semaine perdue coûte." },
      { title: "Assurance qui refuse de couvrir un sinistre électrique",   desc: "Une installation non conforme invalide votre couverture. Protégez-vous avant le sinistre, pas après." },
      { title: "Installation de plus de 25 ans jamais contrôlée",          desc: "Câbles vieillissants, absence de terre, tableau hors normes — les risques s'accumulent en silence." },
      { title: "Travaux de rénovation qui révèlent des installations obsolètes", desc: "Fils aluminium, prises sans terre, tableaux à fusibles — profitez de la rénovation pour tout remettre à niveau." },
    ],
    benefits: [
      { title: "Diagnostic complet AREI",     description: "Inspection exhaustive de votre installation pour identifier tous les points de non-conformité." },
      { title: "Plan de travaux chiffré",      description: "Liste précise des travaux obligatoires et recommandés, avec priorités et budget détaillé." },
      { title: "Remplacement tableau",         description: "Modernisation du tableau électrique avec disjoncteurs différentiels et protection foudre si nécessaire." },
      { title: "Mise à la terre",              description: "Installation ou vérification de la mise à la terre, obligatoire dans toute installation moderne." },
      { title: "Rapport de conformité",        description: "Document officiel attestant la conformité de votre installation, requis pour assurance et vente." },
      { title: "Accompagnement contrôle",      description: "TF Technics vous accompagne lors du contrôle par l'organisme agréé et gère les éventuelles remarques." },
    ],
    pricing: {
      tagline: "Devis précis après diagnostic gratuit — aucune surprise",
      points: [
        "Diagnostic complet de l'installation : gratuit et sans engagement",
        "Remplacement tableau + mise à la terre : 1 500 € – 4 000 € selon surface",
        "Rénovation complète maison ancienne : 4 000 € – 12 000 € (indicatif)",
        "Chiffrage exact remis après visite technique — aucun forfait aveugle",
        "Accompagnement contrôle final par organisme agréé inclus dans le devis",
      ],
    },
    steps: [
      { number: "01", title: "Inspection complète",        description: "Visite technique approfondie de toute l'installation avec rapport écrit des non-conformités." },
      { number: "02", title: "Plan de remédiation",        description: "Proposition de travaux priorisés avec devis détaillé. Vous choisissez le rythme d'intervention." },
      { number: "03", title: "Travaux de mise en conformité", description: "Réalisation des travaux par nos techniciens qualifiés, dans les délais convenus." },
      { number: "04", title: "Contrôle & rapport AREI",   description: "Contrôle final par organisme agréé, remise du rapport de conformité officiel." },
    ],
    faq: [
      { question: "Quand ma maison doit-elle être conforme AREI ?",    answer: "Toute installation électrique doit être conforme à l'AREI. Si vous vendez votre bien, un contrôle est obligatoire avant la signature. En cas de non-conformité, l'acheteur dispose de 18 mois pour régulariser — mais cela impacte systématiquement le prix de vente." },
      { question: "Mon assurance peut-elle refuser d'indemniser ?",    answer: "Oui. En cas de sinistre électrique dans un logement non conforme, votre assureur peut refuser la couverture ou réduire drastiquement l'indemnisation. La conformité AREI est votre protection réelle." },
      { question: "Combien coûte une mise en conformité complète ?",   answer: "Le coût dépend de l'état initial de l'installation. TF Technics réalise le diagnostic gratuitement et vous remet un devis détaillé. Une mise à la terre + remplacement tableau oscille entre 1 500 € et 4 000 € selon la surface." },
      { question: "Puis-je rester dans ma maison pendant les travaux ?", answer: "Dans la plupart des cas, oui. Nous planifions les coupures de courant pour les minimiser et les effectuer aux moments les moins contraignants pour vous et votre famille." },
      { question: "Dois-je être présent lors du contrôle par l'organisme agréé ?", answer: "Votre présence n'est pas obligatoire mais recommandée. TF Technics peut vous représenter lors de la visite de contrôle et gérer les éventuelles remarques techniques de l'inspecteur. Vous recevez le rapport officiel directement." },
      { question: "La mise en conformité impacte-t-elle la valeur de mon bien ?",   answer: "Positivement, oui. Un bien avec une installation conforme se vend plus vite et sans décote. Les acheteurs et leurs banques sont de plus en plus attentifs à l'état électrique. Un rapport de conformité récent est un argument de vente concret." },
    ],
    seo: {
      title:       "Mise en Conformité Électrique AREI Bruxelles | TF Technics",
      description: "Mise en conformité électrique AREI à Bruxelles. Rénovation installation, remplacement tableau, rapport de conformité. Devis gratuit.",
    },
  },

  /* ── 5. DIAGNOSTIC ÉLECTRIQUE ───────────────────────────────────────────── */
  {
    slug:    "diagnostic-electrique",
    iconKey: "scan",
    badge:   "Rapport détaillé",
    title:   "Diagnostic électrique",
    heroTitle:    "Diagnostic complet\nde votre installation\nélectrique.",
    heroSubtitle: "Inspection professionnelle avec rapport technique détaillé — TF Technics analyse votre installation pour détecter tout risque avant qu'il ne devienne un problème.",
    intro: "Prévenir vaut mieux que guérir. Un diagnostic électrique régulier permet de détecter les anomalies avant qu'elles causent une panne, un incendie ou un accident. TF Technics utilise des instruments de mesure professionnels pour réaliser un état des lieux complet de votre installation.",
    problems: [
      { title: "Vous achetez un bien et ignorez l'état électrique",      desc: "Un diagnostic avant achat vous évite des mauvaises surprises post-signature — et potentiellement des milliers d'euros de travaux imprévus." },
      { title: "Pannes répétitives que vous n'arrivez pas à expliquer",  desc: "Disjoncteurs récurrents, lumières qui vacillent, prises chaudes — une inspection révèle la cause que l'œil nu ne voit pas." },
      { title: "Installation jamais vérifiée depuis plus de 10 ans",     desc: "Le vieillissement invisible des câbles et connexions est la première cause d'incendie domestique électrique en Belgique." },
      { title: "Assureur ou notaire demande un état électrique récent",  desc: "Notre rapport technique détaillé répond aux exigences des assureurs, agences immobilières et notaires." },
    ],
    benefits: [
      { title: "Rapport écrit détaillé",       description: "Compte-rendu complet avec photos, mesures et classement des anomalies par niveau de priorité." },
      { title: "Mesures professionnelles",     description: "Utilisation d'appareils de mesure certifiés : multimètre, testeur d'isolement, analyseur de réseau." },
      { title: "Détection précoce",            description: "Identification des connexions desserrées, câbles vieillissants, surcharges et risques d'incendie." },
      { title: "Conseil personnalisé",         description: "Recommandations priorisées selon l'urgence et le budget, sans obligation de confier les travaux à TF Technics." },
      { title: "Valeur ajoutée à la vente",    description: "Un diagnostic récent rassure les acquéreurs et peut accélérer la vente de votre bien." },
      { title: "Devis travaux si nécessaire",  description: "Si des interventions sont nécessaires, un devis est joint au rapport sans surcoût." },
    ],
    pricing: {
      tagline: "Rapport complet remis sous 48h — inclus dans le devis",
      points: [
        "Diagnostic appartement (jusqu'à 100 m²) : devis sur demande",
        "Diagnostic maison individuelle : devis selon surface et ancienneté",
        "Rapport écrit avec photos et classement des anomalies par priorité",
        "Si travaux nécessaires : devis joint au rapport, sans surcoût de diagnostic",
        "Durée sur place : 1h30 à 3h selon la surface — rapport remis sous 48h",
      ],
    },
    steps: [
      { number: "01", title: "Prise de rendez-vous",       description: "Planification d'une visite à votre convenance. Le diagnostic dure 1 à 3 heures selon la surface." },
      { number: "02", title: "Inspection sur site",        description: "Contrôle visuel et mesures instrumentées de l'ensemble de l'installation électrique." },
      { number: "03", title: "Analyse & rapport",          description: "Rédaction du rapport détaillé avec photos et classement des anomalies détectées." },
      { number: "04", title: "Restitution & conseils",     description: "Présentation du rapport, explication des points critiques et recommandations d'intervention." },
    ],
    faq: [
      { question: "À quelle fréquence faire un diagnostic électrique ?", answer: "Nous recommandons un diagnostic tous les 10 ans pour une installation existante, et systématiquement avant l'achat d'un bien immobilier ou après un sinistre électrique." },
      { question: "Le diagnostic est-il différent du contrôle AREI ?",   answer: "Oui. Le contrôle AREI est réalisé par un organisme agréé indépendant et produit un certificat officiel légalement reconnu. Notre diagnostic est une inspection technique approfondie qui prépare et complète ce contrôle." },
      { question: "Combien de temps dure un diagnostic ?",               answer: "Pour un appartement jusqu'à 100 m², comptez 1h30 à 2h. Pour une maison, 2h30 à 3h. Le rapport écrit vous est remis sous 48h ouvrables." },
      { question: "Êtes-vous objectifs si des travaux sont à faire ?",   answer: "Absolument. Nous vous remettons le rapport avec les anomalies constatées. Vous êtes libres de confier les travaux à qui vous souhaitez. Notre réputation repose sur l'intégrité de nos constats." },
      { question: "Le diagnostic engage-t-il TF Technics à faire les travaux ?", answer: "Non. Notre diagnostic est totalement indépendant des travaux. Vous recevez un rapport objectif et êtes entièrement libre pour la suite. Nous proposons un devis de travaux en option, jamais en obligation." },
      { question: "Quelle est la différence avec un contrôle AREI officiel ?",   answer: "Le contrôle AREI officiel est réalisé par des organismes agréés indépendants (Vinçotte, SOCABEL, Apave) et produit un certificat légalement reconnu pour la vente. Notre diagnostic approfondi prépare ce contrôle et révèle les anomalies à corriger avant la visite officielle." },
    ],
    seo: {
      title:       "Diagnostic Électrique Bruxelles | Inspection & Rapport Technique | TF Technics",
      description: "Diagnostic électrique complet à Bruxelles avec rapport détaillé. Détection des anomalies, mesures professionnelles, conseils personnalisés. Devis gratuit.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
