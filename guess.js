function guessingGame() {
    var num = Math.ceil( Math.random() * 100 );
    
    var userGuesses = [];
    
    for (var i = 3; i >=0; i--) {
        var userInput = prompt("Pick a number, any number (between 1 and 100)");
        if (userInput !== num) {
            alert("NOPE. You have " + i + " more guesses");
            userGuesses.push(userInput);
        } else {   
            alert("You got it!");
            userGuesses.push(userInput);
            break;
        }
    }
    alert("The correct answer was " + num + ". You guessed: " + userGuesses + ".");
}