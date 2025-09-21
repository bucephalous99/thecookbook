import LetterGlitch from './components/LetterGlitch';

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

      {/* Contenido principal */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700 max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            The CookBook
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Tu biblioteca de código y recursos DevOps.<br />
            <span className="text-green-400">Just copy and paste.</span>
          </p>
          
          <div className="mb-8">
            <input 
              type="text"
              placeholder="Buscar snippets, componentes, recursos..."
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
            />
          </div>

          <div className="space-y-4">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold mr-4 transition-colors">
              🚀 Explorar Snippets
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition-colors">
              📄 Ver Recursos
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            ✨ Made with Next.js, Tailwind CSS & Supabase by Sam 
          </div>
        </div>
      </div>
    </div>
  );
}