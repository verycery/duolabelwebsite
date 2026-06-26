import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Zap, Crosshair, Eye } from 'lucide-react';

export default function Technology() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const tech = [
    {
      title: "Digital Flexo Printing",
      desc: "High-speed hybrid presses delivering flawless 1200dpi resolution with perfect color consistency.",
      icon: Layers
    },
    {
      title: "Laser Die Cutting",
      desc: "Micro-precision digital cutting systems eliminating physical tooling for absolute accuracy.",
      icon: Crosshair
    },
    {
      title: "Slitter Rewinder Systems",
      desc: "Automated tension control ensuring perfectly wound rolls ready for high-speed application.",
      icon: Zap
    },
    {
      title: "Quality Vision Systems",
      desc: "Inline AI cameras inspecting 100% of labels at full press speeds to guarantee zero defects.",
      icon: Eye
    }
  ];

  return (
    <section id="technology" className="py-32 px-6 bg-[#0A0C10]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Engineering at the Atomic Level</h2>
          <p className="text-[#8B94A3] text-lg max-w-2xl mx-auto">Our facilities house the world's most advanced printing and finishing equipment, combining heavy industrial power with digital intelligence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tech.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#1A1D24] border border-[#22262F] rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 bg-[#080A0D] border border-[#22262F] rounded-xl flex items-center justify-center mb-8 group-hover:glow-blue transition-all duration-500">
                <item.icon className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#8B94A3] leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
