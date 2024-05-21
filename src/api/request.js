import axios from 'axios';
import Cookie from 'cookie-universal';

// cookies
const cookie = Cookie();
// get token from cookies
const token = cookie.get('e-commerce');

export const request = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'accept-language': 'en_US',
    'lang': 'en',
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: `bearer ${token}`,
  },
});