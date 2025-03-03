import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          {/* Logo (usa el que ya tienes) */}
          <div className="relative h-32 w-64 mx-auto mb-8">
            <Image 
              src="/images/Logo.webp" // Ruta actual de tu logo
              alt="Logo de AQUAZONE"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Imagen Principal (usa la que ya tienes) */}
          <div className="relative h-96 w-full mb-12">
            <Image 
              src="/images/file-S8u6r6TfUn2TfzMm4x2M9c.webp" 
              alt="Parque acuático"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* Botones */}
          <div className="flex justify-center gap-6 mb-20">
            <a href="/parques-flotantes" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-all">
              Ver Parques Flotantes
            </a>
            <a href="/parques-terrestres" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">
              Parques Terrestres
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
