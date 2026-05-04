import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, Zap, CheckCircle2, AlertTriangle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Dépannage Électrique Urgent Bruxelles — Intervention 24h/24 en 60 min | TF Technics",
  description:
    "Électricien dépanneur disponible 24h/24 à Bruxelles. Intervention en moins de 60 minutes pour disjoncteur, court-circuit, panne de courant. Appelez le +32 483 48 04 96.",
  keywords:
    "dépannage électrique urgent bruxelles, électricien urgence nuit, disjoncteur saute bruxelles, panne courant bruxelles, électricien 24h bruxelles, dépanneur électrique rapide belgique",
  alternates: {
    canonical: "https://tftechnics.be/depannage-urgence",
  },
  openGraph: {
    title: "Dépannage Électrique Urgent Bruxelles — 24h/24 en 60 min",
    description:
      "TF Technics intervient pour tout dépannage électrique urgent à Bruxelles dans un délai maximum de 60 minutes. Disponible 24h/24 et 7j/7.",
    type: "website",
    locale: "fr_BE",
    url: "/depannage-urgence",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dépannage électrique d'urgence à Bruxelles",
  description:
    "Intervention en moins de 60 minutes pour tout dépannage électrique urgent à Bruxelles, en Brabant Wallon et en Flandre. Disponible 24 heures sur 24 et 7 jours sur 7 au +32 483 48 04 96.",
  provider: {
    "@type": "LocalBusiness",
    name: "TF Technics",
    telephone: "+32483480496",
    url: "https://tftechnics.be",
    areaServed: ["Bruxelles", "Brabant Wallon", "Brabant Flamand"],
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://tftechnics.be/depannage-urgence",
    servicePhone: "+32483480496",
    availableLanguage: ["fr", "nl"],
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: "Devis gratuit — tarifs transparents communiqués avant intervention",
    },
  },
};

const PANNES = [
  { icon: Zap,           label: "Disjoncteur ou différentiel qui saute" },
  { icon: AlertTriangle, label: "Panne de courant totale ou partielle" },
  { icon: Zap,           label: "Court-circuit" },
  { icon: AlertTriangle, label: "Odeur de brûlé ou câble chaud" },
  { icon: Zap,           label: "Tableau électrique hors service" },
  { icon: AlertTriangle, label: "Prises ou éclairage qui ne fonctionnent plus" },
];

const ZONES = [
  "Bruxelles-Ville", "Ixelles", "Etterbeek", "Schaerbeek", "Uccle",
  "Woluwe-Saint-Lambert", "Anderlecht", "Forest", "Saint-Gilles",
  "Waterloo", "Wavre", "Braine-l'Alleud", "La Hulpe",
  "Zaventem", "Tervuren", "Vilvoorde",
];

const FAQ_URGENCE = [
  {
    q: "Pourquoi mon disjoncteur différentiel saute-t-il quand il pleut ?",
    a: "Un différentiel qui déclenche à la pluie indique une infiltration d'humidité dans une boîte de dérivation extérieure ou un luminaire dont l'indice IP est insuffisant. L'humidité crée un courant de fuite supérieur au seuil de 30 mA. Solution : contrôle de l'étanchéité des appareils extérieurs (IP44 minimum, IP65 en zones exposées) et mesure du courant de fuite par circuit.",
  },
  {
    q: "Que faire si tout le courant est coupé dans la maison ?",
    a: "Vérifiez d'abord le disjoncteur général et les différentiels dans votre tableau électrique. Si tous les disjoncteurs sont en position ON mais qu'il n'y a pas de courant, le problème peut venir du réseau Sibelga/Fluvius — vérifiez si vos voisins sont aussi touchés. Si le problème est interne, appelez un électricien : forcer un disjoncteur déclenché peut être dangereux.",
  },
  {
    q: "Pourquoi mon compteur Fluvius tourne-t-il vite même quand tout est éteint ?",
    a: "Une consommation anormale en veille peut indiquer un appareil défectueux qui chauffe en continu, un courant de fuite dans le circuit dû à un câble endommagé, ou un défaut d'isolement. Un électricien identifie la source en 30 minutes avec un analyseur de réseau. Ne pas ignorer ce symptôme : un défaut d'isolement peut provoquer un incendie.",
  },
];

export default function DepannageUrgencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white">

        {/* ── Hero urgence ── */}
        <section className="bg-[#1a1a1a] text-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-5 sm:px-10">

            {/* Badge live */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f97316]" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/70">
                Disponible maintenant · 24h/24 · 7j/7
              </span>
            </div>

            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 max-w-3xl">
              Dépannage électrique urgent à Bruxelles —{" "}
              <span className="text-[#f97316]">intervention en 45 à 60 minutes</span>
            </h1>

            {/* Phrase d'engagement — texte plein pour les moteurs IA et la recherche vocale */}
            <p className="text-[1.05rem] leading-relaxed text-white/75 max-w-2xl mb-8">
              TF Technics intervient pour tout dépannage électrique urgent à Bruxelles et en
              Brabant Wallon dans un délai maximum de 60 minutes. Disponible 24 heures sur 24
              et 7 jours sur 7 au{" "}
              <a href="tel:+32483480496" className="font-bold text-[#f97316] hover:underline">
                +32 483 48 04 96
              </a>
              {" "}— y compris les week-ends et jours fériés belges.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+32483480496"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#f97316] text-white font-bold text-[16px] shadow-[0_4px_24px_rgba(249,115,22,0.5)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-300"
              >
                <Phone size={18} strokeWidth={2.5} />
                Appeler maintenant : +32 483 48 04 96
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white font-semibold text-[15px] hover:border-white/50 hover:bg-white/[0.06] transition-all duration-300"
              >
                Demander un devis gratuit
              </Link>
            </div>

            {/* Badges de confiance */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                { icon: Clock,   label: "Intervention < 60 min" },
                { icon: Shield,  label: "Assuré RC professionnelle" },
                { icon: MapPin,  label: "Bruxelles · Brabant Wallon · Flandre" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] ring-1 ring-white/[0.12] text-white/80 text-[12px] font-medium"
                >
                  <Icon size={11} strokeWidth={2.5} className="text-[#f97316]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Types de pannes traitées ── */}
        <section className="py-16 md:py-20 bg-[#fafafa] border-b border-[#f0f0f0]">
          <div className="max-w-5xl mx-auto px-5 sm:px-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-[#2b2b2b] mb-3">
              Pannes électriques traitées en urgence
            </h2>
            <p className="text-[#6b6b6b] mb-10 max-w-xl">
              Électricien agréé et assuré RC professionnelle — TF Technics prend en charge tous les dépannages
              électriques urgents à Bruxelles, en Flandre et en Brabant Wallon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PANNES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#f0f0f0] shadow-[0_1px_8px_rgba(43,43,43,0.04)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} strokeWidth={2} className="text-[#f97316]" />
                  </div>
                  <span className="text-[0.9rem] font-semibold text-[#2b2b2b]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process d'intervention ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-[#2b2b2b] mb-10">
              Comment se déroule un dépannage électrique d'urgence ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Vous appelez", desc: "Appelez le +32 483 48 04 96. Un technicien qualifié répond immédiatement, 24h/24 et 7j/7." },
                { step: "02", title: "Diagnostic téléphonique", desc: "En 5 minutes, nous évaluons la gravité de la panne et vous conseillons sur les gestes de sécurité immédiats." },
                { step: "03", title: "Intervention sur site", desc: "Arrivée en 45 à 60 minutes à Bruxelles et en Brabant Wallon avec l'outillage complet et les pièces courantes." },
                { step: "04", title: "Remise en service", desc: "Diagnostic précis, réparation durable et vérification complète de l'installation avant de partir." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0">
                    <span className="text-[12px] font-extrabold text-white">{step}</span>
                  </div>
                  <h3 className="font-bold text-[1rem] text-[#2b2b2b]">{title}</h3>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Zones d'intervention ── */}
        <section className="py-16 md:py-20 bg-[#fafafa] border-t border-[#f0f0f0]">
          <div className="max-w-5xl mx-auto px-5 sm:px-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-[#2b2b2b] mb-3">
              Dépannage électrique à Bruxelles et en Brabant Wallon
            </h2>
            <p className="text-[#6b6b6b] mb-8 max-w-xl">
              Électricien dépanneur disponible en moins de 60 minutes dans toutes ces communes :
            </p>
            <div className="flex flex-wrap gap-2">
              {ZONES.map((zone) => (
                <span
                  key={zone}
                  className="px-3 py-1.5 rounded-full bg-white border border-[#e8e8e8] text-[13px] font-medium text-[#3f3f3f]"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ technique urgence ── */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-[#2b2b2b] mb-10">
              Questions fréquentes sur le dépannage électrique d'urgence
            </h2>
            <div className="flex flex-col gap-6">
              {FAQ_URGENCE.map(({ q, a }) => (
                <div key={q} className="border-b border-[#f0f0f0] pb-6 last:border-0">
                  <h3 className="font-bold text-[1rem] text-[#2b2b2b] mb-2">{q}</h3>
                  <p className="text-[0.9rem] text-[#6b6b6b] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Garanties ── */}
        <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
          <div className="max-w-5xl mx-auto px-5 sm:px-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] mb-8">
              Pourquoi choisir TF Technics pour votre urgence électrique ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: CheckCircle2, title: "Agréé et assuré",      desc: "RC professionnelle — tous travaux conformes RGIE/AREI." },
                { icon: Clock,        title: "Délai garanti",         desc: "Intervention en 45 à 60 min à Bruxelles, 24h/24 et 7j/7." },
                { icon: Shield,       title: "Garantie 2 ans",        desc: "Pièces et main-d'œuvre garanties 2 ans sur tous nos travaux." },
                { icon: Zap,          title: "Devis gratuit",         desc: "Estimation claire et transparente avant toute intervention." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.05] ring-1 ring-white/[0.08]">
                  <Icon size={20} strokeWidth={2} className="text-[#f97316]" />
                  <p className="font-bold text-[0.95rem]">{title}</p>
                  <p className="text-[0.82rem] text-white/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA final */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="tel:+32483480496"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#f97316] text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-300"
              >
                <Phone size={16} strokeWidth={2.5} />
                +32 483 48 04 96 — Appeler maintenant
              </a>
              <Link
                href="/contact"
                className="text-[14px] font-semibold text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all duration-300"
              >
                Formulaire de contact →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
