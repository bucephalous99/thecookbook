import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheCookBook - DevOps Platform',
  description: 'Tu plataforma de DevOps, Cloud y Automatización',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}