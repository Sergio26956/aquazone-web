import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Piscinas() {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Montaje en Piscinas 🏊</h1>
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image src="/images/Captura de pantalla_20210722_152628_com.android.gallery3d.webp" alt="Piscinas" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
