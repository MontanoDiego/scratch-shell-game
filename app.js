/* Imports */

/* Get DOM Elements */
const oneButton = document.getElementById('one-doom');
const twoButton = document.getElementById('two-doom');
const threeButton = document.getElementById('three-doom');

const containerOne = document.getElementById('container-one');
const containerTwo = document.getElementById('container-two');
const containerThree = document.getElementById('container-three');

const totalElement = document.getElementById('total');
const winsElement = document.getElementById('wins');
const lossElement = document.getElementById('losses');

const beerImage = './assets/one_Beer.png';
var maskImage = document.getElementById('img-one');

/* State */
const options = ['one', 'two', 'three'];


let oneBeer = 0;
let totalGuess = 0;
/* Events */

/* Display Functions */

function displayBeer() {
    console.log('click');
    maskImage.src = beerImage;
}

oneButton.addEventListener('click', () => {
    displayBeer();
});

