import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The CookBook',
  description: 'A minimal Next.js application',
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
