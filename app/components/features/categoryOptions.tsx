import type { ReactNode } from 'react';

export interface Category {
  id: string;
  label: string;
  icon: ReactNode;
}

export const defaultCategories: Category[] = [
  {
    id: 'beach',
    label: 'Playa',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.896 7.465c-.058-.32-.11-.637-.161-.949a9 9 0 10-18 0c-.05.312-.103.629-.161.949.03.17.062.339.096.507.033.168.068.335.106.5.038.165.079.33.123.494.044.164.091.327.141.489.05.162.103.322.159.481.056.159.115.317.177.473.062.156.127.311.195.464.068.153.14.304.214.453.075.148.153.295.233.439.08.144.164.286.25.425.086.139.176.275.268.408.092.133.188.263.287.39.1.126.203.25.308.37.105.121.214.238.325.352.111.114.226.225.343.333.117.108.238.213.36.315.133.113.268.223.405.329.137.106.276.209.416.308" />
      </svg>
    ),
  },
  {
    id: 'mansion',
    label: 'Mansiones',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2.293-2.293a1 1 0 011.414 0L9 9.414l2.293-2.293a1 1 0 011.414 0L15 9.414l2.293-2.293a1 1 0 011.414 0L21 10M3 12a9 9 0 1118 0m-9 9v-6a3 3 0 00-3-3H9a3 3 0 00-3 3v6m0-12V5a2 2 0 012-2h2a2 2 0 012 2v7" />
      </svg>
    ),
  },
  {
    id: 'trending',
    label: 'Tendencias',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'camping',
    label: 'Acampada',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4M3 7h18" />
      </svg>
    ),
  },
  {
    id: 'modern',
    label: 'Moderno',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];