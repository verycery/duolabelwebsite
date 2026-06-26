import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const { t, lang } = useLang();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = Object.fromEntries(new FormData(formRef.current));
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      formRef.current?.reset();
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const inputClass = "w-full bg-[#0D1018] border border-[#22262F] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9]/20 transition-all placeholder:text-[#8B94A3]/40";
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-[#8B94A3] mb-2";

  return (
    <section id="contact" className="py-32 bg-[#080A0D] border-t border-[#22262F] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0EA5E9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0EA5E9]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header — centered */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
            <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">
              {t.contact.formHeadline}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{t.contact.headline}</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl mx-auto leading-relaxed">{t.contact.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
          {/* Left: Contact Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905533164920"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 text-white p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,211,102,0.3)] group-hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-shadow">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="block font-bold text-lg text-white">{t.contact.whatsapp}</span>
                <span className="text-[#C4CDD9]/80 text-sm">{t.contact.phoneDisplay}</span>
              </div>
            </a>

            {/* Phone */}
            <a
              href={t.contact.phoneHref}
              className="flex items-center gap-5 bg-[#1A1D24] hover:bg-[#1E2430] border border-[#22262F] hover:border-[#0EA5E9]/30 text-white p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <div>
                <span className="block font-bold text-lg text-white">{t.contact.call}</span>
                <span className="text-[#C4CDD9]/80 text-sm">{t.contact.phoneDisplay}</span>
              </div>
            </a>

            {/* Info cards */}
            <div className="bg-[#1A1D24] border border-[#22262F] rounded-2xl p-7 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/8 border border-[#0EA5E9]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#8B94A3] mb-1.5">{t.contact.email}</span>
                  <a href="mailto:info@duolabel.com" className="text-white font-semibold hover:text-[#0EA5E9] transition-colors text-sm">
                    info@duolabel.com
                  </a>
                </div>
              </div>

              <div className="h-px bg-[#22262F]" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/8 border border-[#0EA5E9]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#8B94A3] mb-1.5">{t.contact.hours}</span>
                  <span className="text-white font-semibold text-sm">{t.contact.hoursValue}</span>
                </div>
              </div>

              <div className="h-px bg-[#22262F]" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/8 border border-[#0EA5E9]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#8B94A3] mb-1.5">{t.contact.address}</span>
                  <span className="text-white font-semibold text-sm leading-relaxed">{t.contact.addressValue}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#1A1D24] border border-[#22262F] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent" />

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-[#25D366]" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h4 className="font-display text-2xl font-bold text-white mb-3">{t.contact.successMsg}</h4>
                  </motion.div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-500/8 border border-red-500/25 rounded-xl px-4 py-3.5"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <span className="text-red-400 text-sm">{t.contact.errorMsg}</span>
                    </motion.div>
                  )}

                  {/* Inquiry type */}
                  <div>
                    <label className={labelClass}>{t.contact.inquiryType}</label>
                    <select name="inquiryType" required className={`${inputClass} appearance-none cursor-pointer`}>
                      {t.contact.inquiryOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#0D1018]">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Company + Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t.contact.companyName}</label>
                      <input required name="companyName" type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.contactPerson}</label>
                      <input required name="contactPerson" type="text" className={inputClass} />
                    </div>
                  </div>

                  {/* Phone + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t.contact.phone}</label>
                      <input required name="phone" type="tel" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.emailField}</label>
                      <input required name="email" type="email" className={inputClass} />
                    </div>
                  </div>

                  {/* Industry + Label type + Quantity */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>{t.contact.industry}</label>
                      <input name="industry" type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.labelType}</label>
                      <input name="labelType" type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t.contact.quantity}</label>
                      <input name="quantity" type="text" className={inputClass} />
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label className={labelClass}>{t.contact.details}</label>
                    <textarea name="details" rows={4} className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_25px_rgba(14,165,233,0.25)] hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base mt-1"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t.contact.submit}…</span>
                      </>
                    ) : t.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full relative rounded-3xl overflow-hidden border border-[#22262F]"
          style={{ height: 380 }}
        >
          <iframe
            src={
              lang === 'en'
                ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.44806025286!2d-0.3817765!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000001!5m2!1sen!2suk"
                : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100506.04523785609!2d27.04291878124998!3d38.42322859649992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8b9!2zxLB6bWly!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            }
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.85)" }}
            allowFullScreen
            loading="lazy"
            title={lang === 'en' ? "Duo Label London Office" : "Duo Label İzmir Fabrikası"}
          />
          <div className="absolute inset-0 pointer-events-none border border-[#22262F] rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
