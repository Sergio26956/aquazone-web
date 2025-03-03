import WhatsAppButton from '../components/WhatsAppButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton /> {/* Esto añade el botón a todas las páginas */}
    </>
  );
}

export default MyApp;
