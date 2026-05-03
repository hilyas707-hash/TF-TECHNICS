import { notFound }    from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const BASE_URL = "https://tftechnics.be";

/* Pré-génère toutes les routes statiques au build */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/* Métadonnées dynamiques par service */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service introuvable | TF Technics" };

  return {
    title:       service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
    openGraph: {
      title:       service.seo.title,
      description: service.seo.description,
      type:        "website",
      locale:      "fr_BE",
      url:         `/services/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  /* ── JSON-LD Service + FAQPage ────────────────────────────────────────── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BASE_URL}/services/${slug}#service`,
        name: service.title,
        description: service.seo.description,
        url: `${BASE_URL}/services/${slug}`,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#business`,
          name: "TF Technics",
          telephone: "+32483480496",
          url: BASE_URL,
        },
        areaServed: [
          { "@type": "City", name: "Bruxelles" },
          { "@type": "AdministrativeArea", name: "Brabant Wallon" },
          { "@type": "AdministrativeArea", name: "Brabant Flamand" },
        ],
        serviceType: service.badge,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${BASE_URL}/services/${slug}#howto`,
        name: `Comment se déroule notre service : ${service.title}`,
        description: service.seo.description,
        step: service.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.description,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/services/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailPage service={service} />
    </>
  );
}
