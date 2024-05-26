import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'ar',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'subdomain', 'queryString', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/i18n/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false
    }
  });

const LngContext = createContext();

export const ChangeLng = ({ children }) => {
  const [lang, setLang] = useState(Cookies.get('i18next') || 'ar');



  useEffect(() => {
    i18n.changeLanguage(lang);
    window.document.dir = i18n.dir(lang);
    window.document.documentElement.lang = lang
    Cookies.set('i18next', lang);
    localStorage.setItem("lang" , lang)
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LngContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LngContext.Provider>
  );
};

export const useLngContext = () => {
  return useContext(LngContext);
};
