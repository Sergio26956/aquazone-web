import { FacebookIcon, InstagramIcon, TwitterIcon } from '@heroicons/react/outline'; // ✅ Ruta CORRECTA

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="flex justify-center space-x-6">
        <FacebookIcon className="h-6 w-6 hover:text-blue-300 cursor-pointer" />
        <InstagramIcon className="h-6 w-6 hover:text-pink-400 cursor-pointer" />
        <TwitterIcon className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
      </div>
    </footer>
  );
}
