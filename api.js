//const API_KEY = 'ccb6a2121b4f4a1b26a5a546b0b67eb1';


import { showMessage } from "./App.js"

const API_KEY = 'e19c7ab36e3da93087519eea0b7c71f7';
const BASE_URL = 'https://gnews.io/api/v4';

export async function getNews(category = 'general') {

    showMessage('Loading...')

    try {
        const response = await fetch(
            `${BASE_URL}/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`
        );

        // If the API returns an error (like 403), handle it here
        if (!response.ok) {
            const errorData = await response.json();
            console.error("API Error:", errorData.errors);
            return { articles: [] }; // Return empty articles to prevent .forEach crash
        }

        return await response.json();
    } catch (error) {
        console.error("Network Error:", error);
        return { articles: [] }; 
    }
}

export async function getSearchNews(query) {

    showMessage('Loading...')

    try {
        const response = await fetch(
            `${BASE_URL}/search?q=${query}&apikey=${API_KEY}`
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("API Error:", errorData.errors);
            return { articles: [] }; 
        }

        return await response.json();
    } catch (error) {
        console.error("Network Error:", error);
        return { articles: [] }; 
    }
}
