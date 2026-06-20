import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import { siteMeta } from "../components/siteData";

export default function MentionsLegalesPage() {
  return (
    <>
      <SeoHead
        title="Mentions Legales"
        description="Mentions legales du site Mont Blanc Carbone."
      />
      <SiteLayout>
        <section className="px-4 md:px-10 pt-36 pb-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-6">
            Mentions Legales
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Informations du site
          </h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>Editeur du site : {siteMeta.brand}.</p>
            <p>Telephone : {siteMeta.phoneDisplay}.</p>
            <p>Email : {siteMeta.email}.</p>
            <p>Adresse / zone d&apos;activite : {siteMeta.address}.</p>
            <p>
              Les informations publiees presentent l&apos;activite de vente de plaques en fibre de carbone, tissus en fibre de carbone et conseil technique associe.
            </p>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
