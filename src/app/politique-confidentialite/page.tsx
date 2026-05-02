import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité | TF Technics",
  description: "Politique de confidentialité et de protection des données personnelles (RGPD) de TF Technics.",
  robots: "noindex",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      subtitle="Traitement de vos données personnelles — conforme au Règlement Général sur la Protection des Données (RGPD / UE 2016/679)."
      lastUpdated="Janvier 2025"
      sections={[
        {
          title: "Responsable du traitement",
          content:
            "TF Technics SRL\nBCE : BE1037.492.402\nSiège social : Avenue Reine Astrid 49, Boîte 1780, 1780 Wemmel, Belgique\nContact : info@tftechnics.be",
        },
        {
          title: "Données collectées",
          content: [
            "Données d'identification : nom, prénom, numéro de téléphone, adresse e-mail.",
            "Données de localisation : adresse d'intervention (uniquement pour la réalisation du service demandé).",
            "Données de navigation : adresse IP, pages visitées, durée de session (via cookies techniques).",
            "Données de communication : contenu des messages envoyés via le formulaire de contact.",
          ],
        },
        {
          title: "Finalités et bases légales",
          content: [
            "Exécution du contrat : traitement des demandes de devis et réalisation des interventions.",
            "Intérêt légitime : amélioration de nos services, communication sur nos offres (opt-out possible).",
            "Obligation légale : conservation des factures conformément au Code des sociétés belge.",
            "Consentement : cookies non essentiels et communications marketing (révocable à tout moment).",
          ],
        },
        {
          title: "Durée de conservation",
          content: [
            "Données clients : 7 ans à compter de la fin de la relation contractuelle (obligation comptable).",
            "Données de prospection : 3 ans à compter du dernier contact.",
            "Données de navigation (cookies) : 13 mois maximum.",
            "Données de formulaire : 1 an si aucune suite contractuelle.",
          ],
        },
        {
          title: "Destinataires des données",
          content:
            "Vos données sont destinées exclusivement à TF Technics SRL. Elles peuvent être transmises à :\n• Nos sous-traitants techniques (hébergeur Vercel Inc. — DPA conforme au RGPD, serveurs en UE).\n• Les autorités légales, sur réquisition judiciaire.\nVos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.",
        },
        {
          title: "Vos droits (RGPD)",
          content: [
            "Droit d'accès : obtenir une copie de vos données.",
            "Droit de rectification : corriger des données inexactes.",
            "Droit à l'effacement (« droit à l'oubli ») : demander la suppression de vos données.",
            "Droit à la limitation du traitement.",
            "Droit à la portabilité : recevoir vos données dans un format structuré.",
            "Droit d'opposition : vous opposer au traitement basé sur l'intérêt légitime.",
            "Droit de retirer votre consentement à tout moment, sans effet rétroactif.",
          ],
        },
        {
          title: "Exercice de vos droits",
          content:
            "Pour exercer vos droits, contactez-nous par e-mail : info@tftechnics.be\nNous répondrons dans un délai maximum de 30 jours.\nVous avez également le droit d'introduire une réclamation auprès de l'Autorité de Protection des Données (APD) belge : www.autoriteprotectiondonnees.be",
        },
        {
          title: "Sécurité des données",
          content:
            "TF Technics SRL met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, altération ou destruction. Ces mesures comprennent le chiffrement HTTPS, l'accès restreint aux données et la sauvegarde régulière.",
        },
        {
          title: "Modifications",
          content:
            "TF Technics SRL se réserve le droit de modifier la présente politique à tout moment. La version en vigueur est celle affichée sur ce site à la date de votre consultation.",
        },
      ]}
    />
  );
}
