"use strict";

let numbers = [10, 20 ,30, 40];
//* destructuring syntax defined in ES6 specifications for Javascript
let [a, b, c , d] = numbers;
console.log("values after the first assignment (no rest parameters): \n");
console.log("The value of a : " + a);
console.log("The value of b : " + b);
console.log("The value of c : " + c);
console.log("The value of d : " + d);

[a, b, c] = numbers;

console.log("values after the second assignment (no rest parameters): \n");

console.log("The value of a : " + a);
console.log("The value of b : " + b);
console.log("The value of c : " + c);

[a, ...b] = numbers;
// * Destructured and used rest parameters, where a was assigned to the first index and all of the rest elements inside the numbers array was passed to ...b using rest parameters syntax
console.log("Value of a :", a);
console.log("The value of b: ", b);

// * Another sample will be [, ...a] performes a blank parameter in the first element and the next parameter was a rest parameter syntax using ...a

[, ...a] = numbers;

console.log("The value of a using rest parameter syntax : ", a);