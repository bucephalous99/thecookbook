'use client';

import Image from 'next/image';
import { HeroTemplate } from './types';
import './animations.css';

interface Props {
  template: HeroTemplate;
}

export const ImageContainer = ({ template }: Props) => {
  const getImagePositionClass = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'left-[20%] top-[20%]';
      case 'top-right':
        return 'right-[20%] top-[20%]';
      case 'bottom-left':
        return 'left-[20%] bottom-[20%]';
      case 'bottom-right':
        return 'right-[20%] bottom-[20%]';
      default:
        return '';
    }
  };

  const getAnimationClass = (index: number) => {
    switch (template.animation) {
      case 'orbital':
        return `orbital-animation-${index + 1}`;
      case 'pulse':
        return 'pulse-animation';
      case 'build':
        return `build-animation-${index + 1}`;
      case 'heart':
        return `heart-animation-${index + 1}`;
      case 'network':
        return '';
      case 'float':
        return `float-animation-${index + 1}`;
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full h-64 md:h-80">
      {/* Network lines (rendered first for z-index) */}
      {template.animation === 'network' && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="25%" y1="25%" x2="75%" y2="25%"
            className="network-line"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
          />
          <line
            x1="75%" y1="25%" x2="75%" y2="75%"
            className="network-line"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
          />
          <line
            x1="75%" y1="75%" x2="25%" y2="75%"
            className="network-line"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
          />
          <line
            x1="25%" y1="75%" x2="25%" y2="25%"
            className="network-line"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
          />
          <line
            x1="25%" y1="25%" x2="75%" y2="75%"
            className="network-line"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
          />
          <line
            x1="75%" y1="25%" x2="25%" y2="75%"
            className="network-line"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
          />
        </svg>
      )}

      {/* Images */}
      {template.images.map((img, index) => (
        <div
          key={`${template.id}-${index}`}
          className={`
            absolute w-16 h-16 md:w-20 md:h-20
            ${getImagePositionClass(img.position)}
            transition-all duration-500 ease-out
            ${getAnimationClass(index)}
          `}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className={`
              object-contain
              rounded-xl
              ${template.animation === 'network' ? 'bg-white/5 p-2' : ''}
              ${template.animation === 'pulse' ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : ''}
            `}
            sizes="(max-width: 768px) 64px, 80px"
            quality={90}
          />
        </div>
      ))}
    </div>
  );
};