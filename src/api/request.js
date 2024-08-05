
import axios from 'axios';
import { baseUrl } from './api';

// Initial language from localStorage or default to 'ar'
const lang = localStorage.getItem("i18nextLng") || 'ar';

export const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'accept-language': lang,
    'Lang': lang,
  },
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('hotel');
  const lang = localStorage.getItem("i18nextLng")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if(lang){
    config.headers['accept-language'] = lang;
    config.headers['lang'] = lang
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
