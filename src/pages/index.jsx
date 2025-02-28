import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <h1 className="text-4xl text-center mt-20">¡Bienvenido a AQUAZONE! 🌊</h1>
        <img 
          src="/images/logo.webp" 
          alt="Logo temporal" 
          className="mx-auto mt-8 h-32 w-auto"
        />
      </main>
      <Footer />
    </div>
  );
}
