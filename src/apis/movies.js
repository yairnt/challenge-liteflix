import axiosInstance from "./index";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

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

export {
    getMovies,
}