'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';

interface HeroMessage {
  title: string;
  subtitle: string;
}

interface HeroSimpleProps {
  /** Main icon displayed at the top of the hero section */
  icon?: React.ReactNode;
  /** Call-to-action click handler */
  onCtaClick: () => void;
  /** Optional feature list with icons */
  features?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  /** Visual style variant */
  variant?: 'default' | 'gradient' | 'minimal';
  /** Content alignment */
  alignment?: 'center' | 'left';
}

const HeroSimple = React.memo(({
  icon,
  onCtaClick,
  features = [],
  variant = 'default',
  alignment = 'center',
}: HeroSimpleProps) => {
  const { t } = useLanguage();
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = t('hero_messages') as HeroMessage[];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  // Style variants
  const variants = {
    default: 'bg-dark text-white',
    gradient: 'bg-gradient-to-br from-primary to-accent text-white',
    minimal: 'bg-white text-dark',
  };

  // Container alignment
  const alignmentStyles = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  // Animation variants
  const textAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      className={cn(
        'flex flex-col px-4 py-16 md:py-24 lg:py-32',
        variants[variant],
        alignmentStyles[alignment]
      )}
      aria-labelledby="hero-title"
    >
      {/* Icon */}
      {icon && (
        <div className="mb-8 text-primary-light">
          {icon}
        </div>
      )}

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={messageIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={textAnimations}
          transition={{ duration: 0.5 }}
        >
          <h1
            id="hero-title"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-6"
          >
            {messages[messageIndex].title}
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-90 text-center">
            {messages[messageIndex].subtitle}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* CTA Button */}
      <button
        onClick={onCtaClick}
        className={cn(
          'font-sans font-semibold px-8 py-4 rounded-lg transition-colors',
          'text-lg md:text-xl',
          variant === 'minimal'
            ? 'bg-primary text-white hover:bg-primary-light'
            : 'bg-white text-dark hover:bg-accent-light hover:text-dark'
        )}
        aria-label={t('cta')}
      >
        {t('cta')}
      </button>

      {/* Features Grid */}
      {features.length > 0 && (
        <div className={cn(
          'grid gap-6 mt-16',
          'grid-cols-1 md:grid-cols-2',
          alignment === 'center' ? 'justify-items-center' : 'justify-items-start'
        )}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div className="text-primary-light">
                {feature.icon}
              </div>
              <span className="font-medium">
                {t(`features.${feature.text.toLowerCase().replace(/ /g, '_')}`)}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
});

HeroSimple.displayName = 'HeroSimple';

export default HeroSimple;