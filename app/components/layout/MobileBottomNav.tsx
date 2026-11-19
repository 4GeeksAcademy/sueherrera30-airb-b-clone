'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const MobileBottomNavContent = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: 'explore', label: 'Explorar' },
    { href: '/favorites', icon: 'favorites', label: 'Favoritos' },
    { href: '/login', icon: 'login', label: 'Iniciar sesión' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'explore':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'catalog':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        );
      case 'favorites':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        );
      case 'user':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t border-gray-200 z-40">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 transition-colors ${
                isActive ? 'text-rose-500' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {getIcon(item.icon)}
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const MobileBottomNav = () => {
  return (
    <Suspense fallback={null}>
      <MobileBottomNavContent />
    </Suspense>
  );
};

export default MobileBottomNav;
