/* ─────────────────────────────────────────────────────────────────────────────
   Données de contenu pour les 6 pages de services TF Technics
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

export interface ServiceData {
  slug:         string;
  iconKey:      "zap" | "plugzap" | "battery" | "wrench" | "scan";
  badge:        string;
  title:        string;
  heroTitle:    string;
  heroSubtitle: string;
  image:        string;
  imageAlt:     string;
  intro:        string;
  benefits:     ServiceBenefit[];
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
    image:    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Électricien TF Technics en intervention d'urgence sur tableau électrique à Bruxelles",
    intro:    "Une urgence électrique ne se planifie pas. Que ce soit une panne totale de courant, un fusible qui saute en boucle ou une odeur de brûlé, chaque minute compte. TF Technics garantit une intervention rapide, sécurisée et conforme à l'AREI.",
    benefits: [
      { title: "Intervention < 60 min",     description: "Nos techniciens sont positionnés stratégiquement pour couvrir Bruxelles et ses environs en moins d'une heure." },
      { title: "Disponible 24h/24 – 7j/7",  description: "Weekends, nuits, jours fériés inclus. Une ligne d'urgence dédiée, réponse immédiate garantie." },
      { title: "Diagnostic inclus",          description: "Nous identifions l'origine exacte de la panne avant toute intervention, sans frais de diagnostic cachés." },
      { title: "Matériel embarqué",          description: "Nos camionnettes sont équipées du matériel courant pour résoudre 95 % des pannes en une seule visite." },
      { title: "Assuré RC professionnelle",   description: "Couverture RC professionnelle complète. Chaque intervention respecte le Règlement Général sur les Installations Électriques (AREI)." },
      { title: "Devis transparent",          description: "Tarif communiqué avant intervention. Pas de mauvaise surprise sur la facture." },
    ],
    steps: [
      { number: "01", title: "Appelez-nous",          description: "Décrivez brièvement la panne. Un technicien qualifié prend l'appel immédiatement, 24h/24." },
      { number: "02", title: "Départ immédiat",        description: "Le technicien le plus proche est dispatché sur place. Vous recevez une estimation d'arrivée." },
      { number: "03", title: "Diagnostic sur site",    description: "Inspection complète de l'installation pour identifier l'origine exacte du problème." },
      { number: "04", title: "Réparation & test",      description: "La panne est résolue et l'installation entière est testée avant le départ du technicien." },
    ],
    faq: [
      { question: "Intervenez-vous vraiment la nuit et le week-end ?",  answer: "Oui, sans exception. Notre service d'urgence fonctionne 365 jours par an, 24h/24. Un technicien de permanence est toujours disponible." },
      { question: "Quel est le tarif d'une urgence nocturne ?",         answer: "Les interventions de nuit (22h–7h) et le week-end comportent un supplément. Nous vous communiquons le tarif exact avant de commencer. Aucuns frais cachés." },
      { question: "Que faire en cas d'odeur de brûlé ou d'étincelles ?", answer: "Coupez immédiatement le disjoncteur principal si possible, et appelez-nous. Ne touchez pas aux fils. Evacuez si l'odeur persiste et appelez également les pompiers (100)." },
      { question: "Pouvez-vous venir pour un simple fusible ?",          answer: "Absolument. Même une panne apparemment mineure peut cacher un problème sérieux. Nous intervenons pour tout type d'urgence électrique, quelle que soit son ampleur." },
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
    image:    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Installation du tableau électrique par TF Technics pour une maison à Bruxelles",
    intro:    "Une installation électrique bien conçue, c'est la sécurité de votre famille et la valeur de votre bien. TF Technics réalise tous types d'installations pour les particuliers, promoteurs et professionnels, du simple remplacement de tableau à l'installation complète d'une maison neuve.",
    benefits: [
      { title: "Tableau électrique modern",   description: "Remplacement ou installation de tableaux avec disjoncteurs différentiels, protection contre les surtensions et parafoudre." },
      { title: "Prises & éclairage",          description: "Ajout, déplacement ou remplacement de prises, interrupteurs, spots encastrés, dalles LED et éclairage extérieur." },
      { title: "Câblage complet neuf",        description: "Câblage intégral pour constructions neuves ou rénovations lourdes, avec plans d'exécution fournis." },
      { title: "Rapport de conformité AREI",  description: "Après chaque installation, un rapport de conformité est remis pour votre assurance et la revente du bien." },
      { title: "Devis gratuit",               description: "Visite technique gratuite pour évaluer vos besoins et vous remettre un devis détaillé et transparent." },
      { title: "Garantie 2 ans",              description: "Toutes nos installations sont couvertes par une garantie pièces et main-d'œuvre de 2 ans." },
    ],
    steps: [
      { number: "01", title: "Visite technique",      description: "Un technicien évalue votre installation existante, vos besoins et vous propose un plan de travail." },
      { number: "02", title: "Devis détaillé",         description: "Réception d'un devis complet avec descriptif des travaux, matériaux et délais d'exécution." },
      { number: "03", title: "Réalisation",            description: "Nos électriciens réalisent les travaux proprement, dans les délais convenus." },
      { number: "04", title: "Rapport AREI & remise",  description: "Tests complets, remise du rapport de conformité et explication du fonctionnement." },
    ],
    faq: [
      { question: "Faut-il obligatoirement un rapport AREI ?",           answer: "Oui, en Belgique toute installation électrique doit être conforme à l'AREI et faire l'objet d'un contrôle par un organisme agréé. TF Technics vous accompagne dans cette démarche." },
      { question: "Combien de temps dure une installation complète ?",   answer: "Pour un appartement standard (60-80 m²), comptez 2 à 4 jours. Pour une maison ou un chantier plus important, le planning est établi lors de la visite technique." },
      { question: "Pouvez-vous intervenir en maison occupée ?",          answer: "Oui. Nous planifions les travaux par zones pour minimiser les coupures de courant et les désagréments. Nous protégeons également vos sols et mobiliers." },
      { question: "Quels matériaux utilisez-vous ?",                     answer: "Nous travaillons exclusivement avec des matériaux certifiés CE, des marques reconnues comme Hager, Schneider Electric et Legrand." },
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
    image:    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Borne de recharge wallbox installée par TF Technics pour véhicule électrique à Bruxelles",
    intro:    "Passer à l'électrique commence à la maison. Une wallbox bien installée vous permet de recharger votre véhicule jusqu'à 10× plus vite qu'une prise domestique standard. TF Technics vous accompagne de l'installation au dossier de primes régionales.",
    benefits: [
      { title: "Jusqu'à 22 kW",              description: "Bornes monophasées (3,7–7,4 kW) ou triphasées (11–22 kW) selon votre véhicule et votre installation." },
      { title: "Technicien qualifié",          description: "Installation soignée et conforme aux normes AREI. Dossier de primes constitué et soumis par nos soins." },
      { title: "Primes & subsides",           description: "Nous gérons les démarches pour les primes Bruxelles Environnement, primes énergie Wallonie et Flandre à votre place." },
      { title: "Compatible toutes marques",   description: "Wallbox pour Tesla, Renault, Volkswagen, Kia, Hyundai, BMW, Peugeot, et tous autres véhicules électriques." },
      { title: "Installation en 1 journée",   description: "De la pose des gaines au test de charge final, nos techniciens finalisent tout en une seule visite." },
      { title: "Application de supervision",  description: "Gestion de vos recharges depuis votre smartphone : programmation, historique de consommation, tarifs." },
    ],
    steps: [
      { number: "01", title: "Audit de votre installation", description: "Vérification de la capacité électrique disponible et choix de la borne adaptée à votre véhicule." },
      { number: "02", title: "Commande & planification",    description: "Sélection de la wallbox, commande du matériel certifié et planification de l'installation." },
      { number: "03", title: "Installation complète",       description: "Pose des gaines, câblage, fixation de la wallbox, raccordement et configuration de l'application." },
      { number: "04", title: "Test & dossier de primes",   description: "Test de charge complet et remise du dossier pour demander vos primes régionales." },
    ],
    faq: [
      { question: "Quelle borne est compatible avec ma voiture ?",      answer: "Toutes nos bornes utilisent la norme Type 2 (standard européen), compatible avec tous les véhicules électriques vendus en Belgique. Pour les Tesla, nous installons également l'adaptateur dédié." },
      { question: "Quelles primes puis-je obtenir à Bruxelles ?",       answer: "En Région de Bruxelles-Capitale, vous pouvez obtenir une prime allant jusqu'à 40 % du coût d'installation via Bruxelles Environnement. Nous gérons le dossier complet pour vous." },
      { question: "Puis-je installer une borne en appartement ?",       answer: "Oui, sous réserve de l'accord de la copropriété. La loi belge facilite ces démarches depuis 2021. TF Technics peut vous accompagner dans la procédure auprès de votre syndic." },
      { question: "Combien d'ampères dois-je avoir disponibles ?",      answer: "Pour une borne 7,4 kW monophasée, il faut au minimum un circuit dédié de 32 A. Pour du 22 kW triphasé, 3×32 A sont nécessaires. Nous le vérifions lors de l'audit gratuit." },
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
    image:    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Rénovation et mise en conformité d'une installation électrique par TF Technics à Bruxelles",
    intro:    "En Belgique, toute installation électrique doit être conforme à l'AREI (Règlement Général sur les Installations Électriques). Une installation non conforme peut invalider votre assurance habitation et bloquer la vente de votre bien. TF Technics vous guide et réalise les travaux nécessaires.",
    benefits: [
      { title: "Diagnostic complet AREI",     description: "Inspection exhaustive de votre installation pour identifier tous les points de non-conformité." },
      { title: "Plan de travaux chiffré",      description: "Liste précise des travaux obligatoires et recommandés, avec priorités et budget détaillé." },
      { title: "Remplacement tableau",         description: "Modernisation du tableau électrique avec disjoncteurs différentiels et protection foudre si nécessaire." },
      { title: "Mise à la terre",              description: "Installation ou vérification de la mise à la terre, obligatoire dans toute installation moderne." },
      { title: "Rapport de conformité",        description: "Document officiel attestant la conformité de votre installation, requis pour assurance et vente." },
      { title: "Accompagnement contrôle",      description: "TF Technics vous accompagne lors du contrôle par l'organisme agréé et gère les éventuelles remarques." },
    ],
    steps: [
      { number: "01", title: "Inspection complète",        description: "Visite technique approfondie de toute l'installation avec rapport écrit des non-conformités." },
      { number: "02", title: "Plan de remédiation",        description: "Proposition de travaux priorisés avec devis détaillé. Vous choisissez le rythme d'intervention." },
      { number: "03", title: "Travaux de mise en conformité", description: "Réalisation des travaux par nos électriciens certifiés, dans les délais convenus." },
      { number: "04", title: "Contrôle & rapport AREI",   description: "Contrôle final par organisme agréé, remise du rapport de conformité officiel." },
    ],
    faq: [
      { question: "Quand ma maison doit-elle être conforme AREI ?",    answer: "Toute installation électrique doit être conforme à l'AREI. Si vous vendez votre bien, un contrôle est obligatoire. En cas de non-conformité, vous avez 18 mois pour régulariser après la vente." },
      { question: "Mon assurance peut-elle refuser d'indemniser ?",    answer: "Oui. En cas de sinistre électrique dans un logement non conforme, votre assureur peut refuser la couverture ou réduire l'indemnisation. La conformité protège votre couverture." },
      { question: "Combien coûte une mise en conformité complète ?",   answer: "Le coût dépend de l'état initial de l'installation. Après diagnostic, nous vous remettons un devis détaillé. Une mise à la terre + remplacement tableau oscille entre 1 500 € et 4 000 € selon la surface." },
      { question: "Puis-je rester dans ma maison pendant les travaux ?", answer: "Dans la plupart des cas, oui. Nous planifions les coupures de courant pour les minimiser et les effectuer aux moments les moins contraignants pour vous." },
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
    image:    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Diagnostic électrique réalisé par TF Technics avec appareils de mesure à Bruxelles",
    intro:    "Prévenir vaut mieux que guérir. Un diagnostic électrique régulier permet de détecter les anomalies avant qu'elles causent une panne, un incendie ou un accident. TF Technics utilise des instruments de mesure professionnels pour réaliser un état des lieux complet de votre installation.",
    benefits: [
      { title: "Rapport écrit détaillé",       description: "Compte-rendu complet avec photos, mesures et classement des anomalies par niveau de priorité." },
      { title: "Mesures professionnelles",     description: "Utilisation d'appareils de mesure certifiés : multimètre, testeur d'isolement, analyseur de réseau." },
      { title: "Détection précoce",            description: "Identification des connexions desserrées, câbles vieillissants, surcharges et risques d'incendie." },
      { title: "Conseil personnalisé",         description: "Recommandations priorisées selon l'urgence et le budget, sans obligation de confier les travaux à TF Technics." },
      { title: "Valeur ajoutée à la vente",    description: "Un diagnostic récent rassure les acquéreurs et peut accélérer la vente de votre bien." },
      { title: "Devis travaux si nécessaire",  description: "Si des interventions sont nécessaires, un devis est joint au rapport sans surcoût." },
    ],
    steps: [
      { number: "01", title: "Prise de rendez-vous",       description: "Planification d'une visite à votre convenance. Le diagnostic dure 1 à 3 heures selon la surface." },
      { number: "02", title: "Inspection sur site",        description: "Contrôle visuel et mesures instrumentées de l'ensemble de l'installation électrique." },
      { number: "03", title: "Analyse & rapport",          description: "Rédaction du rapport détaillé avec photos et classement des anomalies détectées." },
      { number: "04", title: "Restitution & conseils",     description: "Présentation du rapport, explication des points critiques et recommandations d'intervention." },
    ],
    faq: [
      { question: "À quelle fréquence faire un diagnostic électrique ?", answer: "Nous recommandons un diagnostic tous les 10 ans pour une installation existante, et systématiquement avant l'achat d'un bien immobilier ou après un sinistre." },
      { question: "Le diagnostic est-il différent du contrôle AREI ?",   answer: "Oui. Le contrôle AREI est réalisé par un organisme agréé indépendant et produit un certificat officiel. Notre diagnostic est une inspection technique approfondie qui prépare et complète ce contrôle." },
      { question: "Combien de temps dure un diagnostic ?",               answer: "Pour un appartement jusqu'à 100 m², comptez 1h30 à 2h. Pour une maison, 2h30 à 3h. Le rapport écrit vous est remis sous 48h." },
      { question: "Êtes-vous objectifs si des travaux sont à faire ?",   answer: "Absolument. Nous vous remettons le rapport avec les anomalies constatées. Vous êtes libres de confier les travaux à qui vous souhaitez. Notre réputation repose sur notre intégrité." },
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
