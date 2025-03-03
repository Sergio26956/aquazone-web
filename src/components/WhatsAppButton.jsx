// src/components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      <Link
        href="https://wa.me/34649002658"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all block"
      >
        <FaWhatsapp className="h-8 w-8" />
      </Link>
    </div>
  );
}
