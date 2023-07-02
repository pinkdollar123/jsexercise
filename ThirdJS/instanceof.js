"use strict";

class Vehicle {

    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

let myCar = new Vehicle("Mitsubishi", "GLX", 820000);

// *Generate one more object from the source object to new target object
// *Below is a deep copy of myCar
let yourCar = JSON.parse(JSON.stringify(myCar));    

let herCar = {...myCar};
let hiscar = Object.create(myCar);
// * Checking if all the objects are instance of Vehicle class
// * It will return true or false if it's an instance of Vehicle and check as well if it's instance using deep copy
console.log("Is myCar an instanceof Vehicle?", myCar instanceof Vehicle); //true
console.log("Is yourCar (deep copy) a Vehicle?", yourCar instanceof Vehicle); //false
console.log("Is herCar(spread syntax) a Vehicle", herCar instanceof Vehicle);//false
// *
console.log("Is hiscar(Object create) a Vehicle", hiscar instanceof Vehicle);//True
/*
console.log("Type of myCar: ", typeof myCar); // these are all objects
console.log("Type of yourCar: ", typeof yourCar);
console.log("Type of herCar: ", typeof herCar);
console.log("Type of hiscar: ", typeof hiscar);


console.log("Type of myCar: ",  myCar); // this shows instance of Vehicle class
console.log("Type of yourCar: ",  yourCar); // this one doesn't have Vehicle
console.log("Type of herCar: ",  herCar);  // this one doesn't have Vehicle
console.log("Type of hiscar: ",  hiscar); // this shows instance of Vehicle class
*/

// * One way to create an object is by using Object.create method to ensure all of the properties from the source object will be inherited.

// * How to explicitly define inheritance in Javascript by defining a class which extends an existing one?

// *Define a new class represents Motorcyle which is a type of Vehicle Class using extends keyword following the class Vehicle. This means that the motorcylce class will inherit all of the field and function define in the vehicle and we have an option of adding new elements of our own or even overriding the definitions from the parent in the Motorcycle class
class Motorcycle extends Vehicle {
    constructor(make, model, price, seatHeight) {
        // *Using super() method we can invoke all the parent class properties which shows below and we can call this super() method from this child class
      super(make, model, price);
      this.seatHeight = seatHeight;
    }
  }

//   * creating a new instance of Motorcylce, by making use of extends keyword in order to define a subclass we have effectively implemented inheritance in Javascript

let myBigBike = new Motorcycle("Harley-Davidson", "Fat Boy", 15000,);


console.log("Is myBigBike a Motorcycle?", myBigBike instanceof Motorcycle);    
console.log("Is myBigBike a Vehicle?", myBigBike instanceof Vehicle);

// * What happens when defining a function constructor rather than a class? 

function City(name, area, population){
    this.name = name;
    this.area = area;
    this.population = population;
}
// *creating a new instance from City constructor
let myCity = new City("General Trias", 15000, 600000);
// *invoking instanceof myCity to City
console.log("Is myCIty a City", myCity instanceof City); //returns true
// * So function constructors as well as classes are pretty much the same from the point of view of the instanceof operator.