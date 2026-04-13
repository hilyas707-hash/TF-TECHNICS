import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies | TF Technics",
  description: "Politique de cookies du site TF Technics — quels cookies nous utilisons et comment les gérer.",
  robots: "noindex",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique de cookies"
      subtitle="Informations sur les cookies utilisés par ce site et sur la manière de les gérer."
      lastUpdated="Janvier 2025"
      sections={[
        {
          title: "Qu'est-ce qu'un cookie ?",
          content:
            "Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur un site web. Il permet au site de mémoriser vos actions et préférences (langue, identifiant de session, etc.) pendant une durée déterminée.",
        },
        {
          title: "Cookies strictement nécessaires",
          content: [
            "Cookie de session : maintient votre session active le temps de votre visite. Durée : session.",
            "Cookie de préférences de langue : mémorise la langue choisie (FR/NL). Durée : 12 mois.",
            "Cookie de consentement aux cookies (ce bandeau). Durée : 12 mois.",
          ],
        },
        {
          title: "Cookies analytiques (avec consentement)",
          content: [
            "Google Analytics 4 (si activé) : mesure d'audience anonymisée — pages visitées, durée, source de trafic. Durée : 13 mois. Les données sont traitées conformément à la DPA signée avec Google.",
            "Aucune donnée personnelle identifiable n'est transmise à des fins analytiques.",
          ],
        },
        {
          title: "Cookies publicitaires (avec consentement)",
          content: [
            "Google Ads : suivi des conversions issues de nos campagnes Google Ads, afin d'en mesurer l'efficacité. Durée : 90 jours.",
            "Aucun cookie de reciblage (retargeting) tiers n'est utilisé sans votre consentement explicite.",
          ],
        },
        {
          title: "Cookies tiers",
          content:
            "Ce site peut intégrer des ressources tierces (polices Google Fonts, cartes) qui déposent leurs propres cookies. TF Technics n'a pas de contrôle direct sur ces cookies. Nous vous invitons à consulter les politiques de confidentialité des fournisseurs concernés.",
        },
        {
          title: "Gestion de vos préférences",
          content: [
            "Via notre bandeau de consentement : au premier chargement du site, vous pouvez accepter ou refuser les cookies non essentiels.",
            "Via votre navigateur : vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies (paramètres → confidentialité). Attention : le blocage de cookies essentiels peut altérer le fonctionnement du site.",
            "Via les outils tiers : Google Analytics Opt-out (https://tools.google.com/dlpage/gaoptout).",
          ],
        },
        {
          title: "Durée de conservation",
          content:
            "Les cookies déposés par TF Technics ont une durée maximale de 13 mois, conformément aux recommandations de l'Autorité de Protection des Données (APD) belge. À l'expiration, un nouveau consentement vous sera demandé.",
        },
        {
          title: "Base légale",
          content:
            "Le dépôt de cookies essentiels repose sur l'intérêt légitime (art. 6.1.f RGPD). Le dépôt de cookies analytiques et publicitaires repose sur votre consentement préalable (art. 6.1.a RGPD), conformément à la loi belge du 13 juin 2005 relative aux communications électroniques.",
        },
        {
          title: "Contact",
          content:
            "Pour toute question relative à notre utilisation des cookies : info@electricien-bruxelles.be\nAutorité de Protection des Données (APD) : www.autoriteprotectiondonnees.be",
        },
      ]}
    />
  );
}
