import Link from 'next/link';
import { FacebookIcon, InstagramIcon } from '@heroicons/react/outline';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <Link href="/">
              <img src="/images/logo-aquazone.webp" alt="AQUAZONE Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm">Vive la experiencia acuática con AQUAZONE.</p>
          </div>

          {/* Contacto Directo */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-2">
              <li><a href="tel:0034649002658" className="hover:text-blue-300">+34 649 002 658</a></li>
              <li><a href="mailto:sergiolopezantequera@hotmail.com" className="hover:text-blue-300">sergiolopezantequera@hotmail.com</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18ZGYW6vqA/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/aquazone_waterpark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@aquazone93" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/politica-privacidad" className="hover:text-blue-300">Política de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-blue-300">Términos y Condiciones</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
