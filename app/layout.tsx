import { Inter, Space_Grotesk } from 'next/font/google';
import { SearchProvider } from './context/SearchContext';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
  weight: ['500', '700'],
});

export const metadata = {
  title: 'The CookBook Labs - AI Automation',
  description: 'Agentes IA que automatizan tu negocio 24/7',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'The CookBook Labs - AI Automation',
    description: 'Agentes IA que automatizan tu negocio 24/7',
    url: 'https://www.thecookbook.lat',
    siteName: 'The CookBook',
    locale: 'es',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "to971cyu4v");
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-900 text-white font-sans">
        <Toaster
          position="top-center"
          expand={false}
          richColors
        />
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}