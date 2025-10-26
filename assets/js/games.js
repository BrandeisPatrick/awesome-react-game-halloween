// Game data from the awesome list
const horrorGames = [
    {
        name: "Thistle",
        github: "https://github.com/georgewaraw/thistle",
        demo: "https://georgewaraw.github.io/thistle/",
        stars: "Low",
        description: "3D horror FPS with old-school PSX/Saturn aesthetic. Chase sequences through abandoned city.",
        image: "assets/img/trick-treat2-img.png"
    },
    {
        name: "The Curse of the Pumpkin",
        github: "https://github.com/wesleybertipaglia/course-of-pumpking",
        demo: "https://course-of-pumpkin.vercel.app/",
        stars: "-",
        description: "Halloween adventure game with pumpkin-themed challenges and spooky gameplay",
        image: "assets/img/trick-treat4-img.png"
    },
    {
        name: "Crazy Pumpkin",
        github: "https://github.com/Snokke/crazy-pumpkin",
        demo: "https://crazy-pumpkin.andriibabintsev.com",
        stars: "-",
        description: "Interactive 3D Halloween experience with creative pumpkin mechanics",
        image: "assets/img/trick-treat5-img.png"
    },
    {
        name: "Skull Hotel",
        github: "https://github.com/JamesHall38/skullhotel.io",
        demo: "https://skullhotel.vercel.app",
        stars: 16,
        description: "R3F horror survival game. Play as housekeeper cleaning 8 hotel rooms with deadly entities hiding in random spots.",
        image: "assets/img/trick-treat1-img.png"
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
        name: "Halloween CYOA Game",
        github: "https://github.com/coreyja/halloween-game",
        demo: "https://halloween.coreyja.com",
        stars: "-",
        description: "Choose Your Own Adventure style Halloween game with interactive storytelling and multiple paths",
        image: "assets/img/home1-img.png"
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
        name: "The Halloween Quiz",
        github: "https://github.com/LauraLyckholm/The-Halloween-Quiz",
        demo: "https://the-halloween-quiz.netlify.app/",
        stars: "-",
        description: "Interactive Halloween trivia quiz with spooky questions and themed design",
        image: "assets/img/about-img.png"
    },
    {
        name: "Spooky Potion Shop",
        github: "https://github.com/danielledonnelly/spooky-potion-shop",
        demo: "https://danielledonnelly.github.io/spooky-potion-shop/",
        stars: "-",
        description: "Halloween-themed potion crafting and shop management game",
        image: "assets/img/nav-img.png"
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
                    <i class='bx bx-play'></i> Play
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
