import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Piscinas() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">
            Montaje en Piscinas 🏊
          </h1>
          
          {/* Imagen */}
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/Captura de pantalla_20210722_152628_com.android.gallery3d.webp"
              alt="Parque en piscina"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Servicio Profesional</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Para Eventos Privados</h3>
            <p className="text-gray-600">Cumpleaños, comuniones y celebraciones familiares.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Instalación Rápida</h3>
            <p className="text-gray-600">Montaje en menos de 4 horas.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
