/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SpotlightCard from './SpotlightCard';
import ParallaxBackgroundText from './ParallaxBackgroundText';

export default function Portfolio() {
  const roles = [
    {
      id: 1,
      role: 'Content Creator',
      desc: 'Membuat konten visual dan edukatif yang menarik audiens di berbagai platform media sosial.',
      details: 'Spesialis dalam tren TikTok, Instagram Reels, dan strategi video pendek.',
      image: '/images/creator.png',
    },
    {
      id: 2,
      role: 'Content Writer',
      desc: 'Menyusun naskah dan caption yang reflektif serta relevan bagi audiens target.',
      details: 'Fokus pada storytelling, copywriting, dan penulisan naskah video kreatif.',
      image: '/images/writer.png',
    },
    {
      id: 3,
      role: 'Brief Writer',
      desc: 'Merancang kerangka kerja konten yang detail untuk memastikan produksi yang efisien.',
      details: 'Ahli dalam menyusun Content Brief, panduan visual, dan strategi kampanye.',
      image: '/images/brief.png',
    },
  ];

  return (
    <section id="karya" className="relative py-20 md:py-32 overflow-hidden">
      <ParallaxBackgroundText word="WORKS" direction="right" speed={1.5} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-24 px-5 md:px-6">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Layanan &amp; Keahlian</h2>
          <h3
            className="font-black text-navy dark:text-white uppercase tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}
          >
            Peran Profesional
          </h3>
        </div>

        {/* ── 3-column grid everywhere ── */}
        <div className="grid grid-cols-3 gap-3 md:gap-10 px-3 md:px-6 w-full">
          {roles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <SpotlightCard className="glass-card rounded-[1rem] md:rounded-[3rem] overflow-hidden border-white dark:border-slate-800 hover:shadow-2xl transition-all group h-full flex flex-col">
                {/* Card Header with Image */}
                <div className="h-20 md:h-64 relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 md:bottom-6 left-2 md:left-6 right-2 md:right-6 z-10 text-white font-black text-[7px] md:text-xl uppercase tracking-tighter glass border-white/20 px-2 md:px-5 py-1 md:py-2 rounded-md md:rounded-xl backdrop-blur-md shadow-lg leading-none">
                    Role #{item.id}
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-3 md:p-10 flex-1 flex flex-col">
                  <div className="hidden md:flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Professional Role</span>
                  </div>
                  <h4 className="text-[9px] md:text-3xl font-black text-navy dark:text-white mb-2 md:mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight uppercase tracking-tight">
                    {item.role}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[8px] md:text-lg mb-3 md:mb-8 flex-1 font-light leading-snug md:leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2 md:pt-8 border-t border-slate-100 md:border-slate-50 dark:border-slate-800 mt-auto">
                    <p className="text-[7px] md:text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider md:tracking-widest leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-none">
                      <span className="text-blue-600 mr-1 md:mr-2">Highlight:</span> {item.details}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
