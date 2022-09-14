/* Imports */

/* State */
const fighterArray = ['usopp', 'luffy', 'zoro'];
let userChoice = '';
let computerChoice = getRandomItem(fighterArray);
let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

/* Actions */
function load() {
    // chooseFighter();
}
/* Components */

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function getRandomItem(fighterArray) {
    const random = getRandomNumber(fighterArray.length);
    const item = fighterArray[random];
    console.log('here i am', item);
    return item;
}

function score() {
    if (userChoice === 'usopp' && computerChoice === 'luffy') {
        losses++;
        total++;
        lossDisplay.textContent = losses;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'usopp' && computerChoice === 'zoro') {
        wins++;
        total++;
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'usopp' && computerChoice === 'usopp') {
        draws++;
        total++;
        drawsDisplay.textContent = draws;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'luffy' && computerChoice === 'luffy') {
        draws++;
        total++;
        drawsDisplay.textContent = draws;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'luffy' && computerChoice === 'zoro') {
        losses++;
        total++;
        lossDisplay.textContent = losses;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'luffy' && computerChoice === 'usopp') {
        wins++;
        total++;
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'zoro' && computerChoice === 'luffy') {
        wins++;
        total++;
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'zoro' && computerChoice === 'zoro') {
        draws++;
        total++;
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
    }
    if (userChoice === 'zoro' && computerChoice === 'usopp') {
        losses++;
        total++;
        lossDisplay.textContent = losses;
        totalsDisplay.textContent = total;
    }
}
/* Component */
// get DOM
// const usoppImg = document.getElementById('usopp-img');
// const luffyImg = document.getElementById('luffy-img');
// const zoroImg = document.getElementById('zoro-img');

let winsDisplay = document.getElementById('wins-display');
let lossDisplay = document.getElementById('loss-display');
let drawsDisplay = document.getElementById('draws-display');
let totalsDisplay = document.getElementById('totals-display');

const chooseUsopp = document.getElementById('usopp-button');
const chooseLuffy = document.getElementById('luffy-button');
const chooseZoro = document.getElementById('zoro-button');

// const playAgain = document.getElementById('play-again-button');

// display
// function chooseFighter() {
//     if (gameState === 'choose') {
//         playAgain.classList.add('hidden');
//     } else {
//         if (gameState)
//     }
// }

// event listeners

chooseUsopp.addEventListener('click', () => {
    userChoice = 'usopp';
    computerChoice;
    // chooseFighter();
    getRandomItem(fighterArray);
    score(userChoice, computerChoice);
});

chooseLuffy.addEventListener('click', () => {
    userChoice = 'luffy';
    computerChoice;
    // chooseFighter();
    getRandomItem(fighterArray);
    score(userChoice, computerChoice);
});

chooseZoro.addEventListener('click', () => {
    userChoice = 'zoro';
    computerChoice;
    // chooseFighter();
    getRandomItem(fighterArray);
    score(userChoice, computerChoice);
});

/* Run page load code */
load();
``;
