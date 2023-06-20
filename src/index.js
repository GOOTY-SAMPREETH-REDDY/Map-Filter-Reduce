var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

let sum = numbers.reduce(function (x, y) {
  return x * y;
});
console.log(sum);
//Find - find the first item that matches from an array.

let fst = numbers.find(function (x) {
  return x > 10;
});
console.log(fst);
//FindIndex - find the index of the first item that matches.
let fsti = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(fsti);
import emojipedia from "./emojipedia";
let arr = emojipedia.map(function (x) {
  return x.meaning.substring(0, 101);
});
console.log(arr);
