// Open Game Player
function playGame(title, gameUrl) {
    document.getElementById('activeGameTitle').innerText = title;
    document.getElementById('gameIframe').src = gameUrl;
    document.getElementById('gamePlayerModal').style.display = 'flex';
}

// Close Game Player
function closeGame() {
    document.getElementById('gamePlayerModal').style.display = 'none';
    document.getElementById('gameIframe').src = '';
}

// Category Filter
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

// Search Filter
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
