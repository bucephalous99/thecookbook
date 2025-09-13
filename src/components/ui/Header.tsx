'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChefHat } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Recetas', href: '/recetas' },
    { name: 'Sobre mí', href: '/sobre-mi' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="architect-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-architect-black rounded-lg flex items-center justify-center group-hover:bg-architect-accent transition-colors">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="architect-text text-xl font-bold">CookBook</h1>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">Cocina paso a paso</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-architect-black transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="architect-button text-sm">
              Suscribirse
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-architect-black" />
            ) : (
              <Menu className="w-6 h-6 text-architect-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 hover:text-architect-black transition-colors text-sm font-medium uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="architect-button text-sm w-full mt-4">
                Suscribirse
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
