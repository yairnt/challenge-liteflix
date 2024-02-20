/* eslint-disable no-undef */
import axios from 'axios';

console.info('import.meta.env.VITE_REACT_APP_API_BASE_URL :', import.meta.env.VITE_REACT_APP_API_BASE_URL);
console.info('import.meta.env.VITE_API_KEY :', import.meta.env.VITE_API_KEY);

const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL || 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
