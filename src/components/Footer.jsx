import Link from 'next/link';
import { FacebookIcon, InstagramIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Iconos actualizados

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <Link href="/">
              <img src="/images/logo.webp" alt="AQUAZONE Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm">
              Vive la experiencia acuática con AQUAZONE.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/parques-terrestres" className="hover:text-blue-300">Parques Terrestres</Link></li>
              <li><Link href="/parques-flotantes" className="hover:text-blue-300">Parques Flotantes</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-300">Contacto</Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <XMarkIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <form className="space-y-2">
              <input type="email" placeholder="Tu email" className="w-full p-2 rounded text-gray-900" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Suscribirse
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
