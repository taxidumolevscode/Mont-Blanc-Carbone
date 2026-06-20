import Link from "next/link";
import { navigationMenu, siteMeta } from "../siteData";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 md:px-10 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[1.15fr_1fr_0.9fr_0.9fr] gap-8 md:gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
            Mont Blanc Carbone
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-sm">
            Vente de plaques carbone 600 x 600 mm et tissus en fibre de carbone depuis Bonneville 74130.
          </p>
        </div>

        <div>
          <details className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] open:bg-white/[0.05] transition-colors">
            <summary className="list-none cursor-pointer px-5 py-5 md:px-6 md:py-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-2">
                  Menu
                </p>
                <p className="text-base md:text-lg font-semibold text-white">
                  {navigationMenu.label}
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white/80 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-5 pb-5 md:px-6 md:pb-6">
              <ul className="grid grid-cols-1 gap-3 text-sm md:text-base text-gray-300">
                {navigationMenu.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-black/30 px-4 py-3 hover:bg-white hover:text-black transition-all"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] uppercase tracking-[0.24em] opacity-60">
                        Aller
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
            Contact
          </p>
          <ul className="space-y-3 text-sm md:text-base text-gray-300">
            <li>
              <a href={siteMeta.phoneHref}>{siteMeta.phoneDisplay}</a>
            </li>
            <li>
              <a href={siteMeta.emailHref}>{siteMeta.email}</a>
            </li>
            <li>{siteMeta.address}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
            Légal
          </p>
          <ul className="space-y-3 text-sm md:text-base text-gray-300">
            <li>
              <Link href="/applications">Applications</Link>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions Légales</Link>
            </li>
            <li>
              <Link href="/politique-confidentialite">Politique De Confidentialité</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p className="text-xs text-gray-500">
          © 2026 Mont Blanc Carbone. Tous droits réservés.
        </p>
        <p className="text-xs text-gray-600 uppercase tracking-[0.2em]">
          Plaques carbone - Tissus carbone - Haute-Savoie
        </p>
      </div>

      <style jsx>{`
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </footer>
  );
}
