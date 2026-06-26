import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '../context/LanguageContext';

export default function Sectors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { t } = useLang();

  return (
    <section id="sectors" className="py-32 px-6 bg-[#0A0C10]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">{t.sectors.headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl">{t.sectors.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.sectors.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#1A1D24] border border-[#22262F] rounded-2xl overflow-hidden cursor-pointer hover:border-[#0EA5E9]/40 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient visual */}
              <div className={`h-44 w-full bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                {/* Animated shimmer on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                {/* Label roll visual in corner */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">{item.name}</h3>
                <p className="text-[#8B94A3] text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Bottom electric blue line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
