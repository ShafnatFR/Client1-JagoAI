/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxBackgroundTextProps {
  word: string;
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export default function ParallaxBackgroundText({
  word,
  speed = 1,
  direction = 'up',
  className = '',
}: ParallaxBackgroundTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const generateTransform = () => {
    switch (direction) {
      case 'left':
        return { x: useTransform(scrollYProgress, [0, 1], [0, -200 * speed]) };
      case 'right':
        return { x: useTransform(scrollYProgress, [0, 1], [0, 200 * speed]) };
      case 'up':
        return { y: useTransform(scrollYProgress, [0, 1], [0, -200 * speed]) };
      case 'down':
        return { y: useTransform(scrollYProgress, [0, 1], [0, 200 * speed]) };
      default:
        return { y: useTransform(scrollYProgress, [0, 1], [0, -200 * speed]) };
    }
  };

  const transformStyle = generateTransform();

  return (
    <div
      ref={ref}
      className={`absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-20 dark:opacity-[0.05] ${className}`}
    >
      <motion.span
        style={{
          ...transformStyle,
          WebkitTextStroke: '2px currentColor',
          color: 'transparent',
        }}
        className="text-[150px] md:text-[300px] font-black uppercase tracking-tighter whitespace-nowrap text-slate-800 dark:text-slate-400 select-none"
      >
        {word}
      </motion.span>
    </div>
  );
}
