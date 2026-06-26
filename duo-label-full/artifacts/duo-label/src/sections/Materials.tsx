import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

export default function Materials() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { t, lang } = useLang();

  const materials = [
    {
      nameTr: "Parlak Kuşe",
      nameEn: "Gloss Coated",
      descTr: "Canlı renk baskısı için yüksek parlak kağıt yüzey",
      descEn: "High-gloss paper stock for vivid full-color print",
      style: "bg-gradient-to-br from-white via-gray-50 to-gray-200",
      textColor: "text-gray-800",
    },
    {
      nameTr: "Mat Yüzey",
      nameEn: "Matte Finish",
      descTr: "Premium ve yazılabilir uygulamalar için sofistike mat yüzey",
      descEn: "Sophisticated matte surface for premium and writable applications",
      style: "bg-gradient-to-br from-stone-400 via-stone-300 to-stone-500",
      textColor: "text-stone-900",
    },
    {
      nameTr: "Şeffaf Polyester",
      nameEn: "Clear Polyester",
      descTr: "Maksimum ürün görünürlüğü için kristal berramlığında film",
      descEn: "Crystal-clear film for maximum product visibility",
      style: "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(200,220,240,0.08)_100%)] border border-white/30 backdrop-blur-sm",
      textColor: "text-white",
    },
    {
      nameTr: "Termal Direkt",
      nameEn: "Thermal Direct",
      descTr: "Mürekkep gerektirmeyen, yüksek hızlı değişken veri baskısı",
      descEn: "Ink-free, high-speed variable data printing",
      style: "bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100",
      textColor: "text-amber-900",
    },
    {
      nameTr: "Metalik Gold",
      nameEn: "Metallic Gold",
      descTr: "Premium raf varlığı için altın metalik yüzey",
      descEn: "Gold metallic face stock for premium shelf presence",
      style: "bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600",
      textColor: "text-yellow-900",
    },
    {
      nameTr: "PP / PE",
      nameEn: "PP / PE",
      descTr: "Islak ve zorlu ortamlar için su geçirmez polimer yüzey",
      descEn: "Waterproof polymer substrate for wet and harsh environments",
      style: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400",
      textColor: "text-slate-800",
    },
  ];

  return (
    <section id="materials" className="py-32 bg-[#0A0C10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">{t.materials.headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl">{t.materials.sub}</p>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto pb-12 pt-4 px-6 gap-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {materials.map((mat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="snap-start shrink-0 w-[280px] group cursor-pointer"
          >
            <div className="bg-[#1A1D24] border border-[#22262F] rounded-2xl overflow-hidden h-[340px] flex flex-col transition-all duration-300 group-hover:border-[#0EA5E9]/50 group-hover:-translate-y-2">
              <div className={`w-full h-52 relative overflow-hidden ${mat.style} flex items-center justify-center`}>
                {/* Label roll visual overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-20 h-20 rounded-full border-4 border-current" />
                  <div className="absolute w-12 h-12 rounded-full border-2 border-current" />
                  <div className="absolute w-5 h-5 rounded-full bg-current/40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {lang === 'tr' ? mat.nameTr : mat.nameEn}
                </h3>
                <p className="text-[#8B94A3] text-sm leading-relaxed">
                  {lang === 'tr' ? mat.descTr : mat.descEn}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
