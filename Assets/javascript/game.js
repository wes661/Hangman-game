//Create an array of words
var words = [" mario", " zelda", " metroid", " kirby", " contra", " starfox"];
//Choose word randomly

var randWord = Math.floor(Math.random() * words.length);
var chosenWord = words[randWord];
var blankSpaces = [];
var correctWord = [];
var incorrectWord = [];
var guessesLeft = 12
var wins = 0


console.log(chosenWord);




//Create underscores based on word chosen
var blankWord = () => {
	for(var i = 0; i < chosenWord.length; i++ ) {
		blankSpaces.push("_");


		
	}
	return blankSpaces;


function start() {
    var randWord = Math.floor(Math.random() * words.length);
    var chosenWord = words[randWord];
    var blankSpaces = [];
    var correctWord = [];
    var incorrectWord = [];
    var guessesLeft = 12;
    

	}	
}

		

console.log(blankWord());

//Get user guess
document.onkeyup = function(event) {
	var userGuess = event.key;
	
	
	if(chosenWord.indexOf(userGuess) > -1){

		correctWord.push(userGuess);

		
		blankSpaces[chosenWord.indexOf(userGuess)] = userGuess;
		if(blankSpaces.join('') == chosenWord) {
			
			alert("You Win!");
			wins++;

			
			

				
			
		}
	
		var html =
			"<p>Guess a letter A-Z" + "</p>";

		document.querySelector("#start").innerHTML = html;

		var html =
          "<p>Word: " + blankSpaces.join(' ') + "</p>" +
          "<br>" +
          "<p>Wins: " + wins + "</p>"; 
          
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

	}	

		else {
		incorrectWord.push(userGuess);
		console.log(incorrectWord);

		if (incorrectWord !== correctWord){
			guessesLeft--;
		}

		if (guessesLeft === 0){
			alert("Game Over");

		}
			

		var html =
          "<p>Incorrect Guess: " + incorrectWord.join(' ') + "</p>" +
          "<br>" +
          "<p>Guesses Left: " + guessesLeft + "<p>" + 
          "<br>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#incorrectGuess").innerHTML = html;


		}

};











