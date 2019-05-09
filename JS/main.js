
/*----- constants -----*/ 
const words = ["chainsaw", "dangerous", "demonic", "evil"];
const wordUArray = [];
const scarysound = new Audio("assets/sounds/132106__sironboy__woman-scream.wav")
const slashSound = new Audio("assets/sounds/35213__abyssmal__slashkut.wav")
/*----- app's state (variables) -----*/ 
let wordArray = [];
let lives = 5;
let numInWordBank = words.length;
let word = "test";
let wordU = "";
let used = [];

/*----- cached element references -----*/ 
let scary1 = '<iframe width="460 auto" height="315 auto" src="https://i.imgur.com/34aATp9.jpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
let scary2 = '<iframe width="460 auto" height="315 auto" src="https://i.imgur.com/xyRggKP.png" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


/*----- event listeners -----*/ 
document.getElementById('letters').addEventListener('click', handleClick)
document.getElementById('reset').addEventListener('click', reload)
document.getElementById('reset2').addEventListener('click', reload)
/*----- functions -----*/


function reload() {
    window.location.reload();
}
function hideButton() { 
    document.getElementById('reset').style.visibility = "hidden";
    document.getElementById('reset2').style.visibility = "hidden";
    document.getElementById('letters').style.visibility = "visible";
}
function showButton() {
    document.getElementById('reset').style.visibility = "visible";
    document.getElementById('letters').style.visibility = "hidden";
}
function showbutton2() {
    document.getElementById('reset2').style.visibility = "visible";
    document.getElementById('letters').style.visibility = "hidden";
}
let pullWord = function() {
    word = words[(Math.floor(Math.random()*numInWordBank))];
}
function setUnderline() {
    pullWord();
    for(index=0; index<word.length; index++) {
        wordArray[index] = word.charAt(index);
        wordUArray[index] = "_";
    }
    wordU = wordUArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    document.getElementById("numLetters").innerHTML = word.length;
}
function handleClick(evt) {
    const marker = evt.target.id;
     upDateLetter(marker);
     slashSound.play();
}

function upDateLetter(letter) {
    for(index = 0; index < word.length; index++) {
        if(word.charAt(index) === letter) {
            wordUArray[index] = letter;
        } 
    }
    if(letter !== "letters" && !wordUArray.includes(letter)) {
        lives -= 1;
        document.getElementById("lives").innerHTML = lives;
    }
    winning();
}
function winning() {

    wordU = wordUArray.join("");
    document.getElementById("WORD").innerHTML = wordU;
    word1 = wordArray.join("");
    word2 = wordUArray.join("");

    console.log(word1);
    console.log(word2);
    
    if(word1 === word2) {
        document.getElementById("video").innerHTML = scary2;
        scarysound.play();
        showButton();
        // window.location.reload();
    }
   
    else if(lives === 0) {
      document.getElementById("video").innerHTML = scary2;
      scarysound.play();
      showbutton2();
        }
    }

pullWord();
setUnderline();
hideButton();



