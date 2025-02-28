import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ParquesFlotantes() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold">Parques Flotantes</h1>
        <div className="mt-8 space-y-4">
          <Link href="/parques-flotantes/piscinas" className="block bg-blue-100 p-4 rounded-lg">
            Piscinas
          </Link>
          <Link href="/parques-flotantes/playas" className="block bg-blue-100 p-4 rounded-lg">
            Playas
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
