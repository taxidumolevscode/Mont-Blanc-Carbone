import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import { siteMeta } from "../components/siteData";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SeoHead
        title="Politique de confidentialite"
        description="Politique de confidentialite du site Mont Blanc Carbone."
      />
      <SiteLayout>
        <section className="px-4 md:px-10 pt-36 pb-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-6">
            Politique de confidentialite
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Donnees et contact
          </h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Les donnees transmises via appel, email ou formulaire sont utilisees uniquement pour repondre aux demandes de devis, de prix, de disponibilite ou de renseignement technique.
            </p>
            <p>
              Aucune donnee n&apos;est vendue ni cedee a des tiers hors obligation legale ou besoin strict de traitement de la demande.
            </p>
            <p>
              Vous pouvez demander la suppression ou la rectification de vos informations en ecrivant a {siteMeta.email}.
            </p>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
