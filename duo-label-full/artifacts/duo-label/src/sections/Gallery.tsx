import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

export default function Gallery() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { t, lang } = useLang();

  const items = [
    {
      titleTr: "Premium Kozmetik",
      titleEn: "Premium Cosmetics",
      catTr: "Kozmetik",
      catEn: "Cosmetics",
      h: "h-[420px]",
      bg: "bg-gradient-to-b from-rose-950 via-pink-950 to-[#1A1D24]",
      accent: "#f43f5e",
      visual: "cosmetic",
    },
    {
      titleTr: "Klinik İlaç",
      titleEn: "Clinical Pharma",
      catTr: "Sağlık",
      catEn: "Healthcare",
      h: "h-[320px]",
      bg: "bg-gradient-to-b from-blue-950 via-blue-950/60 to-[#1A1D24]",
      accent: "#38bdf8",
      visual: "pharma",
    },
    {
      titleTr: "Craft Kahve",
      titleEn: "Artisan Coffee",
      catTr: "Gıda",
      catEn: "Food",
      h: "h-[460px]",
      bg: "bg-gradient-to-b from-stone-900 via-amber-950/40 to-[#1A1D24]",
      accent: "#d97706",
      visual: "food",
    },
    {
      titleTr: "Lojistik & Kargo",
      titleEn: "Logistics & Cargo",
      catTr: "Lojistik",
      catEn: "Logistics",
      h: "h-[360px]",
      bg: "bg-gradient-to-b from-zinc-900 via-zinc-900/60 to-[#1A1D24]",
      accent: "#a1a1aa",
      visual: "logistics",
    },
    {
      titleTr: "Lüks İçecek",
      titleEn: "Luxury Beverage",
      catTr: "İçecek",
      catEn: "Beverage",
      h: "h-[420px]",
      bg: "bg-gradient-to-b from-amber-950 via-yellow-950/50 to-[#1A1D24]",
      accent: "#f59e0b",
      visual: "beverage",
    },
    {
      titleTr: "Endüstriyel",
      titleEn: "Industrial",
      catTr: "Endüstri",
      catEn: "Industrial",
      h: "h-[360px]",
      bg: "bg-gradient-to-b from-orange-950 via-orange-950/40 to-[#1A1D24]",
      accent: "#f97316",
      visual: "industrial",
    },
  ];

  const renderVisual = (type: string, accent: string) => {
    if (type === "cosmetic") return (
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-40 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          <div className="absolute top-3 left-2 right-2 h-1 rounded-full" style={{ background: accent, opacity: 0.8 }} />
          <div className="absolute top-6 left-3 right-3 h-8 bg-white/10 rounded-lg" />
          <div className="absolute bottom-4 left-2 right-2 space-y-1">
            <div className="h-0.5 bg-white/20 rounded-full" />
            <div className="h-0.5 bg-white/15 rounded-full" />
            <div className="h-0.5 w-3/4 bg-white/10 rounded-full" />
          </div>
        </div>
        <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-white/20" />
          <div className="absolute bottom-4 left-4 right-4 h-0.5 bg-white/15" />
        </div>
      </div>
    );

    if (type === "pharma") return (
      <div className="flex items-center gap-4">
        <div className="w-28 h-12 rounded-lg border border-white/20 bg-white/8 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-40">
            {Array(14).fill(0).map((_, j) => (
              <div key={j} className="bg-white h-5" style={{ width: j % 3 === 0 ? '3px' : '1px' }} />
            ))}
          </div>
          <div className="absolute bottom-1 left-0 right-0 text-center text-[6px] text-white/60 font-mono">000000000000</div>
        </div>
        <div className="w-20 h-28 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute top-3 left-2 right-2 h-0.5" style={{ background: accent, opacity: 0.9 }} />
          <div className="absolute top-5 left-2 right-2 space-y-1.5">
            <div className="h-0.5 bg-white/30 rounded-full" />
            <div className="h-0.5 bg-white/20 rounded-full" />
            <div className="h-0.5 w-2/3 bg-white/15 rounded-full" />
          </div>
        </div>
      </div>
    );

    if (type === "food") return (
      <div className="flex items-center justify-center">
        <div className="w-24 h-36 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-10" style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }} />
          <div className="absolute top-3 left-3 right-3 space-y-1">
            <div className="h-1 rounded-full" style={{ background: accent, opacity: 0.7 }} />
            <div className="h-0.5 bg-white/20 rounded-full" />
          </div>
          <div className="absolute bottom-4 left-3 right-3 space-y-1">
            <div className="h-0.5 bg-white/20 rounded-full" />
            <div className="h-0.5 bg-white/15 rounded-full" />
            <div className="h-0.5 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    );

    if (type === "logistics") return (
      <div className="flex flex-col items-center gap-2">
        <div className="w-36 h-10 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center gap-0.5 px-3 opacity-50">
            {Array(22).fill(0).map((_, j) => (
              <div key={j} className="bg-white h-6" style={{ width: j % 4 === 0 ? '3px' : j % 2 === 0 ? '2px' : '1px' }} />
            ))}
          </div>
        </div>
        <div className="w-32 h-8 rounded-md border border-white/15 bg-white/4 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 flex items-center px-2 gap-0.5 opacity-40">
            {Array(18).fill(0).map((_, j) => (
              <div key={j} className="bg-white h-4" style={{ width: j % 3 === 0 ? '2px' : '1px' }} />
            ))}
          </div>
        </div>
      </div>
    );

    if (type === "beverage") return (
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-44 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-36 rounded-b-full border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl" />
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-7 h-10 border border-white/20 bg-white/5 rounded-t-full" />
          <div className="absolute bottom-10 left-1 right-1 h-10 border-y border-white/15 bg-white/3 flex flex-col justify-center px-1 gap-0.5">
            <div className="h-0.5 rounded-full" style={{ background: accent, opacity: 0.8 }} />
            <div className="h-0.5 bg-white/20 rounded-full" />
            <div className="h-0.5 w-2/3 bg-white/15 rounded-full" />
          </div>
        </div>
        <div className="w-14 h-36 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          <div className="absolute top-6 left-1 right-1 h-12 border-y border-white/15 flex flex-col justify-center px-1 gap-0.5">
            <div className="h-0.5 rounded-full" style={{ background: accent, opacity: 0.9 }} />
            <div className="h-0.5 bg-white/20 rounded-full" />
            <div className="h-0.5 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    );

    if (type === "industrial") return (
      <div className="flex items-center gap-3">
        <div className="w-20 h-14 rounded-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute top-2 left-2 right-2 h-1 rounded-full" style={{ background: accent, opacity: 0.9 }} />
          <div className="absolute top-5 left-2 flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-white/30 rounded-full" />
            <div className="w-2 h-2 border border-white/20 rounded-full" />
          </div>
          <div className="absolute bottom-2 left-2 right-2 space-y-0.5">
            <div className="h-0.5 bg-white/20 rounded-full" />
            <div className="h-0.5 w-3/4 bg-white/15 rounded-full" />
          </div>
        </div>
        <div className="w-16 h-20 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-30">
            {Array(8).fill(0).map((_, j) => (
              <div key={j} className="bg-white h-12" style={{ width: j % 2 === 0 ? '3px' : '1px' }} />
            ))}
          </div>
        </div>
      </div>
    );

    return null;
  };

  return (
    <section id="gallery" className="py-32 px-6 bg-[#080A0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">{t.gallery.headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl">{t.gallery.sub}</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl ${item.bg} border border-[#22262F] overflow-hidden group break-inside-avoid ${item.h} flex flex-col justify-between p-6 cursor-pointer hover:border-white/20 transition-all duration-500`}
            >
              <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pointer-events-none py-4">
                {renderVisual(item.visual, item.accent)}
              </div>

              <div className="relative z-10 flex justify-between items-end mt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: item.accent }}>
                    {lang === 'tr' ? item.catTr : item.catEn}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {lang === 'tr' ? item.titleTr : item.titleEn}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
