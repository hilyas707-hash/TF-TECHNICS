export interface CommuneData {
  slug:        string;
  name:        string;
  region:      "bruxelles" | "brabant-wallon" | "flandre";
  postalCodes: string[];
  description: string;
  seoTitle:    string;
  seoDesc:     string;
  heroTitle:   string;
  intro:       string;
}

export const COMMUNES: CommuneData[] = [
  {
    slug:        "ixelles",
    name:        "Ixelles",
    region:      "bruxelles",
    postalCodes: ["1050"],
    description: "Ixelles (Elsene)",
    seoTitle:    "Électricien Ixelles | Dépannage Urgence 24h/24 | TF Technics",
    seoDesc:     "Électricien dépanneur à Ixelles — intervention en moins de 60 min, 24h/24. Assuré RC Pro, bornes de recharge, mise en conformité. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Ixelles",
    intro:       "TF Technics intervient à Ixelles et dans tout le quartier en moins de 60 minutes. Dépannage d'urgence, installation électrique, bornes de recharge et mise en conformité AREI pour les particuliers et professionnels d'Ixelles.",
  },
  {
    slug:        "etterbeek",
    name:        "Etterbeek",
    region:      "bruxelles",
    postalCodes: ["1040"],
    description: "Etterbeek",
    seoTitle:    "Électricien Etterbeek | Urgence 24h/24 – 7j/7 | TF Technics",
    seoDesc:     "Électricien à Etterbeek — dépannage rapide, installation électrique et bornes de recharge. Assuré RC Pro. Intervention < 60 min. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Etterbeek",
    intro:       "Vous cherchez un électricien de confiance à Etterbeek ? TF Technics intervient rapidement pour tous vos besoins électriques : urgence, installation, conformité AREI et wallbox pour véhicule électrique.",
  },
  {
    slug:        "schaerbeek",
    name:        "Schaerbeek",
    region:      "bruxelles",
    postalCodes: ["1030"],
    description: "Schaerbeek (Schaarbeek)",
    seoTitle:    "Électricien Schaerbeek | Dépannage Urgence | TF Technics",
    seoDesc:     "Électricien professionnel à Schaerbeek. Urgence 24h/24, installation, bornes de recharge. Intervention en moins de 60 min. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Schaerbeek",
    intro:       "TF Technics est votre électricien de proximité à Schaerbeek. Dépannage électrique d'urgence, remplacement de tableau, installation de prises et bornes de recharge pour votre véhicule électrique.",
  },
  {
    slug:        "uccle",
    name:        "Uccle",
    region:      "bruxelles",
    postalCodes: ["1180"],
    description: "Uccle (Ukkel)",
    seoTitle:    "Électricien Uccle | Urgence & Installation Électrique | TF Technics",
    seoDesc:     "Électricien à Uccle — dépannage urgence 24h/24, bornes de recharge, mise en conformité AREI. Assuré RC Pro. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Uccle",
    intro:       "Uccle et ses villas, appartements et bureaux méritent une installation électrique irréprochable. TF Technics intervient sur tout le territoire d'Uccle pour les urgences, les rénovations et les installations de bornes de recharge.",
  },
  {
    slug:        "woluwe-saint-lambert",
    name:        "Woluwe-Saint-Lambert",
    region:      "bruxelles",
    postalCodes: ["1200"],
    description: "Woluwe-Saint-Lambert (Sint-Lambrechts-Woluwe)",
    seoTitle:    "Électricien Woluwe-Saint-Lambert | TF Technics",
    seoDesc:     "Électricien dépanneur à Woluwe-Saint-Lambert. Urgence 24h/24, bornes recharge, conformité AREI. Intervention < 60 min. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Woluwe-Saint-Lambert",
    intro:       "TF Technics assure le dépannage électrique d'urgence et toutes les installations électriques à Woluwe-Saint-Lambert. Nous intervenons dans les maisons, appartements et bureaux de la commune.",
  },
  {
    slug:        "anderlecht",
    name:        "Anderlecht",
    region:      "bruxelles",
    postalCodes: ["1070"],
    description: "Anderlecht",
    seoTitle:    "Électricien Anderlecht | Dépannage & Installation | TF Technics",
    seoDesc:     "Électricien professionnel à Anderlecht. Dépannage urgence 24h/24, installation électrique, borne de recharge. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Anderlecht",
    intro:       "Pour vos urgences électriques à Anderlecht, TF Technics est disponible 24h/24. Nous réalisons également des installations complètes, des mises en conformité AREI et des wallbox pour véhicules électriques.",
  },
  {
    slug:        "wavre",
    name:        "Wavre",
    region:      "brabant-wallon",
    postalCodes: ["1300"],
    description: "Wavre",
    seoTitle:    "Électricien Wavre | Urgence & Borne Recharge Brabant Wallon | TF Technics",
    seoDesc:     "Électricien à Wavre et Brabant Wallon. Dépannage urgence, installation borne de recharge, conformité AREI. Intervention rapide. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Wavre",
    intro:       "TF Technics couvre Wavre et tout le Brabant Wallon pour vos besoins électriques. Dépannage d'urgence, installation de bornes de recharge wallbox et mise en conformité AREI pour la vente de votre bien.",
  },
  {
    slug:        "waterloo",
    name:        "Waterloo",
    region:      "brabant-wallon",
    postalCodes: ["1410"],
    description: "Waterloo",
    seoTitle:    "Électricien Waterloo | Borne Recharge & Urgence | TF Technics",
    seoDesc:     "Électricien à Waterloo — dépannage urgence, borne de recharge wallbox, mise en conformité AREI. Assuré RC Pro. Devis gratuit.",
    heroTitle:   "Électricien dépanneur\nà Waterloo",
    intro:       "À Waterloo, TF Technics intervient pour tous vos travaux électriques : urgences, installations complètes, bornes de recharge pour véhicules électriques et mise aux normes AREI avant vente.",
  },
  {
    slug:        "zaventem",
    name:        "Zaventem",
    region:      "flandre",
    postalCodes: ["1930"],
    description: "Zaventem",
    seoTitle:    "Electricien Zaventem | Spoed & Laadpaal | TF Technics",
    seoDesc:     "Elektricien te Zaventem — spoedinterventies, laadpaal installatie, AREI-conformiteit. Verzekerd BA Pro. Gratis offerte.",
    heroTitle:   "Électricien dépanneur\nà Zaventem",
    intro:       "TF Technics intervient à Zaventem et dans le Brabant Flamand pour vos urgences électriques, l'installation de bornes de recharge et la mise en conformité AREI.",
  },
  {
    slug:        "vilvoorde",
    name:        "Vilvoorde",
    region:      "flandre",
    postalCodes: ["1800"],
    description: "Vilvoorde (Vilvorde)",
    seoTitle:    "Electricien Vilvoorde | Spoed 24u/24 | TF Technics",
    seoDesc:     "Elektricien te Vilvoorde — spoedpannes, laadpaalinstallatie, AREI-conformiteit. Erkend. Gratis offerte.",
    heroTitle:   "Électricien dépanneur\nà Vilvoorde",
    intro:       "TF Technics couvre Vilvoorde et ses environs. Dépannage électrique rapide, installation de wallbox pour véhicules électriques et mise aux normes AREI pour les particuliers et professionnels.",
  },
];

export function getCommuneBySlug(slug: string): CommuneData | undefined {
  return COMMUNES.find((c) => c.slug === slug);
}

export function getAllCommuneSlugs(): string[] {
  return COMMUNES.map((c) => c.slug);
}
