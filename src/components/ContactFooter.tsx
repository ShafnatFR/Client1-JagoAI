/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="relative overflow-hidden pt-20 md:pt-32 pb-16 bg-navy selection:bg-blue-500/30 selection:text-white">
      {/* Decorative Ornaments for Dark Section */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="font-black text-white uppercase tracking-tighter mb-6 md:mb-8 italic" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>Let's Work Together</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
              Tertarik untuk berkolaborasi? Mari ciptakan sesuatu yang <span className="text-blue-500 font-bold italic">luar biasa</span> bersama!
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto px-2 md:px-0">
            <ContactCard 
              href="https://wa.me/628987105605" 
              icon={<MessageCircle className="w-5 h-5 md:w-7 md:h-7" />} 
              label="WhatsApp" 
              value="+62 8987 105 605" 
            />
            <ContactCard 
              href="mailto:alfarizq312115@gmail.com" 
              icon={<Mail className="w-5 h-5 md:w-7 md:h-7" />} 
              label="Email" 
              value="alfarizq312115@gmail.com" 
            />
            <ContactCard 
              href="https://instagram.com/alfzq1" 
              icon={<Instagram className="w-5 h-5 md:w-7 md:h-7" />} 
              label="Instagram" 
              value="@alfzq1" 
            />
          </div>

          <div className="mt-20 md:mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-3xl font-black tracking-tighter text-white uppercase">AL-FARIZQ<span className="text-blue-500">.</span></p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Content Creator & MC</p>
            </div>
            
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
              &copy; {currentYear} Al-Farizq Aldino. Handcrafted for excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactCard({ href, icon, label, value }: { href: string; icon: any; label: string; value: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl p-3 md:p-10 rounded-[1.25rem] md:rounded-[2.5rem] flex flex-col items-center text-center border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group shadow-2xl justify-center"
    >
      <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center mb-3 md:mb-6 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform text-white">
        {icon}
      </div>
      <p className="text-[7px] md:text-[10px] font-black uppercase tracking-wider md:tracking-[0.3em] text-slate-500 mb-1 md:mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">{label}</p>
      <p className="font-bold text-[8px] md:text-lg text-white tracking-tight break-words max-w-full truncate md:whitespace-normal">{value}</p>
    </motion.a>
  );
}
