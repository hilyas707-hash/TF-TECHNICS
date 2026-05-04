import { notFound }    from "next/navigation";
import type { Metadata } from "next";
import { getAllServiceSlugs } from "@/data/services";
import { getServiceBySlugNl } from "@/data/services-nl";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const BASE_URL = "https://tftechnics.be";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlugNl(slug);
  if (!service) return { title: "Dienst niet gevonden | TF Technics" };

  return {
    title:       service.seo.title,
    description: service.seo.description,
    alternates: {
      canonical: `${BASE_URL}/nl/services/${slug}`,
      languages: { fr: `/services/${slug}`, nl: `/nl/services/${slug}` },
    },
    openGraph: {
      title:       service.seo.title,
      description: service.seo.description,
      type:        "website",
      locale:      "nl_BE",
      url:         `/nl/services/${slug}`,
    },
  };
}

export default async function NlServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlugNl(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${BASE_URL}/nl/services/${slug}#service`,
        name: service.title,
        description: service.seo.description,
        url: `${BASE_URL}/nl/services/${slug}`,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#business`,
          name: "TF Technics",
          telephone: "+32483480496",
          url: BASE_URL,
        },
        areaServed: [
          { "@type": "City", name: "Brussel" },
          { "@type": "AdministrativeArea", name: "Waals-Brabant" },
          { "@type": "AdministrativeArea", name: "Vlaams-Brabant" },
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
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startpagina", item: `${BASE_URL}/nl` },
          { "@type": "ListItem", position: 2, name: "Diensten",    item: `${BASE_URL}/nl/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${BASE_URL}/nl/services/${slug}` },
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
      <ServiceDetailPage service={service} locale="nl" />
    </>
  );
}
