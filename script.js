const API_URL = 'https://catalog.gamepix.com/games?category=all&pagination=96';

document.addEventListener('DOMContentLoaded', fetchAutoGames);

async function fetchAutoGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        
        if (result && result.data) {
            gamesGrid.innerHTML = '';
            result.data.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.setAttribute('data-category', game.category ? game.category.toLowerCase() : 'arcade');
                card.onclick = () => playGame(game.title, game.url);
                
                card.innerHTML = `
                    <img src="${game.thumbnailUrl || game.banner_image}" alt="${game.title}" loading="lazy">
                    <div class="game-info">
                        <h3>${game.title}</h3>
                        <span class="badge">${game.category || 'Arcade'}</span>
                    </div>
                `;
                gamesGrid.appendChild(card);
            });
        }
    } catch (err) {
        console.error("Games fetch error:", err);
    }
}

function playGame(title, gameUrl) {
    document.getElementById('activeGameTitle').innerText = title;
    document.getElementById('gameIframe').src = gameUrl;
    const playerSection = document.getElementById('gamePlayerSection');
    playerSection.style.display = 'block';
    playerSection.scrollIntoView({ behavior: 'smooth' });
}

function closeGame() {
    document.getElementById('gamePlayerSection').style.display = 'none';
    document.getElementById('gameIframe').src = '';
}

function filterCategory(cat) {
    let cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        let cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat.includes(cat)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchGames() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
    });
}
