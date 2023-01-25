var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// if(true/false question/logic){
//    If this resolves to true, it executes the code between the curly braces!
//    whatToBring += "sunglasses, ";
//  }
if (isSunny) {
    whatToBring += "sunglasses, ";
    // whatToBring = whatToBring + "sunglasses, "
}




// "I should bring: sunglasses, a coat, and a smile!"



/*
Output:
10
9
8
7
6
5
4
3
ignition!
1
liftoff!
*/

// Declaring a variable to hold the answer we want.
var countPositives = 0;
// numbers is an array
// collection of data/values
var numbers = [3, 4, -2, 7, 16, -8, 0];
//            [0, 1, 2, 3, 4,    5, 6]
//            total length = 7
console.log(numbers[3])
// Array refrencing the index of 3, gets back the value: 7

// numbers.length == 7
for (var i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i])
}

console.log("there are " + countPositives + " positive values");