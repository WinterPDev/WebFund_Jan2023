var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];

// console.log(arr2d[0][2])


// for (var row = 0; row < arr2d.length; row++) {
//     console.log(arr2d[row])

//     for (var col = 0; col < arr2d[row].length; col++) {
//         console.log(arr2d[row][col])
//     }
// }


// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

function isPresent2d(arr2d, value) {

    // code here

}

isPresent2d(arr2d, 13);

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
