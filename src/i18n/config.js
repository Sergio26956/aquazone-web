import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to AQUAZONE",
      }
    },
    es: {
      translation: {
        welcome: "Bienvenido a AQUAZONE",
      }
    }
  },
  lng: 'es',
  fallbackLng: 'es'
});

export default i18n;
