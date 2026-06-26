import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import logoSrc from "@assets/duo_label_new_logo_nobg.png";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.sectors, href: '#sectors' },
    { name: t.nav.support, href: '#support' },
    { name: t.nav.blog, href: '#blog' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080A0D]/90 backdrop-blur-xl border-b border-[#22262F]/80 shadow-[0_4px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-24' : 'h-48'}`}>
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src={logoSrc}
            alt="Duo Label"
            className={`object-contain transition-all duration-500 drop-shadow-[0_0_24px_rgba(14,165,233,0.25)] filter ${isScrolled ? 'h-20' : 'h-40'}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#8B94A3] hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-[#22262F] pl-6">
            <button
              onClick={() => setLang('tr')}
              className={`text-sm font-bold px-2 py-1 rounded transition-all ${lang === 'tr' ? 'text-[#0EA5E9] bg-[#0EA5E9]/10' : 'text-[#8B94A3] hover:text-white'}`}
            >
              TR
            </button>
            <span className="text-[#22262F] text-xs">/</span>
            <button
              onClick={() => setLang('en')}
              className={`text-sm font-bold px-2 py-1 rounded transition-all ${lang === 'en' ? 'text-[#0EA5E9] bg-[#0EA5E9]/10' : 'text-[#8B94A3] hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              isScrolled
                ? 'bg-[#0EA5E9] text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:bg-[#0284C7]'
                : 'border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white'
            }`}
          >
            {t.nav.requestQuote}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#22262F] text-white hover:bg-[#1A1D24] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0D1018]/95 backdrop-blur-xl border-b border-[#22262F] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[#C4CDD9] hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex items-center gap-4 mt-4 px-4 pt-4 border-t border-[#22262F]">
                <button
                  onClick={() => { setLang('tr'); setMobileMenuOpen(false); }}
                  className={`text-sm font-bold px-3 py-1.5 rounded-lg transition-all ${lang === 'tr' ? 'text-[#0EA5E9] bg-[#0EA5E9]/10' : 'text-[#8B94A3]'}`}
                >
                  TR
                </button>
                <button
                  onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
                  className={`text-sm font-bold px-3 py-1.5 rounded-lg transition-all ${lang === 'en' ? 'text-[#0EA5E9] bg-[#0EA5E9]/10' : 'text-[#8B94A3]'}`}
                >
                  EN
                </button>
              </div>

              <a
                href="#contact"
                className="mt-3 mx-0 text-center px-6 py-3.5 rounded-xl bg-[#0EA5E9] text-white font-bold shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.requestQuote}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
