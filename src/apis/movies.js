import axiosInstance from "./index";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const LOCAL_BASE_URL = import.meta.env.VITE_LOCAL_BASE_URL;

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

async function uploadMovie(data) {
  try {
    const response = await axiosInstance.post(`${LOCAL_BASE_URL}/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Error uploading movie:', error);
  }
}

export {
  getMovies,
  uploadMovie,
}
