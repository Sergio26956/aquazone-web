import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { WaterWave } from 'react-icons/wi'; // Si necesitas instalar: npm install react-icons

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Sección Hero con efecto de olas */}
      <div className="min-h-screen bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-8 animate-fade-in">
            ¡Bienvenido a AQUAZONE! 🌊
          </h1>
          
          <div className="relative h-96 w-full mb-12">
            <Image 
              src="/images/hero-parque.webp"  // Sube esta imagen a public/images
              alt="Parque acuático"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-2xl"
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

          {/* Tarjetas de características */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <WaterWave className="text-blue-600 w-12 h-12 mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">Diversión Familiar</h3>
              <p>Actividades para todas las edades en entornos seguros.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <WaterWave className="text-blue-600 w-12 h-12 mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">Instalaciones Únicas</h3>
              <p>Los mejores diseños hinchables del mercado.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <WaterWave className="text-blue-600 w-12 h-12 mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-2">Eventos Especiales</h3>
              <p>Celebra cumpleaños, fiestas y más.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
