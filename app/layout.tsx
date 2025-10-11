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
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "to971cyu4v");
          `
        }} />
      </head>
      <body>
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  )
}