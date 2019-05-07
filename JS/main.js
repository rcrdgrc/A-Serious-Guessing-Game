
/*----- constants -----*/ 
const words = ["ham", "jet", "amber"];
const wordArray = [];
const wordUArray = [];
/*----- app's state (variables) -----*/ 
let lives = 4;
let numInWordBank = words.length;

let word = "test";
let wordU = "";

/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
document.getElementById('letters')
  .addEventListener('click', handleClick)

/*----- functions -----*/

function handleClick(evt) {
    const marker = evt.target.id;
     upDateLetter(marker);
}



let pullWord = function() {
    word = words[(Math.floor(Math.random()*numInWordBank))];
}

function setUnderline() {
    pullWord();
    for(i=0; i<word.length; i++) {
        wordArray[i] = word.charAt(i);
        wordUArray[i] = "_";
    }
    wordU = wordUArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    document.getElementById("numLetters").innerHTML = word.length;
}

function upDateLetter(letter) {
    changes = 0;
    for(i = 0; i < word.length; i++) {
        wordArray[i] = word.charAt(1);
        if(word.charAt(i) === letter) {
            wordUArray[i] = letter;
            changes += 1;
        }
    }
    if(changes < 1) {
        lives -= 1;
        document.getElementById("lives").innerHTML = lives;
    }
    wordU = wordUArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    word1 = wordArray.join("");
    word2 = wordUArray.join("");
    
    if(word1 === word2) {
        alert("You Won!");
        window.location.reload();
    }
    if(lives < 1) {
        document.getElementById("WORD").innerHTML === word1;
        alert("No more lives");
        window.location.reload();
    }
}



pullWord();
setUnderline();


// clickLetter = function() {
//     "a".click(function(event){
//         event.preventDefault();
//         upDateLetter("a")
//     });
// };



// init();

// function handleClick(evt) {
//   const picked = evt.target;
//   const colIdx = parseInt(marker.id.replace('col', ''));
//   if (isNaN(colIdx) || winner) return;
//   const rowIdx = board[colIdx].indexOf(0);
//   if (rowIdx === -1) return;
//   board[colIdx][rowIdx] = turn;
//   winner = getWinner();
//   turn *= -1;
//   render();
// }