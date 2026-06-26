import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { ArrowRight, Clock } from 'lucide-react';

const catColors: Record<string, string> = {
  'Material Science': '#0EA5E9',
  'Malzeme Bilimi': '#0EA5E9',
  'Adhesive Tech': '#F59E0B',
  'Yapıştırıcı Teknolojisi': '#F59E0B',
  'Comparison Guide': '#8B5CF6',
  'Karşılaştırma Rehberi': '#8B5CF6',
  'Best Practices': '#10B981',
  'En İyi Uygulamalar': '#10B981',
  'Durability': '#F97316',
  'Dayanıklılık': '#F97316',
};

const readTimes = ['4 min', '5 min', '6 min', '5 min', '7 min', '4 min'];

export default function Blog() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { t, lang } = useLang();

  return (
    <section id="blog" className="py-32 px-6 bg-[#080A0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">{t.blog.headline}</h2>
            <p className="text-[#8B94A3] text-lg max-w-xl">{t.blog.sub}</p>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            {lang === 'tr' ? 'Tüm Makaleler' : 'All Articles'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.blog.posts.map((post, i) => {
            const accentColor = catColors[post.cat] ?? '#0EA5E9';
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#1A1D24] border border-[#22262F] rounded-2xl flex flex-col group hover:border-[#0EA5E9]/30 transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Visual header */}
                <div className="h-48 w-full relative overflow-hidden bg-[#0D1018]">
                  {/* Engineering schematic background */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="100" x2="400" y2="100" stroke={accentColor} strokeWidth="0.5" />
                    <line x1="200" y1="0" x2="200" y2="200" stroke={accentColor} strokeWidth="0.5" />
                    <circle cx="200" cy="100" r="60" stroke={accentColor} strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="200" cy="100" r="30" stroke={accentColor} strokeWidth="0.5" />
                    <circle cx="200" cy="100" r="6" fill={accentColor} />
                    {[0, 60, 120, 180, 240, 300].map((angle, j) => {
                      const rad = (angle * Math.PI) / 180;
                      return (
                        <line key={j}
                          x1={200 + 30 * Math.cos(rad)} y1={100 + 30 * Math.sin(rad)}
                          x2={200 + 60 * Math.cos(rad)} y2={100 + 60 * Math.sin(rad)}
                          stroke={accentColor} strokeWidth="0.5"
                        />
                      );
                    })}
                  </svg>

                  {/* Scan overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0D1018]/40 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)` }}
                  />

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-5">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                      style={{ background: accentColor + 'CC' }}
                    >
                      {post.cat}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute top-4 right-5 flex items-center gap-1.5 text-[#8B94A3] text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{readTimes[i]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold text-white leading-tight mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#8B94A3] text-sm leading-relaxed flex-grow">{post.excerpt}</p>

                  <div className="mt-6 pt-5 border-t border-[#22262F] flex items-center justify-between">
                    <a
                      href="#blog"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4CDD9] group-hover:text-[#0EA5E9] transition-colors"
                    >
                      {post.readMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
