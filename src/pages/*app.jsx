import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
