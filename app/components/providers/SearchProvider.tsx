'use client';

import { createContext, useContext, useState } from 'react';

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  favoriteIds: string[];
  toggleFavorite: (propertyId: string) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = (propertyId: string) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(propertyId)
        ? currentIds.filter((id) => id !== propertyId)
        : [...currentIds, propertyId],
    );
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, favoriteIds, toggleFavorite }}>
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