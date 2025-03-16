import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
