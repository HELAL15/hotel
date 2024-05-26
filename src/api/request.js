import axios from 'axios';
import Cookie from 'cookie-universal';
import { useLngContext } from '../context/ChangeLng';

// cookies
const cookie = Cookie();
// get token from cookies
const token = cookie.get('e-commerce');
// get lang from local storage
const lang = localStorage.getItem("lang")


export const request = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'accept-language': 'en_US',
    'lang': `${lang ? "ar" : "en"}`,
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: `bearer ${token}`,
  },
});