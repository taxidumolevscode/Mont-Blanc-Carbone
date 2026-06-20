import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { localAreas, siteMeta } from "../components/siteData";

export default function ZonesDesserviesPage() {
  return (
    <>
      <SeoHead
        title="Plaques carbone Bonneville Geneve"
        description="Plaques carbone et tissus carbone a Bonneville, Cluses, Sallanches, Annecy, Geneve et en Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Zones locales"
          title="Plaques carbone a Bonneville, Haute-Savoie et Geneve."
          intro="Mont Blanc Carbone repond aux demandes locales pour plaques et tissus carbone autour de Bonneville, Cluses, Sallanches, Annecy et Geneve."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {localAreas.map((area, index) => (
              <FadeIn key={area} delay={index * 0.04}>
                <article className="rounded-md bg-neutral-100 p-8 min-h-[12rem]">
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
                    {area}
                  </h2>
                  <p className="text-neutral-700 leading-relaxed">
                    Demande de plaques en fibre de carbone, tissus carbone et conseil technique pour projets professionnels ou sur mesure.
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
