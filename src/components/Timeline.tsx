/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      title: 'ACE English (Event Organizer)',
      type: 'Internship',
      year: '2026',
      desc: 'Manajemen Platform & Evaluasi Event.',
      icon: <Briefcase size={20} />,
    },
    {
      title: 'KodingYuk (Staff Content Creator)',
      type: 'Internship',
      year: '2026',
      desc: 'Talent, Briefing, Kolaborasi (Depok).',
      icon: <Briefcase size={20} />,
    },
    {
      title: 'SINTECH (Social Media Division)',
      type: 'Internship',
      year: '2025',
      desc: 'Broadcast, Brief Konten, Evaluasi.',
      icon: <Briefcase size={20} />,
    },
  ];

  const education = [
    {
      title: 'UPN Veteran Jakarta',
      meta: 'Ilmu Komunikasi (IPK 3.87/4.00)',
      year: '2024 - Sekarang',
      desc: 'Aktif di Organisasi Protokoler (Public Speaking).',
      icon: <GraduationCap size={20} />,
      logo: '/images/universitas.png',
      logoAlt: 'Logo UPN Veteran Jakarta',
    },
    {
      title: 'SMA BPS&K 1 Jakarta',
      meta: 'Siswa Berprestasi 2024',
      year: '2021 - 2024',
      desc: 'Anggota OSIS Aktif, Peminatan IPS.',
      icon: <GraduationCap size={20} />,
      logo: '/images/sma.png',
      logoAlt: 'Logo SMA BPS&K 1 Jakarta',
    },
  ];

  const volunteer = [
    {
      title: 'Protokoler UPNVJ',
      type: 'Event Staff/PIC',
      year: '2024 - 2025',
      desc: 'Penyusun Rundown dan Usher.',
      icon: <Users size={20} />,
    },
    {
      title: 'HIMA ILKOM (Adkesma Division)',
      type: 'Internship',
      year: '2024',
      desc: 'Jembatan komunikasi mahasiswa.',
      icon: <Users size={20} />,
    },
    {
      title: 'Volunteer MC',
      type: 'Campaign/Seminar',
      year: '2024',
      desc: 'Pemandu Acara Seminar Kampus.',
      icon: <Users size={20} />,
    },
  ];

  return (
    <section id="pengalaman" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Perjalanan</h2>
          <h3 className="text-5xl md:text-6xl font-black text-navy uppercase tracking-tighter">Pendidikan & Pengalaman</h3>
        </div>

        <div className="space-y-24">
          {/* Timeline Section */}
          <EducationFlow title="Pendidikan" items={education} />
          <TimelineBlock title="Pengalaman Kerja" items={experiences} />
          <TimelineBlock title="Organisasi & Volunteer" items={volunteer} />
        </div>
      </div>
    </section>
  );
}

function EducationFlow({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="flex items-center gap-6 mb-12">
        <div className="h-px flex-1 bg-slate-200"></div>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{title}</h4>
        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <div className="relative overflow-x-auto pb-8 scrollbar-hide">
        <div className="absolute left-10 right-10 top-[52px] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="relative z-10 mx-auto flex w-max min-w-full items-stretch justify-center gap-8 px-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-[380px] shrink-0"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full glass border-white text-blue-600 shadow-lg">
                {item.icon}
              </div>

              <div className="rounded-[2.5rem] glass-card p-6 border-white hover:shadow-2xl transition-all group">
                <div className="mb-6 flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-colors">
                    {item.logo ? (
                      <img src={item.logo} alt={item.logoAlt ?? `${item.title} logo`} className="h-full w-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all" />
                    ) : (
                      <span className="px-2 text-center text-[10px] font-black uppercase tracking-widest text-slate-300">
                        N/A
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-col gap-1">
                      <h5 className="text-xl font-black leading-tight text-navy group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</h5>
                      <span className="inline-block w-fit rounded-lg bg-blue-50 border border-blue-100 px-3 py-1 text-[9px] font-black text-blue-600 uppercase tracking-widest">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
                {item.meta && <p className="text-sm font-bold text-slate-600 mb-4">{item.meta}</p>}
                <p className="text-sm text-slate-500 font-light leading-relaxed italic border-l-2 border-blue-100 pl-4">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineBlock({ title, items }: { title: string; items: any[] }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-6 mb-12">
        <div className="h-px flex-1 bg-slate-200"></div>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{title}</h4>
        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <div className="space-y-10 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-blue-200/0 before:via-blue-200 before:to-blue-200/0">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-16 group"
          >
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full glass border-white flex items-center justify-center text-slate-400 shadow-md z-20 group-hover:text-blue-600 group-hover:shadow-xl transition-all duration-500">
              {item.icon}
            </div>
            <div className="glass-card p-8 rounded-[2rem] border-white hover:shadow-2xl transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h5 className="font-black text-navy text-2xl tracking-tighter leading-tight group-hover:text-blue-600 transition-colors uppercase">{item.title}</h5>
                <span className="text-[9px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] w-fit">
                  {item.year}
                </span>
              </div>
              <div className="flex flex-col gap-1 mb-4">
                {item.meta && <p className="text-sm font-bold text-slate-700">{item.meta}</p>}
                {item.type && <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{item.type}</p>}
              </div>
              <p className="text-slate-500 text-base font-light leading-relaxed italic border-l-2 border-slate-100 pl-4">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
