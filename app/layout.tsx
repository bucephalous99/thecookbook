import type { Metadata } from 'next'
import { SearchProvider } from './context/SearchContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'The CookBook',
  description: 'Tu biblioteca de código y recursos DevOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  )
}