'use client';

import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import { ListingsGrid, PropertyCard } from '../components/features';
import { useListingSearch } from '../components/providers/SearchProvider';
import { mockProperties } from '../data/properties';
import { filterProperties } from '../utils/filterProperties';

const FavoritesPage = () => {
  const { favoriteIds, searchTerm } = useListingSearch();
  const favorites = filterProperties(
    mockProperties.filter((property) => favoriteIds.includes(property.id)),
    searchTerm,
  );

  return (
    <>
      <Container className="pt-8">
        <Title level={1}>Favoritos</Title>
      </Container>
      <ListingsGrid total={favorites.length}>
        {favorites.map((property) => (
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
};

export default FavoritesPage;