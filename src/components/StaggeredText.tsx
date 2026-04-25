/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function StaggeredText({ text, className = '', delay = 0 }: StaggeredTextProps) {
  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  // Variants for each letter
  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span variants={childVariants} key={`${wordIndex}-${charIndex}`} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
