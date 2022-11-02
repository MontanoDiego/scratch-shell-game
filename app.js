/* Imports */

/* Get DOM Elements */


//get for EASY buttons
const oneButton = document.getElementById('one-doom');
const twoButton = document.getElementById('two-doom');
const threeButton = document.getElementById('three-doom');
// reset button
const resetButton = document.getElementById('reset-button');

// get for containers
// const containerOne = document.getElementById('container-one');
// const containerTwo = document.getElementById('container-two');
// const containerThree = document.getElementById('container-three');

// get for score elements
const totalElement = document.getElementById('total');
const winsElement = document.getElementById('wins');
const lossElement = document.getElementById('losses');

// get for asset images
const beerImage = './assets/one_Beer.png';
const maskImage = './assets/MFDOOM.png';

// get for images
let maskImageOne = document.getElementById('img-one');
let maskImageTwo = document.getElementById('img-two');
let maskImageThree = document.getElementById('img-three');

// get for hard difficulty images
let maskImageFour = document.getElementById('img-four');
let maskImageFive = document.getElementById('img-five');

// get for hard difficulty buttons
let makeBtnOneHard = document.getElementById('one-doom-hard');
let maskBtnTwoHard = document.getElementById('two-doom-hard');
let maskBtnThreeHard = document.getElementById('three-doom-hard');
let maskBtnFourHard = document.getElementById('four-doom');
let maskBtnFiveHard = document.getElementById('five-doom');


// drop down
const difficultySelector = document.getElementById('difficulty-selector');

const easyDrop = document.getElementById('easy-select');
const hardDrop = document.getElementById('hard-select');




/* State */

const options = [maskImageOne, maskImageTwo, maskImageThree];
// options for medium difficulty
const optionsMed = [maskImageOne, maskImageTwo, maskImageThree, maskImageFour];

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



// DIFFICULTY DROP DOWN





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

// resets score values and mask images
resetButton.addEventListener('click', () => {
    maskReset();
    oneBeer = 0;
    totalGuess = 0;
    displayResult();
});

// hiding function for HARD buttons
function hardButtons() {
    
}
