export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            TheCookBook
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Proyectos</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Bienvenido a TheCookBook
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            🚀 Tu plataforma definitiva de DevOps, Cloud y Automatización
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Comenzar Ahora
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-800 transition-all duration-200">
              Ver Documentación
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-5xl mb-4">🐳</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Docker & Kubernetes</h3>
            <p className="text-gray-400">
              Contenedores, orquestación y mejores prácticas para despliegues escalables en producción.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-5xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Cloud Native</h3>
            <p className="text-gray-400">
              AWS, Azure, GCP - Arquitecturas serverless y microservicios modernos.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-white">CI/CD & Automation</h3>
            <p className="text-gray-400">
              GitHub Actions, Jenkins, Terraform - Pipelines automatizados y IaC.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">Proyectos</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-gray-400">Tutoriales</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/50 to-red-900/50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-gray-400">Posibilidades</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-12 rounded-2xl text-center backdrop-blur-sm border border-gray-700">
          <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu infraestructura?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a miles de DevOps engineers que confían en nuestras herramientas
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-lg font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
            Empezar Gratis →
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 TheCookBook | Built with Next.js & ❤️ | Deployed on Vercel
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-300">GitHub</a>
            <a href="#" className="text-gray-500 hover:text-gray-300">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-300">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  )
}// Force rebuild: 1758079712
// Cache bust: 1758080375
