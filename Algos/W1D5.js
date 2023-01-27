
// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
// Using temp we can hold onto one of the values, to avoid losing that data!
// fruit1 = fruit2;

// fruit2 = temp;

// console.log(fruit2 + " and " + fruit1);

var arr1 = ['apples', 'oranges', 'lemons', 'kiwi', 'mango', 'longan']

console.log(arr1[3])

var temp = arr1[3]; // Holding onto the value of 'kiwi'

arr1[1] = 'bluberries'

arr1[3] = arr1[1]
// 'kiwi' = 'bluberries'
arr1[1] = temp


console.log(arr1)
var poppedFruit = arr1.pop();

console.log(poppedFruit);
arr1.push('Dragon Fruit')

console.log(arr1);

let arr2 = [];
for (var i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i])
}

console.log(arr2);

console.log('Just this!');