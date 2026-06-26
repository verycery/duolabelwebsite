import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { ArrowRight, MessageCircle, FileText, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t, lang } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const capabilities = lang === 'tr'
    ? ["Kuşe Etiket", "PP Etiket", "PE Etiket", "PET Etiket", "BOPP Etiket", "Termal Etiket", "Barkod Etiket", "Kozmetik Etiket", "Gıda Etiketleri", "Endüstriyel Etiket"]
    : ["Coated Labels", "PP Labels", "PE Labels", "PET Labels", "BOPP Labels", "Thermal Labels", "Barcode Labels", "Cosmetic Labels", "Food Labels", "Industrial Labels"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    const spacing = 48;
    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({
          x: x + Math.random() * 10 - 5,
          y: y + Math.random() * 10 - 5,
          r: Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.25 + 0.04,
          speed: Math.random() * 0.004 + 0.002,
        });
      }
    }

    let frame = 0;
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      dots.forEach((dot, i) => {
        const pulse = Math.sin(frame * dot.speed + i * 0.4) * 0.12 + dot.alpha;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${pulse})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#080A0D]">
      {/* Animated dot-grid canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />

      {/* Centered radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(14,165,233,0.09)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080A0D] to-transparent pointer-events-none" />

      {/* Background precision rings — centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-[700px] h-[700px] rounded-full border border-[#1E2530]/70 flex items-center justify-center"
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rounded-full border border-[#0EA5E9]/30 bg-[#080A0D]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute inset-20 rounded-full border border-[#0EA5E9]/8"
        >
          <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 rounded-full bg-[#0EA5E9]/30" />
        </motion.div>
        <div className="absolute inset-40 rounded-full border border-[#1E2530]/50" />
        <div className="absolute inset-[200px] rounded-full bg-[#0EA5E9]/4" />
      </div>

      {/* Corner brackets — subtle */}
      <div className="absolute top-36 left-8 pointer-events-none opacity-15 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 20 L0 0 L20 0" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="absolute top-36 right-8 pointer-events-none opacity-15 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 20 L60 0 L40 0" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* ——— CENTERED MAIN CONTENT ——— */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 max-w-6xl mx-auto px-6 pt-44 pb-32 w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#0EA5E9]/25 bg-[#0EA5E9]/6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
            <span className="text-[#38BDF8] text-xs font-bold tracking-[0.2em] uppercase">
              {lang === 'tr' ? 'Premium Etiket Üreticisi' : 'Premium Label Manufacturer'}
            </span>
          </div>
        </motion.div>

        {/* Headline — massive, centered */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(52px,9vw,110px)] leading-[0.88] tracking-tighter text-white"
          >
            {lang === 'tr' ? 'Premium Etiket' : 'Precision Label'}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(52px,9vw,110px)] leading-[0.88] tracking-tighter text-metallic"
          >
            {lang === 'tr' ? 'Üretim & Çözümler' : 'Systems & Engineering'}
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-[#8B94A3] text-lg md:text-xl max-w-2xl leading-relaxed mb-14 text-left"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs — centered row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-start items-start sm:items-center"
        >
          <a
            href="https://wa.me/905533164920"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-[0_0_30px_rgba(37,211,102,0.25)] hover:shadow-[0_0_45px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            {t.hero.ctaWhatsapp}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-xl border border-[#0EA5E9]/50 text-[#0EA5E9] font-bold text-base hover:bg-[#0EA5E9] hover:text-white transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <FileText className="w-5 h-5" />
            {t.hero.ctaQuote}
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-9 py-4.5 rounded-xl border border-[#22262F] text-[#C4CDD9] font-semibold text-base hover:bg-white/5 hover:text-white transition-all hover:-translate-y-0.5 group"
          >
            {lang === 'tr' ? 'Ürünleri İncele' : 'Explore Products'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#8B94A3]/60 uppercase">
            {lang === 'tr' ? 'Keşfet' : 'Discover'}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[#8B94A3]/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Capability ticker strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1E2530]/80 bg-[#060809]/90 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center h-11 relative">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex items-center shrink-0 whitespace-nowrap"
          >
            {[...capabilities, ...capabilities].map((cap, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6">
                <span className="text-[10px] font-bold text-[#8B94A3]/70 uppercase tracking-[0.2em]">{cap}</span>
                <span className="w-1 h-1 rounded-full bg-[#0EA5E9]/50 shrink-0" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
