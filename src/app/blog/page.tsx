import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { ARTICLES } from "@/data/articles";
import BlogListPage from "@/components/blog/BlogListPage";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title:       "Blog Électricité Bruxelles | Conseils & Guides | TF Technics",
  description: "Conseils d'électricien agréé AREI : guides sur les pannes, la conformité RGIE, les primes bornes de recharge et la sécurité électrique en Belgique.",
  openGraph: {
    title:       "Blog Électricité | TF Technics Bruxelles",
    description: "Conseils pratiques, guides AREI et primes bornes de recharge par TF Technics, électricien agréé à Bruxelles.",
    type:        "website",
    locale:      "fr_BE",
  },
  alternates: {
    canonical: "https://mon-super-site-mu.vercel.app/blog",
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
