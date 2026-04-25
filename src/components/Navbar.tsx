/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Karya', href: '#karya' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav id="navbar" className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-2xl shadow-xl shadow-blue-900/5 dark:shadow-blue-900/20">
      <div className="px-6 h-16 flex items-center justify-between">
        <a href="#beranda" className="text-xl font-black tracking-tighter text-navy dark:text-white uppercase">
          AL-FARIZQ<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu & Toggle */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-navy dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-navy dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            id="mobile-menu-toggle"
            className="p-2 text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-b-2xl border-t border-slate-100 dark:border-slate-800"
      >
        <div className="flex flex-col p-6 gap-4">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-black text-slate-400 hover:text-navy dark:hover:text-white uppercase tracking-widest transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
