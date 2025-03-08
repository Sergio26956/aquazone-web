import '@/styles/globals.css'; // ✅ Única importación de CSS global permitida
import WhatsAppButton from '@/components/WhatsAppButton';
import WaterSound from '@/components/WaterSound';
import CookieBanner from '@/components/CookieBanner';
import SEO from '@/components/SEO';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO 
        title="AQUAZONE | Parques Acuáticos" 
        description="Diversión familiar con los mejores parques acuáticos hinchables."
      />
      <Component {...pageProps} />
      <WhatsAppButton />
      <WaterSound />
      <CookieBanner />
    </>
  );
}
