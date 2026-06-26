import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { ClipboardList, FlaskConical, Printer, CheckCircle2, Truck, HeadphonesIcon } from 'lucide-react';

export default function GlobalVision() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const { lang } = useLang();

  const isTr = lang === 'tr';

  const headline = isTr ? 'Üretim Sürecimiz' : 'Our Manufacturing Process';
  const sub = isTr
    ? 'Her siparişi titiz bir mühendislik sürecinden geçiriyor; spesifikasyondan teslimatına kadar her aşamayı kontrol ediyoruz.'
    : 'Every order moves through a rigorous engineering workflow — from specification to delivery, every stage is controlled.';

  const steps = isTr ? [
    { icon: ClipboardList, label: 'Teknik Spesifikasyon', desc: 'Malzeme, boyut, yapıştırıcı ve baskı gereksinimleri belirlenir.', color: '#0EA5E9' },
    { icon: FlaskConical, label: 'Malzeme Seçimi', desc: 'Uygulama ortamına göre yüz malzemesi ve yapıştırıcı seçilir.', color: '#38BDF8' },
    { icon: Printer, label: 'Üretim & Baskı', desc: 'Kalibrasyon, renk profili ve baskı hassasiyetiyle üretim başlar.', color: '#7DD3FC' },
    { icon: CheckCircle2, label: 'Kalite Kontrolü', desc: 'Baskı kalitesi, yapışma ve boyut doğruluğu satır içi kontrol edilir.', color: '#BAE6FD' },
    { icon: Truck, label: 'Paketleme & Teslimat', desc: 'Sipariş korumalı paketlenerek zamanında teslim edilir.', color: '#38BDF8' },
    { icon: HeadphonesIcon, label: 'Satış Sonrası Destek', desc: 'Teslimat sonrası teknik destek ve hesap yönetimi sağlanır.', color: '#0EA5E9' },
  ] : [
    { icon: ClipboardList, label: 'Technical Specification', desc: 'Material, size, adhesive, and print requirements are defined.', color: '#0EA5E9' },
    { icon: FlaskConical, label: 'Material Selection', desc: 'Face stock and adhesive are chosen based on the application environment.', color: '#38BDF8' },
    { icon: Printer, label: 'Production & Print', desc: 'Full calibration, color profiling, and precision press production.', color: '#7DD3FC' },
    { icon: CheckCircle2, label: 'Quality Control', desc: 'Print fidelity, adhesion, and dimensional accuracy checked inline.', color: '#BAE6FD' },
    { icon: Truck, label: 'Packaging & Delivery', desc: 'Orders are protectively packed and delivered on schedule.', color: '#38BDF8' },
    { icon: HeadphonesIcon, label: 'After-Sales Support', desc: 'Post-delivery technical support and dedicated account management.', color: '#0EA5E9' },
  ];

  return (
    <section className="py-32 px-6 bg-[#0A0C10] border-t border-[#22262F] overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0EA5E9]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">{headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl mx-auto">{sub}</p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] h-[1px] hidden lg:block pointer-events-none">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-[#0EA5E9]/60 via-[#38BDF8]/40 to-[#0EA5E9]/60"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-5 bg-[#0D1018] relative transition-all duration-300 group-hover:scale-110"
                    style={{ borderColor: step.color + '50' }}
                  >
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)` }}
                    />
                    <Icon className="w-7 h-7 relative z-10" style={{ color: step.color }} />

                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white text-[10px] font-bold">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="font-display text-sm font-bold text-white mb-2 leading-tight">{step.label}</h3>
                  <p className="text-[#8B94A3] text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://wa.me/905533164920"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#0EA5E9] text-white font-bold hover:bg-[#0284C7] transition-all shadow-[0_0_30px_rgba(14,165,233,0.3)]"
          >
            {isTr ? 'Projenizi Başlatın' : 'Start Your Project'}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-[#22262F] text-[#C4CDD9] font-semibold hover:border-[#0EA5E9]/40 hover:text-white transition-all"
          >
            {isTr ? 'Teknik Danışmanlık Alın' : 'Technical Consultation'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
