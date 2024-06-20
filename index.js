// 1. Write a JavaScript function to calculate the sum of two numbers.
const addNumbers = (a, b) => {
  return a + b;
};

//2. Write a JavaScript program to find the maximum number in an array.
const arr = [1, 2, 3, 4, 5];
const findMaxNumber = (arrValues) => {
  return Math.max(...arrValues);
};

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
const palindromeString = (str) => {
  return str === str.split("").reverse().join("");
};

// 4. Write a JavaScript program to reverse a given string.
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

//  5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const evenNumbers = (arr) => {
  return arr.filter((number) => number % 2 === 0);
};

console.log(evenNumbers([1,2,3,4,5,6]));
