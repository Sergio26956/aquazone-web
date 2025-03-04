import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      
      {/* Efecto de Olas Animadas (CSS en globals.css) */}
      <div className="wave-bg"></div>

      {/* Sección Hero */}
      <div className="min-h-screen bg-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-32 w-64 mx-auto mb-8"
          >
            <Image 
              src="/images/Logo.webp"
              alt="Logo de AQUAZONE" 
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-96 w-full mb-12"
          >
            <Image 
              src="/images/file-S8u6r6TfUn2TfzMm4x2M9c.webp"
              alt="Parque acuático hinchable"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-6 mb-20"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="/parques-flotantes" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-all"
            >
              Ver Parques Flotantes
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="/parques-terrestres" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
            >
              Parques Terrestres
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
