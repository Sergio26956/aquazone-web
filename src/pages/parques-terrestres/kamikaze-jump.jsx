import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function KamikazeJump() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">
            Kamikaze Jump 🚀
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            La atracción terrestre más emocionante para eventos y celebraciones.
          </p>
          
          {/* Imagen Principal */}
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/kamikaze-jump.webp" 
              alt="Kamikaze Jump"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Sección de Detalles */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Detalles Técnicos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Altura y Seguridad</h3>
            <p className="text-gray-600">
              Altura máxima: 10 metros. Cumple con todas las normativas de seguridad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Capacidad</h3>
            <p className="text-gray-600">
              Hasta 20 personas por hora. Ideal para eventos masivos.
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
