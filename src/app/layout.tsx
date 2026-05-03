import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import CookieBanner from "@/components/cookies/CookieBanner";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";

const GA_ID = "G-PXZWN1GEG0";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tftechnics.be"),
  title: "TF Technics | Électricien Dépanneur Bruxelles – Urgence 24h/24",
  description:
    "TF Technics — électricien professionnel : dépannage urgence Bruxelles en moins de 60 min, bornes de recharge Flandre et Brabant Wallon, mise en conformité RGIE. Devis gratuit.",
  keywords:
    "électricien bruxelles, dépannage électrique urgent bruxelles, urgence électricien 24h, borne recharge voiture électrique bruxelles, borne recharge flandre, borne recharge brabant wallon, mise en conformité RGIE brabant wallon, dépannage électrique flandre, électricien urgence brabant wallon",
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "512x512" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: { url: "/icon", type: "image/png" },
    apple:    { url: "/icon", type: "image/png", sizes: "512x512" },
  },
  openGraph: {
    type:         "website",
    locale:       "fr_BE",
    siteName:     "TF Technics",
    title:        "TF Technics | Électricien Dépanneur Bruxelles – Urgence 24h/24",
    description: "TF Technics — électricien professionnel : dépannage urgence Bruxelles en moins de 60 min, bornes de recharge, mise en conformité RGIE. Devis gratuit.",
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <GoogleTagManager gtmId="GTM-5GSLL4S5" />
      <GoogleAnalytics gaId={GA_ID} />

      <body className="min-h-full bg-white text-[#2b2b2b]">
        <ScrollToTop />
        <ScrollProgress />
        {children}
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}