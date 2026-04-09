/**
 * API Service
 *  Handles data fetching from the Disney API
 */

const DISNEY_API_URL = 'https://api.disneyapi.dev/character';

export const getCharacters = async (name) => {
    try {
        // Si hay nombre, usamos el endpoint de búsqueda, si no, traemos todos
        const url = name 
            ? `${DISNEY_API_URL}?name=${encodeURIComponent(name)}` 
            : DISNEY_API_URL;

        const response = await fetch(url);
        const result = await response.json();
        
        // La API de Disney guarda los personajes en la propiedad .data
        return Array.isArray(result.data) ? result.data : [result.data];
    } catch (error) {
        console.error('Error fetching Disney data:', error);
        return [];
    }
};