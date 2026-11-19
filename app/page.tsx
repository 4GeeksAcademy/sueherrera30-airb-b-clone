'use client';

import { useState, useEffect } from 'react';
import Container from './components/ui/Container';
import { CategoryFilter, ListingsGrid, PropertyCard } from './components/features';
import Title from './components/ui/Title';
import { mockProperties } from './data/properties';
import type { PropertyListing } from './data/properties';

export default function Home() {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const visibleProperties = activeCategory
        ? mockProperties.filter((property) => property.category === activeCategory)
        : mockProperties.slice(0, 8);
      setProperties(visibleProperties);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string | null) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
  };

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
      <ListingsGrid isLoading={isLoading} total={properties.length}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            location={property.location}
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
