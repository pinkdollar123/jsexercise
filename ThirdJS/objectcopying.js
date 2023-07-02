"use strict";

let car = {
    make: "Ford",
    model: "Mustang",
    year: 2022,
    price: 50000,
    seats: {
        material: "Leather",
        color: "black",
    }
};

let carCopy = car;
console.log("your car is :", carCopy);

carCopy.tyres = "Gulong";
carCopy.seats.color = "Grey";

console.log("New carCopy", carCopy);
console.log("the car", car)

// * determining if it's shallow copy or deep copy. based on the trials using equal = sign creates a shallow copy of an object, and creating a slightly less shallow copy using Object.assign() method

var hisCar = Object.assign({}, car);

hisCar.color = "Green";
hisCar.seats.color = "Cyan";

console.log("The effect of Object.assign():");
console.log("His car:", hisCar);
console.log("My car:", car);

// * Creating objects using ...Objectname as spread syntax These are still not deep shallow since both car objects are not completely independent which also similar to Object.assign({}, objectName) method

let herCar = {...car};
console.log(`her car:`, herCar);

herCar.seats.color = "Pink";

console.log("The effect of spread syntax ...ObjectName");
console.log("Her car:", herCar);
console.log("My car:", car);

// * how to create a deep copy where even nested objects are created out of copies rather than references ?

car = {
    color: "Gold",
    make: "Ford",
    model: "Mustang",
    year: 2022,
    price: 50000,
    seats: {
        material: "Leather",
        color: "black",
    }
};

/*
* JSON.parse converts JSON string into an Object
* JSON.stringify converts a JSON to string
* This can't be used in order to create copies of objects where the attributes values are functions
* JSON.parse gives a brand new object initialized from out of the string
 */
hisCar = JSON.parse(JSON.stringify(car));

hisCar.color = "Red";
hisCar.seats.color = "Gold";

console.log(`Your car:`, hisCar);
console.log(`The car`, car);