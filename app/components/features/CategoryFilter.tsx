'use client';

import { useState } from 'react';
import { defaultCategories } from './categoryOptions';
import type { Category } from './categoryOptions';

interface CategoryFilterProps {
  categories?: Category[];
  onCategoryChange?: (categoryId: string | null) => void;
}

const CategoryFilter = ({ categories, onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryList = categories || defaultCategories;

  const handleCategoryClick = (categoryId: string) => {
    const nextCategory = categoryId === activeCategory ? null : categoryId;
    setActiveCategory(nextCategory);
    onCategoryChange?.(nextCategory);
  };

  return (
    <div className="border-b border-gray-200 py-4 overflow-x-auto">
      <div className="flex gap-6 sm:gap-8 px-4 sm:px-6 pb-2 min-w-min sm:min-w-0">
        {categoryList.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex flex-col items-center gap-2 pb-4 transition-colors whitespace-nowrap ${
              activeCategory === category.id
                ? 'border-b-2 border-gray-900 text-gray-900'
                : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
            }`}
          >
            <div className="text-gray-600">{category.icon}</div>
            <span className="text-xs sm:text-sm font-medium">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
