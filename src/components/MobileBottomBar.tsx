/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const tabs = [
  { id: 'beranda',    label: 'Beranda',    icon: Home },
  { id: 'tentang',   label: 'Tentang',    icon: User },
  { id: 'pengalaman',label: 'Perjalanan', icon: Briefcase },
  { id: 'karya',     label: 'Karya',      icon: FolderOpen },
  { id: 'kontak',    label: 'Kontak',     icon: Mail },
];

export default function MobileBottomBar() {
  const [active, setActive] = useState('beranda');

  // ScrollSpy: update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      for (let i = tabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabs[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActive(tabs[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* Only visible on mobile (md:hidden) */
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-sm">
      <div className="glass rounded-[1.5rem] shadow-2xl shadow-blue-900/20 border border-white/60 dark:border-slate-800/60">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                aria-label={label}
                className="relative flex flex-col items-center justify-center gap-0.5 px-3 py-2 rounded-xl transition-all active:scale-90"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="bottom-pill"
                      className="absolute inset-0 bg-blue-600 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                <Icon
                  size={18}
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'
                  }`}
                />
                <span
                  className={`relative z-10 text-[9px] font-black uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
