/* Imports */

/* State */
let gameState = 'choose';
let userChoice = '';
let computerChoice = '';
let wins = 0
let losses = 0
let draws = 0
let total = 0

/* Actions */
function load() {
    chooseFighter();
}
/* Components */

/* Component */
// get DOM
const usoppImg = document.getElementById('usopp-img');
const luffyImg = document.getElementById('luffy-img');
const zoroImg = document.getElementById('zoro-img');

const chooseUsopp = document.getElementById('usopp-button');
const chooseLuffy = document.getElementById('luffy-button');
const chooseZoro = document.getElementById('zoro-button');

const playAgain = document.getElementById('play-again-button');

// display
function chooseFighter() {
    if (gameState === 'choose') {
        playAgain.classList.add('hidden');
    } else {
        if ()
    }
}

// event listeners

chooseUsopp.addEventListener('click', () => {
    userChoice = 'usopp-button';
    chooseFighter();
    gameState = 'results';
});

chooseLuffy.addEventListener('click', () => {
    choose = 'luffy-button';
    chooseFighter();
    gameState = 'results';
});

chooseZoro.addEventListener('click', () => {
    choose = 'zoro-button';
    chooseFighter();
    gameState = 'results';
});


/* Run page load code */
load();
