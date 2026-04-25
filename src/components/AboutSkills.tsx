/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BadgeCheck, Layers3, Sparkles, Wrench } from 'lucide-react';
import { IoLogoMicrosoft } from 'react-icons/io5';
import { SiCanva, SiInstagram, SiYoutube, SiTiktok, SiGoogledocs, SiGooglesheets } from 'react-icons/si';

export default function AboutSkills() {
  const softSkills = ['Komunikatif', 'Manajemen Waktu', 'Adaptasi', 'Groupwork'];
  const specializations = ['Content Planning', 'Content Writer', 'Copywriting', 'Caption Writer', 'Content Talent'];
  const tools = [
    { name: 'Canva', icon: SiCanva, color: 'text-[#00C4CC]' },
    { name: 'YouTube', icon: SiYoutube, color: 'text-[#FF0000]' },
    { name: 'Instagram', icon: SiInstagram, color: 'text-[#E4405F]' },
    { name: 'TikTok', icon: SiTiktok, color: 'text-slate-900' },
    { name: 'Google Docs', icon: SiGoogledocs, color: 'text-[#4285F4]' },
    { name: 'Microsoft Office', icon: IoLogoMicrosoft, color: 'text-[#F25022]' },
    { name: 'Google Sheets', icon: SiGooglesheets, color: 'text-[#0F9D58]' },
  ];

  const skillGroups = [
    {
      title: 'Soft Skills',
      description: 'Cara saya bekerja, berkomunikasi, dan menjaga ritme kolaborasi.',
      icon: Sparkles,
      items: softSkills,
      tone: 'from-slate-50 to-white',
      badgeClass: 'border-slate-200 bg-white/90 text-slate-700',
    },
    {
      title: 'Spesialisasi',
      description: 'Fokus utama yang sering saya pakai untuk membuat konten dan kampanye.',
      icon: Layers3,
      items: specializations,
      tone: 'from-blue-50 to-white',
      badgeClass: 'border-blue-100 bg-blue-50/90 text-blue-700',
    },
  ];

  return (
    <section id="tentang" className="relative overflow-hidden py-32 px-6 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent">
      <div className="relative max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] glass-card p-8 sm:p-16 border-white shadow-2xl shadow-blue-900/5"
          >
            {/* Animated Glow Ornaments */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border-white shadow-sm">
                <BadgeCheck className="h-4 w-4" />
                Tentang Saya
              </div>

              <h3 className="mt-8 max-w-3xl text-5xl font-black tracking-tight text-navy sm:text-7xl leading-[1.1] uppercase">
                Muda, <span className="text-blue-600 italic">Energik</span>, & Fokus pada Hasil Rapi.
              </h3>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-500 font-light">
                Mahasiswa Ilmu Komunikasi <span className="text-navy font-bold">UPN "Veteran" Jakarta</span> angkatan 2024. Fokus pada komunikasi,
                pembuatan konten, dan kolaborasi strategis dengan pendekatan yang profesional.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {[
                  ['Komunikasi', 'Pesan jelas & relevan.'],
                  ['Kolaborasi', 'Adaptasi ritme cepat.'],
                  ['Konten', 'Ide jadi visual menarik.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-3xl glass p-6 border-white hover:shadow-lg transition-all group">
                    <p className="text-sm font-black text-navy uppercase tracking-widest">{title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-600 transition-colors">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skill Groups */}
          <div className="grid gap-8 lg:grid-cols-2">
            {skillGroups.map(({ title, description, icon: Icon, items }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] glass-card p-8 sm:p-10 border-white hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl shadow-blue-900/5 group-hover:scale-110 transition-transform border border-slate-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-2xl font-black text-navy uppercase tracking-tight">{title}</h4>
                    <p className="mt-2 text-base leading-relaxed text-slate-400 font-light">{description}</p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {items.map((item) => (
                        <span key={item} className="rounded-xl glass px-4 py-2 text-[10px] font-black text-slate-600 border-white hover:text-blue-600 transition-colors uppercase tracking-widest">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] glass-card p-8 sm:p-12 border-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white mx-auto md:mx-0 mb-6 shadow-xl">
                  <Wrench className="h-7 w-7" />
                </div>
                <h4 className="text-3xl font-black text-navy uppercase tracking-tighter">Tools & Tech</h4>
                <p className="mt-3 text-lg text-slate-400 font-light max-w-sm">Aplikasi andalan untuk produksi konten & efisiensi kerja digital.</p>
              </div>

              <div className="flex-[2] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
                {tools.map(({ name, icon: ToolIcon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl glass p-4 border-white hover:shadow-md hover:scale-105 transition-all group aspect-square"
                  >
                    <ToolIcon className={`h-8 w-8 ${color} filter grayscale group-hover:grayscale-0 transition-all`} />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-navy">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
