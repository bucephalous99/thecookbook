import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'CookBook - Cocina paso a paso con simplicidad',
  description: 'Descubre la cocina paso a paso con simplicidad. Recetas semanales con guías detalladas y acompañamiento de IA.',
  keywords: 'recetas, cocina, gastronomía, tutoriales, guías culinarias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white text-architect-black font-architect">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
