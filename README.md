# A-Serious-Guessing-Game

Wire Frame
https://imgur.com/QW7xdIi
https://imgur.com/oFmi6z7

The point of this game is to guess a phrase 
if not something serious happens. The player
can miss 5 times.  

-It is one player
-Category
-Phrases
-Convert phrasses to blanks
-26 button for Alphabet/ or keyboard input

Action:
-initialize game, 
-display empty spaces in grey where letters go 
-when player chooses a letter
  -the letter turns different color on board
  -if the letter matches the grey areas display the letter
  

/*----- constants -----*/ 
Blanks, empty spaces  

/*----- app's state (variables) -----*/ 
 board, winner, looser, turn

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
document.getElementById("markers")
  .addEventLister('click', handleClick);

/*----- functions -----*/

