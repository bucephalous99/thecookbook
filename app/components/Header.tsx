'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    es: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto'
    }
  };

  const t = content[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-dark/80 to-dark/0 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-display font-bold text-white">
              CookBook Labs
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              {t.services}
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              {t.about}
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              {t.contact}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-2 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden',
            'transition-all duration-300 ease-in-out',
            isMenuOpen ? 'h-48 opacity-100' : 'h-0 opacity-0'
          )}
        >
          <div className="py-2 space-y-1">
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
            >
              {t.services}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
            >
              {t.contact}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}