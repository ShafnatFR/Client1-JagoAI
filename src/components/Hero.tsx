/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Magnetic from './Magnetic';
import StaggeredText from './StaggeredText';
import LiquidImage from './LiquidImage';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-40 pb-20 px-6 min-h-screen flex items-center">
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-[radial-gradient(circle_at_center,#2563eb_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-[1.2] text-center md:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_#2563eb]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Available for projects</span>
          </div>

          <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] text-navy dark:text-white mb-8 tracking-tighter uppercase">
            <StaggeredText text="AL-FARIZQ" delay={0.1} /> <br />
            <span className="text-gradient"><StaggeredText text="ALDINO." delay={0.6} /></span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            Professional <span className="text-navy dark:text-white font-bold">Content Creator</span>, <span className="text-navy dark:text-white font-bold">Social Media Specialist</span>, & <span className="text-blue-600 font-bold italic underline decoration-blue-200 dark:decoration-blue-900 underline-offset-8">Master of Ceremony</span> based in Jakarta.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <Magnetic>
              <a
                href="#karya"
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 glow-blue text-center text-sm uppercase tracking-widest block"
              >
                Lihat Karya Saya
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#kontak"
                className="px-10 py-5 glass text-navy dark:text-white rounded-2xl font-bold hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all text-center text-sm uppercase tracking-widest border-white dark:border-slate-800 block"
              >
                Mari Berkolaborasi
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right Side: Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center w-full max-w-md mx-auto"
        >
          <div id="profile-card" className="relative group w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative glass-card p-4 rounded-[3rem] shadow-2xl overflow-hidden aspect-[4/5] w-full flex items-center justify-center border-white dark:border-slate-800">
              <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-white/40 dark:border-slate-700/40">
                <LiquidImage
                  src="/images/profile.jpg"
                  alt="Al-Farizq Aldino"
                />
              </div>
              <div className="absolute bottom-10 left-10 right-10 glass p-6 rounded-2xl border-white dark:border-slate-800 shadow-2xl">
                <p className="font-black text-navy dark:text-white text-xl tracking-tight">AL-FARIZQ ALDINO</p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mt-1">Creator & MC</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
