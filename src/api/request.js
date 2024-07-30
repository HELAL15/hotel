
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
  const token = sessionStorage.getItem('hotel');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
