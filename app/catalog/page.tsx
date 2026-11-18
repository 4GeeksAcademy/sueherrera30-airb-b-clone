'use client'

import Link from 'next/link'

export default function Catalog() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Navegación superior */}
        <nav className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
            title="Ir al inicio"
          >
            ↑
          </Link>
          <h1 className="text-2xl font-bold">Catálogo</h1>
        </nav>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow p-8 mb-6">
          <p className="text-gray-600 text-lg mb-4">Bienvenido al catálogo de alojamientos</p>
          <p className="text-gray-500">Aquí encontrarás todas nuestras propiedades disponibles.</p>
        </div>

        {/* Botón para ir a detalle */}
        <div className="flex gap-4">
          <Link
            href="/rooms/1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver detalle de propiedad
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
