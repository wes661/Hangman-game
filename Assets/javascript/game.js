//Create an array of words
var words = ["mario", "zelda", "metroid", "kirby", "contra", "starfox",];
//Array of letters a-z
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Choose word randomly
var randWord = Math.floor(Math.random() * words.length);
var chosenWord = words[randWord];
var blankSpaces = [];
var correctWord = [];
var incorrectWord = [];
var guessesLeft = 8;
var wins = 0;
var losses = 0;
var remaining = document.getElementById("gameWord"); 
	remaining.innerHTML = ' _ '.repeat(chosenWord.length);

	$(document).ready(function(){
    $('.hidden').slideDown(2000);
    $('.container').slideDown(3000);
});

//Chosen word displayed as underscores
function blankWord() {
	for(var i = 0; i < chosenWord.length; i++ ) {
		blankSpaces.push("_");
	}
	return blankSpaces;

}

//Function to start game over after win or loss
function start() {
	randWord = Math.floor(Math.random() * words.length);
	chosenWord = words[randWord];
	blankSpaces = [];
	correctWord = [];
    incorrectWord = [];
    guessesLeft = 8;
	blankWord();
	
	remaining = document.getElementById("gameWord"); 
	remaining.innerHTML = ' _ '.repeat(chosenWord.length);

	html =  
          "<p>Incorrect Guess: " + incorrectWord.join(' ') + "</p>" +
          "<br>" +
          "<p>Guesses Left: " + guessesLeft + "<p>"
        document.querySelector("#incorrectGuess").innerHTML = html;
     
     console.log(blankSpaces);
    
	console.log(chosenWord);
}
//End function	


	console.log(chosenWord);
		

	console.log(blankWord());

//Get user guess
document.onkeyup = function(event) {
	var userGuess = event.key;
	
	if (letters.indexOf(userGuess.toLowerCase()) == -1){
		//Not a letter
		return;
	}
	
	//Correct guess & win condition
	if(chosenWord.indexOf(userGuess) > -1){

		correctWord.push(userGuess);

		blankSpaces[chosenWord.indexOf(userGuess)] = userGuess;
		if(blankSpaces.join('') == chosenWord) {
			wins++;
			alert("You Win!");
			start();
		}
	
		var html =
			"<p>Press Any Key To Get Started!" + "</p>";
		document.querySelector("#start").innerHTML = html;

		var html =
          "<p>Word: <span id=\"gameWord\">" + blankSpaces.join(' ') + "</span></p>" +
          "<br>" +
          "<p>Wins: " + wins + "</p>";
          document.querySelector("#game").innerHTML = html;
		}	

		//Incorrect guess & lose condition
	else {
		incorrectWord.push(userGuess);
		console.log(incorrectWord);

		if (incorrectWord !== correctWord){
			guessesLeft--;

		}

		if (guessesLeft === 0){
			losses++;
			alert("Game Over");
			start();
		}
		
		

		var html =
		  "<p>Losses: " + losses + "</p>";
		document.querySelector("#lost").innerHTML = html;  

		var html =  
          "<p>Incorrect Guess: " + incorrectWord.join(' ') + "</p>" +
          "<br>" +
          "<p>Guesses Left: " + guessesLeft + "<p>";
        document.querySelector("#incorrectGuess").innerHTML = html;
	} 
};











