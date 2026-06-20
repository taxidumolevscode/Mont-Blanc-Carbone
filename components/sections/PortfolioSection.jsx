import FadeIn from "../animations/FadeIn";
import { homeContent } from "../siteData";

export default function PortfolioSection() {
  const portfolioItems = homeContent.services;

  const getVisualClassName = (slug) => {
    switch (slug) {
      case "plaques-carbone-600":
        return "object-cover object-center";
      case "tissus-carbone-techniques":
        return "object-cover object-right";
      case "conseil-composite":
        return "object-cover object-left";
      default:
        return "object-cover";
    }
  };

  const getCardShellClassName = (slug) => {
    switch (slug) {
      case "plaques-carbone-600":
      case "tissus-carbone-techniques":
      case "conseil-composite":
        return "bg-neutral-100";
      default:
        return "bg-white";
    }
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="px-4 md:px-10 mb-20 lg:flex justify-between items-end">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
            ( 02 )
          </span>
          <h2 className="text-[2.45rem] leading-[0.95] md:text-6xl xl:text-8xl font-black uppercase tracking-[-0.05em] max-w-[13ch]">
            Gamme Carbone
          </h2>
        </div>
        <div className="hidden lg:block">
          <div className="inline-block lg:mt-0 mt-4">
            <p className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">
              Plaques carbone et tissus techniques
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {portfolioItems.map((item, index) => (
            <FadeIn
              key={index}
              delay={item.delay}
              className={`group relative overflow-hidden cursor-pointer ${
                item.offset ? "md:mt-20" : ""
              } ${item.hideOnLarge ? "lg:hidden" : ""}`}
            >
              <div className={`aspect-[3/4] overflow-hidden ${getCardShellClassName(item.slug)}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${getVisualClassName(item.slug)}`}
                />
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
                <span className="text-sm font-bold uppercase tracking-[0.15em] max-w-[16ch] leading-[1.2]">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500 sm:text-right sm:max-w-[14ch]">
                  {item.subtitle}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="lg:hidden text-center">
        <div className="inline-block mt-7">
          <p className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">
          Bonneville - Haute-Savoie - Geneve
          </p>
        </div>
      </div>
    </section>
  );
}
