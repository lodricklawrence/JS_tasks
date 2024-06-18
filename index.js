// 1. Write a JavaScript function to calculate the sum of two numbers.
const addNumbers = (a, b) => {
  return a + b;
};

//2. Write a JavaScript program to find the maximum number in an array.
const arr = [1, 2, 3, 4, 5];
const findMaxNumber = (arrValues) => {
  return Math.max(...arrValues);
};

console.log(findMaxNumber(arr));
