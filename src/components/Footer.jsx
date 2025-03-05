import Link from 'next/link';
import { FacebookIcon, InstagramIcon } from '@heroicons/react/outline';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <img src="/images/Logo.webp" alt="Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm">Vive la experiencia acuática con AQUAZONE.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/parques-terrestres" className="hover:text-blue-300">Parques Terrestres</Link></li>
              <li><Link href="/parques-flotantes" className="hover:text-blue-300">Parques Flotantes</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <a href="https://wa.me/123456789" className="block bg-green-500 text-white px-4 py-2 rounded-full text-center hover:bg-green-600 transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
