//Function #1: Array Slice (removing elements)
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
document.write("Elements after Array Slice : <br>");
document.write(modifiedFood, "<br><br>");

//Function #2: Array Splice (adding elements)
foods.splice(2, 0, "noodles", "icecream");
document.write("\n Elements after Array Splice : <br>");
document.write(foods, "<br><br><br>");

//Function #3: Filter
//create a function isEven() which takes numberArray as argument and returns all even numbers from the given array.
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
// let isEven = numberArray.filter(function (numberArray) {
//     return numberArray % 2 == 0;
// });
function isEven(numberArray) {
  let even = numberArray.filter((numberArray) => numberArray % 2 == 0);
  document.write("Original Array : ", numberArray, "<br><br>");
  document.write("The even numbers are : ", even, "<br>");
}
isEven(numberArray);

//Function #4: Reject
//Create a function nonPrime() which takes numberArray as argument and return all non-prime numbers from the above given array in Function #3
// function nonPrime(numberArray) {
nonPrime = numberArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return true;
  }
  return false;
});
document.write("The non prime numbers are : ");
document.write(nonPrime, "<br><br><br>");

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
  var map = myArray.map((element) => element * element);
  return map;
}
document.write("Squares of 11,34,20,5,53,16 : ");
document.write(findSquareOfNumbers(myArray));
document.write("<br><br>");

// Function #7: Reduce
const myArr = [2, 3, 5, 10];
function multiply(myArr) {
  let reduce = myArr.reduce((i, element) => i * element);
  document.write(reduce);
}
multiply(myArr);
