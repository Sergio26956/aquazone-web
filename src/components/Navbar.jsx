import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
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
          <Link href="/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/Logo.webp" 
              alt="AQUAZONE Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/parques-terrestres" 
                className="text-white hover:text-blue-200 font-medium"
              >
                Parques Terrestres
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href="/parques-flotantes" 
                className="text-white hover:text-blue-200 font-medium"
              >
                Parques Flotantes
              </Link>
            </motion.div>
          </div>

          {/* Botón Contacto Desktop */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <Link 
              href="/contacto" 
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50"
            >
              Contacto
            </Link>
          </motion.div>

          {/* Menú Mobile */}
          <button className="md:hidden text-white">
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
