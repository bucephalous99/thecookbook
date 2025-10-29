'use client';

import { useState } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import Countdown from './components/Countdown';
import PreRegisterModal from './components/PreRegisterModal';

export default function Home() {
  const [preRegisterOpen, setPreRegisterOpen] = useState(false);
  const launchDate = new Date('2026-01-05T00:00:00');

  return (
    <div className="min-h-screen relative bg-black">
      {/* FaultyTerminal Background */}
      <div className="fixed inset-0 z-0">
        <FaultyTerminal
          brightness={0.12}
          scanlineIntensity={0.08}
          glitchAmount={0.2}
          flickerAmount={0.15}
          noiseAmp={0.4}
          curvature={0}
          tint="#7E8D68"
          mouseReact={true}
          mouseStrength={0.08}
          pageLoadAnimation={true}
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none py-20">
        <div className="text-center px-6 max-w-6xl mx-auto">
          {/* Decorative Frame - Top */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 border border-white/10 rounded-full blur-sm animate-pulse-slow pointer-events-none" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 border border-white/5 rounded-full pointer-events-none" />

          {/* Title Hierarchy - Following Design Standards */}
          <div className="mb-20">
            {/* Main Title with proper glow */}
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-3xl bg-white/10 rounded-full" />
              <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tight leading-none">
                The CookBook
              </h1>
            </div>

            {/* Decorative separator with proper spacing */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Tagline - Primary descriptor */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white/90 mb-4 tracking-wide">
              System and Software Solutions
            </h2>

            {/* Subtitle - Secondary descriptor with proper hierarchy */}
            <p className="text-base sm:text-lg md:text-xl text-white/60 font-sans tracking-wide max-w-2xl mx-auto">
              AI Automation Labs
            </p>
          </div>

          {/* Coming Soon Badge - Proper spacing from system */}
          <div className="inline-block mb-24 px-8 py-3 border border-white/30 rounded-full backdrop-blur-sm bg-white/5">
            <p className="text-xs sm:text-sm md:text-base font-display font-bold text-white/90 tracking-[0.2em] uppercase">
              Coming Soon
            </p>
          </div>

          {/* Countdown Timer - Following 8px grid system */}
          <div className="relative mb-32 mx-auto max-w-5xl">
            <div className="p-12 md:p-20 lg:p-24 border border-white/20 rounded-3xl backdrop-blur-sm bg-white/5">
              <Countdown targetDate={launchDate} />
            </div>
          </div>

          {/* CTA Section - Proper visual hierarchy */}
          <div className="space-y-8 max-w-lg mx-auto">
            {/* Primary CTA */}
            <button
              onClick={() => setPreRegisterOpen(true)}
              className="pointer-events-auto w-full bg-white hover:bg-white/90 text-black font-display font-bold px-12 py-6 rounded-2xl text-lg md:text-xl transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-white/20 relative group overflow-hidden"
            >
              <span className="relative z-10 tracking-wide">Asegura tu Lugar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

            {/* Social proof - Reduced prominence for hierarchy */}
            <div className="flex items-center justify-center gap-8 text-xs md:text-sm text-white/40 font-sans">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="tracking-wide">Lugares limitados</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="tracking-wide">Acceso prioritario</span>
            </div>
          </div>

          {/* Decorative Frame - Bottom */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 border border-white/5 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Pre-Register Modal */}
      <PreRegisterModal
        isOpen={preRegisterOpen}
        onClose={() => setPreRegisterOpen(false)}
      />
    </div>
  );
}