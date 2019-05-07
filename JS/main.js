
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
/*----- functions -----*/

let pullWord = function() {
    word = words[(Math.floor(Math.random()*numInWordBank))];
}

let SetUndeline = function() {
    pullWord();
    for(i=0; i<word.length; i++) {
        wordArray[i] = word.charAt(i);
        wordUArray[i] = "_";
    }
    wordU = wordUArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    document.getElementById("numLetters").innerHTML = word.length;
}
SetUndeline();