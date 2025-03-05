import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function ParqueUrbanoMovil() {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Parque Urbano Móvil 🌆</h1>
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image src="/images/Cupace20180930163150.png" alt="Parque Urbano" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
