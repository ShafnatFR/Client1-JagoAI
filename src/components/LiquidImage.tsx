/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LiquidImage({ src, alt, className = '' }: LiquidImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  // Disable liquid distortion on touch devices (gyroscope / no hover)
  const [isTouch, setIsTouch] = useState(false);
  const filterId = `liquid-filter-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  // On touch: render bare img, no SVG filter overhead
  if (isTouch) {
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover block" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG liquid filter — only loaded on non-touch (desktop) */}
      <svg className="hidden absolute inset-0 z-[-1] pointer-events-none">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
            />
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

      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover block origin-center"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ filter: `url(#${filterId})` }}
      />
    </div>
  );
}
