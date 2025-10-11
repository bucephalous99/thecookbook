'use client';

import Image from 'next/image';
import { HeroTemplate } from './types';
import './animations.css';

interface Props {
  template: HeroTemplate;
}

export const ImageContainer = ({ template }: Props) => {
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
      case 'float':
        return `float-animation-${index + 1}`;
      default:
        return '';
    }
  };

  const getImageStyles = (position: string) => {
    const baseStyles = 'absolute w-16 h-16 md:w-24 md:h-24 transition-all duration-500';
    switch (position) {
      case 'top-left':
        return `${baseStyles} top-0 left-0`;
      case 'top-right':
        return `${baseStyles} top-0 right-0`;
      case 'bottom-left':
        return `${baseStyles} bottom-0 left-0`;
      case 'bottom-right':
        return `${baseStyles} bottom-0 right-0`;
      default:
        return baseStyles;
    }
  };

  return (
    <div className="relative h-64 w-full max-w-2xl mx-auto">
      {template.animation === 'network' && (
        <svg className="absolute inset-0 w-full h-full">
          <line x1="20%" y1="20%" x2="80%" y2="20%" className="network-line" stroke="currentColor" strokeWidth="2"/>
          <line x1="80%" y1="20%" x2="80%" y2="80%" className="network-line" stroke="currentColor" strokeWidth="2"/>
          <line x1="80%" y1="80%" x2="20%" y2="80%" className="network-line" stroke="currentColor" strokeWidth="2"/>
          <line x1="20%" y1="80%" x2="20%" y2="20%" className="network-line" stroke="currentColor" strokeWidth="2"/>
          <line x1="20%" y1="20%" x2="80%" y2="80%" className="network-line" stroke="currentColor" strokeWidth="2"/>
          <line x1="20%" y1="80%" x2="80%" y2="20%" className="network-line" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )}

      {template.images.map((image, index) => (
        <div
          key={image.src}
          className={`${getImageStyles(image.position)} ${getAnimationClass(index)}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 64px, 96px"
          />
        </div>
      ))}
    </div>
  );
};