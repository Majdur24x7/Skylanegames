// GamePix Free Public API URL (100+ Top Games)
const API_URL = 'https://catalog.gamepix.com/games?category=all&pagination=100';

// Page load hone par automatic games fetch karein
document.addEventListener('DOMContentLoaded', () => {
    fetchAutoGames();
});

// Auto Games Fetching Function
async function fetchAutoGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        
        // Dynamic Games Render
        if (result && result.data) {
            gamesGrid.innerHTML = ''; // Clear default static cards
            
            result.data.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.setAttribute('data-category', game.category ? game.category.toLowerCase() : 'arcade');
                
                // Game Click Event
                card.onclick = () => playGame(game.title, game.url);
                
                // Card HTML Structure
                card.innerHTML = `
                    <img src="${game.banner_image || game.thumbnailUrl}" alt="${game.title}" loading="lazy">
                    <div class="game-info">
                        <h3>${game.title}</h3>
                        <span class="badge">${game.category || 'Game'}</span>
                    </div>
                `;
                
                gamesGrid.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error fetching games:", error);
    }
}

// Open Game Player Section
function playGame(title, gameUrl) {
    document.getElementById('activeGameTitle').innerText = title;
    document.getElementById('gameIframe').src = gameUrl;
    
    const playerSection = document.getElementById('gamePlayerSection');
    playerSection.style.display = 'block';
    playerSection.scrollIntoView({ behavior: 'smooth' });
}

// Close Game Player Section
function closeGame() {
    document.getElementById('gamePlayerSection').style.display = 'none';
    document.getElementById('gameIframe').src = '';
}

// Filter Games by Category
function filterCategory(category) {
    let cards = document.querySelectorAll('.game-card');
    let buttons = document.querySelectorAll('.cat-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    if(event) event.target.classList.add('active');

    cards.forEach(card => {
        let cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Games
function searchGames() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
