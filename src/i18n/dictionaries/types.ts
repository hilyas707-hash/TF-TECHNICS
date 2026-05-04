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
    tarifs: string;
    blog: string;
    devis: string;
    faq: string;
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
    commitment: string;
    statsZone: string;
    floatingDelay: string;
    floatingWarranty: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      depannage:    { title: string; description: string };
      borne:        { title: string; description: string };
      renovation:   { title: string; description: string };
      installation: { title: string; description: string };
      diagnostic:   { title: string; description: string };
    };
    learnMore: string;
    bridgeText: string;
    bridgeCta: string;
  };
  trust: {
    sectionTitle: string;
    stats: {
      interventions: { value: string; label: string };
      experience:    { value: string; label: string };
      satisfaction:  { value: string; label: string };
      response:      { value: string; label: string };
    };
    reviewsTitle: string;
    description: string;
    testimonialsLabel: string;
    reassurance: string;
    bridgeText: string;
    bridgeCta: string;
    reviews: Array<{
      name: string;
      location: string;
      date: string;
      rating: number;
      text: string;
      avatar: string;
    }>;
  };
  zones: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    regions: {
      bruxelles:     { name: string; cities: string[] };
      brabantWallon: { name: string; cities: string[] };
      flamand:       { name: string; cities: string[] };
    };
    communes: string;
    notListed: string;
    contactUs: string;
    weConsider: string;
    bridgeText: string;
    bridgeCta: string;
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
    extraBenefits: string[];
    badgePower: string;
    badgeCharge: string;
    badgeInstall: string;
    badgeDuration: string;
    bridgeText: string;
    bridgeCta: string;
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    callCta: string;
    bridgeText: string;
    bridgeCta: string;
    filterAll: string;
    filterDepannage: string;
    filterBorne: string;
    filterRgie: string;
    filterInstallation: string;
    filterGeneral: string;
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
    availableBadge: string;
    contactLabel: string;
    phoneLabel: string;
    emailLabel: string;
    availLabel: string;
    sending: string;
    error: string;
    placeholderMessage: string;
  };
  footer: {
    tagline: string;
    rights: string;
    legal: string;
    privacy: string;
    description: string;
    callNow: string;
    insurance: string;
    cookies: string;
    servicesLabel: string;
    services: {
      depannage: string;
      borne: string;
      renovation: string;
      installation: string;
      diagnostic: string;
    };
  };
}
