"use strict";

// *Introduction to Prototypes

function Patient(id, name, address, bloodGroup){
    this.id = id;
    this.name = name;
    
    // * These variables below are infact private variables when creating objects in JS

    // ? this form part of a closure along with the printDetails()
    var _address = address;
    var _bloodGroup = bloodGroup; 

    // * the this.id and this.name was access using that this keyword
    // ? but the address and bloodGroup variables are accessed as is.
    // * We can recall that the definition of a closure is a function, which is bound together with all of the variables in its surrounding scope. 
    this.printDetails = function () {
        console.log(`Patient Details:
        ID: ${this.id}
        Name: ${this.name}
        Address: ${_address}
        Blood Group: ${_bloodGroup}`);
      }
}

var firstPatient = new Patient(1, "John Doe", "123 Main St", "A+");
// console.log(`The details of the first patient \n The object: \n`, firstPatient);

// console.log("ID is %s and the name is %s", firstPatient.id, firstPatient.name);

// console.log("From the outside, the address is %s and the blood group %s and it's not accessible through this invokation", firstPatient._address, firstPatient._bloodGroup);

// console.log("The invocation of printDetail gives us  the access to the private and part of closure function:");
// firstPatient.printDetails();

var secondPatient = new Patient(2, "Jane Smith", "456 Elm St", "B-");

console.log("The invocation of printDetails gives us:");
secondPatient.printDetails();

firstPatient.name = "Awra";
console.log("The invociation of printDetails after updating the name gives us:");
firstPatient.printDetails();

// * CLOSURES VARIABLES VS LOCAL VARIABLES IN GLOBAL SCOPES

// *global scope
const PI = 3;

// ? This is a Circle function constructor object
function Circle(r){
  this.radius = r;
}

let getAreaFirst = function(circle){
  console.log("Inside getAreaFirst");
  console.log("Area of circle:", PI * circle.radius * circle.radius);
}

// * Area of first circle
let firstCircle = new Circle(10);

// * Aim is to define nested function in this innerfunction
function innerFunction(){

  const PI = 3.1;

  let getAreaSecond = function(circle){
    console.log("Inside getAreaSecond");
    console.log("Area of circle:", PI * circle.radius * circle.radius);
  }

  let getAreaThird = function(circle){
    
    const PI = 3.14;
    console.log("Inside getAreaThird");
    console.log("Area of circle:", PI * circle.radius * circle.radius);
  }

  let getCircumference = function(circle){
    console.log("Inside getCircumference");
    console.log("Circumference of circle:",2 * PI * circle.radius * circle.radius);
  }

  let secondCircle = new Circle(20);
  console.log("The innerFunction: calling the functions with firstCircle:")
  
  getAreaFirst(firstCircle);
  // ? Even though getAreaFirst was invoked from inside innerFunction, the value of PI which getAreaFirst has referenced is the one which was declared within its immediate environment which is the global scope const PI = 3; which considered as the closure of the getAreaFirst

  getAreaSecond(firstCircle);
  //? The second invocation was getAreaSecond(firstCircle) referenced to inner function body of innerFunction which where const PI =3.1; was declared and in its closure environment getAreaSecond was defined inside the function body of innerFunction

  getCircumference(firstCircle);
  // * Similarly the third invocation from innerFunction follows the getCircumference closure which uses const PI = 3.1; was declared and in its closure environment getCircumference which means the outer declaration in its same level environment allows the usage of that variable inside the function within the same environment

  getAreaThird(firstCircle);
  // * We can see on this invocation that the local variables within the function body overrides the closure variables. Which means that even there's similar variable name outside its environment, the local variable within function body overrides it.

  console.log("InnerFunction: Calling the Functions with secondCircle:");
  
  getAreaFirst(secondCircle);
  // * This proves that the getAreaFirst() still uses the global variable const PI = 3 which is a closure made up of a function along with its enclosing environment and the rest of getAreaFunctions relies on their own enclosing environments or local variables
}

innerFunction();

console.log("Outside, calling the functions with firstCircle: ");
getAreaFirst(firstCircle);
console.log("Outside, calling the functions with secondCircle: ");
// getAreaFirst(secondCircle); // This will shows an Uncaught reference error since it's not defined on its enclosing environment

// *CLOSURES AND VARIABLES IN NESTED FUNCTIONS

function getAreaFourth(circle){
  const PI = 3.142; // ? MOST PRECISE of PI declarations so far

  function calculateArea(){
    console.log("Inside getAreaFourth");
    console.log("Area of circle:", PI* circle.radius * circle.radius);
  }

  return calculateArea;
}

console.log("The value of PI in this scope:" , PI);
// * This function to variable declaration assigns firstCircle as an argument to getAreaFourth function. The circle value was 10 and the other variable used was the PI of 3.142 inside getAreaFourth function body because it uses the closure variable inside the getAreaFourth fnBody the resulting value area of Circle
let circleArea = getAreaFourth(firstCircle);
// invoke circleArea()
circleArea(); // 314.2 from PI(3.142) * 10 * 10

