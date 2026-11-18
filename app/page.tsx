import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">Hola Home</h1>
        
        <p className="text-xl text-gray-600 text-center mb-12 max-w-md">
          Bienvenido a nuestra plataforma de alojamientos vacacionales
        </p>

        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Explorar catálogo
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
