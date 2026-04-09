/**
 * Details Page Logic
 * Renders extended information for Disney characters
 */

// 1. DOM Elements
const backBtn = document.getElementById('back-btn');
const detailsCard = document.getElementById('details-card');

// 2. Data Retrieval
const characterData = JSON.parse(sessionStorage.getItem('selectedChar'));

/**
 * Helper to turn arrays into readable text
 */
const getListText = (arr) => (arr && arr.length > 0 ? arr.join(', ') : 'None recorded');

// 3. Detailed Rendering
if (characterData && detailsCard) {
    detailsCard.innerHTML = `
        <div class="details-container">
            <div class="details-image">
                <img src="${characterData.imageUrl}" alt="${characterData.name}">
            </div>
            <div class="details-text">
                <h1>${characterData.name}</h1>
                <p class="id-tag">Character ID: #${characterData._id}</p>
                <hr>

                <div class="info-block">
                    <h3><i class="fas fa-video"></i> Media & Appearances</h3>
                    <p><span>Films:</span> ${getListText(characterData.films)}</p>
                    <p><span>Short Films:</span> ${getListText(characterData.shortFilms)}</p>
                    <p><span>TV Shows:</span> ${getListText(characterData.tvShows)}</p>
                    <p><span>Video Games:</span> ${getListText(characterData.videoGames)}</p>
                </div>

                <div class="info-block" style="margin-top: 1.5rem;">
                    <h3><i class="fas fa-users"></i> Relations</h3>
                    <p><span>Allies:</span> ${getListText(characterData.allies)}</p>
                    <p><span>Enemies:</span> ${getListText(characterData.enemies)}</p>
                </div>
                
                <div class="info-block" style="margin-top: 1.5rem;">
                    <p><span>Park Attractions:</span> ${getListText(characterData.parkAttractions)}</p>
                </div>
            </div>
        </div>
    `;
}

// 4. Back Button Logic
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.location.href = './search.html';
    });
}