/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function SkillsMarquee() {
  const items = [
    'Content Creator', '✦', 'Social Media', '✦', 'Copywriting',
    'Master of Ceremony', '✦', 'Content Writer', '✦', 'Brief Writing',
    'Content Planning', '✦', 'Video Strategy', '✦', 'Caption Writing',
  ];

  // Duplicate for infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-5 bg-navy/5 dark:bg-white/5 border-y border-slate-200/60 dark:border-slate-800/60 my-0">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />

      <div className="flex gap-8 marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default select-none shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
