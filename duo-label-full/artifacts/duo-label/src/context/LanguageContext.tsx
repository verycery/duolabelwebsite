import { createContext, useContext, useState } from "react";

type Lang = "en" | "tr";

interface Translations {
  nav: { home: string; about: string; products: string; sectors: string; support: string; blog: string; contact: string; requestQuote: string; };
  hero: { headline: string; subheadline: string; ctaWhatsapp: string; ctaCatalog: string; ctaQuote: string; };
  about: { headline: string; mission: string; bullet1title: string; bullet1body: string; bullet2title: string; bullet2body: string; bullet3title: string; bullet3body: string; bullet4title: string; bullet4body: string; };
  products: { headline: string; sub: string; categories: Array<{ name: string; usage: string; desc: string; }>; ctaTechInfo: string; ctaSample: string; ctaCatalog: string; ctaFullCatalog: string; };
  sectors: { headline: string; sub: string; items: Array<{ name: string; desc: string; gradient: string; }>; };
  techSupport: { headline: string; sub: string; services: Array<{ title: string; desc: string; }>; };
  machines: { headline: string; slitter: string; press: string; cutting: string; };
  materials: { headline: string; sub: string; };
  gallery: { headline: string; sub: string; };
  blog: { headline: string; sub: string; posts: Array<{ cat: string; title: string; excerpt: string; readMore: string; }>; };
  contact: {
    headline: string; sub: string; whatsapp: string; call: string; email: string;
    hours: string; hoursValue: string; address: string; addressValue: string;
    phoneDisplay: string; phoneHref: string;
    formHeadline: string; inquiryType: string; inquiryOptions: string[];
    companyName: string; contactPerson: string; phone: string; emailField: string;
    industry: string; labelType: string; quantity: string; details: string; submit: string; successMsg: string;
    errorMsg: string;
  };
}

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    sectors: "Sectors",
    support: "Engineering Support",
    blog: "Knowledge",
    contact: "Contact",
    requestQuote: "Request Quote",
  },

  hero: {
    headline: "Precision Label Systems for Industrial & Export Applications",
    subheadline: "Engineered adhesive label systems built for demanding environments — from high-speed production lines to cold-chain logistics, regulated pharma, and premium retail shelves.",
    ctaWhatsapp: "WhatsApp Consultation",
    ctaCatalog: "Request Catalog",
    ctaQuote: "Request a Quote",
  },

  about: {
    headline: "Engineering-Driven Label Manufacturing",
    mission: "Duo Label was established on the conviction that label systems are mission-critical manufacturing components — not commodities. Every specification is engineered to withstand real-world application stress while delivering consistent print fidelity, adhesion performance, and long-term durability across high-volume production runs.",
    bullet1title: "Long-Term Supply Partnership",
    bullet1body: "We operate as an extension of your procurement function — building material buffers, forecasting production capacity, and ensuring supply continuity for high-volume operations without compromise.",
    bullet2title: "Rapid Technical Response",
    bullet2body: "All technical enquiries receive a structured response within one business day. Emergency production capacity is held in reserve for supply-critical and time-sensitive requirements.",
    bullet3title: "Application Engineering",
    bullet3body: "From adhesive chemistry to substrate selection, our application engineers support every technical specification — ensuring the label system performs precisely as required in the field.",
    bullet4title: "Scalable Production Capacity",
    bullet4body: "From short-run prototype qualification through to full-scale continuous supply — our production facilities are engineered for volume flexibility without deviation in quality or specification.",
  },

  products: {
    headline: "Industrial Label Systems",
    sub: "A complete portfolio of engineered label substrates — each specification verified for print fidelity, adhesion performance, and long-term durability across industrial, regulated, and export applications.",
    categories: [
      {
        name: "Coated Labels",
        usage: "Food & Beverage · Retail · Consumer Goods",
        desc: "High-gloss coated paper labels with excellent print reproduction and premium shelf presence for consumer goods and export packaging.",
      },
      {
        name: "PP (Polypropylene) Labels",
        usage: "Household Chemicals · Food · Personal Care",
        desc: "Waterproof and tear-resistant labels engineered for demanding wet, wash-down, and outdoor application environments.",
      },
      {
        name: "PE (Polyethylene) Labels",
        usage: "Bottled Water · Beverages · Food",
        desc: "Flexible and durable face stock with strong adhesion performance on curved surfaces and squeezable containers.",
      },
      {
        name: "PET Labels",
        usage: "Cosmetics · Premium Branding · Industrial",
        desc: "High durability and optical clarity for premium product branding and industrial asset identification applications.",
      },
      {
        name: "BOPP Labels",
        usage: "FMCG · Retail · Industrial",
        desc: "Versatile, economical, and high-performance biaxially-oriented polypropylene substrate for high-volume label applications.",
      },
      {
        name: "Thermal Labels",
        usage: "Logistics · Healthcare · Retail POS",
        desc: "Direct thermal and thermal transfer substrates for high-speed, ink-free variable data printing in automated fulfilment environments.",
      },
      {
        name: "Barcode Labels",
        usage: "Warehouse · Inventory Management · Retail",
        desc: "High-precision barcode labels engineered for accurate tracking and reliable inventory management across full product lifecycles.",
      },
      {
        name: "Cosmetic Labels",
        usage: "Skincare · Fragrance · Personal Care",
        desc: "Beautiful, high-quality decorative substrates for cosmetic and personal care product branding — soft-touch, foil, embossed.",
      },
      {
        name: "Food Labels",
        usage: "Packaged Food · Frozen · Organic",
        desc: "Safe, durable, and food-contact compliant adhesive labels for food and beverage packaging in regulated markets.",
      },
      {
        name: "Industrial Labels",
        usage: "Manufacturing · Equipment · Safety",
        desc: "Chemical-resistant, heavy-duty substrates for equipment identification, safety compliance, and factory-floor asset marking.",
      },
    ],
    ctaTechInfo: "View Details",
    ctaSample: "Request Sample",
    ctaCatalog: "Get Catalog",
    ctaFullCatalog: "View Full Product Catalog",
  },

  sectors: {
    headline: "Industry-Specific Label Solutions",
    sub: "Purpose-engineered label systems for demanding applications across regulated, export-grade, and high-volume industrial markets.",
    items: [
      { name: "Cosmetics & Fragrance", desc: "Soft-touch laminates, hot-foil stamping, embossing, and UV varnish for premium brand identity on skincare, fragrance, and cosmetic export packaging.", gradient: "from-rose-300 via-pink-200 to-fuchsia-200" },
      { name: "Food & Packaged Goods", desc: "Food-contact compliant adhesive systems — freezer-grade, moisture-resistant, and tamper-evident configurations for regulated food processing and export markets.", gradient: "from-orange-300 via-amber-200 to-yellow-200" },
      { name: "Beverage", desc: "Wet-strength and wash-down resistant substrates for pressure-sensitive, shrink-sleeve, and wrap-around labelling on bottles, cans, and export packaging lines.", gradient: "from-sky-400 via-blue-300 to-cyan-200" },
      { name: "Logistics & Distribution", desc: "High-adhesion thermal, barcode, and compliance labels for e-commerce fulfilment, international freight, and multi-carrier distribution network requirements.", gradient: "from-slate-600 via-slate-500 to-slate-400" },
      { name: "Industrial Manufacturing", desc: "Chemical-resistant, high-temperature, and outdoor-durable substrates for asset marking, component tracking, and factory-floor identification in industrial environments.", gradient: "from-yellow-500 via-amber-400 to-orange-300" },
      { name: "Retail", desc: "High-impact shelf labels, promotional stickers, and POS ticketing with premium print finishes and adhesive performance optimised for retail fixture environments.", gradient: "from-violet-400 via-purple-300 to-indigo-300" },
      { name: "Chemicals & Hazmat", desc: "GHS-compliant hazard communication labels with solvent resistance, chemical barrier coatings, and outdoor weathering performance for regulated industrial markets.", gradient: "from-green-400 via-emerald-300 to-teal-200" },
      { name: "Healthcare & Pharma", desc: "Autoclave-resistant, sterilisation-compatible substrates for medical device identification, pharmaceutical packaging, and laboratory tracking in regulated environments.", gradient: "from-blue-200 via-cyan-100 to-white" },
    ],
  },

  techSupport: {
    headline: "Application Engineering Support",
    sub: "Our technical team integrates directly with your procurement and production departments — providing structured, documented specification support from initial concept through to continuous supply management.",
    services: [
      { title: "Label System Specification", desc: "Full-system engineering from substrate and adhesive selection through topcoat chemistry, print method, and applicator stack compatibility." },
      { title: "Applicator Compatibility", desc: "Label stack validated against your specific applicator — tension, liner stiffness, unwind, and dispensing speed confirmed before dispatch." },
      { title: "Adhesive Engineering", desc: "Permanent, removable, ultra-high-tack, food-contact, and cryogenic formulations matched to substrate, temperature range, and removal requirements." },
      { title: "Substrate Recommendation", desc: "Optimum face stock — paper, oriented film, or foil — selected based on environmental stress, regulatory classification, and print process." },
      { title: "Print Quality Assurance", desc: "Inline spectrophotometric colour verification and ISO 15416 barcode grade inspection applied continuously through each production run." },
      { title: "Supply & Account Management", desc: "Dedicated account management with rolling stock, scheduled replenishment, and documented supply chain performance reporting." },
    ],
  },

  machines: {
    headline: "Production Engineering",
    slitter: "Precision slitting systems converting large-format rolls into finished label rolls at exact width tolerances.",
    press: "Flexographic and digital hybrid printing for premium colour accuracy and surface finish performance.",
    cutting: "Die-cutting and laser-finishing for any label geometry — clean, consistent edges at production-line speeds.",
  },

  materials: {
    headline: "Material Science & Substrate Engineering",
    sub: "Every label substrate is selected through a rigorous material engineering process — matching face stock, adhesive chemistry, and liner specification to the precise demands of the application environment.",
  },

  gallery: {
    headline: "Applied Across Demanding Markets",
    sub: "From sterile pharmaceutical environments to premium export retail packaging — Duo Label systems perform consistently at the highest specification demands.",
  },

  blog: {
    headline: "Technical Knowledge Centre",
    sub: "In-depth engineering articles from our application development and material science teams — written for procurement engineers, packaging technologists, and supply chain professionals.",
    posts: [
      { cat: "Material Science", title: "Substrate Selection for Industrial Label Applications", excerpt: "A technical guide to face stock selection across paper, film, and foil substrates — evaluating tensile strength, dimensional stability, moisture resistance, and print process compatibility.", readMore: "Read Article" },
      { cat: "Adhesive Technology", title: "Industrial Adhesive Chemistry: A Practical Engineering Guide", excerpt: "Acrylic, rubber-based, hot-melt, and cryogenic formulations — understanding adhesive selection for performance across temperature extremes, chemical exposure, and substrate compatibility.", readMore: "Read Article" },
      { cat: "Comparison Guide", title: "Direct Thermal vs Thermal Transfer: Engineering the Right Choice", excerpt: "A structured technical comparison across print durability, variable data requirements, environmental operating conditions, and total cost of ownership over production lifecycle.", readMore: "Read Article" },
      { cat: "Best Practices", title: "Label Application Engineering in Manufacturing Environments", excerpt: "Proven application engineering practices for label systems in automotive, chemical processing, food production, and regulated pharmaceutical manufacturing environments.", readMore: "Read Article" },
      { cat: "Durability", title: "UV and Chemical Resistance in Industrial Label Systems", excerpt: "How UV stabilisers, chemical barrier coatings, and high-performance adhesive formulations extend functional label life in harsh outdoor and chemical processing environments.", readMore: "Read Article" },
      { cat: "Durability", title: "Engineering Labels for Extreme Environments", excerpt: "Cryogenic storage, high-heat processing, and outdoor weathering — engineering label systems that maintain adhesion, legibility, and dimensional stability at the limits of performance.", readMore: "Read Article" },
    ],
  },

  contact: {
    headline: "Initiate Your Label Project",
    sub: "Our application engineering team responds to all technical enquiries within one business day. For time-sensitive requirements, direct WhatsApp consultation is available.",
    whatsapp: "WhatsApp Direct",
    call: "Call Direct",
    email: "Send Email",
    hours: "Operating Hours",
    hoursValue: "Mon–Fri: 09:00–18:00 (GMT+3)",
    address: "UK Office",
    addressValue: "London, United Kingdom",
    phoneDisplay: "+44 7780 433977",
    phoneHref: "tel:+447780433977",
    formHeadline: "Submit a Technical Enquiry",
    inquiryType: "Enquiry Type",
    inquiryOptions: ["Price Quotation", "Technical Specification Support", "Sample Request", "Catalog Request", "Production Consultation", "Applicator Compatibility", "Urgent Production Requirement"],
    companyName: "Company / Organisation",
    contactPerson: "Technical Contact Name",
    phone: "Direct Telephone",
    emailField: "Business Email",
    industry: "Industry Sector",
    labelType: "Label Specification Required",
    quantity: "Estimated Annual Volume",
    details: "Technical Requirements / Application Details",
    submit: "Submit Enquiry",
    successMsg: "Your enquiry has been received. A technical representative will respond within one business day.",
    errorMsg: "An error occurred. Please try again or contact us directly via WhatsApp.",
  },
};

const tr: Translations = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    sectors: "Sektörler",
    support: "Teknik Destek",
    blog: "Blog",
    contact: "İletişim",
    requestQuote: "Teklif Al",
  },

  hero: {
    headline: "Premium Etiket Üretimi ve Teknik Çözümler",
    subheadline: "Her etiket uygulaması için endüstriyel hassasiyet mühendisliği. Malzeme bilimi ve dünya standartlarında üretim bir arada.",
    ctaWhatsapp: "WhatsApp'ta Yaz",
    ctaCatalog: "Katalog İste",
    ctaQuote: "Teklif Al",
  },

  about: {
    headline: "Premium Etiket Çözümleri",
    mission: "Duo Label tek bir ilke üzerine kuruldu: etiketler sadece tanımlayıcılar değil, bir marka ile tüketicisi arasındaki ilk fiziksel temas noktalarıdır. Gerçek dünya koşullarına dayanıklı, dikkat çekici baskı kalitesiyle her etiketi mühendislik disipliniyle üretiyoruz.",
    bullet1title: "Uzun Vadeli Ortaklıklar",
    bullet1body: "İşlem değil, ilişki inşa ediyoruz. Müşterilerimiz beklentilerin ötesinde tutarlı teslimat nedeniyle geri dönüyor.",
    bullet2title: "Hızlı Yanıt",
    bullet2body: "Ekibimiz her soruya 24 saat içinde yanıt verir. Kritik ihtiyaçlar için acil üretim slotları her zaman mevcuttur.",
    bullet3title: "Teknik Danışmanlık",
    bullet3body: "Yapıştırıcı seçiminden malzeme spesifikasyonuna kadar her teknik kararda mühendislerimiz yanınızda.",
    bullet4title: "Üretim Esnekliği",
    bullet4body: "500 etiket ya da 50 milyon — tesislerimiz kaliteden taviz vermeksizin her hacme uyum sağlar.",
  },

  products: {
    headline: "Etiket Portföyümüz",
    sub: "Gıda sınıfından endüstriyel sınıfa kadar her materyal; performans, dayanıklılık ve baskı kalitesi için titizlikle test edilmiştir.",
    categories: [
      {
        name: "Kuşe Etiket",
        usage: "Gıda, İçecek, Perakende, Tüketici Ürünleri",
        desc: "Tüketici ürünleri ve ihracat ambalajları için mükemmel baskı kalitesi ve premium raf varlığı sağlayan parlak kuşe kağıt etiket.",
      },
      {
        name: "PP (Polipropilen) Etiket",
        usage: "Ev Kimyasalları, Gıda, Kişisel Bakım",
        desc: "Zorlu ıslak, yıkama ve dış ortam uygulamaları için tasarlanmış su geçirmez ve yırtılmaz etiket.",
      },
      {
        name: "PE (Polietilen) Etiket",
        usage: "Şişeli Su, İçecek, Gıda",
        desc: "Eğri yüzeyler ve sıkılabilir kaplarda güçlü yapışma performansıyla esnek ve dayanıklı yüz malzemesi.",
      },
      {
        name: "PET Etiket",
        usage: "Kozmetik, Premium Marka, Endüstriyel",
        desc: "Premium ürün markalaması ve endüstriyel varlık tanımlama uygulamaları için yüksek dayanıklılık ve optik berraklık.",
      },
      {
        name: "BOPP Etiket",
        usage: "Hızlı Tüketim, Perakende, Endüstriyel",
        desc: "Yüksek hacimli etiket uygulamaları için çok yönlü, ekonomik ve yüksek performanslı iki eksenli yönlendirilmiş PP substratı.",
      },
      {
        name: "Termal Etiket",
        usage: "Lojistik, Sağlık, Perakende POS",
        desc: "Otomatik sipariş karşılama ortamlarında mürekkepsiz, yüksek hızlı değişken veri baskısı için termal ve termal transfer substratları.",
      },
      {
        name: "Barkod Etiket",
        usage: "Depolama, Envanter Yönetimi, Perakende",
        desc: "Ürün yaşam döngüsü boyunca doğru takip ve güvenilir envanter yönetimi için yüksek hassasiyetli barkod etiketleri.",
      },
      {
        name: "Kozmetik Etiket",
        usage: "Cilt Bakımı, Parfüm, Kişisel Bakım",
        desc: "Kozmetik ve kişisel bakım ürünü markalaması için güzel, yüksek kaliteli dekoratif substratlar — soft-touch, folyo, kabartma.",
      },
      {
        name: "Gıda Etiketleri",
        usage: "Paketli Gıda, Dondurulmuş, Organik",
        desc: "Düzenlenmiş pazarlarda gıda ve içecek ambalajı için güvenli, dayanıklı ve gıda temasına uygun yapıştırıcı etiketler.",
      },
      {
        name: "Endüstriyel Etiket",
        usage: "Üretim, Ekipman, Güvenlik",
        desc: "Ekipman tanımlama, güvenlik uyumluluğu ve fabrika alanı varlık işaretlemesi için kimyasala dayanıklı, ağır hizmet substratları.",
      },
    ],
    ctaTechInfo: "Detayları Gör",
    ctaSample: "Numune İste",
    ctaCatalog: "Katalog Al",
    ctaFullCatalog: "Tam Ürün Kataloğunu Görüntüle",
  },

  sectors: {
    headline: "Hizmet Verdiğimiz Sektörler",
    sub: "Kozmetikten soğuk zincire — Duo Label her sektör için profesyonel etiket çözümleri sunar.",
    items: [
      { name: "Kozmetik & Parfüm", desc: "Cilt bakımı, makyaj ve parfüm için soft-touch laminasyon, sıcak folyo baskı, kabartma ve UV vernik ile premium marka kimliği.", gradient: "from-rose-300 via-pink-200 to-fuchsia-200" },
      { name: "Gıda & Paketli Ürünler", desc: "Düzenlenmiş gıda pazarları için gıda temasına uygun yapıştırıcı sistemleri — dondurucuya dayanıklı, nem dirençli ve açılmaz kapak konfigürasyonları.", gradient: "from-orange-300 via-amber-200 to-yellow-200" },
      { name: "İçecek", desc: "Şişe, kutu ve ihracat ambalaj hatlarında basınca duyarlı, shrink-sleeve ve wrap-around etiketleme için ıslak mukavemetli substratlar.", gradient: "from-sky-400 via-blue-300 to-cyan-200" },
      { name: "Lojistik & Dağıtım", desc: "E-ticaret, uluslararası kargo ve çoklu taşıyıcı dağıtım ağları için yüksek yapışma özellikli termal, barkod ve uyum etiketleri.", gradient: "from-slate-600 via-slate-500 to-slate-400" },
      { name: "Endüstriyel Üretim", desc: "Varlık işaretleme, bileşen takibi ve fabrika alanı tanımlaması için kimyasallara dayanıklı, yüksek sıcaklık ve dış mekan substratları.", gradient: "from-yellow-500 via-amber-400 to-orange-300" },
      { name: "Perakende", desc: "Perakende raf ortamları için optimize edilmiş premium baskı yüzeyleri ve yapıştırıcı performansıyla yüksek etkili raf etiketleri ve POS fiyat etiketleri.", gradient: "from-violet-400 via-purple-300 to-indigo-300" },
      { name: "Kimya & Tehlikeli Maddeler", desc: "Düzenlenmiş endüstriyel pazarlar için solvent direnci, kimyasal bariyer kaplamalar ve dış hava dayanımıyla GHS uyumlu tehlike iletişim etiketleri.", gradient: "from-green-400 via-emerald-300 to-teal-200" },
      { name: "Sağlık & İlaç", desc: "Tıbbi cihaz tanımlama, farmasötik ambalajlama ve laboratuvar takibi için otoklav dirençli, sterilizasyon uyumlu substratlar.", gradient: "from-blue-200 via-cyan-100 to-white" },
    ],
  },

  techSupport: {
    headline: "Üretimin Ötesinde — Teknik Ortaklık",
    sub: "Mühendislik ekibimiz satın alma ve üretim departmanlarınızla doğrudan entegre olur — ilk konseptten sürekli tedarik yönetimine kadar yapılandırılmış, belgelenmiş spesifikasyon desteği sağlar.",
    services: [
      { title: "Etiket Sistemi Spesifikasyonu", desc: "Substrat ve yapıştırıcı seçiminden üst kaplama kimyası, baskı yöntemi ve aplikatör yığını uyumluluğuna kadar tam mühendislik desteği." },
      { title: "Aplikatör Uyumluluğu", desc: "Etiket yığını performansı teslimat öncesi özel aplikatör ekipmanınızla doğrulanır — gerginlik, astar sertliği, sarım ve dağıtım hızı test edilir." },
      { title: "Yapıştırıcı Mühendisliği", desc: "Kalıcı, çıkarılabilir, ultra yüksek yapışma, gıda temasına uygun ve kriyojenik formülasyonlar — substrat, sıcaklık aralığı ve çıkarma gereksinimlerine göre eşleştirilir." },
      { title: "Substrat Önerileri", desc: "Çevresel stres, yasal sınıflandırma ve baskı sürecine göre optimum yüz malzemesi — kağıt, yönlendirilmiş film veya folyo — seçilir." },
      { title: "Baskı Kalitesi Güvencesi", desc: "Her üretim boyunca sürekli satır içi spektrofotometrik renk doğrulaması ve ISO 15416 barkod sınıfı incelemesi uygulanır." },
      { title: "Tedarik & Hesap Yönetimi", desc: "Stok mevcudiyeti, planlı yenileme döngüleri ve belgelenmiş tedarik zinciri performans raporlamasıyla özel hesap yönetimi." },
    ],
  },

  machines: {
    headline: "Hassasiyetin Arkasındaki Makineler",
    slitter: "Büyük ruloları kesin genişliklerde bitmiş etiket rulolarına dönüştürmek için hassas dilme sistemleri.",
    press: "Premium renk doğruluğu ve yüzey kalitesi için fleksografik ve dijital hibrit baskı.",
    cutting: "Temiz ve tutarlı kenarlarla her etiket şekli için kalıp kesim ve lazer bitirme hatları.",
  },

  materials: {
    headline: "Her Materyal Bilinçle Seçildi",
    sub: "Kriyojenik depolamadan açık hava maruziyetine kadar materyal bilim ekibimiz uygulamanız için doğru yüz malzemesi ve yapıştırıcıyı seçer.",
  },

  gallery: {
    headline: "Sektör Liderlerinin Tercihi",
    sub: "Steril tıbbi ortamlardan premium perakende raflarına — etiketlerimiz en yüksek spesifikasyon taleplerinde tutarlı performans gösteriyor.",
  },

  blog: {
    headline: "Bilgi Merkezi",
    sub: "Uygulama geliştirme ve malzeme bilimi ekiplerimizden derinlemesine mühendislik makaleleri.",
    posts: [
      { cat: "Malzeme Bilimi", title: "Endüstriyel Etiket Uygulamaları İçin Substrat Seçimi", excerpt: "Kağıt, film ve folyo substratlarında yüz malzemesi seçimine teknik rehber — çekme mukavemeti, boyutsal kararlılık, nem direnci ve baskı uyumluluğu değerlendirmesi.", readMore: "Makaleyi Oku" },
      { cat: "Yapıştırıcı Teknolojisi", title: "Endüstriyel Yapıştırıcı Kimyası: Pratik Mühendislik Rehberi", excerpt: "Akrilik, kauçuk bazlı, sıcak eriyik ve kriyojenik formülasyonlar — sıcaklık aşırılıkları, kimyasal maruziyet ve substrat uyumluluğunda performans için yapıştırıcı seçimini anlama.", readMore: "Makaleyi Oku" },
      { cat: "Karşılaştırma Rehberi", title: "Direkt Termal ve Termal Transfer: Doğru Tercihi Yapmak", excerpt: "Baskı dayanıklılığı, değişken veri gereksinimleri, çevresel çalışma koşulları ve üretim yaşam döngüsü üzerinden toplam sahip olma maliyeti karşılaştırması.", readMore: "Makaleyi Oku" },
      { cat: "En İyi Uygulamalar", title: "Üretim Ortamlarında Etiket Uygulama Mühendisliği", excerpt: "Otomotiv, kimyasal işleme, gıda üretimi ve düzenlenmiş farmasötik üretim ortamlarında etiket sistemleri için kanıtlanmış uygulama mühendisliği uygulamaları.", readMore: "Makaleyi Oku" },
      { cat: "Dayanıklılık", title: "Endüstriyel Etiket Sistemlerinde UV ve Kimyasal Direnç", excerpt: "UV stabilizörleri, kimyasal bariyer kaplamalar ve yüksek performanslı yapıştırıcı formülasyonları zorlu ortamlarda etiket ömrünü nasıl uzatır.", readMore: "Makaleyi Oku" },
      { cat: "Dayanıklılık", title: "Aşırı Ortamlar İçin Etiket Mühendisliği", excerpt: "Kriyojenik depolama, yüksek ısı işleme ve dış mekan dayanımı — performansın sınırlarında yapışma, okunabilirlik ve boyutsal kararlılığı koruyan etiket sistemleri.", readMore: "Makaleyi Oku" },
    ],
  },

  contact: {
    headline: "Projenize Bugün Başlayın",
    sub: "Ekibimiz 24 saat içinde yanıt verir. Acil ihtiyaçlar için WhatsApp en hızlı yanıtı sağlar.",
    whatsapp: "WhatsApp'ta Yaz",
    call: "Hemen Ara",
    email: "E-posta Gönder",
    hours: "Çalışma Saatleri",
    hoursValue: "Pzt–Cum: 09:00–18:00 (GMT+3)",
    address: "Konum",
    addressValue: "Koşukavak Mah. 4213 Sk. No:8A, Bornova / İzmir",
    phoneDisplay: "+90 553 316 49 20",
    phoneHref: "tel:+905533164920",
    formHeadline: "Talep Gönderin",
    inquiryType: "Talep Türü",
    inquiryOptions: ["Fiyat Teklifi", "Katalog Talebi", "Teknik Destek", "Üretim Danışmanlığı", "Numune Talebi", "Acil Üretim", "Makine Uyumluluğu Sorusu"],
    companyName: "Şirket Adı",
    contactPerson: "İlgili Kişi",
    phone: "Telefon Numarası",
    emailField: "E-posta Adresi",
    industry: "Sektör",
    labelType: "İhtiyaç Duyulan Etiket Türü",
    quantity: "Tahmini Yıllık Miktar",
    details: "Teknik Detaylar / Notlar",
    submit: "Talebi Gönder",
    successMsg: "Talebiniz iletildi. 24 saat içinde yanıt vereceğiz.",
    errorMsg: "Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden yazın.",
  },
};

const translations = { en, tr };

export const LanguageContext = createContext<{ lang: Lang; t: Translations; setLang: (l: Lang) => void }>({ lang: "tr", t: tr, setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");
  return <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
