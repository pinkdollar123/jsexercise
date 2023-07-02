"use strict";

console.log("Value of Pi : ", Math.PI);
console.log("The Euler's constant is : ", Math.E);
console.log("Rounded value of 3.2", Math.round(3.2));
console.log("Rounded value of 3.8", Math.round(3.8));
console.log("Rounded value of 3.5", Math.round(3.5));
console.log("Absolute value of 4 : ", Math.abs(4));
console.log("Absolute value of -4 : ", Math.abs(-4));

console.log("4 to the 17th power :", Math.pow(4, 17));
console.log("Square root of 20.08 : ", Math.sqrt(20.08));
console.log("Square root of 42 : ", Math.sqrt(42));

console.log("Floor value of 2.6 : ", Math.floor(2.6));
console.log("Floor value of 2.4 : ", Math.floor(2.4));
console.log("ceil value of 2.4 : ", Math.ceil(2.6));
console.log("ceil value of 2.4 : ", Math.ceil(2.4));

let arrayOfNumbers = [45, 35, 105, 205, 335];
console.log("Highest number from the list of array using spread operator (...arrayname) : ", Math.max(...arrayOfNumbers));
console.log("Lowest number from the list of array using spread operator (...arrayname) : ", Math.min(...arrayOfNumbers));

console.log("Highest number using normal arguments : ", Math.max(10, 100, 250, -350));

console.log("Lowest number from the list : ", Math.min(20, 35 , 75 , -35, -100));
// Trigonometric functions
console.log("sin30 =" , Math.sin(30 * Math.PI / 180));
console.log("cos30 =" , Math.cos(30 * Math.PI / 180));
console.log("tan30 =" , Math.tan(30 * Math.PI / 180));
console.log("The natural log of 3: ", Math.log(3));