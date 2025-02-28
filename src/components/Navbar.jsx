// ... (imports)
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-600 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/">
          <motion.img
            src="/images/Logo.webp"
            alt="AQUAZONE Logo"
            className="h-12 w-auto cursor-pointer wave-animation" // Clase CSS añadida
            whileHover={{ scale: 1.05 }}
          />
        </Link>
      </div>
    </motion.nav>
  );
}
