import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { ARTICLES } from "@/data/articles";
import BlogListPage from "@/components/blog/BlogListPage";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title:       "Blog Électricité Bruxelles | Conseils & Guides | TF Technics",
  description: "Guides sur les pannes électriques, la conformité RGIE, les primes bornes de recharge et la sécurité électrique en Belgique. Par TF Technics, Bruxelles.",
  openGraph: {
    title:       "Blog Électricité | TF Technics Bruxelles",
    description: "Guides pratiques, conformité AREI et primes bornes de recharge par TF Technics, électricien professionnel à Bruxelles.",
    type:        "website",
    locale:      "fr_BE",
  },
  alternates: {
    canonical: "https://tftechnics.be/blog",
  },
};

export default async function BlogPage() {
  const dict = await getDictionary("fr");
  return (
    <>
      <BlogListPage articles={ARTICLES} />
      <Footer dict={dict} />
    </>
  );
}
