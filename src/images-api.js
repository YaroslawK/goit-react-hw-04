import axios from 'axios';


const UNSPLASH_ACCESS_KEY = 'E1cdy3dv_KADegi36FDRDy7wAcwRFX8WkgPlx-8266g';

async function getImages(query, perPage = 10, page = 1) {
    const url = `https://api.unsplash.com/search/photos`;

    try {
        const response = await axios.get(url, {
            params: {
                query: query,
                per_page: perPage,
                page: page
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });

        return response.data.results;
    } catch (error) {
        console.error('Помилка при отриманні зображень з Unsplash:', error.message);
        console.error('Деталі помилки:', error.response?.data || error);
        throw error;
    }
}

async function fetchImages() {
    try {
        const images = await getImages('nature');
        console.log('Отримані зображення:', images);
    } catch (error) {
        console.error('Помилка:', error.message);
    }
}

fetchImages();


export default getImages;