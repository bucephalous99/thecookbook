
import Link from 'next/link';
import LetterGlitch from './components/LetterGlitch';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background con LetterGlitch */}
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={10}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
        />
      </div>
      {/* Overlay para mejorar legibilidad */}
      <div className="fixed inset-0 bg-black/40 z-10"></div>
      <Header />
      {/* Contenido principal */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20">
        <div className="text-center p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700 max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            The CookBook
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Tu biblioteca de código y recursos DevOps.<br />
            <span className="text-green-400">Just copy and paste.</span>
          </p>
          
          <SearchBar />
          
          <div className="space-y-4">
            <Link 
              href="/snippets"
              className="inline-block bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold mr-4 transition-colors"
            >
              🚀 Explorar Snippets
            </Link>
            <Link 
              href="/pdfs"
              className="inline-block border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition-colors"
            >
              📄 Ver Recursos
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            ✨ Made with Next.js, Tailwind CSS & Supabase / By Sam 
          </div>
        </div>
      </div>
    </div>
  );
}