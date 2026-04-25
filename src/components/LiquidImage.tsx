/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string; // Digunakan menimpa layout dari luar
}

export default function LiquidImage({ src, alt, className = '' }: LiquidImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const filterId = `liquid-filter-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Definisi Filter Vektor (Tidak Tampil Kasat Mata) */}
      <svg className="hidden absolute inset-0 z-[-1] pointer-events-none">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02" /* Pola riaknya */
              numOctaves="3"
              result="noise"
            />
            {/* Animasi membesarnya nilai distorsi akan menarik grafis utama berdasarkan noise */}
            <motion.feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              xChannelSelector="R"
              yChannelSelector="G"
              animate={{ scale: isHovered ? 25 : 0 }}
              transition={{ type: 'spring', stiffness: 50, damping: 10 }}
            />
          </filter>
        </defs>
      </svg>
      {/* Gambar Asli yang Diaplikasikan Filter */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover block origin-center"
        // Sengaja ditambahkan sedikit perbesaran saat hover agar sudut gambar tidak terlihat bolong ketika riak ditarik
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ filter: `url(#${filterId})` }}
      />
    </div>
  );
}
