'use client';

import { createContext, useContext, useState } from 'react';

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useListingSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useListingSearch debe usarse dentro de SearchProvider');
  }

  return context;
};