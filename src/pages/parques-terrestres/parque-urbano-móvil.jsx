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
            Parque Acuático Urbano Móvil 🌆
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Instalación de parques acuáticos en plazas, eventos privados y celebraciones.
          </p>
          
          {/* Imagen Principal */}
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/urbano-movil.webp" 
              alt="Parque urbano móvil"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué Ofrecemos?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Eventos Personalizados</h3>
            <p className="text-gray-600">
              Montaje de parques acuáticos para comuniones, cumpleaños y fiestas locales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Colaboraciones</h3>
            <p className="text-gray-600">
              Trabajamos con ayuntamientos y promotores para eventos masivos.
            </p>
          </div>
        </div>

        {/* Llamada a la Acción */}
        <div className="text-center mt-20">
          <a 
            href="/contacto" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-all"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
