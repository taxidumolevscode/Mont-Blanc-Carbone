import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { faqContent, siteMeta } from "../components/siteData";

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SeoHead
        title="FAQ plaques carbone"
        description="Questions frequentes sur les plaques carbone, tissus carbone, epaisseurs, usages, devis et zones autour de Bonneville."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteLayout>
        <PageHero
          eyebrow="FAQ"
          title="Les reponses utiles avant de commander du carbone."
          intro="Une FAQ courte et directe pour choisir une plaque carbone, un tissu technique ou demander un devis."
          image={siteMeta.heroImage}
        />

        <section className="px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            {faqContent.map((item, index) => (
              <FadeIn key={item.question} delay={index * 0.05}>
                <article className="border-t border-white/10 py-8">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                    {item.question}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                    {item.answer}
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
