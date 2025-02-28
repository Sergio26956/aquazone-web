// ... (imports y Navbar/Footer)
import { motion } from 'framer-motion';

export default function KamikazeJump() {
  return (
    <div>
      {/* ... (Hero Section existente) */}
      
      {/* Nueva Sección: Tarjetas 3D */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ rotateY: 180 }}
            className="bg-blue-600 text-white p-6 rounded-xl h-64 perspective-1000"
          >
            <div className="preserve-3d w-full h-full text-center">
              <div className="front absolute w-full h-full">
                <h3 className="text-xl font-bold mb-4">Vista Frontal</h3>
                <p>Altura: 10m | Materiales Antideslizantes</p>
              </div>
              <div className="back absolute w-full h-full rotate-y-180">
                <h3 className="text-xl font-bold mb-4">Certificaciones</h3>
                <p>Normativa CE | Inspección Anual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
