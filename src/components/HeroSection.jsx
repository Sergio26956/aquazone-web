// src/components/HeroSection.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen épica */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.webp"
          alt="Parque acuático AQUAZONE"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo animado */}
        <div className="animate-float">
          <Image
            src="/images/Logo.webp"
            alt="Logo AQUAZONE"
            width={400}
            height={150}
            className="mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Botones flotantes */}
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
          <Link
            href="/parques-flotantes"
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-2xl font-bold px-10 py-5 rounded-full shadow-2xl transition-all transform hover:scale-110"
          >
            🌊 Parques Flotantes
          </Link>
          
          <Link
            href="/parques-terrestres"
            className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-2xl transition-all transform hover:scale-110"
          >
            🏞️ Parques Terrestres
          </Link>
        </div>
      </div>
    </div>
  );
}
