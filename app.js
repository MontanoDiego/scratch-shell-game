/* Imports */

/* Get DOM Elements */

const oneButton = document.getElementById('one-doom');
const twoButton = document.getElementById('two-doom');
const threeButton = document.getElementById('three-doom');
const resetButton = document.getElementById('reset-button');

const containerOne = document.getElementById('container-one');
const containerTwo = document.getElementById('container-two');
const containerThree = document.getElementById('container-three');

const totalElement = document.getElementById('total');
const winsElement = document.getElementById('wins');
const lossElement = document.getElementById('losses');

const beerImage = './assets/one_Beer.png';
const maskImage = './assets/MFDOOM.png';
let maskImageOne = document.getElementById('img-one');
let maskImageTwo = document.getElementById('img-two');
let maskImageThree = document.getElementById('img-three');

/* State */

const options = [maskImageOne, maskImageTwo, maskImageThree];

let oneBeer = 0;
let totalGuess = 0;

/* Events */

oneButton.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 3);
    const answer = options[beer];
    // need guess handler
    handleGuess(answer, maskImageOne);
});

twoButton.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 3);
    const answer = options[beer];
    // need guess handler
    handleGuess(answer, maskImageTwo);
});

threeButton.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 3);
    const answer = options[beer];
    // need guess handler
    handleGuess(answer, maskImageThree);
});


// GUESS HANDLER

function handleGuess(correctAnswer, guess) {
    //reset images
    maskReset();
    // increment
    totalGuess++;
    // uhhhhhhhhhhhhhhhhhh
    if (correctAnswer === maskImageOne) {
        maskImageOne.src = beerImage;
    } else if (correctAnswer === maskImageTwo) {
        maskImageTwo.src = beerImage;
    } else {
        maskImageThree.src = beerImage;
    }
    // correct
    if (correctAnswer === guess) {
        oneBeer++;
    }
    // shows results
    displayResult();
}


/* Display Functions */

// TEST changes image from default to beer
// function displayBeer() {
//     maskImageOne.src = beerImage;
// }

function displayResult() {
    totalElement.textContent = totalGuess;
    winsElement.textContent = oneBeer;
    lossElement.textContent = totalGuess - oneBeer;
}

// resets all masks back to default image
function maskReset() {
    maskImageOne.src = maskImage;
    maskImageTwo.src = maskImage;
    maskImageThree.src = maskImage;
}

resetButton.addEventListener('click', () => {
    maskReset();
    oneBeer = 0;
    totalGuess = 0;
    displayResult();
});