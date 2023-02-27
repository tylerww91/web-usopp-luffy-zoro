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
    chooseFighter();
}
/* Components */

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function getRandomItem(fighterArray) {
    const random = getRandomNumber(fighterArray.length);
    const item = fighterArray[random];
    return item;
}

function score() {
    if (userChoice === 'usopp' && computerChoice === 'luffy') {
        losses++;
        total++;
        vsDisplay.textContent = 'LOSS!';
        lossDisplay.textContent = losses;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'luffy.jpg';
        userImg.src = 'assets/' + 'usopp.jpg';
    }
    if (userChoice === 'usopp' && computerChoice === 'zoro') {
        wins++;
        total++;
        vsDisplay.textContent = 'WIN!';
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'zoro.jpg';
        userImg.src = 'assets/' + 'usopp.jpg';
    }
    if (userChoice === 'usopp' && computerChoice === 'usopp') {
        draws++;
        total++;
        vsDisplay.textContent = 'DRAW!';
        drawsDisplay.textContent = draws;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'usopp.jpg';
        userImg.src = 'assets/' + 'usopp.jpg';
    }
    if (userChoice === 'luffy' && computerChoice === 'luffy') {
        draws++;
        total++;
        vsDisplay.textContent = 'DRAW!';
        drawsDisplay.textContent = draws;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'luffy.jpg';
        userImg.src = 'assets/' + 'luffy.jpg';
    }
    if (userChoice === 'luffy' && computerChoice === 'zoro') {
        losses++;
        total++;
        vsDisplay.textContent = 'LOSS!';
        lossDisplay.textContent = losses;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'zoro.jpg';
        userImg.src = 'assets/' + 'luffy.jpg';
    }
    if (userChoice === 'luffy' && computerChoice === 'usopp') {
        wins++;
        total++;
        vsDisplay.textContent = 'WIN!';
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'usopp.jpg';
        userImg.src = 'assets/' + 'luffy.jpg';
    }
    if (userChoice === 'zoro' && computerChoice === 'luffy') {
        wins++;
        total++;
        vsDisplay.textContent = 'WIN!';
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'luffy.jpg';
        userImg.src = 'assets/' + 'zoro.jpg';
    }
    if (userChoice === 'zoro' && computerChoice === 'zoro') {
        draws++;
        total++;
        vsDisplay.textContent = 'DRAW!';
        winsDisplay.textContent = wins;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'zoro.jpg';
        userImg.src = 'assets/' + 'zoro.jpg';
    }
    if (userChoice === 'zoro' && computerChoice === 'usopp') {
        losses++;
        total++;
        vsDisplay.textContent = 'LOSS!';
        lossDisplay.textContent = losses;
        totalsDisplay.textContent = total;
        oppImg.src = 'assets/' + 'usopp.jpg';
        userImg.src = 'assets/' + 'zoro.jpg';
    }
}
/* Component */
// get DOM

const userImg = document.getElementById('user-img');
const oppImg = document.getElementById('opp-img');

let winsDisplay = document.getElementById('wins-display');
let lossDisplay = document.getElementById('loss-display');
let drawsDisplay = document.getElementById('draws-display');
let totalsDisplay = document.getElementById('totals-display');
let vsDisplay = document.getElementById('vs');

const chooseUsopp = document.getElementById('usopp-button');
const chooseLuffy = document.getElementById('luffy-button');
const chooseZoro = document.getElementById('zoro-button');

const playAgain = document.getElementById('play-again-button');

// display

function chooseFighter() {
    playAgain.classList.add('hidden');
}

function displayFighters() {
    chooseLuffy.classList.add('hidden');
    chooseZoro.classList.add('hidden');
    chooseUsopp.classList.add('hidden');
    playAgain.classList.remove('hidden');
}
// event listeners

chooseUsopp.addEventListener('click', () => {
    userChoice = 'usopp';
    computerChoice = getRandomItem(fighterArray);
    score(userChoice, computerChoice);
    displayFighters();
});

chooseLuffy.addEventListener('click', () => {
    userChoice = 'luffy';
    computerChoice = getRandomItem(fighterArray);
    score(userChoice, computerChoice);
    displayFighters();
});

chooseZoro.addEventListener('click', () => {
    userChoice = 'zoro';
    computerChoice = getRandomItem(fighterArray);
    score(userChoice, computerChoice);
    displayFighters();
});

playAgain.addEventListener('click', () => {
    chooseLuffy.classList.remove('hidden');
    chooseZoro.classList.remove('hidden');
    chooseUsopp.classList.remove('hidden');
    playAgain.classList.add('hidden');
});

/* Run page load code */
load();
