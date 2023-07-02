"use strict";

const myCar = {
    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather",
        color: "Brown",
    }
}

var samsCar = Object.create(myCar);

samsCar.seats.color = "White";
console.log("My car", myCar);
console.log("Samscar", samsCar);

// *Object.keys() method , this is used to invoke to return all of the keys of an object
console.log(`What are the keys in myCar?`);
console.log(Object.keys(myCar));
// *Object.values() method returns all the values of the object keys
console.log("What are the Object values?");
console.log(Object.values(myCar));
// *Object.entries() method to return all of the key and value pairs in our object in the form of an array of arrays
console.log("The Object's entries:")
console.log(Object.entries(myCar));

let s60Engine = {
    cylinder: 4,
    displacement: 2000,
    horsepower: 250
}

// * Object.assign allows you to Copy the values of all enumerable properties from one or more source objects to a target object, also it merges the contents of the source object into the target object and since the target is the object it will be modified as well
let yourCar = Object.assign(myCar,{engine: s60Engine});

console.log("The effect of Object.assign():");
console.log("Your car: ", yourCar);
console.log("My car : ", myCar);

// *Freezing Objects: Modifying a nested object inside an object is permitted even after the object is frozen. Only top level properties is not permitted to be modified when using Object.freeze(objectName);

let herCar = Object.freeze(myCar);

// herCar.color = "yellow"; // * This one modifying the top level isn't not allowed
// * Modifying properties inside a nested object inside an object is permitted even the object was frozen
herCar.seats.color = "red";
herCar.seats.bucket = true;

console.log("Her car :", herCar);
console.log("Mycar :", myCar);

// *Object.seal() method prevents modifying and adding top level properties of an object, only properties in a nested object inside an object is allowed it also modifies the source object
let hisCar = Object.seal(myCar);

hisCar.seats.color = "White";
hisCar.seats.bucket = false;

console.log("hisCar :", hisCar);
console.log("My Car :", myCar);


