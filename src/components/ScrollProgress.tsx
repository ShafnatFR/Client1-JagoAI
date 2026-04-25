/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Memberikan efek fisika sedikit pegas agar progres stabil tanpa patah-patah
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[99999] origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
      style={{ scaleX }}
    />
  );
}
