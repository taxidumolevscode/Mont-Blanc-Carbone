import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta, thicknesses } from "../components/siteData";

export default function PlaquesCarbonePage() {
  return (
    <>
      <SeoHead
        title="Plaques carbone 1 a 7 mm"
        description="Plaques en fibre de carbone 600 x 600 mm de 1 mm a 7 mm pour industrie, automobile, nautisme, aeronautique et fabrication."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Plaques carbone 600 x 600 mm"
          title="Plaques en fibre de carbone rigides de 1 mm a 7 mm."
          intro="Une gamme claire pour choisir la bonne epaisseur selon la rigidite, le poids, la finition et les contraintes de votre projet."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  Choisir l&apos;epaisseur
                </h2>
              </FadeIn>
              <FadeIn delay={0.08} className="lg:col-span-2">
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                  Une plaque carbone ne se choisit pas seulement au millimetre. Il faut tenir compte de la portee, des points de fixation, du type d&apos;effort, de la finition visible et de l&apos;environnement d&apos;utilisation. Mont Blanc Carbone vous aide a cadrer ce choix avant commande.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {thicknesses.map((item, index) => (
                <FadeIn key={item.value} delay={index * 0.04}>
                  <article className="rounded-md border border-neutral-200 bg-neutral-50 p-6 min-h-[13rem]">
                    <h3 className="text-4xl font-black uppercase tracking-tight mb-6">
                      {item.value}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">{item.use}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
