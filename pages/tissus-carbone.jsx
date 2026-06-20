import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const uses = [
  "Stratification et moulage composite",
  "Renfort de pieces existantes",
  "Reparation technique",
  "Fabrication de pieces legeres",
  "Finition carbone visible",
  "Projets atelier, prototype ou serie courte",
];

export default function TissusCarbonePage() {
  return (
    <>
      <SeoHead
        title="Tissus en fibre de carbone"
        description="Tissus carbone techniques pour stratification, moulage, renfort, reparation et fabrication composite sur mesure."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Tissus carbone techniques"
          title="Tissus en fibre de carbone pour stratification et fabrication."
          intro="Des tissus selectionnes pour realiser des pieces composites legeres, rigides et adaptees aux contraintes de votre projet."
          image={siteMeta.heroImage}
        />

        <section className="px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <FadeIn>
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                  Pour pieces composites et renforts
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Le tissu carbone permet de travailler la fibre selon la forme, le moule et le niveau de renfort recherche. Il convient aux ateliers, fabricants, artisans et particuliers avertis qui veulent une solution technique plutot qu&apos;un simple aspect decoratif.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {uses.map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-white/5 p-6 min-h-[9rem]">
                    <p className="text-lg font-bold uppercase tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
