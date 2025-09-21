export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          The CookBook
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Tu biblioteca de código y recursos de desarrollo.<br />
          Simple. Organizado. Siempre disponible.
        </p>
        
        <div className="mb-8 max-w-lg mx-auto">
          <input 
            type="text"
            placeholder="Buscar snippets, componentes, recursos..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base"
          />
        </div>

        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 mr-4">
            Explorar Snippets
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50">
            Ver Recursos
          </button>
        </div>
      </div>
    </div>
  )
}