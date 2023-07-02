// "use strict";

window.onload = firstFunction;
//* Parenthesis accepts parameters or arguments that will be passed in 
function firstFunction(){
    var x = 15;
    console.log(`First function: x = `, x);
    secondFunction();
}
//* invoking will use

//* Scope of variables is local inside the function declaration
function secondFunction(){
    console.log("secondFunction (before declaration) x =", x);

    var x = 20;

    console.log("secondFunction (after declaration) x =", x);
}

let globalLet = "This is a global variable declared with let";
var globalVar = "This is a global variable declared with var";

let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;
// * Global variables are accessible in a functionCodeBlock
function thirdFunction(){
    let localLet = "This is a local variable declared with let";
    var localVar = "This is a local variable declared with var";

    undeclaredLocalVar = "This is an undeclared variable";

    // console.log("globalLet from inside thirdFunction", globalLet);
    // console.log("globalVar from inside thirdFunction", globalVar);
    // console.log("numLet from inside thirdFunction", numLet);
    // console.log("numVar from inside thirdFunction", numVar);
    // console.log("NUM_CONST from inside thirdFunction", NUM_CONST);

    // console.log("localLet from inside thirdFunction", localLet);
    // console.log("localVar from inside thirdFunction", localVar);
    // console.log("undeclaredLocalVar from inside thirdFunction", undeclaredLocalVar);
}

thirdFunction();

// console.log("globalLet from inside thirdFunction", globalLet);
// console.log("globalVar from inside thirdFunction", globalVar);
// console.log("numLet from inside thirdFunction", numLet);
// console.log("numVar from inside thirdFunction", numVar);
// console.log("NUM_CONST from inside thirdFunction", NUM_CONST);

// *Undeclared variables became global scope variable can be accessed or used in multiple parts of the source
    // console.log("undeclaredLocalVar from inside thirdFunction", undeclaredLocalVar);


function fourthFunction(){
    let numLet = 100;
    var numVar = 200;
    let NUM_CONST = 300;

    console.log("Redeclared numLet from inside fourthFunction", numLet);
    console.log("Redeclared numLet from inside fourthFunction", numVar);
    console.log("Redeclared numLet from inside fourthFunction", NUM_CONST);
}

fourthFunction();

// console.log("numLet from inside thirdFunction", numLet);
// console.log("numVar from inside thirdFunction", numVar);
// console.log("NUM_CONST from inside thirdFunction", NUM_CONST);

function fifthFunction() {
    numLet = 1000;
    numVar = 2000;
    // * const variables are not permitted for redeclaring or assigning new value and variable
    // NUM_CONST = 3000;

    console.log("Updated numLet from inside fifthFunction", numLet);
    console.log("Updated numLet from inside fifthFunction", numVar);
    // console.log("Redeclared numLet from inside fifthFunction", NUM_CONST);
}

fifthFunction();


console.log("numLet from outside after invoking fifthFunction", numLet);
console.log("numLet from outside after invoking fifthFunction", numVar);

// * variables called out inside a code block is considered as local variable and can't be called outside the code block.
function sixthFunction() {
    console.log ("Starting first for loop ... ")
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
    // console.log("The value of i :", i);
    console.log("second for loop");
    // * USING VAR KEYWORD WHEN DECLARING VARIABLES THE VAR SCOPE EXTENDS TO THE FUNCTION WITHIN WHICH IT IS DEFINED AND IT'S ALSO PROHIBITED IN GLOBAL SCOPE
    for(var j = 0; j < 9; j++){
        console.log(j);
    }
    console.log ("The value of j", j);
    console.log("The sum of 5 + j", 5 + j);
}

sixthFunction();

