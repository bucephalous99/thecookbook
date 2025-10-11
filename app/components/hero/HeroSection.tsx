'use client';

import { useTemplateRotator } from './useTemplateRotator';
import { ImageContainer } from './ImageContainer';
import { TemplateIndicators } from './TemplateIndicators';
import { TypewriterText } from './TypewriterText';
import './animations.css';

interface Props {
  onBookCall: () => void;
}

export const HeroSection = ({ onBookCall }: Props) => {
  const { currentTemplate, setCurrentTemplate, template, isPlaying, setIsPlaying } = useTemplateRotator();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${template.gradient} transition-all duration-1000`}
      />

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center relative">
          {/* Main text with typewriter effect */}
          <h1 className={`text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r ${template.textGradient} bg-clip-text text-transparent transition-all duration-500`}>
            <TypewriterText text={template.mainText} />
          </h1>

          {/* Subtext */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto">
            {template.subText}
          </p>

          {/* Images with animation */}
          <ImageContainer template={template} />

          {/* CTA Button */}
          <button
            onClick={onBookCall}
            className="mt-12 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-gray-900 font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[0_0_60px_rgba(20,184,166,0.5)]"
          >
            Quiero Mi Consultoría Gratis
          </button>
        </div>
      </div>

      {/* Template indicators */}
      <TemplateIndicators
        current={currentTemplate}
        total={6}
        onClick={(index) => {
          setCurrentTemplate(index);
          setIsPlaying(false);
          setTimeout(() => setIsPlaying(true), 6000);
        }}
      />

      {/* Pause/Play button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 text-white/70 hover:text-white transition-colors"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </section>
  );
};