// Game data from the awesome list
const horrorGames = [
    {
        name: "Skull Hotel",
        github: "https://github.com/JamesHall38/skullhotel.io",
        demo: "https://skullhotel.vercel.app",
        stars: 16,
        description: "R3F horror survival game. Play as housekeeper cleaning 8 hotel rooms with deadly entities hiding in random spots.",
        image: "assets/img/trick-treat1-img.png"
    },
    {
        name: "Thistle",
        github: "https://github.com/georgewaraw/thistle",
        demo: "https://georgewaraw.github.io/thistle/",
        stars: "Low",
        description: "3D horror FPS with old-school PSX/Saturn aesthetic. Chase sequences through abandoned city.",
        image: "assets/img/trick-treat2-img.png"
    },
    {
        name: "2D Zombie Survival IO",
        github: "https://github.com/TomYeoman/2d-zombie-survival-io-demo",
        demo: null,
        stars: 7,
        description: "Multiplayer zombie survival IO game with cooperative gameplay",
        image: "assets/img/trick-treat3-img.png"
    }
];

const escapeGames = [
    {
        name: "React Roguelike",
        github: "https://github.com/TimAstier/react-roguelike",
        demo: "https://react-roguelike-demo.netlify.app",
        stars: 29,
        description: "Dungeon crawler with darkness mechanics. Explore procedurally generated dungeons where much of the map is hidden.",
        image: "assets/img/new1-img.png"
    },
    {
        name: "FeedVid Live",
        github: "https://github.com/rameshvarun/feedvid-live",
        demo: "https://varunramesh.itch.io/feedvid-live",
        stars: 3,
        description: "Horror puzzle game with text-adventure gameplay. Control a livestreamer through typed commands in this React + Three.js game.",
        image: "assets/img/new2-img.png"
    },
    {
        name: "Jack-o-Hangman",
        github: "https://github.com/kapppa-joe/jack-o-hangman",
        demo: "https://kapppa-joe.github.io/jack-o-hangman/",
        stars: 1,
        description: "Halloween-themed word guessing game with custom graphics and jumpscare elements.",
        image: "assets/img/new3-img.png"
    },
    {
        name: "Roguelike Dungeon Crawler",
        github: "https://github.com/StefanieWang/ReactJS-Roguelike-Dungeon-Crawler",
        demo: "https://codepen.io/StefanieWang/pen/EXbyrr",
        stars: "-",
        description: "Turn-based dungeon crawler with darkness mechanic. Battle enemies through 4 levels to defeat the final boss.",
        image: "assets/img/new4-img.png"
    },
    {
        name: "React Online Escape Game",
        github: "https://github.com/YsarocK/react-based-online-escape-game",
        demo: null,
        stars: "-",
        description: "Online escape game for ESD Bordeaux",
        image: "assets/img/new5-img.png"
    },
    {
        name: "Escape Room",
        github: "https://github.com/DeirdreHegarty/escape-room",
        demo: null,
        stars: "-",
        description: "Horror-themed puzzle game for Firefox",
        image: "assets/img/new6-img.png"
    },
    {
        name: "Escape Game React",
        github: "https://github.com/sjapaget/escape-game-react",
        demo: "https://www.sjapaget.online",
        stars: "-",
        description: "Practice project for React and Tailwind",
        image: "assets/img/trick-treat4-img.png"
    }
];

const halloweenApps = [
    {
        name: "Thriller",
        github: "https://github.com/cooptothe/Thriller",
        demo: null,
        stars: "-",
        description: "Horror movie app for browsing films. Features trending, upcoming, and top-rated horror movies",
        image: "assets/img/trick-treat5-img.png"
    }
];

// Function to create a game card
function createGameCard(game) {
    return `
        <div class="trick__content">
            <img src="${game.image}" alt="${game.name}" class="trick__img">
            <h3 class="trick__title">${game.name}</h3>
            <span class="trick__subtitle">${game.stars !== '-' ? '⭐ ' + game.stars + ' stars' : 'React Game'}</span>
            <p class="trick__description">${game.description}</p>
            <div class="trick__buttons">
                ${game.demo ? `<a href="${game.demo}" target="_blank" class="button trick__button">
                    <i class='bx bx-play'></i> Play Now
                </a>` : ''}
                <a href="${game.github}" target="_blank" class="button button--ghost trick__button">
                    <i class='bx bxl-github'></i>
                </a>
            </div>
        </div>
    `;
}

// Load games into their respective sections
function loadGames() {
    const horrorContainer = document.getElementById('horror-games');
    const escapeContainer = document.getElementById('escape-games');
    const appsContainer = document.getElementById('app-games');

    if (horrorContainer) {
        horrorContainer.innerHTML = horrorGames.map(createGameCard).join('');
    }

    if (escapeContainer) {
        escapeContainer.innerHTML = escapeGames.map(createGameCard).join('');
    }

    if (appsContainer) {
        appsContainer.innerHTML = halloweenApps.map(createGameCard).join('');
    }
}

// Load games when DOM is ready
document.addEventListener('DOMContentLoaded', loadGames);
