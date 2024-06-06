import axios from 'axios';

const API_KEY = '21d96eb31dd344fb99d79df51c0cd97d';
const BASE_URL = 'https://newsapi.org/v2';

export const getSportsNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                category: 'sports',
                country: 'ru',
                pageSize: 4,
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching sports news:', error);
        return [];
    }
};
