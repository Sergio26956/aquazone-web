import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="wave-bg"></div>
      <div className="relative z-10 text-center space-y-8">
        <div className="animate-float">
          <Image 
            src="/images/Logo.webp" 
            alt="Logo AQUAZONE" 
            width={400} 
            height={150} 
            className="mx-auto drop-shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          ¡Diversión sin límites!
        </h1>
        <p className="text-xl md:text-2xl text-white">
          Reserva tu experiencia acuática hoy mismo.
        </p>
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
