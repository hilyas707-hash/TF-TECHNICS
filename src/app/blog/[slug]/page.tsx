import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/articles";
import { getDictionary } from "@/i18n";
import BlogPostPage from "@/components/blog/BlogPostPage";
import Footer from "@/components/layout/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title:       article.seoTitle,
    description: article.seoDesc,
    openGraph: {
      title:       article.seoTitle,
      description: article.seoDesc,
      type:        "article",
      locale:      "fr_BE",
      publishedTime: article.date,
    },
    alternates: {
      canonical: `https://mon-super-site-mu.vercel.app/blog/${article.slug}`,
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const dict = await getDictionary("fr");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "TF Technics",
      url: "https://mon-super-site-mu.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "TF Technics",
      logo: {
        "@type": "ImageObject",
        url: "https://mon-super-site-mu.vercel.app/opengraph-image",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mon-super-site-mu.vercel.app/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostPage article={article} />
      <Footer dict={dict} />
    </>
  );
}
