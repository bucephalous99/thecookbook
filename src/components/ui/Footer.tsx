import Link from 'next/link'
import { ChefHat, Instagram, Twitter, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Recetas', href: '/recetas' },
    { name: 'Sobre mí', href: '/sobre-mi' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Email', href: 'mailto:hola@cookbook.com', icon: Mail },
  ]

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-24">
      <div className="architect-container">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-architect-black rounded-lg flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="architect-text text-xl font-bold">CookBook</h3>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Cocina paso a paso</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6 max-w-md">
                Descubre la cocina paso a paso con simplicidad. Recetas semanales con guías detalladas 
                y acompañamiento de IA para hacer de la cocina una experiencia única.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center hover:border-architect-accent hover:text-architect-accent transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="font-bold text-architect-black mb-4 uppercase tracking-wide text-sm">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-architect-black transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-architect-black mb-4 uppercase tracking-wide text-sm">
                Newsletter
              </h4>
              <p className="text-neutral-600 mb-4 text-sm">
                Recibe una nueva receta cada semana directamente en tu correo.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="architect-input text-sm"
                />
                <button className="architect-button text-sm w-full">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © 2024 CookBook. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidad" className="text-neutral-500 hover:text-architect-black transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-neutral-500 hover:text-architect-black transition-colors">
                Términos
              </Link>
              <Link href="/cookies" className="text-neutral-500 hover:text-architect-black transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
