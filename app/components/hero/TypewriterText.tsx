'use client';

import { useState, useEffect } from 'react';

interface Props {
  text: string;
  delay?: number;
}

export const TypewriterText = ({ text, delay = 50 }: Props) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay]);

  return (
    <span className="relative">
      {displayText}
      <span className="absolute -right-1 bg-current w-1 h-12 animate-blink" />
    </span>
  );
};