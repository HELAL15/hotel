import axios from 'axios';
import Cookie from 'cookie-universal';
import { baseUrl } from './api';

// cookies
const cookie = Cookie();

// get lang from local storage
const lang = localStorage.getItem("lang") || 'en_US';


export const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'accept-language': lang,
    "Lang":lang,
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
