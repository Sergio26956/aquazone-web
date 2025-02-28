import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function ParqueUrbanoMovil() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">
            Parque Urbano Móvil 🌆
          </h1>
          
          {/* Imagen */}
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/Cupace20180930163150.png"
              alt="Parque urbano móvil"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Eventos Personalizados</h3>
            <p className="text-gray-600">Comuniones, cumpleaños y fiestas privadas.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Instalación Express</h3>
            <p className="text-gray-600">Montaje en menos de 3 horas.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
