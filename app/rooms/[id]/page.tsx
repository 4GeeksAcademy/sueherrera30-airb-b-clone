'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

function RoomDetailContent() {
  const params = useParams()
  const id = params.id as string

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Navegación superior */}
        <nav className="flex items-center gap-4 mb-8">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
            title="Volver atrás"
          >
            ←
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
            title="Ir al inicio"
          >
            ↑
          </Link>
          <h1 className="text-2xl font-bold">Detalle de Propiedad</h1>
        </nav>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow p-8 mb-6">
          <h2 className="text-3xl font-bold mb-4">Propiedad ID: {id}</h2>
          <p className="text-gray-600 text-lg mb-4">Este es el detalle de la propiedad {id}</p>
          <div className="bg-gray-100 rounded-lg p-8 mb-4 h-64 flex items-center justify-center">
            <p className="text-gray-500">Galería de imágenes de la propiedad</p>
          </div>
          <p className="text-gray-500">Información adicional sobre la propiedad, amenidades, disponibilidad, etc.</p>
        </div>

        {/* Botones de navegación */}
        <div className="flex gap-4">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <span>←</span>
            Volver al catálogo
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <span>↑</span>
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function RoomDetail() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Cargando...</div>}>
      <RoomDetailContent />
    </Suspense>
  )
}
