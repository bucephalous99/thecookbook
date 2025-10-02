// app/layout.js
import { SearchProvider } from './contexts/SearchContext';
import './globals.css';

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}