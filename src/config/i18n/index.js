import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './en.json';
translationEn.codes = {...translationEn };
const resources = {
    en: {
        translation: translationEn,
    },
};
i18n.use(initReactI18next).init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;