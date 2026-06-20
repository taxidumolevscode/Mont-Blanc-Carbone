import SeoHead from '../components/layout/SeoHead';
import SiteLayout from '../components/layout/SiteLayout';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ApproachSection from '../components/sections/ApproachSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ContactSection from '../components/sections/ContactSection';
import DeepLinksSection from '../components/sections/DeepLinksSection';
import { faqContent, siteMeta } from '../components/siteData';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.slice(0, 5).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteMeta.brand,
    telephone: siteMeta.phoneDisplay,
    email: siteMeta.email,
    url: siteMeta.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bonneville",
      postalCode: "74130",
      addressRegion: "Haute-Savoie",
      addressCountry: "FR",
    },
    areaServed: [
      "Bonneville",
      "Cluses",
      "Sallanches",
      "Annecy",
      "Genève",
      "Haute-Savoie",
      "Vallée de l'Arve",
    ],
    makesOffer: [
      "Plaques en fibre de carbone 600 x 600 mm",
      "Tissus en fibre de carbone",
      "Conseil technique composite",
    ],
  };

  return (
    <>
      <SeoHead
        title="Plaques carbone et tissus carbone"
        description="Plaques en fibre de carbone 600 x 600 mm de 1 a 7 mm et tissus carbone techniques a Bonneville, Haute-Savoie."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteLayout>
        <HeroSection />
        <IntroSection />
        <PortfolioSection />
        <ApproachSection />
        <PricingSection />
        <TestimonialSection />
        <DeepLinksSection />
        <ContactSection />
      </SiteLayout>
    </>
  );
}
