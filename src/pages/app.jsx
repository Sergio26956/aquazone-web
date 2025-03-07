import '@/styles/globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import WaterSound from '@/components/WaterSound';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
      <WaterSound />
    </>
  );
}
