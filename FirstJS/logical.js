"use strict";

console.log("Logical Operators");

let A = 13, B = 25;


/*
*Regarding the use of curly braces, in JavaScript, if the body of an if statement contains only a single statement, you can omit the curly braces {}. In this case, since there is only one statement (console.log(...)), the curly braces are not necessary. However, it's generally considered good practice to include curly braces even for a single statement to improve code readability and avoid potential issues if you want to add more statements to the if block in the future.
*/
if (A => 12 && B <=25)
    console.log("A + B = ", A + B);

// * AND operator || Two conditions must be met
if (A <= 12 && B >= 25){
    console.log("The condition wasn't met", A, B);
}else{
    console.log("A-B =", A - B);
}

let X = 15, Y = 20;
// * OR operator ||
if (X > 20 || Y < 25)
    console.log("X + Y = ", X + Y);
// * NOT Operator !
var result = !(X == Y);
console.log("Result of !(X == Y) is: ", result);

let condition;
let ako = "Ikaw";
let ikaw = "Ako";
/* 
*Ternary operator condition = to be compaired ? output if true: output if false
*/
console.log("condition =", condition = (100 > 10) ? true: false);
console.log("condition =", condition = (100 < 10) ? true: false);
console.log("condition =", condition = (250 > 300) ? "Totoo" : "Hindi Totoo");
console.log("condition =", condition = (250 < 300) ? "Totoo" : "Hindi Totoo");
console.log("Ang 'ako' == 'ikaw' ay tugma? ", ako == ikaw ? "OO" : "Hindi");
console.log("Ang ikaw == ikaw ba ay tugma? ", ikaw == ikaw ? "OO" : "Hindi");
console.log("Ang 'ako' == 'ako' ba ay tugma?" , ako == ako ? "Oo" : "Hindi");
console.log("Ano sagot dito ako != ikaw ?", ako != ikaw ? "Oo" : "hindi");
console.log("ano sagot dito ako !== ikaw ?", ako !== ikaw ? "Oo" : "hindi");

let maxValue;
let minValue;
console.log("maxValue =", maxValue = (100 > 10) ? 100 : 10);
console.log("minValue =", minValue = (100 < 10) ? 100 : 10);