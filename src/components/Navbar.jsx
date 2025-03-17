import { MenuIcon, XIcon } from '@heroicons/react/outline'; // ✅ Ruta CORRECTA

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="flex justify-between items-center">
        <MenuIcon className="h-8 w-8 text-blue-900 cursor-pointer" />
        <XIcon className="h-8 w-8 text-red-600 cursor-pointer" />
      </div>
    </nav>
  );
}
