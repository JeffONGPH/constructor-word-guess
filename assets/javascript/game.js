//variables//

var wordList = ["ACDC", "guitar", "drums", "rock","paper", "concert",];

var compWord;
var alphabets;
var userInput;
var guessesLeft = 9;
var guesses = [];
var display = [];
var wins = 0;
var loses = 0;

//Start running a new game//
function start() {
    compWord = wordList[Math.floor(Math.random() * wordList.length)];
    alphabets = compWord.toUpperCase().split("");
    console.log("compWord = " + compWord + "  " + "alphabets = " + alphabets);

    guessesLeft = 9;
    guesses = [];
    display = [];

    for (i = 0; i < alphabets.length; i++) {
        display.push("-");
        console.log(display)
    }
    document.getElementById("display").innerHTML = display.join("");
};


//User inputs and processing//
function processing() {

    document.onkeyup = function (event) {
        userInput = String.fromCharCode(event.keyCode).toUpperCase();
        guesses.push(userInput);
        console.log("userInput = " + userInput + "Guesses made = " + guesses);
        
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        for (var i = 0; i < alphabets.length; i++) {
            if (userInput === alphabets[i]) {
                display[i] = userInput;
                console.log("display = " + display);
            }
        }

        if (alphabets.includes(userInput) === false) {
            guessesLeft--;
            console.log("guessesLeft = " + guessesLeft);

        }

        if (display.toString() == alphabets.toString()) {
            wins++;
            console.log("wins = " + wins);
            alert("You guessed the word " + compWord.toUpperCase() + " !")
            confirm("Try again")
            start()
        }

        if (guessesLeft <= 0) {
            loses++;
            console.log("loses = " + loses);
            alert("Game Over" + "\n" + "You ran out of tries" + "\n" + "Click ok to try again");
            start()
        }
    

        document.getElementById("display").innerHTML = display.join("");
        document.getElementById("guesses").innerHTML = "." + guesses;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("loses").innerHTML = loses;
        document.getElementById("guessesleft").innerHTML = guessesLeft;
    }
}



};

start()
processing()
