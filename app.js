/* Imports */

/* Get DOM Elements */
const debugButton = document.getElementById('test');

//get for EASY buttons
const oneButton = document.getElementById('one-doom');
const twoButton = document.getElementById('two-doom');
const threeButton = document.getElementById('three-doom');
// reset button
const resetButton = document.getElementById('reset-button');

// get for containers
const hardContainerFour = document.getElementById('container-four');
const hardContainerFive = document.getElementById('container-five');

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
let maskBtnOneHard = document.getElementById('one-doom-hard');
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
const optionsHard = [maskImageOne, maskImageTwo, maskImageThree, maskImageFour, maskImageFive];

let oneBeer = 0;
let totalGuess = 0;




/* Events */

// EASY buttons
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


// HARD buttons

maskBtnOneHard.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 5);
    const answer = optionsHard[beer];
    handleGuessHard(answer, maskImageOne);
});

maskBtnTwoHard.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 5);
    const answer = optionsHard[beer];
    handleGuessHard(answer, maskImageTwo);
});

maskBtnThreeHard.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 5);
    const answer = optionsHard[beer];
    handleGuessHard(answer, maskImageThree);
});

maskBtnFourHard.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 5);
    const answer = optionsHard[beer];
    handleGuessHard(answer, maskImageFour);
});

maskBtnFiveHard.addEventListener('click', () => {
    const beer = Math.floor(Math.random() * 5);
    const answer = optionsHard[beer];
    handleGuessHard(answer, maskImageFive);
});


// DIFFICULTY DROP DOWN

difficultySelector.addEventListener('change', () => {
    maskReset();
    oneBeer = 0;
    totalGuess = 0;
    displayResult();
    hardButtons();
    hardImages();
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


// HARD GUESS HANDLER

function handleGuessHard(correctAnswer, guess) {
    //reset images
    maskReset();
    // increment
    totalGuess++;
    // uhhhhhhhhhhhhhhhhhh
    if (correctAnswer === maskImageOne) {
        maskImageOne.src = beerImage;
    } else if (correctAnswer === maskImageTwo) {
        maskImageTwo.src = beerImage;
    } else if (correctAnswer === maskImageThree) {
        maskImageThree.src = beerImage;
    } else if (correctAnswer === maskImageFour) {
        maskImageFour.src = beerImage;
    } else {
        maskImageFive.src = beerImage;
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
    maskImageFour.src = maskImage;
    maskImageFive.src = maskImage;
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
    // unhides hard buttons
    maskBtnOneHard.classList.toggle('hide');
    maskBtnTwoHard.classList.toggle('hide');
    maskBtnThreeHard.classList.toggle('hide');
    maskBtnFourHard.classList.toggle('hide');
    maskBtnFiveHard.classList.toggle('hide');
    // hides easy buttons
    oneButton.classList.toggle('hide');
    twoButton.classList.toggle('hide');
    threeButton.classList.toggle('hide');
}

// hiding function for HARD images
function hardImages() {
    // unhides HARD containers
    hardContainerFour.classList.toggle('hide');
    hardContainerFour.classList.toggle('mask');
    hardContainerFive.classList.toggle('hide');
    hardContainerFive.classList.toggle('mask');
}

// debugButton.addEventListener('click', () => {
//     hardButtons();
//     hardImages();
//     console.log('debug');
// });