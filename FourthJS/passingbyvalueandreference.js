"use strict";

function passByValueAndReference() {
    // *Primity type name variable
    let name = "Tyson";
    // *Object type which is person variable
    let person = {
        name: "Tyra",
        city: "Austin",
    };
    console.log("Initial value of name =", name);
    console.log("Initial value of person =", person);

    modifyData(name,person);
    // ? this test was to prove that primitive types such as string ar infact passed by value to functions, whereas object data are passed by reference. This behavior in Javascript is similar to other programming languages where primitive types data are passed as value and objects are passed as reference.
    console.log("Final value of person =", person);
    console.log("Final value of name =", name);
}

// * the output of this function was passed on the upper function and the parameters were used to pass the value using the reference of the given parameters and it accepts primitive type and object type.
function modifyData(primitiveType, objectType) {
    primitiveType = "Victoria";
    objectType.name = "Olivia";

    console.log("Updated primitiveType: ", primitiveType);
    console.log("Updated objectType: ", objectType);
}

// passByValueAndReference();

// * The new keyword to create functions
// * Why do we need to do this? one of these cases is when we wishto get the function body from the user

// ? First define the variable that will get the function
// let funcBody = prompt("Enter the body of your function:"); //*provides a user to input their own function body
// ? Second define another variable that will reference to new Function ("argument1","argument2", funcBody);
// ? the 3rd argument funcBody was referred to the prompt from the user
// * this definition of weigthedScore is in fact a function which can be invoked after being defined with a new function andthat can accept 2 parameters as an argument
// let weightedScore = new Function("verbalScore","mathScore", funcBody);

// console.log("Weighted score for (78,91):", weightedScore(78, 91));

let greet = new Function("console.log(`Welcome to Skillsoft!`)");

// greet();

// * FUNCTION CALLBACK
// ? This is where you invokce a function and passing another function as an argument with the expectation that the second function will be invoked after the operations performed within the first function.


let foodItems = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 },
    { name: 'Salad', price: 8 },
    { name: 'Ice Cream', price: 4 },
    { item: 'Steak', price: 25 },
    { item: 'Sushi', price: 30 },
    { item: 'Pasta', price: 35 },
    { item: 'Chicken Wings', price: 40 },
    { item: 'Tacos', price: 45 },
    { item: 'Sandwich', price: 50 }
  ];

//   * The function below acecpts an array of objects
// function getTotalCost(foodItems){
//     return foodItems.reduce((sum, item) => sum + item.price, 0);
// }  
// * it is clear that we need to invoke getTotalCost First and once done executing we can invoke applyTaxes to it.
// var totalCost = getTotalCost(foodItems);
// console.log("Total cost: ", totalCost);


// *In order to ensure the sequence of execution in Javascript is to implement a callback, below we invoke a particular function but one of the arguments we supplied is the function which needs to be executed right after that and this one is known as callback back function
function applyTaxes(totalCost){
    return 1.12 * totalCost;
};

// console.log("Total after taxes:", applyTaxes(totalCost));

function getTotalCost(items, callback){
    // this line will run first in javascript inside this function body
    var totalCost = items.reduce((sum, item) => sum + item.price, 0);
    // here we invoke the callback function to which we pass along the argument of totalCost
    return callback(totalCost);
}

var totalAfterTaxes = getTotalCost(foodItems, applyTaxes);
console.log("Total after taxes (callback): ", totalAfterTaxes);
