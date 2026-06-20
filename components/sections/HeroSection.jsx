import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import AnimatedText from "../animations/AnimatedText";
import { homeContent, siteMeta } from "../siteData";

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <header className="hero-shell relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={siteMeta.heroImage}
          alt="Showroom Mont Blanc Carbone avec plaques et tissus en fibre de carbone"
          className="hero-image w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 z-0" />

      <div className="z-10 text-center flex flex-col items-center max-w-6xl">
        <div className="w-full text-left px-3 xl:px-6">
          <FadeIn delay={0.2}>
            <h2 className="hero-eyebrow text-xs md:text-sm minW1600:!text-[1.6vw] tracking-[0.18em] md:tracking-[0.4em] uppercase mb-4">
              {hero.eyebrow}
            </h2>
          </FadeIn>
        </div>

        <div className="relative hero-title-stack hidden md:block">
          <AnimatedText
            text={hero.titleTop}
            className="hero-title-solid text-[10vw] md:text-[7.4vw] xl:text-[6.4rem] leading-[0.88] font-black px-2 tracking-[-0.045em] uppercase mix-blend-overlay mb-2"
          />
          <AnimatedText
            text={hero.titleBottom}
            className="hero-title-outline text-[10vw] md:text-[7.4vw] xl:text-[6.4rem] leading-[0.88] font-black px-2 tracking-[-0.045em] uppercase text-transparent stroke-white border-white"
          />
        </div>

        <div className="hero-title-mobile relative w-full md:hidden">
          <FadeIn delay={0.28}>
            <div className="flex flex-col items-center">
              <h1 className="hero-mobile-solid">{hero.mobileTitleLines[0]}</h1>
              <h1 className="hero-mobile-solid hero-mobile-solid-second">
                {hero.mobileTitleLines[1]}
              </h1>
              <h1 className="hero-mobile-outline">{hero.mobileTitleLines[2]}</h1>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35} className="mt-8 max-w-3xl">
          <p className="hero-intro text-lg md:text-2xl text-gray-200 leading-relaxed">
            {hero.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.45} className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex justify-center px-8 py-4 bg-white text-black text-xs md:text-sm font-bold uppercase tracking-[0.18em] hover:bg-gray-200 transition-colors"
          >
            {hero.primaryCta}
          </Link>
          <a
            href={siteMeta.phoneHref}
            className="inline-flex justify-center px-8 py-4 border border-white text-white text-xs md:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-colors"
          >
            {hero.secondaryCta}
          </a>
        </FadeIn>

        <FadeIn delay={0.55} className="mt-8 flex flex-wrap justify-center gap-3">
          {hero.bullets.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.18em]"
            >
              {item}
            </span>
          ))}
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-10 right-10 flex items-center gap-4 z-10 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest writing-vertical-lr">
          Defiler
        </span>
      </motion.div>

      <style jsx>{`
        .hero-shell {
          min-height: 100svh;
        }

        .hero-image {
          filter: saturate(0.9) contrast(1.02);
          transform: scale(1.02);
        }

        .hero-title-stack {
          width: 100%;
          max-width: min(78vw, 74rem);
          margin: 0 auto;
        }

        .hero-title-stack :global(div) {
          justify-content: center;
        }

        .hero-title-stack :global(span) {
          white-space: pre;
        }

        .hero-title-solid,
        .hero-title-outline {
          overflow: visible;
        }

        .hero-title-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .hero-shell {
            min-height: 100svh;
            padding-left: 1.1rem;
            padding-right: 1.1rem;
            padding-top: 6rem;
            padding-bottom: 2.5rem;
          }

          .hero-image {
            transform: scale(0.76) translateY(9%);
            transform-origin: center 62%;
            opacity: 0.7;
          }

          .hero-title-mobile {
            display: block;
            width: 100%;
            max-width: 92vw;
            margin: 0 auto;
          }

          .hero-title-stack {
            max-width: 92vw;
          }

          .hero-title-stack :global(div) {
            justify-content: center;
          }

          .hero-title-solid {
            font-size: clamp(3.7rem, 15vw, 5.4rem) !important;
            line-height: 0.92 !important;
            letter-spacing: -0.055em !important;
            margin-bottom: 0.25rem !important;
          }

          .hero-title-outline {
            font-size: clamp(3rem, 12.8vw, 4.6rem) !important;
            line-height: 0.95 !important;
            letter-spacing: -0.05em !important;
          }

          .hero-eyebrow {
            max-width: 22rem;
            line-height: 1.55;
            letter-spacing: 0.17em !important;
          }

          .hero-intro {
            font-size: 0.95rem;
            line-height: 1.7;
            max-width: 21rem;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-mobile-solid,
          .hero-mobile-outline {
            margin: 0;
            text-align: center;
            text-transform: uppercase;
            white-space: nowrap;
          }

          .hero-mobile-solid {
            font-size: clamp(3.05rem, 13.2vw, 4.35rem);
            line-height: 0.9;
            letter-spacing: -0.065em;
            font-weight: 900;
            color: white;
          }

          .hero-mobile-solid-second {
            margin-top: -0.1rem;
          }

          .hero-mobile-outline {
            margin-top: 0.55rem;
            font-size: clamp(2.45rem, 10.8vw, 3.75rem);
            line-height: 0.94;
            letter-spacing: -0.05em;
            font-weight: 900;
            color: transparent;
            -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.95);
          }
        }

        @media (max-width: 420px) {
          .hero-image {
            transform: scale(0.7) translateY(11%);
          }

          .hero-mobile-solid {
            font-size: clamp(2.85rem, 12.7vw, 4rem);
          }

          .hero-mobile-outline {
            font-size: clamp(2.3rem, 10.3vw, 3.45rem);
          }
        }
      `}</style>
    </header>
  );
}
