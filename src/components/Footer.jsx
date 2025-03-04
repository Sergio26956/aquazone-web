import Link from 'next/link';
import { FacebookIcon, InstagramIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

// Animaciones
const hoverScale = {
  whileHover: { scale: 1.1, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 }
};

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y Descripción */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link href="/">
              <img 
                src="/images/Logo.webp" 
                alt="AQUAZONE Logo" 
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
            <p className="text-sm">Vive la experiencia acuática con AQUAZONE.</p>
          </motion.div>

          {/* Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-2">
              <li><a href="tel:0034649002658" className="hover:text-blue-300">+34 649 002 658</a></li>
              <li><a href="mailto:sergiolopezantequera@hotmail.com" className="hover:text-blue-300">sergiolopezantequera@hotmail.com</a></li>
            </ul>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <motion.a 
                {...hoverScale}
                href="https://www.tiktok.com/@aquazone93?_t=ZG-8uMXTsxBnOq&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>

              <motion.a 
                {...hoverScale}
                href="https://www.facebook.com/share/18ZGYW6vqA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <FacebookIcon className="h-6 w-6" />
              </motion.a>

              <motion.a 
                {...hoverScale}
                href="https://www.instagram.com/aquazone_waterpark?igsh=dXMwc2ZxMGY0eHRv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <InstagramIcon className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/politica-privacidad" className="hover:text-blue-300">Política de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-blue-300">Términos y Condiciones</Link></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
