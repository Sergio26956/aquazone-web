import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline'; // Icono actualizado
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-600 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/logo.webp" 
              alt="AQUAZONE Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/parques-terrestres" className="text-white hover:text-blue-200 font-medium transition-colors">
              Parques Terrestres
            </Link>
            <Link href="/parques-flotantes" className="text-white hover:text-blue-200 font-medium transition-colors">
              Parques Flotantes
            </Link>
          </div>

          {/* Botón Contacto */}
          <div className="hidden md:block">
            <Link href="/contacto" className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Menú Mobile (Icono Hamburguesa) */}
          <button className="md:hidden text-white">
            <Bars3Icon className="h-8 w-8" /> {/* Icono actualizado */}
          </button>

        </div>
      </div>
    </motion.nav>
  );
}
