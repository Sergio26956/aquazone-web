import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import DynamicLogo from './DynamicLogo'; // Componente nuevo

export default function Navbar() {
  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0">
            <DynamicLogo className="h-12 w-auto" /> {/* Logo dinámico */}
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/parques-flotantes" className="text-white hover:text-blue-200 font-medium">Parques Flotantes</Link>
            <Link href="/parques-terrestres" className="text-white hover:text-blue-200 font-medium">Parques Terrestres</Link>
          </div>
          <button className="md:hidden text-white">
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
