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


