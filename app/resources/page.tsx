export default function ResourcesPage() {
    const mockPDFs = [
      {
        title: "Guía de React Hooks",
        description: "Aprende los hooks más importantes de React con ejemplos prácticos y casos de uso reales",
        url: "/pdfs/react-hooks-guide.pdf",
        size: "2.1 MB",
        pages: "28 páginas"
      },
      {
        title: "CSS Grid Cheatsheet", 
        description: "Referencia completa de CSS Grid con ejemplos visuales y código listo para usar",
        url: "/pdfs/css-grid-cheatsheet.pdf",
        size: "1.8 MB",
        pages: "15 páginas"
      }
    ]
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Recursos Gratuitos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Documentación técnica de calidad. Sin registro, sin spam, solo contenido útil.
            </p>
          </div>
          
          {/* Grid de recursos */}
          <div className="grid lg:grid-cols-2 gap-8">
            {mockPDFs.map((pdf, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full">
                  {/* Header del card */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {pdf.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {pdf.description}
                      </p>
                      
                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {pdf.pages}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                          </svg>
                          {pdf.size}
                        </span>
                      </div>
                    </div>
                    
                    {/* Icono PDF */}
                    <div className="ml-6">
                      <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón de descarga */}
                  <a 
                    href={pdf.url}
                    download
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-3 group-hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar Gratis
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer message */}
          <div className="text-center mt-16">
            <p className="text-gray-500">
              ¿Necesitas algo específico? Contacta en{' '}
              <a href="mailto:info@thecookbook.lat" className="text-blue-600 hover:underline">
                info@thecookbook.lat
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }