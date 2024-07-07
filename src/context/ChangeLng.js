import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useLocation, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { request } from '../api/request';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'ar',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'subdomain', 'queryString', 'sessionStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
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
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'ar');
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    i18n.changeLanguage(lang);
    window.document.dir = i18n.dir(lang);
    window.document.documentElement.lang = lang;
    Cookies.set('i18next', lang);
    localStorage.setItem("lang", lang);

    // Update Axios headers whenever the language changes
    request.defaults.headers['accept-language'] = lang;
    request.defaults.headers['Lang'] = lang;
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    navigate(location.pathname, { replace: true });
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
