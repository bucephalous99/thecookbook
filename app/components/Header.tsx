'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language } = useLanguage();

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
          </div>
        </div>

      </nav>
    </header>
  );
}