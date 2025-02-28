import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Sección Hero con imagen y logo */}
      <div className="min-h-screen bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          {/* Logo */}
          <div className="relative h-32 w-64 mx-auto mb-8">
            <Image 
              src="/images/logo.webp"  // Ruta del logo
              alt="Logo de AQUAZONE"    // Texto alternativo
              layout="fill"              // Ajusta el logo al contenedor
              objectFit="contain"       // Mantiene la proporción del logo
              className="animate-fade-in" // Animación suave
            />
          </div>

          {/* Contenedor de la imagen */}
          <div className="relative h-96 w-full mb-12">
            <Image 
              src="/images/file-S8u6r6TfUn2TfzMm4x2M9c.webp"  // Ruta de la imagen
              alt="Parque acuático"                            // Texto alternativo
              layout="fill"                                    // Ajusta la imagen al contenedor
              objectFit="cover"                                // Cubre todo el espacio
              className="rounded-xl shadow-2xl"                 // Estilos adicionales
            />
          </div>

          {/* Botones de acción */}
          <div className="flex justify-center gap-6 mb-20">
            <a 
              href="/parques-flotantes" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-all"
            >
              Ver Parques Flotantes
            </a>
            <a 
              href="/parques-terrestres" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
            >
              Parques Terrestres
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
