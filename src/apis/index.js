/* eslint-disable no-undef */
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL || 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
