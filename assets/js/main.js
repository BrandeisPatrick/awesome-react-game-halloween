/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(scrollUp) {
        if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .discount__img`,{origin: 'left'})
sr.reveal(`.about__img, .discount__data`,{origin: 'right'})

/*=============== BACKGROUND MUSIC CONTROL ===============*/
const backgroundMusic = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');

let isMusicPlaying = true;
let currentPlayPromise = null;

// Auto-play music when page loads (with user interaction)
document.addEventListener('DOMContentLoaded', function() {
    // Set volume and keep default icon as unmuted
    backgroundMusic.volume = 0.3; // Set volume to 30%
    musicIcon.className = 'bx bx-volume-full';

    // Attempt autoplay
    currentPlayPromise = backgroundMusic.play();

    if (currentPlayPromise !== undefined) {
        currentPlayPromise.then(() => {
            // Music is playing
            isMusicPlaying = true;
            currentPlayPromise = null;
        }).catch(() => {
            // Autoplay blocked - keep icon as unmuted, music will start on first interaction
            // Icon stays as bx-volume-full (ON state)
            // Music will play when user clicks anywhere
            currentPlayPromise = null;
            document.body.addEventListener('click', function startMusic() {
                if(isMusicPlaying && backgroundMusic.paused) {
                    currentPlayPromise = backgroundMusic.play();
                    if(currentPlayPromise) {
                        currentPlayPromise.then(() => {
                            currentPlayPromise = null;
                        }).catch(() => {
                            currentPlayPromise = null;
                        });
                    }
                }
            }, { once: true });
        });
    }
});

// Music toggle button
if(musicToggle) {
    musicToggle.addEventListener('click', async () => {
        // Wait for any pending play operation to complete
        if(currentPlayPromise !== null) {
            try {
                await currentPlayPromise;
            } catch(e) {
                // Ignore errors from interrupted play
            }
            currentPlayPromise = null;
        }

        if(isMusicPlaying) {
            backgroundMusic.pause();
            musicIcon.className = 'bx bx-volume-mute';
            isMusicPlaying = false;
        } else {
            currentPlayPromise = backgroundMusic.play();
            musicIcon.className = 'bx bx-volume-full';
            isMusicPlaying = true;

            if(currentPlayPromise) {
                currentPlayPromise.then(() => {
                    currentPlayPromise = null;
                }).catch((e) => {
                    console.log('Play prevented:', e);
                    currentPlayPromise = null;
                });
            }
        }

        // Play click sound
        if(clickSound) {
            clickSound.currentTime = 0;
            clickSound.volume = 0.4;
            clickSound.play().catch(() => {});
        }
    });
}

/*=============== SOUND EFFECTS ===============*/
// Set volumes for sound effects
if(hoverSound) hoverSound.volume = 0.2;
if(clickSound) clickSound.volume = 0.4;

// Add hover sound to game cards
function addSoundEffects() {
    const gameCards = document.querySelectorAll('.trick__content');
    const playButtons = document.querySelectorAll('.trick__button');

    // Hover sounds for cards
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if(hoverSound && isMusicPlaying) {
                hoverSound.currentTime = 0;
                hoverSound.play().catch(e => console.log('Sound play prevented'));
            }
        });
    });

    // Click sounds for buttons
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(clickSound && isMusicPlaying) {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log('Sound play prevented'));
            }
        });
    });
}

// Call this after games are loaded
setTimeout(addSoundEffects, 500);
