import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

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
    openGraph: {
      title:       service.seo.title,
      description: service.seo.description,
      type:        "website",
      locale:      "fr_BE",
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
