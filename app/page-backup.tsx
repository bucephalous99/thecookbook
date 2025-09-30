import Link from 'next/link';
import LetterGlitch from './components/LetterGlitch';
import Header from './components/Header';

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
        <div className="text-center p-8 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            AI Agents Store
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Agentes de IA pre-empaquetados para tu negocio.<br />
            <span className="text-green-400">Listos para implementar.</span>
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <Link 
              href="/agentes"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Ver Catálogo de Agentes
            </Link>
            <Link 
              href="/snippets"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Recursos Gratuitos
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center text-gray-300">
            <div>
              <div className="text-2xl font-bold text-blue-400">15+</div>
              <div className="text-sm">Agentes Disponibles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-sm">Categorías</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">24h</div>
              <div className="text-sm">Setup Promedio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}