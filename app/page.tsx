export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Placeholder */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-400">TheCookBook</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Recetas</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">DevOps</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Bienvenido a <span className="text-blue-400">TheCookBook</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Tu guía definitiva para DevOps, automatización y mejores prácticas en el desarrollo moderno
          </p>
          
          {/* DevOps Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">🐳</div>
              <h3 className="text-xl font-semibold mb-2">Docker</h3>
              <p className="text-gray-400">Contenedores y orquestación para aplicaciones modernas</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-2">Cloud</h3>
              <p className="text-gray-400">AWS, Azure y GCP para infraestructura escalable</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">CI/CD</h3>
              <p className="text-gray-400">Automatización de despliegues y pipelines</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Explorar Recetas DevOps
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>© 2025 TheCookBook. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
