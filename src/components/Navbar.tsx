/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Karya', href: '#karya' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav id="navbar" className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-2xl shadow-xl shadow-blue-900/5">
      <div className="px-6 h-16 flex items-center justify-between">
        <a href="#beranda" className="text-xl font-black tracking-tighter text-navy uppercase">
          AL-FARIZQ<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-navy transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-slate-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/90 backdrop-blur-2xl rounded-b-2xl border-t border-slate-100"
      >
        <div className="flex flex-col p-6 gap-4">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-black text-slate-400 hover:text-navy uppercase tracking-widest"
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
