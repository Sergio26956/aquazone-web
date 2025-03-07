import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Testimonios from '@/components/Testimonios';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ScrollAnimation>
        <Testimonios />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
