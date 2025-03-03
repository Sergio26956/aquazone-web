// src/components/HeroSection.jsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.webp" // Ruta de la imagen
          alt="AQUAZONE Waterpark"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center">
        
        {/* Logo */}
        <img
          src="/images/logo-aquazone.webp" // Ruta del logo
          alt="Logo AQUAZONE"
          className="w-64 mb-8 mx-auto animate-float" // Efecto de flotar
        />

        {/* Botones de navegación */}
        <div className="flex flex-col md:flex-row gap-6">
          
          <Link
            href="/parques-flotantes"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-2xl px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:scale-105"
          >
            Parques Flotantes 🌊
          </Link>

          <Link
            href="/parques-terrestres"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:scale-105"
          >
            Parques Terrestres 🏞️
          </Link>

        </div>
      </div>
    </div>
  );
}
