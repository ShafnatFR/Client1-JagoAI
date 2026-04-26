/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('preloader-shown')) {
      setDone(true);
      return;
    }

    const start = performance.now();
    const duration = 1800; // ms

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem('preloader-shown', '1');
        }, 300);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-navy"
        >
          {/* Glow blob */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Logo */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-black tracking-tighter text-white uppercase"
            >
              AL-FARIZQ<span className="text-blue-500">.</span>
            </motion.p>

            {/* Counter */}
            <motion.span
              key={progress}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              className="text-[80px] font-black text-white/10 leading-none tabular-nums select-none"
            >
              {String(progress).padStart(3, '0')}
            </motion.span>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
              Loading Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
