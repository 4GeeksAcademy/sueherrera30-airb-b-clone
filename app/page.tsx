'use client';

import { useState, useEffect } from 'react';
import Container from './components/ui/Container';
import { CategoryFilter, ListingsGrid, PropertyCard } from './components/features';
import Title from './components/ui/Title';
import { mockProperties } from './data/properties';
import type { PropertyListing } from './data/properties';
import { useListingSearch } from './components/providers/SearchProvider';
import { filterProperties } from './utils/filterProperties';

export default function Home() {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { searchTerm } = useListingSearch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(mockProperties);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
  };

  const matchingProperties = filterProperties(properties, searchTerm, activeCategory);
  const visibleProperties = activeCategory || searchTerm.trim()
    ? matchingProperties
    : matchingProperties.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 border-b border-gray-200">
        <Container>
          <Title level={1} className="text-center mb-3">
            Encuentra tu próxima aventura
          </Title>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Una selección de casas, cabañas y villas únicas en las costas de México
          </p>
        </Container>
      </section>

      {/* Category Filter */}
      <CategoryFilter onCategoryChange={handleCategoryChange} />

      {/* Properties Grid */}
      <ListingsGrid isLoading={isLoading} total={visibleProperties.length}>
        {visibleProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            location={property.location}
            description={property.description}
            price={property.price}
            rating={property.rating}
            reviewCount={property.reviewCount}
            image={property.images[0]}
            isNew={property.isNew}
          />
        ))}
      </ListingsGrid>
    </>
  );
}
