import { createSlice } from '@reduxjs/toolkit'
import { request } from '../../api/request'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

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
  })

const initialState = {
  value: localStorage.getItem('i18nextLng') || 'ar',
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state) => {
      const newLang = state.value === 'ar' ? 'en' : 'ar'
      state.value = newLang
      i18n.changeLanguage(newLang)
      window.document.dir = i18n.dir(newLang)
      window.document.documentElement.lang = newLang

      // Update Axios headers whenever the language changes
      request.defaults.headers['accept-language'] = newLang
      request.defaults.headers['Lang'] = newLang

      // Update localStorage to keep the language preference
      localStorage.setItem('i18nextLng', newLang)
    }
  },
})

export const { changeLang } = langSlice.actions

export default langSlice.reducer