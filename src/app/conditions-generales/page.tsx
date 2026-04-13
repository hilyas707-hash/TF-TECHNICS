import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales | TF Technics",
  description: "Conditions générales de vente et de service de TF Technics.",
  robots: "noindex",
};

export default function ConditionsGeneralesPage() {
  return (
    <LegalPage
      title="Conditions générales"
      subtitle="Conditions générales de vente et de prestation de services de TF Technics SRL."
      lastUpdated="Janvier 2025"
      sections={[
        {
          title: "Objet",
          content:
            "Les présentes conditions générales régissent l'ensemble des prestations de services proposées par TF Technics SRL (ci-après « l'Entreprise ») à ses clients particuliers et professionnels. Toute commande de prestation implique l'acceptation pleine et entière des présentes conditions.",
        },
        {
          title: "Prestations proposées",
          content: [
            "Dépannage électrique d'urgence (24h/24 – 7j/7)",
            "Installation de bornes de recharge pour véhicules électriques (wallbox)",
            "Mise en conformité RGIE/AREI d'installations électriques avec rapport officiel",
            "Installation et rénovation d'installations électriques",
            "Diagnostic électrique avec rapport détaillé",
          ],
        },
        {
          title: "Devis et commande",
          content:
            "Tout devis établi par TF Technics SRL est gratuit et valable 30 jours à compter de sa date d'émission. La commande est ferme et définitive à la signature du devis par le client. TF Technics SRL se réserve le droit de refuser toute commande pour des motifs légitimes.",
        },
        {
          title: "Tarifs et modalités de paiement",
          content:
            "Les tarifs sont communiqués sur devis. Ils sont exprimés en euros TTC (TVA belge applicable). Sauf accord contraire :\n• Acompte de 30 % à la commande pour les travaux supérieurs à 500 €.\n• Solde payable à réception de la facture, dans un délai de 14 jours.\nTout retard de paiement entraîne de plein droit et sans mise en demeure une indemnité forfaitaire de 40 € et des intérêts de retard au taux légal.",
        },
        {
          title: "Garantie",
          content:
            "TF Technics SRL garantit ses prestations contre tout vice de mise en œuvre pendant une durée de 2 ans à compter de la réception des travaux. Cette garantie ne couvre pas les dommages résultant d'une mauvaise utilisation, d'une modification non autorisée ou d'un cas de force majeure.",
        },
        {
          title: "Responsabilité",
          content:
            "TF Technics SRL est assurée en responsabilité civile professionnelle. La responsabilité de l'Entreprise ne saurait être engagée pour des dommages indirects, immatériels ou consécutifs. En tout état de cause, la responsabilité de TF Technics SRL est limitée au montant de la prestation concernée.",
        },
        {
          title: "Annulation et résiliation",
          content:
            "En cas d'annulation par le client après signature du devis, l'acompte versé reste acquis à TF Technics SRL à titre d'indemnité forfaitaire. TF Technics SRL se réserve le droit de résilier un contrat en cas de force majeure, d'impossibilité technique ou de manquement grave du client à ses obligations.",
        },
        {
          title: "Protection des données",
          content:
            "Le traitement des données personnelles collectées dans le cadre des présentes est détaillé dans notre Politique de confidentialité consultable sur ce site.",
        },
        {
          title: "Droit applicable et litiges",
          content:
            "Les présentes conditions sont soumises au droit belge. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux de Bruxelles seront seuls compétents.",
        },
      ]}
    />
  );
}
