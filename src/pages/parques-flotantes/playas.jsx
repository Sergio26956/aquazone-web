import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import SEO from '../../components/SEO';
import Gallery from '../../components/Gallery';
import Testimonios from '../../components/Testimonios';

export default function Playas() {
  return (
    <div>
      <SEO 
        title="AQUAZONE - Parques Flotantes en Playas" 
        description="Descubre nuestros parques acuáticos flotantes en las mejores playas."
      />
      <Navbar />
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Montaje en Playas 🏖️</h1>
          <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image src="/images/Captura1.webp" alt="Playas" layout="fill" objectFit="cover" />
          </div>
          <Gallery section="flotantes" />
          <Testimonios section="flotantes" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
