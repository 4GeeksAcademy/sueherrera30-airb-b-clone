'use client';

import { useState, useEffect } from 'react';
import { CategoryFilter, ListingsGrid, PropertyCard, ResultsHeader, MapArea } from '../components/features';
import { mockProperties } from '../data/properties';
import type { PropertyListing } from '../data/properties';
import { useListingSearch } from '../components/providers/SearchProvider';

export default function Catalog() {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minGuests, setMinGuests] = useState<number | null>(null);
  const { searchTerm } = useListingSearch();

  useEffect(() => {
    const timer = setTimeout(() => {
      const sorted = [...mockProperties].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
      setProperties(sorted);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [sortOrder]);

  const normalizedSearch = searchTerm.trim().toLocaleLowerCase();
  const visibleProperties = properties.filter((property) => {
    const searchableText = `${property.title} ${property.location} ${property.description}`.toLocaleLowerCase();
    return (
      (!activeCategory || property.category === activeCategory) &&
      (maxPrice === null || property.price <= maxPrice) &&
      (minGuests === null || property.maxGuests >= minGuests) &&
      searchableText.includes(normalizedSearch)
    );
  });

  return (
    <div className="bg-white">
      {/* Results Header with Sort Options */}
      <ResultsHeader
        total={visibleProperties.length}
        onSortChange={(order) => {
          setIsLoading(true);
          setSortOrder(order);
        }}
        maxPrice={maxPrice}
        minGuests={minGuests}
        onMaxPriceChange={setMaxPrice}
        onMinGuestsChange={setMinGuests}
      />

      <CategoryFilter onCategoryChange={setActiveCategory} />

      {/* Main Content Grid */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:max-w-7xl lg:mx-auto lg:px-6">
        {/* Listings Column */}
        <div className="lg:col-span-2">
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
        </div>

        {/* Map Column - Visible only on desktop */}
        <div className="hidden lg:block sticky top-20 h-fit">
          <MapArea />
        </div>
      </div>

      {/* Mobile Map - Visible only on mobile */}
      <div className="lg:hidden">
        <MapArea />
      </div>
    </div>
  );
}
