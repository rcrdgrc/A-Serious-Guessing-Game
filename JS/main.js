
/*----- constants -----*/ 
const words = ["chainsaw", "dangerous", "demonic", "evil"];
const wordUArray = [];
/*----- app's state (variables) -----*/ 
let wordArray = [];
let lives = 5;
let numInWordBank = words.length;
let word = "test";
let wordU = "";
let used = [];
/*----- cached element references -----*/ 
let scary1 = '<iframe width="460" height="315" src="https://i.imgur.com/34aATp9.jpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
let scary2 = '<iframe width="460" height="315" src="https://i.imgur.com/xyRggKP.png" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
/*----- event listeners -----*/ 
document.getElementById('letters')
  .addEventListener('click', handleClick)

/*----- functions -----*/
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

function handleClick(evt) {
    const marker = evt.target.id;
     upDateLetter(marker);
}


function upDateLetter(letter) {
    for(i = 0; i < word.length; i++) {
        if(word.charAt(i) === letter) {
            wordUArray[i] = letter;
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
        // window.location.reload();
    }
   
    else if(lives === 0) {
      document.getElementById("video").innerHTML = scary1;
        }
    }



pullWord();
setUnderline();


