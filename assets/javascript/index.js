$(document).ready(function() {

var word = ['f', 'o', 'x'];
var correctGuess = [];

function checkGuess(guessedLetter) {
	for(var i = 0; i < word.length; i++) {
		if (word[i] === guessedLetter) {
			console.log('correct guess');
			correctGuess.push(guessedLetter);
		} else {
			console.log('incorrect guess');
		}
	}
}

console.log('Game starting');
while(correctGuess.length !== word.length) {
	var userGuess = prompt('Guess a letter');
	console.log('guessed ' + userGuess);
	checkGuess(userGuess);
}
console.log('game over');
	
});
