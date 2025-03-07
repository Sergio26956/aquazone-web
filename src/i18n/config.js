import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to AQUAZONE",
        contact: "Contact Us",
      }
    },
    es: {
      translation: {
        welcome: "Bienvenido a AQUAZONE",
        contact: "Contáctanos",
      }
    }
  },
  lng: 'es',
  fallbackLng: 'es'
});

export default i18n;
