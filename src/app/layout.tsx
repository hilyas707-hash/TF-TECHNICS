import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/cookies/CookieBanner";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

/* ── Police premium — Plus Jakarta Sans (autorisée par le skill high-end-visual-design) ── */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Électricien Dépanneur à Bruxelles | Urgence 24h/24 – 7j/7 | TF Technics",
  description:
    "TF Technics — électricien agréé AREI : dépannage urgence Bruxelles en moins de 60 min, bornes de recharge Flandre et Brabant Wallon, mise en conformité RGIE. Devis gratuit.",
  keywords:
    "électricien bruxelles, dépannage électrique urgent bruxelles, urgence électricien 24h, borne recharge voiture électrique bruxelles, borne recharge flandre, borne recharge brabant wallon, mise en conformité RGIE brabant wallon, électricien agréé AREI belgique, dépannage électrique flandre, électricien urgence brabant wallon",
  openGraph: {
    type:     "website",
    locale:   "fr_BE",
    siteName: "TF Technics — Électricien Dépanneur",
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
        {children}
        {/* Bandeau RGPD — présent sur toutes les pages */}
        <CookieBanner />
        {/* Bouton WhatsApp flottant — présent sur toutes les pages */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
