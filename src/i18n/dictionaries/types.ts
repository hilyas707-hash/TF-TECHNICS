/**
 * Contrat de type partagé entre tous les dictionnaires de langues.
 * Chaque langue doit implémenter exactement cette structure.
 */
export interface Dictionary {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string;
  };
  nav: {
    services: string;
    zones: string;
    bornes: string;
    urgence: string;
    contact: string;
    callNow: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    phone: string;
    trust: {
      certified: string;
      available: string;
      speed: string;
    };
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      depannage:   { title: string; description: string };
      borne:       { title: string; description: string };
      renovation:  { title: string; description: string };
      installation:{ title: string; description: string };
      diagnostic:  { title: string; description: string };
    };
  };
  zones: {
    sectionTitle: string;
    sectionSubtitle: string;
    regions: {
      bruxelles:    { name: string; cities: string[] };
      brabantWallon:{ name: string; cities: string[] };
      flamand:      { name: string; cities: string[] };
    };
  };
  bornes: {
    sectionTitle: string;
    sectionSubtitle: string;
    ctaInstall: string;
    features: {
      certified: string;
      subsidy: string;
      speed: string;
    };
  };
  trust: {
    sectionTitle: string;
    stats: {
      interventions: { value: string; label: string };
      experience:    { value: string; label: string };
      satisfaction:  { value: string; label: string };
      response:      { value: string; label: string };
    };
  };
  contact: {
    sectionTitle: string;
    urgencyTitle: string;
    urgencySubtitle: string;
    phone: string;
    email: string;
    hours: string;
    formName: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
  footer: {
    tagline: string;
    rights: string;
    legal: string;
    privacy: string;
  };
}
