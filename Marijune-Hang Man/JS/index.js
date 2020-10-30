

let wordList = ["raven", "magic", "ghost", "stars", "witch", "blood"]; //word bank to choose from

//picks a word at random from the word bank
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word)

let clickedLetters = [];

let splitWord = word.split("");

let numOfGuesses = 0;

//function that shows which letter is clicked
function addLetter(result) {
    console.log('Letter clicked: ', result);
    clickedLetters.push(result);
}

// start button click to get the game started
document.querySelector('#start').addEventListener('click', function () { //runs function
    for(let i = 0; i <filledArray.length; i++) {
        let shower = document.createElement('p');              
        shower.innerHTML = filledArray[i];
        console.log('filledArray', filledArray[i]);
        document.querySelector('#numbers-list').append(shower);
        document.querySelector('#start').style.display = "none";
    }
})

let filledArray = new Array(splitWord.length).fill('_'); //makes the underscores/blanks
console.log(filledArray);


function addLetter(result) {
    clickedLetters.push(result);
    console.log('Letters chosen array: ', clickedLetters);
}

window.addEventListener('keyup', function (event) {    //keyup makes the keyboard useable
    var pressedButton = event.key;
    if (splitWord.indexOf(pressedButton) !== -1) {
    for (let i = 0; i <splitWord.length; i++) {
        if (splitWord[i] === pressedButton) {
            console.log('You found the letter: ', splitWord[i]);
            filledArray[i] = splitWord[i];
        }
    }

    hasWon()  //runs hasWon function which triggers overlay

    } else {
        numOfGuesses = numOfGuesses + 1;  //adds to the number for the addParts function
        addParts();  //runs the function to add sections of pictures
    }
    document.querySelector('#numbers-list').innerHTML = '';
     
        for(let i = 0; i <filledArray.length; i++) {
            let shower = document.createElement('p');              
            shower.innerHTML = filledArray[i];
            console.log('filledArray', filledArray[i]);
            document.querySelector('#numbers-list').append(shower);
        }
});

document.querySelector('#playagain').addEventListener('click', reset); //makes play again button work


function addParts() {  //function that adds a section of the picture as the number of guesses goes up
    if(numOfGuesses == 1) {
        document.querySelector('figure').classList.add('scaffold');
    } else if (numOfGuesses == 2){
        document.querySelector('figure').classList.add('head');
    } else if (numOfGuesses == 3){
        document.querySelector('figure').classList.add('body');
    } else if (numOfGuesses == 4){
        document.querySelector('figure').classList.add('arms');
    } else if (numOfGuesses == 5){
        document.querySelector('figure').classList.add('legs');
        alert('Oh no! You lost! Want to play again?')   //alert window to restart if lost
        window.location.reload();       //internal function to reload
}};

function hasWon(){                  //winning function that triggers overlay to show
    if (filledArray.join('') === word) {
        document.querySelector('.overlay').classList.add('show');
    }
}

function reset(){
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word)
    clickedLetters = [];
    splitWord = word.split("");
    numOfGuesses = 0;
    filledArray = filledArray.fill('_', 0, splitWord.length);
    document.querySelector('.overlay').classList.remove('show'); //shows overlay
    document.querySelector('#numbers-list').innerHTML = '';

    document.querySelector('figure').classList.remove('scaffold'); //removes parts
    document.querySelector('figure').classList.remove('head');
    document.querySelector('figure').classList.remove('body');
    document.querySelector('figure').classList.remove('arms'); //no need to remove legs

    for(let i = 0; i <filledArray.length; i++) {
        let shower = document.createElement('p');              
        shower.innerHTML = filledArray[i];
        console.log('filledArray', filledArray[i]);
        document.querySelector('#numbers-list').append(shower);
    }
   
}  //I wonder if the window.location.reload could have worked here ^^^ for reset



















