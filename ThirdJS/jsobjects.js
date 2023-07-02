"use strict";
// *Javascript objects is a collection of properties, where there's a property name and corresponding value. The syntax is object_name.objectkey it will return an undefined value if we access an undefined object property

let firstItem = {id: 1, deviceName: "laptop", price: 500};
let secondItem = {id: 2, deviceName: "smartphone", price: 700};
let thirdItem = {id: 3, deviceName: "tablet", price: 300};

// dot notation objectname.objectkeyvalue
console.log(`firstItem has a deviceName of ${firstItem.deviceName} and a price of ${firstItem.price}`);
// use as an associative array where we specifies the key in the square brackets and then this will return the corresponding value objectname[keyvalue]
console.log(`secondItem has a deviceName of ${secondItem["deviceName"]} and a price of ${secondItem["price"]}`);

console.log(`thirdItem has a deviceName of ${thirdItem.deviceName} and a price of ${thirdItem.price}`);

const PESO_USD = 55;

let fourthItem = {id: 4, 
    deviceName: "desktop", 
    price: 900, 
    brand: "ABC",
    priceUSD: this.price * PESO_USD}; //* this was an expression for the key:value pair which involves an operation and it's not possible have the value just set to an express and infact needs to be a function
    // *This will return NaN
    console.log("The price of fourth item is : ", fourthItem.priceUSD);

    // * modifying or redeclaring the fourth item old function declarion inside an object calling its own property by this keyword such as this.keyvalue
    fourthItem = {id: 4, 
        deviceName: "desktop", 
        price: 900, 
        brand: "ABC",
        priceUSD: function(){return this.price * PESO_USD;}}; //* assign a function propery and a blank parameter and adds curly braces which includes the function body with one line of return and operation

        // * using console log, calling the objectname.functionName by invoking it and not just by calling the property objectName.functionName() since functions in JS are considered first-class objects they can also be the values within objects
    console.log("Price of the fourth item in USD : ", fourthItem.priceUSD());

    // *using ES6 syntax to declare a function inside an object as values inside the object this means that directly adding the propery function as functionName(){code block}; works by using ES6 Syntax
    fourthItem = {id: 4, 
        deviceName: "desktop", 
        price: 900, 
        brand: "ABC",
        priceUSD(){return this.price * PESO_USD;}};
    
        console.log("Price of ES6 fourthItem in USD: ", fourthItem.priceUSD());

// * Removing properties in an OBJECT and modifying it after being initialized
fourthItem = {id: 4, 
    deviceName: "desktop", 
    price: 900, 
    brand: "ABC",
    priceUSD(){return this.price * PESO_USD;}};

    fourthItem.mfgCountry = "Philippines";
    console.log("The fourthItem is : ", fourthItem);

    // *Object creation
    let fifthItem = new Object();
    fifthItem.id = 5;
    fifthItem.mfgCountry = "Taiwan";
    fifthItem.price = 345;
    
    console.log("The fifthItem is : ", fifthItem)
    // * Deleting property inside an Object delete syntax + objectname.objectproperty
    delete fifthItem.price;
    console.log("a new object that has property deleted", fifthItem);

    // * this keyword
// * testing out if this keyword in a global window when used in global context
    console.log("Is this === window?", this === window);
    console.log("What is this?", this);

    var age = 35;
    console.log("window.age: ", window.age);
    console.log("this.age", this.age);

    this.age = 55;
    // window.age and this.age are pointing all to the same value global context points to the window object
    console.log("window.age: ", window.age);
    console.log("this.age", age);

    let someFunction = () => this;
    console.log("this returend from a function: ", someFunction());

    // declared an object with multiple properties through key:value pairs
    let myCar = {
        make: "Volvo",
        model: "a23",
        price: 70000,
        printDetails(){
            console.log(`
            Make: ${this.make}
            Model: ${this.model}
            price: ${this.price}`);
        },
        engine: {
            cylinders: 4,
            displacement: 2000,
            horsepower: 250,
            printDetails(){
                console.log(`
                Displacement: ${this.displacement}cc
                Horsepower: ${this.horsepower}bhp`);
            }
        }
    };
console.log("The field of myCar :");
// invoking printDetails() from myCard object
myCar.printDetails();
console.log("Engine Details:")
myCar.engine.printDetails();

// *Linking Functions to Objects
let myCar2 = {
    make: "Volvo",
    model: "a23",
    price: 70000,
    engine: {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250,}
};

// *
function printCarDetails(){
    console.log(`
    Make: ${this.make}
    Model: ${this.model}
    price: ${this.price}`);
};

function  printEngineDetails(){
    console.log(`
    Displacement: ${this.displacement}cc
    Horsepower: ${this.horsepower}bhp`);
};

console.log("New Car details: \n");
printCarDetails.call(myCar2);

console.log("New Engine Detials: \n");
printEngineDetails.call(myCar2.engine);

let myCar1 = {
    make: "Toyota",
    model: "Camry",
    price: 25000,
    engine: {
        cylinders: 4,
        displacement: 2000,
        horsepower: 180
    }
};

let myCar4 = {
    make: "Volvo",
    model: "S60",
    price: 40000,
    engine: {
        cylinders: 4,
        displacement: 2500,
        horsepower: 250
    }
};

let myCar3 = {
    make: "BMW",
    model: "X5",
    price: 60000,
    engine: {
        cylinders: 6,
        displacement: 3000,
        horsepower: 300
    }
};

console.log("This is myCar1: \n");
printCarDetails.call(myCar1);
console.log("This is myCar1 Engine: \n");
printEngineDetails.call(myCar1.engine);
console.log("This is myCar4: \n");
printCarDetails.call(myCar4);
console.log("This is myCar4 Engine: \n");
printEngineDetails.call(myCar4.engine);
console.log("This is myCar3: \n");
printCarDetails.call(myCar3);
console.log("This is myCar3 Engine: \n");
printEngineDetails.call(myCar3.engine);
