import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { navigationMenu, siteMeta } from "../siteData";

export default function MenuOverlay({ isOpen, onClose }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = useMemo(() => navigationMenu.items, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#111] z-50 text-white overflow-y-auto"
        >
          <div className="min-h-screen px-4 md:px-10 py-8 md:py-10 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <p className="text-sm md:text-base font-bold tracking-widest uppercase">
                {siteMeta.brand}
              </p>
              <button onClick={onClose} className="p-2" aria-label="Fermer le menu">
                <X size={30} />
              </button>
            </div>

            <div className="w-full max-w-5xl mx-auto flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="rounded-md border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setIsExpanded((value) => !value)}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 md:py-8 text-left"
                  aria-expanded={isExpanded}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40 mb-3">
                      Navigation
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                      {navigationMenu.label}
                    </h2>
                  </div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <Plus
                      size={24}
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-45" : "rotate-0"}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {menuItems.map((item, index) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: 0.05 + index * 0.03 }}
                            >
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-center justify-between rounded-md border border-white/10 bg-black/20 px-5 py-4 md:px-6 md:py-5 hover:bg-white hover:text-black transition-all duration-300"
                              >
                                <span className="text-xl md:text-2xl font-black uppercase tracking-tight">
                                  {item.label}
                                </span>
                                <span className="text-xs uppercase tracking-[0.28em] text-white/40 group-hover:text-black/60">
                                  Ouvrir
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-8 rounded-md border border-white/10 bg-black/40 p-6 md:p-8"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-white/40 mb-3">
                  Devis Rapide
                </p>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="text-2xl md:text-4xl font-black uppercase tracking-tight hover:text-white/70 transition-colors"
                >
                  Envoyer une demande
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
