// // assigns value of 5 to x
// var x = 5;
// /*
//     Declare you are making a function, then give it a 'common sense' name that describes it's purpose!

//     Functions are Asynchronous!

//     Functions do not execute right away, and must be called! They are listening until invoked/called.
// */
// function setX(newValue) {
//     x = newValue;
// }

// console.log(x);
// // Output: 5
// setX(15);
// // x = 15
// // setX(newValue)
// console.log(x);
// Ouput: 15



// var x = 5;


// // This function will use x and return x + the parameter
// function addToX(amount) {
//     // When we return something from our function, the function ends.
//     // The function gives back whatever value is after the return!
//     return x + amount;
//     //   5 + -10
//     console.log("hello there");
// }

// console.log(x);
// // Output: 5

// var result = addToX(-10);
// // result = -5

// console.log(result);
// // Output: -5
// console.log(x);
// // Output: 5

function isPal(arr) {
    // arr is a standard name for an array variable
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            // if( 1  !=   1  )
            // if( 1  !=  2  )
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
// result1 = "Not a pal-indrome!")
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
// Output: "Pal-indrome!"
