import { motion } from 'framer-motion';

export default function Testimonios() {
  const testimonios = [
    { text: "Excelente servicio, montaron el parque en menos de 3 horas.", author: "Ayuntamiento de Málaga" },
    { text: "Los niños disfrutaron muchísimo en la comunión.", author: "Familia Rodríguez" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Opiniones de Clientes</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonios.map((testimonio, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <p className="text-gray-600 mb-4">" {testimonio.text} "</p>
            <p className="font-bold text-blue-600">— {testimonio.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
