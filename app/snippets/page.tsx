'use client';
import { useState } from 'react';
import { useSearch } from '../context/SearchContext';
import SnippetModal from '../components/SnippetModal';
import Header from '../components/Header';
import LetterGlitch from '../components/LetterGlitch';
import { snippets } from '../data/snippets';

export default function SnippetsPage() {
  const { searchResults, searchTerm, isSearching } = useSearch();
  const [selectedSnippet, setSelectedSnippet] = useState<any>(null);

  // Mostrar resultados de búsqueda o todos los snippets
  const displaySnippets = isSearching ? searchResults : snippets;

  return (
    <>
      {/* LetterGlitch Background - PANTALLA COMPLETA */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LetterGlitch 
          glitchColors={['#1a1a2e', '#16213e', '#0f0f23', '#2d1b4e']}
          glitchSpeed={150}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          className="w-full h-full"
        />
      </div>

      {/* Gradient overlay para legibilidad */}
      <div className="fixed inset-0 w-full h-full z-1 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 pointer-events-none"></div>
      
      {/* Contenido principal */}
      <div className="min-h-screen text-white relative z-10">
        <Header />
        
        <div className="container mx-auto px-4 py-8 pt-24">
          {/* Header Section */}
          <div className="mb-8 relative">
            {/* Background translúcido para el título */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg -m-4 border border-gray-700/30"></div>
            
            <div className="relative z-10 p-4">
              <h1 className="text-4xl font-bold mb-4 relative">
                {isSearching ? (
                  <span className="text-white drop-shadow-lg">
                    Resultados para "<span className="text-blue-400">{searchTerm}</span>"
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                    Todos los Snippets
                  </span>
                )}
              </h1>
              
              <p className="text-gray-200 drop-shadow-md">
                {displaySnippets.length} snippet{displaySnippets.length !== 1 ? 's' : ''} 
                {isSearching ? ' encontrado' : ' disponible'}{displaySnippets.length !== 1 ? 's' : ''}
              </p>
              
              {isSearching && (
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-2 text-blue-400 hover:text-blue-300 underline text-sm transition-colors drop-shadow-md"
                >
                  Mostrar todos los snippets
                </button>
              )}
            </div>
          </div>

          {/* Grid de Snippets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displaySnippets.map((snippet: any) => (
              <div 
                key={snippet.id}
                id={`snippet-${snippet.id}`}
                className="bg-black/60 backdrop-blur-md border border-gray-600/50 rounded-lg p-6 hover:bg-black/70 hover:border-blue-500/60 transition-all duration-300 cursor-pointer relative overflow-hidden group shadow-xl"
                onClick={() => setSelectedSnippet(snippet)}
              >
                {/* Card hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Difficulty and Language badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      snippet.difficulty === 'Beginner' ? 'bg-green-500/30 text-green-200 border border-green-500/50' :
                      snippet.difficulty === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-200 border border-yellow-500/50' :
                      'bg-red-500/30 text-red-200 border border-red-500/50'
                    }`}>
                      {snippet.difficulty}
                    </span>
                    <span className="text-xs text-gray-200 bg-gray-800/70 px-2 py-1 rounded border border-gray-600/50 backdrop-blur-sm">
                      {snippet.language}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors text-white drop-shadow-md">
                    {snippet.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed drop-shadow-sm">
                    {snippet.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {snippet.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-500/30 text-blue-200 rounded text-xs border border-blue-500/50 hover:bg-blue-500/40 transition-colors backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Category */}
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="mr-4">
                      Categoría: <span className="text-purple-300">{snippet.category}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {displaySnippets.length === 0 && isSearching && (
            <div className="text-center py-12 relative">
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-gray-600/50">
                <div className="mb-4 text-6xl font-mono text-red-400 animate-pulse drop-shadow-lg">
                  404
                </div>
                <h3 className="text-xl text-gray-200 mb-4 drop-shadow-md">No se encontraron resultados</h3>
                <p className="text-gray-300 mb-6">Intenta con otros términos de búsqueda</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-blue-600/80 hover:bg-blue-700 border border-blue-500/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm"
                >
                  Ver todos los snippets
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <SnippetModal 
        snippet={selectedSnippet}
        isOpen={!!selectedSnippet}
        onClose={() => setSelectedSnippet(null)} 
      />
    </>
  );
}