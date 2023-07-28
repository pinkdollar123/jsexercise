// instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(5);
  console.log(myHouse instanceof House);

//   Object parameters

function Dog(name, color, numLegs =4) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
  }
  
  let terrier = new Dog('Teri','yellow')

// *  understand own properties hasOwnProperties()

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for(let props in canary){
    if(canary.hasOwnProperty(props)){
      ownProps.push(props);
    }
  }
  
  console.log(ownProps);

//  * use prototyping Objectname.prototype.propertyname = value;

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

//   property checker using forloop and hasOwnProperty method

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for(let props in beagle){
    if(beagle.hasOwnProperty(props)){
      ownProps.push(props);
    }else{
      prototypeProps.push(props);
    }
  }

//   Understanding constructor property

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    }else{
      return false;
    }
  }

//   * A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:


function Bird(name){
    this.name = name;
}

Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
  
  };
  
  Dog.prototype ={
    numLegs: 4,
    eat(){
      console.log('Chuk chuk chuk');
    },
    describe(){
      console.log(`My name is ${this.name}`);
    }
  }
  

  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

//   *Understand Where an Object’s Prototype Comes From

Bird.prototype.isPrototypeOf(duck);

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  
  Dog.prototype.isPrototypeOf(beagle);

//   * Understand the Prototype Chain usign Object.prototype.IsPrototypeOf(object instance) The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.isPrototypeOf(Dog.prototype);

//   Object Supertype using DRY Don't Repeat Yourself, all objects has one similar factors being put to their supertype object.

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };


// * Object Inheritance Technique
// ? Object.create(objectsupertypename.prototype)

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

// * Set the Child's Prototype to an Instance of the Parent

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
// *1st step createa a prototype of subtype or child of a super set from Animal to Bird which is a subtype/child
// the Dog class now includes / inherits all the key properties in Animal
Dog.prototype = Object.create(Animal.prototype);
let zd = new Dog();

let beagle = new Dog();