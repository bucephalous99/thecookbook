
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { snippets } from '../data/snippets';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(snippets);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults(snippets);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    const filteredSnippets = snippets.filter(snippet => {
      const searchLower = searchTerm.toLowerCase();
      return (
        snippet.title.toLowerCase().includes(searchLower) ||
        snippet.description.toLowerCase().includes(searchLower) ||
        snippet.category.toLowerCase().includes(searchLower) ||
        snippet.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        snippet.language.toLowerCase().includes(searchLower)
      );
    });

    setSearchResults(filteredSnippets);
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults(snippets);
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider value={{ 
      searchTerm, 
      setSearchTerm, 
      searchResults, 
      isSearching,
      clearSearch,
      totalSnippets: snippets.length
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};
EOF