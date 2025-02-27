import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ParquesFlotantes() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Sección Principal */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Parques Flotantes</h1>
        <p className="text-lg text-gray-700 mb-8">
          Explora nuestros innovadores parques acuáticos flotantes, perfectos para eventos y actividades al aire libre.
        </p>

        {/* Galería de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src="/images/piscina-modular.webp" alt="Piscina Modular" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Piscinas Modulares</h2>
              <p className="text-gray-700">Piscinas modulares de fácil instalación para cualquier evento.</p>
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
