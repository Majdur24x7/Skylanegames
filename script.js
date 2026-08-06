// ==========================================
// GAMES DATABASE (Yahan aap 100+ games daal sakte hain)
// ==========================================
const allGames = [
    { title: "Cyber Runner", category: "Action", emoji: "🏃‍♂️", bg: "from-blue-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-1" },
    { title: "Puzzle Master", category: "Puzzle", emoji: "🧩", bg: "from-indigo-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-2" },
    { title: "Space Shooter", category: "Arcade", emoji: "🚀", bg: "from-purple-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-3" },
    { title: "Neon Dash", category: "Action", emoji: "⚡", bg: "from-pink-900 to-gray-800", url: "https://html5.gamemonetize.com/sample-game-4" }
    
    // Naya game add karne ka tareeqa:
    // { title: "Car Racing", category: "Racing", emoji: "🏎️", bg: "from-red-900 to-gray-800", url: "APKA_GAME_URL" }
];

// Website load hote hi saare games grid mein dikhana
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = "";

    allGames.forEach(game => {
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
});

// Game open karne ka function (Modal ke sath iframe load karna)
function openGame(gameName, gameUrl) {
    const modal = document.getElementById('gameModal');
    const titleElement = document.getElementById('modalGameTitle');
    const container = document.getElementById('gameContainer');

    titleElement.innerText = "Playing: " + gameName;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Background scroll lock

    // Game iframe load karna
    container.innerHTML = `
        <iframe src="${gameUrl}" class="w-full h-full border-0 rounded-xl" allowfullscreen></iframe>
    `;
}

// Game close karke wapas homepage par aane ka function
function closeGame() {
    const modal = document.getElementById('gameModal');
    const container = document.getElementById('gameContainer');

    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Scroll enable
    container.innerHTML = ""; // Frame clear karna taaki background audio/process band ho jaye
}
