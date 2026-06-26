import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';
import productSheetSrc from "@assets/ChatGPT_Image_25_Haz_2026_17_31_56_1782397924854.png";

// 10 products in the composite image — 5 columns × 2 rows
// background-size: 500% 200% → each cell occupies 1/5 width and 1/2 height
const cropPositions = [
  { x: '0%',   y: '0%'   },  // 0 — Coated
  { x: '25%',  y: '0%'   },  // 1 — PP
  { x: '50%',  y: '0%'   },  // 2 — PE
  { x: '75%',  y: '0%'   },  // 3 — PET
  { x: '100%', y: '0%'   },  // 4 — BOPP
  { x: '0%',   y: '100%' },  // 5 — Thermal
  { x: '25%',  y: '100%' },  // 6 — Barcode
  { x: '50%',  y: '100%' },  // 7 — Cosmetic
  { x: '75%',  y: '100%' },  // 8 — Food
  { x: '100%', y: '100%' },  // 9 — Industrial
];

export default function Products() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const { t } = useLang();

  return (
    <section id="products" className="py-32 px-6 bg-[#080A0D]">
      <div className="max-w-7xl mx-auto">

        {/* Section header — heading centered, sub left */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">
              {t.products.headline}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-center">{t.products.headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl text-left">{t.products.sub}</p>
        </motion.div>

        {/* Product grid — 5 per row × 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {t.products.categories.map((cat, i) => {
            const pos = cropPositions[i] ?? { x: '0%', y: '0%' };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1A1D24] border border-[#22262F] rounded-2xl overflow-hidden flex flex-col group hover:border-[#0EA5E9]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Cropped product photo */}
                <div
                  className="h-[200px] w-full relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${productSheetSrc})`,
                    backgroundSize: '500% 200%',
                    backgroundPosition: `${pos.x} ${pos.y}`,
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {/* Subtle dark overlay on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1D24] to-transparent" />
                  {/* Shine on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Content — all left-aligned */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-1.5">{cat.usage}</span>
                  <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">{cat.name}</h3>
                  <p className="text-[#8B94A3] text-xs leading-relaxed mb-4 flex-grow text-left">{cat.desc}</p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0EA5E9] hover:text-white transition-colors group/link mt-auto"
                  >
                    {t.products.ctaTechInfo}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Catalog — opens WhatsApp request since no PDF uploaded yet */}
          <a
            href="https://wa.me/905533164920?text=Ürün%20kataloğu%20talep%20ediyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#0D1018] via-[#1A1D24] to-[#0D1018] border border-[#0EA5E9]/20 hover:border-[#0EA5E9]/60 text-white text-base font-bold font-display transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]"
          >
            {t.products.ctaFullCatalog}
            <ArrowRight className="w-5 h-5 text-[#0EA5E9]" />
          </a>
          <a
            href="https://wa.me/905533164920"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-white font-bold text-sm transition-all"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            {t.products.ctaSample}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
