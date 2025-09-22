// app/layout.js
import { SearchProvider } from './contexts/SearchContext';
import './globals.css';

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