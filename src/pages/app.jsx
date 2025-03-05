// src/pages/app.jsx
import '@/styles/globals.css'; // Importación CORRECTA con alias ✅
import WhatsAppButton from '@/components/WhatsAppButton';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}
