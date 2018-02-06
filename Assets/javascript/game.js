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


	
		
}




console.log(blankWord())

//Get user guess
document.addEventListener("keypress", (event) => {
	var keycode = event.keyCode;
	var letterSelect = String.fromCharCode(keycode);
	
	if(chosenWord.indexOf(letterSelect) > -1){

		correctWord.push(letterSelect);

		
		blankSpaces[chosenWord.indexOf(letterSelect)] = letterSelect;
		if(blankSpaces.join('') == chosenWord) {
			
			alert("You Win!");
		}
	
		

		var html =
          "<p>Word: " + blankSpaces.join(' ') + "</p>"; 
          
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

	}	

		else {
		incorrectWord.push(letterSelect);
		console.log(incorrectWord);

		if (incorrectWord !== correctWord){
			guessesLeft--;
		}

		if (guessesLeft == 0){
			alert("Game Over")
		}
			

		var html =
          "<p>Incorrect Guess: " + incorrectWord.join(' ') + "</p>" +
          "<br>" +
          "<p>Guesses Left: " + guessesLeft + "<p>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#incorrectGuess").innerHTML = html;


		}



});











