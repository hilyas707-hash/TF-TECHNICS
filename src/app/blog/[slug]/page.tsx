import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES, DEFAULT_AUTHOR } from "@/data/articles";
import { getDictionary } from "@/i18n";
import BlogPostPage from "@/components/blog/BlogPostPage";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

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
      canonical: `https://tftechnics.be/blog/${article.slug}`,
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
      "@type": "Person",
      name: (article.author ?? DEFAULT_AUTHOR).name,
      jobTitle: (article.author ?? DEFAULT_AUTHOR).jobTitle,
      description: (article.author ?? DEFAULT_AUTHOR).description,
      url: (article.author ?? DEFAULT_AUTHOR).url,
      worksFor: {
        "@type": "Organization",
        name: "TF Technics",
        url: "https://tftechnics.be",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "TF Technics",
      logo: {
        "@type": "ImageObject",
        url: "https://tftechnics.be/opengraph-image",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tftechnics.be/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <BlogPostPage article={article} />
      <Footer dict={dict} />
    </>
  );
}
