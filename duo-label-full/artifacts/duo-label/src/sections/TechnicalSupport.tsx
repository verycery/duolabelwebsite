import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Settings2, Cpu, Layers, FlaskConical, ScanLine, HeadphonesIcon,
  Wrench, BarChart3, Thermometer, Shield, BookOpen, Microscope,
  Gauge, MonitorCheck, RefreshCw, Zap
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function TechnicalSupport() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const { t, lang } = useLang();

  const isTr = lang === 'tr';

  const primaryServices = [
    {
      icon: Settings2,
      title: isTr ? 'Etiket Sistemi Spesifikasyonu' : 'Label System Specification',
      desc: isTr
        ? 'Substrat ve yapıştırıcı seçiminden üst kaplama, baskı yöntemi ve aplikatör uyumluluğuna kadar tam mühendislik desteği sağlıyoruz.'
        : 'Full-system engineering from substrate and adhesive selection through topcoat chemistry, print method optimisation, and applicator stack compatibility.',
      color: '#0EA5E9',
    },
    {
      icon: Cpu,
      title: isTr ? 'Aplikatör Uyumluluğu' : 'Applicator Compatibility',
      desc: isTr
        ? 'Etiket yığını performansı, teslimat öncesi özel aplikatör ekipmanınızla doğrulanır. Gerginlik, astar sertliği ve sarım özellikleri test edilir.'
        : 'Label stack performance is validated against your applicator equipment before dispatch — tension, liner stiffness, unwind behaviour, and dispensing speed are all verified.',
      color: '#38BDF8',
    },
    {
      icon: FlaskConical,
      title: isTr ? 'Yapıştırıcı Mühendisliği' : 'Adhesive Engineering',
      desc: isTr
        ? 'Kalıcı, çıkarılabilir, ultra yüksek yapışma, gıda temaslı ve kriyojenik formülasyonlar — substrat, çalışma sıcaklığı ve çıkarma gereksinimlerine göre eşleştirilir.'
        : 'Permanent, removable, ultra-high-tack, food-contact compliant, and cryogenic formulations — precisely matched to substrate, operating temperature range, and removal requirements.',
      color: '#7DD3FC',
    },
    {
      icon: Layers,
      title: isTr ? 'Substrat Seçimi' : 'Substrate Recommendation',
      desc: isTr
        ? 'Uygulama mühendislerimiz çevresel stres, yasal sınıflandırma ve baskı sürecine göre optimum yüz malzemesini seçer.'
        : 'Our application engineers select the optimum face stock — paper, oriented film, or foil — based on environmental stress factors, regulatory classification, and intended print process.',
      color: '#BAE6FD',
    },
    {
      icon: ScanLine,
      title: isTr ? 'Baskı Kalitesi Güvencesi' : 'Print Quality Assurance',
      desc: isTr
        ? 'Her üretim boyunca satır içi spektrofotometrik renk doğrulaması, ISO 15416 barkod sınıfı incelemesi ve boyutsal tolerans kontrolü uygulanır.'
        : 'Inline spectrophotometric colour verification, ISO 15416 barcode grade inspection, and dimensional tolerance control applied continuously through each production run.',
      color: '#0EA5E9',
    },
    {
      icon: HeadphonesIcon,
      title: isTr ? 'Tedarik & Hesap Yönetimi' : 'Supply & Account Management',
      desc: isTr
        ? 'Stok mevcudiyeti, planlı yenileme ve belgelenmiş tedarik zinciri performans raporlamasıyla özel hesap yönetimi.'
        : 'Dedicated account management with rolling stock availability, scheduled replenishment cycles, and documented supply chain performance reporting for long-term procurement partnerships.',
      color: '#38BDF8',
    },
  ];

  const engineeringServices = [
    { icon: Wrench, title: isTr ? 'Makine Kurulumu & Devreye Alma' : 'Machine Installation & Commissioning' },
    { icon: RefreshCw, title: isTr ? 'Önleyici Bakım' : 'Preventive Maintenance' },
    { icon: Gauge, title: isTr ? 'Kalibrasyon Hizmetleri' : 'Calibration Services' },
    { icon: MonitorCheck, title: isTr ? 'Makine Tanılama' : 'Machine Diagnostics' },
    { icon: Thermometer, title: isTr ? 'Şerit Optimizasyonu' : 'Ribbon Optimisation' },
    { icon: BarChart3, title: isTr ? 'Üretim Danışmanlığı' : 'Production Consultancy' },
    { icon: Microscope, title: isTr ? 'Malzeme Mühendisliği' : 'Material Engineering' },
    { icon: Shield, title: isTr ? 'Barkod Doğrulama' : 'Barcode Verification' },
    { icon: Zap, title: isTr ? 'Süreç Optimizasyonu' : 'Process Optimisation' },
    { icon: BookOpen, title: isTr ? 'Operatör Eğitimi' : 'Operator Training' },
    { icon: Settings2, title: isTr ? 'Renk Yönetimi' : 'Colour Management' },
    { icon: Cpu, title: isTr ? 'Yazıcı Kurulumu' : 'Printer Installation' },
  ];

  return (
    <section id="support" className="py-32 px-6 bg-[#0A0C10] border-t border-[#22262F] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#0EA5E9]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header — centered */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">
              {isTr ? 'Mühendislik Departmanı' : 'Engineering Department'}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t.techSupport.headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-3xl leading-relaxed text-left">{t.techSupport.sub}</p>
        </motion.div>

        {/* Primary 6 services — full cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {primaryServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#1A1D24] border border-[#22262F] p-8 rounded-2xl hover:border-[#0EA5E9]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${service.color}15 0%, transparent 70%)` }}
                />
                <div
                  className="w-14 h-14 rounded-xl bg-[#080A0D] border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: service.color + '30' }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight">{service.title}</h3>
                <p className="text-[#8B94A3] text-sm leading-relaxed">{service.desc}</p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl"
                  style={{ background: `linear-gradient(to right, ${service.color}80, transparent)` }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional engineering services — compact grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="border border-[#22262F] rounded-3xl p-8 md:p-10 bg-[#0D1018] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />

            <h3 className="font-display text-2xl font-bold text-white mb-2 text-center">
              {isTr ? 'Genişletilmiş Mühendislik Hizmetleri' : 'Extended Engineering Services'}
            </h3>
            <p className="text-[#8B94A3] text-sm mb-10 max-w-xl text-left">
              {isTr
                ? 'Makine kurulumundan operatör eğitimine kadar tam kapsamlı saha destek operasyonları.'
                : 'Comprehensive on-site support operations — from machine commissioning through operator training and ongoing process optimisation.'}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {engineeringServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.04 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[#22262F] bg-[#1A1D24]/60 hover:border-[#0EA5E9]/30 hover:bg-[#1A1D24] transition-all group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                    <span className="text-[#C4CDD9] text-xs font-medium leading-snug group-hover:text-white transition-colors">{svc.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-[#8B94A3] mb-6 text-sm">
            {isTr
              ? 'Teknik danışmanlık için mühendislik ekibimizle doğrudan iletişime geçin.'
              : 'Contact our engineering team directly for technical specification support and production consultancy.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/905533164920"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#0EA5E9] text-white font-bold text-sm hover:bg-[#0284C7] transition-all shadow-[0_0_25px_rgba(14,165,233,0.3)] hover:-translate-y-0.5"
            >
              {isTr ? 'Teknik Destek Al' : 'Request Technical Support'}
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl border border-[#22262F] text-[#C4CDD9] font-semibold text-sm hover:border-[#0EA5E9]/40 hover:text-white transition-all hover:-translate-y-0.5"
            >
              {isTr ? 'Talep Formu' : 'Submit an Enquiry'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
