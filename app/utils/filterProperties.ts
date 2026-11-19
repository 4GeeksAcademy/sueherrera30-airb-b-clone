import type { PropertyListing } from '../data/properties';

export const filterProperties = (
  properties: PropertyListing[],
  searchTerm: string,
  categoryId: string | null = null,
): PropertyListing[] => {
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase();

  return properties.filter((property) => {
    const matchesCategory = !categoryId || property.category === categoryId;
    const searchableText = `${property.title} ${property.location} ${property.description}`.toLocaleLowerCase();
    return matchesCategory && searchableText.includes(normalizedSearch);
  });
};