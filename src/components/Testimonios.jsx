import { motion } from 'framer-motion';

const testimonios = [
  {
    text: "El mejor parque acuático hinchable que hemos probado. ¡Los niños no paraban de reír!",
    author: "Familia López (Málaga)",
    type: "flotante"
  },
  {
    text: "Contratamos el Kamikaze Jump para un evento corporativo y fue un éxito total.",
    author: "TechStart S.L.",
    type: "terrestre"
  }
];

export default function Testimonios({ section }) {
  const filteredTestimonios = testimonios.filter(t => t.type === section);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Experiencias Reales</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {filteredTestimonios.map((testimonio, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
          >
            <p className="text-gray-600 mb-4 italic">" {testimonio.text} "</p>
            <p className="font-bold text-blue-600">— {testimonio.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
