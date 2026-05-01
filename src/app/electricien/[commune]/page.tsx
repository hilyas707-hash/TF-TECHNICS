import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCommuneBySlug, getAllCommuneSlugs } from "@/data/communes";
import CommunePage from "@/components/communes/CommunePage";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/i18n";

export function generateStaticParams() {
  return getAllCommuneSlugs().map((commune) => ({ commune }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ commune: string }> }
): Promise<Metadata> {
  const { commune: slug } = await params;
  const commune = getCommuneBySlug(slug);
  if (!commune) return { title: "Commune introuvable | TF Technics" };

  const BASE_URL = "https://mon-super-site-mu.vercel.app";

  return {
    title:       commune.seoTitle,
    description: commune.seoDesc,
    openGraph: {
      title:       commune.seoTitle,
      description: commune.seoDesc,
      type:        "website",
      locale:      commune.region === "flandre" ? "nl_BE" : "fr_BE",
      url:         `${BASE_URL}/electricien/${slug}`,
    },
    alternates: {
      canonical: `${BASE_URL}/electricien/${slug}`,
    },
  };
}

export default async function ElectricienCommunePage(
  { params }: { params: Promise<{ commune: string }> }
) {
  const { commune: slug } = await params;
  const commune = getCommuneBySlug(slug);
  if (!commune) notFound();

  const dict = await getDictionary("fr");

  /* ── JSON-LD LocalBusiness hyperlocal ── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type":    ["LocalBusiness", "Electrician"],
    "@id":      `https://mon-super-site-mu.vercel.app/electricien/${slug}#business`,
    name:       "TF Technics",
    description: commune.intro,
    url:         `https://mon-super-site-mu.vercel.app/electricien/${slug}`,
    telephone:   "+32XXXXXXXXX",
    areaServed:  [
      { "@type": "City", name: commune.name },
      ...commune.postalCodes.map((pc) => ({
        "@type": "PostalAddress",
        postalCode: pc,
        addressCountry: "BE",
      })),
    ],
    openingHoursSpecification: {
      "@type":     "OpeningHoursSpecification",
      dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens:       "00:00",
      closes:      "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CommunePage commune={commune} />
      <Footer dict={dict} />
    </>
  );
}
