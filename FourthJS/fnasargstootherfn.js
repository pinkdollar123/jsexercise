"use strict";

// *We initialized a variable called addition below to represent this function and it's value function(a,b) as a function expression following the parenthesis as the parameters and then we have the function within the curly braces or code block
let addition = function(a, b) //accepts two arguments a, b
{
    return a + b; //return the sum of those two values
}

let multiplication = function(a, b) {
    return a * b;
};

let subtraction = function(a, b) {
    return a - b;
};

let division = function(a, b) {
    return a / b;
};

// ? One more effect of functions being first-class objects in javascript is that we can supply them as arguments to other functions
// * The first two parameters represents the values or numbers that will be applied and the calculationFunction itself is the third argument. The function below was defined as function declartion rather than a function expression
function calculation(a, b, calculationType){
    return calculationType(a, b);
}
// defiend a new variable to calculate the given values
let output = calculation(10,30, addition);
console.log("Addition expression output ", output);

output = calculation(10,30, multiplication);  
console.log("Multiplication expression output", output);

// * Functions as Return Values of Functions

let fxRates = {
    INR: 90,
    EUR: 0.85
};

let discounts = {
    INR: 0.15,
    EUR: 0.25
};

let inrCart = {
    id: 1,
    total: 100,
    currency: "INR"
};

let eurCart = {
    id: 2,
    total: 100,
    currency: "EUR"
};

function getTotalPriceFn(cart){
    // * define a variable and an express of object.property * the operation needed, this top level express is initially invoked by the outer function

    cart.finalTotal = cart.total * (1 - discounts[cart.currency]);
    // * This function returns the totalUSDPrice
    function totalUSDPrice(){
        return cart.finalTotal / fxRates[cart.currency];
    }
    // * and this return was initiated by getTotalPriceFn()
    return totalUSDPrice;
}

let inCartTotalUSD = getTotalPriceFn(inrCart); // the price total will be calculate and the discount, however the exchange rate isn't applied.
console.log("Type of returned function :,", typeof inCartTotalUSD);
console.log("Total of order in India: ", inCartTotalUSD());

let euCartToUSD = getTotalPriceFn(eurCart);  
console.log("Total of order from EU:", euCartToUSD());