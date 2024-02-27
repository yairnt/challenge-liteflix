import axiosInstance from "./index";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const CLOUD_BASE_URL = import.meta.env.VITE_CLOUD_BASE_URL;

async function getMovies() {
  try {
    const response = await axiosInstance.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.info('Err getMovies :', err);
    throw err;
  }
}

async function getMoviesFromDB() {
  try {
    const response = await axiosInstance.get(`${CLOUD_BASE_URL}/images`);
    if (response) {
      return response.data;
    }
  } catch (err) {
    console.info('Err getMoviesFromDB :', err);
    throw err;
  }
}

async function uploadMovie(data) {
  try {
    const response = await axiosInstance.post(`${CLOUD_BASE_URL}/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.info('Server response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error uploading movie:', error);
  }
}

export {
  getMovies,
  uploadMovie,
  getMoviesFromDB,
}
