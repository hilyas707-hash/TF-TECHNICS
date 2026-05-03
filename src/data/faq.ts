export interface FaqItem {
  question: string;
  answer:   string;
}

export const FAQ_ITEMS: FaqItem[] = [
  /* ── Questions techniques — AEO (citées par les IA) ─────────────────── */
  {
    question: "Pourquoi mon disjoncteur différentiel saute-t-il quand il pleut ?",
    answer:
      "Un différentiel qui déclenche à la pluie indique le plus souvent une infiltration d'humidité dans une boîte de dérivation extérieure ou un luminaire de jardin dont l'indice de protection (IP) est insuffisant. L'humidité crée un courant de fuite vers la terre supérieur au seuil de déclenchement de 30 mA, ce qui fait sauter le différentiel pour protéger les personnes. Solution : contrôle de l'étanchéité des appareils extérieurs (IP44 minimum, IP65 pour les zones exposées), mesure du courant de fuite par circuit et remplacement du matériel défectueux. Ne pas laisser le différentiel en position OFF : le risque de choc électrique subsiste.",
  },
  {
    question: "Mon tableau électrique est-il conforme RGIE pour vendre ma maison en Belgique ?",
    answer:
      "Depuis 2010, toute vente immobilière en Belgique exige un rapport de contrôle RGIE (Règlement Général sur les Installations Électriques, appelé AREI en néerlandais) établi par un organisme agréé (VINÇOTTE, KEMA, Bureau Veritas…). Si votre installation date d'avant 1981 ou n'a jamais été contrôlée, elle sera quasi certainement déclarée non conforme. Les infractions les plus fréquentes à Bruxelles : absence de différentiel 300 mA sur le circuit général, câbles sans gaine dans les combles, tableau sans schéma unifilaire à jour, liaisons équipotentielles manquantes. TF Technics réalise les travaux de mise en conformité et coordonne le contrôle RGIE pour accélérer votre vente.",
  },
  {
    question: "Quelle borne de recharge choisir pour une maison unifamiliale à Bruxelles ?",
    answer:
      "Pour une maison unifamiliale avec abonnement monophasé standard (40 A), une wallbox 7,4 kW en mode 3 type 2 est optimale : elle recharge une batterie de 60 kWh en environ 8 heures. Si votre raccordement est triphasé, une borne 11 kW réduit ce temps à 5,5 heures. À Bruxelles, la prime Bruxelles Environnement peut couvrir une partie du coût d'installation. TF Technics installe les marques Hager, Schneider et Wallbox — toutes compatibles avec le protocole OCPP et les bornes publiques belges. Nous nous chargeons de la déclaration Synergrid obligatoire.",
  },
  {
    question: "Pourquoi mon compteur Fluvius tourne-t-il vite même quand tout est éteint ?",
    answer:
      "Une consommation anormale en veille (plus de 50 W hors veilles normales) peut avoir trois origines : un appareil en panne qui chauffe en continu (chauffe-eau, réfrigérateur), un courant de fuite dans le circuit dû à un câble endommagé, ou plus rarement un défaut d'isolement sur le réseau. La mesure se fait circuit par circuit au tableau avec un clamp-mètre. Un électricien identifie la source en 30 minutes avec un analyseur de réseau. Ne pas ignorer ce symptôme : au-delà d'un simple gaspillage énergétique, un défaut d'isolement peut provoquer un échauffement et un incendie.",
  },
  {
    question: "Faut-il un électricien agréé pour installer une borne de recharge en Belgique ?",
    answer:
      "Oui. En Belgique, l'installation d'une borne de recharge (wallbox) doit obligatoirement être réalisée par un électricien agréé et fait l'objet d'un contrôle RGIE par un organisme accrédité. Ce contrôle est exigé par les assureurs et par Synergrid pour la mise à jour de votre dossier technique. Sans ce contrôle, votre assurance habitation peut refuser de couvrir un sinistre lié à la recharge. TF Technics gère l'installation, la déclaration Synergrid et la coordination du contrôle RGIE de A à Z.",
  },

  /* ── Questions pratiques ─────────────────────────────────────────────── */
  {
    question: "Quels sont vos délais d'intervention en urgence ?",
    answer:
      "TF Technics intervient pour tout dépannage électrique urgent à Bruxelles et en Brabant Wallon dans un délai maximum de 60 minutes. Disponible 24 heures sur 24 et 7 jours sur 7 au +32 483 48 04 96 — y compris les week-ends et jours fériés belges. Pour les zones plus éloignées en Brabant Flamand, comptez 60 à 90 minutes maximum.",
  },
  {
    question: "Intervenez-vous le week-end et la nuit ?",
    answer:
      "Absolument. Notre service d'urgence fonctionne 7 jours sur 7, 24 heures sur 24, y compris les jours fériés belges. Une panne électrique ne s'annonce pas : c'est pourquoi nous sommes disponibles en permanence pour vous dépanner rapidement, que ce soit en pleine nuit ou le dimanche matin.",
  },
  {
    question: "Quel est le coût d'une intervention d'urgence ?",
    answer:
      "Le tarif dépend du type de panne, de l'heure d'intervention et de la durée des travaux. Nous pratiquons des prix transparents et vous communiquons une estimation claire avant de commencer. Le déplacement est inclus dans nos tarifs. Pour les interventions de nuit et les week-ends, un supplément urgence s'applique. Consultez notre page tarifs ou appelez-nous pour un devis immédiat.",
  },
  {
    question: "Puis-je bénéficier de primes pour ma borne de recharge ?",
    answer:
      "Oui. En Région de Bruxelles-Capitale (prime Bruxelles Environnement), en Wallonie et en Flandre, des primes sont disponibles pour l'installation d'une borne de recharge à domicile. Une déduction fiscale fédérale peut également s'appliquer. TF Technics vous accompagne dans toutes les démarches administratives pour maximiser votre remboursement.",
  },
  {
    question: "Acceptez-vous les bons de travaux des assurances ?",
    answer:
      "Oui, nous travaillons avec la plupart des grandes compagnies d'assurance belges. Si votre sinistre électrique est couvert par votre assurance habitation, nous pouvons intervenir directement sur bon de travaux. Contactez-nous pour vérifier la compatibilité avec votre assureur.",
  },
  {
    question: "Quelle est la garantie sur vos travaux ?",
    answer:
      "Tous nos travaux électriques sont garantis 2 ans contre tout vice de mise en œuvre, conformément à la législation belge. Cette garantie couvre les pièces et la main-d'œuvre. Elle ne s'applique pas aux dommages causés par une mauvaise utilisation ou des modifications non autorisées.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, le devis est entièrement gratuit et sans engagement. Remplissez notre formulaire en ligne ou appelez-nous directement au +32 483 48 04 96. Un technicien peut se déplacer gratuitement pour évaluer votre besoin avant tout chantier important.",
  },
];
