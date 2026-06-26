import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Handshake, Zap, ShieldCheck, Target } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const { t, lang } = useLang();

  const bullets = [
    { icon: Handshake, title: t.about.bullet1title, body: t.about.bullet1body },
    { icon: Zap, title: t.about.bullet2title, body: t.about.bullet2body },
    { icon: ShieldCheck, title: t.about.bullet3title, body: t.about.bullet3body },
    { icon: Target, title: t.about.bullet4title, body: t.about.bullet4body },
  ];

  const keywords = lang === 'tr'
    ? ['Malzeme Bilimi', 'Yapıştırıcı Teknolojisi', 'Kalite Kontrolü', 'Hızlı Teslimat', 'Teknik Danışmanlık', 'Özel Çözümler']
    : ['Material Science', 'Adhesive Technology', 'Quality Control', 'Fast Delivery', 'Technical Consulting', 'Custom Solutions'];

  return (
    <section id="about" className="py-32 px-6 bg-[#080A0D] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Industrial visual panel */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-[#1A1D24] border border-[#22262F] rounded-3xl p-10 relative overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0EA5E9]/6 rounded-full blur-[80px] pointer-events-none" />

              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 leading-tight relative z-10">
                {t.about.headline}
              </h2>

              <p className="text-[#C4CDD9] text-lg leading-relaxed mb-10 relative z-10">
                {t.about.mission}
              </p>

              {/* Keyword tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {keywords.map((kw, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="px-4 py-1.5 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider"
                  >
                    {kw}
                  </motion.span>
                ))}
              </div>

              {/* Industrial schematic accent */}
              <div className="absolute bottom-0 right-0 pointer-events-none opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="200" cy="200" r="80" stroke="#0EA5E9" strokeWidth="0.5" />
                  <circle cx="200" cy="200" r="50" stroke="#0EA5E9" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="120" y1="200" x2="200" y2="200" stroke="#0EA5E9" strokeWidth="0.5" />
                  <line x1="200" y1="120" x2="200" y2="200" stroke="#0EA5E9" strokeWidth="0.5" />
                </svg>
              </div>
            </div>

            {/* CTA bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-5 flex gap-4"
            >
              <a
                href="https://wa.me/905533164920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 rounded-xl bg-[#25D366] text-white font-bold text-center text-sm hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                WhatsApp
              </a>
              <a
                href="#contact"
                className="flex-1 py-4 rounded-xl border border-[#0EA5E9]/40 text-[#0EA5E9] font-bold text-center text-sm hover:bg-[#0EA5E9] hover:text-white transition-all"
              >
                {lang === 'tr' ? 'Teklif Al' : 'Get a Quote'}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Value bullets */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {bullets.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="group flex gap-5 p-7 rounded-2xl bg-[#1A1D24] border border-[#22262F] hover:border-[#0EA5E9]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#080A0D] border border-[#22262F] flex items-center justify-center shrink-0 group-hover:border-[#0EA5E9]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-[#8B94A3] text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
