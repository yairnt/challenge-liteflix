/* eslint-disable no-undef */
import axios from 'axios';

console.info('import.meta.env.REACT_APP_API_BASE_URL :', import.meta.env.REACT_APP_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL || 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
