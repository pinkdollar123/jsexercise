"use strict";

// * mph as the parameter and on line 10 a variable was set to speedlimit and pass the function which is considered first-class function and then accepts the value/argument 65 and pass it to the function code block.
function mphToKmph(mph){
    console.log("MPH Value entered:", mph);

    return 1.61 * mph;
}

let speedlimit = mphToKmph(65);
console.log("Speed limit in Km/h", speedlimit);

/*
 * Arrow functions can be declared with key variables and the syntax will be
* let functionName = argument/parameter => {} this is for single parameter
* let functionName = (multiple, parameters) => {} this is for multiple arguments
* Arrow function was defined in ES6 specifications for JavaScript
* Arrow function can be Implicit. Can be used for a single conversion.
* Implicit syntax functionName = param => expression ;
*/
let mphToKmphArrow = mph => {
    console.log("This is an arrow function statement", mph);
    
    return 1.61 * mph;
}

speedlimit = mphToKmphArrow(65);
console.log(`The speed limit in Km/h through Arrow Function is ${speedlimit}`);

let mphToKmphImplicit = mph => 1.61 * mph;

speedlimit = mphToKmphImplicit(65);
console.log(`The speed limit in Km/h ${speedlimit}`);

// * Multiple arguments in an arrowFunction using implicit conversion
let triangleArea = (base, height) => 0.5 * base * height;
console.log("Area of a triangle with base of 5 and height of 4", triangleArea(5,4))
// *First class can be set to a let keyword scope
let functionCopy = triangleArea;
console.log("Area of tirangle with base of 8 and height of 14 through a variable invoking", functionCopy(8,14));

/* 
* First class functions can be assigned to variables
* functions with no names knowns as anonymous function
* accepts parameter 
*/
var x = function(f){return 5 * (f-32) / 9};
console.log("50F in celsius is :", x(50));


