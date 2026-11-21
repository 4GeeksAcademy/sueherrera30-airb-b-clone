'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container';
import { useListingSearch } from '../providers/SearchProvider';

const HeaderContent = () => {
  const pathname = usePathname();
  const { searchTerm, setSearchTerm } = useListingSearch();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-rose-500">
              airbnb
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Navegación principal">
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} className={pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>
              Inicio
            </Link>
            <Link href="/catalog" aria-current={pathname === '/catalog' ? 'page' : undefined} className={pathname === '/catalog' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>
              Catálogo
            </Link>
          </nav>

          {/* Search Bar - Hidden on very small screens */}
          <div className="hidden sm:flex flex-1 justify-center max-w-md">
            <div className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
              <input
                type="text"
                aria-label="Buscar alojamientos por nombre o destino"
                placeholder="Buscar alojamientos"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:block text-gray-700 text-sm hover:bg-gray-100 rounded-full p-2 transition-colors">
              Convierte tu hogar en un alojamiento
            </button>
            <button className="text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible on small screens */}
        <div className="sm:hidden pb-3">
          <div className="border border-gray-300 rounded-full px-3 py-2 shadow-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              aria-label="Buscar alojamientos por nombre o destino"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

const Header = () => (
  <Suspense fallback={
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xl sm:text-2xl font-bold text-rose-500">airbnb</div>
        </div>
      </div>
    </header>
  }>
    <HeaderContent />
  </Suspense>
);

export default Header;
