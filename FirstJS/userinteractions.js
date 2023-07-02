"use strict";

// function MyMethod(){
//     let num2 = 10;
//     let total = num + num2;

//     return console.log(total);
// }
// let num1 = 10;
// MyMethod(num1);


/* Alert
MyMethod
* important
! DEPRECATED METHOD DO NOT USE
? SHOULD THIS METHOD EXPOSED IN PUBLIC API?
TODO: REFACTOR THIS METHOD SO THAT IT CONFORMS TO THE API
*/
// Alert
alert("You can do this!");

//* Prompt

let myName = prompt("The prompt message is: \n Please enter your name");
console.log("You have entered " + myName);

let subject = prompt("Please enter your selected subject name", "Javascript")
console.log("Your selected subject is" + subject);

let a = prompt("Enter a number to get its square value");
let b = a * a;
alert("Square value of" + a + "is :" + b);

// * confirm() method
let output = confirm("Confirmation Message: \n Ready to move to the next demo?");

if (output) {
    console.log("You pressed OK");
}else{
    console.log("You pressed cancel");
}
