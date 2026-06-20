import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { applications, siteMeta } from "../components/siteData";

export default function ApplicationsPage() {
  return (
    <>
      <SeoHead
        title="Applications fibre de carbone"
        description="Applications des plaques et tissus carbone: automobile, aeronautique, nautisme, industrie, sport, prototypage et sur mesure."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Applications"
          title="Des materiaux carbone pour les projets ou le poids compte."
          intro="Plaques rigides et tissus techniques pour fabriquer, renforcer, alleger, proteger ou prototyper avec un materiau hautes performances."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {applications.map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <article className="rounded-md bg-neutral-100 p-7 min-h-[12rem] flex items-end">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    {item}
                  </h2>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
