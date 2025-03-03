// src/pages/_app.jsx
   import WhatsAppButton from '@/components/WhatsAppButton'; // Ruta con alias ✅

   function MyApp({ Component, pageProps }) {
     return (
       <div className="min-h-screen bg-slate-50"> {/* Fondo general */}
         <Component {...pageProps} />
         <WhatsAppButton /> {/* Botón visible en TODAS las páginas */}
       </div>
     );
   }

   export default MyApp;
