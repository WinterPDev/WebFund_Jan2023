// // var creates a variable, then the variable name after var
// // When declaring a variable name, use deliberate language to describe it.

// // Javascript is a loosely typed language. 
// // The variable's data type is applied when instantiating the variable.


// /*

// Javascript Data Types
// Integer/Number - Whole numbers
// Float - Decimals/fractions

// Strings (text) - Collection of characters, can include numbers but are not used as numbers!!
// '25'
// 25

// Boolean - True or False value (1 and 0)

// */

// var a = 25;

// // assigning a to the new value of a - 13
// a = a - 13;

// console.log(a / 2);

// a = "hello";

// console.log(a + " hello"); // hello hello

// Loop is a repeated process based on a few parameters for how often to run

for (
    var i = 0; // Declares start of the loop!
    i < 10;    // Condition for when the loop ends. 
    i++        // i = i + 1 (increment by 1)
) {
    console.log(i);
    i = i + 3;
    // At this step, i is itterated by the i++!
}

console.log("outside of the loop " + i); //outside of the loop 12