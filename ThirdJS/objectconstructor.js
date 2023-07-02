"use strict";


// * Creating Object constructor which makes a blueprint in order to create new objects
function Car (make, model, price, engine){
    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
    this.details = function(){
        console.log(`
        Make: ${this.make}
        Model: ${this.model}
        Price: ${this.price}`);
    };
    this.engine.details = function(){
        console.log(`
        Cylinders: ${this.cylinders}
        Horsepower: ${this.horsepower}
        Displacement: ${this.displacement}`);
    };
};

let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250,
}

let myCar = new Car("Volve", "S60", 42000, s60Engine);

console.log("Mycar details are : \n ", myCar);

let zosEngine = {
    cylinders: 6,
    displacement: 3000,
    horsepower: 450,
}

let zosCar = new Car("Zos", "Z3Z", 75000, zosEngine);
console.log(`This is zosCar details: `, zosCar);

zosCar = new Car("ZosCar", "3Z", 45000, zosEngine);
console.log("Zos car details new: \n");
zosCar.details();
console.log("Zos Engine details: \n");
zosCar.engine.details();


// * Class keyword in javascript is to create a template or a blueprint for the creation of objects.

class Vehicle {
    constructor(make, model, price, engine){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
    }

    getVehicleDetails(){
        console.log(`
        Make: ${this.make}
        Model: ${this.model}
        Price: ${this.price}`);
    };

    getEngineDetails(){
        console.log(`
        Cylinders: ${this.engine.cylinder}
        Displacement: ${this.engine.displacement}
        Horsepower: ${this.engine.horsepower}`);
    };
}

let myNewEnginer = {
    cylinder: 6,
    displacement: 4000,
    horsepower: 350,
};
let myVehicle = new Vehicle("Toyota", "M20", 35000, myNewEnginer);

console.log("My vehicle details: \n");
myVehicle.getVehicleDetails();
console.log("My engine vehicle for Totya: \n");
myVehicle.getEngineDetails();