"use strict";
// creates a string concatenation started from 5 which is a string 5 + 2 is 52 as string + 3;
var f;
console.log(f);
var n = "5" + 2 + 3;
console.log(" n = ", n);

var m = 5 + 2 + "6";
console.log("m =", m);

var uninititalized_var;
console.log("uninitialized_var =", uninititalized_var);

var unitialized_let;
console.log("uninitilized_let", unitialized_let);

var undefined_var = undefined;
console.log("undefined_var", undefined_var);

let undefined_let = undefined;
console.log("undefined_let", undefined_let);

var v = null;
console.log("Value of v=", v);

var a = 10;
var b = 50;

var d = 50 + 4;
console.log(d);
var d = 25;
console.log(d);
console.log(`The value of a is ${a} and b is ${b}`);
// private is a reserved keyword so make sure not to use it
var privateVar = "Just a string";
// undefined is a reserved keyword so make sure not to use it
var undefinedStr = "An undefined value";

console.log("The private string is :", privateVar);
console.log("The undefined string is :", undefinedStr);

// Assign value using var keyword
var price1 = 5;
var price2 = 10;

var total = price1 + price2;

console.log ("The sum of price1 and price2 is equal to", total);

// updating variables declared with var

price1 = 21;
price2 = 14;
total = price1 + price2;

console.log("Updated sum of price1 and price2 =", total);

// Re-declaring the variables with var

var price1 = 500;
var price2 = 310;
var total = price1 + price2;

console.log(`The sum of re-declared variables ${price1} and ${price2} is ${total}`);

// Assign value using let keyword
let dividend = 420;
let divisor = 20;

console.log(`The divsion result of ${dividend} and ${divisor} is equals to ${dividend/divisor}`)

// Update value using let keyword

dividend = 720;
divisor = 30;

console.log("The updated result is", dividend/divisor)

/* Let does not permit re-declaration.
Once a variable has been declared with let,
it can be updated but not redeclared */

// let dividend = 880; // Cannot redeclare block-scoped variable

/* The const keyword represents constants,
Constants can only be defined once.
Updates and redefinitions are not permitted */

const MY_BIRTHDAY = '21.11.1993';
console.log("My birthday is on", MY_BIRTHDAY);

/*- When using var, a variable can be used before initializaiton
- This is known as variable hoisting*/

z = 5;
console.log("The value of z", z);
var z;

// Uncaught error when using let
// x = 30;
// console.log("The variable of x ", x);
// let x;
// Uncaught error when using const
// w = 50 ;
// console.log("The variable value of w", w);
// const w; //const declarations must be initialized

