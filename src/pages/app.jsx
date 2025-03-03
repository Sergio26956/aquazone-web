import WhatsAppButton from '../components/WhatsAppButton'; // Ruta corregida

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton /> {/* Botón añadido aquí */}
    </>
  );
}

export default MyApp;
