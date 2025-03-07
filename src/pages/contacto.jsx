import { motion } from 'framer-motion';

export default function Contacto() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Mensaje" className="w-full p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </motion.div>
  );
}
