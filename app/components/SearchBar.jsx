// app/components/SearchBar.jsx
'use client';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const { searchTerm, setSearchTerm, searchResults, isSearching, clearSearch } = useSearch();
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearch = (value) => {
    setSearchTerm(value);
    setShowResults(value.length > 0);
  };

  const handleResultClick = (snippetId) => {
    router.push(`/snippets#${snippetId}`);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Barra de búsqueda */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowResults(searchTerm.length > 0)}
          placeholder="Buscar snippets, categorías, tecnologías..."
          className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={() => {
              clearSearch();
              setShowResults(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Resultados de búsqueda */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border-2 border-gray-700 rounded-xl max-h-96 overflow-y-auto z-50 shadow-2xl">
          {searchResults.length > 0 ? (
            <>
              <div className="px-4 py-2 border-b border-gray-700 text-sm text-gray-300 bg-gray-800/50">
                {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
              </div>
              {searchResults.map((snippet) => (
                <div
                  key={snippet.id}
                  onClick={() => handleResultClick(snippet.id)}
                  className="px-4 py-3 hover:bg-gray-800 hover:border-l-4 hover:border-l-blue-400 cursor-pointer border-b border-gray-800 last:border-b-0 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-gray-100 font-medium">{snippet.title}</h4>
                      <p className="text-gray-300 text-sm truncate">{snippet.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-blue-500/30 text-blue-200 px-2 py-1 rounded border border-blue-500/50">
                          {snippet.category}
                        </span>
                        <span className="text-xs text-gray-400">{snippet.language}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="px-4 py-8 text-center text-gray-300">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No se encontraron resultados para "{searchTerm}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}