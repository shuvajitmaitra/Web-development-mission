console.log("This is a separate js file");
// Option 1 Direct write in the HTML Code ----------------------------------------------
//<button onclick="console.log(65);">Another Button</button>


// option - 2 add one click function----------------------

// IMPORTANT: We will use this 
{/* <button onclick="makeRed()">Make red</button> */ }
function makeRed() {
    document.body.style.background = 'red';
}

// option 3 ----------------------------------------------
const makeBlueButton = document.getElementById("make-blue");
console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// Option 3.5 ---------------------------------------------
const makePurpleButton = document.getElementById('make-purple');
console.log(makePurpleButton);
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple"
}
// Option 4------------------------------------------------
const makePinkButton = document.getElementById('make-pink');
console.log(makePinkButton);
makePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


// Option 4.5-------------------------------------------------
const makeGreenButton = document.getElementById('make-green');
console.log(makeGreenButton);
makeGreenButton.addEventListener('click', function () {

    document.body.style.backgroundColor = 'green';
})

// Option 5------------------------------------------------------
// IMPORTANT: We will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = "goldenrod";
})