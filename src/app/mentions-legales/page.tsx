import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales | TF Technics",
  description: "Mentions légales du site TF Technics — électricien dépanneur à Bruxelles.",
  robots: "noindex",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      subtitle="Informations légales obligatoires relatives à l'éditeur et à l'hébergeur du site."
      lastUpdated="Janvier 2025"
      sections={[
        {
          title: "Éditeur du site",
          content:
            "TF Technics SRL\nNuméro d'entreprise (BCE) : BE 0XXX.XXX.XXX\nSiège social : Rue de l'Électricité XX, 1000 Bruxelles, Belgique\nTéléphone : +32 XXX XX XX XX\nE-mail : info@electricien-bruxelles.be",
        },
        {
          title: "Directeur de la publication",
          content:
            "Le directeur de la publication est le gérant de TF Technics SRL.",
        },
        {
          title: "Hébergement",
          content:
            "Ce site est hébergé par Vercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, États-Unis\nSite web : https://vercel.com",
        },
        {
          title: "Propriété intellectuelle",
          content:
            "L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive de TF Technics SRL, sauf mention contraire.\nToute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord écrit préalable de TF Technics SRL.",
        },
        {
          title: "Responsabilité",
          content:
            "TF Technics SRL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, TF Technics SRL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.\nTF Technics SRL se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site.",
        },
        {
          title: "Liens hypertextes",
          content:
            "Ce site peut contenir des liens vers d'autres sites internet. TF Technics SRL n'est pas responsable du contenu des sites externes vers lesquels des liens sont proposés.",
        },
        {
          title: "Droit applicable",
          content:
            "Les présentes mentions légales sont régies par le droit belge. Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux de Bruxelles.",
        },
      ]}
    />
  );
}
