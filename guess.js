
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function start() {
    var playAgain = 'y';
	
    do {
        playGame();
        playAgain = prompt("Would you like to play again? (y or n)");
    }
    while(playAgain == 'y');
}

alert("Steel your mind for this, the ultimate game of skill!");
var total = 0;
start();

function playGame() {
    var Turns = 0;
    var Correct = 0;
    var Answer = getRandomInt(1,1);
	
    do {
        var Guess = prompt("Guess the integer between 0 and 100!");
        Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) {
				total = total + Turns;
				alert(total);
                alert("CORRECT! You guessed it in "+Turns+" turns.");
				alert("You had a total of "+total+ "guesses");
                Correct = 1;
            }
            else if (Guess > Answer) {
                alert("Hint: Try a lower number!");
            }
            else {
                alert("Hint: Try a higher number!");
            }
        }
        else {
            alert("Quitter!");
            quit
        }
    }
    while (Correct == 0);
}



