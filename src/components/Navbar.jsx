import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-aqua-blue shadow-lg"
    >
      {/* ... (usa el código del Navbar que ya corregimos antes) */}
    </motion.nav>
  );
}
