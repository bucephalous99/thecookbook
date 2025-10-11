// app/components/Header.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Brain, ShoppingBag, Code, Info } from 'lucide-react';
import BookCallModal from './BookCallModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/agentes', label: 'Catálogo de Agentes', icon: ShoppingBag },
    { href: '/snippets', label: 'Recursos Gratuitos', icon: Code },
    { href: '/about', label: 'About', icon: Info }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
          <Brain className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          <span className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
              The CookBook Labs
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link 
                key={href}
                href={href} 
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 relative group ${
                  pathname === href 
                    ? 'text-blue-300 bg-blue-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">
                  {label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                    pathname === href ? 'w-full' : ''
                  }`}></span>
                </span>
              </Link>
            ))}
            
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
              Book a Call
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-4">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link 
                  key={href}
                  href={href} 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
              <button
                onClick={() => setIsBookCallOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-fit">
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Book Call Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </header>
  );
}