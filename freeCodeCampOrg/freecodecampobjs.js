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
  let ownProps1 = [];
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
  let beagle1 = new Dog("Snoopy");

//   property checker using forloop and hasOwnProperty method

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle3 = new Dog("Snoopy");
  
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
  
  let beagle4 = new Dog("Snoopy");
  
  // Only change code below this line
  
  Dog.prototype.isPrototypeOf(beagle);

//   * Understand the Prototype Chain usign Object.prototype.IsPrototypeOf(object instance) The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

function Dog(name) {
    this.name = name;
  }
  
  let beagle5 = new Dog("Snoopy");
  
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

let duck1 = Object.create(Animal.prototype); // Change this line
let beagle6 = Object.create(Animal.prototype); // Change this line

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

let beagle2 = new Dog();

// *Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle7 = new Dog();

// Add Methods After Inheritance*

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => {
  console.log(`Woof!`);
}
// Only change code above this line

let beagle = new Dog();

beagle.eat();
beagle.bark();

// *Override Inherited Methods syntax :
// ? ChildObject.prototype = Object.create(ParentObject.prototype);

// !If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

// duck => Is eat() defined here? No.
// Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// Object => JavaScript stopped searching before reaching this level.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = () => {
  return `Alas, this is a flightless bird.`;
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


// *Use Mixin to add common behavior

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = (gliders) => {
    gliders.glide = () => {
      console.log(`I can fly`);
    }
  }
  
  glideMixin(boat);
  glideMixin(bird);
  
  bird.glide();
  boat.glide();

//   *CLosures to protect and set propertyname to private inside an object constructor he simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
    let weight = 15;
  
    this.getWeight = () => {
      return weight;
    }
  }

  // * Understand the Immediately Invoked Function Expression (IIFE)

(function () {
    console.log("A cozy nest is ready");
  })();
  
  // ? Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

//  * An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }
  
// ! We can group these mixins into a module as follows: BELOW

let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();

//   * My answer for IIFE to create a module

let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  
  // ! We can group these mixins into a module as follows: BELOW

  let funModule = (()=>{
    return{
      isCuteMixin: (obj) =>{
        obj.isCute = () => {
          return true;
        }
      },
  
      singMixin: (obj) => {
        obj.sing = () => {
          console.log(`Singing to an awesome tune`);
        }
      },
  
    }
  
  })();
  