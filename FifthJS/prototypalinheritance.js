"use strict";

// *OBJECT CONSTRUCTOR NAMED VEHICLE
function Vehicle(type){
    this.type = type;

    this.printDetails = () =>{
        console.log("The type of this vehicle is", this.type);
    }
}

// *Defining another object constructor named car
function Car(make, model, drivenWheels){
    this.make = make;
    this.model = model;
    this.drivenWheels = drivenWheels;

    this.printDetails = () =>{
        console.log("This is %s is a %s %s", this.type, this.make, this.model);
    } 
}

// *Defining another object constructor named Aeroplane
function Aeroplane(make, model, numEngines, EngineType){
    this.make = make;
    this.model = model;
    this.numEngines = numEngines;
    this.EngineType = EngineType;
}

Car.prototype = new Vehicle("Car");
var vwGTI = new Car("Volkswagen", "GTI", "Front");

console.log("The VW GTI object:" , vwGTI);
console.log("The details of VW GTI");
vwGTI.printDetails();

Aeroplane.prototype = new Vehicle("Aircraft");

var airbusA320 = new Aeroplane("Airbus", "A320", 2, "turbofan");
console.log("The airbus A320 object:", airbusA320);

console.log("The details of Airbus A320:");
airbusA320.printDetails(); //* This printDetails method was successfully inherited from Vehicle object constructor this is common to all instances of Aeroplane Objects

// *Multi-level inheritance Prototypes


/*
? So this references a number of fields which are defined all the way up in the prototype chain. So the reference to this.type will only be resolved when we go two levels up the prototype chain all the way up to the Vehicle. this.make, as well as this.model, and also the numEngines and engineType properties will be resolved by going one level up to the Airbus A320 object, which you will assign as a prototype. But the variantName, the factoryLocation and the wingspan will be available within the object itself. 

*/

function Airbus320(variantName, wingspan, factoryLocation){
    this.variantName = variantName;
    this.wingspan = wingspan;
    this.factoryLocation = factoryLocation;

    // * %s = string place holder, %i = integer place holder , %im integer+value
    this.printDetails = () => {
        console.log("This %s is a %s %s %s which was made in %s" + "and has a wingspan of %im. It has %i %s engines.", this.type, this.make, this.model, this.variantName, this.factoryLocation, this.wingspan, this.numEngines, this.EngineType);
    }
}

// *So for every instance of airbusA320, which we create, which will represent variants of that Aircraft, they will share the same airbusA320 with a lowercase a as the prototype. We can now create one such instance. So this is called a320neo. And this is going to have the properties of Neo as the variant name, as well as 36, which is the length in meters of the wingspan. And this is manufactured in the city of Hamburg in Germany.

Airbus320.prototype = airbusA320;

var a320neo = new Airbus320("Neo", 36, "Hamburg, Germany");

console.log("The details of Airbus A320neo:");
a320neo.printDetails();

// ?And once again, we are making references all the way up in the prototype chain in order to construct the print statement. And when we head over to the console, we can see that all of the different fields are indeed being accessed as expected. The value Aircraft is being accessed from the Vehicle prototype. The values Airbus and A320 come from the Aeroplane prototype, whereas the value of Neo came from the A320 object itself. So heading back to the console, we can now print out that a320neo object and view its contents.

// Object constructor for Employee
function Employee() {
    this.companyName = "XYZ";
    var empName = empName;
  }

  
  
  // Object constructor for FullTimeEmployee
  function FullTimeEmployee() {
    // No additional properties or methods in this example
  }
  
   // Setting the prototype of FullTimeEmployee to an instance of Employee
  FullTimeEmployee.prototype = new Employee();

  // Creating an instance of FullTimeEmployee
  var fullTimeEmp = new FullTimeEmployee();
  
 
  
  // Function within FullTimeEmployee accessing this.companyName
  FullTimeEmployee.prototype.getCompanyName = function() {
    console.log(this.companyName);
  };
  
  // Calling the function to access this.companyName
  fullTimeEmp.getCompanyName(); // Output: XYZ
  
//   function Determine(x){
   
//     this.getX = () => {
//         console.log(this.x);
//     }
//   }

//   let newX = new Determine();


//   newX.getX();

function MyObject() {
    var myVariable = "Hello";

    this.printText = () => {
       return myVariable;
    }
  }
  
  var obj = new MyObject();
 // Output: Hello
console.log( obj.printText() );
