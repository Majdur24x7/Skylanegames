// ==========================================
// GAMES DATABASE (Atmegame Style - 100+ Games add karne ke liye list)
// ==========================================
const allGames = [
    { title: "Cyber Runner", category: "Action", emoji: "🏃‍♂️", bg: "from-blue-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-1" },
    { title: "Puzzle Master", category: "Puzzle", emoji: "🧩", bg: "from-indigo-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-2" },
    { title: "Space Shooter", category: "Arcade", emoji: "🚀", bg: "from-purple-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-3" },
    { title: "Neon Dash", category: "Action", emoji: "⚡", bg: "from-pink-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-4" },
    { title: "Turbo Car Racing", category: "Racing", emoji: "🏎️", bg: "from-red-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-5" },
    { title: "Brain Teaser", category: "Puzzle", emoji: "🧠", bg: "from-teal-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-6" },
    { title: "Galaxy Strike", category: "Arcade", emoji: "🛸", bg: "from-violet-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-7" },
    { title: "Highway Rider", category: "Racing", emoji: "🏍️", bg: "from-orange-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-8" }
    // Naya game add karne ke liye bas yahan niche comma lagakar aur add karein!
];

// Website load hote hi saare games dikhana
document.addEventListener("DOMContentLoaded", () => {
    displayGames(allGames);
});

// Games ko grid mein render karne ka function
function displayGames(gamesArray) {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = "";

    if (gamesArray.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-gray-400">No games found! Try searching something else.</div>`;
        return;
    }

    gamesArray.forEach(game => {
        grid.innerHTML += `
            <div onclick="openGame('${game.title}', '${game.url}')" class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition shadow-md group cursor-pointer">
                <div class="h-36 bg-gradient-to-br ${game.bg} flex items-center justify-center text-4xl group-hover:scale-105 transition duration-300">
                    ${game.emoji}
                </div>
                <div class="p-3">
                    <h3 class="font-semibold text-sm truncate">${game.title}</h3>
                    <p class="text-xs text-gray-400 mb-2">${game.category}</p>
                    <span class="inline-block w-full bg-yellow-400 text-gray-900 text-center font-bold py-1.5 rounded text-xs">Play Free</span>
                </div>
            </div>
        `;
    });
}

// Category filter function (Atmegame style tabs)
function filterCategory(category) {
    // Buttons styling update karna
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-yellow-400', 'text-gray-950', 'font-bold');
        btn.classList.add('bg-gray-800', 'text-gray-300', 'font-semibold');
    });
    event.target.classList.remove('bg-gray-800', 'text-gray-300', 'font-semibold');
    event.target.classList.add('bg-yellow-400', 'text-gray-950', 'font-bold');

    // Title change karna
    document.getElementById('sectionTitle').innerText = category === 'All' ? 'Popular Games' : category + ' Games';

    // Games filter karna
    if (category === 'All') {
        displayGames(allGames);
    } else {
        const filtered = allGames.filter(game => game.category === category);
        displayGames(filtered);
    }
}

// Search bar function (Live typing search)
function searchGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allGames.filter(game => game.title.toLowerCase().includes(query));
    displayGames(filtered);
    document.getElementById('sectionTitle').innerText = query ? `Search Results for "${query}"` : 'Popular Games';
}

// Game open karne ka function
function openGame(gameName, gameUrl) {
    const modal = document.getElementById('gameModal');
    const titleElement = document.getElementById('modalGameTitle');
    const container = document.getElementById('gameContainer');

    titleElement.innerText = "Playing: " + gameName;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    container.innerHTML = `
        <iframe src="${gameUrl}" class="w-full h-full border-0 rounded-xl" allowfullscreen></iframe>
    `;
}

// Game close karne ka function
function closeGame() {
    const modal = document.getElementById('gameModal');
    const container = document.getElementById('gameContainer');

    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    container.innerHTML = "";
}
