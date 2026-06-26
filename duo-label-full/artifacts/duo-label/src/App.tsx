import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { LanguageProvider, useLang } from "./context/LanguageContext";
import logoSrc from "@assets/duo_label_logo_nobg.png";

import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Sectors from "./sections/Sectors";
import TechnicalSupport from "./sections/TechnicalSupport";
import Materials from "./sections/Materials";
import Gallery from "./sections/Gallery";
import Blog from "./sections/Blog";
import GlobalVision from "./sections/GlobalVision";
import Contact from "./sections/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const queryClient = new QueryClient();

function Footer() {
  const { lang } = useLang();
  const isTr = lang === 'tr';

  const productLinks = isTr
    ? ["Kuşe Etiket", "PP / PE Etiket", "Şeffaf Etiket", "Termal Etiket", "Barkod Etiket", "Kozmetik Etiketleri"]
    : ["Coated Labels", "PP / PE Labels", "Clear Labels", "Thermal Labels", "Barcode Labels", "Cosmetic Labels"];

  const navLinks = [
    { label: isTr ? "Hakkımızda" : "About", href: "#about" },
    { label: isTr ? "Ürünler" : "Products", href: "#products" },
    { label: isTr ? "Sektörler" : "Sectors", href: "#sectors" },
    { label: isTr ? "Teknik Destek" : "Technical Support", href: "#support" },
    { label: isTr ? "Blog" : "Knowledge", href: "#blog" },
    { label: isTr ? "İletişim" : "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#080A0D] border-t border-[#22262F]">
      {/* Top CTA banner */}
      <div className="border-b border-[#22262F] bg-[#0D1018]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold text-white mb-1">
              {isTr ? "Projenizi Başlatmaya Hazır mısınız?" : "Ready to Start Your Project?"}
            </p>
            <p className="text-[#8B94A3] text-sm">
              {isTr ? "Teknik ekibimiz 24 saat içinde yanıt verir." : "Our technical team responds within 24 hours."}
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="https://wa.me/905533164920"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#0EA5E9]/40 text-[#0EA5E9] font-bold text-sm hover:bg-[#0EA5E9] hover:text-white transition-all"
            >
              {isTr ? "Teklif Al" : "Get a Quote"}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img src={logoSrc} alt="Duo Label" className="h-12 object-contain mb-5 opacity-90" />
            <p className="text-[#8B94A3] text-sm leading-relaxed mb-6">
              {isTr
                ? "Premium etiket üretiminde mühendislik disiplini. Malzeme bilimini dünya standartlarında üretimle buluşturuyoruz."
                : "Engineering discipline in premium label manufacturing. Material science meets world-class production."}
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/905533164920"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#22262F] flex items-center justify-center text-[#8B94A3] hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+905533164920"
                className="w-9 h-9 rounded-lg border border-[#22262F] flex items-center justify-center text-[#8B94A3] hover:text-white hover:border-[#0EA5E9]/40 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@duolabel.com.tr"
                className="w-9 h-9 rounded-lg border border-[#22262F] flex items-center justify-center text-[#8B94A3] hover:text-white hover:border-[#0EA5E9]/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {isTr ? "Hızlı Erişim" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8B94A3] text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {isTr ? "Ürünler" : "Products"}
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-[#8B94A3] text-sm hover:text-white transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {isTr ? "İletişim" : "Contact"}
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#8B94A3] uppercase tracking-wider mb-0.5">{isTr ? "Telefon" : "Phone"}</p>
                  <a
                    href={isTr ? "tel:+905533164920" : "tel:+447780433977"}
                    className="text-[#C4CDD9] text-sm font-medium hover:text-white transition-colors"
                  >
                    {isTr ? "+90 553 316 49 20" : "+44 7780 433977"}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#8B94A3] uppercase tracking-wider mb-0.5">{isTr ? "E-posta" : "Email"}</p>
                  <a href="mailto:info@duolabel.com" className="text-[#C4CDD9] text-sm font-medium hover:text-white transition-colors">
                    info@duolabel.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#8B94A3] uppercase tracking-wider mb-0.5">{isTr ? "Adres" : "Address"}</p>
                  <p className="text-[#C4CDD9] text-sm leading-relaxed">
                    {isTr
                      ? "Koşukavak Mah. 4213 Sk. No:8A\nBornova / İzmir"
                      : "London"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-[#22262F] bg-[#060809]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8B94A3] text-xs">
            © {new Date().getFullYear()} Duo Label. {isTr ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
            <span className="text-[#8B94A3] text-xs ml-2">
              {isTr ? "Türkiye'de üretildi" : "Manufactured in Turkey"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-[#080A0D] text-white grain font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <Sectors />
        <TechnicalSupport />
        <Materials />
        <Gallery />
        <Blog />
        <GlobalVision />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
