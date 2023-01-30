// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math library lets us use prebuilt functions in JS
// to help us calculate common math actions.

var floor = Math.floor(9.8);
var ceiling = Math.ceil(Math.PI)
// Random returns a value from 0 to 0.99 (Think of it like percentages)
var random = Math.random();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function d6() {
    var roll = Math.random();
    // your code here
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
