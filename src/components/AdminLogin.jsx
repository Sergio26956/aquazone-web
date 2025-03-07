import { motion } from 'framer-motion';

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-aqua-primary to-aqua-dark">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Acceso Administrativo</h2>
        <input 
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button className="w-full bg-aqua-secondary text-black py-3 rounded-lg hover:bg-yellow-400 transition-all">
          Entrar
        </button>
      </motion.div>
    </div>
  );
}
