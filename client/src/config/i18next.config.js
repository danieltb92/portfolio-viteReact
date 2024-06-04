import i18n from "i18next";
// import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from '../locales/en/cv.json';
import es from '../locales/es/cv.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    }
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false // React ya escapa los valores por defecto
  }
});
export default i18n;