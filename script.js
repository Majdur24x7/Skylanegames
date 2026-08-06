// Open Game Player Section Smoothly
function playGame(title, gameUrl) {
    document.getElementById('activeGameTitle').innerText = title;
    document.getElementById('gameIframe').src = gameUrl;
    
    const playerSection = document.getElementById('gamePlayerSection');
    playerSection.style.display = 'block';
    
    // Scroll smoothly to game player
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
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
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
