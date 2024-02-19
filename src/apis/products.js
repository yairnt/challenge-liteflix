import axiosInstance from "./index";

async function getProducts() {
    try {
        const response = await axiosInstance.get('/comments');
        if (response) {
            return response.data;
        }
    } catch (err) {
        console.info('Err getProducts :', err);
        throw err;
    }
}

export {
    getProducts,
}