import { getCharacters } from './api.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsGrid = document.getElementById('results-grid');

/**
 * Render character cards dynamically based on API results
 * @param {Array} characters - The list of character objects
 */
const renderCards = (characters) => {
    resultsGrid.innerHTML = ''; 

    characters.forEach(char => {
        // Fallback image if the API doesn't provide one
        const imgPath = char.imageUrl || 'https://via.placeholder.com/300x400?text=No+Image';
        
        // Handle cases where 'films' array might be empty
        const firstFilm = char.films && char.films.length > 0 ? char.films[0] : 'Disney Original';

        const card = document.createElement('div');
        card.className = 'character-card';
        
        card.innerHTML = `
            <img src="${imgPath}" alt="${char.name}">
            <div class="character-info">
                <h3>${char.name}</h3>
                <p><strong>Featured in:</strong> ${firstFilm}</p>
            </div>
        `;
        
        // Store character data in sessionStorage for the details view
        card.addEventListener('click', () => {
            sessionStorage.setItem('selectedChar', JSON.stringify(char));
            window.location.href = './details.html';
        });

        resultsGrid.appendChild(card);
    });
};

/**
 * Handle search button click and loading states
 */
searchBtn.addEventListener('click', async () => {
    const name = searchInput.value;
    
    // 1. Show loading spinner to the user
    resultsGrid.innerHTML = '<div class="spinner"></div>';
    
    // 2. Fetch data from the external API
    const results = await getCharacters(name);
    
    // 3. Update the UI with results or show an error message
    if (results && results.length > 0) {
        renderCards(results);
    } else {
        resultsGrid.innerHTML = '<p class="error-msg">No characters found. Please try another name.</p>';
    }
});

/**
 * Handle user logout functionality
 */
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Remove session data and redirect to the login page
        localStorage.removeItem('isLoggedIn');
        window.location.href = '../index.html';
    });
}