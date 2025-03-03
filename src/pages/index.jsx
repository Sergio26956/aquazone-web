// src/pages/index.jsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section Épico (reemplaza todo el contenido anterior) */}
      <HeroSection />

      {/* Sección de Contenido Adicional (opcional) */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            Vive la experiencia acuática definitiva
          </h2>
          
          {/* Galería/Contenido futuro aquí */}
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
