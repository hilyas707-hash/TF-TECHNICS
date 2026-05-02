import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/cookies/CookieBanner";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/* ── Police premium — Plus Jakarta Sans (autorisée par le skill high-end-visual-design) ── */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tftechnics.be"),
  title: "Électricien Dépanneur à Bruxelles | Urgence 24h/24 – 7j/7 | TF Technics",
  description:
    "TF Technics — électricien professionnel : dépannage urgence Bruxelles en moins de 60 min, bornes de recharge Flandre et Brabant Wallon, mise en conformité RGIE. Devis gratuit.",
  keywords:
    "électricien bruxelles, dépannage électrique urgent bruxelles, urgence électricien 24h, borne recharge voiture électrique bruxelles, borne recharge flandre, borne recharge brabant wallon, mise en conformité RGIE brabant wallon, dépannage électrique flandre, électricien urgence brabant wallon",
  openGraph: {
    type:     "website",
    locale:   "fr_BE",
    siteName: "TF Technics — Électricien Dépanneur",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
  },
  alternates: {
    languages: {
      fr: "/",
      nl: "/nl",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#2b2b2b]">
        {/* Google Analytics 4 — chargé uniquement si NEXT_PUBLIC_GA_ID est défini */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        <ScrollToTop />
        <ScrollProgress />
        {children}
        {/* Bandeau RGPD — présent sur toutes les pages */}
        <CookieBanner />
        {/* Bouton WhatsApp flottant — présent sur toutes les pages */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
