
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

alert("Check your skills kid cause its about to get rough. Guess on fella");
var total = 0;
var games = 0;


function playGame() {
    var Turns = 0;
    var Correct = 0;
    var Answer = getRandomInt(1,100);

    do {
        var Guess = prompt("Guess the integer between 0 and 100!");
        Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) {
				total = total + Turns;
				games++;
				var avg = total / games; 
                alert("CORRECT! You guessed it in "+Turns+" turns.");
				alert("You had a total of "+total+ " guesses in all your games so far!");
				alert("Your "+games+" played games had an avg of "+avg+" total guesses" )
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
            
        }
    }
    while (Correct == 0);
}



